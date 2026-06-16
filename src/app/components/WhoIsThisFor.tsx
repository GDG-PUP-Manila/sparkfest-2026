import React from "react";
import { PERSONAS, COLOR_HEX } from "./content";
import { PixelPlus, PixelCloud, Ufo } from "./decor";

export default function WhoIsThisFor() {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-gradient-to-b from-[#1a3a86] via-navy-700 to-navy-800 pb-16 pt-0 md:pb-24"
    >
      {/* Green invader skyline at top (flipped so teeth point down) */}
      <div className="bg-google-green-500/15">
        <svg
          viewBox="0 0 160 24"
          preserveAspectRatio="none"
          className="block h-6 w-full md:h-8"
          aria-hidden="true"
          shapeRendering="crispEdges"
          style={{ transform: "scaleY(-1)" }}
        >
          <pattern id="invaders" width="32" height="24" patternUnits="userSpaceOnUse">
            <path
              fill="#9be38a"
              d="M4 0h6v6h4v4h4V6h6v6h4v6H2v-6h4v-2H2V6h2z"
            />
          </pattern>
          <rect width="160" height="24" fill="url(#invaders)" />
        </svg>
      </div>

      <PixelCloud className="pointer-events-none absolute left-[5%] top-24 h-6 w-16 opacity-50" />
      <PixelCloud className="pointer-events-none absolute right-[12%] top-32 h-5 w-14 opacity-40" />
      <PixelPlus className="animate-blink pointer-events-none absolute left-[32%] top-44 h-4 w-4 opacity-70" />
      <PixelPlus className="animate-blink pointer-events-none absolute right-[14%] top-28 h-3 w-3 opacity-60" />

      <div className="relative mx-auto max-w-[1280px] px-4 pt-12 md:px-8 md:pt-16 desktop:max-w-[1600px]">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          Who&apos;s This For?{" "}
          <span className="font-pixel text-google-green-500">YOU</span>, Probably.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/80 md:text-base">
          SparkFest is open to{" "}
          <strong className="text-white">college students from all disciplines</strong>{" "}
          — at PUP and other universities. Whether you ship code or sketch ideas,
          there&apos;s a seat for you.
        </p>

        {/* Persona cards (tall portrait) */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-5 xl:gap-6">
          {PERSONAS.map((p) => (
            <article
              key={p.label}
              className="overflow-hidden rounded-md border-2 border-navy-600 bg-navy-900 p-2 shadow-[6px_6px_0_#050a1f]"
            >
              <div
                className="relative flex aspect-[3/4] items-end justify-center overflow-hidden rounded-sm"
                style={{
                  background: `linear-gradient(170deg, ${COLOR_HEX[p.color]}, ${COLOR_HEX[p.color]}aa)`,
                }}
              >
                <svg
                  viewBox="0 0 64 90"
                  preserveAspectRatio="xMidYMax meet"
                  className="h-[92%] w-full text-navy-900/85"
                  aria-hidden="true"
                >
                  {/* head */}
                  <circle cx="32" cy="20" r="10" fill="currentColor" />
                  {/* neck + shoulders + torso */}
                  <path
                    d="M27 28h10v5c10 2 17 9 17 20v42H10V53c0-11 7-18 17-20z"
                    fill="currentColor"
                  />
                </svg>
                {/* traffic-light pips */}
                <span
                  className="absolute bottom-2 right-2 flex gap-1"
                  aria-hidden="true"
                >
                  <i className="h-2 w-2 rounded-full bg-google-red-500" />
                  <i className="h-2 w-2 rounded-full bg-google-yellow-500" />
                  <i className="h-2 w-2 rounded-full bg-google-green-500" />
                </span>
              </div>
              <p className="px-1 pb-1 pt-2 text-center font-pixel text-[8px] leading-tight text-white md:text-[9px]">
                {p.label}
              </p>
            </article>
          ))}
        </div>

        {/* First-timer banner */}
        <div className="neon-frame relative mt-12 overflow-hidden rounded-md bg-gradient-to-b from-panel-blue to-navy-900 px-6 py-9 text-center md:mt-16 md:px-10 md:py-12">
          {/* mountains */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-70">
            <svg viewBox="0 0 400 80" preserveAspectRatio="none" className="h-full w-full">
              <path d="M0 80 L60 30 L120 80 Z" fill="#1d4fb0" />
              <path d="M90 80 L150 40 L210 80 Z" fill="#173d8c" />
              <path d="M280 80 L340 35 L400 80 Z" fill="#1d4fb0" />
            </svg>
          </div>

          {/* arcade props */}
          <div className="relative flex items-center justify-center gap-5">
            <Ufo className="h-6 w-12" />
            <span className="block h-7 w-1.5 rounded bg-grid-cyan/70" aria-hidden="true">
              <span className="-mt-1 block h-3 w-3 -translate-x-[3px] rounded-full bg-google-red-500" />
            </span>
            <span className="text-2xl" aria-hidden="true">🐱</span>
          </div>

          <p className="relative mt-5 font-pixel text-sm leading-relaxed text-google-yellow-500 md:text-2xl">
            First-timer with zero experience?
          </p>
          <p className="relative mt-4 text-sm font-bold text-white md:text-lg">
            Perfect. SparkFest is built for your first win.
          </p>
        </div>
      </div>
    </section>
  );
}
