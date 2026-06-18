import React from "react";

export default function BorderFrame({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      <g opacity="0.9">
        <rect
          x="9.72017e-07"
          y="22.2373"
          width="22.2372"
          height="22.2372"
          transform="rotate(-90 9.72017e-07 22.2373)"
          fill="#F4CA42"
        />
        <rect
          x="2.37842"
          y="2.46777"
          width="2.46754"
          height="19.8588"
          transform="rotate(-90 2.37842 2.46777)"
          fill="#D8A708"
        />
        <rect
          x="9.72017e-07"
          y="4.93555"
          width="2.46754"
          height="2.37837"
          transform="rotate(-90 9.72017e-07 4.93555)"
          fill="#DBB229"
        />
        <rect
          x="9.72017e-07"
          y="22.2373"
          width="2.46754"
          height="3.00333"
          transform="rotate(-90 9.72017e-07 22.2373)"
          fill="#FFE284"
        />
        <rect
          x="3.00342"
          y="21.0039"
          width="2.46754"
          height="3.00333"
          transform="rotate(-90 3.00342 21.0039)"
          fill="#FFE284"
        />
      </g>
    </svg>
  );
}
