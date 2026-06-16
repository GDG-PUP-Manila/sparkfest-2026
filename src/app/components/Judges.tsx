import React from "react";
import { JUDGES, COLOR_HEX } from "./content";

export default function Judges() {
  return (
    <section
      id="judges"
      className="bg-navy-900 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1000px] px-4 md:px-8">
        {/* Neon multi-color arcade frame */}
        <div
          className="rounded-xl p-[3px] shadow-[0_0_28px_rgba(87,202,255,0.45)]"
          style={{
            background:
              "linear-gradient(90deg,#ea4335,#fbbc04,#34a853,#4285f4)",
          }}
        >
          <div className="rounded-[10px] border-2 border-white/80 p-1">
            <div className="dot-matrix relative overflow-hidden rounded-lg bg-[linear-gradient(180deg,#0a1330_0%,#1d4fb0_60%,#57caff_120%)] px-5 py-10 md:px-10">
              {/* grid floor */}
              <div
                aria-hidden="true"
                className="arcade-grid pointer-events-none absolute inset-x-0 bottom-0 h-2/3 opacity-30"
                style={{
                  maskImage: "linear-gradient(to bottom, transparent, black)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent, black)",
                }}
              />
              {/* lightning accents */}
              <span aria-hidden="true" className="absolute left-6 top-1/2 font-pixel text-3xl text-grid-cyan opacity-70">
                ⚡
              </span>
              <span aria-hidden="true" className="absolute right-6 bottom-10 font-pixel text-3xl text-grid-cyan opacity-70">
                ⚡
              </span>

              <h2 className="relative text-center text-2xl font-extrabold text-white md:text-4xl">
                Judges
              </h2>

              <div className="relative mt-8 grid grid-cols-2 gap-4 md:mt-10 md:gap-6">
                {JUDGES.map((judge, i) => (
                  <article
                    key={i}
                    className="relative overflow-hidden border border-white/20 shadow-[0_0_16px_rgba(0,0,0,0.4)]"
                    style={{
                      background: `linear-gradient(160deg, ${COLOR_HEX[judge.color]}, ${COLOR_HEX[judge.color]}77)`,
                    }}
                  >
                    {/* halftone overlay */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-25"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(0,0,0,0.5) 1.5px, transparent 1.6px)",
                        backgroundSize: "8px 8px",
                      }}
                    />
                    <div className="relative flex aspect-[4/5] items-center justify-center">
                      <span
                        className="font-pixel text-5xl md:text-6xl"
                        style={{ color: "rgba(0,0,0,0.35)" }}
                        aria-hidden="true"
                      >
                        ?
                      </span>
                    </div>
                    <div className="relative bg-navy-900/60 px-3 py-2 text-center">
                      <p className="text-xs font-bold text-white md:text-sm">
                        {judge.name}
                      </p>
                      <p className="mt-0.5 font-pixel text-[7px] uppercase tracking-wide text-white/80">
                        {judge.role}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* twin progress bars */}
        <div className="mt-5 grid grid-cols-2 gap-6" aria-hidden="true">
          {["L", "R"].map((side) => (
            <div
              key={side}
              className="relative h-3 rounded-sm bg-gradient-to-r from-google-blue-500 via-google-green-500 to-google-green-500"
            >
              <span className="absolute inset-y-0 left-1/2 flex items-center font-pixel text-[7px] text-navy-900">
                {side}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
