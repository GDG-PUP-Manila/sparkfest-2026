"use client";

import React, { useState } from "react";
import { FAQS } from "./content";
import { Ghost, QMark } from "./decor";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="dot-matrix relative overflow-hidden bg-gradient-to-b from-navy-800 via-navy-700 to-google-green-500/20 py-16 md:py-24"
    >
      {/* Side rails */}
      <div
        aria-hidden="true"
        className="pixel-skyline pointer-events-none absolute inset-y-0 left-0 w-6 opacity-50 md:w-10"
        style={{ transform: "rotate(90deg)" }}
      />

      <div className="relative mx-auto max-w-[920px] px-4 md:px-8">
        <div className="flex items-center justify-center gap-3">
          <Ghost color="#57caff" className="h-8 w-8" />
          <Ghost color="#34a853" className="h-8 w-8" />
          <h2 className="text-center text-2xl font-extrabold text-white md:text-4xl">
            Questions? We&apos;ve got you.
          </h2>
          <QMark className="hidden h-7 w-5 sm:block" />
        </div>

        <ul className="mt-10 space-y-3 md:mt-12">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li
                key={faq.q}
                className="border-2 border-grid-cyan/40 bg-navy-900/80"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left md:px-5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-google-blue-500 font-pixel text-[10px] text-white">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-pixel text-[11px] leading-relaxed text-white md:text-[13px]">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-grid-cyan transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                    <p className="px-4 pb-5 pl-[60px] text-sm leading-relaxed text-white/75 md:px-5 md:pl-[64px]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
