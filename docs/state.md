# Project State: SparkFest 2026 Website

**Project slug:** `sparkfest`
**Owner:** GDG PUP Technology (incoming CTO)
**Last updated:** 2026-09-02

**Handover note:** Outgoing CTO Carlos Jerico Dela Torre stepped down 2026-09-02. Treat this file as the cold-start position for the next Technology lead and for agents.

---

## 1. Position

| Field | Value |
|-------|-------|
| **Current milestone** | Operate |
| **Entered on** | 2026-07-09 (approx; site shipping on Cloudflare Pages) |
| **Exit condition** | Event season fully closed and site retired or replaced for the next edition |
| **Next milestone** | Grow (content refresh for next SparkFest) or Retire |
| **Current blocker** | Live Photobooth / DP Frame URLs still pending; Judges copy is TBA |
| **Owner of the next step** | GDG PUP Technology (incoming CTO) |

**What we are building, in one line:** One-page static marketing site for SparkFest 2026 (pixel-arcade theme), hosted on Cloudflare Pages.

**Engagement type:** Internal chapter product (event marketing), not a commercial engagement.

**Live URL:** https://sparkfest.gdgpup.org

---

## 2. Active signals

| Signal | True? | Evidence | Requires |
|--------|-------|----------|----------|
| S1 Frontend exists | yes | Next.js App Router sections under `src/app/components/` | DSD, public-surface review |
| S2 Backend / data / auth | no | Static export only; registration is Google Forms | No SDD backend scope |
| S5 Agent / team build | yes | SAD roster + `.claude/agents/` | BUILD + AGENTS.md |
| S8 Production deploy | yes | Cloudflare Pages, public URL | OPS |
| S9 User data in this repo | no | No PII collected by the site; Forms owns registration | No CLR |
| S11 Public surface | yes | Public README + live URL | README, crawler-safe static site |
| S16 Multiple contributors | yes | Section DRIs historically in archived `tasks.md` | CI/lint via `npm run lint` |
| S23 Brownfield | yes | Shipped code + existing FMD suite | Update docs in place; do not regenerate a fresh suite |

**Deliberate absences:**

- No BRD / UES / GTM / PITCH / WRAP / OPP / PROP (chapter event, not a commercial product).
- No CLR while Photobooth and DP Frame stay off-site placeholders. Revisit if this repo starts capturing photos or PII.
- No RFC: static page, no architectural fork open.

---

## 3. What is true in the working tree

### Shipped sections (wired in `src/app/page.tsx`)

Nav, Hero (+ HeroLightning), About, WhatGoesDown, WhoIsThisFor, Judges, RoadToDemo, WhereAndWhen, Faq, SnapAndFrame, BeforeTheSpark, FinalCta, Footer. Theme loading screen in `layout.tsx`.

### Known product gaps

| Gap | Reality | Doc implication |
|-----|---------|-----------------|
| Live countdown | PRD US-01 asked for Days/Hours/Minutes/Seconds. Current Hero is a baked Figma scene with Register CTA; no timer state in code. | PRD marks countdown as deferred / visual-only unless restored |
| Judges | `JUDGES` in `content.ts` is four "To Be Announced" entries | Content update only |
| Photobooth / DP Blast | `PlaceholderCta` still shows "Coming soon" | PRD-F4 / PRD-F5 still open until live URLs land |
| `UnderConstruction.tsx` | Defined, never imported | Dead code; safe to remove in a cleanup PR |

### Stack pins (verified 2026-09-02 against `package.json`)

Next.js 16.2.7 · React 19.2.4 · Tailwind CSS v4 (lock 4.3.0) · ESLint 9 · TypeScript ^5 · static export to `out/`.

Copy and data live in `src/app/components/content.ts`. Registration URL: `https://forms.gle/yJntfLmxigG75zSt5`.

---

## 4. Doc freshness

| Doc | Trust | Notes |
|-----|-------|-------|
| `docs/state.md` (this file) | Canonical position | Read first |
| `docs/index.md` | Inventory | Updated 2026-09-02 |
| `docs/prd-sparkfest.md` | Reconciled Draft | Screen inventory and countdown note updated |
| `docs/dsd-sparkfest.md` | Reconciled Draft | Dark pixel-arcade tokens; old light-theme draft superseded in place |
| `docs/sdd-sparkfest.md` | Mostly accurate | Static Jamstack still correct |
| `docs/build-sparkfest.md` / `AGENTS.md` | Stack pins OK | Read order now points at `state.md` |
| `docs/ops-sparkfest.md` | Partially aspirational | Confirm Cloudflare analytics, uptime, `_headers`, Dependabot outside git |
| `docs/qad-sparkfest.md` / `docs/sad-sparkfest.md` | Keep | Build phase largely done; agents still useful for polish |
| `docs/archive/2026-09-02-pre-handover/` | Historical only | Old event brief + `tasks.md` (0/95 checkboxes; do not trust as progress) |

---

## 5. Open assumptions

1. Cloudflare Pages remains the production host (OPS assumes this; verify in dashboard).
2. Incoming CTO owns doc reconciliation and any Photobooth / DP Frame URL wiring.
3. Figma MCP remains the intended path for visual fidelity work (`docs/figma-mcp-setup.md`).

---

## 6. Next actions

1. Wire live Photobooth and DP Frame URLs in `SnapAndFrame.tsx` / content when ready; drop `PlaceholderCta` for those CTAs.
2. Replace TBA judges in `content.ts`.
3. Decide whether a live countdown must return to Hero (product call); update PRD if restoring.
4. Reconcile OPS claims against the real Cloudflare project (analytics, uptime, security headers).
5. Optional cleanup: remove unused `UnderConstruction.tsx`.
