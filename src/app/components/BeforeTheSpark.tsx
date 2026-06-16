import React from "react";
import { PRE_EVENTS, COLOR_TEXT, COLOR_HEX } from "./content";

export default function BeforeTheSpark() {
  return (
    <section
      id="pre-events"
      className="bg-gradient-to-b from-navy-800 to-navy-900 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          Before the Spark
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          SparkFest 2026 doesn&apos;t begin on Day 1. Two pre-events. Two ways to
          level up before the hackathon even kicks off.
        </p>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {PRE_EVENTS.map((ev) => (
            <article
              key={ev.title}
              className="flex flex-col overflow-hidden border-2 border-navy-600 bg-navy-800 shadow-[4px_4px_0_#050a1f]"
            >
              {/* Poster placeholder */}
              <div
                className="flex aspect-[16/9] items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${COLOR_HEX[ev.color]}, ${COLOR_HEX[ev.color]}88)`,
                }}
              >
                <span className="font-pixel text-sm text-white drop-shadow-[2px_2px_0_#050a1f] md:text-base">
                  {ev.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3
                  className={`font-pixel text-[12px] leading-relaxed md:text-sm ${COLOR_TEXT[ev.color]}`}
                >
                  {ev.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                  {ev.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 self-start border-2 border-navy-900 bg-google-yellow-500 px-4 py-2 font-pixel text-[9px] text-navy-900">
                  Read the Full post →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
