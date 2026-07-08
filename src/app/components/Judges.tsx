"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Judges() {
  const firstRoundJudges = [
    "kyne-domerei-laggui",
    "francis-chuaunsu",
    "randy-carlo-lorenzo",
  ];

  const finalRoundJudges = ["armielyn-obinguar", "niel-riego", "sharon-labado"];

  const renderJudgeCard = (judge: string, index: number) => {
    const colors = ["red", "green", "yellow", "blue"];
    const hexColors: Record<string, string> = {
      red: "#ea4335",
      green: "#34a853",
      yellow: "#fbbc04",
      blue: "#4285f4",
    };
    const color = colors[index % colors.length];
    const judgeName = judge
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    const isRevealed = revealed[judge];

    return (
      <div
        key={judge}
        onClick={() => toggleReveal(judge)}
        className={`group relative w-full aspect-[337/421] cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-2 md:hover:-translate-y-4 ${!isRevealed ? "animate-shimmer" : ""} hover:animate-none`}
      >
        {/* Layer 1: Background */}
        <Image
          src={`/assets/judge/${color}-bg.webp`}
          alt={`Background ${color}`}
          fill
          className={`absolute inset-0 object-contain transition-opacity duration-500 ease-out pointer-events-none ${isRevealed ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          unoptimized
        />
        {/* Layer 2: Portrait */}
        <Image
          src={`/assets/judge/${judge}.webp`}
          alt={`Judge ${judgeName}`}
          fill
          className={`absolute inset-0 object-contain transition-opacity duration-500 ease-out ${isRevealed ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          unoptimized
        />
        {/* Layer 3: Frame Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-out pointer-events-none ${isRevealed ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          style={{
            backgroundColor: hexColors[color],
            maskImage: "url(/assets/judge/border.webp)",
            maskSize: "100% 100%",
            maskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskImage: "url(/assets/judge/border.webp)",
            WebkitMaskSize: "100% 100%",
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
        {/* Layer 4: Mystery Default (Base state) */}
        <Image
          src={`/assets/judge/mystery-judge-${color}.svg`}
          alt={`Mystery Judge ${color}`}
          fill
          className={`absolute inset-0 object-contain transition-opacity duration-500 ease-out ${isRevealed ? "opacity-0 pointer-events-none" : "opacity-100 group-hover:opacity-0"}`}
          unoptimized
        />
      </div>
    );
  };
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleReveal = (judge: string) => {
    setRevealed((prev) => ({ ...prev, [judge]: !prev[judge] }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="judges"
      ref={sectionRef}
      className={`relative bg-navy-900 py-16 md:py-24 overflow-hidden transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Centered background container restricted to max width of 1920px to prevent sticking/enlarging when zoomed out */}
      <div className="absolute inset-0 mx-auto max-w-480 pointer-events-none z-0">
        {/* Section Background SVG */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/judge/background.svg"
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-[88.28%] max-w-[1695px]">
        {/* Container for background logic */}
        <div className="relative w-full aspect-auto md:aspect-[1672/891] overflow-hidden bg-[#0A162A] rounded-none md:rounded-[22px]">
          {/* Mobile background */}
          <div className="absolute inset-0 pointer-events-none md:hidden">
            <Image
              src="/assets/judge/judge-background-mobile.svg"
              alt=""
              fill
              className="object-fill"
              unoptimized
            />
          </div>
          {/* Desktop background */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <Image
              src="/assets/judge/judge-background.svg"
              alt=""
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>

          {/* Content Wrapper Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-start pt-16 pb-12 md:pt-[3%] lg:pt-[5%] md:pb-[3%] lg:pb-[5%] px-4 md:px-8 h-full">
            <h2 className="font-bold font-sans text-white text-[34px] md:text-[28px] lg:text-[40px] mb-8 md:mb-[1%] lg:mb-[2%] text-center leading-[1.3] tracking-normal">
              Judges
            </h2>

            <div className="flex flex-col gap-10 md:gap-[2%] lg:gap-[4%] w-full items-center">
              {/* First Round Judges */}
              <div className="flex flex-col items-center w-full">
                <h3 className="font-bold font-pixelify text-[#F7B035] text-[20px] md:text-[18px] lg:text-[24px] mb-6 md:mb-2 lg:mb-4 text-center leading-[1.3] tracking-normal">
                  First Round Judges
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2%] lg:gap-[3%] w-full max-w-[140px] md:max-w-[40%] lg:max-w-[35%]">
                  {firstRoundJudges.map((judge, index) =>
                    renderJudgeCard(judge, index),
                  )}
                </div>
              </div>

              {/* Final Round Judges */}
              <div className="flex flex-col items-center w-full">
                <h3 className="font-bold font-pixelify text-[#F7B035] text-[20px] md:text-[18px] lg:text-[24px] mb-6 md:mb-2 lg:mb-4 text-center leading-[1.3] tracking-normal">
                  Final Round Judges
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[2%] lg:gap-[3%] w-full max-w-[140px] md:max-w-[40%] lg:max-w-[35%]">
                  {finalRoundJudges.map((judge, index) =>
                    renderJudgeCard(judge, index + 3),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* L/R buttons */}
        <div className="flex justify-between items-start w-full mt-[10px]">
          <div className="relative w-[120px] md:w-[300px] lg:w-[400px] h-[30px] md:h-[30px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-110 active:scale-[0.98] active:translate-y-0 rounded-b-[20px] md:rounded-b-[29px] rounded-t-none border-[2px] border-black overflow-hidden flex items-center justify-center shadow-md">
            {/* Background SVG */}
            <Image
              src="/assets/judge/button-bg.svg"
              alt=""
              fill
              className="object-cover object-center pointer-events-none"
              unoptimized
            />
            {/* L Letter */}
            <span className="relative z-10 text-white font-bold font-pixelify text-[18px] md:text-[20px] lg:text-[25px] leading-none [-webkit-text-stroke:1px_black] mt-1">
              L
            </span>
          </div>

          <div className="relative w-[120px] md:w-[300px] lg:w-[400px] h-[30px] md:h-[30px] cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:brightness-110 active:scale-[0.98] active:translate-y-0 rounded-b-[20px] md:rounded-b-[29px] rounded-t-none border-[2px] border-black overflow-hidden flex items-center justify-center shadow-md">
            {/* Background SVG */}
            <Image
              src="/assets/judge/button-bg.svg"
              alt=""
              fill
              className="object-cover object-center pointer-events-none"
              unoptimized
            />
            {/* R Letter */}
            <span className="relative z-10 text-white font-bold font-pixelify text-[18px] md:text-[20px] lg:text-[25px] leading-none [-webkit-text-stroke:1px_black] mt-1">
              R
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
