import React from "react";
import { ROADMAP, COLOR_HEX } from "./content";
import { Rocket, Ufo, Tetromino, PixelPlus } from "./decor";

export default function RoadToDemo() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#0a1330,#112151)] py-16 md:py-24">
      <div
        aria-hidden="true"
        className="arcade-grid pointer-events-none absolute inset-0 opacity-15"
      />

      {/* floating props */}
      <Tetromino color="#4285f4" className="pointer-events-none absolute left-[6%] top-28 h-10 w-10 opacity-80 md:h-12 md:w-12" />
      <Tetromino color="#fbbc04" className="pointer-events-none absolute left-[10%] top-[42%] h-10 w-10 opacity-70" />
      <Rocket className="animate-float pointer-events-none absolute right-[10%] top-24 h-16 w-8 md:h-20 md:w-10" />
      <Ufo className="animate-float pointer-events-none absolute left-[16%] top-[30%] h-7 w-14 opacity-90" />
      <PixelPlus className="animate-blink pointer-events-none absolute right-[20%] top-[55%] h-3 w-3 opacity-70" />

      <div className="relative mx-auto max-w-[1000px] px-4 md:px-8">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          The Road to Demo Day
        </h2>

        {/* Platformer-style staggered timeline */}
        <ol className="relative mt-12 space-y-8 md:mt-16 md:space-y-10">
          {ROADMAP.map((item, i) => {
            const alignRight = i % 2 === 1;
            const c = COLOR_HEX[item.color];
            return (
              <li
                key={item.title}
                className={`flex ${alignRight ? "md:justify-end" : "md:justify-start"}`}
              >
                {/* 3D extruded platform block */}
                <div
                  className="relative w-full md:w-[56%]"
                  style={{ filter: "drop-shadow(0 8px 0 rgba(5,10,31,0.6))" }}
                >
                  {/* top face */}
                  <div
                    className="relative z-10 border-2 border-navy-900 p-5"
                    style={{
                      background: `linear-gradient(180deg, ${c}, ${c}dd)`,
                    }}
                  >
                    <span className="font-pixel text-[8px] uppercase tracking-widest text-white/85 md:text-[9px]">
                      {item.date}
                    </span>
                    <h3 className="mt-2 font-pixel text-[12px] leading-snug text-white md:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/90 md:text-sm">
                      {item.desc}
                    </p>
                  </div>
                  {/* extruded bottom edge */}
                  <div
                    className="h-3 border-x-2 border-b-2 border-navy-900"
                    style={{ background: `${c}77` }}
                  />
                </div>
              </li>
            );
          })}
        </ol>

        {/* Ladder + mascot near the end */}
        <div aria-hidden="true" className="relative mt-2 hidden h-24 md:block">
          <div className="absolute left-[14%] top-0 h-24 w-8">
            <div className="absolute inset-y-0 left-1 w-1.5 bg-google-red-500" />
            <div className="absolute inset-y-0 right-1 w-1.5 bg-google-red-500" />
            {[0, 1, 2, 3].map((r) => (
              <div
                key={r}
                className="absolute left-0 h-1.5 w-full bg-google-red-500"
                style={{ top: `${10 + r * 22}%` }}
              />
            ))}
          </div>
          <span className="absolute right-[28%] top-6 text-3xl">🐱</span>
        </div>

        {/* Ground */}
        <div className="mt-6 h-3 w-full bg-google-green-500" aria-hidden="true" />
      </div>
    </section>
  );
}
