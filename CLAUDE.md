# CLAUDE.md

> **Read [docs/state.md](docs/state.md) then [AGENTS.md](AGENTS.md).** `state.md` is the cold-start position. `AGENTS.md` is the materialized Build Guide (pinned stack, deprecations, conventions). Canonical source for AGENTS is [`docs/build-sparkfest.md`](docs/build-sparkfest.md); edit there and re-materialize.

## Claude-Code-specific notes

- **Subagents:** the [SAD](docs/sad-sparkfest.md) is canonical; the four agents are materialized in [`.claude/agents/`](.claude/agents) (`figma-section-builder`, `responsive-qa-runner`, `design-token-auditor`, `a11y-auditor`). Edit the SAD and re-materialize — don't hand-edit `.claude/agents/` as the source.
- **Stack Currency:** do not emit framework APIs from training memory. Verify against the [Build Guide §3](docs/build-sparkfest.md#3-stack-currency--deprecations) register (Tailwind v4 CSS-first, Next 16 static export, ESLint 9 flat config, React 19) — the register wins over what you "know."
- **Skills/MCP:** connect the IDE to Figma via [docs/figma-mcp-setup.md](docs/figma-mcp-setup.md) before generating section code from frames.

Everything else lives in [AGENTS.md](AGENTS.md) and the [`docs/`](docs/index.md) suite. Start there.
