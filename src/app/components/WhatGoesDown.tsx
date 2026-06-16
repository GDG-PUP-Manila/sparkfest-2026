import React from "react";
import { WHAT_GOES_DOWN } from "./content";

const ICONS: Record<string, string> = {
  "Hackathon Proper": "💻",
  "Mentorship Sessions": "🖥️",
  "Pitching Day": "🎤",
  "Awarding Ceremony": "🏆",
  Networking: "🤝",
  "Community Impact": "🌱",
};

export default function WhatGoesDown() {
  return (
    <section
      id="program"
      className="dot-matrix relative bg-[linear-gradient(180deg,#050a1f_0%,#0e2257_38%,#1f5fa0_70%,#34a853_100%)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 desktop:max-w-[1600px]">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          What Goes Down at Sparkfest?
        </h2>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {WHAT_GOES_DOWN.map((card) => (
            <article
              key={card.title}
              className="relative flex items-stretch justify-between gap-4 overflow-hidden border-2 border-navy-900 bg-white p-5 shadow-[6px_6px_0_#050a1f] md:p-6"
            >
              <div className="relative z-10 flex-1 pr-16 md:pr-20">
                <h3 className="font-pixel text-[13px] leading-snug text-black-02 md:text-sm">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black-02/70">
                  {card.desc}
                </p>
              </div>
              <div
                className="pointer-events-none absolute -right-2 top-1/2 flex w-24 -translate-y-1/2 items-center justify-center md:w-28"
                aria-hidden="true"
              >
                <span className="pixelated text-5xl drop-shadow-[2px_2px_0_rgba(5,10,31,0.25)] md:text-6xl">
                  {ICONS[card.title]}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
