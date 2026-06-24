"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Phase = "visible" | "fade" | "hidden";

const MIN_LOADING_MS = 1100;
const FADE_OUT_MS = 420;

export default function ThemeLoadingScreen() {
  const [phase, setPhase] = useState<Phase>("visible");

  useEffect(() => {
    let mounted = true;
    let minElapsed = false;
    let pageLoaded = document.readyState === "complete";

    const maybeFade = () => {
      if (!mounted || !minElapsed || !pageLoaded) return;
      setPhase("fade");
      window.setTimeout(() => {
        if (mounted) setPhase("hidden");
      }, FADE_OUT_MS);
    };

    const minTimer = window.setTimeout(() => {
      minElapsed = true;
      maybeFade();
    }, MIN_LOADING_MS);

    const onLoad = () => {
      pageLoaded = true;
      maybeFade();
    };

    window.addEventListener("load", onLoad);
    maybeFade();

    return () => {
      mounted = false;
      window.clearTimeout(minTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[120] transition-opacity duration-400 ${
        phase === "fade" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-navy-900" />

      <div className="relative h-full w-full grid place-items-center px-6">
        <div className="relative h-[96px] w-[96px] animate-loading-pulse md:h-[112px] md:w-[112px]">
          <Image
            src="/assets/nav/sparkfest-mascot.png"
            alt=""
            fill
            unoptimized
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
