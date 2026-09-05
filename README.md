# SparkFest 2026 Website

[![Status: Operate](https://img.shields.io/badge/Status-Operate-green)](docs/state.md)
[![Stack: Next.js](https://img.shields.io/badge/Stack-Next.js-black)](#about)
[![FMD philosophy: 1.31.0](https://img.shields.io/badge/FMD%20philosophy-1.31.0-blue)](AGENTS.md)


The official 1-page static marketing website for SparkFest 2026, a flagship hackathon organized by **Google Developer Groups on Campus - Polytechnic University of the Philippines (GDG PUP)**.

Live: [sparkfest.gdgpup.org](https://sparkfest.gdgpup.org)

Retro pixel-arcade theme. Static Next.js export on Cloudflare Pages. Registration is a Google Form; Photobooth and DP Blast CTAs still show "Coming soon" until live URLs land.

**Status (2026-09-02 handover):** Operate. Read [docs/state.md](docs/state.md) first for gaps, ownership, and doc freshness.

## Table of Contents

- [About](#about)
- [Start here](#start-here)
- [Technology Stack](#technology-stack)
- [Quick start](#quick-start)
- [Developer CTA Booths Note](#developer-cta-booths-note)
- [Documentation](#documentation)
- [Contributors](#contributors)

## About

SparkFest 2026 is GDG PUP's flagship hackathon marketing site: one page, retro pixel-arcade look, registration via Google Form. Audience is students and community members evaluating the event; developers maintain the static Next.js export on Cloudflare Pages.

Live: [sparkfest.gdgpup.org](https://sparkfest.gdgpup.org)

## Start here

- **Humans:** this README, then [docs/state.md](docs/state.md)
- **Agents:** [AGENTS.md](AGENTS.md) (state → index → FLAGS)
- **Contributors:** table below

## Technology Stack

- **Core Framework**: Next.js 16.2.7 (static HTML export) + React 19.2.4
- **Styling**: Tailwind CSS v4 + Google Sans / Press Start 2P
- **Deployment**: Cloudflare Pages (`npm run build` → `out/`)

## Quick start

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

## Developer CTA Booths Note

The **Photobooth** and **DP Frame** CTAs (in [SnapAndFrame.tsx](src/app/components/SnapAndFrame.tsx)) are placeholder integrations until their live URLs ship. Instead of navigating, they render a dismissible "Coming soon" toast via [PlaceholderCta.tsx](src/app/components/PlaceholderCta.tsx), per PRD-F4 / PRD-F5. Wire the production links there when available.

## Documentation

Engineering docs live under `docs/`. Start here:

| Doc | Purpose |
|-----|---------|
| [State](docs/state.md) | Where the project stands (cold start for agents and the incoming CTO) |
| [Index](docs/index.md) | Inventory of every doc that exists |
| [FLAGS](FLAGS.md) | Open improvement register (docs handover; not fixed bugs) |
| [AGENTS](AGENTS.md) | Always-loaded agent entrypoint (also [CLAUDE.md](CLAUDE.md)) |
| [prd-sparkfest.md](docs/prd-sparkfest.md) | Product requirements and section inventory |
| [dsd-sparkfest.md](docs/dsd-sparkfest.md) | Dark pixel-arcade design tokens |
| [sdd-sparkfest.md](docs/sdd-sparkfest.md) | Static architecture and export rules |
| [qad-sparkfest.md](docs/qad-sparkfest.md) | QA and release scenarios |
| [sad-sparkfest.md](docs/sad-sparkfest.md) | Subagent roster (`.claude/agents/`) |
| [build-sparkfest.md](docs/build-sparkfest.md) | Build guide |
| [ops-sparkfest.md](docs/ops-sparkfest.md) | Ops notes (verify Cloudflare dashboard claims) |
| [figma-mcp-setup.md](docs/figma-mcp-setup.md) | Figma MCP for IDE fidelity work |

Pre-handover leftovers sit in [docs/archive/](docs/archive/2026-09-02-pre-handover/).

## Contributors

This project is made possible by the GDG PUP community.

| Name | Role | GitHub |
| --- | --- | --- |
| [Carlos Jerico Dela Torre](https://www.linkedin.com/in/delatorrecj) | Chief Technology Officer (2025-2026) | [@delatorrecj](https://github.com/delatorrecj) |
| [David Gabriel](https://www.linkedin.com/in/david-gabriel-494308371) | Frontend Developer | [@djgab16](https://github.com/djgab16) |
| [E-jay Pascua Detera](https://www.linkedin.com/in/e-jay-detera-56221532b) | Frontend Developer | [@ejay-detera](https://github.com/ejay-detera) |
| [Gabriel Nicolai Pelagio](https://www.linkedin.com/in/gabriel-nicolai-pelagio) | Frontend Developer | [@gabiuz](https://github.com/gabiuz) |
| [Gerald Berongoy](https://www.linkedin.com/in/geraldberongoy) | Senior Backend Developer / Web Development Learning Head | [@geraldsberongoy](https://github.com/geraldsberongoy) |
| [Keith Justine A. Virgenes](https://www.linkedin.com/in/keith-justine-virgenes-749225302) | Backend Developer / QA | [@jhonkeithman123](https://github.com/jhonkeithman123) |
| [Mobaraq Camar](https://www.linkedin.com/in/mobaraq-camar-6858b426a) | Frontend Developer | [@Zanti00](https://github.com/Zanti00) |
| [Reynard John B. Rabanal](https://www.linkedin.com/in/reynard-john-b-rabanal-88893837a) | Frontend Dev | [@Reynard-sys](https://github.com/Reynard-sys) |
| [Rhandie Sales](https://www.linkedin.com/in/rhandie-sales) | Senior Frontend Developer / Web Development Co Lead | [@r0undy](https://github.com/r0undy) |

