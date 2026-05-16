<div align="center">
  <img src="assets/logo.svg" alt="AI Decoded" width="96">

# AI Decoded

**Plain English. No hype. Just answers.**

[![Version](https://img.shields.io/badge/version-1.0.0-yellow?style=flat-square)](package.json)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](#license)
[![Terms](https://img.shields.io/badge/terms-323-informational?style=flat-square)](data/terms.json)
[![Complete](https://img.shields.io/badge/complete-39-green?style=flat-square)](data/terms.json)
[![Status](https://img.shields.io/badge/status-early--access-orange?style=flat-square)](#)
[![Platform](https://img.shields.io/badge/platform-web-success?style=flat-square)](#)
[![Build](https://img.shields.io/badge/build-static-lightgrey?style=flat-square)](#)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](#)

<br>

**A static AI explainer site. 323 terms across 15 categories. Plain-English explanations with interactive visuals. No backend. No framework. No hype.**

  <br>

  <img src="https://img.shields.io/badge/View%20Live-00e5a0?style=for-the-badge&logo=netlify&logoColor=black" alt="View Live">

<sub> · static site · open source · free forever</sub>

</div>

---

## What Is AI Decoded?

AI Decoded is a browsable reference of 323 AI terms across 15 categories — from AI Basics to Frontier Concepts. Open it in any browser, click any term, and get a clear explanation written for humans, not researchers.

Every term gives you four layers of understanding:

1. **Plain English** — a one-sentence definition anyone can follow
2. **Analogy** — a relatable comparison that makes it stick
3. **Technical Explanation** — the real mechanics, without gatekeeping
4. **In Practice** — how real products and tools actually use this concept

No accounts. No math prerequisites. No hidden agenda. Just a tool you open when you need to understand what someone in AI is talking about.

---

## Features

| Category | Details |
|----------|---------|
| **15 Categories** | AI Basics, Neural Networks, Transformers, Training & Data, LLMs, Prompting, Embeddings, RAG, Fine-tuning, APIs & Integration, Agents, MCP Protocol, Multimodal, Safety & Ethics, Frontier Concepts |
| **323 Terms** | Each with plain-English explanation, analogy, technical how-it-works, practical usage, and key points |
| **Hash Routing** | Direct links to any term via `#term-id` |
| **Search** | Full-text across names, IDs, categories, difficulty levels, and taglines |
| **Interactive Visuals** | Tokenizer demo, CSS-driven comparison cards, sliders, click-to-reveal, Mermaid.js diagrams (12 terms) |
| **Difficulty Levels** | Beginner (85), Intermediate (177), Advanced (61) — start where you're comfortable |
| **Related Terms** | Smart sidebar linking of connected concepts |
| **Dark Theme** | Full dark UI with green accent (`#00e5a0`) |
| **Responsive** | Works on desktop and mobile (768px breakpoint) |
| **No Account Required** | Zero sign-up, zero tracking |

---

## Content Model

- **39 terms** have full authored content (AI Basics, LLMs, Neural Network intro)
- **284 terms** have placeholder content awaiting full writing
- **Visuals** use Mermaid.js (diagrams) or CSS-driven interactivity (no SVG/Canvas)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Shell** | HTML5 (`index.html`) |
| **Styling** | Tailwind CSS v4 (`@apply` directives), custom CSS in `css/` |
| **Scripting** | Vanilla JavaScript (no frameworks) |
| **Diagrams** | Mermaid.js (CDN, runtime-rendered) |
| **Data** | `data/terms.json` — single source of truth |
| **Fonts** | Titillium Web (UI), Inter (body), JetBrains Mono (code) |
| **Icons** | Font Awesome (local assets) |
| **Deploy** | Netlify (static site, no build step) |

---

## License

MIT License. You can freely use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software. The only requirement is that you include the original copyright notice and permission notice in all copies or substantial portions of this project. The software is provided "as is," without warranty of any kind.

---

<div align="center">
  <p><strong>AI Decoded</strong> — Plain English. No hype. Just answers.</p>
  <p><sub>No backend. No frameworks. No gatekeeping. Just AI, explained.</sub></p>
</div>
