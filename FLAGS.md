# FLAGS

Improvement register for this repository. Documentation handover only - do not treat Open rows as bugs fixed in the docs PR.

Status: **Open** (actionable later) or **Accepted** (known limitation).

| ID | Severity | Finding | Evidence | Suggested next step | Status |
| --- | --- | --- | --- | --- | --- |
| F1 | Medium | Photobooth and DP Frame CTAs still show Coming soon; live URLs not wired. | [docs/state.md](docs/state.md) known product gaps; README Developer CTA Booths Note; QAD H-03 | Wire production Photobooth / DP Frame URLs when available; drop PlaceholderCta for those CTAs. | Open |
| F2 | Medium | OPS Cloudflare claims (analytics, uptime, `_headers`, Dependabot) need dashboard verify. | [docs/ops-sparkfest.md](docs/ops-sparkfest.md) Last reconciled N/A; [docs/state.md](docs/state.md) doc freshness; [docs/index.md](docs/index.md) health check | Confirm against real Cloudflare Pages project; update OPS or mark Accepted gaps. | Open |
| F3 | Low | QAD not fully reconciled with shipped code. | [docs/qad-sparkfest.md](docs/qad-sparkfest.md) Last reconciled N/A | Walk QAD scenarios against live site / preview; update Last reconciled. | Open |
| F4 | Low | Judges copy is still TBA. | [docs/state.md](docs/state.md) blocker and Judges gap; `JUDGES` TBA entries called out there | Replace TBA judges when lineup is final. | Open |
