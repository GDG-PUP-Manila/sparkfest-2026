import React from "react";
import { WHAT_GOES_DOWN, COLOR_TEXT, COLOR_BORDER } from "./content";

const ICONS: Record<string, string> = {
  "Hackathon Proper": "💻",
  "Mentorship Sessions": "🎓",
  "Pitching Day": "🎤",
  "Awarding Ceremony": "🏆",
  Networking: "🤝",
  "Community Impact": "🌱",
};

export default function WhatGoesDown() {
  return (
    <section
      id="program"
      className="dot-matrix relative bg-gradient-to-b from-navy-800 via-navy-700 to-google-green-500/20 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 desktop:max-w-[1600px]">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          What Goes Down at Sparkfest?
        </h2>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {WHAT_GOES_DOWN.map((card) => (
            <article
              key={card.title}
              className={`group flex flex-col border-l-4 ${COLOR_BORDER[card.color]} bg-navy-800/80 p-5 shadow-[4px_4px_0_#050a1f] transition-transform hover:-translate-y-1 md:p-6`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl" aria-hidden="true">
                  {ICONS[card.title]}
                </span>
                <h3
                  className={`font-pixel text-[12px] leading-snug md:text-[13px] ${COLOR_TEXT[card.color]}`}
                >
                  {card.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
