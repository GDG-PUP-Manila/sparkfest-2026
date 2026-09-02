# SparkFest 2026 Website

The official 1-page static marketing website for SparkFest 2026, a flagship hackathon organized by **Google Developer Groups on Campus - Polytechnic University of the Philippines (GDG PUP)**.

Live: [sparkfest.gdgpup.org](https://sparkfest.gdgpup.org)

Retro pixel-arcade theme. Static Next.js export on Cloudflare Pages. Registration is a Google Form; Photobooth and DP Blast CTAs still show "Coming soon" until live URLs land.

**Status (2026-09-02 handover):** Operate. Read [docs/state.md](docs/state.md) first for gaps, ownership, and doc freshness.

## Technology Stack

- **Core Framework**: Next.js 16.2.7 (static HTML export) + React 19.2.4
- **Styling**: Tailwind CSS v4 + Google Sans / Press Start 2P
- **Deployment**: Cloudflare Pages (`npm run build` → `out/`)

## Documentation

Engineering docs live under `docs/`. Start here:

- [state.md](docs/state.md): Where the project stands (cold start for agents and the incoming CTO).
- [index.md](docs/index.md): Inventory of every doc that exists.
- [FLAGS.md](FLAGS.md): Open improvement register (docs handover; not fixed bugs).
- [prd-sparkfest.md](docs/prd-sparkfest.md): Product requirements and section inventory.
- [dsd-sparkfest.md](docs/dsd-sparkfest.md): Dark pixel-arcade design tokens.
- [sdd-sparkfest.md](docs/sdd-sparkfest.md): Static architecture and export rules.
- [qad-sparkfest.md](docs/qad-sparkfest.md): QA & release scenarios.
- [sad-sparkfest.md](docs/sad-sparkfest.md): Subagent roster (`.claude/agents/`).
- [build-sparkfest.md](docs/build-sparkfest.md): Build guide (materialized to [AGENTS.md](AGENTS.md)).
- [ops-sparkfest.md](docs/ops-sparkfest.md): Ops notes (verify Cloudflare dashboard claims).
- [figma-mcp-setup.md](docs/figma-mcp-setup.md): Figma MCP for IDE fidelity work.

[AGENTS.md](AGENTS.md) / [CLAUDE.md](CLAUDE.md) are the always-loaded agent entrypoints. Pre-handover leftovers sit in [docs/archive/](docs/archive/2026-09-02-pre-handover/).

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build Static Export
To compile the project into static files for Cloudflare Pages deployment:
```bash
npm run build
```
The static files will be exported to the `out/` folder.

## ⚡ Developer CTA Booths Note
The **Photobooth** and **DP Frame** CTAs (in [SnapAndFrame.tsx](src/app/components/SnapAndFrame.tsx)) are placeholder integrations until their live URLs ship. Instead of navigating, they render a dismissible "Coming soon" toast via [PlaceholderCta.tsx](src/app/components/PlaceholderCta.tsx), per PRD-F4 / PRD-F5. Wire the production links there when available.

## Contributors

This project is made possible by the GDG PUP community:

| Role | Name |
| --- | --- |
| 💻 **Development** | [Rhandie Sales](https://www.linkedin.com/in/rhandie-sales/) - Senior Frontend Developer / Hero, About, What Goes Down |
| 💻 **Development** | [E-jay Pascua Detera](https://www.linkedin.com/in/e-jay-detera-56221532b) - Frontend Developer / Who's This For, Judges |
| 💻 **Development** | [Reynard John B. Rabanal](https://www.linkedin.com/in/reynard-john-b-rabanal-88893837a/) - Frontend Dev / Road to Demo Day |
| 💻 **Development** | [Gabriel Nicolai Pelagio](https://www.linkedin.com/in/gabriel-nicolai-pelagio/) - Frontend Developer / Where & When, FAQ |
| 💻 **Development** | [David Gabriel](https://www.linkedin.com/in/david-gabriel-494308371/) - Frontend Developer / Snap & Frame |
| 💻 **Development** | [Mobaraq Camar](https://www.linkedin.com/in/mobaraq-camar-6858b426a/) - Frontend Developer / Before the Spark, Final CTA |
| 💻 **Development** | [Gerald Berongoy](https://www.linkedin.com/in/geraldberongoy) - Senior Backend Developer / Shared foundation |
| 🧪 **QA** | [Keith Justine A. Virgenes](https://www.linkedin.com/in/keith-justine-virgenes-749225302) - QA DRI (responsive, a11y, release) |
| 🧪 **QA** | [Gerald Berongoy](https://www.linkedin.com/in/geraldberongoy) - QA DRI ("Ge") |
| 🚀 **CTO** | [Carlos Jerico Dela Torre](https://www.linkedin.com/in/delatorrecj/) - Chief Technology Officer (2025-2026) |

