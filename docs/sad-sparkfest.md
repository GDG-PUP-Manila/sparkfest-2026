# Subagents Document (SAD)

**Project:** SparkFest 2026 Website
**Date:** 2026-06-17
**Version:** 0.1
**Owner:** GDG PUP Manila
**Status:** Draft
**Last reconciled:** N/A — not yet reconciled with code
**PRD:** [prd-sparkfest.md](prd-sparkfest.md)
**SDD:** [sdd-sparkfest.md](sdd-sparkfest.md) · **DSD:** [dsd-sparkfest.md](dsd-sparkfest.md) · **QAD:** [qad-sparkfest.md](qad-sparkfest.md) · **Tasks:** [../tasks.md](../tasks.md)

---

## 1. Purpose & Scope

SparkFest is a one-page site built **section by section** across four responsive tiers, with each section owned by a [DRI](../tasks.md#section-ownership-dris) and signed off by QA. That shape — the *same build-and-check loop repeated ~11 times* — is exactly where subagents earn their keep. This roster gives each developer (on any IDE, via the [Figma MCP](figma-mcp-setup.md)) a small set of specialists to: scaffold a section from its Figma frame, and enforce the token / accessibility / responsive guardrails from the DSD and QAD on every section before it's marked done.

These agents assist the **build and validation** phases. They are platform-agnostic; §5 materializes them per IDE (Claude Code is the primary target in this repo).

**Out of scope:** Subagents do not make product or design decisions — those live in the PRD/DSD/SDD. They *execute and enforce* within boundaries the docs already set.

---

## 2. Roster Design Rationale

Anti-sprawl rule: an agent earns a slot only if it's (1) spawned repeatedly, (2) protects the main agent's context, or (3) enforces a must-not-skip guardrail.

| Considered | Decision | Reason |
|------------|----------|--------|
| `figma-section-builder` | **Kept** | Spawned ~11× (once per section) — criterion 1. Core build loop. |
| `responsive-qa-runner` | **Kept** | Runs on every section + pre-release; offloads noisy build/lint output (criterion 2) and gates the merge (criterion 3). |
| `design-token-auditor` | **Kept** | Guardrail (criterion 3): the dark pixel-arcade palette is easy to drift from. Runs on every section diff. |
| `a11y-auditor` | **Kept** | Guardrail (criterion 3): WCAG AA is a release criterion ([QAD §6](qad-sparkfest.md)); neon-on-dark contrast fails silently. |
| `content-copywriter` | Rejected | All copy is centralized in [`content.ts`](../src/app/components/content.ts); edited inline. Not repeated agent work. |
| `deploy-agent` | Rejected | Cloudflare Pages auto-builds on PR/`main` ([SDD §6](sdd-sparkfest.md)). No repeated manual deploy step. |
| `countdown-logic-builder` | Rejected | Single client component, built once; main agent handles inline. |
| `figma-mcp-installer` | Rejected | One-time per developer; covered by [figma-mcp-setup.md](figma-mcp-setup.md), not an agent. |

---

## 3. The Roster

| Agent ID | Name | One-line job | Derived from | Spawn trigger | Model hint |
|----------|------|--------------|--------------|---------------|------------|
| SAD-A1 | `figma-section-builder` | Build/adapt a section component from its Figma frame across all 4 tiers | PRD-F1/F2/F6, [tasks.md](../tasks.md) Phase 2, DSD, [figma-mcp-setup.md](figma-mcp-setup.md) | A section DRI starts/continues a Phase-2 section | balanced |
| SAD-A2 | `responsive-qa-runner` | Run lint + typecheck + build and report the responsive/QA verdict | [QAD](qad-sparkfest.md) §4, [tasks.md](../tasks.md) Phase 4 | After a section change; before a PR merge | fast |
| SAD-A3 | `design-token-auditor` | Flag hardcoded colors/spacing that bypass DSD tokens | [DSD](dsd-sparkfest.md), [`content.ts`](../src/app/components/content.ts), [`globals.css`](../src/app/globals.css) | On any component diff | fast |
| SAD-A4 | `a11y-auditor` | Check WCAG AA contrast, alt text, aria, keyboard, reduced-motion | [QAD §6](qad-sparkfest.md), [SDD §7](sdd-sparkfest.md), [tasks.md](../tasks.md) Phase 5 | Before a section is marked done; pre-release | balanced |

> **Model hint** is platform-neutral: `fast` (cheap, high-volume), `balanced` (most feature work), `deep` (architecture/tricky debugging). Mapped to a concrete model at materialization (§5).

---

### Agent Cards

#### SAD-A1 — figma-section-builder

- **Purpose:** Turn a Figma section frame into an on-spec React component and adapt it down the four breakpoints. Earns its slot by being spawned once per section (~11×) — the project's core repeated task.
- **Derived from:** PRD-F1/F2/F6; [tasks.md](../tasks.md) Phase 2 sections 2.1–2.11; [DSD](dsd-sparkfest.md); [figma-mcp-setup.md](figma-mcp-setup.md).
- **Responsibilities:**
  - Read the section's Figma node via the Figma MCP (desktop frame first, then 1280 / 768 / 320).
  - Produce/update the component under `src/app/components/`, reusing tokens and the `COLOR_*` maps from [`content.ts`](../src/app/components/content.ts).
  - Wire copy from `content.ts` (never hardcode strings already centralized there).
  - Implement the four-tier responsive behavior described in the section's task list.
- **Inputs:** A section id (e.g. 2.6), its Figma node-id/selection link, the target component file.
- **Outputs:** A patch to the section component (+ any new asset references), and a short note of what still needs design confirmation.
- **Capabilities / tools:** Read, Edit, Figma MCP (web), Bash (`npm run dev`/`build`). Least privilege — no deploy.
- **Spawn trigger:** A section DRI begins or resumes a Phase-2 section.
- **Guardrails (never):** Never edit another section's component; never invent hex colors outside the DSD tokens; never hardcode copy that lives in `content.ts`; never add `dangerouslySetInnerHTML`.
- **Done when:** The section renders matching its Figma frame at all four tiers and `design-token-auditor` + `responsive-qa-runner` pass.
- **Model hint:** balanced.

#### SAD-A2 — responsive-qa-runner

- **Purpose:** The merge gate. Runs the static checks and the responsive matrix and returns a clean pass/fail, keeping long build/lint logs out of the main agent's context.
- **Derived from:** [QAD §4](qad-sparkfest.md) (automation), [tasks.md](../tasks.md) Phase 4.
- **Responsibilities:**
  - Run `npm run lint`, `npx tsc --noEmit`, `npm run build`; capture results.
  - Check the section at 320 / 768 / 1280 / 1920 (and 1023/1279/1919 in-betweens) for overflow/jank.
  - Report the minimal failing context (file + line + tier), not the whole log.
- **Inputs:** The changed section/component or a "pre-release" scope.
- **Outputs:** A PASS, or a FAIL with the specific failing checks and smallest relevant excerpt, mapped to QAD severity (P0–P3).
- **Capabilities / tools:** Bash, Read, Grep.
- **Spawn trigger:** After a section change; required before any PR merge.
- **Guardrails (never):** Never edit source to make a check pass; never skip/disable a failing check; never mark a section done on its behalf.
- **Done when:** It returns a clear verdict; build + lint + typecheck are green and the four tiers show no breakage.
- **Model hint:** fast.

#### SAD-A3 — design-token-auditor

- **Purpose:** Keep the build true to the DSD. The dark pixel-arcade palette + Google colors live as tokens; ad-hoc hex/px values silently break the system. Runs on every diff (guardrail).
- **Derived from:** [DSD](dsd-sparkfest.md); [`content.ts`](../src/app/components/content.ts) `COLOR_*` maps; [`globals.css`](../src/app/globals.css) `@theme` tokens.
- **Responsibilities:**
  - Scan changed components for raw hex/rgb/hsl colors and magic spacing not backed by a token or Tailwind v4 utility.
  - Flag color usage outside the `blue/red/yellow/green` `GoogleColor` system and the dark surface tokens.
  - Suggest the correct existing token (does not auto-rewrite).
- **Inputs:** A component diff or file list.
- **Outputs:** A list of violations (file:line → offending value → suggested token), or "clean".
- **Capabilities / tools:** Grep, Read.
- **Spawn trigger:** On any component diff (pairs with A1's output).
- **Guardrails (never):** Never edit files (report-only); never approve new top-level color tokens — that's a DSD change requiring a Change Record.
- **Done when:** It returns a clean report or an itemized violation list.
- **Model hint:** fast.

#### SAD-A4 — a11y-auditor

- **Purpose:** Enforce the accessibility release criteria, which fail silently in a neon-on-dark theme. Runs before a section is marked done and again pre-release (guardrail).
- **Derived from:** [QAD §6](qad-sparkfest.md), [SDD §7](sdd-sparkfest.md) NFRs, [tasks.md](../tasks.md) Phase 5.
- **Responsibilities:**
  - Check WCAG AA contrast for text over dark/neon backgrounds.
  - Verify alt text on meaningful images, `aria-hidden` on decorative art, focus rings, and keyboard operability of nav/accordion/toast.
  - Confirm `prefers-reduced-motion` is respected for animated lightning/mascots.
- **Inputs:** A section/component or the full page for a pre-release sweep.
- **Outputs:** Pass/fail per check with specific offending elements and the WCAG criterion, mapped to QAD severity.
- **Capabilities / tools:** Read, Grep, Bash (optional Lighthouse/axe CLI).
- **Spawn trigger:** Before a section is marked done; mandatory in the pre-release gate.
- **Guardrails (never):** Never weaken a check to pass; never edit source (report-only).
- **Done when:** It returns a verdict; any P0/P1 a11y issue is reported, not silently passed.
- **Model hint:** balanced.

---

## 4. Orchestration

- **Who spawns them:** The section DRI (or the main agent acting for them). `figma-section-builder` is spawned per section; the three auditors run against its output.
- **Sequencing:** `figma-section-builder` builds → `design-token-auditor` **and** `a11y-auditor` review the diff in parallel → `responsive-qa-runner` gates. A failure routes back to the builder.
- **Hand-off:** The builder's patch + node-id is the shared state; auditors annotate it; the runner returns the final verdict that lets the DRI/QA mark the section done.
- **Escalation:** Stop and hand back to a human on ambiguous Figma intent, a proposed new design token (DSD change → Change Record), or repeated (3×) failure on the same check.

```
section DRI ─▶ figma-section-builder (A1)
                     │ patch + node-id
                     ├─▶ design-token-auditor (A3) ─┐
                     ├─▶ a11y-auditor (A4) ─────────┤ findings
                     ▼                              ▼
              responsive-qa-runner (A2) ──gate──▶ Keith & Ge sign-off
                     │ fail
                     └─▶ back to A1
```

---

## 5. Materialization (Platform Mapping)

The cards above are canonical. Re-materialize whenever this SAD changes; treat generated files as build artifacts, not sources of truth.

### Field mapping

| SAD card field | Claude Code (`.claude/agents/*.md`) | AGENTS.md tools / Antigravity / Kiro | Cursor |
|----------------|--------------------------------------|--------------------------------------|--------|
| Name | `name:` frontmatter | role heading | mode/rule name |
| Purpose + Responsibilities | system prompt body | role section body | rule body |
| Spawn trigger | `description:` ("use when") | "invoke when" line | mode activation note |
| Capabilities / tools | `tools:` frontmatter | documented allowed tools | available-tools toggle |
| Model hint | `model:` (fast→haiku, balanced→sonnet, deep→opus) | note in body | model selector |
| Guardrails + Done when | system prompt body | role section body | rule body |

### Materialize to: Claude Code (primary, this repo)

| Agent ID | Materialized file | Model |
|----------|-------------------|-------|
| SAD-A1 | [`.claude/agents/figma-section-builder.md`](../.claude/agents/figma-section-builder.md) | sonnet |
| SAD-A2 | [`.claude/agents/responsive-qa-runner.md`](../.claude/agents/responsive-qa-runner.md) | haiku |
| SAD-A3 | [`.claude/agents/design-token-auditor.md`](../.claude/agents/design-token-auditor.md) | haiku |
| SAD-A4 | [`.claude/agents/a11y-auditor.md`](../.claude/agents/a11y-auditor.md) | sonnet |

> **Other IDEs:** Antigravity, Kiro, Cursor, and VS Code have no `.claude/agents` primitive. Materialize each card as a named **role** the agent adopts on demand (e.g. a `## design-token-auditor (role)` block in that tool's rules/AGENTS file, or a Cursor custom mode). The neutral card loses nothing — only the spawn mechanism differs.

---

## 6. Maintenance

- **This SAD is the source of truth.** To change an agent, edit its card here, bump the version, then re-materialize. Never hand-edit `.claude/agents/` as the source.
- **Reconcile on drift:** an orphan materialized agent (no card) or a card with no file → fix and update §5's table.
- **Tie to features:** if a `PRD-F#` an agent derives from is cut/changed, revisit that agent (log a Change Record).
- **Re-run anti-sprawl** on every new agent proposal; if it fails all three criteria, add it to §2's rejected table instead of creating it.
