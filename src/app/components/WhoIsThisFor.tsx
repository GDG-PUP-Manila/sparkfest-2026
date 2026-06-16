import React from "react";
import { PERSONAS, COLOR_HEX } from "./content";
import { PixelPlus } from "./decor";

export default function WhoIsThisFor() {
  return (
    <section
      id="highlights"
      className="relative overflow-hidden bg-gradient-to-b from-navy-700 to-navy-800 py-16 md:py-24"
    >
      <PixelPlus className="animate-blink pointer-events-none absolute left-[14%] top-24 h-3 w-3 opacity-60" />
      <PixelPlus className="animate-blink pointer-events-none absolute right-[18%] top-40 h-4 w-4 opacity-50" />

      <div className="mx-auto max-w-[1280px] px-4 md:px-8 desktop:max-w-[1600px]">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          Who&apos;s This For?{" "}
          <span className="font-pixel text-google-green-500">YOU</span>, Probably.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          SparkFest is open to{" "}
          <strong className="text-white">college students from all disciplines</strong>{" "}
          — at PUP and other universities. Whether you ship code or sketch ideas,
          there&apos;s a seat for you.
        </p>

        {/* Persona cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:gap-6 xl:grid-cols-4">
          {PERSONAS.map((p) => (
            <article
              key={p.label}
              className="overflow-hidden border-2 border-navy-600 bg-navy-900 shadow-[4px_4px_0_#050a1f]"
            >
              <div
                className="flex aspect-square items-end justify-center"
                style={{
                  background: `linear-gradient(160deg, ${COLOR_HEX[p.color]}, ${COLOR_HEX[p.color]}99)`,
                }}
              >
                <svg
                  viewBox="0 0 64 64"
                  className="h-3/4 w-3/4 text-navy-900/80"
                  aria-hidden="true"
                >
                  <circle cx="32" cy="22" r="11" fill="currentColor" />
                  <path
                    d="M12 60c0-12 9-20 20-20s20 8 20 20z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between gap-2 px-3 py-3">
                <span className="font-pixel text-[9px] text-white md:text-[10px]">
                  {p.label}
                </span>
                <span className="flex gap-1" aria-hidden="true">
                  <i className="h-2 w-2 rounded-full bg-google-red-500" />
                  <i className="h-2 w-2 rounded-full bg-google-yellow-500" />
                  <i className="h-2 w-2 rounded-full bg-google-green-500" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* First-timer banner */}
        <div className="neon-frame mt-10 bg-navy-900 px-6 py-8 text-center md:mt-14 md:px-10 md:py-10">
          <p className="font-pixel text-sm leading-relaxed text-google-yellow-500 md:text-xl">
            First-timer with zero experience?
          </p>
          <p className="mt-4 text-sm font-semibold text-white md:text-lg">
            Perfect. SparkFest is built for your first win.
          </p>
        </div>
      </div>
    </section>
  );
}
