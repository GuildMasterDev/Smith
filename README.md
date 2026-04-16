# Smith — Metallurgical Guide & Resources

A comprehensive guide to metallurgy and bladesmithing, from finding ore in the mountains to forging Damascus steel. Ships as a cross-platform Electron desktop app (macOS / Windows / Linux) and as an installable Progressive Web App.

**Live demo:** [guildmasterdev.github.io/Smith](https://guildmasterdev.github.io/Smith)

## Features

### The Guide

Eight chapters covering the full arc of the craft:

1. **Finding Ore** — geological indicators, mountain formations, ore identification
2. **Building Kilns** — clay kilns, stone furnaces, bellows, fuel, temperature
3. **Smelting Basics** — ore prep, flux, slag, refining, environmental responsibility
4. **Forging Fundamentals** — forge setup, heat colors, drawing / upsetting / bending / welding, heat treatment
5. **Blade Making** — steel selection, forging, grinding, heat treatment, handles, sharpening
6. **Tool Creation** — hammers, tongs, chisels, hardy tools, files, measuring tools
7. **Advanced Techniques** — Damascus / pattern welding, Japanese sword methods, Mokume Gane, inlay, finishes
8. **Safety & First Aid** — PPE, fire, burns, fume fever, chemical hazards, emergency procedures

### Modern Resources Directory

Curated contemporary resources: material and tool suppliers, educational institutions and workshops, essential books, online communities, equipment manufacturers, and safety information.

### Application features

- Dark, forge-themed interface with serif prose and a focused reading column
- Sidebar navigation with chapter icons and numbering
- Full-text client-side search with highlighted snippets
- `localStorage` bookmarks
- Prev / next chapter navigation and deep-linkable hash routes
- Keyboard shortcuts (`/` search, `g` home, `b` bookmark, `←` / `→` chapter nav)
- Print and PDF export (desktop), print-optimized CSS (web)

## Web Demo

The web version lives in [`web/`](./web/) as a single self-contained `index.html` with all content embedded inline — no fetch, no build step. It runs identically on any static host.

- Live: [guildmasterdev.github.io/Smith](https://guildmasterdev.github.io/Smith)
- Serve locally: `python3 -m http.server --directory web 8000` then open <http://localhost:8000>

## PWA

Smith is installable as a Progressive Web App:

- `web/manifest.json` — standalone display, `#1a1a2e` theme, maskable icons at 192 and 512
- `web/sw.js` — cache-first service worker (`smith-v1`) with stale-while-revalidate
- Works fully offline once the first visit has cached the shell

Install from the browser's "Install app" / "Add to Home Screen" action.

## Desktop App

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
git clone https://github.com/GuildMasterDev/Smith.git
cd Smith
npm install
npm start
```

### Building for Distribution

```bash
npm run make                      # current platform
npm run make -- --platform=darwin # macOS
npm run make -- --platform=win32  # Windows
npm run make -- --platform=linux  # Linux
```

## Project Structure

```
Smith/
├── src/
│   ├── main/        # Electron main process
│   ├── renderer/    # Desktop UI (HTML/CSS/JS)
│   └── data/        # Shared guide and resources content
├── web/             # Self-contained web/PWA build
│   ├── index.html
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
├── scripts/         # Build and utility scripts
├── .github/workflows/
│   ├── ci.yml
│   └── deploy-web.yml
├── forge.config.js  # Electron Forge configuration
└── package.json
```

## Technology

- **Electron 41** — cross-platform desktop runtime
- **Electron Forge 7** — packaging toolchain
- **Vanilla JavaScript** — no framework, no build step required for the web demo
- **GitHub Pages + GitHub Actions** — web deployment pipeline

## Contributing

Pull requests welcome for additional content, resource recommendations, UI improvements, and bug fixes.

## License

MIT — see [LICENSE](./LICENSE).

## Acknowledgments

Built as a comprehensive resource for metallurgy and bladesmithing — whether for practical skill, historical interest, or emergency preparedness. Combines traditional techniques with modern best practices and safety standards.

---

*Preserving ancient crafts for future generations.*
