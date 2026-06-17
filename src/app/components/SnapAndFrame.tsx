/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SNAP_FRAME } from "./content";
import PlaceholderCta from "./PlaceholderCta";

// ── Photo-strip mockup for the Photobooth card ────────────────────────────
function PhotoStripMockup({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 230 270" className={className} aria-hidden="true">
      {/* Back strip — rotated -3.5deg, darker translucent backing */}
      <g transform="rotate(-3.5, 60, 135)">
        <rect x="14" y="6" width="92" height="252" rx="5" fill="rgba(38,38,38,0.5)" />
        <rect x="20" y="14" width="80" height="50" rx="2" fill="#2b7fff" />
        <rect x="20" y="68" width="80" height="50" rx="2" fill="#00c950" />
        <rect x="20" y="122" width="80" height="50" rx="2" fill="#f0b100" />
        <rect x="20" y="176" width="80" height="48" rx="2" fill="#fb2c36" />
      </g>
      {/* Front strip — rotated +6.69deg, white photo strip */}
      <g transform="rotate(6.69, 160, 135)">
        <rect x="112" y="4" width="98" height="260" rx="6" fill="#eef2fb" />
        <rect x="120" y="13" width="82" height="52" rx="2" fill="#2b7fff" />
        <rect x="120" y="69" width="82" height="52" rx="2" fill="#00c950" />
        <rect x="120" y="125" width="82" height="52" rx="2" fill="#f0b100" />
        <rect x="120" y="181" width="82" height="50" rx="2" fill="#fb2c36" />
      </g>
      {/* Sparkle crosses around the strips */}
      <g fill="white">
        <rect x="2" y="60" width="6" height="2" opacity="0.7" />
        <rect x="4" y="57" width="2" height="8" opacity="0.7" />
        <rect x="214" y="92" width="6" height="2" opacity="0.6" />
        <rect x="216" y="89" width="2" height="8" opacity="0.6" />
        <rect x="206" y="210" width="5" height="2" opacity="0.55" />
        <rect x="208" y="207" width="2" height="7" opacity="0.55" />
        <rect x="40" y="248" width="4" height="2" opacity="0.5" />
        <rect x="42" y="246" width="2" height="6" opacity="0.5" />
      </g>
    </svg>
  );
}

// ── DP-Frame avatar cards (4 coloured profile cards, staggered heights) ───
function DPFrameAvatars({ className = "" }: { className?: string }) {
  const cards = [
    { from: "#2b7fff", to: "#1a4c99", offset: 40 },
    { from: "#00c950", to: "#006327", offset: 0 },
    { from: "#f0b100", to: "#8a6600", offset: 40 },
    { from: "#fb2c36", to: "#951a20", offset: 0 },
  ];

  return (
    <svg viewBox="0 0 376 188" className={className} aria-hidden="true">
      <defs>
        {cards.map((c, i) => (
          <linearGradient key={i} id={`dpGrad${i}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={c.from} />
            <stop offset="100%" stopColor={c.to} />
          </linearGradient>
        ))}
      </defs>
      {cards.map((c, i) => (
        <g key={i} transform={`translate(${i * 90}, ${c.offset})`}>
          <rect x="3" y="0" width="85" height="134" rx="5" fill={`url(#dpGrad${i})`} />
          <circle cx="45" cy="50" r="21" fill="rgba(255,255,255,0.85)" />
          <path
            d="M16 132 Q16 88 45 88 Q74 88 74 132 Z"
            fill="rgba(255,255,255,0.85)"
          />
        </g>
      ))}
      <g fill="white">
        <rect x="2" y="14" width="4" height="2" opacity="0.6" />
        <rect x="3" y="12" width="2" height="6" opacity="0.6" />
        <rect x="356" y="6" width="4" height="2" opacity="0.5" />
        <rect x="357" y="4" width="2" height="6" opacity="0.5" />
      </g>
    </svg>
  );
}

// ── Top rail bezels — separate mobile (Vector 432) / desktop (Vector 431) paths ──
const MOBILE_RAIL_PATH =
  "M18.8377 21.7447L27.6225 61.7447C28.6299 66.3316 32.6934 69.5996 37.3897 69.5996H284.231C289.016 69.5996 293.13 66.2101 294.046 61.5138L301.847 21.5138C303.051 15.3392 298.323 9.59961 292.032 9.59961H28.6049C22.2176 9.59961 17.4676 15.5061 18.8377 21.7447Z";

const DESKTOP_RAIL_PATH =
  "M20.7253 25.7334L65.7708 83.7334C67.6651 86.1726 70.5803 87.5996 73.6687 87.5996H1273.15C1276.44 87.5996 1279.52 85.9835 1281.38 83.277L1321.38 25.277C1325.96 18.6432 1321.21 9.59961 1313.15 9.59961H28.6232C20.305 9.59961 15.6231 19.1638 20.7253 25.7334Z";

function TopRail() {
  return (
    <>
      {/* Mobile — Figma Group 1649 (288×60), stroke only + centered diamond */}
      <div className="relative aspect-[288/60] w-full md:hidden">
        <svg
          viewBox="17.5 9.6 286 60"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d={MOBILE_RAIL_PATH}
            fill="none"
            stroke="#EFF6FF"
            strokeWidth="5"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src="/assets/snap/diamond.png"
            alt=""
            aria-hidden="true"
            className="h-[58%] w-auto max-w-[70%] object-contain select-none"
          />
        </div>
      </div>

      {/* Desktop — Figma Group 1650 (1324×78), stroke only + centered diamond */}
      <div className="relative hidden aspect-[1324/78] w-full md:block">
        <svg
          viewBox="15.5 9.6 1306 78"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full drop-shadow-[0_9px_16px_rgba(0,0,0,0.5)]"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d={DESKTOP_RAIL_PATH}
            fill="none"
            stroke="#EFF6FF"
            strokeWidth="5"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <img
            src="/assets/snap/diamond.png"
            alt=""
            aria-hidden="true"
            className="h-[58%] w-auto max-w-[12%] object-contain select-none"
          />
        </div>
      </div>
    </>
  );
}

// ── Bottom rail — mobile Group 1632 / desktop Group 1651 ──
function BottomRail() {
  return (
    <>
      {/* Mobile — Figma Group 1632 (289×117) */}
      <div className="relative aspect-[289/117] w-full md:hidden">
        {/* Frame + drop shadow (bleed matches Figma inset) */}
        <div className="pointer-events-none absolute inset-[-8.21%_-6.44%_-23.6%_-6.44%]">
          <img
            src="/assets/snap/rail-bottom-mobile.svg"
            alt=""
            aria-hidden="true"
            className="block size-full max-w-none select-none"
          />
        </div>

        {/* Arcade controls — Figma absolute positions (393:3430) */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-[2.21%] right-[71%] left-[13.46%] aspect-square">
            <img
              src="/assets/snap/joystick.png"
              alt=""
              className="absolute inset-0 size-full object-cover select-none"
            />
          </div>
          <div className="absolute top-[2.21%] right-[13.46%] left-[71%] flex aspect-square items-center justify-center">
            <img
              src="/assets/snap/joystick.png"
              alt=""
              className="size-full -scale-x-100 object-cover select-none"
            />
          </div>
          <div className="absolute top-[4.7%] right-[53.45%] left-[33.02%] aspect-square">
            <img
              src="/assets/snap/btn-red.png"
              alt=""
              className="absolute inset-0 size-full object-cover select-none"
            />
          </div>
          <div className="absolute top-[4.7%] right-[43.42%] left-[43.06%] aspect-square">
            <img
              src="/assets/snap/btn-yellow.png"
              alt=""
              className="absolute inset-0 size-full object-cover select-none"
            />
          </div>
          <div className="absolute top-[4.7%] right-[33.02%] left-[53.45%] aspect-square">
            <img
              src="/assets/snap/btn-green.png"
              alt=""
              className="absolute inset-0 size-full object-cover select-none"
            />
          </div>
        </div>

        {/* Inner shadow gradient */}
        <div
          className="pointer-events-none absolute top-[43.92%] right-[0.82%] bottom-[11.54%] left-[1.19%] bg-gradient-to-b from-black/40 to-[rgba(16,35,67,0)]"
          aria-hidden="true"
        />
      </div>

      {/* Desktop — Figma Group 1651 (baked) */}
      <img
        src="/assets/snap/group-1651.png"
        alt=""
        aria-hidden="true"
        className="hidden w-full select-none md:block"
      />
    </>
  );
}

// ── Pixel-art retro CTA button (bevelled top-light / bottom-dark borders) ──
function ArcadeButton({
  label,
  feature,
  accentColor,
  lightBorder,
  darkBorder,
  textColor,
  shadowColor,
}: {
  label: string;
  feature: string;
  accentColor: string;
  lightBorder: string;
  darkBorder: string;
  textColor: string;
  shadowColor: string;
}) {
  return (
    <PlaceholderCta
      label={label}
      feature={feature}
      className="relative shrink-0 px-5 py-2.5 font-pixelify text-[16px] font-medium leading-[1.5] transition-transform hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 md:text-[18px] md:leading-[1.4]"
      style={{
        background: accentColor,
        color: textColor,
        borderTop: `4px solid ${lightBorder}`,
        borderLeft: `4px solid ${lightBorder}`,
        borderBottom: `4px solid ${darkBorder}`,
        borderRight: `4px solid ${darkBorder}`,
        boxShadow: `3px 3px 0px 0px ${shadowColor}`,
      }}
    />
  );
}

export default function SnapAndFrame() {
  const { photobooth, dpFrame } = SNAP_FRAME;

  return (
    <section id="snap-and-frame" className="relative overflow-hidden bg-[#091725]">
      {/* ── Full background (gradient + dot-matrix + ships + sparkles, baked) ── */}
      <img
        src="/assets/snap/section-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
      />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-[1440px] px-[35px] pt-10 pb-[34px] md:px-8 md:py-24">
        {/* Heading block */}
        <div className="flex flex-col items-center gap-[26px] text-center">
          <h2 className="font-sans text-[32px] font-bold leading-[1.3] text-white md:text-[48px] md:leading-[1.2]">
            {SNAP_FRAME.title}
          </h2>
          <p className="max-w-[784px] font-sans text-[16px] font-medium leading-[1.5] text-white md:text-[24px]">
            {SNAP_FRAME.intro}
          </p>
        </div>

        {/* Rails + cards column */}
        <div className="mt-10 flex flex-col items-center gap-5 md:mt-16 md:gap-[55px]">
          <TopRail />

          {/* ── Outer cards container ── */}
          <div
            className="w-full rounded-[20px] border-[5px] border-[#ffffff] p-[30px] md:border-[3px] md:px-[60px] md:py-[60px]"
            style={{
              background:
                "linear-gradient(180deg, #0a162a 0%, #16315d 50%, #0a162a 100%)",
            }}
          >
            <div className="flex flex-col gap-[30px] md:grid md:grid-cols-2 md:gap-[60px]">
              {/* ── Photobooth Card ── */}
              <div
                className="flex flex-col items-center gap-[50px] rounded-[10px] border-2 border-[#1447e6] px-[25px] py-5 md:px-[60px] md:py-[40px]"
                style={{
                  background:
                    "linear-gradient(180deg, #0a162a 0%, #224b90 100%)",
                }}
              >
                <div className="flex w-full flex-col gap-[50px]">
                  <h3 className="font-sans text-[20px] font-bold leading-[1.4] text-white md:text-[32px] md:leading-[1.3]">
                    {`Proof you `}
                    <span className="text-[#f0b100]">showed up</span>
                    {` and `}
                    <span className="text-[#f0b100]">built something</span>
                    {`.`}
                  </h3>
                  <p className="font-sans text-[18px] font-medium leading-[1.5] text-white md:text-[24px]">
                    {`The `}
                    <span className="font-bold text-[#f0b100]">GDG Photobooth</span>
                    {` is your on-site, no-download, browser-based photo booth that is live at SparkFest 2026. Walk up, snap, and walk away with a snap that actually looks good. No more queue. Just you, your team, and a moment worth keeping.`}
                  </p>
                </div>

                <PhotoStripMockup className="h-[208px] w-auto md:h-[260px]" />

                <ArcadeButton
                  label={photobooth.cta}
                  feature="GDG PHOTOBOOTH"
                  accentColor="#f0b100"
                  lightBorder="#fff085"
                  darkBorder="#d08700"
                  textColor="#432004"
                  shadowColor="#432004"
                />
              </div>

              {/* ── DP Frame Card ── */}
              <div
                className="flex flex-col items-center gap-10 rounded-[10px] border-2 border-[#1447e6] px-[25px] py-5 md:gap-[70px] md:px-[60px] md:py-[40px]"
                style={{
                  background:
                    "linear-gradient(180deg, #0a162b 0%, #224a8e 100%)",
                }}
              >
                <div className="flex w-full flex-col gap-[38px]">
                  <h3 className="font-sans text-[20px] font-bold leading-[1.4] text-white md:text-[32px] md:leading-[1.3]">
                    <span className="text-[#00c950]">Show up</span>
                    {` before you even show up.`}
                  </h3>
                  <p className="font-sans text-[18px] font-medium leading-[1.5] text-white md:text-[24px]">
                    {`Can't wait until July 9 to show your SparkFest energy? Don't. The `}
                    <span className="font-bold text-[#00c950]">GDG DP Frame</span>
                    {` lets you drop a SparkFest 2026 frame on your profile photo right now — self-serve, browser-based, and built to go live in under a minute. Upload. Frame. Post. Let your feed know you're in.`}
                  </p>
                </div>

                <DPFrameAvatars className="h-[90px] w-full max-w-[376px] md:h-[188px]" />

                <ArcadeButton
                  label={dpFrame.cta}
                  feature="GDG DP FRAME"
                  accentColor="#00c950"
                  lightBorder="#b9f8cf"
                  darkBorder="#00a63e"
                  textColor="#032e15"
                  shadowColor="#032e15"
                />
              </div>
            </div>
          </div>

          <BottomRail />
        </div>
      </div>
    </section>
  );
}
