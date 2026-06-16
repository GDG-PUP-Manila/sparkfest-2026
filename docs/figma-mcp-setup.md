# Figma MCP — Dev IDE Setup Guide

**Project:** SparkFest 2026 Website
**Date:** 2026-06-17
**Version:** 0.1
**Owner:** GDG PUP Manila
**Status:** Draft
**Last reconciled:** 2026-06-17 (verified against Figma developer docs)
**Applies to:** Antigravity · VS Code · Cursor · Kiro (and Claude Code)

---

> **What this is:** a step-by-step guide for connecting each developer's IDE to the **Figma MCP server** so an AI agent can read our SparkFest Figma file directly — pulling layout, variables, components, and generating code straight from a selected frame. This is how we keep the build faithful to the four responsive frames in [tasks.md](../tasks.md).
>
> **Config syntax differs per IDE.** The single most common setup failure is using the wrong URL key. The big one: **Antigravity uses `serverUrl`**, while VS Code uses `servers` + `type`, and Cursor/Kiro use `mcpServers` + `url`. See the [config cheat-sheet](#config-cheat-sheet) before you paste anything.

---

## 1. What the Figma MCP server gives you

Once connected, your IDE's agent can:

- **Generate code from a selected frame** — turn a SparkFest section frame into markup it can adapt to our Next.js + Tailwind v4 stack.
- **Pull design context** — variables (colors, spacing), component structure, and Auto Layout data, so generated code maps to real tokens instead of guesses.
- **Read a specific node** — point it at a node-id (e.g. one of our four breakpoint frames) and it reads only that.
- **Code Connect** — link Figma components to our React components for consistency.
- **Write to canvas** (remote server only) — create/update Figma content from the editor. We rarely need this; reading is the day-to-day use.

---

## 2. Choose your server: Remote (recommended) vs Local desktop

There are **two** Figma MCP servers. Pick one.

| | **Remote (recommended)** | **Local / Desktop** |
|---|---|---|
| Endpoint | `https://mcp.figma.com/mcp` | `http://127.0.0.1:3845/mcp` |
| Figma desktop app required? | No | **Yes** (must be running, latest version) |
| Auth | OAuth (browser "Allow access") | Inherits the running desktop app's session |
| Plan / seat | Works on **all plans** | Requires a **Dev or Full seat** on a paid plan |
| Features | Broadest (incl. write-to-canvas) | Narrower; aimed at org/enterprise cases |
| Cost | Free during beta | — |

**Use the remote server** unless you specifically need the local one. The steps below default to remote and note the local variant where it differs.

**Prerequisites (both):** an MCP-capable IDE (see below), access to the SparkFest Figma file, and for VS Code specifically, **GitHub Copilot** with **Agent mode** enabled.

---

## 3. Per-IDE setup

> The SparkFest Figma file:
> `https://www.figma.com/design/5KsutCDZ5wgHQJ40p4PgmD/SPARKFEST-2026--Copy-`

### 3.1 Antigravity (Google)

1. In the **agent panel**, open the **`…`** dropdown → **Manage MCP Servers** → **View raw config**. That opens `mcp_config.json`.
   - Path if you prefer to edit it directly: `%USERPROFILE%\.gemini\config\mcp_config.json` (Windows) · `~/.gemini/config/mcp_config.json` (macOS/Linux).
2. Add the server. **Antigravity uses `serverUrl`, not `url`:**
   ```json
   {
     "mcpServers": {
       "figma": {
         "serverUrl": "https://mcp.figma.com/mcp"
       }
     }
   }
   ```
3. Save. Antigravity picks up the server and starts the OAuth flow (see [§4](#4-authenticate)).
   - **Local variant:** `"serverUrl": "http://127.0.0.1:3845/mcp"` and name it `figma-desktop`.

### 3.2 VS Code (with GitHub Copilot)

**GUI path (easiest):**
1. `Ctrl/⌘ + Shift + P` → **MCP: Add Server** → **HTTP**.
2. Paste `https://mcp.figma.com/mcp`, then give it the Server ID `figma`.
3. Choose user (global) or workspace scope.

**Manual path:** `Ctrl/⌘ + Shift + P` → **MCP: Open User Configuration** (global) or **MCP: Open Workspace Folder MCP Configuration** (writes `.vscode/mcp.json`). VS Code uses a `servers` block with an explicit `type`:
```json
{
  "servers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp",
      "type": "http"
    }
  }
}
```
Then open Copilot Chat in **Agent mode** to use it.
- **Local variant:** `"url": "http://127.0.0.1:3845/mcp"`, id `figma-desktop`.

### 3.3 Cursor

**Easiest:** in the agent chat, type `/add-plugin figma` and follow the prompts.

**Manual:** `Ctrl/⌘ + Shift + P` → **Cursor Settings** → **MCP** tab → **Add Custom MCP** (edits `~/.cursor/mcp.json` global, or `.cursor/mcp.json` per-project). Cursor uses `mcpServers` + `url`:
```json
{
  "mcpServers": {
    "figma": {
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```
Save and return to Settings; the server should show green/connected.
- **Local variant:** `"url": "http://127.0.0.1:3845/mcp"`, name `figma-desktop`.

### 3.4 Kiro

1. Edit the config file (or use the Kiro **MCP Servers** panel → edit config):
   - Workspace: `.kiro/settings/mcp.json` · Global: `~/.kiro/settings/mcp.json`
   - If both exist they merge, with **workspace taking precedence**.
2. Kiro uses `mcpServers` + `url` (remote entries also accept `oauth`, `autoApprove`, `disabled`):
   ```json
   {
     "mcpServers": {
       "figma": {
         "url": "https://mcp.figma.com/mcp",
         "autoApprove": []
       }
     }
   }
   ```
3. Kiro reconnects on save (no restart needed).
- **Local variant:** `"url": "http://127.0.0.1:3845/mcp"`, name `figma-desktop`.

### 3.5 Claude Code (bonus — used in this repo)

```bash
# Plugin (preferred)
claude plugin install figma@claude-plugins-official
# or manual, remote transport
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

---

## 4. Authenticate

The **remote** server uses OAuth. On first use the IDE opens a browser tab — sign in to Figma and click **Allow access**. The token is stored by the IDE; you won't re-auth every session.

The **local** server has no separate auth step: it uses whatever account is signed in to the running Figma desktop app. Just make sure the desktop app is open with Dev Mode enabled (next section).

### Enabling the local desktop server (only if you chose Local)

1. Open the **Figma desktop app** (update to the latest version).
2. Open a **Design** file.
3. Toggle **Dev Mode** (`Shift + D`).
4. In the **inspect panel → MCP server** section, click **Enable desktop MCP server**. A confirmation appears at the bottom. The server is now live at `http://127.0.0.1:3845/mcp`.

---

## 5. Verify the connection

1. Open your IDE's MCP/tools list and confirm a `figma` server with available tools (e.g. get code / get variables / get image-style tools).
2. In Figma, select any SparkFest frame, **right-click → Copy/Paste as → Copy link to selection**.
3. In the agent chat, paste the link and ask: *"Using the Figma MCP, summarize the layout and the variables used in this selection."*
4. A correct setup returns real structure/variable names from our file — not a generic guess.

---

## 6. Using it on SparkFest

**Always work from a node, not the whole file.** Our four responsive frames already have node-ids (from [tasks.md](../tasks.md)):

| Tier | Width | node-id |
|------|-------|---------|
| XS | 320–767 | `2-13682` |
| SM/MD | 768–1279 | `2-13674` |
| Medium | 1280–1919 | `2-13636` |
| Desktop | 1920+ | `2-13643` |

Two ways to target a node:
- **Selection link (preferred):** select the frame in Figma → copy link to selection → paste into chat. The client extracts the node-id automatically.
- **Manual node-id:** paste the file URL with `?node-id=2-13636` (dashes, as Figma exports them).

**Prompting tips that keep output on-spec:**
- Name the stack: *"Generate this as a React 19 component using Tailwind v4 utility classes — no inline styles."*
- Point at our tokens: *"Map Figma colors to the existing Google-color tokens in [`content.ts`](../src/app/components/content.ts) and [`globals.css`](../src/app/globals.css); don't invent hex values."* (This mirrors the [`design-token-auditor`](sad-sparkfest.md) guardrail.)
- Work per breakpoint: pull the desktop frame first, then ask it to adapt down to 1280 / 768 / 320, matching the other frames — the section build order in [tasks.md](../tasks.md) Phase 2.
- Section DRIs (see [tasks.md](../tasks.md#section-ownership-dris)) own their frames: use the MCP against *your* section's node only.

---

## 7. Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Server won't connect | Wrong URL key for the IDE | Antigravity = `serverUrl`; VS Code = `servers`+`type`; Cursor/Kiro = `mcpServers`+`url`. |
| "No tools found" after adding | Not authenticated | Complete the OAuth browser flow; click **Allow access**. |
| Local server unreachable | Desktop app closed / Dev Mode off | Open Figma desktop, `Shift+D`, **Enable desktop MCP server**. |
| Local server: 403 / no access | No Dev/Full seat | Use the **remote** server (works on all plans). |
| Agent invents colors/spacing | Prompted without context | Pass a selection link and tell it to use our tokens. |
| VS Code: no MCP commands | Copilot/Agent mode off | Enable GitHub Copilot and Agent mode. |

---

## <a id="config-cheat-sheet"></a>Config cheat-sheet

| IDE | Config file | Top-level key | URL key | Remote value |
|-----|-------------|---------------|---------|--------------|
| **Antigravity** | `~/.gemini/config/mcp_config.json` | `mcpServers` | **`serverUrl`** | `https://mcp.figma.com/mcp` |
| **VS Code** | `.vscode/mcp.json` (or user config) | **`servers`** | `url` (+ `type: "http"`) | `https://mcp.figma.com/mcp` |
| **Cursor** | `~/.cursor/mcp.json` or `.cursor/mcp.json` | `mcpServers` | `url` | `https://mcp.figma.com/mcp` |
| **Kiro** | `.kiro/settings/mcp.json` or `~/.kiro/settings/mcp.json` | `mcpServers` | `url` | `https://mcp.figma.com/mcp` |

Local desktop = swap the value for `http://127.0.0.1:3845/mcp` and name the server `figma-desktop`.

---

## Sources

- [Guide to the Figma MCP server — Figma Help](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)
- [Figma MCP server — Developer Docs (Introduction)](https://developers.figma.com/docs/figma-mcp-server/)
- [Remote server installation — Figma Developer Docs](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation)
- [Local/desktop server installation — Figma Developer Docs](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/)
- [VS Code and Figma: Set up the MCP server — Figma Help](https://help.figma.com/hc/en-us/articles/39890361040535-VS-Code-and-Figma-Set-up-the-MCP-server)
- [Cursor and Figma: Set up the MCP server — Figma Help](https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server)
- [Kiro — MCP configuration](https://kiro.dev/docs/mcp/configuration/)
- [Antigravity Editor: MCP Integration](https://antigravity.google/docs/mcp)

> Endpoints and config keys verified 2026-06-17. The Figma MCP server is in active beta — re-verify against the sources above if a client stops connecting.
