import React from "react";
import { ABOUT } from "./content";
import { RichText, PixelSkyline, PixelCloud } from "./decor";

export default function About() {
  return (
    <section
      id="about"
      className="dot-matrix relative overflow-hidden bg-[radial-gradient(120%_120%_at_50%_0%,#16357a_0%,#0f2a66_45%,#0e5a3d_100%)] pb-16 pt-0 md:pb-24"
    >
      {/* Green pixel skyline at the very top */}
      <PixelSkyline className="block h-5 w-full md:h-7" color="#34a853" />

      {/* Drifting clouds */}
      <PixelCloud className="pointer-events-none absolute left-[6%] top-16 h-6 w-16 opacity-60" />
      <PixelCloud className="pointer-events-none absolute right-[30%] top-24 h-5 w-14 opacity-40" />

      <div className="relative mx-auto max-w-[1280px] px-4 pt-12 md:px-8 md:pt-16 desktop:max-w-[1600px]">
        <div className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
          {/* Left column: copy + stats */}
          <div>
            <h2 className="text-4xl font-extrabold leading-[1.05] text-white md:text-6xl xl:text-7xl">
              Build the Spark.
              <br />
              Become the Impact.
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-sm leading-relaxed text-white/80 md:text-base">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText text={p.text} />
                </p>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-xl font-bold leading-snug text-white md:text-3xl">
              {ABOUT.quote}
            </p>

            {/* Stats */}
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5">
              {ABOUT.stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center rounded-md border-2 border-grid-cyan/40 bg-gradient-to-b from-panel-blue to-panel-blue-2 px-4 py-6 text-center shadow-[0_6px_0_#050a1f]"
                >
                  <span className="font-pixel text-3xl text-white md:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-3 font-pixel text-[8px] uppercase leading-relaxed tracking-widest text-grid-cyan md:text-[9px]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: pixel earth + rocket smoke + pills */}
          <div
            aria-hidden="true"
            className="relative hidden min-h-[440px] xl:block"
          >
            {/* Pill cluster */}
            <div className="absolute right-2 top-2 grid grid-cols-2 gap-3">
              {(["#ea4335", "#34a853", "#4285f4", "#fbbc04"] as const).map(
                (c, i) => (
                  <div
                    key={i}
                    className="animate-float h-7 w-16 rounded-full border-2 border-navy-900"
                    style={{
                      background: `linear-gradient(180deg, ${c}, ${c}cc)`,
                      animationDelay: `${i * 0.3}s`,
                      boxShadow: "0 4px 0 #050a1f",
                    }}
                  />
                )
              )}
            </div>

            {/* Rocket smoke trail */}
            <div className="absolute bottom-28 right-24 flex flex-col items-center gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="block rounded-full bg-white/80"
                  style={{ width: 10 + i * 6, height: 10 + i * 5 }}
                />
              ))}
            </div>

            {/* Pixel earth */}
            <div className="absolute bottom-0 right-0 h-48 w-48 overflow-hidden rounded-full bg-[radial-gradient(circle_at_35%_30%,#7fd4ff,#2f7bff_60%,#0c1c55)]">
              <div className="absolute left-6 top-10 h-10 w-16 rounded-md bg-google-green-500/80" />
              <div className="absolute bottom-8 right-8 h-12 w-14 rounded-md bg-google-green-500/70" />
              <div className="absolute bottom-16 left-10 h-6 w-10 rounded bg-google-green-500/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
