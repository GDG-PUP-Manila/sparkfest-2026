# SparkFest 2026 — Implementation Tasks

Build tracker for the SparkFest 2026 one-page marketing site (retro / pixel-arcade theme).

- **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript
- **Entry point:** [src/app/page.tsx](src/app/page.tsx) · styles in [src/app/globals.css](src/app/globals.css)
- **Reference docs:** [PRD](docs/prd-sparkfest.md) · [DSD](docs/dsd-sparkfest.md) · [SDD](docs/sdd-sparkfest.md)
- **Note:** The current `page.tsx` is an early light-theme placeholder. The Figma designs below define a dark, pixel-arcade visual language — most existing markup will be replaced.

---

## Responsive Breakpoint Strategy

Four Figma frames define the layout at four target widths. Build mobile-first and layer up.

| Tier | Target width | Figma frame | Tailwind handling |
|------|--------------|-------------|-------------------|
| XS | 320 – 767 | [node 2-13682](https://www.figma.com/design/5KsutCDZ5wgHQJ40p4PgmD/SPARKFEST-2026--Copy-?node-id=2-13682&m=dev) | base (no prefix), mobile-first |
| SM/MD | 768 – 1279 | [node 2-13674](https://www.figma.com/design/5KsutCDZ5wgHQJ40p4PgmD/SPARKFEST-2026--Copy-?node-id=2-13674&m=dev) | `md:` (≥768) |
| Medium | 1280 – 1919 | [node 2-13636](https://www.figma.com/design/5KsutCDZ5wgHQJ40p4PgmD/SPARKFEST-2026--Copy-?node-id=2-13636&m=dev) | `xl:` (≥1280) |
| Desktop | 1920+ | [node 2-13643](https://www.figma.com/design/5KsutCDZ5wgHQJ40p4PgmD/SPARKFEST-2026--Copy-?node-id=2-13643&m=dev) | `desktop:` (≥1920, custom) |

- [ ] **T0.1** Confirm which Figma frame maps to which width by opening each node in dev mode (widths above are best-guess by order).
- [ ] **T0.2** Register custom Tailwind v4 breakpoints in `@theme` so all four tiers are addressable:
  ```css
  --breakpoint-md: 768px;
  --breakpoint-xl: 1280px;
  --breakpoint-desktop: 1920px;
  ```
- [ ] **T0.3** Decide max content width per tier (centered container) and side gutters for XS (320) so nothing clips.

---

## Phase 0 — Foundation & Setup

- [ ] **T0.4** Audit existing tokens in [globals.css](src/app/globals.css); the new design is **dark** (deep navy/blue backgrounds, neon pixel accents). Add dark surface tokens (background navy, panel blue, grid-glow cyan, lightning white) alongside the existing Google/halftone/pastel palette.
- [ ] **T0.5** Source/confirm the pixel display font(s) used in headings (e.g. press-start / arcade style) vs. Google Sans body. Add `@font-face` or `next/font` loading.
- [ ] **T0.6** Define reusable utility classes / component primitives: pixel-border panel, neon glow box, retro shadow, gradient grid floor, pixel button.
- [ ] **T0.7** Collect & organize assets into `public/` (mascot "Sparky" sprites, pixel city skyline, lightning, ghosts, UFO, arcade cabinet, pill icons, section background tiles, logos).
- [ ] **T0.8** Decide section componentization: split each section into its own component under `src/app/components/` to keep `page.tsx` readable.

---

## Phase 1 — Layout Shell

- [ ] **T1.1** Sticky top nav bar: SparkFest 2026 logo (left) + links (Highlights, About, Pre-Events, Program, FAQ). Anchor-scroll behavior.
  - [ ] XS: collapse nav into a hamburger / drawer menu.
  - [ ] md+: inline horizontal nav.
- [ ] **T1.2** Page background system — dark navy with pixel city skyline, gradient grid floor, and lightning accents that bleed between sections.
- [ ] **T1.3** Footer (confirm content in Figma — credits, GDG PUP, socials).
- [ ] **T1.4** Smooth-scroll + scroll-spy for active nav state.

---

## Phase 2 — Sections

> Each section: build markup + style desktop (1920) → adapt 1280 → 768 → 320. Mark a section done only when all four tiers match Figma.

### 2.1 Hero
- [ ] Logo, nav, SPARK/FEST pixel wordmark with smoke/cloud accents.
- [ ] Tagline: "Igniting Innovation. Building Impact. Empowering Communities."
- [ ] **Live countdown** (Days / Hours / Minutes / Seconds) in pixel-bordered tiles — wire to event target date.
- [ ] Eligibility line: "Open to all PUP & inter-university students."
- [ ] Primary CTA "Register Now – It's Free" + secondary "See How It Works".
- [ ] Mascot sprites (cat hero + flying saucer), lightning, gradient grid floor.
- [ ] Responsive: hero wordmark scales; countdown tiles wrap 2×2 on XS; CTAs stack on XS.

### 2.2 About — "Build the Spark. Become the Impact."
- [ ] Heading + two body paragraphs (flagship hackathon of GDG on Campus – PUP; Community Impact Initiative).
- [ ] Pull-quote: "This isn't a competition for prizes. It's a movement for impact."
- [ ] Three stat cards (Participants / Teams / Communities reached) with pixel-number styling.
- [ ] Pill-cluster + rocket/cloud decorative art.
- [ ] Responsive: stat cards row → stack on XS; decorative art hides/repositions.

### 2.3 What Goes Down at Sparkfest
- [ ] Section heading + 6 feature cards: Hackathon Proper, Mentorship Sessions, Pitching Day, Awarding Ceremony, Networking, Community Impact.
- [ ] Each card: pixel icon/thumbnail + title (arcade font) + description.
- [ ] Grid: 3×2 desktop → 2×3 (768) → 1 column (XS).
- [ ] Gradient navy→green background with pixel skyline top/bottom borders.

### 2.4 Who's This For? — "YOU, Probably."
- [ ] Heading with colored "YOU" accent + intro copy (open to all disciplines).
- [ ] Four persona cards (blue / green / yellow / red silhouettes with traffic-light pips).
- [ ] Highlighted neon banner: "First-timer with zero experience? Perfect. SparkFest is built for your first win."
- [ ] Responsive: 4-up → 2×2 (768) → 1 column (XS); banner reflows.

### 2.5 Judges
- [ ] Build from `image.png` reference (Figma). Confirm: heading + judge cards (photo, name, title/role).
- [ ] Grid responsive: multi-column desktop → fewer columns down to single column XS.
- [ ] Placeholder data + image slots until real judges are supplied.

### 2.6 The Road to Demo Day
- [ ] Platformer-style vertical timeline with 6 milestone blocks:
  - Jun 1–18 Pre-Event Promotions
  - Jun 19 Registration Opens
  - Jun 25 Kick-Off Program
  - Jul 2 First Submission Deadline
  - Jul 3–6 Workshops & Mentorship
  - Jul 9 Pitching, Judging & Awarding
- [ ] Color-coded blocks (blue/red/yellow/green) + rocket, UFO, ladder, mascot, ground/floor art.
- [ ] Responsive: staggered platform layout on wide screens collapses to a clean stacked vertical timeline on XS (keep readable, drop heavy decoration).

### 2.7 Where & When
- [ ] Confirm content from Figma (venue, dates, format). Build info panel(s).
- [ ] Map / venue callout + date block.
- [ ] Responsive panel stacking.

### 2.8 FAQ — "Questions? We've got you."
- [ ] Accordion with numbered items (01–05): Who can join · How much does it cost · Do I need a team/coding experience · What will my team build · Where and when does it happen.
- [ ] Expand/collapse interaction (single or multi-open — confirm in Figma).
- [ ] Pac-man ghosts + pixel "?" decorations + green dot-matrix side rails.
- [ ] Responsive: full-width panels on XS; keyboard-accessible (button + aria-expanded).

### 2.9 Snap & Frame — "Sparky's Snap & Frame!"
- [ ] Heading + intro.
- [ ] Two panels: **GDG Photobooth** ("Proof you showed up and built something") and **GDG DP Frame** ("Show up before you even show up").
- [ ] CTA buttons: "Try the Photobooth" + "Get Your DP Frame" (placeholder URLs → dev modal until live, per PRD-F4/F5).
- [ ] Arcade-cabinet frame art around the panels.
- [ ] Responsive: two panels side-by-side desktop → stack on XS.

### 2.10 Before the Spark (Pre-Events)
- [ ] Heading + intro ("Two pre-events…").
- [ ] Four cards with poster thumbnails + "Read the Full post →" links:
  - Sparkpulse: UXpedition
  - Sparkpulse: Cumulus
  - Inkspire: Shaping Stories, Building brands
  - TechTimeout: GDG Esports & Sparkrush
- [ ] Grid: 2×2 desktop → 1 column XS.

### 2.11 Final CTA — "Your idea could be the next big spark."
- [ ] Neon-framed panel: ghosts + "Three weeks. One team. A solution that lives on in a real community." + "Don't just watch it happen — build it."
- [ ] "Register Now – It's Free" button.
- [ ] Arcade cabinet / pixel-cube decorative base.
- [ ] Responsive scaling of panel + art.

---

## Phase 3 — Interactivity

- [ ] **T3.1** Countdown timer: hydration-safe, ticks every second, handles expired state (reuse logic from existing [page.tsx](src/app/page.tsx)).
- [ ] **T3.2** FAQ accordion open/close with smooth height transition + a11y attributes.
- [ ] **T3.3** Mobile nav drawer toggle.
- [ ] **T3.4** Placeholder CTA modal/toast for Photobooth & DP Frame (pending real URLs).
- [ ] **T3.5** Register CTA → `https://forms.gle/RvTz12mqGWmVX9mn8` (new tab), per PRD US-01.
- [ ] **T3.6** Scroll-triggered / hover micro-interactions per [DSD §5](docs/dsd-sparkfest.md) (keep MOTION_INTENSITY modest).

---

## Phase 4 — Responsive QA (per breakpoint)

- [ ] **T4.1** 1920+ — matches desktop Figma frame, no excessive whitespace, art positioned correctly.
- [ ] **T4.2** 1280–1919 — matches medium frame; container max-width + scaling correct.
- [ ] **T4.3** 768–1279 — tablet grids collapse correctly; nav still usable.
- [ ] **T4.4** 320 XS — no horizontal scroll, tap targets ≥48px, all text legible, decorations simplified.
- [ ] **T4.5** Test the in-between widths (e.g. 1023, 1279, 1919) for layout snapping/jank.

---

## Phase 5 — Accessibility, Performance & Polish

- [ ] **T5.1** Contrast check — neon/pixel text on dark backgrounds must hit WCAG AA (DSD §6).
- [ ] **T5.2** Keyboard nav + visible focus rings on all interactive elements.
- [ ] **T5.3** Alt text for all sprites/images; decorative art marked `aria-hidden`.
- [ ] **T5.4** Optimize/compress assets; use `next/image` where appropriate; lazy-load below-the-fold art.
- [ ] **T5.5** Respect `prefers-reduced-motion` for animated lightning/mascots.
- [ ] **T5.6** Semantic landmarks (`header`, `nav`, `main`, `section` with headings, `footer`).
- [ ] **T5.7** Metadata/SEO: title, description, OG image, favicon.
- [ ] **T5.8** `npm run lint` + `npm run build` clean; Lighthouse pass.

---

## Asset Checklist

- [ ] SPARK/FEST pixel wordmark + smoke art
- [ ] Sparky mascot sprites (hero cat, flying saucer, variants)
- [ ] Pixel city skyline + gradient grid floor + lightning
- [ ] Section icons: hackathon, mentorship, pitching, awarding, networking, community impact
- [ ] Persona silhouette cards (blue/green/yellow/red)
- [ ] Judge photos (pending real data)
- [ ] Road-to-demo platformer art (platforms, rocket, UFO, ladder, ground)
- [ ] Pac-man ghosts + pixel "?" decorations + dot-matrix rails (FAQ)
- [ ] Arcade cabinet frames (Snap & Frame, final CTA)
- [ ] Pre-event poster thumbnails (UXpedition, Cumulus, Inkspire, TechTimeout)
- [ ] Pill / pixel-cube decorative props
- [ ] GDG / SparkFest logos + favicon + OG image

---

## Open Questions

- [ ] Exact pixel/arcade font name(s) from Figma.
- [ ] Real judge names/photos and "Where & When" copy.
- [ ] Live URLs for Photobooth and DP Frame.
- [ ] Final footer content + social links.
- [ ] Single-open vs multi-open FAQ behavior.
