import React from "react";
import { WHERE_WHEN } from "./content";
import { Ghost } from "./decor";

import SectionBorder from "./SectionBorder";

export default function WhereAndWhen() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 md:py-24">
      {/* Centered background container restricted to max width of 1920px to prevent sticking/enlarging when zoomed out */}
      <div className="absolute inset-0 mx-auto max-w-480 bg-navy-800 pointer-events-none">
        {/* Centered wrapper for SectionBorder and ghosts to keep them aligned with the centered content on all screen widths */}
        <div className="absolute left-1/2 -translate-x-1/2 w-331 h-full pointer-events-none">
          <SectionBorder />

          {/* corner ghosts */}
          <Ghost
            color="#57caff"
            className="pointer-events-none absolute left-4 top-1/3 h-7 w-7 opacity-80 md:left-8 animate-float animate-ghost-move"
          />
          <Ghost
            color="#ea4335"
            className="pointer-events-none absolute left-321 bottom-25 h-7 w-7 opacity-80 md:right-10 animate-float"
          />
          <Ghost
            color="#34a853"
            className="pointer-events-none absolute left-305 bottom-200 h-7 w-7 opacity-80 md:right-10 animate-float"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-[940px] px-6 md:px-12">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          Where &amp; When
        </h2>

        {/* Map inside arcade frame */}
        <div className="mx-auto mt-10 max-w-[640px] border-4 border-white bg-white p-2 shadow-[0_0_24px_rgba(87,202,255,0.4)] md:mt-12">
          <iframe
            title="SparkFest 2026 venue — PUP Manila"
            src={WHERE_WHEN.mapEmbed}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="aspect-[4/3] w-full"
          />
        </div>

        {/* Info columns */}
        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2">
          <div>
            <p className="text-lg font-bold text-white md:text-xl">
              {WHERE_WHEN.venue},
            </p>
            <p className="mt-1 text-sm text-white/75 md:text-base">
              {WHERE_WHEN.address}
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-lg font-bold text-white md:text-xl">
              {WHERE_WHEN.dates}
            </p>
            <p className="mt-1 text-sm text-white/75 md:text-base">
              {WHERE_WHEN.format}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Horizontal Pac-Man dotted rail with a blue pipe in the middle.
function MazeRail({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 flex items-center justify-center gap-3 ${className}`}
    >
      <div className="flex flex-1 items-center gap-3 px-6">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-google-yellow-500"
          />
        ))}
      </div>
      <div className="h-4 w-28 shrink-0 rounded-sm bg-gradient-to-b from-grid-cyan to-google-blue-500" />
      <div className="flex flex-1 items-center gap-3 px-6">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-google-yellow-500"
          />
        ))}
      </div>
    </div>
  );
}
