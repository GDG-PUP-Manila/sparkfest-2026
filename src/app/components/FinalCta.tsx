import React from "react";
import { FINAL_CTA, REGISTER_URL } from "./content";
import { Ghost } from "./decor";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 md:py-24">
      <div
        aria-hidden="true"
        className="arcade-grid pointer-events-none absolute inset-0 opacity-15"
      />
      <div className="relative mx-auto max-w-[900px] px-4 md:px-8">
        <div className="neon-frame bg-gradient-to-b from-navy-800 to-navy-900 px-6 py-12 text-center md:px-12 md:py-16">
          <div className="flex items-center justify-center gap-4">
            <Ghost color="#57caff" className="h-8 w-8 md:h-10 md:w-10" />
            <Ghost color="#34a853" className="h-8 w-8 md:h-10 md:w-10" />
            <Ghost color="#ea4335" className="h-8 w-8 md:h-10 md:w-10" />
          </div>

          <p className="mt-6 font-pixel text-base leading-relaxed text-google-yellow-500 md:text-2xl">
            {FINAL_CTA.quote}
          </p>

          <div className="mt-6 space-y-2 text-sm text-white/80 md:text-base">
            {FINAL_CTA.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-2 border-grid-cyan bg-google-blue-500 px-8 py-4 font-pixel text-[11px] text-white shadow-[0_0_18px_rgba(66,133,244,0.6)] transition-transform hover:-translate-y-0.5 md:text-xs"
          >
            {FINAL_CTA.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
