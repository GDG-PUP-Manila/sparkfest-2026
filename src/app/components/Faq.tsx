"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Image from "next/image";
import { FAQS } from "./content";

// ── Green dot-matrix rail (vertical or horizontal) ──────────────────────────
function DotMatrixRail({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, #05DF72 2.5px, transparent 2.5px)",
        backgroundSize: "14px 14px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}

// ── Chevron icon ─────────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 22 22"
      className={`h-6 w-6 shrink-0 transition-transform duration-300 md:h-7 md:w-7 xl:h-8 xl:w-8 desktop:h-9 desktop:w-9 ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
      style={{ fill: "#2b7fff" }}
    >
      <path d="M4 7h14l-7 8z" />
    </svg>
  );
}

// ── FAQ Section ──────────────────────────────────────────────────────────────
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-x-hidden">
      {/*
        Grid container — background.png stays in-flow to set the section height.
        All sibling divs share col-start-1 row-start-1 and stack above the image.
      */}
      <div className="grid w-full">
        {/* Background image — in-flow, NOT absolutely positioned */}
        <Image
          src="/assets/faq/background.png"
          alt=""
          aria-hidden="true"
          width={3840}
          height={2694}
          className="pointer-events-none col-start-1 row-start-1 h-auto w-full select-none object-top"
          sizes="100vw"
        />

        {/* Vertical green dot-matrix rails — md+ */}
        <DotMatrixRail className="col-start-1 row-start-1 hidden h-full w-14 self-stretch justify-self-start md:block xl:w-20" />
        <DotMatrixRail className="col-start-1 row-start-1 hidden h-full w-14 self-stretch justify-self-end md:block xl:w-20" />

        {/* Horizontal green dot-matrix rails — mobile only, top and bottom */}
        <DotMatrixRail className="col-start-1 row-start-1 block h-10 w-full self-start md:hidden" />
        <DotMatrixRail className="col-start-1 row-start-1 block h-10 w-full self-end md:hidden" />

        {/* ── Content wrapper ─────────────────────────────────────────────── */}
        <div className="relative z-10 col-start-1 row-start-1 mx-auto flex w-full min-w-0 max-w-[1200px] flex-col justify-center self-center overflow-visible px-[35px] py-4 sm:px-10 sm:py-5 md:px-16 md:py-6 xl:px-20 xl:py-8 desktop:px-24 desktop:py-10">

          {/* ── Section heading + flanking question-mark decorations ───────── */}
          <div className="mb-3 flex w-full justify-center md:mb-4 xl:mb-5">
            <div className="inline-flex max-w-full items-center gap-0.5 md:gap-1.5 xl:gap-2">
              {/* Left "?" — Pixelify (hidden on mobile) */}
              <span
                className="hidden shrink-0 leading-none font-pixelify font-medium text-google-yellow-500 animate-float md:inline-block md:-rotate-[18.9deg] md:text-[56px] xl:text-[84px] desktop:text-[108px]"
                style={{ textShadow: "0 4px 0 #432004" }}
                aria-hidden="true"
              >
                ?
              </span>

              <h2 className="shrink-0 text-center font-sans text-[28px] font-bold leading-[1.2] text-white sm:text-[32px] md:text-5xl md:leading-[1.15] xl:text-6xl xl:whitespace-nowrap">
                <span className="block md:inline">Questions? </span>
                <span className="block text-[#eff6ff] md:inline">We&apos;ve got you.</span>
              </h2>

              {/* Right "?" — Pixelify (hidden on mobile) */}
              <span
                className="hidden shrink-0 leading-none font-pixelify font-medium text-google-yellow-500 animate-float md:inline-block md:rotate-[13.88deg] md:text-[64px] xl:text-[96px] desktop:text-[120px]"
                style={{ textShadow: "0 4px 0 #432004", animationDelay: "1s" }}
                aria-hidden="true"
              >
                ?
              </span>
            </div>
          </div>

          {/* Panel + ghosts — ghosts sit outside panel so bg/border don't clip them */}
          <div className="relative w-full min-w-0 overflow-visible">
            {/* Ghost pair perched on the top border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-2 z-30 flex translate-y-[38%] select-none items-end gap-2 sm:left-3 md:left-6 xl:left-8 xl:gap-4"
            >
              <div className="size-20 shrink-0 -rotate-[5deg] animate-float sm:size-28 md:size-44 xl:size-80 desktop:size-96">
                <img
                  src="/assets/faq/blueghost.svg"
                  alt=""
                  className="pixelated block size-full object-contain"
                />
              </div>
              <div
                className="size-[72px] shrink-0 rotate-[5deg] animate-float sm:size-24 md:size-40 xl:size-72 desktop:size-80"
                style={{ animationDelay: "0.5s" }}
              >
                <img
                  src="/assets/faq/greenghost.svg"
                  alt=""
                  className="pixelated block size-full object-contain"
                />
              </div>
            </div>

          {/* ── Arcade FAQ panel ────────────────────────────────────────────── */}
          {/*
            Border system matches SnapAndFrame:
              Top bar   (#2b7fff) — thick "header" strip
              Left/Right (#2b7fff) — light sides
              Bottom     (#1447e6) — shadow side
              Box-shadow (#1447e6) — pixel-depth below
              Inner top  (#eff6ff) — 2 px highlight stripe inside the header bar
          */}
          <div
            className="relative w-full min-w-0 overflow-visible border-solid border-t-[24px] border-x-[5px] border-b-[5px] bg-[#0d1b2e] sm:border-t-[30px] sm:border-x-[6px] sm:border-b-[6px] md:border-t-[50px] md:border-x-[10px] md:border-b-[10px]"
            style={{
              borderColor: "#2b7fff",
              borderBottomColor: "#1447e6",
              boxShadow: "0 8px 0 0 #1447e6",
            }}
          >
            {/* #eff6ff highlight stripe along the inner top edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[3px] select-none"
              style={{ background: "rgba(239,246,255,0.35)" }}
            />

            {/* ── Accordion list ────────────────────────────────────────────── */}
            <ul className="flex w-full flex-col gap-[6px] px-3 py-4 sm:px-5 sm:py-5 md:gap-[10px] md:px-10 md:py-6 xl:px-12 xl:py-8">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <li
                    key={faq.q}
                    className="w-full overflow-hidden transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "rgba(43,127,255,0.09)"
                        : "linear-gradient(193deg, rgba(0,201,80,0.08) 0%, rgba(43,127,255,0.04) 50%, rgba(240,177,0,0.08) 100%)",
                      borderLeft: `3px solid ${isOpen ? "#2b7fff" : "rgba(43,127,255,0.35)"}`,
                      borderRight: `3px solid ${isOpen ? "#1447e6" : "rgba(20,71,230,0.25)"}`,
                      borderBottom: `2px solid ${isOpen ? "#1447e6" : "rgba(20,71,230,0.2)"}`,
                    }}
                  >
                    {/* ── Accordion trigger ───────────────────────────────── */}
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`group flex w-full cursor-pointer items-center gap-4 px-3 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2b7fff] sm:gap-5 sm:px-4 sm:py-6 md:gap-6 md:px-6 md:py-6 xl:gap-7 xl:px-8 xl:py-7 desktop:py-8 ${
                        isOpen ? "border-b-[2px] border-solid border-[#2b7fff]" : ""
                      }`}
                    >
                      {/* Numbered badge */}
                      <div
                        className="flex h-12 w-[72px] shrink-0 items-center justify-center font-pixelify text-2xl font-bold text-white transition-all duration-300 group-hover:brightness-110 sm:h-14 sm:w-20 sm:text-3xl md:h-16 md:w-24 md:text-4xl xl:h-20 xl:w-28 xl:text-5xl desktop:h-24 desktop:w-32 desktop:text-6xl"
                        style={{
                          background: isOpen ? "#2b7fff" : "#1447e6",
                          boxShadow: "0 2px 0 0 rgba(10,20,60,0.6)",
                        }}
                      >
                        {(i + 1).toString().padStart(2, "0")}
                      </div>

                      {/* Question text */}
                      <span className="min-w-0 flex-1 font-pixelify text-[20px] font-medium leading-[1.35] text-white sm:text-[22px] md:text-2xl md:leading-[1.3] xl:text-[30px] xl:leading-[1.25] desktop:text-[50px] desktop:leading-[1.2]">
                        {faq.q}
                      </span>

                      <Chevron open={isOpen} />
                    </button>

                    {/* ── Answer panel (animated via CSS grid rows) ────────── */}
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/*
                          Indent the answer to align with question text.
                          pl offsets: badge width (w-10/w-14/w-16) + gap (gap-3/4/5) + px padding
                        */}
                        <div className="px-3 pb-6 pt-5 pl-[88px] pr-3 sm:pl-[100px] md:px-6 md:pb-7 md:pt-6 md:pl-[132px] xl:pl-[156px] desktop:pl-[180px]">
                          <p className="font-sans text-[17px] leading-[1.55] text-white/90 md:text-lg md:leading-[1.6] xl:text-xl xl:leading-loose desktop:text-2xl">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
