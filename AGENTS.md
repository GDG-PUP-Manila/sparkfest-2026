# AGENTS.md — SparkFest 2026 Website

> **Materialized from [`docs/build-sparkfest.md`](docs/build-sparkfest.md) (the canonical Build Guide). Edit there, then re-materialize — do not hand-edit this file as the source of truth.** Full detail, traceability map, and golden-path samples live in the Build Guide; this is the always-loaded summary every agent/IDE reads first.

SparkFest 2026 is a **one-page static marketing site** (retro pixel-arcade theme) for GDG on Campus – PUP. Next.js 16 App Router exported to static HTML, hosted on Cloudflare Pages.

## Read order (every session)
1. [`docs/index.md`](docs/index.md) — doc status / what's stale.
2. [PRD](docs/prd-sparkfest.md) → 3. [SDD](docs/sdd-sparkfest.md) → 4. [DSD](docs/dsd-sparkfest.md) → 5. [QAD](docs/qad-sparkfest.md) → 6. this guide → 7. [tasks.md](tasks.md) (build tracker + **per-section owners**).

Docs are currently **Draft** (pre-implementation) — treat as best-available; flag divergence rather than silently coding around it.

## Subagents
Defined in the [SAD](docs/sad-sparkfest.md), materialized in [`.claude/agents/`](.claude/agents): `figma-section-builder`, `responsive-qa-runner`, `design-token-auditor`, `a11y-auditor`. Other IDEs adopt these as named roles.

## Pinned stack (verified 2026-06-17)
- **Next.js 16.2.7** — App Router, **static export** (`output: 'export'` in `next.config.ts`, `images: { unoptimized: true }`).
- **React 19.2.4** — Server Components by default; `"use client"` only for interactivity.
- **Tailwind CSS v4** — CSS-first; theme in `src/app/globals.css` via `@theme`; PostCSS plugin `@tailwindcss/postcss`.
- **ESLint 9** — flat config (`eslint.config.mjs`). **TypeScript ^5.**
- Commands: `npm run dev` · `npm run lint` · `npm run build` (→ `out/`). **No test runner yet.**

## Deprecations register — the stale forms NOT to use (overrides training memory)
| ❌ Stale | ✅ Use |
|---|---|
| `tailwind.config.js` / `@tailwind base…` | `@import "tailwindcss";` + `@theme {}` in `globals.css` (Tailwind v4) |
| `next export` CLI | `output: 'export'` in `next.config.ts` |
| `pages/` Router, `getStaticProps` | App Router (`src/app/`), Server Components |
| `<Image>` default loader on export | `images: { unoptimized: true }` (set) |
| `next/head` `<Head>` | `export const metadata` |
| `.eslintrc.json` | flat `eslint.config.mjs` (ESLint 9) |
| `React.forwardRef`, `import React`/`React.FC` for JSX | `ref` as a prop; no React import needed for JSX (React 19) |

Fast-moving — verify live before coding: **Next.js, React, Tailwind.** Full register + sources: [Build Guide §3](docs/build-sparkfest.md#3-stack-currency--deprecations).

## Conventions
- Copy/data from `src/app/components/content.ts`; colors from its `COLOR_*` maps and `globals.css` `@theme` tokens — **never raw hex**.
- **Mobile-first**: base → `md:` → `xl:` → `desktop:`; every section must match Figma at 320 / 768 / 1280 / 1920.
- Components `PascalCase` default-exported; shared constants `SCREAMING_SNAKE`.
- External links: `target="_blank" rel="noopener noreferrer"`. Never use `dangerouslySetInnerHTML`. Never commit secrets.
- Figma → code via the [Figma MCP](docs/figma-mcp-setup.md).

## Definition of Done (a section)
Implements its `PRD-F#`/`US-##` · matches Figma at all four tiers · no stale APIs (§ register) · `npm run lint` + `npm run build` clean · copy from `content.ts`, colors from tokens, a11y passes ([QAD](docs/qad-sparkfest.md)).
