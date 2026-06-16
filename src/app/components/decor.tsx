import React from "react";

// Renders text with *bold* segments (single asterisks) as <strong>.
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <strong key={i} className="font-bold text-white">
            {part.slice(1, -1)}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

// Pac-man style ghost.
export function Ghost({
  color = "#57caff",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <path
        fill={color}
        d="M8 6h16v2h2v18h-2v-2h-2v2h-2v-2h-2v2h-4v-2h-2v2h-2v-2H6V8h2z"
      />
      <rect x="11" y="12" width="4" height="6" fill="#fff" />
      <rect x="17" y="12" width="4" height="6" fill="#fff" />
      <rect x="13" y="14" width="2" height="3" fill="#1e1e1e" />
      <rect x="19" y="14" width="2" height="3" fill="#1e1e1e" />
    </svg>
  );
}

// Pixel plus / sparkle.
export function PixelPlus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <rect x="6" y="2" width="4" height="12" fill="#fff" />
      <rect x="2" y="6" width="12" height="4" fill="#fff" />
    </svg>
  );
}

// Pixel question mark.
export function QMark({
  color = "#fbbc04",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 32"
      className={className}
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <path
        fill={color}
        d="M6 4h12v4h4v8h-4v4h-6v-4h4v-4H6V8H2V4h4z"
      />
      <rect x="10" y="24" width="6" height="4" fill={color} />
    </svg>
  );
}

// SPARK / FEST pixel wordmark rendered as styled text.
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`select-none leading-none ${className}`} aria-label="SparkFest">
      <span
        className="block font-pixel tracking-tight text-white"
        style={{ textShadow: "4px 4px 0 #0a1330, -2px -2px 0 #0a1330" }}
      >
        SPARK
      </span>
      <span className="block font-pixel tracking-tight">
        <span style={{ color: "#fbbc04", textShadow: "3px 3px 0 #0a1330" }}>F</span>
        <span style={{ color: "#4285f4", textShadow: "3px 3px 0 #0a1330" }}>E</span>
        <span style={{ color: "#34a853", textShadow: "3px 3px 0 #0a1330" }}>S</span>
        <span style={{ color: "#ea4335", textShadow: "3px 3px 0 #0a1330" }}>T</span>
      </span>
    </div>
  );
}

// Small GDG-style four-color logo mark.
export function SparkLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M16 2l4 8-4 6-4-6z" fill="#4285f4" />
      <path d="M30 16l-8 4-6-4 6-4z" fill="#ea4335" />
      <path d="M16 30l-4-8 4-6 4 6z" fill="#34a853" />
      <path d="M2 16l8-4 6 4-6 4z" fill="#fbbc04" />
    </svg>
  );
}
