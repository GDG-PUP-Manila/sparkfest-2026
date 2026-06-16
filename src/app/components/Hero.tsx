"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HERO, KICKOFF_ISO, REGISTER_URL } from "./content";
import { Wordmark, PixelPlus } from "./decor";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    expired: false,
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Hero() {
  const target = new Date(KICKOFF_ISO).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(target));
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "days", value: time?.days },
    { label: "hours", value: time?.hours },
    { label: "minutes", value: time?.minutes },
    { label: "seconds", value: time?.seconds },
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-700 pt-24 pb-0 md:pt-32"
    >
      {/* Pixel skyline backdrop */}
      <div
        aria-hidden="true"
        className="pixel-skyline pointer-events-none absolute inset-x-0 top-20 h-40 opacity-40 md:h-56"
      />
      <PixelPlus className="animate-blink pointer-events-none absolute left-[8%] top-28 h-3 w-3 opacity-70" />
      <PixelPlus className="animate-blink pointer-events-none absolute right-[12%] top-44 h-4 w-4 opacity-60" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-4 text-center md:px-8 desktop:max-w-[1600px]">
        {/* Wordmark */}
        <Wordmark className="text-[15vw] leading-[0.9] md:text-[110px] xl:text-[140px] desktop:text-[170px]" />

        {/* Tagline */}
        <p className="mt-6 text-base font-semibold text-white/90 md:mt-8 md:text-xl xl:text-2xl">
          {HERO.tagline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        {/* Countdown */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-10 md:gap-4">
          {units.map((u) => (
            <div
              key={u.label}
              className="pixel-panel flex min-w-[68px] flex-col items-center px-4 py-3 md:min-w-[92px] md:px-6 md:py-4"
            >
              <span className="font-pixel text-2xl text-white tabular-nums md:text-4xl">
                {time ? pad(u.value ?? 0) : "--"}
              </span>
              <span className="mt-2 font-pixel text-[8px] uppercase tracking-widest text-grid-cyan md:text-[10px]">
                {u.label}
              </span>
            </div>
          ))}
        </div>

        {/* Eligibility */}
        <p className="mt-6 flex items-center gap-2 text-xs font-medium text-white/70 md:text-sm">
          <span aria-hidden="true">🎮</span>
          {HERO.eligibility}
        </p>

        {/* CTAs */}
        <div className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row md:mt-8">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full border-2 border-grid-cyan bg-google-blue-500 px-7 py-3 text-center font-pixel text-[11px] text-white shadow-[0_0_18px_rgba(66,133,244,0.6)] transition-transform hover:-translate-y-0.5 sm:w-auto md:text-xs"
          >
            {HERO.primaryCta}
          </a>
          <a
            href="#program"
            className="w-full border-2 border-grid-cyan/70 bg-navy-800 px-7 py-3 text-center font-pixel text-[11px] text-grid-cyan transition-transform hover:-translate-y-0.5 sm:w-auto md:text-xs"
          >
            {HERO.secondaryCta}
          </a>
        </div>

        {/* Mascot + grid floor */}
        <div className="relative mt-10 w-full md:mt-14">
          <Image
            src="/assets/sprites/sparky.png"
            alt="Sparky, the SparkFest mascot"
            width={140}
            height={128}
            className="animate-float pixelated mx-auto h-auto w-24 md:w-32"
            priority
          />
        </div>
      </div>

      {/* Perspective grid floor */}
      <div
        aria-hidden="true"
        className="arcade-grid relative mt-6 h-40 w-full bg-gradient-to-b from-google-green-500/30 to-navy-700 md:h-56"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 40%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 40%)",
        }}
      />
    </section>
  );
}
