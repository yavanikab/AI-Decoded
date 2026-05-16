# AI DEMYSTIFIED — CANONICAL BLUEPRINT

**Version:** 1.0  
**Date:** 2026-05-07  
**Status:** LIVING — updated as the project evolves  
**Scope:** Product requirements, architecture, design decisions, content model, and implementation plan.

> This document is the single source of truth for what AI Demystified is, why it exists, how it is built, and where it is going.
> It replaces the need to read a dozen scattered notes to understand the project.

---

## Current Implementation Note — 2026-05-10

The live app is currently a no-build static site served from `index.html`, split CSS files under `css/`, `scripts.js`, and `data/terms.json`.

Current live content:

- 15 categories
- 323 total terms
- 38 complete authored terms
- 285 draft terms fast-populated from the catalogue and expanded terminology review
- Term status metadata: `complete` or `draft`
- Empty `Build It` tabs are hidden until implementation content exists
- The `How It Works` tab uses the section label `Technical Explanation`

Older sections below describe the original V1 plan and may still mention earlier counts, Tailwind build output, or missing features from before the static no-build implementation was expanded.

---

## 1. Elevator Pitch

**From "What is AI?" to "I understand how it works."**

AI Demystified is a client-side, open-source interactive web app that explains every AI concept — from the simplest (What is Artificial Intelligence?) to the most advanced (MCP protocol, multi-agent systems, attention mechanisms) — using plain language, visual diagrams, and clickable interactive demos. No account, no backend, no prior knowledge required. Open the page and start learning.

---

## 2. Problem Statement

AI is the most transformative technology of our era, but understanding it remains needlessly difficult.

The specific problems AI Demystified sets out to solve:

- **AI terminology is fragmented across a thousand blog posts.** You read one article about tokens, another about embeddings, another about RAG. There is no single place where every concept lives in a coherent, browsable structure.

- **Explanations assume you already know something.** Most tutorials start with "a transformer is a neural network architecture using self-attention" — but what if you don't know what a neural network is? AI Demystified starts at absolute zero and builds up, with difficulty levels (beginner → intermediate → advanced) so you never feel lost or patronised.

- **Static text does not teach well.** The best way to understand a concept like tokenization or attention is to *see it working*. Interactive tokenizers, embedding visualisations, and attention heatmaps make abstract ideas concrete.

- **New terms appear constantly.** The AI field moves fast. A static glossary is outdated in weeks. AI Demystified is designed to grow — adding a new term means editing one JSON file, not redesigning a page.

- **Existing tools are scattered and inconsistent.** Visual explainers exist for single concepts (e.g., Transformer Explainer for GPT-2 internals) but none cover the full landscape. AI Demystified fills that gap: one app, all concepts, consistent explanations, visual throughout.

---

## 3. Target Users & Positioning

### Who this is for

| User Type | Need |
|-----------|------|
| **Complete beginners** | "I hear about AI everywhere. What even is it? Where do I start?" |
| **Students / career changers** | "I need to understand AI for school or work. Explain it clearly." |
| **Developers new to AI** | "I can code but I don't understand how LLMs work under the hood." |
| **Curious professionals** | "My company is adopting AI tools. I want to understand the basics." |
| **Experienced practitioners** | "I need a quick refresher on a specific concept or a reference to share with juniors." |

### Where it fits

| Tool | Strength | Gap |
|------|----------|-----|
| **Transformer Explainer** | Deep interactive GPT-2 visualisation | Covers one model, assumes ML knowledge |
| **LLM Visualization** | Animated model forward-pass | Technical, narrow scope |
| **Learn Prompting** | Structured prompt engineering courses | Course-based, not an interactive reference |
| **Illustrated Transformer (blog)** | Clear static diagrams | Not interactive, one topic |
| **3Blue1Brown (videos)** | Excellent intuitive explanations | Video format, not browsable |
| **Wikipedia / glossaries** | Comprehensive definitions | Dry, no interactivity, no visual |
| **AI Demystified** | All concepts, plain language, visual, interactive, browsable | Content must be authored (not crowd-sourced) |

---

## 4. Current State — 2026-05-07

### 4.1 What Exists Today

| Area | Status | Detail |
|------|--------|--------|
| **HTML mockup** | ✅ Complete | Single-file mockup (`ai-index.html`) with sidebar, term hero, content layout, interactive tokenizer demo, search, category system, difficulty badges, and full visual styling |
| **Category taxonomy** | ✅ Draft | 7 categories defined in mockup sidebar (The Basics, How Models Think, Language & Generation, Building with AI, Agents & Tools, MCP, The Bigger Picture) — will be revised to 15 categories |
| **Visual design** | ✅ Complete | Dark theme, glass-morphism cards, accent colour system, gradient hero headers, animation effects, custom scrollbars |
| **Interactive demo** | ✅ Prototype | Tokenizer demo with naive BPE-like tokenisation, token count, word count, cost estimation |
| **Search** | ✅ Functional | Client-side sidebar filter by term name |
| **Tailwind build pipeline** | ✅ Configured | Tailwind CSS v4 via `@tailwindcss/cli`, `npm run build` produces `styles.css` |

### 4.2 Current Architecture

```
                   AI DEMYSTIFIED — CURRENT STATE
                         (What Exists Today)

                          ┌──────────────────┐
                          │   index.html     │
                          │   (single file)  │
                          └────────┬─────────┘
                                   │
         ┌─────────────────────────┼──────────────────────────────┐
         ▼                         ▼                              ▼
   ┌───────────┐           ┌──────────────┐              ┌──────────────────┐
   │  Sidebar  │           │  Topbar      │              │  Content Panel   │
   │  ──────── │           │  ────────    │              │  ────────         │
   │  7 cats   │           │  Logo ·      │              │  Term Hero       │
   │  ~37 terms│           │  Search ·    │              │  Tabs            │
   │  visible  │           │  Stats · GH  │              │  Term Body       │
   │  Cat      │           │  button      │              │  ─ Left section  │
   │  headers  │           └──────────────┘              │  ─ Right sidebar │
   │  Diff     │                                         │  ─ Interactive   │
   │  badges   │                                         │    tokenizer     │
   └───────────┘                                         └──────────────────┘

         BUILT: Visual mockup · Sidebar navigation · Search · Tokenizer demo
         MISSING: 280+ term content · All interactive visualisations · Data-driven
                  architecture · Mobile responsive · Light theme · Full term data
```

### 4.3 What Is Missing

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| **Term content (280+ terms)** | ❌ Not authored | P0 | Only "Tokens" has full content. All other terms show placeholder |
| **terms.json data model** | ❌ Not built | P0 | Data-driven architecture — terms loaded from JSON instead of hardcoded HTML |
| **Hash-based routing** | ❌ Not built | P0 | Shareable URLs per term (`#tokens`, `#rag`, `#mcp`) |
| **Term switching via JS** | ❌ Not built | P0 | Clicking a term loads JSON content into the panel dynamically |
| **All interactive visualisations** | ❌ Not built | P0 | Embedding viz, attention heatmap, RAG pipeline, MCP diagram, context window viz |
| **Light theme** | ❌ Not built | P1 | Currently dark-only. Need `@media (prefers-color-scheme: light)` and theme toggle |
| **Mobile responsive** | ❌ Not built | P1 | Currently desktop-only layout. Need breakpoints |
| **Search indexing** | ❌ Not built | P1 | Current search filters sidebar only. Should search full term content |
| **Accessibility (ARIA, keyboard)** | ❌ Not built | P2 | Keyboard nav, focus management, screen reader support |
| **GitHub + Netlify deployment** | 🔜 Planned | P2 | Will be set up after content is complete |

---

## 5. Target Architecture — V1

### 5.1 Target File Structure

```
AI Demystified/
├── index.html                ← Clean semantic HTML, no embedded CSS/JS
├── src/
│   └── input.css             ← Tailwind directives + @apply component styles
├── styles.css                ← Built output (gitignored, generated by CLI)
├── scripts.js                ← All JavaScript (routing, search, interactive demos)
├── terms.json                ← All term content (the single source of content truth)
├── tailwind.config.js        ← Theme configuration (wasn't needed)
├── package.json              ← npm metadata + build scripts
├── netlify.toml              ← Build command + deploy config
├── AGENTS.md                 ← Blank (AI working instructions)
├── .gitignore                ← node_modules/, docs/, styles.css
├── CHANGELOG.md              ← Project change log
├── VERSION-HISTORY.md        ← Version history
├── AI-DEMYSTIFIED_CANONICAL_BLUEPRINT.md  ← This document
└── TERMS_CATALOG.md          ← Master inventory of all terms
```

### 5.2 Target Architecture

```
                 AI DEMYSTIFIED — TARGET ARCHITECTURE (V1)

                              ┌──────────────────────┐
                              │      index.html      │
                              │  (Shell + Layout)    │
                              └──────────┬───────────┘
                                         │
            ┌────────────────────────────┼──────────────────────────────┐
            ▼                            ▼                              ▼
     ┌──────────────┐           ┌──────────────────┐           ┌──────────────────┐
     │   Topbar     │           │    Sidebar       │           │  Content Panel   │
     │  ─────────── │           │   ───────────    │           │  ───────────      │
     │  Logo        │           │   Category 1     │           │  Route: #term-id  │
     │  Search      │           │     ├─ Term      │           │                   │
     │  Stats       │           │     ├─ Term      │           │  Loads from       │
     │  GH Button   │           │   Category 2     │           │  terms.json       │
     │  Theme toggle│           │     ├─ Term      │           │  into panel       │
     └──────────────┘           │     ...          │           │                   │
                                │   Category 15    │           │  - Hero section   │
                                │     ├─ Term      │           │  - Tabs           │
                                │     └─ Term      │           │  - Body (left)    │
                                └──────────────────┘           │  - Sidebar (right)│
                                                                │  - Visuals/demos  │
                                                                └──────────────────┘

  NEW for V1:    terms.json · Hash routing · Dynamic term loading · Light theme
                 · Mobile responsive · Search content indexing · Interactive visuals
  CARRIED OVER:  Layout · Sidebar · Topbar · Tokenizer demo · Visual design
  FUTURE (V2):   Accessibility · GitHub deploy · Netlify deploy
```

---

## 6. Data Pipeline

```
CONTENT SOURCE                          BUILD                           RUNTIME
─────────────────                      ─────                           ───────

TERMS_CATALOG.md                        tailwindcss CLI                 Browser loads:
  │  (Master inventory)                   │                              │
  │  Reviewed + approved                 tailwindcss -i src/input.css   index.html ──► Render shell
  ▼                                      -o styles.css                  │
  ──────                                    │                           styles.css ──► Apply styles
  │  Manual authoring                    ───────────────                │
  │  One .json object per term           Produces: styles.css           scripts.js ──► Initialize:
  │  Categories + difficulties           │                              │  └─ Read URL hash
  │  Visual/demo config                  .gitignored                    │  └─ Load terms.json
  ▼                                      │                              │  └─ Find matching term
  ──────                                  Not committed                 │  └─ Render term panel
  terms.json                             │                              │  └─ Wire search, tabs,
  │  (Authoritative content)             No build step for content      │     interactive demos
  │                                      (terms.json is static)         │
  │  Committed to repo                   │                              ▼
  │                                      └──► Netlify deploy ──────────► User sees full page
  ▼
  Future: If visualisation libraries
  added, bundle via Vite or esbuild
```

---

## 7. Content Model

### 7.1 Term (JSON)

```json
{
  "id": "tokens",
  "name": "Tokens",
  "category": "llms",
  "difficulty": "beginner",
  "plainEnglish": "AI models don't read text word by word...",
  "analogy": "Think of tokens like Lego bricks...",
  "howItWorks": "BPE tokenisation algorithm...",
  "inPractice": "OpenAI charges per token...",
  "buildIt": "Here's how to count tokens in JavaScript...",
  "relatedTerms": ["context-window", "embeddings", "temperature"],
  "alsoKnownAs": ["subword units", "BPE tokens"],
  "keyFact": "GPT-4o can handle up to 128,000 tokens...",
  "visual": "tokenizer-demo"
}
```

### 7.2 Categories (15)

| # | Category | Sample Terms | Approx Count |
|---|----------|-------------|-------------|
| 1 | AI Basics | AI, ML, DL, Model, Inference, Algorithm, Parameter | 20 |
| 2 | Neural Networks | Neuron, Layer, Weight, Bias, Activation, Backpropagation | 20 |
| 3 | Transformers | Transformer, Self-Attention, Multi-Head, QKV, Positional Encoding | 18 |
| 4 | Training & Data | Loss, Epoch, Gradient Descent, Overfitting, Dataset, Validation | 20 |
| 5 | LLMs | LLM, GPT, Foundation Model, Generative AI, Completion, Hallucination | 20 |
| 6 | Prompting | Prompt, System Prompt, Chain of Thought, Few-Shot, Structured Output | 18 |
| 7 | Embeddings | Embedding, Vector, Cosine Similarity, Semantic Search, Dimension | 16 |
| 8 | RAG | RAG, Chunking, Retrieval, Vector Database, Hybrid Search, Reranking | 16 |
| 9 | Fine-tuning | Fine-tuning, LoRA, RLHF, Distillation, Adapter, Transfer Learning | 16 |
| 10 | APIs & Integration | API, Endpoint, SDK, Rate Limiting, Streaming, Function Calling | 18 |
| 11 | Agents | AI Agent, ReAct, Tool Use, Memory, Multi-Agent, Agent Loop | 18 |
| 12 | MCP Protocol | MCP, MCP Server, MCP Client, Tools, Resources, Transport | 14 |
| 13 | Multimodal | Multimodal, Text-to-Image, Speech-to-Text, Stable Diffusion, CLIP | 16 |
| 14 | Safety & Ethics | Alignment, Bias, Guardrails, Explainability, Red Teaming | 16 |
| 15 | Frontier Concepts | AGI, Scaling Laws, Emergent Abilities, MoE, Foundation Models | 14 |

### 7.3 Difficulty Levels

| Level | Label | Meaning |
|-------|-------|---------|
| `beginner` | intro | No prior knowledge needed. Plain English, strong analogies |
| `intermediate` | mid | Assumes basic AI vocabulary. Some technical detail |
| `advanced` | adv | Technical depth. Architecture details, math concepts where needed |

---

## 8. Technology Stack

| Layer | Technology | Version | Role |
|-------|-----------|---------|------|
| **Markup** | HTML5 | — | Semantic page structure |
| **Styling** | Tailwind CSS | 4.2.4 | Utility-first CSS framework via `@apply` in `src/input.css` |
| **Build** | `@tailwindcss/cli` | 4.2.4 | CSS build pipeline (`npm run build`) |
| **JavaScript** | Vanilla JS (ES6) | — | Client-side routing, search, interactive demos, DOM manipulation |
| **Content** | `terms.json` | — | All term definitions in a single structured JSON file |
| **Visualisation** | SVG + Canvas API | — | Flow diagrams, embedding projection, attention heatmaps |
| **Hosting** | Netlify | — | Static site deployment. Zero-config, no server |
| **Version control** | GitHub | — | Source code, content, documentation |

### Build Process

```bash
npm run build    # tailwindcss -i src/input.css -o styles.css
```

No bundler for JS or HTML. The project stays vanilla — zero framework lock-in.

---

## 9. Design System

### Philosophy

**Dark editorial clarity.** The interface recedes; the content leads. Rich dark backgrounds with deliberate accent colours guide the eye without distraction. Every visual decision serves understanding.

### Principles (applied in order)

1. **Clarity over cleverness** — Explanations come first. Visual effects serve comprehension, not decoration.

2. **Dark-first, always** — The default and primary theme is dark. Content on dark backgrounds reduces eye strain during extended reading and makes accent colours pop. Light theme is a secondary option.

3. **Accent as wayfinding** — The green accent (`#00e5a0`) is reserved for interactive elements and the currently active term. It is a positional signal, not decoration.

4. **Structure through spacing** — Hierarchy is established by padding and gap, not by borders or shadows. Sections breathe. Nothing feels cramped or crowded.

5. **Tokens, always** — Every colour, font size, spacing value, border radius, and transition timing traces back to a CSS variable in `tokens.css`. No magic numbers.

6. **Progressive disclosure** — Beginners see plain English and analogies. Intermediate learners see how-it-works sections. Advanced users see architecture detail. Every term page scales with the reader.

### Key Visual Decisions

| Decision | Rationale |
|----------|-----------|
| Dark background (`#07090f`) | Maximum contrast for accent colours, comfortable for extended reading |
| Fraunces serif for body | Warm, readable at small sizes, distinctive personality without being distracting |
| Syne for headings | Geometric, confident, pairs well with Fraunces for clear typographic hierarchy |
| JetBrains Mono for UI | Technical feel for code/labels, clear distinction from body text |
| Green accent (`#00e5a0`) | Neutral-positive connotation (not red=error, not blue=link), high contrast on dark |
| Color-coded difficulty badges | At-a-glance filtering — green = beginner, amber = intermediate, coral = advanced |
| Gradient hero headers | Visual entry point for each term, subtle depth without breaking the flat aesthetic |
| Glass-morphism cards | Content grouping with light touch — translucent backgrounds suggest depth |
| 8px spacing grid | Consistent vertical rhythm, all spacing values are multiples of 4px |

---

## 10. Interactive Features (Planned)

| Feature | Type | Category | Description |
|---------|------|----------|-------------|
| **Tokeniser demo** | ✅ Prototyped | Tokens | Real-time token breakdown with visual chips, count, cost estimation |
| **Embedding visualiser** | ❌ Planned | Embeddings | 2D projection of word vectors showing semantic relationships |
| **Context window viz** | ❌ Planned | Tokens / LLMs | Progress bar showing how prompt tokens fill available context |
| **Attention heatmap** | ❌ Planned | Transformers | Interactive matrix showing which tokens attend to which |
| **RAG pipeline diagram** | ❌ Planned | RAG | Animated SVG flow: query → retrieve → augment → generate |
| **MCP architecture diagram** | ❌ Planned | MCP Protocol | Visual: Host → Client → Server → Tool lifecycle |
| **API cost calculator** | ❌ Planned | APIs & Integration | Live calculator: model × tokens = cost |
| **Training vs inference viz** | ❌ Planned | AI Basics | Side-by-side comparison of the two modes |
| **Agents decision tree** | ❌ Planned | Agents | Interactive: "What kind of agent do I need?" flow |

---

## 11. Development Phases

### Phase 1 — Foundation (Current)

- [x] Project scaffold (folder, npm, Tailwind)
- [x] Blueprint document
- [x] Terms catalog
- [ ] User reviews blueprint and terms catalog
- [ ] Finalise category taxonomy

### Phase 2 — Architecture

- [ ] Create `terms.json` with all term content
- [ ] Build hash-based routing (`#term-id`)
- [ ] Implement dynamic term loading from JSON
- [ ] Convert search to index full term content
- [ ] Wire category filtering
- [ ] Extract CSS and JS from mockup into proper files
- [ ] Build and verify visual parity with mockup

### Phase 3 — Content & Interactivity

- [ ] Write all 280+ term explanations
- [ ] Build interactive visualisations (embedding viz, attention heatmap, etc.)
- [ ] Add light theme
- [ ] Add mobile responsive layout
- [ ] Keyboard navigation and accessibility

### Phase 4 — Polish & Deploy

- [ ] Accessibility audit (ARIA labels, focus management, screen reader testing)
- [ ] Performance optimisation
- [ ] GitHub repository setup
- [ ] Netlify deployment
- [ ] Public launch

---

## 12. Related Documents

### Repo Files (Tracked)

| File | Purpose |
|------|---------|
| `index.html` | Main application shell |
| `src/input.css` | Tailwind CSS source with `@apply` component styles |
| `styles.css` | Built Tailwind output (gitignored) |
| `scripts.js` | All JavaScript — routing, search, demos |
| `terms.json` | All term content — the single source of content truth |
| `netlify.toml` | Netlify deployment configuration |
| `CHANGELOG.md` | Project change log |
| `VERSION-HISTORY.md` | Version history |
| `AGENTS.md` | AI working instructions (blank) |
| `AI-DEMYSTIFIED_CANONICAL_BLUEPRINT.md` | This document |
| `TERMS_CATALOG.md` | Master inventory of all terms |

### Repo Files (Gitignored)

| File | Purpose |
|------|---------|
| `node_modules/` | npm dependencies |
| `docs/` | Local documentation (non-committed) |
| `styles.css` | Built CSS output (regenerated by `npm run build`) |

---

## 13. Open Decisions

| # | Decision | Options | Status |
|---|----------|---------|--------|
| 1 | Framework for interactive visualisations | **SVG + Canvas** (vanilla) vs D3.js vs Three.js | 🔄 Pending — SVG first, upgrade if needed |
| 2 | Light theme approach | **CSS variables swap** on `<html>` `data-theme` attribute | 🔄 Pending — design confirmed, implementation in Phase 3 |
| 3 | Mobile breakpoint strategy | **Desktop-first** (current) vs mobile-first rebuild | 🔄 Pending — current layout needs rethinking for narrow screens |
| 4 | Visualisation library | **SVG inline** for diagrams, **Canvas 2D** for embedding projection | 🔄 Pending — no third-party deps unless D3 is truly needed |
| 5 | Content authorship process | **Direct JSON editing** in `terms.json` vs separate authoring tool | 🔄 Pending — direct JSON is simplest, revisit if scale demands it |

---

## Appendix A — File Naming Conventions

| Convention | Rule | Example |
|-----------|------|---------|
| Repo markdown (blueprint) | SCREAMING_SNAKE_CASE | `AI-DEMYSTIFIED_CANONICAL_BLUEPRINT.md` |
| Repo markdown (catalog) | SCREAMING_SNAKE_CASE | `TERMS_CATALOG.md` |
| Source files | kebab-case | `src/input.css`, `scripts.js` |
| Data files | kebab-case | `terms.json` |
| Config files | dot-case | `.gitignore`, `netlify.toml` |
| Changelog / history | PascalCase | `CHANGELOG.md`, `VERSION-HISTORY.md` |

## Appendix B — Design Token Quick Reference

```css
/* Colors */
--color-bg: #07090f;        --color-bg2: #0d1117;     --color-bg3: #131920;
--color-card: #0f151e;      --color-border: rgba(255,255,255,0.06);
--color-accent: #00e5a0;    --color-accent-dim: #00e5a020;
--color-amber: #f5a623;     --color-coral: #ff5f6d;    --color-sky: #38bdf8;
--color-text: #dde4f0;      --color-muted: #5a6a88;    --color-muted2: #3a4a62;

/* Typography */
--font-display: "Syne", sans-serif;
--font-body: "Fraunces", Georgia, serif;
--font-mono: "JetBrains Mono", monospace;
```
