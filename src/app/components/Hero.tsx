"use client";

import React, { useEffect, useState } from "react";
import { KICKOFF_ISO, REGISTER_URL } from "./content";

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

/*
 * The Hero is the exact Figma scene exported as an image (hero-bg.webp),
 * rendered inside a fixed 1920×1376 aspect canvas so it scales 1:1 with the
 * design. The navbar and the four countdown digits were hidden during export,
 * so the live countdown digits and the clickable CTA links are overlaid on top
 * at the precise coordinates of the baked panels/buttons.
 *
 * All percentages below are relative to the 1920×1376 Figma hero frame.
 */
const COUNTDOWN = { left: 30.42, top: 60.12, width: 37.24, height: 14.1 };
const CELL_LEFT = [0, 26.57, 53.15, 79.72]; // % of countdown region width
const CELL_WIDTH = 20.28; // % of countdown region width
const BUTTONS = { left: 30.42, top: 80.32, width: 37.24, height: 3.92 };

export default function Hero() {
  const target = new Date(KICKOFF_ISO).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeout(() => setTime(getTimeLeft(target)), 0);
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const values = [time?.days, time?.hours, time?.minutes, time?.seconds];

  return (
    <section id="top" className="relative w-full overflow-hidden bg-[#050a1f]">
      <div
        className="relative mx-auto w-full"
        style={{
          aspectRatio: "1920 / 1376",
          containerType: "inline-size",
          maxWidth: "1920px",
        }}
      >
        {/* Exact Figma hero scene */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero/hero-bg.webp"
          alt="SparkFest 2026 — Igniting Innovation. Building Impact. Empowering Communities."
          className="absolute inset-0 h-full w-full select-none object-cover"
          draggable={false}
          fetchPriority="high"
        />

        <h1 className="sr-only">
          SparkFest 2026 — Igniting Innovation, Building Impact, Empowering
          Communities
        </h1>

        {/* Live countdown digits over the baked glossy panels */}
        <div
          className="pointer-events-none absolute"
          style={{
            left: `${COUNTDOWN.left}%`,
            top: `${COUNTDOWN.top}%`,
            width: `${COUNTDOWN.width}%`,
            height: `${COUNTDOWN.height}%`,
          }}
          aria-hidden="true"
        >
          {CELL_LEFT.map((cl, i) => (
            <div
              key={i}
              className="absolute top-0 h-full"
              style={{ left: `${cl}%`, width: `${CELL_WIDTH}%` }}
            >
              <span
                className="absolute inset-x-0 flex items-center justify-center font-pixel text-white"
                style={{
                  top: "27%",
                  height: "42%",
                  fontSize: "3cqw",
                  transform: "scaleY(1.3)",
                  textShadow: "0 0.12cqw 0 rgba(3,8,24,0.55)",
                }}
              >
                {time ? pad(values[i] ?? 0) : "--"}
              </span>
            </div>
          ))}
        </div>

        {/* Screen-reader announcement of the live countdown */}
        <p className="sr-only" aria-live="polite">
          {time
            ? `${time.days} days, ${time.hours} hours, ${time.minutes} minutes and ${time.seconds} seconds until SparkFest 2026 kicks off.`
            : "Loading countdown to SparkFest 2026."}
        </p>

        {/* Clickable links over the baked CTA buttons */}
        <div
          className="absolute"
          style={{
            left: `${BUTTONS.left}%`,
            top: `${BUTTONS.top}%`,
            width: `${BUTTONS.width}%`,
            height: `${BUTTONS.height}%`,
          }}
        >
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register Now – It's Free"
            className="absolute inset-y-0 left-0 block rounded-md transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ width: "46.85%" }}
          />
          <a
            href="#program"
            aria-label="See How It Works"
            className="absolute inset-y-0 block rounded-md transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ left: "53.01%", width: "46.99%" }}
          />
        </div>
      </div>
    </section>
  );
}
