import React from "react";
import { SNAP_FRAME } from "./content";
import PlaceholderCta from "./PlaceholderCta";
import { SparkLogo, ColorSwatch, PeopleFrames } from "./decor";

export default function SnapAndFrame() {
  const { photobooth, dpFrame } = SNAP_FRAME;

  return (
    <section className="bg-[linear-gradient(180deg,#0a1330,#0f1f4a)] py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-4 md:px-8">
        <h2 className="text-center text-2xl font-extrabold text-white md:text-4xl">
          {SNAP_FRAME.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          {SNAP_FRAME.intro}
        </p>

        {/* Top cabinet rail with GDG logo */}
        <div className="mx-auto mt-10 flex max-w-[860px] items-center justify-center rounded-t-[28px] border-2 border-grid-cyan/60 bg-navy-900/60 py-3">
          <SparkLogo className="h-6 w-6" />
        </div>

        {/* Cards */}
        <div className="mx-auto max-w-[940px] border-x-2 border-grid-cyan/60 bg-navy-900/40 p-5 md:p-8">
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {/* Photobooth */}
            <div className="flex flex-col rounded-md border border-grid-cyan/30 bg-gradient-to-b from-panel-blue to-panel-blue-2 p-6 md:p-7">
              <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
                Proof you{" "}
                <span className="text-google-yellow-500">showed up</span> and{" "}
                <span className="text-google-yellow-500">built something.</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {photobooth.body}
              </p>
              <div className="mt-6 flex flex-1 items-end justify-center">
                <ColorSwatch className="h-28 w-24" />
              </div>
              <PlaceholderCta
                label={photobooth.cta}
                feature="GDG PHOTOBOOTH"
                className="mt-6 self-start border-2 border-navy-900 bg-google-yellow-500 px-6 py-3 font-pixel text-[10px] text-navy-900 shadow-[0_4px_0_#050a1f] transition-transform hover:-translate-y-0.5"
              />
            </div>

            {/* DP Frame */}
            <div className="flex flex-col rounded-md border border-grid-cyan/30 bg-gradient-to-b from-panel-blue to-panel-blue-2 p-6 md:p-7">
              <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
                <span className="text-google-green-500">Show up</span> before you
                even show up.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {dpFrame.body}
              </p>
              <div className="mt-6 flex flex-1 items-end justify-center">
                <PeopleFrames className="h-20 w-44" />
              </div>
              <PlaceholderCta
                label={dpFrame.cta}
                feature="GDG DP FRAME"
                className="mt-6 self-start border-2 border-navy-900 bg-google-green-500 px-6 py-3 font-pixel text-[10px] text-white shadow-[0_4px_0_#050a1f] transition-transform hover:-translate-y-0.5"
              />
            </div>
          </div>
        </div>

        {/* Bottom cabinet rail with pips */}
        <div className="mx-auto flex max-w-[860px] items-center justify-center gap-3 rounded-b-[28px] border-2 border-grid-cyan/60 bg-navy-900/60 py-4">
          <span className="h-3 w-1 rounded bg-google-red-500" />
          <i className="h-3 w-3 rounded-full bg-google-red-500" />
          <i className="h-3 w-3 rounded-full bg-google-yellow-500" />
          <i className="h-3 w-3 rounded-full bg-google-green-500" />
          <span className="h-3 w-1 rounded bg-google-red-500" />
        </div>
      </div>
    </section>
  );
}
