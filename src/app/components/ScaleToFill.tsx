"use client";

import { useEffect, useState } from "react";

/**
 * The entire SparkFest canvas is designed against a fixed 1920px-wide frame
 * (the `desktop` breakpoint). At viewports wider than that, every section caps
 * and centers, leaving large empty navy bands and a "frozen" feel when zooming
 * out on big monitors.
 *
 * ScaleToFill removes that ceiling by proportionally scaling the whole 1920
 * canvas UP to fill any viewport wider than the design width — so a 2560px
 * monitor shows the exact 1920 layout enlarged ~1.33×, with no empty bands.
 *
 * At <= the design width it is a no-op (zoom = 1, width = 100%), so all existing
 * responsive breakpoints — including every mobile/tablet tier — render exactly
 * as before.
 *
 * `zoom` is used (rather than `transform: scale`) because it reflows layout, so
 * document height, scrolling and sticky/fixed elements stay correct.
 */
const DESIGN_WIDTH = 1920;

export default function ScaleToFill({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      // clientWidth excludes the scrollbar, preventing a feedback loop / overflow.
      const w = document.documentElement.clientWidth;
      setScale(w > DESIGN_WIDTH ? w / DESIGN_WIDTH : 1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scaled = scale > 1;

  return (
    <div
      style={{
        // Lay the canvas out at the fixed design width, then zoom it to fill.
        zoom: scaled ? scale : undefined,
        width: scaled ? `${DESIGN_WIDTH}px` : "100%",
        marginInline: scaled ? "auto" : undefined,
      }}
    >
      {children}
    </div>
  );
}
