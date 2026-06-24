import React from "react";
import Image from "next/image";
import { FINAL_CTA, REGISTER_URL } from "./content";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const GHOST_COLORS = ["blue", "green", "red"] as const;

/** Straight 10px bevel cuts on all four corners via clip-path polygon. */
const CUT = 10;
const CLIP_STRAIGHT_CORNERS: React.CSSProperties = {
  clipPath: `polygon(
    ${CUT}px 0,
    calc(100% - ${CUT}px) 0,
    calc(100% - ${CUT}px) ${CUT}px,
    100% ${CUT}px,
    100% calc(100% - ${CUT}px),
    calc(100% - ${CUT}px) calc(100% - ${CUT}px),
    calc(100% - ${CUT}px) 100%,
    ${CUT}px 100%,
    ${CUT}px calc(100% - ${CUT}px),
    0 calc(100% - ${CUT}px),
    0 ${CUT}px,
    ${CUT}px ${CUT}px
  )`,
};

/**
 * Dot-grid arcade background.
 * A radial-gradient dot pattern masked with a top-to-bottom linear fade.
 * Avoids a global CSS class — keeps the effect self-contained in this component.
 */
const ARCADE_GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(circle, rgba(250,200,255,0.9) 1px, transparent 1px)",
  backgroundSize: "18px 18px",
  WebkitMaskImage:
    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 100%)",
  maskImage:
    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 100%)",
};

const INNER_GRADIENT: React.CSSProperties = {
  background:
    "linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), linear-gradient(180deg, var(--navy-800) 0%, var(--panel-blue) 35.58%, var(--neon-blue) 78.85%, var(--navy-800) 100%), #FFFFFF",
};

const CTA_BUTTON_SHADOW: React.CSSProperties = {
  boxShadow:
    "3px 3px 0px #0A162A, inset 0 4px 0 0 #BEDBFF, inset 4px 0 0 0 #BEDBFF, inset 0 -4px 0 0 #155DFC, inset -4px 0 0 0 #155DFC",
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function GhostRow() {
  return (
    <div className="relative z-10 flex w-full items-center justify-center gap-4">
      {GHOST_COLORS.map((color) => (
        <Image
          key={color}
          src={`/assets/cta/${color}-ghost.webp`}
          alt={`${color.charAt(0).toUpperCase() + color.slice(1)} Ghost`}
          width={40}
          height={40}
          className="h-8 w-8 object-contain pixelated md:h-20 md:w-20"
        />
      ))}
    </div>
  );
}

function DecorativeCubes() {
  return (
    <>
      <Image
        src="/assets/cta/cube-left.webp"
        alt=""
        aria-hidden="true"
        width={300}
        height={300}
        className="pointer-events-none absolute bottom-0 left-0 w-32 object-contain pixelated opacity-30 md:w-1/3"
      />
      <Image
        src="/assets/cta/cube-right.webp"
        alt=""
        aria-hidden="true"
        width={300}
        height={300}
        className="pointer-events-none absolute bottom-0 right-0 w-32 object-contain pixelated opacity-30 md:w-1/3"
      />
    </>
  );
}

function RegisterButton() {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={CTA_BUTTON_SHADOW}
      className="relative z-10 mb-6 mt-8 flex h-12 w-full max-w-54 items-center justify-center bg-[#2B7FFF] px-1 font-pixel text-xs font-medium leading-[1.4] text-[#FAFAFA] transition-transform hover:-translate-y-0.5 active:translate-y-0 md:h-15.5 md:max-w-85.75 md:text-sm"
    >
      {FINAL_CTA.cta}
    </a>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 md:py-24">
      {/* Centered background container restricted to max width of 1920px to prevent sticking/enlarging when zoomed out */}
      <div className="absolute inset-0 mx-auto max-w-480 pointer-events-none z-0">
        {/* Dot-grid background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-15"
          style={ARCADE_GRID_STYLE}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-340 px-4 pb-40 md:px-40 md:pt-5 md:pb-[200px]">
        <div className="relative w-full">
          {/* Outer shell: provides the 10px border padding offset */}
          <div className="relative mx-auto w-full px-[10px] pt-[10px]">
            {/* Blue bevelled border layer — sits behind content via absolute positioning.
                clip-path is applied here so it cannot clip child content. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[#155DFC]"
              style={CLIP_STRAIGHT_CORNERS}
            />

            {/* Inner content panel */}
            <div
              style={INNER_GRADIENT}
              className="relative z-10 isolate flex w-full flex-col items-center justify-center gap-2 border-8 border-blue-500 px-4 py-10 text-center md:px-25 md:pt-16 md:pb-30"
            >
              <DecorativeCubes />
              <GhostRow />

              <p className="relative z-10 mt-4 font-pixel text-base leading-relaxed text-google-yellow-500 md:text-2xl">
                {FINAL_CTA.quote}
              </p>

              <div className="relative z-10 mt-6 max-w-213.75 space-y-2 font-sans text-sm font-normal leading-loose text-white md:text-lg">
                {FINAL_CTA.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <RegisterButton />
            </div>
          </div>

          {/* Game controller — floats below the card, centered */}
          <Image
            src="/assets/cta/game-controller.webp"
            alt="Game Controller"
            width={800}
            height={400}
            className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-auto w-[90%] max-w-175 -translate-x-1/2 translate-y-[55%] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
