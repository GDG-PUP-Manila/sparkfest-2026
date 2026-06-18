import Image from "next/image";

export default function WhereAndWhenWall() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Top Left */}
      <Image
        src="/assets/where-and-when/ul.webp"
        alt="top left wall"
        width={64}
        height={64}
        className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16"
      />
      {/* Top Center */}
      <Image
        src="/assets/where-and-when/uc.webp"
        alt="top center wall"
        width={64}
        height={64}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16"
      />
      {/* Top Right */}
      <Image
        src="/assets/where-and-when/ur.webp"
        alt="top right wall"
        width={64}
        height={64}
        className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16"
      />
      {/* Right side */}
      <Image
        src="/assets/where-and-when/r.webp"
        alt="right wall"
        width={64}
        height={64}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16"
      />
      {/* Bottom Right */}
      <Image
        src="/assets/where-and-when/br.webp"
        alt="bottom right wall"
        width={64}
        height={64}
        className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16"
      />
      {/* Bottom Center */}
      <Image
        src="/assets/where-and-when/bc.webp"
        alt="bottom center wall"
        width={64}
        height={64}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16"
      />
      {/* Bottom Left */}
      <Image
        src="/assets/where-and-when/bl.webp"
        alt="bottom left wall"
        width={64}
        height={64}
        className="absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16"
      />
      {/* Left side */}
      <Image
        src="/assets/where-and-when/l.webp"
        alt="left wall"
        width={64}
        height={64}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16"
      />
    </div>
  );
}
