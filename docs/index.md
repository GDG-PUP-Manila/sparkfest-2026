# Documentation Index — SparkFest 2026 Website

**Project slug:** `sparkfest`
**Maintained by:** GDG PUP Manila
**Last updated:** 2026-06-17

---

## 1. Document Suite

| Document | File | Version | Status | Last Updated | Last Reconciled |
|----------|------|---------|--------|--------------|-----------------|
| PRD — Product Requirements | [prd-sparkfest.md](prd-sparkfest.md) | 0.1 | Draft | 2026-06-07 | N/A |
| DSD — Design System | [dsd-sparkfest.md](dsd-sparkfest.md) | 0.1 | Draft | 2026-06-07 | N/A |
| SDD — System Design | [sdd-sparkfest.md](sdd-sparkfest.md) | 0.1 | Draft | 2026-06-07 | N/A |
| QAD — QA & Test Plan | [qad-sparkfest.md](qad-sparkfest.md) | 0.1 | Draft | 2026-06-17 | N/A |
| SAD — Subagents | [sad-sparkfest.md](sad-sparkfest.md) | 0.1 | Draft | 2026-06-17 | N/A |
| BUILD — Build Guide | [build-sparkfest.md](build-sparkfest.md) | 0.1 | Draft | 2026-06-17 | 2026-06-17 |
| OPS — Ops & Observability | [ops-sparkfest.md](ops-sparkfest.md) | 0.1 | Draft | 2026-06-17 | N/A |

> **Suite scope:** BRD, RFC, CLR, and GTM are intentionally **not part of this suite** — see [§5 Notes](#5-notes) for why. This is the complete set of documents for the project.

### Reference Guides (supporting, non-FMD)

| Guide | File | Purpose | Last Updated |
|-------|------|---------|--------------|
| Figma MCP — Dev IDE Setup | [figma-mcp-setup.md](figma-mcp-setup.md) | Connect Antigravity / VS Code / Cursor / Kiro to the Figma MCP server | 2026-06-17 |
| Implementation Tasks + Section Ownership | [../tasks.md](../tasks.md) | Build tracker; per-section DRIs and QA owners | 2026-06-17 |

### Materialized artifacts

These are **generated from canonical docs** — edit the doc and re-materialize; never hand-edit the artifact as the source of truth.

| Artifact | Canonical source |
|----------|------------------|
| `../AGENTS.md` (project-root build rules) + `../CLAUDE.md` (pointer) | [build-sparkfest.md](build-sparkfest.md) |
| `../.claude/agents/` — `figma-section-builder`, `responsive-qa-runner`, `design-token-auditor`, `a11y-auditor` | [sad-sparkfest.md](sad-sparkfest.md) §3 |

---

## 2. Change Log

Formal Change Records (`cr-sparkfest-NNN.md`) are required only when a **Locked** doc changes. All docs are still **Draft**, so no CR is needed yet. Suite-level changes are logged here:

| Date | Change | Docs touched |
|------|--------|--------------|
| 2026-06-17 | Added **BUILD** guide (materialized to root `AGENTS.md` + `CLAUDE.md`) and **OPS** runbook. Finalized suite scope: removed BRD/RFC/CLR/GTM from the index (out of scope). | index, build, ops, AGENTS.md, CLAUDE.md, README |
| 2026-06-17 | Expanded suite: added **QAD** (owners Keith & Ge) and **SAD** (+ materialized 4 agents in `.claude/agents/`). Added the **Figma MCP setup guide**. Added per-section DRIs and QA owners to `tasks.md`. | index, qad, sad, tasks, README, figma-mcp-setup |
| 2026-06-07 | Initial draft suite created (PRD, DSD, SDD). | prd, dsd, sdd, index |

---

## 3. Incident Log (Postmortems)

No incidents recorded yet.

---

## 4. Health Check

Quick triage an agent runs at the start of a session. Anything that fails gets surfaced to the user.

- [ ] Every Locked doc's **Last Reconciled** date is newer than the last code change to its area.
- [ ] No doc has been in `Draft` longer than expected without movement.
- [ ] Every open Change Record has propagated to all docs listed in its "Docs touched" column.
- [ ] Feature IDs (`PRD-F#`) referenced by SDD / QAD / SAD / BUILD still exist in the PRD.
- [ ] The SAD roster matches the materialized agent files in `.claude/agents/` (no orphans, no missing).
- [ ] `AGENTS.md` / `CLAUDE.md` still reflect [build-sparkfest.md](build-sparkfest.md) (re-materialize if the Build Guide changed).
- [ ] The BUILD guide's pinned versions and golden-path samples have been re-verified recently against the live deps (stale samples = stale code).
- [ ] Every open Postmortem's action items are closed (or tracked somewhere durable).

---

## 5. Notes

### FMD review — suite scope (finalized 2026-06-17)

Project scale is **Small→Medium** (a 2–4 week, public-facing static site). The suite is now **complete** for this scale: PRD, DSD, SDD, QAD, SAD, BUILD, OPS, plus the Figma MCP guide and the `tasks.md` tracker.

**Deliberately excluded** (removed from the suite, not just "unwritten"):

- **BRD** — the project is already committed and resourced; no business case to justify.
- **RFC** — no feature has real architectural trade-offs (static page, client-only countdown/accordion/toast). The SDD covers the design adequately.
- **CLR** — the site itself collects **no** personal data; registration PII is handled entirely inside Google Forms (a third party with its own privacy controls). The lightweight privacy obligation lives with the Google Form, not this codebase. *If the Photobooth/DP Frame ever go live in-repo and capture images/PII, revisit this with a Change Record.*
- **GTM** — launch/marketing is handled by GDG PUP's existing event channels, outside this repo's scope.

### Operating notes

- The **SAD is canonical** for the four `.claude/agents/`; other IDEs (Antigravity/Cursor/Kiro/VS Code) adopt the cards as named roles — see [sad-sparkfest.md](sad-sparkfest.md) §5.
- **"About" section ownership** is currently grouped under Rhandie's *Key Highlights* in [../tasks.md](../tasks.md#section-ownership-dris) — confirm or reassign.
- FMD templates live in the untracked `FMD/` submodule; instantiated docs live here in `docs/`.
