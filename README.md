# SparkFest 2026 Website

The official 1-page static marketing website for SparkFest 2026, a flagship hackathon organized by **Google Developer Groups on Campus - Polytechnic University of the Philippines (GDG PUP)**.

This innovation challenge mirrors real-world startup environments, bringing together developers, designers, and managers to build solutions that drive tangible social impact.

## 🚀 Technology Stack

- **Core Framework**: Next.js 16 (Static HTML Export) + React 19
- **Styling**: Tailwind CSS v4 + Google Fonts (Google Sans)
- **Deployment Target**: Cloudflare Pages

## 📂 Documentation (FMD)

The project specifications and blueprints are managed under the **Foundational Document Matrix (FMD)** in the `docs/` folder:
- [index.md](docs/index.md): Document suite status tracker.
- [prd-sparkfest.md](docs/prd-sparkfest.md): Product Requirements Document specifying features, personas, and roadmap goals.
- [dsd-sparkfest.md](docs/dsd-sparkfest.md): Design System Document specifying color palettes (Google colors, Halftones, Pastels) and fonts.
- [sdd-sparkfest.md](docs/sdd-sparkfest.md): System Design Document detailing static architecture and export rules.

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
The Photobooth and DP Blast CTAs in the landing page are placeholder integrations. When clicked, they display a toast notification detailing the specific codebase lines in `src/app/page.tsx` that need updating with production links.

