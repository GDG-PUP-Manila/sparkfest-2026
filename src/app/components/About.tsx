"use client";

import { useEffect, useState, useRef } from "react";
import { ABOUT } from "./content";
import { RichText } from "./decor";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const totalRange = viewportHeight + rect.height;
            const progress = (viewportHeight - rect.top) / totalRange;
            const clampedProgress = Math.max(0, Math.min(1, progress));

            // As user scrolls down, progress increases (0 -> 1)
            // We want it to move up as user scrolls down (up to -maxOffset), but stick to its original position (0) when scrolling up/moving down.
            const maxOffset = 200;
            const targetOffset = (0.5 - clampedProgress) * maxOffset;
            const currentOffset = Math.max(
              -maxOffset,
              Math.min(0, targetOffset),
            );
            setOffsetY(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[url('/assets/about/about-bg.webp')] bg-cover bg-center bg-no-repeat pb-0 md:pb-10 pt-0 lg:pb-16"
    >
      {/* Green pixel skyline transition at the very top */}
      <div className="relative w-full h-4 md:h-8 pointer-events-none">
        <Image
          src="/assets/about/pixel-transition.svg"
          alt="Skyline transition"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Thunder decorations */}
      <div className="absolute top-0 -right-4 w-[40%] max-w-145 aspect-1458/903 pointer-events-none z-10">
        <Image
          src="/assets/about/thunder-right.webp"
          alt="Thunder Left"
          fill
          className="object-contain object-top-right"
        />
      </div>
      <div className="absolute top-0 left-0 w-[40%] max-w-145 aspect-1458/903 pointer-events-none z-10">
        <Image
          src="/assets/about/thunder-left.webp"
          alt="Thunder Right"
          fill
          className="object-contain object-top-left"
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 pt-12 md:px-8 md:pt-16 desktop:max-w-[1600px]">
        {/* Decorative background clouds from Figma (anchored to content columns) */}
        <div className="absolute hidden md:block lg:-left-35 lg:top-5 -left-5 top-5 lg:h-16 lg:w-72 h-8 w-42 pointer-events-none z-10">
          <Image
            src="/assets/about/cloud-decor.svg"
            alt="Cloud decorative"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute hidden md:block -right-10 top-28 h-14 w-65 pointer-events-none z-10">
          <Image
            src="/assets/about/cloud-decor.svg"
            alt="Cloud decorative"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute hidden lg:block -left-10 bottom-38 h-14 w-52 pointer-events-none z-10">
          <Image
            src="/assets/about/cloud-decor.svg"
            alt="Cloud decorative"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute hidden lg:block left-[38%] bottom-33 h-14 w-52 pointer-events-none z-10">
          <Image
            src="/assets/about/cloud-decor.svg"
            alt="Cloud decorative"
            fill
            className="object-contain"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-[10fr_1fr]">
          {/* Left column: copy + stats */}
          <div className="relative z-30 lg:mr-0 md:mr-35 mr-30">
            <h2 className="text-2xl lg:mt-4 font-extrabold leading-[1.05] text-white md:text-6xl xl:text-7xl">
              Build the Spark.
              <br />
              Become the Impact.
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-xs leading-relaxed text-white/80 md:text-base">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>
                  <RichText text={p.text} />
                </p>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-xs font-bold leading-snug text-white md:text-3xl">
              {ABOUT.quote}
            </p>

            {/* Stats */}
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-2 md:gap-5 lg:mr-0 md:mr-23 -mr-10">
              {ABOUT.stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center rounded-md border border-gray-200 bg-linear-to-b from-[#0159AB]/60 to-[#00355E]/60 to-10% px-4 py-6 text-center"
                >
                  <span className="font-pixel lg:text-4xl text-sm text-white [text-shadow:0_0_25px_#ffffff]">
                    {s.value}
                  </span>
                  <span className="mt-3 font-pixel lg:text-[9px] md:text-[7px] text-[6px] uppercase leading-relaxed tracking-widest text-white">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: pixel earth + rocket smoke + pills */}
          <div aria-hidden="true" className="relative z-10">
            {/* Pixel earth / Cloud graphic */}
            <div className="absolute lg:-bottom-60 lg:right-40 md:-bottom-20 md:right-0 -bottom-2 right-0 translate-x-1/2 translate-y-1/2 h-90 w-90 md:h-150 md:w-150 lg:h-160 lg:w-160 pointer-events-none">
              <Image
                src="/assets/about/earth.webp"
                alt="Cloud graphic"
                fill
                className="object-contain"
              />
            </div>

            {/* Left smoke */}
            <div
              style={{
                transform: `translate(50%, 50%) translateY(${offsetY * 0.9}px) rotate(-18deg)`,
              }}
              className="absolute lg:bottom-12 lg:right-85 md:bottom-35 md:right-60 lg:rotate-0 md:-rotate-15 bottom-30 right-40 -rotate-10 lg:h-136.25 lg:w-125 md:h-120 md:w-90 h-90 w-60 pointer-events-none z-10 transition-transform duration-100 ease-out"
            >
              <Image
                src="/assets/about/left-smoke.svg"
                alt="Left smoke"
                fill
                className="object-contain"
              />
            </div>

            {/* Middle smoke */}
            <div
              style={{
                transform: `translate(50%, 50%) translateY(${offsetY * 0.9}px)`,
              }}
              className="absolute lg:bottom-45 lg:right-38 md:bottom-80 md:right-20 bottom-50 right-20 lg:rotate-0 md:rotate-0 -rotate-10 lg:h-120 lg:w-120 md:h-100 md:w-100 h-60 w-60 pointer-events-none z-10 transition-transform duration-100 ease-out"
            >
              <Image
                src="/assets/about/middle-smoke.svg"
                alt="Middle smoke"
                fill
                className="object-contain"
              />
            </div>

            {/* Right smoke */}
            <div
              style={{
                transform: `translate(50%, 50%) translateY(${offsetY * 0.9}px) rotate(40deg)`,
              }}
              className="absolute lg:bottom-12 lg:-right-5 md:bottom-55 md:-right-30 bottom-40 -right-18 md:h-168.75 md:w-170 h-120 w-120 pointer-events-none z-5 transition-transform duration-100 ease-out"
            >
              <Image
                src="/assets/about/right-smoke.svg"
                alt="Right smoke"
                fill
                className="object-contain"
              />
            </div>

            {/* GDG graphic */}
            <div
              style={{ transform: `translateY(${offsetY * 2.0}px)` }}
              className="absolute lg:top-20 lg:right-5 md:top-30 md:right-0 -top-105 right-10 lg:h-62 lg:w-62 md:h-42 md:w-42 h-22 w-22 pointer-events-none z-20 transition-transform duration-100 ease-out"
            >
              <div className="w-full h-full animate-float">
                <Image
                  src="/assets/about/pixel-gdg.svg"
                  alt="Pills"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Sparkle diagonal */}
            <div className="absolute hidden md:block top-12 left-40 h-6 w-6 pointer-events-none z-20 animate-pulse">
              <Image
                src="/assets/about/sparkle-diagonal.svg"
                alt="Sparkle"
                fill
                className="object-contain"
              />
            </div>

            {/* Sparkle straight */}
            <div
              className="absolute hidden md:block bottom-40 right-85 h-6 w-6 pointer-events-none z-20 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              <Image
                src="/assets/about/sparkle-straight.svg"
                alt="Sparkle"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
