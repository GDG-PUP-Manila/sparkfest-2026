"use client";

import React, { useState } from "react";
import { FAQS } from "./content";
import { PixelCloud } from "./decor";
import Image from "next/image";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative min-h-screen sm:h-282.5 md:h-366.75"
      style={{
        background: "linear-gradient(180deg, #2a3c71 0%, rgba(0, 166, 62, 0.4) 50%, #21568b 100%)",
      }}
    >
      {/* Background Image Overlay from FAQ assets — placed at the top of DOM to sit behind everything */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/assets/faq/background.png"
          alt="FAQ background texture"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Vertical green side rails — visible ONLY on SM devices and up (>= sm) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden sm:block"
        style={{
          width: "56px",
          backgroundImage: "linear-gradient(to bottom, #05DF72 24px, transparent 24px)",
          backgroundSize: "100% 52px",
          backgroundRepeat: "repeat-y",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden sm:block"
        style={{
          width: "56px",
          backgroundImage: "linear-gradient(to bottom, #05DF72 24px, transparent 24px)",
          backgroundSize: "100% 52px",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* Horizontal green rails — visible ONLY on XS devices (< sm) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 block sm:hidden pointer-events-none"
        style={{
          height: "42.81px",
          backgroundImage: "linear-gradient(to right, #05DF72 18.335px, transparent 18.335px)",
          backgroundSize: "39.745px 100%",
          backgroundRepeat: "repeat-x",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 block sm:hidden pointer-events-none"
        style={{
          height: "42.81px",
          backgroundImage: "linear-gradient(to right, #05DF72 18.335px, transparent 18.335px)",
          backgroundSize: "39.745px 100%",
          backgroundRepeat: "repeat-x",
        }}
      />


      {/* Retro pixel clouds */}
      <PixelCloud className="pointer-events-none absolute left-[5%] top-[8%] w-48 h-20 opacity-20 text-white/30 hidden lg:block" />
      <PixelCloud className="pointer-events-none absolute right-[10%] top-[4%] w-60 h-24 opacity-15 text-white/30 hidden lg:block" />
      <PixelCloud className="pointer-events-none absolute left-[15%] bottom-[5%] w-72 h-28 opacity-15 text-white/30 hidden lg:block" />
      <PixelCloud className="pointer-events-none absolute right-[8%] bottom-[8%] w-80 h-32 opacity-20 text-white/30 hidden lg:block" />

      <div className="absolute inset-0 flex flex-col justify-center mx-auto w-full h-screen max-w-[1200px] px-4 sm:px-[84px] z-10">
        {/* Title */}
        <div className="flex items-center justify-center gap-1 md:gap-6 lg:gap-10 select-none mb-10 md:mb-16">
          {/* Left Question Mark */}
          <div
            className="hidden md:flex items-center justify-center h-[120px] w-[100px] xl:h-[200px] xl:w-[142px] shrink-0 rotate-[-18.9deg] font-pixelify font-medium text-[80px] xl:text-[150px] text-google-yellow-500 animate-float"
            style={{ textShadow: "0 4px 0 #432004" }}
          >
            ?
          </div>

          <h2 className="text-center font-bold text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl lg:whitespace-nowrap leading-tight max-w-[280px] sm:max-w-none">
            Questions? <span className="text-[#fafafa]">We&apos;ve got you.</span>
          </h2>

          {/* Right Question Mark */}
          <div
            className="hidden md:flex items-center justify-center h-[150px] w-[120px] xl:h-[262px] xl:w-[173px] shrink-0 rotate-[13.88deg] font-pixelify font-medium text-[100px] xl:text-[200px] text-google-yellow-500 animate-float"
            style={{ textShadow: "0 4px 0 #432004", animationDelay: "1s" }}
          >
            ?
          </div>
        </div>

        {/* FAQ Container Box */}
        <div className="relative bg-[#202124] border-t-[30px] md:border-t-[50px] border-x-[6px] border-b-[6px] md:border-x-[10px] md:border-b-[10px] border-solid border-google-blue-500 px-3 py-5 md:px-[40px] md:py-[20px] w-full">
          {/* ghosts peeking on top edge */}
          <div className="hidden sm:flex sm:absolute -top-9 md:-top-[60px] xl:-top-[90px] desktop:-top-[130px] left-4 md:left-[28px] items-end gap-1 md:gap-2 select-none pointer-events-none z-10">
            {/* Blue Ghost */}
            <div className="w-12 h-12 md:w-20 md:h-20 xl:w-28 xl:h-28 desktop:w-[160px] desktop:h-[160px] -rotate-[5.31deg] animate-float shrink-0">
              <Image src="/assets/faq/blueghost.svg" alt="Blue Ghost" width={160} height={160} className="w-full h-full object-contain pixelated" unoptimized />
            </div>
            {/* Green Ghost */}
            <div
              className="w-10 h-10 md:w-16 md:h-16 xl:w-22 xl:h-22 desktop:w-[126px] desktop:h-[126px] rotate-[5.06deg] animate-float shrink-0"
              style={{ animationDelay: "0.5s" }}
            >
              <Image src="/assets/faq/greenghost.svg" alt="Green Ghost" width={126} height={126} className="w-full h-full object-contain pixelated" unoptimized />
            </div>
          </div>

          <ul className="flex flex-col gap-[10px] w-full">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={faq.q}
                  className="w-full rounded-[5px] transition-all duration-300 overflow-hidden"
                  style={
                    !isOpen
                      ? {
                        backgroundImage:
                          "linear-gradient(193.682deg, rgba(255, 255, 255, 0) 22.283%, rgba(43, 127, 255, 0) 26.189%, rgba(0, 201, 80, 0.125) 77.633%, rgba(240, 177, 0, 0.125) 86.835%, rgba(251, 44, 54, 0.125) 99.104%)",
                      }
                      : {
                        backgroundColor: "#202124",
                      }
                  }
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`group w-full flex items-center gap-3 md:gap-5 px-4 py-4 md:px-8 md:py-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-google-blue-500 ${isOpen ? "border-b-[3px] border-solid border-google-blue-500" : ""
                      }`}
                  >
                    <div className="bg-google-blue-500 text-white rounded-[5px] flex items-center justify-center font-pixelify font-medium shrink-0 w-10 h-8 md:w-16 md:h-12 xl:w-20 xl:h-16 text-lg md:text-2xl xl:text-3xl transition-colors duration-300 group-hover:bg-google-green-500">
                      {(i + 1).toString().padStart(2, "0")}
                    </div>
                    <span className="flex-1 text-white font-pixelify font-medium text-sm md:text-lg xl:text-2xl leading-snug">
                      {faq.q}
                    </span>
                    <svg
                      viewBox="0 0 22 22"
                      className={`w-4 h-4 md:w-5 md:h-5 fill-google-blue-500 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""
                        }`}
                      aria-hidden="true"
                    >
                      <path d="M4 7h14l-7 8z" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 py-4 md:px-8 md:py-6 pl-14 md:pl-28 xl:pl-32 pr-4 md:pr-8">
                        <p className="font-sans text-white text-xs md:text-sm xl:text-lg leading-relaxed md:leading-loose">
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
    </section>
  );
}


