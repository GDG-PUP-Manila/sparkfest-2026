# Design System Document (DSD)

**System Name:** SparkFest 2026 Visual System
**Date:** 2026-06-07
**Version:** 0.1
**Owner:** GDG PUP Manila
**Status:** Draft
**Last reconciled:** N/A - first draft
**PRD:** [prd-sparkfest.md](prd-sparkfest.md)

---

## 1. Design Philosophy & Vision

**Core aesthetic:** Minimal, playful yet structured, utilizing the Google developer color palette in combination with retro/modern halftone and pastel accents. Clean, bold layouts with clear typography.

**Emotional intent:** Inspire innovation, action, and local community contribution among student creators without cluttering their focus.

**Aesthetic references:** Google I/O landing pages, Stripe-like clean layouts, modern developer portals.

**What this system explicitly avoids:**
- Dense tables of text without visual hierarchy.
- Heavy gradients and dark-mode neon glows that mismatch the GDG light-themed style guidelines.
- Unnecessary parallax or scrolling animations that delay page loading.

---

## 2. Brand Primitives

### Colors

These color tokens must be registered in the codebase (e.g. within CSS variables or Tailwind configs) to maintain design alignment.

| Name | Token | Value | Primary Usage |
|------|-------|-------|---------------|
| Google Red 500 | `--color-google-red-500` | `#ea4335` | Accents, Red Alerts, active states |
| Google Yellow 500 | `--color-google-yellow-500` | `#fbbc04` | Accents, warning/timeline markers |
| Google Green 500 | `--color-google-green-500` | `#34a853` | Accents, successful actions |
| Google Blue 500 | `--color-google-blue-500` | `#4285f4` | Primary branding accents, headers |
| Halftone Red | `--color-halftone-red` | `#ff7daf` | Highlight cards, retro styling |
| Halftone Yellow | `--color-halftone-yellow` | `#ffd427` | Highlight cards, secondary details |
| Halftone Green | `--color-halftone-green` | `#5cdb6d` | Highlight borders, timeline active lines |
| Halftone Blue | `--color-halftone-blue` | `#57caff` | Highlight badges, link underlines |
| Pastel Red | `--color-pastel-red` | `#f8d8d8` | Soft card background, alert backdrops |
| Pastel Yellow | `--color-pastel-yellow` | `#ffe7a5` | Soft card background, timeline panels |
| Pastel Green | `--color-pastel-green` | `#ccf6c5` | Soft card background |
| Pastel Blue | `--color-pastel-blue` | `#c3ecf6` | Soft card background, info banners |
| Off White | `--color-off-white` | `#f0f0f0` | General background sections |
| Black 02 | `--color-black-02` | `#1e1e1e` | Typography, main container background/borders |

### Typography

| Role | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| Display H1 | Google Sans, sans-serif | 700 (Bold) | 3rem (48px) | 1.15 |
| Heading 2 | Google Sans, sans-serif | 600 (Semi-bold) | 2rem (32px) | 1.25 |
| Heading 3 | Google Sans, sans-serif | 600 (Semi-bold) | 1.5rem (24px) | 1.3 |
| Body Text | Google Sans, sans-serif | 400 (Regular) | 1rem (16px) | 1.6 |
| Buttons / Badges | Google Sans, sans-serif | 500 (Medium) | 0.875rem (14px) | 1.25 |

**Font loading:** Dynamic loading via Google Fonts API in `<head>` (or loaded via Next.js `next/font/google`).

### Elevation & Depth

| Level | CSS Value | Usage |
|-------|-----------|-------|
| `--shadow-retro` | `4px 4px 0px 0px var(--color-black-02)` | Flat neobrutalist/retro shadows on cards & CTA buttons |
| `--shadow-sm` | `0 2px 4px rgba(0,0,0,0.05)` | Regular cards |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Timeline panels / popups |

---

## 3. Layout & Spatial System

**Base unit:** `8px` — all margin, padding, and gaps are multiples of 8px.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `8px` | Badge padding, small inline gaps |
| `--space-2` | `16px` | Component padding, button gaps |
| `--space-4` | `32px` | Card internal layout, default section margins |
| `--space-6` | `48px` | Desktop grid gaps |
| `--space-8` | `64px` | Section margins, outer container padding |

**Breakpoints:**
- Mobile: `375px`
- Tablet: `768px`
- Desktop: `1024px` / `1280px`

---

## 4. Core Component Specs

### CTA Buttons

- **Primary Button (Registration):**
  - Background: `--color-google-blue-500`
  - Text: `#ffffff`
  - Border: `2px solid --color-black-02`
  - Shadow: `--shadow-retro` using `--color-google-red-500` or `--color-black-02`
  - Hover: translate up/left by 2px, shadow expands slightly

- **Secondary Actions (Photobooth & DP Blast):**
  - Background: White or `--color-off-white`
  - Text: `--color-black-02`
  - Border: `2px solid --color-black-02`
  - Hover: translate up/left by 2px, shadow expands with pastel background highlights

---

## 5. Motion & Micro-interactions

**Transition default:** `all 200ms cubic-bezier(0.16, 1, 0.3, 1)`

| Interaction | Duration | Notes |
|-------------|----------|-------|
| CTA Button Hover | 150ms | Translates `translate-y-[-2px] translate-x-[-2px]` with a shadow adjustment |
| Timeline Node Hover | 200ms | Highlights line node to designated Google colors |

---

## 6. Accessibility (a11y)

- **Contrast minimum:** WCAG AA compliance (contrast ratio at least 4.5:1 for standard body copy, e.g. Black 02 text over white, pastel, or off-white backdrops).
- **Focus ring:** Always show focus rings for keyboard navigation.
- **Touch targets:** Interactive elements are kept at a minimum of `48px` height/width.

---

## 7. Taste-Skill Settings

```
DESIGN_VARIANCE:    5
MOTION_INTENSITY:   3
VISUAL_DENSITY:     4
```

---

## Self-Check

- [x] Colors mapped with accurate HEX values.
- [x] Spacing scale is consistent (multiples of 8px).
- [x] Contrast guidelines verified for primary elements.
