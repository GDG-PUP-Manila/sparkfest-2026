import { HERO, REGISTER_URL } from "./content";

/*
 * The Hero is the exact Figma scene exported as an image (hero-bg.webp),
 * rendered inside a fixed 1920×1376 aspect canvas so it scales 1:1 with the
 * design. The clickable CTA links are overlaid on top at the precise
 * coordinates of the baked buttons.
 *
 * All percentages below are relative to the 1920×1376 Figma hero frame.
 */
const BUTTONS = { left: 30.42, top: 70, width: 37.24, height: 3.92 };

/*
 * Mobile hero (Figma node 638-19846) constants.
 * The decorative scene is baked into hero-mobile-bg.webp; the foreground stack
 * (title, tagline, microcopy, CTAs) is rebuilt here so it is legible and
 * touch-friendly below the `md` (768px) breakpoint.
 */

// Soft pixel glow shared by the tagline, digits, labels, and microcopy.
const MOBILE_TEXT_GLOW = "0px 4px 64px white, 0px 4px 4px rgba(0,0,0,0.25)";

/*
 * Mobile hero UFO — tweak-by-eye knobs.
 * Edit these numbers, save, and the dev server hot-reloads. All values are px.
 *   UFO_OFFSET_X : horizontal nudge — NEGATIVE = move left, POSITIVE = move right
 *   UFO_OFFSET_Y : vertical position — LARGER = lower (more overlap onto the logo)
 *   UFO_WIDTH    : saucer size
 */
const UFO_OFFSET_X = 10;
const UFO_OFFSET_Y = -30; // ↑ moved up (≈ -top-30); negative = higher, positive = lower
const UFO_WIDTH = 108;

export default function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-[#050a1f]">
      <h1 className="sr-only">
        SparkFest 2026 — Igniting Innovation, Building Impact, Empowering
        Communities
      </h1>

      {/* Desktop scene (md+): the rich Figma hero canvas */}
      <div className="mt-20 hidden md:mt-0 md:block">
        <div
          className="relative mx-auto w-full"
          style={{
            aspectRatio: "1920 / 1376",
            containerType: "inline-size",
            maxWidth: "1920px",
          }}
        >
          {/* Exact Figma hero scene */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/hero-bg.webp"
            alt="SparkFest 2026 — Igniting Innovation. Building Impact. Empowering Communities."
            className="absolute inset-0 h-full w-full select-none object-cover"
            draggable={false}
            fetchPriority="high"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/glitch-red-left.webp"
            alt=""
            className="absolute opacity-80 animate-float-horizontal z-10 object-contain pointer-events-none select-none"
            style={{
              top: "8%",
              left: "12.8%",
              width: "12cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/glitch-yellow-left.webp"
            alt=""
            className="absolute opacity-80 animate-float z-11 object-contain pointer-events-none select-none"
            style={{
              top: "28%",
              left: "8%",
              width: "20cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/sparky.webp"
            alt="Sparky"
            className="absolute z-12 animate-float -scale-x-100 object-contain pointer-events-none select-none"
            style={{
              top: "63%",
              left: "12%",
              width: "8cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/sparky.webp"
            alt="Sparky Reflection"
            className="absolute z-11 animate-float -scale-x-100 -scale-y-100 opacity-20 blur-[2px] object-contain pointer-events-none select-none"
            style={{
              top: "77%",
              left: "12%",
              width: "8cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/cirby-layer.webp"
            alt="Cirby"
            className="absolute z-12 animate-float-x rotate-15 -scale-x-100 object-contain pointer-events-none select-none"
            style={{
              top: "62%",
              right: "7.5%",
              width: "15cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/cirby-layer.webp"
            alt="Cirby Reflection"
            className="absolute z-11 animate-float-x -rotate-5 -scale-100 opacity-20 blur-[2px] object-contain pointer-events-none select-none"
            style={{
              top: "74%",
              right: "7.5%",
              width: "15cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/glitch-red-right.webp"
            alt=""
            className="absolute opacity-80 animate-float z-2 object-contain pointer-events-none select-none"
            style={{
              top: "15%",
              right: "15.3%",
              width: "12cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/glitch-yellow-right.webp"
            alt=""
            className="absolute animate-float-horizontal opacity-60 z-10 object-contain pointer-events-none select-none"
            style={{
              top: "9%",
              right: "18.6%",
              width: "15cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/cross-mark.webp"
            alt=""
            className="absolute z-2 object-contain pointer-events-none select-none"
            style={{
              top: "45%",
              right: "12%",
              width: "2cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/cross-mark-2.webp"
            alt=""
            className="absolute z-10 object-contain pointer-events-none select-none"
            style={{
              top: "56%",
              left: "12.5%",
              width: "2cqw",
            }}
            draggable={false}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/cubeL-layer.webp"
            alt=""
            className="hidden md:block absolute z-10 object-contain pointer-events-none select-none"
            style={{
              top: "63%",
              left: "0%",
              width: "12cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/cubeR-layer.webp"
            alt=""
            className="hidden md:block absolute z-10 object-contain pointer-events-none select-none"
            style={{
              top: "63%",
              right: "0%",
              width: "12cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/thunder-left.webp"
            alt=""
            className="absolute z-20 pixelated animate-thunder object-contain pointer-events-none select-none"
            style={{
              top: "44%",
              left: "0%",
              width: "40cqw",
            }}
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/thunder-right.webp"
            alt=""
            className="absolute z-20 pixelated animate-thunder object-contain pointer-events-none select-none"
            style={{
              top: "44%",
              right: "-1%",
              width: "40cqw",
            }}
            draggable={false}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/logo.webp"
            alt="SparkFest 2026 Logo"
            className="absolute animate-float inset-x-0 z-10 scale-80 translate-x-[-1cqw] mx-auto object-contain pointer-events-none select-none"
            style={{
              top: "12%",
              width: "45cqw",
            }}
            draggable={false}
          />
          <p
            className="absolute lg:mx-110 md:mx-50 z-10 inset-x-0 text-center font-sans text-white drop-shadow-lg px-8"
            style={{
              top: "50%",
              fontSize: "1.6cqw",
              textShadow: "0 0.15cqw 0 rgba(3,8,24,0.6)",
            }}
          >
            Igniting Innovation, Building Impact, Empowering Communities
          </p>

          {/* Ghost Message */}
          <div
            className="absolute z-10 inset-x-0 mx-auto flex flex-row items-center justify-center gap-3 pointer-events-none select-none"
            style={{
              top: "64%",
              width: "100%",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero/red-ghost.webp"
              alt="Red Ghost"
              className="w-[3cqw] md:w-[24px] xl:w-[36px] h-auto object-contain animate-ghost-move pixelated"
              draggable={false}
            />
            <p className="font-sans text-white text-[1.8cqw] md:text-base lg:text-[20px] drop-shadow-md whitespace-nowrap">
              Open to all PUP &amp; inter-university students
            </p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero/glitch-blue.webp"
            alt=""
            className="absolute animate-pulse opacity-90 inset-x-0 z-2 mx-auto object-contain pointer-events-none select-none"
            style={{
              top: "-2%",
              width: "100cqw",
            }}
            draggable={false}
          />

          {/* Clickable links over the baked CTA buttons */}
          <div
            className="absolute flex flex-col lg:block gap-[1.5cqw] lg:gap-0 w-[25%] lg:w-[var(--desk-width)] left-[37.5%] lg:left-[var(--desk-left)] top-[69%] lg:top-[var(--desk-top)] mt-[2cqw] lg:mt-0 h-auto lg:h-[var(--desk-height)]"
            style={
              {
                "--desk-left": `${BUTTONS.left}%`,
                "--desk-top": `${BUTTONS.top}%`,
                "--desk-width": `${BUTTONS.width}%`,
                "--desk-height": `${BUTTONS.height}%`,
              } as React.CSSProperties
            }
          >
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Register Now – It's Free"
              className="relative lg:absolute z-10 lg:inset-y-0 lg:left-0 flex items-center justify-center bg-[#2B7FFF] text-white font-pixelify font-medium text-[1.6cqw] lg:text-xs whitespace-nowrap border-t-[4px] border-l-[4px] border-b-[4px] border-r-[4px] border-t-[#BEDBFF] border-l-[#BEDBFF] border-b-[#155DFC] border-r-[#155DFC] transition-all hover:brightness-110 active:translate-x-[3px] active:translate-y-[3px] w-full lg:w-[46.85%] aspect-[335/54] lg:aspect-auto"
              style={{
                boxShadow: "3px 3px 0px #0A162A",
              }}
            >
              Register Now — It’s Free
            </a>
            <a
              href="#program"
              aria-label="See How It Works"
              className="relative lg:absolute z-10 lg:inset-y-0 flex items-center justify-center text-[#263b8a] font-pixelify font-medium text-[1.6cqw] lg:text-lg whitespace-nowrap border-t-[4px] border-l-[4px] border-b-[4px] border-r-[4px] border-t-[#2B7FFF] border-l-[#1C398E] border-b-[#155DFC] border-r-[#155DFC] mix-blend-hard-light drop-shadow-[0px_2px_1px_#000000] transition-all hover:brightness-110 active:translate-x-[3px] active:translate-y-[3px] w-full lg:left-[53.01%] lg:w-[46.99%] aspect-[335/54] lg:aspect-auto"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Mobile scene (base → below md): the Figma mobile vertical stack (node 638-19846) */}
      <div className="relative w-full overflow-hidden md:hidden">
        {/* Decorative baked background (grid, glow, sparkles, mascots) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero/hero-mobile-bg.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top"
        />

        {/* Lightning bolts flanking the title (above the bg, below the z-10 foreground) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero/thunder-left.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute left-0 top-[24%] z-[5] w-[46%] select-none object-contain pixelated animate-thunder"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero/thunder-right.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          className="pointer-events-none absolute right-0 top-[24%] z-[5] w-[46%] select-none object-contain pixelated animate-thunder"
        />

        {/* Foreground stack — pt clears the fixed mobile Nav (h-16 = 64px) plus a small gap */}
        <div className="relative z-10 flex flex-col items-center px-[17px] pb-24 pt-[88px]">
          {/* Title lockup + tagline */}
          <div className="flex w-full flex-col items-center gap-[6px] px-[19px] pt-[170px]">
            {/* SPARKFEST logo with a swaying UFO hovering over its top */}
            <div className="relative">
              {/* Centering wrapper (own transform) so the sway animation transform doesn't fight it.
                  Position is driven by the UFO_* knobs at the top of this file. */}
              <div
                className="pointer-events-none absolute bottom-full left-1/2 z-20"
                style={{
                  transform: `translateX(calc(-50% + ${UFO_OFFSET_X}px)) translateY(${UFO_OFFSET_Y}px)`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/hero/ufo.webp"
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  width={205}
                  height={145}
                  style={{ width: `${UFO_WIDTH}px` }}
                  className="animate-ufo-sway h-auto select-none drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)]"
                />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/hero/logo.webp"
                alt=""
                aria-hidden="true"
                draggable={false}
                width={264}
                height={179}
                className="h-auto w-[264px] max-w-full select-none"
                fetchPriority="high"
              />
            </div>
            <p
              className="text-center font-sans text-[16px] font-bold leading-[1.5] text-blue-50"
              style={{ textShadow: MOBILE_TEXT_GLOW }}
            >
              {HERO.tagline.join(" ")}
            </p>
          </div>

          {/* Microcopy + red ghost mascot (Figma 638-20164 + 638-20166) */}
          <div className="relative mt-[6px] flex flex-col items-center">
            <p
              className="text-center font-sans text-[14px] font-bold leading-[1.5] text-blue-50"
              style={{
                transform: "rotate(0.59deg)",
                textShadow: MOBILE_TEXT_GLOW,
              }}
            >
              {HERO.eligibility}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero/red-ghost.webp"
              alt=""
              aria-hidden="true"
              draggable={false}
              width={204}
              height={204}
              className="pointer-events-none absolute left-1/2 top-full mt-[10px] h-auto w-[51px] -translate-x-1/2 select-none"
            />
          </div>

          {/* CTAs — stacked, touch-friendly tap targets */}
          <div className="mt-[98px] flex w-[234px] flex-col gap-[34px]">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={HERO.primaryCta}
              className="flex min-h-11 w-full items-center justify-center border-2 border-b-blue-950 border-l-blue-50 border-r-blue-950 border-t-blue-50 bg-brand-blue px-5 py-[10px] text-center font-pixelify text-[20px] leading-[1.4] text-blue-50 shadow-[3px_3px_0_var(--color-pixel-shadow)] transition-transform duration-150 ease-out hover:-translate-y-[1px] active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grid-cyan"
            >
              {HERO.primaryCta}
            </a>
            <a
              href="#program"
              aria-label={HERO.secondaryCta}
              className="flex min-h-11 w-full items-center justify-center border-2 border-b-blue-950 border-l-blue-50 border-r-blue-950 border-t-blue-50 px-5 py-[10px] text-center font-pixelify text-[20px] leading-[1.4] text-blue-950 transition-transform duration-150 ease-out hover:-translate-y-[1px] active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grid-cyan"
            >
              {HERO.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hero/glow-effect.webp"
        alt="glow effect"
        className="hidden md:block absolute bottom-12 opacity-70 left-0 w-full object-contain pointer-events-none select-none mix-blend-screen"
        style={{
          filter: "sepia(1) saturate(3) hue-rotate(140deg) brightness(1.8)",
        }}
        draggable={false}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/hero/perspective-grid.webp"
        alt="perspective grid"
        className="hidden md:block absolute -bottom-2 left-0 w-full scale-105 opacity-20 object-contain pointer-events-none select-none"
        draggable={false}
      />
    </section>
  );
}
