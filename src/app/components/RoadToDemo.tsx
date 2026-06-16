import React from "react";
import { ROADMAP, COLOR_BG, COLOR_HEX } from "./content";

export default function RoadToDemo() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 md:py-24">
      <div
        aria-hidden="true"
        className="arcade-grid pointer-events-none absolute inset-0 opacity-20"
      />
      <div className="relative mx-auto max-w-[1100px] px-4 md:px-8">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          The Road to Demo Day
        </h2>

        {/* Platformer-style staggered timeline */}
        <ol className="relative mt-12 space-y-6 md:mt-16 md:space-y-2">
          {ROADMAP.map((item, i) => {
            const alignRight = i % 2 === 1;
            return (
              <li
                key={item.title}
                className={`flex ${alignRight ? "md:justify-end" : "md:justify-start"}`}
              >
                <div
                  className="w-full border-2 border-navy-900 p-5 shadow-[0_6px_0_#050a1f] md:w-[52%]"
                  style={{
                    background: `linear-gradient(180deg, ${COLOR_HEX[item.color]}, ${COLOR_HEX[item.color]}cc)`,
                  }}
                >
                  <span className="font-pixel text-[8px] uppercase tracking-widest text-white/85 md:text-[9px]">
                    {item.date}
                  </span>
                  <h3 className="mt-2 font-pixel text-[12px] text-white md:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/90 md:text-sm">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Ground */}
        <div
          className={`mt-8 h-3 w-full ${COLOR_BG.green}`}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
