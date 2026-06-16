# QA & Test Plan (QAD)

**Project:** SparkFest 2026 Website
**Date:** 2026-06-17
**Version:** 0.1
**Owner:** Keith & Ge (QA DRIs)
**Status:** Draft
**Last reconciled:** N/A — not yet reconciled with code
**PRD:** [prd-sparkfest.md](prd-sparkfest.md)
**SDD:** [sdd-sparkfest.md](sdd-sparkfest.md) · **DSD:** [dsd-sparkfest.md](dsd-sparkfest.md) · **Tasks:** [../tasks.md](../tasks.md)
**RFC(s):** N/A

---

> This is a **static marketing site** (no backend, no database, no auth, no AI). The QA surface is therefore: correctness of the few interactive client behaviors, fidelity across the four responsive tiers, accessibility, and performance. The QA pair (**Keith & Ge**) signs off each section built by its [section DRI](../tasks.md#section-ownership-dris) before it's marked done, and owns the final release gate.

---

## 1. Testing Strategy & Scope

**In Scope:**
- All Must-Have PRD features: **PRD-F1** (Hero + CTA + countdown) through **PRD-F6** (responsive layout).
- The three client interactions: live countdown, placeholder CTA toasts (Photobooth / DP Frame), FAQ accordion, plus nav anchor-scroll and mobile drawer.
- Responsive fidelity at all four tiers (320 / 768 / 1280 / 1920) against the Figma frames.
- Accessibility (WCAG AA) and performance (per [SDD §7](sdd-sparkfest.md)).
- Outbound redirects open correctly and safely (`target="_blank" rel="noopener noreferrer"`).

**Out of Scope:**
- Backend / API / database testing (there is none — registration is an external Google Form).
- Load / stress testing (static assets on Cloudflare CDN; not applicable for V1).
- Legacy browsers (IE11); pre-2023 browser versions.
- The Photobooth and DP Frame *destination apps* (separate projects; here we only test the placeholder behavior).

**Testing levels:**

| Level | Tooling | Owner |
|-------|---------|-------|
| Static analysis | `npm run lint` (ESLint 9) + `tsc` typecheck | Engineer (section DRI) |
| Build verification | `npm run build` (Next 16 static export) | Engineer (section DRI) |
| Component / unit | _None yet_ — **recommended:** Vitest + React Testing Library for the countdown + toast logic | Engineer |
| E2E | _None yet_ — **recommended:** Playwright for happy paths H-01…H-06 | QA |
| Manual exploratory | Browser DevTools responsive mode + real phone | Keith & Ge |
| Accessibility | axe DevTools / Lighthouse + keyboard + screen reader (NVDA/VoiceOver) | Keith & Ge |

> **Note:** the repo currently ships only `lint` and `build` scripts ([package.json](../package.json)) — there is no automated test runner. Until Vitest/Playwright are added, the launch gate leans on **lint + build + Lighthouse + the manual matrix below**. Adding the two suites is tracked as a recommendation, not a launch blocker for this static site.

---

## 2. Test Environments & Data

**Local:** `npm run dev` → `http://localhost:3000`
**Static build preview:** `npm run build` → serve the `out/` export.
**Staging URL:** Cloudflare Pages **preview** deployment (auto-built per PR, per [SDD §6](sdd-sparkfest.md)).
**Production URL:** Cloudflare Pages on `main`.

**Data policy:** No user data is collected or stored by the site. Registration data lives entirely in the external Google Form. There is no test PII to manage.

**Test data setup:** None required — all content is static in [`src/app/components/content.ts`](../src/app/components/content.ts).

---

## 3. Core Test Scenarios

*Mapped to PRD User Stories (US-##) and Features (PRD-F#).*

### Happy Paths (must all pass before launch)

| ID | Scenario | Steps | Expected Result | Trace |
|----|----------|-------|-----------------|-------|
| H-01 | Registration CTA | Click "Register Now – It's Free" (Hero and Final CTA) | Opens `https://forms.gle/RvTz12mqGWmVX9mn8` in a **new tab** | US-01 / PRD-F1 |
| H-02 | Live countdown | Load page | Days/Hours/Minutes/Seconds render and tick every second toward 2026-06-25 09:00 (+08:00); no hydration mismatch in console | US-01 / PRD-F1 |
| H-03 | Photobooth placeholder | Click "Try the Photobooth" | Dismissible toast ("Coming soon…") appears; **no navigation** | US-02 / PRD-F4 |
| H-04 | DP Frame placeholder | Click "Get Your DP Frame" | Dismissible toast appears; **no navigation** | US-02 / PRD-F5 |
| H-05 | FAQ accordion | Click a question | Panel expands with smooth height transition; `aria-expanded` flips; others behave per chosen single/multi-open rule | PRD-F2 |
| H-06 | Nav + scroll-spy | Click each nav link; scroll the page | Anchor-scrolls to the right section; active link reflects scroll position; mobile drawer opens/closes on XS | PRD-F6 |
| H-07 | Responsive render | View at 320, 768, 1280, 1920 | Each tier matches its Figma frame; no clipping/overflow | PRD-F6 |

### Sad Paths (edge cases & error handling)

| ID | Scenario | Input / Trigger | Expected Behavior |
|----|----------|-----------------|-------------------|
| S-01 | Countdown after target date | System clock past 2026-06-25 09:00 | Shows a graceful expired/zero state — never negative numbers or `NaN` |
| S-02 | JavaScript disabled | Load with JS off | Static content (copy, layout, links) still readable; countdown/accordion degrade without breaking layout |
| S-03 | Rapid toast spam | Click a placeholder CTA repeatedly | Toast doesn't stack/duplicate uncontrollably; auto-dismiss timer (6s) still resolves |
| S-04 | Very narrow viewport (320px) | Resize to 320 | No horizontal scrollbar; tap targets ≥ 48px; text legible |
| S-05 | Reduced motion | OS "reduce motion" on | Lightning/mascot/scroll animations suppressed per [tasks.md T5.5](../tasks.md) |
| S-06 | Slow network | Throttle to Slow 3G | Below-the-fold art lazy-loads; no layout shift (CLS) as images arrive |

### Abuse / Adversarial Paths (public internet)

*A static site has a small attack surface, but it is public. These are the relevant checks.*

| ID | Attack | Trigger | Expected Defense |
|----|--------|---------|------------------|
| AB-01 | Reverse tabnabbing | Click any `target="_blank"` external link | All carry `rel="noopener noreferrer"` (confirmed in [Hero.tsx](../src/app/components/Hero.tsx), [FinalCta.tsx](../src/app/components/FinalCta.tsx), [Nav.tsx](../src/app/components/Nav.tsx)) |
| AB-02 | XSS via content | Inspect how rich copy (e.g. `*emphasis*` in `content.ts`) is rendered | Content is static and rendered as React nodes — **no `dangerouslySetInnerHTML`** anywhere in `src/` (verified). Keep it that way. |
| AB-03 | Clickjacking | Attempt to iframe the site | Set `X-Frame-Options: DENY` / CSP `frame-ancestors 'none'` via Cloudflare Pages `_headers` |
| AB-04 | Secret leakage | Search the static bundle | No API keys/secrets in client output ([SDD §5](sdd-sparkfest.md)); confirm no `.env` values inlined |

---

## 4. Automation vs. Manual Testing

### Automated (CI on every PR)

```yaml
# Runs on each PR / Cloudflare Pages preview build:
- npm run lint        # ESLint 9 (eslint-config-next)
- npx tsc --noEmit    # TypeScript typecheck
- npm run build       # Next 16 static export must succeed (output: 'export')
# Recommended next:
- npx playwright test # happy paths H-01..H-06 once Playwright is added
```

**CI gate:** PR cannot merge if lint, typecheck, or build fails.

### Manual / Exploratory (Keith & Ge)

- Responsive matrix at 320 / 768 / 1280 / 1919 / 1920, plus the in-between widths (1023, 1279, 1919) for snapping/jank — [tasks.md T4.5](../tasks.md).
- Keyboard-only pass: tab through nav, CTAs, FAQ accordion, toast dismiss; visible focus rings everywhere.
- Screen-reader pass on the FAQ accordion (`aria-expanded`) and the placeholder toast (`role="status" aria-live="polite"`, already in [PlaceholderCta.tsx](../src/app/components/PlaceholderCta.tsx)).
- Lighthouse run (mobile preset) on the production build.
- 30-min free exploratory session simulating a real student visitor on a mid-range Android phone.

---

## 5. Bug Triage Protocol

| Severity | Definition | Action |
|----------|------------|--------|
| **P0 — Blocker** | Site won't build/deploy; registration CTA broken; crash on load; horizontal scroll that breaks a whole tier | Cannot launch. Fix immediately. |
| **P1 — High** | A core section unusable on a tier; countdown wrong/NaN; placeholder CTA navigates away or never dismisses; AA contrast failure on primary text | Cannot launch. Fix before release. |
| **P2 — Medium** | Visual drift from Figma with acceptable workaround; minor animation jank; non-primary contrast nit | Can launch. Fix next iteration. |
| **P3 — Low** | Copy typo, 1–2px spacing, decorative polish | Can launch. Backlog. |

**Launch-blocking threshold:** **P0 + P1** must be zero.
**Bug tracking:** GitHub Issues with `bug/P0`…`bug/P3` labels; tag the responsible [section DRI](../tasks.md#section-ownership-dris).

---

## 6. Release Criteria (Definition of Done)

Launch is approved when all are true:

- [ ] All P0 bugs resolved.
- [ ] All P1 bugs resolved.
- [ ] Happy paths H-01 through H-07 pass on the Cloudflare **preview** build.
- [ ] `npm run lint`, `tsc --noEmit`, and `npm run build` all clean (no errors/warnings).
- [ ] Responsive matrix passes at 320 / 768 / 1280 / 1920 with no horizontal scroll and no Figma-breaking drift.
- [ ] Keyboard + screen-reader pass on countdown, FAQ accordion, placeholder toast, and nav.
- [ ] Lighthouse (mobile): **Performance ≥ 90**, **Accessibility ≥ 95**, **Best Practices ≥ 95**, **SEO ≥ 95**; **FCP < 1.0s** per [SDD §7](sdd-sparkfest.md).
- [ ] WCAG **AA** contrast verified on all neon/pixel text over dark backgrounds ([DSD §6](dsd-sparkfest.md), [tasks.md T5.1](../tasks.md)).
- [ ] `_headers` (or equivalent) sets security headers on Cloudflare Pages (AB-03).
- [ ] Manual exploratory session completed with no new P0/P1.

---

## 7. AI / LLM Evaluation

**Not applicable.** SparkFest 2026 has **no AI or agent features** ([PRD §7](prd-sparkfest.md)). This section is intentionally skipped. If an AI feature is ever added (e.g. an AI Sparky chat), a Change Record must add the eval suite and red-team rows here.

---

## Self-Check

- [x] Every Must-Have PRD feature (PRD-F1…F6) has at least one Happy Path.
- [x] Every Happy Path has a corresponding Sad Path or edge case.
- [x] Abuse/adversarial paths defined for the public surface (tabnabbing, XSS, clickjacking, secrets).
- [x] Automated checks (lint/typecheck/build) defined for CI; E2E flagged as recommended.
- [x] Section 7 correctly marked N/A (no AI).
- [x] Release criteria are binary pass/fail.
- [x] No test-data setup needed (static content) — documented.
