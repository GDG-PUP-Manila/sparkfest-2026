# CLAUDE.md

> **Read [AGENTS.md](AGENTS.md) first** — it is the materialized Build Guide (read order, pinned stack, deprecations register, conventions, Definition of Done) and the operating guide for this repo. Its canonical source is [`docs/build-sparkfest.md`](docs/build-sparkfest.md); edit there and re-materialize, never hand-edit `AGENTS.md`/`CLAUDE.md` as the source of truth.

## Claude-Code-specific notes

- **Subagents:** the [SAD](docs/sad-sparkfest.md) is canonical; the four agents are materialized in [`.claude/agents/`](.claude/agents) (`figma-section-builder`, `responsive-qa-runner`, `design-token-auditor`, `a11y-auditor`). Edit the SAD and re-materialize — don't hand-edit `.claude/agents/` as the source.
- **Stack Currency:** do not emit framework APIs from training memory. Verify against the [Build Guide §3](docs/build-sparkfest.md#3-stack-currency--deprecations) register (Tailwind v4 CSS-first, Next 16 static export, ESLint 9 flat config, React 19) — the register wins over what you "know."
- **Skills/MCP:** connect the IDE to Figma via [docs/figma-mcp-setup.md](docs/figma-mcp-setup.md) before generating section code from frames.

Everything else lives in [AGENTS.md](AGENTS.md) and the [`docs/`](docs/index.md) suite. Start there.
