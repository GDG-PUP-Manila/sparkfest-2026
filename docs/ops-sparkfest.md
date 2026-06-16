# Operations & Observability Runbook (OPS)

**Project:** SparkFest 2026 Website
**Date:** 2026-06-17
**Version:** 0.1
**Owner:** GDG PUP Manila
**Status:** Draft
**Last reconciled:** N/A — not yet reconciled with prod
**SDD:** [sdd-sparkfest.md](sdd-sparkfest.md) · **PRD:** [prd-sparkfest.md](prd-sparkfest.md) · **QAD:** [qad-sparkfest.md](qad-sparkfest.md)

---

> **Scope reality:** this is a **static site on Cloudflare Pages** — no server, no database, no runtime backend ([SDD §1–§3](sdd-sparkfest.md)). The operational surface is therefore small: keep the CDN-served page up and fast, keep the build pipeline green, and watch the two **external dependencies** (the registration Google Form and the third-party font CDNs). The real operational risk is not "the server falls over" — it's a **bad deploy** or a **traffic spike at the two event moments** (Kick-Off June 25, Demo Day July 9, 2026).

---

## 1. SLOs & SLIs

Targets pulled from [SDD §7](sdd-sparkfest.md) NFRs; this is where we commit to measuring them.

| SLI (what you measure) | SLO (target) | Measured by | Breach action |
|------------------------|--------------|-------------|---------------|
| Availability (page loads) | ≥ 99.9% / mo | Uptime monitor (e.g. UptimeRobot) + Cloudflare Pages status | Investigate on 2 consecutive failed checks; redeploy last-good (see §4) |
| First Contentful Paint | < 1.0s | Cloudflare Web Analytics (Core Web Vitals / RUM) + Lighthouse | If p75 > 1.0s, profile assets (font CDN, image weight) |
| Largest Contentful Paint | < 2.5s (Good) | Cloudflare Web Analytics | Optimize hero image / lazy-load below-fold art |
| Build success rate | 100% on `main` | Cloudflare Pages build dashboard | Block promotion; fix build before it reaches prod |
| Registration link reachable | 100% | Manual/synthetic check of `forms.gle/RvTz12mqGWmVX9mn8` | If Google Form down, post notice; escalate to organizers |

> No API latency / error-rate / cost SLIs — there is no server runtime to measure them on.

---

## 2. Observability — Logs, Metrics, Traces

There is no application server, so the three pillars collapse to **edge analytics + build logs**.

| Pillar | Tool | What's captured | Retention |
|--------|------|-----------------|-----------|
| Logs | Cloudflare Pages **build logs** | Build/deploy output per commit (the only logs that exist) | Per Cloudflare retention |
| Metrics | **Cloudflare Web Analytics** (cookieless) | Page views, Core Web Vitals (FCP/LCP/CLS), top pages, referrers | Per Cloudflare retention |
| Traces | — | N/A (no distributed runtime) | — |

**Dashboards:** one Cloudflare Web Analytics view (traffic + Web Vitals) + the Pages deployments view (build health).

**No-PII rule:** the site collects **no personal data** itself ([QAD §2](qad-sparkfest.md)); all registration PII lives in Google Forms. Keep analytics cookieless (Cloudflare Web Analytics) — do not add tracking that captures PII.

**External-dependency watch (the part that actually breaks):**
- **Google Forms** (`forms.gle/…`) — registration funnel; if it's down, the primary CTA is dead.
- **Font CDNs** — `fonts.cdnfonts.com` (Google Sans) and `fonts.googleapis.com` (Press Start 2P) are loaded via `@import` in [`globals.css`](../src/app/globals.css). They are a **runtime dependency and a render-blocking perf factor**; if a CDN is slow/blocked, text rendering degrades. Consider self-hosting the fonts before the event to remove this dependency.

---

## 3. Alerting & On-Call

| Alert | Condition | Severity | Who / how notified |
|-------|-----------|----------|--------------------|
| Site down | Uptime monitor: 2 consecutive failures | P0 | Dev team chat + phone |
| Build failed on `main` | Cloudflare Pages build error | P1 | Cloudflare → email/Slack to dev team |
| Web Vitals regression | FCP p75 > 1.0s sustained | P2 | Weekly review (or daily during event window) |
| Registration form unreachable | Synthetic check fails | P1 | Dev team → organizers |

**On-call model:** solo/best-effort by the GDG PUP dev team. **Heightened watch window:** June 24 – July 9, 2026 (around Kick-Off and Demo Day) — assign one person to watch traffic and the registration funnel on those two days.

**Alert hygiene:** every alert above is actionable. A static site should be quiet — if an alert is noisy, tune or delete it.

---

## 4. Incident Response

**Severity ladder:** reuse the [QAD](qad-sparkfest.md) P0–P3 scale.

**When an incident fires:**
1. **Acknowledge** — claim it in the dev chat so it's owned.
2. **Assess** — is the page down, mis-rendering, or is an external dep (Form/fonts) the cause? Check the Cloudflare Pages deployment + uptime monitor first.
3. **Mitigate first, diagnose later** — if a recent deploy caused it, **roll back immediately** (below). If an external dep is down, post a visible notice and route around it.
4. **Communicate** — for a user-facing outage during the event window, post to GDG PUP socials/announcements.
5. **Resolve & verify** — confirm the page loads and Web Vitals are normal.
6. **Postmortem** — for any P0/P1, write `docs/pm-sparkfest-NNN.md` within 48h and fold action items back into this runbook + the [QAD](qad-sparkfest.md).

**Rollback (single source of truth: [PRD §9](prd-sparkfest.md)):** in the **Cloudflare Pages dashboard → Deployments**, promote the previous successful deployment (instant), or redeploy the previous Git tag on `main`. Static export means rollback is atomic and safe — no migrations, no state.

**Kill switches:** the placeholder Photobooth / DP Frame CTAs already fail safe (toast, no navigation — [`PlaceholderCta.tsx`](../src/app/components/PlaceholderCta.tsx)); no live integration to disable. To pull a broken section, revert its commit and redeploy.

---

## 5. Routine Operations

- **Dependency / security updates:** Dependabot (or manual `npm outdated`) — apply Next/React/Tailwind patches, then `npm run build` to confirm. Honor the [Build Guide §3](build-sparkfest.md) deprecations register on every bump.
- **Pre-event readiness (by June 24):** full [QAD §6](qad-sparkfest.md) release pass; verify registration link; Lighthouse mobile ≥ targets; confirm Cloudflare caching is serving the static assets.
- **Font dependency:** decide self-host vs CDN before the event (see §2).
- **Domain / DNS / TLS:** managed by Cloudflare (auto-renew TLS); calendar reminder as a backstop for domain expiry.
- **Cost:** Cloudflare Pages free tier is expected to cover event traffic (static + CDN); no infra spend to review.
- **Post-event:** archive analytics snapshot for the retro; lower the heightened-watch window.

---

## Self-Check

- [x] Every SLO in §1 has a real measurement source (Cloudflare / uptime monitor), not aspirational.
- [x] No PII in analytics; site collects none itself.
- [x] Every alert in §3 is actionable and routes to a real person.
- [x] §4 names the rollback mechanism (Cloudflare deployment promote / previous tag) and the fail-safe placeholders.
- [ ] A rollback has actually been rehearsed once in the Cloudflare dashboard.
- [x] P0/P1 incidents have a Postmortem SLA (48h) and the FMD PM template is ready.
