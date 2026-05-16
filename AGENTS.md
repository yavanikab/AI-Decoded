THIS FILE IS THE RULE OF LAW FOR THIS PROJECT

This file is automatically loaded into every agent session at startup. The instructions in this file are NOT optional, NOT suggestions, NOT guidelines. They are MANDATORY CONSTRAINTS. Ignoring or skipping them is a violation — your work is not complete until every applicable rule here has been followed.

YOU ARE BOUND BY THE CONTENTS OF THIS FILE. FULL STOP.

YOU ARE NOT DONE UNTIL THIS FILE IS UPDATED. Before ending your session, verify this file reflects all changes you made. If it doesn't, update it or your work is incomplete.

---

# AI Decoded — Project Guide

## What This Is

A static-site AI explainer app. 323 terms across 15 categories. Plain-English explanations with interactive visuals. No backend, no framework — just HTML, CSS, and JavaScript.

## Tech Stack

- **HTML5** — `index.html` (app shell)
- **CSS** — Tailwind CSS v4 (configured in `package.json` with `@tailwindcss/cli` v4.2.4), plus hand-written CSS files in `css/`
- **JavaScript** — vanilla JS (no frameworks) in `scripts.js`, `visuals-ai-basics.js`, and `made-with-love.js`
- **Diagrams** — Mermaid.js (loaded from CDN; renders flow/sequence/architecture diagrams at runtime from text definitions)
- **Data** — `data/terms.json` (all term content, single source of truth)

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | App shell with topbar, sidebar, content area, footer, drawer menu |
| `css/core.css` | Tailwind theme tokens + base reset |
| `css/layout.css` | Topbar, sidebar, footer, search, drawer layout |
| `css/term-view.css` | Welcome view, term hero, tabs, body, related terms |
| `css/responsive.css` | Mobile breakpoints (768px and below) |
| `css/signal.css` | Loading spinners, animations |
| `scripts.js` | All JS: data loading, routing, sidebar, search, term rendering, interactive demos |
| `visuals-ai-basics.js` | CSS-driven interactive demos (comparison cards, sliders, explainers) |
| `made-with-love.js` | Self-contained reusable footer component (share/love button) |
| `data/terms.json` | All 323 terms with categories, difficulty, content, visuals config |
| `assets/logo.svg` | App logo / favicon |
| `assets/menu-toggle.css` | Menu toggle button styles |
| `assets/menu-toggle.js` | Menu toggle button behavior |
| `assets/fonts/` | Font Awesome icon fonts (solid, brands) |
| `README.md` | Project readme — overview, features, status, limitations |

## Content Model

Each term in `terms.json` has this structure:

```
id, name, category, difficulty (beginner/intermediate/advanced),
plainEnglish, analogy, howItWorks, inPractice, buildIt,
relatedTerms, keyPoints, tagline, status (complete/draft), visual
```

**Status**: 39 terms are `"complete"`, 284 are `"draft"` (placeholder content). New terms should be added to `terms.json` with `"status": "draft"` until full content is written.

## Routing

Hash-based: `#term-id`. The hash matches the `id` field in `terms.json`. Legacy short IDs are mapped to current IDs via `ID_MAP` in `scripts.js`.

## Running Locally

`terms.json` is loaded via `fetch()` — it won't work from `file://`. Use a local server:

```
npx serve .
```
or
```
python -m http.server 4400
```

## Conventions

- No frameworks — pure vanilla JavaScript
- All content lives in `terms.json` — never hardcode term data in HTML or JS
- CSS uses Tailwind v4 `@apply` directives; custom styles go in the `css/` files
- Font stack: Titillium Web (UI/headings), Inter (body), JetBrains Mono (code)
- Color scheme: dark theme (`#07090f` background), green accent (`#00e5a0`)
- Edits should preserve the no-build static-site approach

## Visual Strategy

No hand-coded SVG or Canvas. Two approaches only:

1. **Mermaid.js** for flow/architecture diagrams. Define as text in `data.visual === "mermaid"` with the diagram source in a `mermaid` field. Mermaid renders at runtime.
2. **CSS-driven interactivity** for hands-on demos (comparison cards, sliders, click-to-reveal, animated bars). Write as pure HTML/CSS in `visuals-ai-basics.js` — no coordinate math, no canvas.

Only add a visual where it genuinely clarifies a concept (~20-30 terms max). Most terms don't need one. The tokenizer in `scripts.js` is the one exception (text-based, not SVG).

---

# MANDATORY: Self-update rule

1. When you modify project files, you MUST also update this file to reflect the new state.
2. When in doubt, update anyway. Stale documentation is worse than no documentation.
3. Run `@agsync` at end of each session to record changes.
4. YOU ARE NOT DONE UNTIL THIS FILE IS UPDATED.

# Session-end verification checklist

- [ ] Did I run `@agsync` to record this session's changes?
- [ ] Did I update "Key files" if I added/removed/renamed files?
- [ ] Did I update "Known bugs" if I fixed or introduced bugs?
- [ ] Did I update any other section that my changes affect?

# Mandatory rules

- Every output must include a confidence level: High, Medium, or Low. If Low, ask for clarification.
- Delegate smaller/parallel tasks to subagents aggressively.
- Start with Explore (read-only) when uncertain.
- Keep all changes reversible when possible.

# Known bugs

- **Missing Tailwind source**: `src/input.css` is referenced in documentation as the Tailwind v4 source file, but the file does not exist on disk. It may need to be created, or the documentation updated if the project no longer uses a build step.
- **Missing compiled output**: `styles.css` (the compiled output of `src/input.css`) does not exist on disk. Either create `src/input.css` and configure the build, or remove references to it.
- **Missing build script**: `package.json` has an empty `"scripts": {}` object. The `npm run build` command referenced in project notes is non-functional. Either add a build script or update documentation.
- **No test framework**: No testing framework is configured. Any code changes are untested — manual verification required.
- **No git repository**: The project is not under version control. No history tracking, no branching, no revert capability.
- **`.gitignore` excludes `docs/`**: The `.gitignore` file excludes the entire `docs/` directory, which may hide documentation from git tracking.
- **284 draft terms**: Only 39 of 323 terms have complete content. The vast majority contain placeholder/fast-populated text.

# SEO & Security configuration

- **Platform host**: Netlify
- **Meta tags**: Present — `og:title`, `og:description`, `og:type`, and standard `title`/`description` meta tags in `index.html`
- **Security headers**: Not explicitly configured (Netlify default headers apply)
- **CSP**: Not set
- **Favicon**: SVG logo at `assets/logo.svg`

# Deployment

- **Platform**: Netlify
- **Build command**: None (static site — `netlify.toml` sets `command = "echo 'Static site — no build needed'"`)
- **Publish directory**: `.` (site root)
- **Domain/URL**: TBD (no custom domain configured yet)

# Testing

- **Framework**: None detected
- **Run command**: Not configured
- **CI**: Not configured
- **Note**: All testing is manual. Open `index.html` via a local server (`npx serve .` or `python -m http.server 4400`) and verify in browser.

# Documents referenced every session

*Load these docs at session start when relevant:*
- [ ] `CHANGELOG.md` — Project changelog (version history by release)
- [ ] `VERSION-HISTORY.md` — Chronological version history summary
- [ ] `TERMS_CATALOG.md` — Master inventory of all 323 terms across 15 categories
- [ ] `AI-DEMYSTIFIED_CANONICAL_BLUEPRINT.md` — Original project specification document
- [ ] `README.md` — Project readme

<!-- agsync: last-run 2026-05-16 -->

<!-- Updated with README.md creation and corrected term counts (39 complete / 284 draft) -->
