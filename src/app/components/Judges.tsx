"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Judges() {
  const cards = ["red", "green", "yellow", "blue"];
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleReveal = (color: string) => {
    setRevealed((prev) => ({ ...prev, [color]: !prev[color] }));
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
      { threshold: 0.15 }
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
      className={`relative bg-navy-900 py-16 md:py-24 overflow-hidden transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Section Background SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <Image
          src="/assets/judge/background.svg"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
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
          <div className="relative z-10 flex flex-col items-center justify-start pt-16 pb-12 md:pt-[10%] md:pb-[10%] px-4 md:px-8 h-full">
            <h2 className="font-bold font-sans text-white text-[34px] md:text-[40px] mb-8 md:mb-[4%] text-center leading-[1.3] tracking-normal">
              Judges
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-[2%] w-full max-w-[200px] md:max-w-[85%]">
              {cards.map((color) => {
                const isRevealed = revealed[color];
                return (
                  <div
                    key={color}
                    onClick={() => toggleReveal(color)}
                    className={`group relative w-full aspect-[337/421] cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-2 md:hover:-translate-y-4 ${!isRevealed ? 'animate-shimmer' : ''}`}
                  >
                    <Image
                      src={`/assets/judge/mystery-judge-${color}.svg`}
                      alt={`Mystery Judge ${color}`}
                      fill
                      className={`object-contain transition-opacity duration-500 ease-out ${isRevealed ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
                      unoptimized
                    />
                    <Image
                      src={`/assets/judge/mystery-judge-${color}-reveal.svg`}
                      alt={`Mystery Judge ${color} Reveal`}
                      fill
                      className={`absolute inset-0 object-contain transition-opacity duration-500 ease-out ${isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                      unoptimized
                    />
                  </div>
                );
              })}
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