// AI BASICS INTERACTIVE VISUALS
// CSS-driven interactive demos — no SVG/Canvas. Reliable for AI agents to author.

function renderProgrammingVsAI(slot) {
  const scenarios = [
    { key: 'login', label: 'Login rule', prog: 'IF password matches THEN allow login ELSE block', progOut: 'Allowed or blocked', ai: 'Learns device, location, & typing patterns from past logins', aiOut: 'Low risk: allow' },
    { key: 'spam', label: 'Spam filter', prog: 'IF phrase contains "win cash" THEN mark spam', progOut: 'Marked spam', ai: 'Learns suspicious phrases, sender reputation, link patterns from examples', aiOut: '93% likely spam' },
    { key: 'photo', label: 'Pet photo', prog: 'IF whiskers AND pointy ears THEN cat ELSE unknown', progOut: 'Unknown if rule misses', ai: 'Learns fur texture, ear shape, face proportions from labelled photos', aiOut: '82% likely cat' }
  ];
  let idx = 0;
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Programming vs AI — same task, different approach</span><span class="vis-card-badge">interactive</span></div><div class="vis-card-body"><div class="interactive-row" id="pv-scenarios">' + scenarios.map((s, i) => '<button class="interactive-btn' + (i === 0 ? ' active' : '') + '" data-pv="' + s.key + '">' + s.label + '</button>').join('') + '</div><div id="pv-content" class="interactive-panel"></div></div></div>';
  function draw(i) {
    const s = scenarios[i];
    idx = i;
    slot.querySelectorAll('[data-pv]').forEach(function (b) { b.classList.toggle('active', b.dataset.pv === s.key); });
    document.getElementById('pv-content').innerHTML = '<div class="interactive-compare"><div class="interactive-compare-card"><div class="interactive-compare-hdr" style="color:#f5a623">Traditional programming</div><div class="interactive-compare-body"><p style="margin-bottom:8px;font-size:13px;color:var(--color-text)"><b>Input:</b> ' + s.label + '</p><div style="font-family:JetBrains Mono,monospace;font-size:11px;color:var(--color-muted);background:var(--color-bg);padding:10px;border-radius:4px;margin-bottom:8px">' + s.prog + '</div><p style="font-size:13px;color:var(--color-text)"><b>Output:</b> ' + s.progOut + '</p><p style="margin-top:8px;font-size:11px;color:#f5a623">Human writes rules before the computer can act.</p></div></div><div class="interactive-compare-card highlight"><div class="interactive-compare-hdr" style="color:#38bdf8">AI / Machine Learning</div><div class="interactive-compare-body"><p style="margin-bottom:8px;font-size:13px;color:var(--color-text)"><b>Input:</b> ' + s.ai + '</p><p style="font-size:13px;color:var(--color-text);margin-top:8px"><b>Output:</b> ' + s.aiOut + '</p><p style="margin-top:8px;font-size:11px;color:#38bdf8">Human gives examples. The model learns patterns from them.</p></div></div></div>';
  }
  slot.querySelectorAll('[data-pv]').forEach(function (b) { b.addEventListener('click', function () { draw(scenarios.findIndex(function (s) { return s.key === b.dataset.pv; })); }); });
  draw(0);
}

function renderPatternLearner(slot) {
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Machine learning learns from examples</span><span class="vis-card-badge">explainer</span></div><div class="vis-card-body"><div class="interactive-compare"><div class="interactive-compare-card"><div class="interactive-compare-hdr" style="color:#10b981">1. Training</div><div class="interactive-compare-body"><p style="font-size:12px;line-height:1.6">Give the model thousands of labelled examples (spam / not spam). It finds patterns: suspicious words, sender reputation, link patterns.</p></div></div><div class="interactive-compare-card highlight"><div class="interactive-compare-hdr" style="color:#38bdf8">2. Prediction</div><div class="interactive-compare-body"><p style="font-size:12px;line-height:1.6">Give it a new email. It compares against the learned patterns and says: "93% likely spam". No rules needed.</p></div></div></div><div class="interactive-panel" style="margin-top:10px;font-size:11px;color:var(--color-muted);text-align:center">The model learned a boundary between spam and safe emails — not from rules, but from examples.</div></div></div>';
}

function renderLayerProgression(slot) {
  const stages = [
    { label: 'Pixels', headline: 'Layer 1 — Raw pixels', note: 'The network receives a grid of color numbers. No ears or eyes — just values like 214, 87, 31.', tag: 'Input' },
    { label: 'Edges', headline: 'Layer 2 — Edges detected', note: 'Early layers spot where colors change sharply. Those transitions are edges: the outline of an ear, the curve of a jaw.', tag: 'Early' },
    { label: 'Parts', headline: 'Layer 3 — Parts recognised', note: 'Middle layers combine edges into shapes. Now it sees two ears, two eyes, and whiskers.', tag: 'Middle' },
    { label: 'Object', headline: 'Layer 4 — Object identified', note: 'Deepest layers combine parts into one answer: ears + eyes + whiskers = cat (94% confident).', tag: 'Output' }
  ];
  let idx = 0;
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Deep learning — how a neural net sees a cat</span><span class="vis-card-badge">interactive</span></div><div class="vis-card-body"><div class="interactive-row" id="ly-stages">' + stages.map(function (s, i) { return '<button class="interactive-btn' + (i === 0 ? ' active' : '') + '" data-ly="' + i + '">' + s.label + '</button>'; }).join('') + '</div><div id="ly-content" class="interactive-panel"><div class="interactive-card"><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;padding:2px 8px;border-radius:3px;background:var(--color-bg);color:var(--color-muted)" id="ly-tag">Input</span><span style="font-size:10px;color:var(--color-muted)" id="ly-step">1 / 4</span></div><div style="font-size:15px;font-weight:700;color:var(--color-text);margin-bottom:8px" id="ly-headline">Layer 1 — Raw pixels</div><div style="font-size:12px;color:var(--color-text2);line-height:1.6" id="ly-note">The network receives a grid of color numbers. No ears or eyes — just values like 214, 87, 31.</div></div></div></div></div>';
  function draw(i) {
    const s = stages[i];
    idx = i;
    slot.querySelectorAll('[data-ly]').forEach(function (b) { b.classList.toggle('active', parseInt(b.dataset.ly) === i); });
    var el = document.getElementById('ly-content');
    if (!el) return;
    el.innerHTML = '<div class="interactive-card"><div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;padding:2px 8px;border-radius:3px;background:var(--color-bg);color:var(--color-muted)">' + s.tag + '</span><span style="font-size:10px;color:var(--color-muted)">' + (i + 1) + ' / 4</span></div><div style="font-size:15px;font-weight:700;color:var(--color-text);margin-bottom:8px">' + s.headline + '</div><div style="font-size:12px;color:var(--color-text2);line-height:1.6">' + s.note + '</div></div>';
  }
  slot.querySelectorAll('[data-ly]').forEach(function (b) { b.addEventListener('click', function () { draw(parseInt(b.dataset.ly)); }); });
  draw(0);
}

function renderParameterSize(slot) {
  const models = [
    { label: '1M', name: 'Spam filter', trade: 'Extremely fast — one narrow job', cost: '< $1K', speed: 'Instant' },
    { label: '10M', name: 'DistilBERT', trade: 'Runs on a phone', cost: '~$5K', speed: 'Very fast' },
    { label: '100M', name: 'BERT / GPT-2', trade: 'Practical production apps', cost: '~$100K', speed: 'Fast' },
    { label: '1B', name: 'Llama 3.2', trade: 'Runs locally, needs a GPU', cost: '~$1M', speed: 'Moderate' },
    { label: '70B', name: 'Llama 3 70B', trade: 'Near-frontier quality', cost: '~$50M', speed: 'Slow' },
    { label: '1T', name: 'GPT-4 scale', trade: 'Broadest capability, massive infra', cost: '$100M+', speed: 'Specialized' }
  ];
  const colors = ['#6366f1', '#6366f1', '#6366f1', '#38bdf8', '#38bdf8', '#8b5cf6'];
  let val = 2;
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Model scale — parameters determine capability</span><span class="vis-card-badge">interactive</span></div><div class="vis-card-body"><div class="interactive-card" style="margin-bottom:12px"><label style="font-size:11px;color:var(--color-muted);display:block;margin-bottom:6px">Drag to explore model sizes</label><input type="range" id="ps-slider" min="0" max="5" value="2" style="width:100%;cursor:pointer"></div><div id="ps-detail" class="interactive-card" style="margin-bottom:12px"></div><div id="ps-bars"></div></div></div>';
  function draw(i) {
    val = i;
    const m = models[i];
    document.getElementById('ps-detail').innerHTML = '<div style="display:grid;grid-template-columns:auto 1fr;gap:10px"><div><div style="font-family:JetBrains Mono,monospace;font-size:24px;font-weight:700;color:' + colors[i] + '">' + m.label + '</div><div style="font-size:11px;color:#38bdf8;font-weight:600;margin-top:2px">' + m.name + '</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;align-content:start"><div><div style="font-size:10px;font-weight:600;color:var(--color-muted);text-transform:uppercase;letter-spacing:0.04em">Trade-off</div><div style="font-size:11px;color:var(--color-text);line-height:1.4">' + m.trade + '</div></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px"><div><div style="font-size:10px;color:var(--color-muted);text-transform:uppercase">Cost</div><div style="font-family:JetBrains Mono;font-size:12px;font-weight:700;color:var(--color-amber)">' + m.cost + '</div></div><div><div style="font-size:10px;color:var(--color-muted);text-transform:uppercase">Speed</div><div style="font-family:JetBrains Mono;font-size:12px;font-weight:700;color:#10b981">' + m.speed + '</div></div></div></div></div>';
    document.getElementById('ps-bars').innerHTML = '<div class="interactive-bar-wrap"><div style="font-size:10px;color:var(--color-muted);margin-bottom:8px">Capacity</div>' + models.map(function (m2, j) { return '<div class="interactive-bar"><span class="interactive-bar-label" style="min-width:40px;font-family:JetBrains Mono;font-size:10px;color:' + colors[j] + '">' + m2.label + '</span><div class="interactive-bar-fill" style="width:' + ((j <= i ? (j + 1) * 16 : 4)) + 'px;background:' + colors[j] + ';opacity:' + (j <= i ? '1' : '0.3') + '"></div><span style="font-size:10px;color:var(--color-muted)">' + m2.name + '</span></div>'; }).join('') + '</div>';
  }
  document.getElementById('ps-slider').addEventListener('input', function () { draw(parseInt(this.value)); });
  draw(2);
}

function renderGradientDescent(slot) {
  const steps = [
    ['Receive input', 'The algorithm starts with a specific problem or input.'],
    ['Follow rules', 'It applies clear instructions in a fixed order.'],
    ['Check condition', 'It decides what to do next based on the current state.'],
    ['Return answer', 'It stops when the goal is reached and gives an output.']
  ];
  let idx = 0;
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Algorithm — step-by-step instructions</span><span class="vis-card-badge">interactive</span></div><div class="vis-card-body"><button id="gd-next" class="interactive-btn" style="margin-bottom:12px">Next step</button><div id="gd-step" class="interactive-card"><div style="font-size:18px;font-weight:700;color:var(--color-text);margin-bottom:6px">' + steps[0][0] + '</div><div style="font-size:13px;color:var(--color-text2);line-height:1.6">' + steps[0][1] + '</div></div><div class="interactive-panel" style="font-size:11px;color:var(--color-muted);text-align:center">An algorithm is not AI by itself. It is any precise process a computer can follow.</div></div></div>';
  function draw(i) {
    idx = i;
    var el = document.getElementById('gd-step');
    if (!el) return;
    el.innerHTML = '<div style="font-size:18px;font-weight:700;color:var(--color-text);margin-bottom:6px">' + steps[i][0] + '</div><div style="font-size:13px;color:var(--color-text2);line-height:1.6">' + steps[i][1] + '</div>';
  }
  var btn = document.getElementById('gd-next');
  if (btn) btn.addEventListener('click', function () { draw((idx + 1) % steps.length); });
}

function renderForwardPass(slot) {
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Inference — run a trained model on new input</span><span class="vis-card-badge">demo</span></div><div class="vis-card-body"><div class="interactive-compare"><div class="interactive-compare-card"><div class="interactive-compare-hdr" style="color:#6366f1">1. New Input</div><div class="interactive-compare-body"><p style="font-size:12px;line-height:1.6">A fresh case arrives: a customer asking about a refund, a new photo, or sales numbers. The model has never seen this before.</p></div></div><div class="interactive-compare-card highlight"><div class="interactive-compare-hdr" style="color:#10b981">2. Prediction</div><div class="interactive-compare-body"><p style="font-size:12px;line-height:1.6">The trained model runs once (forward pass) and produces an answer: route to billing support, likely cat 91%, or next month forecast.</p></div></div></div><div class="interactive-panel" style="font-size:11px;color:var(--color-muted);text-align:center">Inference uses what was already learned. No training happens here.</div></div></div>';
}

function renderNeuralNetworkInspector(slot) {
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Parameter — adjust the learned knobs</span><span class="vis-card-badge">interactive</span></div><div class="vis-card-body"><div class="interactive-card" style="margin-bottom:12px"><div style="font-size:12px;color:var(--color-muted);margin-bottom:14px;line-height:1.5">A parameter is a learned number inside the model. Adjust these knobs to see how they change the prediction.</div><label style="font-size:11px;color:var(--color-muted)">Ear shape weight</label><input id="nn-ear" type="range" min="-5" max="5" value="3" style="width:100%;margin:6px 0 12px;cursor:pointer"><label style="font-size:11px;color:var(--color-muted)">Whisker weight</label><input id="nn-whisker" type="range" min="-5" max="5" value="4" style="width:100%;margin:6px 0 12px;cursor:pointer"><label style="font-size:11px;color:var(--color-muted)">Bias</label><input id="nn-bias" type="range" min="-5" max="5" value="-1" style="width:100%;margin:6px 0 12px;cursor:pointer"><div id="nn-formula" style="font-family:JetBrains Mono,monospace;font-size:12px;color:var(--color-text);background:var(--color-bg);padding:10px;border-radius:4px"></div></div><div class="interactive-card"><div style="font-size:13px;font-weight:700;color:var(--color-text);margin-bottom:8px">Cat score</div><div id="nn-score-bar" style="height:20px;border-radius:4px;background:var(--color-bg);overflow:hidden"><div id="nn-score-fill" style="height:100%;border-radius:4px;background:#10b981;transition:width 0.2s;width:50%"></div></div><div id="nn-score-label" style="font-size:12px;color:var(--color-muted);margin-top:4px;text-align:right"></div></div></div></div>';
  function update() {
    var ear = document.getElementById('nn-ear'), whisker = document.getElementById('nn-whisker'), bias = document.getElementById('nn-bias');
    if (!ear || !whisker || !bias) return;
    var e = Number(ear.value), w = Number(whisker.value), b = Number(bias.value);
    var raw = e * 0.7 + w * 0.8 + b;
    var score = Math.max(3, Math.min(97, Math.round(100 / (1 + Math.exp(-raw / 2)))));
    var f = document.getElementById('nn-formula');
    if (f) f.textContent = 'score = ears(' + e + ') + whiskers(' + w + ') + bias(' + b + ') → ' + score + '% cat';
    var fill = document.getElementById('nn-score-fill');
    if (fill) fill.style.width = score + '%';
    var lbl = document.getElementById('nn-score-label');
    if (lbl) lbl.textContent = score + '% cat';
  }
  ['nn-ear', 'nn-whisker', 'nn-bias'].forEach(function (id) { var el = document.getElementById(id); if (el) el.addEventListener('input', update); });
  update();
}

function renderTrainingLoop(slot) {
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Training — predict, compare, adjust, repeat</span><span class="vis-card-badge">demo</span></div><div class="vis-card-body"><button id="tl-step" class="interactive-btn" style="margin-bottom:12px">Train one round</button><button id="tl-reset" class="interactive-btn" style="margin-left:6px;margin-bottom:12px">Reset</button><div class="interactive-card" id="tl-status"><div style="font-size:13px;color:var(--color-text);line-height:1.6">Round 1<br>Prediction error: 72%<br>The model adjusts its parameters, then tries again.</div></div><div class="interactive-bar-wrap" id="tl-bar"><div style="font-size:10px;color:var(--color-muted);margin-bottom:6px">Accuracy</div><div style="background:var(--color-bg);border-radius:4px;height:20px;overflow:hidden"><div id="tl-fill" style="height:100%;border-radius:4px;background:#10b981;transition:width 0.3s;width:28%"></div></div><div id="tl-pct" style="font-size:11px;color:var(--color-muted);margin-top:4px;text-align:right">28%</div></div></div></div>';
  var round = 0;
  function draw() {
    var err = Math.max(5, 72 - round * 13);
    var acc = 100 - err;
    var s = document.getElementById('tl-status');
    if (s) s.innerHTML = '<div style="font-size:13px;color:var(--color-text);line-height:1.6">Round ' + (round + 1) + '<br>Prediction error: ' + err + '%<br>The model adjusts its parameters, then tries again.</div>';
    var f = document.getElementById('tl-fill');
    if (f) f.style.width = acc + '%';
    var p = document.getElementById('tl-pct');
    if (p) p.textContent = acc + '%';
  }
  var step = document.getElementById('tl-step');
  if (step) step.addEventListener('click', function () { round = Math.min(5, round + 1); draw(); });
  var reset = document.getElementById('tl-reset');
  if (reset) reset.addEventListener('click', function () { round = 0; draw(); });
}

function renderChainOfThought(slot) {
  var steps = [
    { label: 'Problem', icon: '❓', content: '<b>Question:</b> Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 balls. How many tennis balls does he have now?', color: '#6366f1' },
    { label: 'Step 1', icon: '1', content: '<b>Understand:</b> Roger starts with 5 balls. He buys 2 cans with 3 balls each. I need to find the total.', color: '#38bdf8' },
    { label: 'Step 2', icon: '2', content: '<b>Calculate:</b> First, find how many balls are in the cans: 2 cans × 3 balls per can = 6 balls.', color: '#f59e0b' },
    { label: 'Step 3', icon: '3', content: '<b>Add:</b> Now add the starting balls to the new balls: 5 + 6 = 11.', color: '#8b5cf6' },
    { label: 'Answer', icon: '✓', content: '<b>Final answer:</b> Roger has <b style="color:#10b981;font-size:18px">11</b> tennis balls total.', color: '#10b981' }
  ];
  var idx = 0;
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Chain of Thought — step-by-step reasoning</span><span class="vis-card-badge">interactive</span></div><div class="vis-card-body"><div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px">' + steps.map(function (s, i) { return '<button class="interactive-btn' + (i === 0 ? ' active' : '') + '" data-cot="' + i + '" style="font-size:11px;padding:6px 12px">' + s.icon + ' ' + s.label + '</button>'; }).join('') + '</div><div class="interactive-card" id="cot-content"><div style="font-size:13px;color:var(--color-text);line-height:1.6;min-height:40px">' + steps[0].content + '</div></div><div class="interactive-panel" style="margin-top:10px;font-size:11px;color:var(--color-muted);text-align:center">Instead of guessing the answer directly, the model works through each reasoning step — just like you would.</div></div></div>';
  function draw(i) {
    idx = i;
    var btns = slot.querySelectorAll('[data-cot]');
    btns.forEach(function (b) { b.classList.toggle('active', parseInt(b.dataset.cot) === i); });
    var el = document.getElementById('cot-content');
    if (el) el.innerHTML = '<div style="font-size:13px;color:var(--color-text);line-height:1.6;min-height:40px">' + steps[i].content + '</div>';
  }
  var btns = slot.querySelectorAll('[data-cot]');
  btns.forEach(function (b) { b.addEventListener('click', function () { draw(parseInt(b.dataset.cot)); }); });
}

function renderDataExplorer(slot) {
  slot.innerHTML = '<div class="vis-card"><div class="vis-card-hdr"><span class="vis-card-title">Dataset — split examples for learning and checking</span><span class="vis-card-badge">interactive</span></div><div class="vis-card-body"><div class="interactive-card" style="margin-bottom:12px"><label style="font-size:11px;color:var(--color-muted);display:block;margin-bottom:6px">Total examples: <span id="de-total-label">10,000</span></label><input type="range" id="de-slider" min="1000" max="50000" step="1000" value="10000" style="width:100%;cursor:pointer"></div><div class="interactive-card"><div id="de-split"></div><div style="margin-top:12px;font-size:12px;color:var(--color-text2);line-height:1.8"><div>1. <b>Training</b> set teaches the model</div><div>2. <b>Validation</b> set helps tune choices while building</div><div>3. <b>Test</b> set is kept unseen until final check</div></div></div></div></div>';
  function draw() {
    var slider = document.getElementById('de-slider');
    if (!slider) return;
    var total = Number(slider.value);
    var train = Math.round(total * 0.7), valid = Math.round(total * 0.15), test = total - train - valid;
    var lbl = document.getElementById('de-total-label');
    if (lbl) lbl.textContent = total.toLocaleString();
    var split = document.getElementById('de-split');
    if (!split) return;
    split.innerHTML = '<div style="font-size:11px;color:var(--color-muted);margin-bottom:8px">Split</div><div class="interactive-bar"><span class="interactive-bar-label" style="color:#6366f1;min-width:auto;font-size:10px">Training</span><div class="interactive-bar-fill" style="width:' + Math.round(train / total * 300) + 'px;background:#6366f1"></div><span style="font-size:10px;color:var(--color-text);font-family:JetBrains Mono">' + train.toLocaleString() + '</span></div><div class="interactive-bar"><span class="interactive-bar-label" style="color:#38bdf8;min-width:auto;font-size:10px">Validation</span><div class="interactive-bar-fill" style="width:' + Math.round(valid / total * 300) + 'px;background:#38bdf8"></div><span style="font-size:10px;color:var(--color-text);font-family:JetBrains Mono">' + valid.toLocaleString() + '</span></div><div class="interactive-bar"><span class="interactive-bar-label" style="color:#10b981;min-width:auto;font-size:10px">Test</span><div class="interactive-bar-fill" style="width:' + Math.round(test / total * 300) + 'px;background:#10b981"></div><span style="font-size:10px;color:var(--color-text);font-family:JetBrains Mono">' + test.toLocaleString() + '</span></div>';
  }
  var slider = document.getElementById('de-slider');
  if (slider) slider.addEventListener('input', draw);
  draw();
}
