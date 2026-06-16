import React from "react";
import { SparkLogo } from "./decor";

export default function Footer() {
  return (
    <footer className="border-t border-grid-cyan/20 bg-navy-900 py-10">
      <div className="mx-auto max-w-[1280px] px-4 text-center md:px-8 desktop:max-w-[1600px]">
        <div className="flex items-center justify-center gap-2">
          <SparkLogo className="h-6 w-6" />
          <span className="font-pixel text-[10px] text-grid-cyan">
            SparkFest 2026
          </span>
        </div>
        <p className="mt-4 text-xs text-white/50">
          © 2026 Google Developer Groups on Campus — Polytechnic University of the
          Philippines
        </p>
        <p className="mt-1 text-[10px] text-white/35">
          Built for innovators and social-impact creators in Manila.
        </p>
      </div>
    </footer>
  );
}
