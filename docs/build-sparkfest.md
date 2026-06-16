# Project Build Guide

**Project:** SparkFest 2026 Website
**Date:** 2026-06-17
**Version:** 0.1
**Owner:** GDG PUP Manila
**Status:** Draft
**Last reconciled:** 2026-06-17 (against repo `package.json`, `next.config.ts`, `globals.css`, `eslint.config.mjs`)
**PRD:** [prd-sparkfest.md](prd-sparkfest.md) · **SDD:** [sdd-sparkfest.md](sdd-sparkfest.md) · **DSD:** [dsd-sparkfest.md](dsd-sparkfest.md) · **QAD:** [qad-sparkfest.md](qad-sparkfest.md) · **SAD:** [sad-sparkfest.md](sad-sparkfest.md) · **Tasks:** [../tasks.md](../tasks.md)

---

> **What this is:** the operating manual for whoever **builds** SparkFest — human or AI agent, on any IDE. The other FMD docs say *what* and *how* to design; this says *how we actually work in this repo*: read order, the exact pinned stack and its current conventions, golden-path patterns to copy, and the guardrails. **It is the canonical source; it materializes to the project-root [`AGENTS.md`](../AGENTS.md)** (+ a thin [`CLAUDE.md`](../CLAUDE.md) pointer). Edit *this* file, then re-materialize — never hand-edit the root copies as the source of truth.

---

## 1. How to Build From These Docs

The documentation suite is the source of truth. Read in this order before writing code:

1. **[`docs/index.md`](index.md)** — what exists, each doc's status, what's stale. Start here every session.
2. **[PRD](prd-sparkfest.md)** — what to build and why (features `PRD-F1…F6`, user stories, flows).
3. **[SDD](sdd-sparkfest.md)** — architecture (static export, redirects, security, NFRs).
4. **[DSD](dsd-sparkfest.md)** — visual/UX rules (palette, fonts, motion).
5. **[QAD](qad-sparkfest.md)** — the test scenarios and release gate each section must pass.
6. **This guide** — stack conventions, patterns, guardrails.
7. **[tasks.md](../tasks.md)** — the live build tracker and **per-section ownership (DRIs)**.

> **Doc status note:** the suite is currently **Draft** (pre-implementation). Treat each doc as the best-available source; when a section is built and reality is settled, its owner moves the relevant doc toward `Locked`. If reality diverges from a doc, don't silently code around it — flag it and (once a doc is Locked) open a Change Record (`docs/cr-sparkfest-NNN.md`).

### Traceability map — "to build X, read Y"

| To implement… | Read | Then verify against |
|---------------|------|---------------------|
| A feature `PRD-F#` | [PRD](prd-sparkfest.md) §3/§4 → [SDD](sdd-sparkfest.md) components it touches | [QAD](qad-sparkfest.md) scenarios tagged with its `US-##` |
| A page section (2.1–2.11) | [tasks.md](../tasks.md) Phase 2 (the section + its owner) → [DSD](dsd-sparkfest.md) palette/type → Figma frame via [figma-mcp-setup.md](figma-mcp-setup.md) | [QAD §3](qad-sparkfest.md) H-07 responsive + [DSD](dsd-sparkfest.md) a11y |
| The countdown / an interactive bit | [SDD §1](sdd-sparkfest.md) (client-side, hydration-safe) → [PRD](prd-sparkfest.md) US-01 | [QAD](qad-sparkfest.md) H-02 / S-01 |
| A placeholder CTA (Photobooth/DP Frame) | [PRD](prd-sparkfest.md) PRD-F4/F5 → [`PlaceholderCta.tsx`](../src/app/components/PlaceholderCta.tsx) | [QAD](qad-sparkfest.md) H-03/H-04 |
| A new/changed design token | [DSD](dsd-sparkfest.md) → [`globals.css`](../src/app/globals.css) `@theme` | [QAD](qad-sparkfest.md) AB-02 + `design-token-auditor` |

---

## 2. Subagents

This project's specialist build agents are defined in the [SAD](sad-sparkfest.md) and materialized to [`.claude/agents/`](../.claude/agents): `figma-section-builder`, `responsive-qa-runner`, `design-token-auditor`, `a11y-auditor`. Spawn them per the SAD's orchestration (§4): builder produces a section → token + a11y auditors review the diff → QA runner gates. On IDEs without a subagent primitive, adopt the cards as named roles ([SAD §5](sad-sparkfest.md)).

---

## 3. Stack Currency & Deprecations

> **The rule that prevents stale code:** do **not** rely on training memory for the conventions of fast-moving frameworks — they get renamed and replaced after the model's cutoff. Before writing framework code, verify against the official docs for the pinned version below. If you can't verify, say so and ask — never emit a plausible-but-stale API. **This register overrides training memory.**

### Pinned stack

| Layer | Technology | Pinned version | Verified | Authoritative source |
|-------|------------|----------------|----------|----------------------|
| Language | TypeScript | `^5` | 2026-06-17 | [`tsconfig.json`](../tsconfig.json) |
| Framework | Next.js (App Router, **static export**) | `16.2.7` | 2026-06-17 | [`package.json`](../package.json) · [nextjs.org/docs/app/guides/static-exports](https://nextjs.org/docs/app/guides/static-exports) |
| UI runtime | React / React DOM | `19.2.4` | 2026-06-17 | [`package.json`](../package.json) |
| Styling | Tailwind CSS (**v4, CSS-first**) via `@tailwindcss/postcss` | `^4` | 2026-06-17 | [`globals.css`](../src/app/globals.css) · [tailwindcss.com/blog/tailwindcss-v4](https://tailwindcss.com/blog/tailwindcss-v4) |
| Lint | ESLint (**flat config**) + `eslint-config-next` | `^9` / `16.2.7` | 2026-06-17 | [`eslint.config.mjs`](../eslint.config.mjs) |
| Fonts | Google Sans + Press Start 2P via CSS `@import` | — | 2026-06-17 | [`globals.css`](../src/app/globals.css) |
| Hosting | Cloudflare Pages (serves static `out/`) | — | 2026-06-17 | [SDD §6](sdd-sparkfest.md) |

**Commands:** `npm run dev` (local) · `npm run lint` (ESLint) · `npm run build` (static export → `out/`). There is **no test runner yet** (see [QAD §1](qad-sparkfest.md)).

### Deprecations & convention changes — DO NOT use the stale form

A living register. Add a row whenever drift is caught. When it conflicts with what you "know," **the register wins.**

| ❌ Stale / deprecated | ✅ Current convention (this repo) | Since | Source |
|----------------------|-----------------------------------|-------|--------|
| `tailwind.config.js` + `theme.extend` | CSS-first `@theme { … }` in [`globals.css`](../src/app/globals.css) | Tailwind v4 | [v4 blog](https://tailwindcss.com/blog/tailwindcss-v4) |
| `@tailwind base; @tailwind components; @tailwind utilities;` | `@import "tailwindcss";` | Tailwind v4 | [v4 blog](https://tailwindcss.com/blog/tailwindcss-v4) |
| PostCSS `tailwindcss` plugin | `@tailwindcss/postcss` plugin | Tailwind v4 | [`postcss.config.mjs`](../postcss.config.mjs) |
| `npx tailwindcss init`, `content: [...]` array | Automatic content detection — no config file | Tailwind v4 | [v4 blog](https://tailwindcss.com/blog/tailwindcss-v4) |
| `next export` CLI command | `output: 'export'` in [`next.config.ts`](../next.config.ts) | Next 14+ | [static-exports](https://nextjs.org/docs/app/guides/static-exports) |
| `pages/` Router, `getStaticProps`/`getServerSideProps` | App Router (`src/app/`), Server Components | Next 13+ | [static-exports](https://nextjs.org/docs/app/guides/static-exports) |
| `<Image>` default loader under static export | `images: { unoptimized: true }` (already set) | — | [export-image-api](https://nextjs.org/docs/messages/export-image-api) |
| `next/head` `<Head>` for metadata | `export const metadata` in `layout.tsx`/`page.tsx` | App Router | repo [`layout.tsx`](../src/app/layout.tsx) |
| `.eslintrc.json` | Flat config [`eslint.config.mjs`](../eslint.config.mjs) (`defineConfig`) | ESLint 9 | [`eslint.config.mjs`](../eslint.config.mjs) |
| `React.forwardRef` to receive a `ref` | `ref` is a normal prop on function components | React 19 | react.dev |
| `import React from "react"` just for JSX / `React.FC` | Not needed (automatic JSX runtime); import hooks by name | React 17+/19 | react.dev |

**Fast-moving deps — verify live before coding:** Next.js, React, Tailwind. Confirm the API shape against current docs every time.

**Self-anneal:** when drift is found, add a row here (and a Change Record if behavior changed). The register only works if it grows.

---

## 4. Golden-Path Patterns

> Version-tagged and dated. Confirm a sample still matches §3 before copying; a sample two majors stale is worse than none. These show *this repo's* canonical shapes — link to the real file for the full example.

### Section component (Server Component — the default) · *verified 2026-06-17 · Next 16.2.7 / React 19 / Tailwind v4*

```tsx
// src/app/components/WhatGoesDown.tsx — no "use client": static content renders on the server.
import { WHAT_GOES_DOWN, COLOR_TEXT } from "./content";

export default function WhatGoesDown() {
  return (
    <section id="highlights" className="bg-navy-900 px-4 py-20 md:px-8 xl:px-16">
      <h2 className="font-pixel text-grid-cyan">What Goes Down</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {WHAT_GOES_DOWN.map((item) => (
          <article key={item.title} className="border-2 border-navy-700 bg-navy-800 p-6">
            <h3 className={`font-pixel ${COLOR_TEXT[item.color]}`}>{item.title}</h3>
            <p className="text-white/80">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
```

*Why this shape:* copy comes from [`content.ts`](../src/app/components/content.ts) (never hardcoded); colors come from the `COLOR_*` token maps, not raw hex; layout is **mobile-first** and layers up with `md:` / `xl:` per the [breakpoint strategy](../tasks.md). No `"use client"` unless the component needs state/effects/handlers.

### Client interactive component · *verified 2026-06-17 · React 19*

```tsx
"use client"; // required: this component uses state + effects
import { useState } from "react";
// Pattern mirrors src/app/components/PlaceholderCta.tsx
```

*Why this shape:* the `"use client"` directive is mandatory for anything with `useState`/`useEffect`/event handlers. For the **countdown**, compute time only after mount (in `useEffect`) so server and client first-render match — avoids hydration mismatch ([SDD §1](sdd-sparkfest.md)). For toasts/dialogs use `role="status" aria-live="polite"` as [`PlaceholderCta.tsx`](../src/app/components/PlaceholderCta.tsx) does.

### Add a design token · *verified 2026-06-17 · Tailwind v4*

```css
/* src/app/globals.css */
:root { --color-spark-orange: #ff7a18; }   /* 1. define the raw value */
@theme { --color-spark-orange: var(--color-spark-orange); } /* 2. expose to Tailwind */
/* 3. use it as a normal utility: class="bg-spark-orange text-spark-orange" */
```

*Why this shape:* Tailwind v4 generates `bg-*`/`text-*`/`border-*` utilities from `--color-*` keys in `@theme`. **Adding a top-level token is a DSD change** — get it into [DSD](dsd-sparkfest.md) and don't let it sprawl (the `design-token-auditor` enforces this).

### External CTA link · *verified 2026-06-17*

```tsx
<a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">Register Now – It's Free</a>
```

*Why this shape:* every new-tab external link **must** carry `rel="noopener noreferrer"` (reverse-tabnabbing defense, [QAD](qad-sparkfest.md) AB-01). `REGISTER_URL` lives in [`content.ts`](../src/app/components/content.ts).

---

## 5. Conventions & Guardrails

**Repo layout:** `src/app/` (App Router) · `src/app/components/` (one file per section + shared `Nav`/`Footer`/`PlaceholderCta`/`decor`) · `src/app/components/content.ts` (all copy + tokens + types) · `src/app/globals.css` (CSS-first Tailwind theme) · `public/assets/` (sprites/art) · `docs/` (this suite) · `.claude/agents/` (materialized subagents).

**Naming:** Components `PascalCase` default-exported (`Hero.tsx`); shared content constants `SCREAMING_SNAKE` (`WHAT_GOES_DOWN`, `REGISTER_URL`); section anchor ids match `NAV_LINKS` hrefs in `content.ts`.

**Always:**
- Pull copy/data from [`content.ts`](../src/app/components/content.ts); pull colors from the `COLOR_*` maps / `@theme` tokens.
- Build **mobile-first** (base → `md:` → `xl:` → `desktop:`); every section must pass all four tiers ([QAD](qad-sparkfest.md) H-07).
- Default to **Server Components**; add `"use client"` only when interactivity needs it.
- Keep external links `target="_blank" rel="noopener noreferrer"`.

**Never:**
- Use a deprecated form from §3 because it "looks right" from memory.
- Use `dangerouslySetInnerHTML` (none exists today — [QAD](qad-sparkfest.md) AB-02).
- Hardcode copy that belongs in `content.ts`, or invent hex outside the DSD tokens.
- Commit secrets. (None today; the build is fully static — keep it that way.)

**Tests / checks:** run `npm run lint` and `npm run build` clean before claiming done; a section is done only when its [QAD](qad-sparkfest.md) happy paths pass at all four tiers and `responsive-qa-runner` + `design-token-auditor` + `a11y-auditor` are green.

**Definition of Done (one section/task):**
- [ ] Implements the referenced `PRD-F#` / `US-##` acceptance criteria
- [ ] Matches the Figma frame at 320 / 768 / 1280 / 1920
- [ ] Verified framework conventions against §3 (no stale APIs)
- [ ] `npm run lint` + `npm run build` clean
- [ ] Copy from `content.ts`; colors from tokens; a11y checks pass
- [ ] Touched a Locked doc's assumptions? → logged a Change Record

---

## 6. Materialization

| Target | File | Notes |
|--------|------|-------|
| **Canonical** | `docs/build-sparkfest.md` | **edit here** |
| All agents / AGENTS.md-aware IDEs (Antigravity, Cursor, Codex…) | [`AGENTS.md`](../AGENTS.md) (project root) | materialized build rules; auto-read |
| Claude Code | [`CLAUDE.md`](../CLAUDE.md) | thin pointer to `AGENTS.md` + Claude-only notes |
| Cursor | `.cursor/rules/build.mdc` | add a pointer (`alwaysApply: true`) when Cursor is adopted |
| Kiro | `.kiro/steering/build.md` | add a pointer when Kiro is adopted |

Re-materialize whenever this guide changes. Treat the root copies as build artifacts, not sources of truth.
