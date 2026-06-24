"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Image from "next/image";
import { FAQS } from "./content";

const FAQ_ITEM_GRADIENT =
  "linear-gradient(228.87deg, rgba(255,255,255,0) 22.28%, rgba(43,127,255,0) 26.19%, rgba(0,201,80,0.125) 77.63%, rgba(240,177,0,0.125) 86.84%, rgba(251,44,54,0.125) 99.1%)";

// ── Mobile green stripe rail (Figma 563:8039 — Group 1605, rotated -90°) ───
function MobileFaqRail() {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-[42.814px] w-full shrink-0 items-center justify-center overflow-hidden md:hidden"
    >
      <div className="-rotate-90 flex-none">
        <div className="relative h-[1052px] w-[42.814px]">
          <img
            src="/assets/faq/rail-stripe.svg"
            alt=""
            className="pixelated absolute inset-0 block size-full max-w-none select-none"
          />
        </div>
      </div>
    </div>
  );
}

// ── Chevron icon ─────────────────────────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 22 22"
      className={`size-[18px] shrink-0 transition-transform duration-300 md:size-[22px] xl:size-[22px] ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
      style={{ fill: "var(--faq-arcade-border)" }}
    >
      <path d="M4 7h14l-7 8z" />
    </svg>
  );
}

// ── FAQ Section ──────────────────────────────────────────────────────────────
export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-x-hidden md:bg-transparent"
    >
      {/* Mobile — full-section gradient + top/bottom rails (Figma 563:8039) */}
      <div className="faq-mobile-header-gradient flex flex-col md:hidden">
        <MobileFaqRail />

        <div className="flex flex-col items-center gap-[52px] px-6 pb-[52px] pt-0">
          {/* Heading + flanking ? marks (Figma 321:1564 / 321:1621 / 321:1619) */}
          <div className="relative mx-auto h-[96px] w-full max-w-[342px]">
            <span
              className="pointer-events-none absolute bottom-1 left-0 -rotate-[16.77deg] font-pixelify text-[46px] font-medium leading-none text-[#f0b100]"
              style={{ textShadow: "0 4px 0 #432004" }}
              aria-hidden="true"
            >
              ?
            </span>

            <span
              className="pointer-events-none absolute top-2 right-0 rotate-[11.41deg] font-pixelify text-[58px] font-medium leading-none text-[#f0b100]"
              style={{ textShadow: "0 4px 0 #432004" }}
              aria-hidden="true"
            >
              ?
            </span>

            <h2 className="absolute inset-x-0 top-1/2 z-10 mx-auto max-w-[248px] -translate-y-1/2 text-center font-sans text-[32px] font-bold leading-[1.3] text-[#fafafa]">
              Questions?
              <br />
              We&apos;ve got you.
            </h2>
          </div>

          {/* Accordion panel */}
          <div className="w-full max-w-[312px]">
            <div
              className="relative w-full border-solid border-[5px] border-t-[25px] bg-[var(--faq-arcade-panel)]"
              style={{ borderColor: "var(--faq-arcade-border)" }}
            >
              <ul className="flex w-full flex-col gap-[10px] p-[10px]">
                {FAQS.map((faq, i) => {
                  const isOpen = open === i;
                  return (
                    <li
                      key={faq.q}
                      className="w-full overflow-hidden rounded-[5px] transition-all duration-300"
                      style={{
                        background: isOpen ? undefined : FAQ_ITEM_GRADIENT,
                      }}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className={`group flex w-full cursor-pointer items-start gap-[30px] px-[10px] py-[20px] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--faq-arcade-border)] ${
                          isOpen
                            ? "border-b-2 border-solid border-[var(--faq-arcade-border)]"
                            : ""
                        }`}
                      >
                        <div
                          className="flex shrink-0 items-center justify-center rounded-[5px] px-[15px] py-[5px] font-pixelify text-[20px] font-medium leading-[1.4] text-white"
                          style={{ background: "var(--faq-arcade-border)" }}
                        >
                          {(i + 1).toString().padStart(2, "0")}
                        </div>

                        <span className="min-w-0 flex-1 font-pixelify text-[20px] font-medium leading-[1.4] text-white">
                          {faq.q}
                        </span>

                        <Chevron open={isOpen} />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-[30px] py-[20px]">
                            <p className="font-sans text-base leading-[1.5] text-white">
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

        <MobileFaqRail />
      </div>

      {/* Tablet / desktop — bg covers full content height (no black gap on open) */}
      <div className="relative hidden w-full md:block md:min-h-[1000px] xl:min-h-[1180px] desktop:min-h-[1300px]">
        {/* Centered background container restricted to max width of 1920px to prevent sticking/enlarging when zoomed out */}
        <div className="absolute inset-0 mx-auto max-w-480 pointer-events-none z-0">
          <Image
            src="/assets/faq/background.png"
            alt=""
            aria-hidden="true"
            fill
            className="pointer-events-none select-none object-cover object-top"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-[82%] min-w-0 max-w-[1200px] flex-col justify-center overflow-visible py-10 pb-16 xl:w-full xl:px-20 xl:py-12 xl:pb-24 desktop:px-24 desktop:py-14 desktop:pb-28">
          <div className="mb-6 pb-0 lg:pb-6  flex w-full items-center justify-center gap-1.5 xl:mb-8 xl:gap-2">
            <span
              className="shrink-0 -rotate-[18.9deg] font-pixelify text-[56px] font-medium leading-none text-google-yellow-500 animate-float xl:text-[84px] desktop:text-[108px]"
              style={{ textShadow: "0 4px 0 #432004" }}
              aria-hidden="true"
            >
              ?
            </span>

            <h2 className="shrink-0 text-center font-sans text-4xl font-bold leading-[1.2] text-white xl:text-5xl xl:whitespace-nowrap">
              Questions?{" "}
              <span className="text-[#fafafa]">We&apos;ve got you.</span>
            </h2>

            <span
              className="shrink-0 rotate-[13.88deg] font-pixelify text-[64px] font-medium leading-none text-google-yellow-500 animate-float xl:text-[96px] desktop:text-[120px]"
              style={{ textShadow: "0 4px 0 #432004", animationDelay: "1s" }}
              aria-hidden="true"
            >
              ?
            </span>
          </div>

          <div className="relative w-full min-w-0 overflow-visible">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-full left-8 z-30 hidden translate-y-[25%] select-none items-end gap-2.5 xl:flex xl:left-8"
            >
              <div className="size-40 shrink-0 -rotate-[5deg] animate-float desktop:size-44">
                <img
                  src="/assets/faq/blueghost.svg"
                  alt=""
                  className="pixelated block size-full object-contain"
                />
              </div>
              <div
                className="size-28 shrink-0 rotate-[5deg] animate-float desktop:size-32"
                style={{ animationDelay: "0.5s" }}
              >
                <img
                  src="/assets/faq/greenghost.svg"
                  alt=""
                  className="pixelated block size-full object-contain"
                />
              </div>
            </div>

            <div
              className="relative w-full min-w-0 overflow-visible border-solid border-t-[36px] border-x-[8px] border-b-[8px] bg-[var(--faq-arcade-panel)] xl:border-t-[50px] xl:border-x-[10px] xl:border-b-[10px]"
              style={{
                borderColor: "var(--faq-arcade-border)",
                borderBottomColor: "var(--faq-arcade-border-dark)",
                boxShadow: "0 8px 0 0 var(--faq-arcade-border-dark)",
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] select-none bg-[var(--faq-arcade-highlight)]"
              />

              <ul className="flex w-full flex-col gap-2 px-8 py-6 xl:gap-[10px] xl:px-12 xl:py-8">
                {FAQS.map((faq, i) => {
                  const isOpen = open === i;
                  return (
                    <li
                      key={faq.q}
                      className="w-full overflow-hidden transition-all duration-300"
                      style={{
                        background: isOpen
                          ? "rgba(43,127,255,0.09)"
                          : FAQ_ITEM_GRADIENT,
                        borderLeft: `3px solid ${isOpen ? "var(--faq-arcade-border)" : "rgba(43,127,255,0.35)"}`,
                        borderRight: `3px solid ${isOpen ? "var(--faq-arcade-border-dark)" : "rgba(20,71,230,0.25)"}`,
                        borderBottom: `2px solid ${isOpen ? "var(--faq-arcade-border-dark)" : "rgba(20,71,230,0.2)"}`,
                      }}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className={`group flex w-full cursor-pointer items-center gap-5 px-3 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--faq-arcade-border)] md:gap-6 md:px-[10px] md:py-5 xl:gap-[30px] xl:py-[20px] ${
                          isOpen
                            ? "border-b-[2px] border-solid border-[var(--faq-arcade-border)]"
                            : ""
                        }`}
                      >
                        <div
                          className="flex shrink-0 items-center justify-center rounded-[5px] px-3 py-1 font-pixelify text-xl font-medium leading-[1.2] text-white transition-all duration-300 group-hover:brightness-110 md:px-4 md:text-2xl xl:px-5 xl:py-[5px] xl:text-[40px]"
                          style={{
                            background: isOpen
                              ? "var(--faq-arcade-border)"
                              : "var(--faq-arcade-border-dark)",
                            boxShadow: "0 2px 0 0 rgba(10,20,60,0.6)",
                          }}
                        >
                          {(i + 1).toString().padStart(2, "0")}
                        </div>

                        <span className="min-w-0 flex-1 font-pixelify text-lg font-medium leading-[1.2] text-white md:text-xl xl:text-[32px] desktop:text-[40px]">
                          {faq.q}
                        </span>

                        <Chevron open={isOpen} />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 pb-5 pt-4 pl-[72px] md:px-[10px] md:pb-6 md:pt-5 md:pl-[96px] xl:px-[60px] xl:py-[40px]">
                            <p className="font-sans text-base leading-[1.5] text-white/90 md:text-lg xl:text-2xl xl:leading-[1.5]">
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
