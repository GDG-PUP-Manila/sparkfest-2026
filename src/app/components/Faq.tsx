"use client";

import React, { useState } from "react";
import { FAQS } from "./content";
import { Ghost, QMark, PixelCloud } from "./decor";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#0e3a2a_0%,#103a55_50%,#0a1330_100%)] py-16 md:py-24"
    >
      {/* green dot-matrix side rails */}
      <SideRail className="left-0" />
      <SideRail className="right-0" />

      <PixelCloud className="pointer-events-none absolute left-[12%] top-10 h-5 w-16 opacity-50" />
      <PixelCloud className="pointer-events-none absolute right-[16%] top-14 h-5 w-16 opacity-40" />

      <div className="relative mx-auto max-w-[900px] px-8 md:px-12">
        <div className="flex items-center justify-center gap-4">
          <QMark className="hidden h-8 w-6 rotate-[-12deg] sm:block" />
          <h2 className="text-center text-2xl font-extrabold text-white md:text-4xl">
            Questions? We&apos;ve got you.
          </h2>
          <QMark className="hidden h-8 w-6 rotate-[12deg] sm:block" />
        </div>

        {/* Blue panel */}
        <div className="relative mt-12 rounded-md border-2 border-google-blue-500 bg-navy-900/85 p-4 shadow-[0_0_24px_rgba(66,133,244,0.4)] md:p-6">
          {/* ghosts peeking on top edge */}
          <div className="absolute -top-6 left-5 flex gap-2">
            <Ghost color="#57caff" className="h-8 w-8" />
            <Ghost color="#34a853" className="h-8 w-8" />
          </div>

          <ul className="mt-4 space-y-2">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`flex w-full items-center gap-4 px-2 py-4 text-left md:px-3 ${
                      isOpen ? "border-b border-google-blue-500/60" : ""
                    }`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-google-blue-500 font-pixel text-[10px] text-white">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-pixel text-[11px] leading-relaxed text-white md:text-[14px]">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`text-google-blue-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                      ▾
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-2 pb-5 pl-[52px] pt-3 text-sm leading-relaxed text-white/75 md:px-3 md:pl-[60px]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Vertical green dot-matrix rail (Pac-Man maze edge).
function SideRail({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 hidden w-8 flex-col items-center justify-between py-4 md:flex ${className}`}
    >
      {Array.from({ length: 26 }).map((_, i) => (
        <span key={i} className="h-3 w-3 bg-google-green-500" />
      ))}
    </div>
  );
}
