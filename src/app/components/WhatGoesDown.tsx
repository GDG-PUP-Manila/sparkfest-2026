import React from "react";
import { WHAT_GOES_DOWN } from "./content";

const ASSET_MAP: Record<string, string> = {
  "Hackathon Proper": "laptop",
  "Mentorship Sessions": "discussion",
  "Pitching Day": "public-speaking",
  "Awarding Ceremony": "trophy",
  Networking: "handshake",
  "Community Impact": "puzzle",
};

export default function WhatGoesDown() {
  return (
    <section
      id="program"
      className="relative overflow-hidden bg-navy-900 py-16 md:py-24"
    >
      <div className="absolute inset-0 mx-auto max-w-480 pointer-events-none z-0">
        <img
          src="/assets/key-highlights/background.svg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] xl:max-w-[2000px] px-4 md:px-4 desktop:max-w-[1600px]">
        <h2 className="text-center text-3xl font-extrabold text-white md:text-5xl">
          What Goes Down at Sparkfest?
        </h2>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 xl:grid-cols-3 md:gap-6 xl:gap-8">
          {WHAT_GOES_DOWN.map((card) => {
            const assetPrefix = ASSET_MAP[card.title];

            return (
              <article
                key={card.title}
                tabIndex={0}
                className="group relative flex min-h-[150px] md:min-h-[170px] w-full flex-col justify-center items-start outline-none cursor-pointer"
              >
                {/* Base SVG border */}
                <img
                  src="/assets/key-highlights/card-border.svg"
                  alt=""
                  className="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
                />

                {/* Clipped inner area: backgrounds all live here */}
                <div
                  className="pointer-events-none absolute z-10"
                  style={{
                    left: '1.07%',
                    right: '1.07%',
                    top: '5.29%',
                    bottom: '5.29%',
                    overflow: 'hidden',
                  }}
                >
                  {/* Background before */}
                  <img
                    src="/assets/key-highlights/card-background-before.svg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-fill transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0"
                  />
                  {/* Background after */}
                  <img
                    src="/assets/key-highlights/card-background-after.svg"
                    alt=""
                    className="absolute inset-0 h-full w-full object-fill opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
                  />
                </div>

                {/* Content — sits above everything */}
                <div className="relative z-20 flex w-full flex-col justify-center items-start gap-2 p-[5.29%] px-[6%] pr-[35%] md:gap-3 md:pr-[40%] xl:pr-[42%]">
                  {/* Removed text-white on hover to keep text black! Adjusted sizes down slightly for responsive 3-col fit */}
                  <h3 className="font-pixel font-medium text-[12px] md:text-[15px] xl:text-[17 px] xl:mt-8 leading-tight text-black-02 transition-all duration-300 group-hover:[text-shadow:_3px_3px_0_#fff,-1px_1px_0_#fff,3px_-1px_0_#fff,-1px_-1px_0_#fff] group-focus:[text-shadow:_3px_3px_0_#fff,-1px_1px_0_#fff,3px_-1px_0_#fff,-1px_-1px_0_#fff] md:mt-2 xl:mt-4">
                    {card.title}
                  </h3>
                  <p className="text-[10px] md:text-[12px] xl:text-[14px] xl:mb-5 leading-relaxed text-black-02/70 transition-colors duration-300 group-hover:text-black-02 group-focus:text-black-02">
                    {card.desc}
                  </p>
                </div>

                {/* reveal-after & reveal-before: same exact position, perfectly overlapped */}
                <div
                  className="pointer-events-none absolute z-30"
                  style={{
                    width: '47.32%',
                    aspectRatio: '1 / 1',
                    top: '-15.88%',
                    right: '-4.81%',
                  }}
                  aria-hidden="true"
                >
                  <img
                    src={`/assets/key-highlights/${assetPrefix}-reveal-before.svg`}
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0"
                  />
                  <img
                    src={`/assets/key-highlights/${assetPrefix}-reveal-after.svg`}
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}