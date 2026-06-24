"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PERSONAS } from "./content";

export default function WhoIsThisFor() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // For mobile carousel
  const [arrowStyle, setArrowStyle] = useState({
    opacity: 0,
    left: 0,
    top: 0,
    transform: "translate(-50%, -16px)",
  });

  const activeDesktopIndex = clickedIndex !== null ? clickedIndex : hoverIndex;

  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer for scroll fade-in
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

  // Typewriter effect
  useEffect(() => {
    const fullText = "First-timer with zero experience?";
    if (!isVisible) {
      const resetTimeout = setTimeout(() => {
        setTypedText("");
      }, 0);
      return () => clearTimeout(resetTimeout);
    }

    let currentLength = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        currentLength++;
        setTypedText(fullText.slice(0, currentLength));
        if (currentLength >= fullText.length) {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(timeout);
  }, [isVisible]);

  useEffect(() => {
    if (
      activeDesktopIndex !== null &&
      cardRefs.current[activeDesktopIndex] &&
      containerRef.current
    ) {
      const cardRect =
        cardRefs.current[activeDesktopIndex]!.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      // Calculate horizontal center of the card relative to the container
      const left = cardRect.left - containerRect.left + cardRect.width / 2;
      // Position it directly above the card (accounting for the hover translation visually)
      const top = cardRect.top - containerRect.top - 48;

      setArrowStyle({
        opacity: 1,
        left: left,
        top: top,
        transform: "translate(-50%, 0)",
      });
    } else {
      // When leaving, just fade out and slightly float up
      setArrowStyle((prev) => ({
        ...prev,
        opacity: 0,
        transform: "translate(-50%, -16px)",
      }));
    }
  }, [activeDesktopIndex]);

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="relative overflow-hidden bg-navy-900 pb-16 pt-0 md:pb-24"
    >
      {/* Centered background container restricted to max width of 1920px to prevent sticking/enlarging when zoomed out */}
      <div className="absolute inset-0 mx-auto max-w-480 bg-gradient-to-b from-navy-600 via-navy-700 to-navy-800 pointer-events-none">
        {/* Top Transition Pixel Edge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full min-w-[768px] md:min-w-[1280px] lg:min-w-[1920px] h-[24px] md:h-[42px] lg:h-[64px] z-10 pointer-events-none">
          <Image
            src="/assets/whoisthisfor/pixel transition.svg"
            alt=""
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>

        {/* Background SVG - positioned above color, not stretched */}
        <div
          className={`absolute top-[10%] left-1/2 -translate-x-1/2 w-[1280px] h-[849px] z-20 pointer-events-none mix-blend-screen transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src="/assets/whoisthisfor/background.svg"
            alt=""
            fill
            className="object-contain object-top"
            unoptimized
          />
        </div>
      </div>

      <div
        className={`relative z-30 mx-auto max-w-[1280px] px-4 pt-20 md:px-8 md:pt-28 desktop:max-w-[1600px] transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {/* Twinkling pixel-star sparkles around the heading */}
        <div className="pointer-events-none absolute inset-x-0 top-12 z-0 hidden md:block" aria-hidden>
          {[
            { left: "14%", top: "8px", delay: "0ms", size: 16 },
            { left: "26%", top: "64px", delay: "520ms", size: 12 },
            { left: "72%", top: "0px", delay: "260ms", size: 14 },
            { left: "84%", top: "56px", delay: "880ms", size: 12 },
            { left: "50%", top: "-8px", delay: "1200ms", size: 10 },
          ].map((s, i) => (
            <svg
              key={i}
              className="animate-twinkle absolute text-[#7BF1A8]"
              style={{ left: s.left, top: s.top, animationDelay: s.delay }}
              width={s.size}
              height={s.size}
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <rect x="5" y="0" width="2" height="12" />
              <rect x="0" y="5" width="12" height="2" />
            </svg>
          ))}
        </div>
        <h2 className="relative z-10 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-[50px] leading-tight">
          Who&apos;s This For?
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          <span className="font-pixelify text-[#7BF1A8] text-[36px] md:text-5xl lg:text-[48px] font-medium tracking-tight align-middle inline-block -translate-y-1 md:-translate-y-2 mt-2 md:mt-0">
            YOU
          </span>
          , Probably.
        </h2>
        <p className="mx-auto mt-6 max-w-[1436px] text-center text-base leading-[1.5] text-white/90 md:text-xl lg:text-[24px]">
          SparkFest is open to{" "}
          <strong className="text-white font-bold lg:text-[20px]">
            college students from all disciplines
          </strong>{" "}
          — at PUP and other universities. Whether you ship code or sketch
          ideas, there&apos;s a seat for you.
        </p>

        {/* Persona cards */}
        <div
          className="relative mt-12 pt-10 md:mt-16 md:pt-16"
          ref={containerRef}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {/* Shared Sliding Arrow */}
          <div
            className="hidden md:block absolute z-30 pointer-events-none transition-all duration-500 ease-out"
            style={{
              left: `${arrowStyle.left}px`,
              top: `${arrowStyle.top}px`,
              opacity: arrowStyle.opacity,
              transform: arrowStyle.transform,
            }}
          >
            <Image
              src="/assets/whoisthisfor/arrow.svg"
              alt=""
              width={48}
              height={40}
              className="h-auto w-8 md:w-12"
              unoptimized
            />
          </div>

          {/* Mobile Carousel View */}
          <div className="relative md:hidden w-full max-w-[496px] mx-auto aspect-[496/574] mt-8 px-2 sm:px-4">
            {/* The single SVG that contains both arrows spanning the width */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-[496/64] z-40 pointer-events-none px-2 sm:px-4">
              <Image
                src="/assets/whoisthisfor/left-and-right-arrows.svg"
                alt="Arrows"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Invisible clickable left/right areas */}
            <button
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + PERSONAS.length) % PERSONAS.length,
                )
              }
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-[15%] aspect-square z-50 focus:outline-none"
              aria-label="Previous"
            />
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % PERSONAS.length)
              }
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-[15%] aspect-square z-50 focus:outline-none"
              aria-label="Next"
            />

            {/* Carousel Cards Container (Scaled to 67.74% of 496px to match 336px width) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[67.74%] h-full">
              {PERSONAS.map((p, i) => {
                const offset =
                  (i - activeIndex + PERSONAS.length) % PERSONAS.length;

                let positionClass =
                  "opacity-0 translate-x-0 scale-75 z-0 pointer-events-none"; // Hidden (offset 2)
                if (offset === 0) {
                  positionClass = "opacity-100 translate-x-0 scale-100 z-30"; // Center
                } else if (offset === 1) {
                  positionClass =
                    "opacity-60 translate-x-[45%] scale-90 z-20 pointer-events-none"; // Right
                } else if (offset === PERSONAS.length - 1) {
                  positionClass =
                    "opacity-60 -translate-x-[45%] scale-90 z-20 pointer-events-none"; // Left
                }

                const isRevealed = offset === 0;

                return (
                  <div
                    key={p.label}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${positionClass}`}
                  >
                    <article className="relative w-full h-full">
                      {/* Mobile Base SVG */}
                      <Image
                        src={`/assets/whoisthisfor/persona-card-${p.color}-mobile.svg`}
                        alt={`${p.label} persona card`}
                        fill
                        className={`object-contain object-bottom transition-opacity duration-500 ease-out ${isRevealed ? "opacity-0" : "opacity-100"}`}
                        unoptimized
                      />

                      {/* Mobile Reveal SVG with text and glow */}
                      <Image
                        src={`/assets/whoisthisfor/persona-card-${p.color}-reveal-mobile.svg`}
                        alt={`${p.label} persona reveal`}
                        fill
                        className={`absolute inset-0 object-contain object-bottom transition-opacity duration-500 ease-out ${isRevealed ? "opacity-100" : "opacity-0"}`}
                        unoptimized
                      />
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-5 xl:gap-6">
            {PERSONAS.map((p, i) => {
              const isRevealed = activeDesktopIndex === i;
              return (
                <div
                  key={p.label}
                  className="relative mx-auto w-full max-w-[414px] cursor-pointer"
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() =>
                    setClickedIndex((prev) => (prev === i ? null : i))
                  }
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                >
                  {/* Card wrapper */}
                  <article
                    className={`relative aspect-[414/588] w-full transition-transform duration-500 ease-out ${isRevealed ? "-translate-y-3" : ""}`}
                  >
                    {/* Base SVG */}
                    <Image
                      src={`/assets/whoisthisfor/persona-card-${p.color}.svg`}
                      alt={`${p.label} persona card`}
                      fill
                      className={`object-contain object-bottom transition-opacity duration-500 ease-out ${isRevealed ? "opacity-0" : "opacity-100"}`}
                      unoptimized
                    />

                    {/* Reveal SVG with text and glow */}
                    <Image
                      src={`/assets/whoisthisfor/persona-card-${p.color}-reveal.svg`}
                      alt={`${p.label} persona reveal`}
                      fill
                      className={`absolute inset-0 object-contain object-bottom transition-opacity duration-500 ease-out ${isRevealed ? "opacity-100" : "opacity-0"}`}
                      unoptimized
                    />
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* First-timer banner */}
        <div className="relative mt-32 overflow-hidden px-2 py-2 md:mt-53 mx-auto w-full max-w-[1152px]">
          {/* Dark Blue Pixel Border Layer (Outer) */}
          <div className="absolute inset-y-2 left-0 right-0 bg-[#193cb8] z-0 rounded-sm" />
          <div className="absolute inset-x-2 top-0 bottom-0 bg-[#193cb8] z-0 rounded-sm" />

          {/* Light Blue Pixel Border Layer (Inner) */}
          <div className="absolute inset-2 bg-[#51a2ff] z-0 rounded-sm" />

          {/* Inner Content Background */}
          <div className="absolute inset-4 bg-gradient-to-b from-[#0a162a] via-[#16315d] to-[#51a2ff] z-0 overflow-hidden rounded-sm">
            {/* Decorative Corner Cubes */}
            <Image
              src="/assets/whoisthisfor/cube-left.svg"
              alt=""
              width={404}
              height={381}
              className="pointer-events-none absolute -bottom-[10%] -left-[10.5px] w-32 md:w-[404px] z-0 mix-blend-soft-light opacity-80"
              unoptimized
            />
            <Image
              src="/assets/whoisthisfor/cube-right.svg"
              alt=""
              width={416}
              height={409}
              className="pointer-events-none absolute -bottom-[10%] -right-[9.5px] w-32 md:w-[416px] z-0 mix-blend-soft-light opacity-80"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 pt-6 pb-8 md:px-12 md:pt-10 md:pb-20 text-center flex flex-col items-center">
            <div className="relative z-10 flex items-center justify-center gap-2 md:gap-4">
              <div className="relative h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px]">
                <Image
                  src="/assets/whoisthisfor/gdg-saucer.svg"
                  alt="GDG Saucer"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="relative h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px]">
                <Image
                  src="/assets/whoisthisfor/controller.svg"
                  alt="Controller"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="relative h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px]">
                <Image
                  src="/assets/whoisthisfor/sparky.svg"
                  alt="Sparky"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <p className="relative z-10 mt-4 sm:mt-6 font-pixelify font-medium text-[clamp(20px,5vw,35px)] leading-[1.2] text-[#F0B100] max-w-[624px] min-h-[32px] sm:min-h-[40px] md:min-h-[60px]">
              {typedText}
              <span
                className={`inline-block w-[6px] sm:w-2 md:w-3 h-[24px] sm:h-[32px] md:h-[40px] bg-[#F0B100] align-middle ml-1 sm:ml-2 -translate-y-1 ${isVisible ? "animate-blink" : "hidden"}`}
              />
            </p>
            <p className="relative z-10 mt-2 sm:mt-4 text-[15px] sm:text-[20px] md:text-[24px] font-bold text-white leading-[1.5] max-w-[336px]">
              Perfect. SparkFest is built for your first win.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
