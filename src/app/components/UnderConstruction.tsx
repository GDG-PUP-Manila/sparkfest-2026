/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { SparkLogo } from "./decor";

export default function UnderConstruction() {
  return (
    <main
      id="top"
      className="relative min-h-dvh w-full overflow-hidden bg-[#050a1f]"
    >
      <h1 className="sr-only">
        SparkFest 2026 — Under construction. The devs are still building this
        site.
      </h1>

      <header className="absolute inset-x-0 top-0 z-30 flex items-center gap-2 px-5 pt-5 md:px-[4.5%] md:pt-[3.8%]">
        <SparkLogo className="size-8 md:size-9" />
        <span className="font-sans text-base font-bold text-white md:text-lg">
          SparkFest 2026
        </span>
      </header>

      <div className="relative mx-auto min-h-dvh w-full md:min-h-0 md:aspect-[1920/1376] md:max-w-[1920px]">
        <img
          src="/assets/hero/hero-bg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full select-none object-cover object-[center_16%] md:object-top"
          draggable={false}
          fetchPriority="high"
        />

        {/*
          Single overlay — replaces countdown + CTAs.
          Mobile: full-width bottom sheet (covers baked timer/buttons).
          Desktop: Figma slot on 1920×1376 canvas.
        */}
        <div
          className="absolute inset-x-0 bottom-0 z-20 flex min-h-[52dvh] flex-col justify-center border-t-[3px] border-[#2b7fff] bg-[#0a162a] px-5 pb-10 pt-6 text-center md:inset-x-auto md:bottom-auto md:left-[30.42%] md:top-[58.5%] md:min-h-0 md:w-[37.24%] md:border-x-[5px] md:border-b-[5px] md:border-t-[22px] md:rounded-[0.6cqw] md:px-[4cqw] md:py-[2.5cqw]"
          style={{
            boxShadow: "0 8px 0 0 #1447e6, 0 0 48px rgba(43,127,255,0.12)",
          }}
        >
          <div className="mx-auto mb-4 flex max-w-[170px] justify-center md:mb-[1.2cqw] md:max-w-[55%]">
            <div className="rounded-lg bg-[#112851]/90 p-2">
              <Image
                src="/assets/under-construction/sparkypoints-cirby-denied.png"
                alt=""
                width={440}
                height={440}
                priority
                className="h-auto w-full select-none mix-blend-screen"
              />
            </div>
          </div>

          <p
            className="mb-3 font-pixelify text-[15px] font-medium leading-snug text-google-yellow-500 md:text-[clamp(15px,1.85vw,22px)]"
            style={{ textShadow: "0 2px 0 #432004" }}
          >
            Under construction muna — sandali lang!
          </p>

          <p className="mb-3 font-sans text-[17px] font-bold leading-snug text-white md:text-[clamp(16px,2vw,24px)]">
            The devs are still building this site.
          </p>

          <p className="font-pixelify text-[13px] font-medium leading-relaxed text-[#eff6ff]/85 md:text-[clamp(12px,1.2vw,16px)]">
            GDG on Campus · PUP — launching soon
          </p>
        </div>
      </div>
    </main>
  );
}
