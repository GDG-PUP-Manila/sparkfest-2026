import React from "react";
import { PRE_EVENTS } from "./content";
import { ArticlePoster } from "./ArticlePoster";

export default function BeforeTheSpark() {
  return (
    <section
      id="pre-events"
      className="relative overflow-hidden bg-navy-900 py-16 md:py-24"
    >
      {/* Centered background container restricted to max width of 1920px to prevent sticking/enlarging when zoomed out */}
      <div className="absolute inset-0 mx-auto max-w-480 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-navy-700 to-navy-900" />
        <div
          className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2' height='4' fill='%23000000' fill-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "8px 10px",
          }}
        />
      </div>

      {/* CONTENT LAYER */}
      {/* Added 'relative z-10' to ensure content sits above the pattern layer */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        {/* Note: Kept your exact classes here, including text-justify */}
        <h2 className="mx-auto w-full max-w-120.25 text-center font-sans text-[40px] md:text-[60px] font-bold leading-[120%] text-[#FAFAFA]">
          Before the Spark
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          SparkFest 2026 doesn&apos;t begin on Day 1. Two pre-events. Two ways
          to level up before the hackathon even kicks off.
        </p>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {PRE_EVENTS.map((ev) => (
            <ArticlePoster
              key={ev.title}
              title={ev.title}
              tag={ev.tag}
              desc={ev.desc}
              color={ev.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
