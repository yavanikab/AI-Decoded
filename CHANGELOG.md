# Changelog

## 0.3.0 — 2026-05-10

### Added
- Expanded `data/terms.json` and `TERMS_CATALOG.md` to 323 terms across 15 categories
- Term status metadata (`complete` / `draft`) for tracking authored vs fast-populated pages
- Related-term links for draft terms so sidebars are no longer empty
- Broader search across term names, IDs, category, difficulty, tagline, aliases, and key points

### Changed
- `How It Works` section label now reads `Technical Explanation`
- Empty `Build It` tabs are hidden until a term has real implementation content
- Stat pill now reads version from `data.meta.version`
- Placeholder footer/drawer links are disabled instead of navigating to `#`

## 0.2.0 — 2026-05-10

### Added
- Fast-populated all catalogue terms into the live app data
- Preserved existing authored term pages while adding draft entries for missing terms

## 0.1.0 — 2026-05-07

### Added
- `data/terms.json` — data-driven term content (38 terms across 2 categories authored)
- Hash-based routing (`#term-id`) with `hashchange` listener
- Dynamic sidebar rendering from JSON categories (7 → 15 categories)
- Dynamic welcome grid rendering from JSON
- Related terms right sidebar in term view
- Font Awesome icons via local assets (`assets/fonts/`)
- Menu toggle button + drawer menu (ported from SQL Vizualizer)
- ID mapping table for backward compatibility with old sidebar term IDs

### Changed
- `scripts.js` — removed hardcoded TERMS object, now loads from `terms.json`
- Field names: `.plain` → `.plainEnglish`, `.deeper` → `.howItWorks`, `.related` → `.relatedTerms`
- Difficulty badges: intro/mid/adv → Beg/Int/Adv
- Font: Space Grotesk → Titillium Web
- Content panel: now centered with `max-width: 1024px`
- Footer: simplified to "Open source, built with love for the curious minds." + menu toggle

### Fixed
- Sidebar term ID mismatch (old HTML IDs → new JSON IDs via ID_MAP)
- Refresh redirect on term pages (boot now preserves hash)
- Em dashes replaced with hyphens in content (109 occurrences)

## 1.0.0 — 2026-05-07

### Added
- Initial project scaffold: folder structure, npm, Tailwind CSS v4
- `AI-DEMYSTIFIED_CANONICAL_BLUEPRINT.md` — project specification document
- `TERMS_CATALOG.md` — master inventory of all AI terms across 15 categories
- Skeleton files: `.gitignore`, `netlify.toml`, `AGENTS.md`, `CHANGELOG.md`, `VERSION-HISTORY.md`
- Tailwind CSS v4 build pipeline via `@tailwindcss/cli`
- `index.html` — clean HTML shell with Google Fonts (Space Grotesk + Inter + JetBrains Mono)
- `src/input.css` — complete rewrite with all component styles via `@apply`
- `scripts.js` — all JavaScript extracted from mockup: TERMS data, routing, search, tokenizer, MCP flow, API flow, sidebar toggle, progress tracking
