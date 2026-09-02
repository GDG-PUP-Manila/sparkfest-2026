# Design System Document (DSD)

**System Name:** SparkFest 2026 Visual System
**Date:** 2026-09-02
**Version:** 0.2
**Owner:** GDG PUP Technology (incoming CTO)
**Status:** Draft
**Last reconciled:** 2026-09-02 — against `src/app/globals.css` and shipped sections
**PRD:** [prd-sparkfest.md](prd-sparkfest.md)

> v0.1 (2026-06-07) described a light GDG aesthetic that the shipped site does not use. This revision documents the **dark pixel-arcade** system that is live.

---

## 1. Design Philosophy & Vision

**Core aesthetic:** Retro pixel-arcade on a deep navy field. Google brand accents (red, yellow, green, blue) plus neon cyan grid lines, lightning highlights, and pixel fonts for display moments. Marketing energy without cluttering the registration CTA.

**Emotional intent:** Excitement and play for student hackers; still readable on mobile.

**What this system explicitly avoids:**

- Treating the old light / pastel card system as current (v0.1 draft).
- Raw hex in components; use `globals.css` `@theme` tokens and `content.ts` `COLOR_*` maps.
- Heavy scroll-jacking that blocks registration.

---

## 2. Brand Primitives

### Surfaces and neon (primary shipped palette)

| Name | Token | Value | Primary Usage |
|------|-------|-------|---------------|
| Navy 900 | `--navy-900` | `#050a1f` | Page background |
| Navy 800 | `--navy-800` | `#0a1330` | Elevated panels |
| Navy 700 | `--navy-700` | `#112151` | Section bands |
| Navy 600 | `--navy-600` | `#1a3170` | Borders / depth |
| Panel Blue | `--panel-blue` | `#16357a` | Card panels |
| Grid Cyan | `--grid-cyan` | `#57caff` | Grid / accent lines |
| Neon Blue | `--neon-blue` | `#2f7bff` | CTA glow |
| Lightning | `--lightning` | `#eaf6ff` | Hero lightning accents |

### Google + logo accents (still required)

| Name | Token | Value |
|------|-------|-------|
| Google Red 500 | `--google-red-500` | `#ea4335` |
| Google Yellow 500 | `--google-yellow-500` | `#fbbc04` |
| Google Green 500 | `--google-green-500` | `#34a853` |
| Google Blue 500 | `--google-blue-500` | `#4285f4` |
| Logo Yellow | `--logo-2` | `#ffd339` |
| Logo Cyan | `--logo-0` | `#58c9fc` |
| Logo Green | `--logo-2b` | `#5dda6c` |
| Logo Pink | `--logo-6` | `#ff7dae` |

Halftone and pastel tokens remain in `@theme` for secondary accents; they are not the page foundation.

### Typography

| Role | Font token | Notes |
|------|------------|-------|
| UI / body | `--font-sans` (`Google Sans`, fallbacks) | Primary readable copy |
| Pixel display | `--font-pixel` (`Press Start 2P`) | Arcade headers, badges |
| Pixelify | `--font-pixelify` (`Pixelify Sans`) | Secondary pixel moments |

### Breakpoints (mobile-first)

Base → `md:` → `xl:` → `desktop:` (`--breakpoint-desktop: 1920px`). Figma fidelity targets: 320 / 768 / 1280 / 1920.

---

## 3. Layout & Motion

- Section composition is Figma-driven baked art plus React overlays (especially Hero).
- Prefer CSS and light client interactivity (`HeroLightning`, placeholder toasts) over heavy JS animation.
- Honor `prefers-reduced-motion` for non-essential loops.

---

## 4. Component rules

- Copy and structured data: `src/app/components/content.ts` only.
- Colors: `COLOR_TEXT` / `COLOR_BG` / `COLOR_BORDER` / `COLOR_HEX` or Tailwind tokens from `@theme`. Never invent a one-off hex in a section file.
- External links: `target="_blank" rel="noopener noreferrer"`.
- Photobooth / DP Frame CTAs still use `PlaceholderCta` until live URLs ship.

---

## 5. Source of truth

| Concern | File |
|---------|------|
| Tokens | `src/app/globals.css` `@theme` |
| Copy / colors maps | `src/app/components/content.ts` |
| Section composition | `src/app/page.tsx` + `src/app/components/*` |
| Figma MCP | [figma-mcp-setup.md](figma-mcp-setup.md) |

When design and code disagree, **code wins**, then update this DSD in the same turn.
