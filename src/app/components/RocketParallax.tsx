"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * The Road to Demo Day rocket. Lifts upward as the section scrolls into view,
 * giving a subtle "lift-off" parallax. Falls back to a static position when the
 * user prefers reduced motion.
 */
export default function RocketParallax({
  posClass,
  sizeClass,
  src,
  imageClass = "object-contain",
  trailPosClass,
  trailSizeClass,
  trailSrc,
  trailImageClass = "object-contain",
}: {
  posClass: string;
  sizeClass: string;
  src: string;
  imageClass?: string;
  trailPosClass?: string;
  trailSizeClass?: string;
  trailSrc?: string;
  trailImageClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalRange = viewportHeight + rect.height;
          const progress = (viewportHeight - rect.top) / totalRange;
          const clamped = Math.max(0, Math.min(1, progress));
          // Rises up to maxLift px as the section travels through the viewport.
          const maxLift = 90;
          setOffsetY(-clamped * maxLift);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sharedStyle = {
    transform: `translateY(${offsetY}px)`,
    transition: "transform 0.1s linear",
    willChange: "transform",
  } as const;

  return (
    <>
      {trailSrc && trailPosClass && trailSizeClass ? (
        <div
          className={`absolute pointer-events-none ${trailPosClass} ${trailSizeClass}`}
          style={sharedStyle}
          aria-hidden
        >
          <Image
            src={trailSrc}
            alt=""
            fill
            unoptimized
            className={trailImageClass}
          />
        </div>
      ) : null}
      <div
        ref={ref}
        className={`absolute pointer-events-none ${posClass} ${sizeClass}`}
        style={sharedStyle}
        aria-hidden
      >
        <Image src={src} alt="" fill unoptimized className={imageClass} />
      </div>
    </>
  );
}
