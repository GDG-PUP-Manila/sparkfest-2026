import React from "react";
import { SNAP_FRAME } from "./content";
import PlaceholderCta from "./PlaceholderCta";

export default function SnapAndFrame() {
  const { photobooth, dpFrame } = SNAP_FRAME;

  return (
    <section className="dot-matrix bg-gradient-to-b from-navy-900 to-navy-800 py-16 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 md:px-8">
        <h2 className="text-center text-2xl font-extrabold text-white md:text-4xl">
          {SNAP_FRAME.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          {SNAP_FRAME.intro}
        </p>

        {/* Arcade cabinet frame */}
        <div className="neon-frame mt-10 bg-navy-900 p-5 md:mt-14 md:p-8">
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {/* Photobooth */}
            <div className="flex flex-col bg-gradient-to-b from-panel-blue to-panel-blue-2 p-6 md:p-7">
              <h3 className="text-lg font-bold text-white md:text-xl">
                Proof you{" "}
                <span className="text-google-yellow-500">showed up</span> and{" "}
                <span className="text-google-green-500">built something.</span>
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                {photobooth.body}
              </p>
              <PlaceholderCta
                label={photobooth.cta}
                feature="GDG PHOTOBOOTH"
                className="mt-6 self-start border-2 border-navy-900 bg-google-yellow-500 px-6 py-3 font-pixel text-[10px] text-navy-900 shadow-[0_4px_0_#050a1f] transition-transform hover:-translate-y-0.5"
              />
            </div>

            {/* DP Frame */}
            <div className="flex flex-col bg-gradient-to-b from-panel-blue to-panel-blue-2 p-6 md:p-7">
              <h3 className="text-lg font-bold text-white md:text-xl">
                <span className="text-grid-cyan">Show up</span> before you even
                show up.
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                {dpFrame.body}
              </p>
              <PlaceholderCta
                label={dpFrame.cta}
                feature="GDG DP FRAME"
                className="mt-6 self-start border-2 border-navy-900 bg-google-green-500 px-6 py-3 font-pixel text-[10px] text-white shadow-[0_4px_0_#050a1f] transition-transform hover:-translate-y-0.5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
