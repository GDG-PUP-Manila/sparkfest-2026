# Documentation Index â€” SparkFest 2026 Website

**Project slug:** `sparkfest`
**Maintained by:** GDG PUP Technology (incoming CTO)
**Last updated:** 2026-09-02
**Built on FMD v1.31.0** (suite present; reconciled in place against shipped code; engine not re-installed).

**Operating position:** [state.md](state.md) â€” read that first.

---

## 1. Artifact Inventory

| Document | File | Version | Status | Last Updated | Last Reconciled |
|----------|------|---------|--------|--------------|-----------------|
| STATE - Operating position | [state.md](state.md) | 1.0 | Current | 2026-09-02 | 2026-09-02 |
| FLAGS - Improvement register | [../FLAGS.md](../FLAGS.md) | 1.0 | Current | 2026-09-02 | 2026-09-02 |
| PRD - Product Requirements | [prd-sparkfest.md](prd-sparkfest.md) | 0.2 | Draft | 2026-09-02 | 2026-09-02 |
| DSD - Design System | [dsd-sparkfest.md](dsd-sparkfest.md) | 0.2 | Draft | 2026-09-02 | 2026-09-02 |
| SDD - System Design | [sdd-sparkfest.md](sdd-sparkfest.md) | 0.1 | Draft | 2026-06-07 | 2026-09-02 |
| QAD - QA & Test Plan | [qad-sparkfest.md](qad-sparkfest.md) | 0.1 | Draft | 2026-06-17 | N/A (not fully reconciled) |
| SAD - Subagents | [sad-sparkfest.md](sad-sparkfest.md) | 0.1 | Draft | 2026-06-17 | 2026-09-02 |
| BUILD - Build Guide | [build-sparkfest.md](build-sparkfest.md) | 0.2 | Draft | 2026-09-02 | 2026-09-02 |
| OPS - Ops & Observability | [ops-sparkfest.md](ops-sparkfest.md) | 0.1 | Draft | 2026-06-17 | N/A (verify CF dashboard) |

> **Suite scope:** BRD, RFC, CLR, and GTM stay out. See [Â§5 Notes](#5-notes).

### Reference Guides

| Guide | File | Purpose | Last Updated |
|-------|------|---------|--------------|
| Figma MCP â€” Dev IDE Setup | [figma-mcp-setup.md](figma-mcp-setup.md) | Connect Antigravity / VS Code / Cursor / Kiro to the Figma MCP server | 2026-06-17 |

### Materialized artifacts

| Artifact | Canonical source |
|----------|------------------|
| [`../AGENTS.md`](../AGENTS.md) + [`../CLAUDE.md`](../CLAUDE.md) | [build-sparkfest.md](build-sparkfest.md) (AGENTS read order: state â†’ index â†’ FLAGS â†’ task docs) |
| `../.claude/agents/` - `figma-section-builder`, `responsive-qa-runner`, `design-token-auditor`, `a11y-auditor` | [sad-sparkfest.md](sad-sparkfest.md) Â§3 |

### Archived (historical only; do not load as current truth)

| Path | Why archived |
|------|----------------|
| [archive/2026-09-02-pre-handover/](archive/2026-09-02-pre-handover/) | Pre-handover event brief + `tasks.md` (0/95 checkboxes; superseded by `state.md` for progress) |

---

## 2. Change Log

| Date | Change | Docs touched |
|------|--------|--------------|
| 2026-09-02 | Docs handover: FLAGS register; Contributors cosmos format; AGENTS/index FLAGS pointer. | FLAGS, README, AGENTS, index |
| 2026-09-02 | CTO handover: added `state.md`; reconciled PRD/DSD/index/AGENTS against shipped pixel-arcade site; archived event brief + dead task tracker. | state, index, prd, dsd, AGENTS, README, archive |
| 2026-06-17 | Added BUILD + OPS; finalized suite scope (no BRD/RFC/CLR/GTM). | index, build, ops, AGENTS, CLAUDE, README |
| 2026-06-17 | Added QAD, SAD, Figma MCP guide, section DRIs. | index, qad, sad, tasks, README, figma-mcp-setup |
| 2026-06-07 | Initial draft suite (PRD, DSD, SDD). | prd, dsd, sdd, index |

---

## 3. Incident Log (Postmortems)

No incidents recorded yet.

---

## 4. Health Check

- [x] Cold-start position exists (`state.md`).
- [x] Index lists only artifacts that exist.
- [x] SAD roster matches `.claude/agents/` (four agents).
- [x] Stack pins in BUILD/AGENTS match `package.json` (Next 16.2.7, React 19.2.4, Tailwind v4).
- [ ] OPS claims verified against Cloudflare dashboard (analytics, uptime, `_headers`, Dependabot).
- [ ] Photobooth / DP Frame live URLs wired (still PlaceholderCta).
- [ ] Judges TBA replaced with real copy.

---

## 5. Notes

### Suite scope (unchanged from 2026-06-17)

- **BRD** â€” not needed; event already committed.
- **RFC** â€” no open architectural fork.
- **CLR** â€” site collects no PII; registration is Google Forms. Revisit if in-repo capture of photos/PII lands.
- **GTM** â€” chapter marketing channels own launch.

### Operating notes

- Milestone is **Operate**, not pre-implementation. AGENTS.md and older Draft headers that said "pre-implementation" are stale; prefer `state.md`.
- SAD agents remain useful for polish (Figma fidelity, a11y, tokens), not for a greenfield section build.
- Do not trust archived `tasks.md` checkboxes as progress.
