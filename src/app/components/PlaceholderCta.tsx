"use client";

import React, { useState } from "react";

// A CTA whose destination URL is not live yet. On click it surfaces a
// dismissible toast instead of navigating (per PRD-F4 / PRD-F5).
export default function PlaceholderCta({
  label,
  feature,
  className = "",
}: {
  label: string;
  feature: string;
  className?: string;
}) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 6000);
  };

  return (
    <>
      <button type="button" onClick={handleClick} className={className}>
        {label}
      </button>

      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-[100] w-[min(92vw,420px)] -translate-x-1/2 border-2 border-grid-cyan bg-navy-800 p-4 text-sm shadow-[0_0_24px_rgba(87,202,255,0.5)]"
        >
          <div className="flex items-start justify-between gap-3">
            <p className="font-medium text-white">
              <span className="font-pixel text-[11px] text-google-yellow-500">
                {feature}
              </span>
              <span className="mt-2 block text-white/80">
                Coming soon — this experience goes live during SparkFest 2026.
              </span>
            </p>
            <button
              type="button"
              onClick={() => setShowToast(false)}
              aria-label="Dismiss"
              className="shrink-0 border border-grid-cyan/60 px-2 text-grid-cyan hover:bg-grid-cyan hover:text-navy-900"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
