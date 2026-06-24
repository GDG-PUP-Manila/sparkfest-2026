import React from "react";
import { FOOTER } from "./content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-grid-cyan/30 bg-linear-to-b from-navy-800 to-navy-900 py-10 md:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35 dot-matrix"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8 desktop:max-w-[1600px]">
        <div className="mx-auto max-w-4xl rounded-xl border border-grid-cyan/40 bg-navy-900/70 p-5 text-center shadow-[0_0_0_1px_rgba(87,202,255,0.15),0_10px_40px_rgba(5,10,31,0.45)] backdrop-blur-[1px] md:p-6">
          <div className="flex items-center justify-center gap-2.5">
            {/* Keep footer lockup visually consistent with the navbar branding */}
            <img
              src="/assets/nav/sparkfest-mascot.png"
              alt="SparkFest mascot"
              width={48}
              height={48}
              className="h-9 w-auto md:h-11"
            />
            <span className="leading-none">
              <span className="block text-base font-bold tracking-tight text-white md:text-xl">
                SparkFest
              </span>
              <span className="block text-center text-sm font-bold leading-none tracking-tight md:text-lg">
                <span className="text-logo-2">2</span>
                <span className="text-logo-0">0</span>
                <span className="text-logo-2b">2</span>
                <span className="text-logo-6">6</span>
              </span>
            </span>
          </div>

          <p className="mt-4 font-pixelify text-base font-semibold leading-tight text-white md:text-xl">
            {FOOTER.tagline}
          </p>

          <div className="mx-auto mt-4 h-px w-36 bg-linear-to-r from-transparent via-grid-cyan/70 to-transparent md:w-44" />

          <p className="mt-4 text-xs text-white/60 md:text-sm">
            © 2026 {FOOTER.org}
          </p>
        </div>
      </div>
    </footer>
  );
}
