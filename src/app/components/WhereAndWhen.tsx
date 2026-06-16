import React from "react";
import { WHERE_WHEN } from "./content";

export default function WhereAndWhen() {
  const items = [
    { icon: "📍", label: "Venue", value: WHERE_WHEN.venue },
    { icon: "🗺️", label: "Address", value: WHERE_WHEN.address },
    { icon: "📅", label: "Dates", value: WHERE_WHEN.dates },
    { icon: "🎯", label: "Format", value: WHERE_WHEN.format },
  ];

  return (
    <section className="bg-gradient-to-b from-navy-900 to-navy-800 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 desktop:max-w-[1600px]">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          Where &amp; When
        </h2>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="pixel-panel flex items-start gap-4 px-6 py-6"
            >
              <span className="text-3xl" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="font-pixel text-[9px] uppercase tracking-widest text-grid-cyan">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-semibold text-white md:text-lg">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
