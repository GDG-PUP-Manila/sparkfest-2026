import React from "react";
import BorderFrame from "./BorderFrame";

export default function SectionBorder() {
  return (
    <div className="hidden lg:block">
      {/* left */}
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-9 transform -rotate-90" />
      <BorderFrame className="pointer-events-none absolute top-30 left-9" />
      <BorderFrame className="pointer-events-none absolute top-50 left-9 transform rotate-90" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-90 left-9 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-110 left-9 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-130 left-9 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-150 left-9 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-170 left-9 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-190 left-9 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-9 transform rotate-180" />

      {/* bottom left */}
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-30 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-50 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-70 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-90 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-110 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-130 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-210 left-130 transform rotate-180" />

      {/* bottom right */}
      <BorderFrame className="pointer-events-none absolute bottom-0 top-210 left-210 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-210 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-230 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-250 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-270 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-290 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-310 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-200 left-322 transform rotate-180" />

      {/* right */}
      <BorderFrame className="pointer-events-none absolute bottom-0 top-170 left-322 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-150 left-322 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-130 left-322 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-110 left-322 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-90 left-322 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-70 left-322 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-50 left-322 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-30 left-322 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-322 transform rotate-180" />

      {/* top */}
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-290 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-270 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-250 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-230 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-210 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-11 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-90 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-70 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-50 transform rotate-180" />
      <BorderFrame className="pointer-events-none absolute bottom-0 top-10 left-30 transform rotate-180" />
    </div>
  );
}
