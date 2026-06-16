import React from "react";
import { JUDGES, COLOR_HEX, COLOR_TEXT } from "./content";

export default function Judges() {
  return (
    <section
      id="judges"
      className="dot-matrix bg-gradient-to-b from-navy-800 to-navy-900 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 desktop:max-w-[1600px]">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          Meet the Judges
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          Industry leaders and technical experts who&apos;ll score the final
          pitches. Full lineup dropping soon.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:gap-6 xl:grid-cols-4">
          {JUDGES.map((judge, i) => (
            <article
              key={i}
              className="overflow-hidden border-2 border-navy-600 bg-navy-800 shadow-[4px_4px_0_#050a1f]"
            >
              <div
                className="flex aspect-square items-center justify-center"
                style={{
                  background: `linear-gradient(160deg, ${COLOR_HEX[judge.color]}33, ${COLOR_HEX[judge.color]}11)`,
                }}
              >
                <span className="font-pixel text-3xl text-white/40 md:text-4xl">
                  ?
                </span>
              </div>
              <div className="px-3 py-4">
                <h3 className="text-sm font-bold text-white">{judge.name}</h3>
                <p
                  className={`mt-1 font-pixel text-[8px] uppercase tracking-wide ${COLOR_TEXT[judge.color]}`}
                >
                  {judge.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
