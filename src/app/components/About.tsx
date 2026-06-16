import React from "react";
import { ABOUT } from "./content";
import { RichText, PixelPlus } from "./decor";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-navy-700 via-navy-700 to-navy-800 py-16 md:py-24"
    >
      <PixelPlus className="animate-blink pointer-events-none absolute right-[10%] top-16 h-4 w-4 opacity-50" />

      <div className="mx-auto max-w-[1280px] px-4 md:px-8 desktop:max-w-[1600px]">
        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl xl:text-6xl">
          Build the Spark. Become the Impact.
        </h2>

        <div className="mt-8 grid gap-8 md:mt-12 xl:grid-cols-[1.4fr_1fr] xl:gap-16">
          <div className="space-y-5 text-sm leading-relaxed text-white/75 md:text-base">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText text={p.text} />
              </p>
            ))}
            <p className="pt-2 text-lg font-bold text-grid-cyan md:text-2xl">
              {ABOUT.quote}
            </p>
          </div>

          {/* Decorative pill cluster */}
          <div
            aria-hidden="true"
            className="hidden items-center justify-center xl:flex"
          >
            <div className="grid grid-cols-2 gap-4">
              {(["#ea4335", "#34a853", "#4285f4", "#fbbc04"] as const).map(
                (c, i) => (
                  <div
                    key={i}
                    className="animate-float h-16 w-28 rounded-full border-2 border-navy-900"
                    style={{
                      background: `linear-gradient(180deg, ${c}, ${c}cc)`,
                      animationDelay: `${i * 0.3}s`,
                      boxShadow: "0 6px 0 #050a1f",
                    }}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16 md:gap-6">
          {ABOUT.stats.map((s) => (
            <div
              key={s.label}
              className="pixel-panel flex flex-col items-center px-6 py-8 text-center"
            >
              <span className="font-pixel text-4xl text-white md:text-5xl">
                {s.value}
              </span>
              <span className="mt-4 font-pixel text-[9px] uppercase tracking-widest text-grid-cyan md:text-[11px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
