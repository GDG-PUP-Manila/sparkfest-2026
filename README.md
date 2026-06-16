# SparkFest 2026 Website

The official 1-page static marketing website for SparkFest 2026, a flagship hackathon organized by **Google Developer Groups on Campus - Polytechnic University of the Philippines (GDG PUP)**.

This innovation challenge mirrors real-world startup environments, bringing together developers, designers, and managers to build solutions that drive tangible social impact.

## 🚀 Technology Stack

- **Core Framework**: Next.js 16 (Static HTML Export) + React 19
- **Styling**: Tailwind CSS v4 + Google Fonts (Google Sans)
- **Deployment Target**: Cloudflare Pages

## 📂 Documentation (FMD)

The project specifications and blueprints are managed under the **Foundational Document Matrix (FMD)** in the `docs/` folder. Start at the index:
- [index.md](docs/index.md): Document suite status tracker, health check, and what to add next.
- [prd-sparkfest.md](docs/prd-sparkfest.md): Product Requirements Document specifying features, personas, and roadmap goals.
- [dsd-sparkfest.md](docs/dsd-sparkfest.md): Design System Document specifying color palettes (Google colors, Halftones, Pastels) and fonts.
- [sdd-sparkfest.md](docs/sdd-sparkfest.md): System Design Document detailing static architecture and export rules.
- [qad-sparkfest.md](docs/qad-sparkfest.md): QA & Test Plan — test scenarios and the release gate (QA owners: Keith & Ge).
- [sad-sparkfest.md](docs/sad-sparkfest.md): Subagents Document — the dev-helper agent roster, materialized in `.claude/agents/`.
- [build-sparkfest.md](docs/build-sparkfest.md): Build Guide — pinned stack, deprecations register, and golden-path patterns (materialized to [AGENTS.md](AGENTS.md)).
- [ops-sparkfest.md](docs/ops-sparkfest.md): Ops & Observability Runbook — SLOs, monitoring, rollback, and the event-window watch plan.

### 🧭 Guides & Tracker
- [AGENTS.md](AGENTS.md) / [CLAUDE.md](CLAUDE.md): Materialized build rules every agent/IDE reads first (canonical source: the Build Guide).
- [tasks.md](tasks.md): Implementation tracker with **per-section ownership (DRIs)** and QA owners.
- [docs/figma-mcp-setup.md](docs/figma-mcp-setup.md): Connect your IDE (**Antigravity, VS Code, Cursor, Kiro**) to the **Figma MCP** server.

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

