import Image from "next/image";

/*
 * Standalone lightning overlay that bridges the Hero and the About ("Build the
 * Spark") sections. It is rendered as an absolutely-positioned layer pinned to
 * the Hero/About seam (bottom-0 of the Hero wrapper) so it is decoupled from
 * either section's content flow.
 *
 * The bolts live inside the SAME frame the Hero uses (full width, capped at
 * 1920px and centred). Positions are expressed purely in percentages of that
 * frame so the strikes stay locked to the Hero's baked bolt exits at every
 * breakpoint — instead of drifting on wide screens like the previous per-bolt
 * `max-w` cap did.
 */
export default function HeroLightning() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-0 w-full max-w-480 -translate-x-1/2"
    >
      {/* Left bolt — strikes from the Hero floor into the skyline (left side) */}
      <div
        className="absolute top-0 left-0 aspect-1458/903 w-[40%] animate-thunder"
        style={{ animationDelay: "0.11s" }}
      >
        <Image
          src="/assets/about/thunder-left.webp"
          alt=""
          fill
          className="object-contain object-top-left pixelated"
        />
      </div>

      {/* Right bolt — strikes from the Hero floor into the skyline (right side) */}
      <div
        className="absolute top-0 left-[61.31%] aspect-1458/903 w-[40%] animate-thunder"
        style={{ animationDelay: "0.11s" }}
      >
        <Image
          src="/assets/about/thunder-right.webp"
          alt=""
          fill
          className="object-contain object-top-right pixelated"
        />
      </div>
    </div>
  );
}
