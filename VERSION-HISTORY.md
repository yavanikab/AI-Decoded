# Version History

## 0.3.0 — 2026-05-10

- Expanded cheat-sheet taxonomy to 323 live terms
- Added `status` metadata for `complete` and `draft` terms
- Added related terms for draft pages
- Improved search beyond term names
- Renamed `Deeper Dive` to `Technical Explanation`
- Hidden empty `Build It` tabs until implementation content exists
- Disabled unfinished footer menu links

## 0.2.0 — 2026-05-10

- Fast-populated missing catalogue terms into `data/terms.json`
- Preserved the original 38 fully authored pages
- Populated all 15 categories in the browser

## 0.1.0 — 2026-05-07

- Data-driven architecture: `terms.json` replaces hardcoded TERMS object
- Hash-based routing (`#term-id`) for shareable URLs
- Dynamic sidebar: 15 categories rendered from JSON, difficulty badges (Beg/Int/Adv)
- Font Awesome icons integrated
- Font: Space Grotesk → Titillium Web
- Content panel centered with max-width
- Related terms sidebar in term view
- Menu toggle button + drawer menu for navigation
- Footer simplified: "Open source, built with love for the curious minds."
- ID mapping for backward compatibility with old sidebar term IDs
- Em dashes removed from content

## 1.0.0 — 2026-05-07

- Initial project scaffold
- Project blueprint written
- Terms catalog created (15 categories, 300+ terms)
- Tailwind CSS v4 pipeline configured
- Netlify deployment configuration added
- `index.html` — Google Fonts (Space Grotesk, Inter, JetBrains Mono), links to external CSS/JS
- `src/input.css` — Tailwind v4 design tokens + `@apply` component styles
- `scripts.js` — all JS extracted (TERMS data, routing, tokenizer, MCP/API SVGs, search, sidebar)
