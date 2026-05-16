// ══════════════════════════════════════
// DATA
// ══════════════════════════════════════
console.log('scripts.js: loaded');
let TERMS_DATA = {};
let CATEGORIES = [];
let isWelcome = true;
let _loadingTerm = false;
let _bootComplete = false;

const ID_MAP = {
  ai: 'artificial-intelligence', ml: 'machine-learning', dl: 'deep-learning',
  nn: 'neural-network', 'training-data': 'training', parameters: 'parameter',
  weights: 'weight', backprop: 'backpropagation', activation: 'activation-function',
  'top-p': 'top-p-sampling', cot: 'chain-of-thought',
  'few-shot': 'few-shot-prompting', 'zero-shot': 'zero-shot-prompting',
  slm: 'small-language-model', 'vector-db': 'vector-database',
  'rate-limit': 'rate-limiting', agent: 'ai-agent',
  'memory-ai': 'memory-agent', 'multi-agent': 'multi-agent-system',
  hitl: 'human-in-the-loop', 'mcp-tools': 'tool-mcp',
  'mcp-resources': 'resource-mcp', 'mcp-prompts': 'prompt-mcp',
  sse: 'sse-transport', stdio: 'stdio-transport',
  genai: 'generative-ai', alignment: 'ai-alignment',
  'bias-ai': 'bias-in-ai', multimodal: 'multimodal-ai',
  xai: 'explainability-xai', endpoint: 'api-endpoint'
};

const REV_ID_MAP = {};
Object.keys(ID_MAP).forEach(k => { REV_ID_MAP[ID_MAP[k]] = k; });

// ══════════════════════════════════════
// DATA LOADING
// ══════════════════════════════════════
async function loadData() {
  const sidebarInner = document.getElementById('sidebarInner');
  if (sidebarInner) {
    sidebarInner.innerHTML = '<div style="padding:16px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-muted);">Loading…</div>';
  }
  try {
    const res = await fetch('data/terms.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    CATEGORIES = json.categories;
    CATEGORIES.forEach(cat => {
      cat.terms.forEach(t => {
        t.categoryName = cat.name;
        TERMS_DATA[t.id] = t;
      });
    });
    renderSidebar();
    updateStats();
    renderWelcomeGrid();
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value) runSearch(searchInput.value);
    if (location.hash) {
      const rawId = location.hash.slice(1);
      const id = ID_MAP[rawId] || rawId;
      if (TERMS_DATA[id]) loadTerm(rawId);
    }
    finishBoot();
  } catch (e) {
    console.warn('Terms data not loaded (fetch may not work from file://). Run a local server.');
    if (sidebarInner) {
      sidebarInner.innerHTML = '<div style="padding:16px 14px;font-family:var(--font-mono);font-size:11px;color:var(--color-muted);">Could not load terms.<br>Use a local server.</div>';
    }
    finishBoot();
  }
}

function finishBoot() {
  if (_bootComplete) return;
  _bootComplete = true;
  document.body.classList.remove('app-booting');
}

// ══════════════════════════════════════
// SIDEBAR RENDER
// ══════════════════════════════════════
function renderSidebar() {
  const container = document.getElementById('sidebarInner');
  const diffMap = { beginner: 'B', intermediate: 'I', advanced: 'A' };
  const diffClass = { beginner: 'b', intermediate: 'm', advanced: 'a' };
  container.innerHTML = CATEGORIES.map((cat) => {
    const catId = 'cat-' + cat.id;
    const termsHtml = cat.terms.map(t => `
      <div class="term-row" data-term-id="${t.id}" onclick="loadTerm('${t.id}')">
        <span class="term-row-name">${t.name}</span>
        <span class="diff ${diffClass[t.difficulty] || 'b'}">${diffMap[t.difficulty] || '?'}</span>
      </div>
    `).join('');
    return `
      <div class="cat collapsed" id="${catId}">
        <div class="cat-hdr" onclick="toggleCat('${catId}')">
          <div class="cat-dot" style="background:${cat.color}"></div>
          <span class="cat-name">${cat.name}</span>
          <span class="cat-count">${cat.terms.length}</span>
        </div>
        <div class="cat-terms">${termsHtml || '<div style="padding:6px 14px 6px 28px;font-size:11px;color:var(--muted);">Coming soon</div>'}</div>
      </div>
    `;
  }).join('');
}

function updateStats() {
  const total = Object.keys(TERMS_DATA).length;
  const cats = CATEGORIES.length;
  const pill = document.querySelector('.stat-pill');
  if (pill) pill.innerHTML = `<b>${total}</b> terms · <b>${cats}</b> categories · v0.1.0`;
}

// ══════════════════════════════════════
// WELCOME / HOME
// ══════════════════════════════════════
function closeSidebar() {
  const s = document.getElementById('sidebar');
  const o = document.getElementById('sidebar-overlay');
  if (s) s.classList.remove('open');
  if (o) o.classList.remove('active');
}

function showWelcome() {
  closeSidebar();
  document.body.classList.add('welcome-view');
  document.getElementById('welcomeView').style.display = 'flex';
  document.getElementById('termView').style.display = 'none';
  document.querySelectorAll('.term-row').forEach(r => r.classList.remove('active'));
  document.querySelectorAll('.cat').forEach(c => c.classList.add('collapsed'));
  isWelcome = true;
  const searchInput = document.getElementById('searchInput');
  if (searchInput && searchInput.value) runSearch(searchInput.value);
  else document.body.classList.remove('search-active');
  if (location.hash) history.replaceState(null, '', window.location.pathname);
}

function expandCat(catId) {
  isWelcome = false;
  const s = document.getElementById('sidebar');
  if (s) s.classList.add('open');
  if (document.body.classList.contains('welcome-view')) {
    const o = document.getElementById('sidebar-overlay');
    if (o) o.classList.add('active');
  }
  if (!document.getElementById(catId)) {
    const match = CATEGORIES.find(c => 'cat-' + c.id === catId || c.id === catId.replace('cat-', ''));
    if (match) catId = 'cat-' + match.id;
  }
  document.querySelectorAll('.cat').forEach(c => c.classList.add('collapsed'));
  const cat = document.getElementById(catId);
  if (cat) cat.classList.remove('collapsed');
}

// ══════════════════════════════════════
// WELCOME GRID RENDER
// ══════════════════════════════════════
function renderWelcomeGrid() {
  const grid = document.querySelector('.cat-grid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-card" style="--c-color:${cat.color}" onclick="expandCat('cat-${cat.id}')">
      <div class="cat-card-body">
        <div class="cat-card-name">${cat.name}</div>
        <div class="cat-card-count">${cat.terms.length} terms</div>
      </div>
      <div class="cat-card-icon">${cat.icon || '✦'}</div>
    </div>
  `).join('');
}

// ══════════════════════════════════════
// VISUAL RENDERING
// ══════════════════════════════════════
function renderVisual(data, slot) {
  if (!slot) return;
  if (data.visual === 'tokenizer') renderTokenizer(slot);
  else if (data.visual === 'mcp-flow') renderMCPFlow(slot);
  else if (data.visual === 'api-flow') renderAPIFlow(slot);
  else if (data.visual === 'chain-of-thought') renderChainOfThought(slot);
  else if (data.visual) slot.innerHTML = '<div class="vis-card"><div class="vis-card-body" style="text-align:center;color:var(--muted);padding:24px;">Interactive visual coming soon</div></div>';
}

// ══════════════════════════════════════
// RENDERING HELPERS
// ══════════════════════════════════════
function renderBodyText(text) {
  if (!text) return '<em style="color:var(--muted)">Coming soon.</em>';
  return text.split('\n\n')
    .map(para => `<p class="body-para">${para.trim()}</p>`)
    .join('');
}

function renderKeyPoints(points) {
  if (!points || !points.length) return '';
  return `
    <div class="key-points">
      <div class="key-points-lbl"> <i class="fa-solid fa-bolt-lightning"></i> Key Takeaways</div>
      <ul class="key-points-list">
        ${points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  `;
}

// ══════════════════════════════════════
// TAB PANEL CONTENT BUILDER
// ══════════════════════════════════════
function buildPanels(data) {
  const factsHtml = (data.facts || []).length ? `
    <div class="mini-stats">
      ${(data.facts || []).map(f => `
        <div class="mini-stat">
          <div class="mini-stat-lbl">${f.label || f.sub}</div>
          <div class="mini-stat-val">${f.value || f.val}</div>
        </div>
      `).join('')}
    </div>` : '';

  return {
    overview: `
      ${data.note ? `<pre class="freshness-note">${data.note}</pre>` : ''}
      <div>
        <div class="section-lbl">Plain English</div>
        <div class="body-text">${renderBodyText(data.plainEnglish)}</div>
      </div>
      <div class="analogy">
        <div class="analogy-lbl"><i class="fa-regular fa-lightbulb"></i> Analogy</div>
        <p>${data.analogy || 'Coming soon.'}</p>
      </div>
      ${renderKeyPoints(data.keyPoints)}
      ${factsHtml}
    `,
    how_it_works: `
      <div>
        <div class="section-lbl">Deeper Dive</div>
        <div class="body-text">${renderBodyText(data.howItWorks || data.deeper)}</div>
      </div>
      <div>
        <div class="section-lbl">Interactive Visual</div>
        <div id="visSlot"></div>
      </div>
    `,
    in_practice: `
      <div>
        <div class="section-lbl">In Practice</div>
        <div class="body-text">${renderBodyText(data.inPractice)}</div>
      </div>
    `,
    build_it: `
      <div>
        <div class="section-lbl">Build It</div>
        <div class="body-text">${data.buildIt || '<em style="color:var(--muted)">Coming soon for this term.</em>'}</div>
      </div>
    `,
  };
}

// ══════════════════════════════════════
// LOAD TERM
// ══════════════════════════════════════
function loadTerm(id) {
  if (_loadingTerm) return;
  id = ID_MAP[id] || id;
  document.body.classList.remove('welcome-view');
  document.body.classList.remove('search-active');
  closeMobileSidebar();
  const overlayEl = document.getElementById('sidebar-overlay');
  if (overlayEl) overlayEl.classList.remove('active');
  if (Object.keys(TERMS_DATA).length === 0) {
    setTimeout(() => loadTerm(id), 300);
    return;
  }
  _loadingTerm = true;

  try {
    document.getElementById('welcomeView').style.display = 'none';
    const tv = document.getElementById('termView');
    tv.style.display = 'flex';
    tv.innerHTML = '';
    isWelcome = false;

    document.querySelectorAll('.term-row').forEach(r => {
      const oc = r.getAttribute('onclick') || '';
      const origId = REV_ID_MAP[id] || id;
      if (oc.includes(`'${origId}'`) || oc.includes(`'${id}'`)) {
        r.classList.add('active');
      } else {
        r.classList.remove('active');
      }
    });

    const data = TERMS_DATA[id];
    if (!data) {
      const label = id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      tv.innerHTML = `
        <div class="term-hero term-view">
          <div class="hero-glow"></div>
          <div class="term-hero-content">
            <div class="breadcrumb">Browsing <span>›</span> ${label}</div>
            <div class="term-title">${label}</div>
            <div class="term-tagline">Full explanation coming soon.</div>
            <div class="term-pills"><span class="pill cat-pill">Coming soon</span></div>
          </div>
        </div>
        <div style="max-width:1024px; margin:0 auto; padding:36px 44px; font-family:'Inter',sans-serif; color:var(--color-muted); font-size:14px; line-height:1.7;">
          Coming soon.
        </div>
      `;
      location.hash = id;
      return;
    }

    location.hash = id;

    // ── Hero ──
    const hero = document.createElement('div');
    hero.className = 'term-hero term-view';
    hero.innerHTML = `
      <div class="hero-glow"></div>
      <div class="term-hero-content">
        <div class="breadcrumb">${data.categoryName} <span>›</span> ${data.name}</div>
        <div class="term-title">${data.name}</div>
        <div class="term-tagline">${data.tagline}</div>
        <div class="term-pills">
          <span class="pill cat-pill">${data.categoryName}</span>
          <span class="pill lvl-pill ${data.difficulty}">${data.difficulty.charAt(0).toUpperCase() + data.difficulty.slice(1)}</span>
        </div>
      </div>
    `;
    tv.appendChild(hero);

    const panels = buildPanels(data);

    // ── Tab bar ──
    const tabBar = document.createElement('div');
    tabBar.className = 'tabs';
    const tabsInner = document.createElement('div');
    tabsInner.className = 'tabs-inner';
    tabBar.appendChild(tabsInner);
    tv.appendChild(tabBar);

    // ── Layout ──
    const layout = document.createElement('div');
    layout.className = 'term-view-layout';
    const mainContent = document.createElement('div');
    mainContent.className = 'term-body';

    // ── Related terms sidebar ──
    const rightSidebar = document.createElement('div');
    rightSidebar.className = 'term-view-sidebar';
    const relatedHtml = (data.relatedTerms || data.related || []).map(r => {
      const target = TERMS_DATA[r] ? r : r.toLowerCase().replace(/\s+/g, '-');
      const name = TERMS_DATA[r] ? TERMS_DATA[r].name : r.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return `<div class="related-chip" onclick="loadTerm('${target}')">${name}</div>`;
    }).join('');
    rightSidebar.innerHTML = `
      <div class="term-view-sidebar-inner">
        <div class="section-lbl">Related Terms</div>
        <div class="related-wrap">${relatedHtml || '<span style="color:var(--muted);font-size:11px;">None</span>'}</div>
      </div>
    `;

    layout.appendChild(mainContent);
    layout.appendChild(rightSidebar);
    tv.appendChild(layout);

    // ── Panel switcher ──
    function showPanel(key) {
      mainContent.innerHTML = panels[key];
      if (key === 'how_it_works') {
        setTimeout(() => renderVisual(data, document.getElementById('visSlot')), 60);
      }
    }

    // ── Build tabs ──
    const tabDefs = [
      { key: 'overview',     label: 'Overview' },
      { key: 'how_it_works', label: 'How It Works' },
      { key: 'in_practice',  label: 'In Practice' },
      { key: 'build_it',     label: 'Build It' },
    ];
    tabDefs.forEach((t, i) => {
      const tab = document.createElement('div');
      tab.className = 'tab' + (i === 0 ? ' active' : '');
      tab.textContent = t.label;
      tab.onclick = () => {
        tabsInner.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
        tab.classList.add('active');
        showPanel(t.key);
      };
      tabsInner.appendChild(tab);
    });

    showPanel('overview');

  } finally {
    _loadingTerm = false;
  }
}

// ══════════════════════════════════════
// TOKENIZER
// ══════════════════════════════════════
function renderTokenizer(slot) {
  slot.innerHTML = `
    <div class="vis-card">
      <div class="vis-card-hdr">
        <span class="vis-card-title">Live Tokenizer  -  type anything to see it split into tokens</span>
        <span class="vis-card-badge">⚡ interactive</span>
      </div>
      <div class="vis-card-body">
        <textarea class="tok-textarea" id="tokInput" rows="2" placeholder="Type or paste any text…">Hello, how are you doing today?</textarea>
        <div class="tok-display" id="tokDisplay"></div>
        <div class="tok-stats">
          <div class="tok-stat"><strong id="tokCount">0</strong> tokens</div>
          <div class="tok-stat"><strong id="wordCount">0</strong> words</div>
          <div class="tok-stat"><strong id="costEst">$0.000000</strong> est. cost</div>
          <div class="tok-stat"><strong id="ctxPct">0%</strong> of 128K ctx</div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('tokInput').addEventListener('input', runTokenizer);
  runTokenizer();
}

function runTokenizer() {
  const text = document.getElementById('tokInput').value;
  const tokens = tokenize(text);
  const disp = document.getElementById('tokDisplay');
  disp.innerHTML = tokens.map((t, i) =>
    `<span class="tok-chip tok-c${i % 6}" style="animation-delay:${Math.min(i*0.02,0.5)}s">${t.replace(/ /g,'·').replace(/\n/g,'↵')}</span>`
  ).join('');
  const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  document.getElementById('tokCount').textContent = tokens.length;
  document.getElementById('wordCount').textContent = words;
  document.getElementById('costEst').textContent = '$' + (tokens.length * 0.0000025).toFixed(6);
  document.getElementById('ctxPct').textContent = ((tokens.length / 128000) * 100).toFixed(4) + '%';
}

function tokenize(text) {
  if (!text.trim()) return [];
  const out = [];
  const re = /\s+|[^\s\w]|\w+/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    const w = match[0];
    if (w.length > 7 && /\w/.test(w)) {
      let i = 0;
      while (i < w.length) { const l = Math.random() < 0.5 ? 3 : 4; out.push(w.slice(i, i+l)); i += l; }
    } else if (w.trim() || out.length === 0) { out.push(w); }
    else { out[out.length-1] += w; }
  }
  return out.filter(t => t.length);
}

// ══════════════════════════════════════
// MCP FLOW SVG
// ══════════════════════════════════════
function renderMCPFlow(slot) {
  slot.innerHTML = `
    <div class="vis-card">
      <div class="vis-card-hdr">
        <span class="vis-card-title">MCP Architecture  -  click any component to learn what it does</span>
        <span class="vis-card-badge">⚡ interactive</span>
      </div>
      <div class="vis-card-body" style="padding:0">
        <svg id="mcpSvg" viewBox="0 0 760 300" width="100%" style="display:block">
          <defs>
            <marker id="arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#2d3a52"/>
            </marker>
          </defs>
          <rect width="760" height="300" fill="#0e1522"/>
          <g stroke="rgba(255,255,255,0.025)" stroke-width="1">
            <line x1="0" y1="75" x2="760" y2="75"/><line x1="0" y1="150" x2="760" y2="150"/>
            <line x1="0" y1="225" x2="760" y2="225"/>
            <line x1="190" y1="0" x2="190" y2="300"/><line x1="380" y1="0" x2="380" y2="300"/>
            <line x1="570" y1="0" x2="570" y2="300"/>
          </g>
          <text x="95" y="28" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#2d3a52" letter-spacing="1">HOST</text>
          <text x="285" y="28" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#2d3a52" letter-spacing="1">CLIENT</text>
          <text x="475" y="28" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#2d3a52" letter-spacing="1">SERVER</text>
          <text x="665" y="28" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#2d3a52" letter-spacing="1">TOOLS</text>
          <line x1="175" y1="148" x2="248" y2="148" stroke="#2d3a52" stroke-width="1.5" marker-end="url(#arr)" stroke-dasharray="5 3"/>
          <line x1="365" y1="148" x2="438" y2="148" stroke="#2d3a52" stroke-width="1.5" marker-end="url(#arr)" stroke-dasharray="5 3"/>
          <line x1="553" y1="120" x2="618" y2="100" stroke="#2d3a52" stroke-width="1.2" marker-end="url(#arr)" stroke-dasharray="4 3"/>
          <line x1="553" y1="148" x2="618" y2="148" stroke="#2d3a52" stroke-width="1.2" marker-end="url(#arr)" stroke-dasharray="4 3"/>
          <line x1="553" y1="176" x2="618" y2="196" stroke="#2d3a52" stroke-width="1.2" marker-end="url(#arr)" stroke-dasharray="4 3"/>
          <line id="flowLine" x1="365" y1="141" x2="438" y2="141" stroke="#6366f1" stroke-width="2" opacity="0" stroke-dasharray="8 4">
            <animate attributeName="stroke-dashoffset" from="24" to="0" dur="0.7s" repeatCount="indefinite"/>
          </line>
          <g id="nodeHost" onclick="mcpClick('host')" style="cursor:pointer">
            <rect x="22" y="112" width="145" height="72" rx="0" fill="#111827" stroke="#2d3a52" stroke-width="1.5" id="rectHost"/>
            <rect x="22" y="112" width="145" height="3" rx="1.5" fill="#6366f1"/>
            <text x="94" y="136" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#e2e8f4">MCP Host</text>
            <text x="94" y="151" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#4a5a78">Claude Desktop</text>
            <text x="94" y="164" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#4a5a78">Cursor · VS Code</text>
            <circle cx="94" cy="179" r="2.5" fill="#6366f1" opacity="0.6"><animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/></circle>
          </g>
          <g id="nodeClient" onclick="mcpClick('client')" style="cursor:pointer">
            <rect x="255" y="112" width="105" height="72" rx="0" fill="#111827" stroke="#2d3a52" stroke-width="1.5" id="rectClient"/>
            <rect x="255" y="112" width="105" height="3" rx="1.5" fill="#38bdf8"/>
            <text x="307" y="140" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#e2e8f4">MCP Client</text>
            <text x="307" y="158" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#38bdf8">built-in to host</text>
            <text x="307" y="176" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#2d3a52">speaks MCP</text>
          </g>
          <g id="nodeServer" onclick="mcpClick('server')" style="cursor:pointer">
            <rect x="445" y="112" width="105" height="72" rx="0" fill="#111827" stroke="#2d3a52" stroke-width="1.5" id="rectServer"/>
            <rect x="445" y="112" width="105" height="3" rx="1.5" fill="#f59e0b"/>
            <text x="497" y="140" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#e2e8f4">MCP Server</text>
            <text x="497" y="158" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#f59e0b">you build this</text>
            <text x="497" y="176" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#2d3a52">exposes tools</text>
          </g>
          <g onclick="mcpClick('tools')" style="cursor:pointer">
            <rect x="625" y="82" width="112" height="28" rx="0" fill="#1a2235" stroke="#2d3a52" stroke-width="1"/>
            <text x="681" y="100" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#94a3b8">🌐 Web Search</text>
          </g>
          <g onclick="mcpClick('tools')" style="cursor:pointer">
            <rect x="625" y="134" width="112" height="28" rx="0" fill="#1a2235" stroke="#2d3a52" stroke-width="1"/>
            <text x="681" y="153" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#94a3b8">📁 File System</text>
          </g>
          <g onclick="mcpClick('tools')" style="cursor:pointer">
            <rect x="625" y="186" width="112" height="28" rx="0" fill="#1a2235" stroke="#2d3a52" stroke-width="1"/>
            <text x="681" y="205" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#94a3b8">🗃️ Database</text>
          </g>
          <rect x="258" y="226" width="180" height="20" rx="4" fill="#0e1522" stroke="#1a2235" stroke-width="1"/>
          <text x="348" y="240" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#2d3a52">Transport: stdio · SSE · HTTP</text>
        </svg>
        <div id="mcpInfo" style="padding:14px 20px; border-top:1px solid var(--color-border); font-family:'Inter',sans-serif; font-size:13px; color:var(--color-text2); min-height:50px; display:flex; align-items:center;">
          <span style="color:var(--color-muted); font-style:italic;">↑ Click any component above to learn what it does.</span>
        </div>
      </div>
    </div>
  `;
}

const mcpText = {
  host: '🖥️ <b style="color:#e2e8f4">MCP Host</b>  -  The app you use (Claude Desktop, Cursor, VS Code). It contains a built-in MCP client and orchestrates which servers are connected and when the AI can call them.',
  client: '🔗 <b style="color:#38bdf8">MCP Client</b>  -  Lives inside the host. Speaks the MCP protocol. Discovers what tools a server offers, then routes tool calls from the AI model to the right server and returns the result.',
  server: '⚙️ <b style="color:#f59e0b">MCP Server</b>  -  A small program you or someone builds. It exposes tools, resources, or prompts over the MCP protocol. It might connect to a database, a REST API, your file system, or any external service.',
  tools: '🔧 <b style="color:#e2e8f4">Tools / Services</b>  -  The actual capabilities an MCP server wraps and exposes. Web search, file access, calendar, code execution, databases  -  anything the server connects to becomes a callable tool for the AI.'
};

function mcpClick(node) {
  const info = document.getElementById('mcpInfo');
  if (info) info.innerHTML = mcpText[node] || '';
  ['Host','Client','Server'].forEach(n => {
    const r = document.getElementById('rect'+n);
    if (r) { r.style.stroke = '#2d3a52'; r.style.strokeWidth = '1.5'; }
  });
  const rectId = 'rect' + node.charAt(0).toUpperCase() + node.slice(1);
  const rect = document.getElementById(rectId);
  if (rect) { rect.style.stroke = '#6366f1'; rect.style.strokeWidth = '2'; }
  const fl = document.getElementById('flowLine');
  if (fl && (node === 'client' || node === 'server')) {
    fl.style.opacity = '1';
    setTimeout(() => { fl.style.opacity = '0'; }, 2200);
  }
}

// ══════════════════════════════════════
// API FLOW SVG
// ══════════════════════════════════════
function renderAPIFlow(slot) {
  slot.innerHTML = `
    <div class="vis-card">
      <div class="vis-card-hdr">
        <span class="vis-card-title">API Call Flow  -  watch a request travel from your code to the model and back</span>
        <span class="vis-card-badge">⚡ animated</span>
      </div>
      <div class="vis-card-body" style="padding:0">
        <svg viewBox="0 0 760 220" width="100%" style="display:block">
          <defs>
            <marker id="a2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L7,3 z" fill="#2d3a52"/>
            </marker>
          </defs>
          <rect width="760" height="220" fill="#0e1522"/>
          <g stroke="rgba(255,255,255,0.025)">
            <line x1="190" y1="0" x2="190" y2="220"/><line x1="380" y1="0" x2="380" y2="220"/>
            <line x1="570" y1="0" x2="570" y2="220"/>
          </g>
          <text x="95" y="24" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#2d3a52" letter-spacing="1">YOUR CODE</text>
          <text x="285" y="24" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#2d3a52" letter-spacing="1">HTTP REQUEST</text>
          <text x="475" y="24" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#2d3a52" letter-spacing="1">AI MODEL</text>
          <text x="665" y="24" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#2d3a52" letter-spacing="1">RESPONSE</text>
          <rect x="18" y="85" width="155" height="60" rx="0" fill="#111827" stroke="#2d3a52" stroke-width="1.5"/>
          <rect x="18" y="85" width="155" height="3" rx="0" fill="#6366f1"/>
          <text x="95" y="107" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#e2e8f4">Your App</text>
          <text x="95" y="122" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#4a5a78">POST /v1/messages</text>
          <text x="95" y="135" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#4a5a78">+ API key + prompt</text>
          <line x1="175" y1="115" x2="205" y2="115" stroke="#2d3a52" stroke-width="1.5" marker-end="url(#a2)"/>
          <circle r="3.5" fill="#6366f1" opacity="0.85"><animateMotion dur="2.2s" repeatCount="indefinite" begin="0s"><mpath href="#p1"/></animateMotion></circle>
          <path id="p1" d="M175,115 L375,115" fill="none"/>
          <rect x="208" y="85" width="165" height="60" rx="0" fill="#111827" stroke="#2d3a52" stroke-width="1.5"/>
          <rect x="208" y="85" width="165" height="3" rx="0" fill="#38bdf8"/>
          <text x="290" y="107" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#e2e8f4">HTTP Request</text>
          <text x="290" y="122" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#38bdf8">POST</text>
          <text x="315" y="122" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#4a5a78"> · JSON body</text>
          <text x="290" y="136" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#4a5a78">Bearer sk-ant-…</text>
          <line x1="375" y1="115" x2="400" y2="115" stroke="#2d3a52" stroke-width="1.5" marker-end="url(#a2)"/>
          <circle r="3.5" fill="#38bdf8" opacity="0.85"><animateMotion dur="2.2s" repeatCount="indefinite" begin="0.45s"><mpath href="#p2"/></animateMotion></circle>
          <path id="p2" d="M375,115 L562,115" fill="none"/>
          <rect x="402" y="72" width="158" height="86" rx="0" fill="#111827" stroke="#2d3a52" stroke-width="1.5"/>
          <rect x="402" y="72" width="158" height="3" rx="0" fill="#8b5cf6"/>
          <text x="481" y="96" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#e2e8f4">AI Model</text>
          <text x="481" y="111" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#4a5a78">tokenize prompt</text>
          <text x="481" y="124" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#4a5a78">run inference</text>
          <text x="481" y="137" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#4a5a78">generate tokens</text>
          <circle cx="481" cy="152" r="2.5" fill="#8b5cf6"><animate attributeName="opacity" values="1;0.3;1" dur="1.1s" repeatCount="indefinite"/></circle>
          <line x1="562" y1="115" x2="590" y2="115" stroke="#2d3a52" stroke-width="1.5" marker-end="url(#a2)"/>
          <circle r="3.5" fill="#f59e0b" opacity="0.85"><animateMotion dur="2.2s" repeatCount="indefinite" begin="0.95s"><mpath href="#p3"/></animateMotion></circle>
          <path id="p3" d="M562,115 L738,115" fill="none"/>
          <rect x="592" y="85" width="152" height="60" rx="0" fill="#111827" stroke="#2d3a52" stroke-width="1.5"/>
          <rect x="592" y="85" width="152" height="3" rx="0" fill="#f59e0b"/>
          <text x="668" y="107" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#e2e8f4">JSON Response</text>
          <text x="668" y="122" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#f59e0b">content[0].text</text>
          <text x="668" y="136" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="#4a5a78">usage · stop_reason</text>
        </svg>
        <div style="padding:12px 20px 16px; border-top:1px solid var(--color-border); display:grid; grid-template-columns:repeat(4,1fr); gap:10px;">
          <div style="font-family:'JetBrains Mono',monospace; font-size:9.5px; color:var(--color-muted); line-height:1.6">
            <div style="color:var(--color-accent); margin-bottom:3px; font-size:10px">① Your Code</div>
            Send a POST with API key, model name, and a messages array in JSON
          </div>
          <div style="font-family:'JetBrains Mono',monospace; font-size:9.5px; color:var(--color-muted); line-height:1.6">
            <div style="color:var(--color-sky); margin-bottom:3px; font-size:10px">② HTTP Request</div>
            Travels to AI provider servers over HTTPS with auth headers
          </div>
          <div style="font-family:'JetBrains Mono',monospace; font-size:9.5px; color:var(--color-muted); line-height:1.6">
            <div style="color:#8b5cf6; margin-bottom:3px; font-size:10px">③ AI Model</div>
            Tokenizes input, runs the neural network, streams output tokens
          </div>
          <div style="font-family:'JetBrains Mono',monospace; font-size:9.5px; color:var(--color-muted); line-height:1.6">
            <div style="color:var(--color-amber); margin-bottom:3px; font-size:10px">④ Response</div>
            JSON object: the text, token counts, stop reason, model used
          </div>
        </div>
      </div>
    </div>
  `;
}

// ══════════════════════════════════════
// SIDEBAR TOGGLE
// ══════════════════════════════════════
function toggleCat(id) {
  document.getElementById(id).classList.toggle('collapsed');
}

// ══════════════════════════════════════
// SEARCH
// ══════════════════════════════════════
function normalizeSearch(value) {
  return (value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function getTermPrimarySearchText(term) {
  if (!term) return '';
  return normalizeSearch([
    term.id,
    term.name,
    term.categoryName,
    term.difficulty,
    term.tagline,
    ...(term.relatedTerms || []),
  ].filter(Boolean).join(' '));
}

function getTermDeepSearchText(term) {
  if (!term) return '';
  return normalizeSearch([
    term.plainEnglish,
    term.analogy,
    term.howItWorks,
    term.inPractice,
    ...(term.keyPoints || []),
  ].filter(Boolean).join(' '));
}

function getTermMatchRank(term, q) {
  if (!term || !q) return 0;
  const name = normalizeSearch(term.name);
  const id = normalizeSearch(term.id);
  const category = normalizeSearch(term.categoryName);
  const primary = getTermPrimarySearchText(term);

  if (name === q || id === q) return 100;
  if (name.startsWith(q) || id.startsWith(q)) return 90;
  if (category === q) return 80;
  if (q.length < 3) return 0;
  if (category.includes(q)) return 70;
  if (primary.includes(q)) return 60;
  if (q.length >= 3 && getTermDeepSearchText(term).includes(q)) return 30;
  return 0;
}

function renderHomeSearchResults(q) {
  const resultsEl = document.getElementById('homeSearchResults');
  const grid = document.querySelector('.cat-grid');
  if (!resultsEl || !grid) return;

  if (!q || !document.body.classList.contains('welcome-view')) {
    document.body.classList.remove('search-active');
    resultsEl.style.display = 'none';
    resultsEl.innerHTML = '';
    grid.style.display = '';
    return;
  }

  document.body.classList.add('search-active');
  const matches = CATEGORIES
    .flatMap(cat => cat.terms.map(term => TERMS_DATA[term.id] || { ...term, categoryName: cat.name }))
    .map(term => ({ term, rank: getTermMatchRank(term, q) }))
    .filter(item => item.rank > 0)
    .sort((a, b) => b.rank - a.rank || a.term.name.localeCompare(b.term.name))
    .map(item => item.term);

  grid.style.display = 'none';
  resultsEl.style.display = 'block';

  if (!matches.length) {
    resultsEl.innerHTML = `
      <div class="search-results-head">No matching terms</div>
      <div class="search-empty">Try a term like "token", "agent", "embedding", or "fine-tuning".</div>
    `;
    return;
  }

  const visibleMatches = matches.slice(0, 36);
  resultsEl.innerHTML = `
    <div class="search-results-head">
      <span>${matches.length} matching ${matches.length === 1 ? 'term' : 'terms'}</span>
      <span class="search-results-note">Title, category, and directly related glossary matches first</span>
    </div>
    <div class="search-results-grid">
      ${visibleMatches.map(term => `
        <a class="search-result-card" href="#${term.id}" data-term-id="${term.id}">
          <span class="search-result-kicker">${term.categoryName || 'AI term'} · ${term.difficulty || 'beginner'}</span>
          <span class="search-result-title">${term.name}</span>
          <span class="search-result-desc">${term.tagline || term.plainEnglish || 'Explanation coming soon.'}</span>
        </a>
      `).join('')}
    </div>
  `;
}

function runSearch(rawQuery) {
  const q = normalizeSearch(rawQuery);
  const clearBtn = document.getElementById('searchClear');
  if (clearBtn) clearBtn.style.display = q ? 'inline-flex' : 'none';
  renderHomeSearchResults(q);

  if (!q) {
    document.querySelectorAll('.term-row').forEach(r => r.style.display = '');
    document.querySelectorAll('.cat').forEach(cat => cat.style.display = '');
    return;
  }
  document.querySelectorAll('.term-row').forEach(r => {
    const term = TERMS_DATA[r.dataset.termId];
    const name = normalizeSearch(r.querySelector('.term-row-name').textContent);
    r.style.display = (term ? getTermMatchRank(term, q) > 0 : name.includes(q)) ? '' : 'none';
  });
  document.querySelectorAll('.cat').forEach(cat => {
    const anyVisible = [...cat.querySelectorAll('.term-row')].some(r => r.style.display !== 'none');
    cat.style.display = anyVisible ? '' : 'none';
    if (anyVisible) cat.classList.remove('collapsed');
  });
}

const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    runSearch(this.value);
  });
}
if (searchClear && searchInput) {
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    runSearch('');
    searchInput.focus();
  });
}

// ══════════════════════════════════════
// MOBILE SIDEBAR
// ══════════════════════════════════════
function closeMobileSidebar() {
  if (window.innerWidth > 768) return;
  closeSidebar();
}

// ══════════════════════════════════════
// DOM READY  -  event wiring
// ══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Sidebar toggle
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  if (sidebarToggle && sidebar && sidebarOverlay) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('active');
    });
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Click welcome background to collapse sidebar
  const welcomeView = document.getElementById('welcomeView');
  if (welcomeView) {
    welcomeView.addEventListener('click', (e) => {
      const resultCard = e.target.closest('.search-result-card');
      if (resultCard?.dataset.termId) {
        loadTerm(resultCard.dataset.termId);
        return;
      }
      if (e.target.closest('.cat-card')) return;
      closeSidebar();
    });
  }

  // Footer menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const footerMenu = document.getElementById('footer-menu');
  if (menuToggle && footerMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.preventDefault();
      footerMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!footerMenu.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
        footerMenu.classList.add('hidden');
      }
    });
  }

  // Share button  -  copies current URL to clipboard
  const shareBtn = document.getElementById('share-love-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href).then(() => {
        const orig = shareBtn.textContent;
        shareBtn.textContent = '[link copied!]';
        setTimeout(() => { shareBtn.textContent = orig; }, 2000);
      }).catch(() => {
        window.prompt('Copy this link:', window.location.href);
      });
    });
  }
});

// ══════════════════════════════════════
// HASH ROUTING
// ══════════════════════════════════════
window.addEventListener('hashchange', () => {
  if (_loadingTerm) return;
  const rawId = location.hash.slice(1);
  const id = ID_MAP[rawId] || rawId;
  if (rawId && TERMS_DATA[id]) loadTerm(rawId);
  else if (!rawId) showWelcome();
});

// ══════════════════════════════════════
// BOOT
// ══════════════════════════════════════
if (!location.hash) showWelcome();
document.getElementById('welcomeView').style.display = location.hash ? 'none' : 'flex';
loadData();
