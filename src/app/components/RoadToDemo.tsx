import Image from "next/image";
import React from "react";
import { ROADMAP } from "./content";

const assets = {
  bgPattern: "https://www.figma.com/api/mcp/asset/3e41c6f0-2e6b-4538-bb05-80f4e96c967c",
  vectorPattern: "https://www.figma.com/api/mcp/asset/cc53c2af-8a2a-4d98-a305-5358074467a7",
  blueRectangle: "/assets/road-to-demo/blue-rectangle.svg",
  redRectangle: "/assets/road-to-demo/red-rectangle.svg",
  yellowRectangle: "/assets/road-to-demo/yellow-rectangle.svg",
  greenRectangle: "/assets/road-to-demo/green-rectangle.svg",
  blueTopRight: "/assets/road-to-demo/blue-top-right.svg",
  blueTopLeft: "/assets/road-to-demo/blue-left.svg",
  redTopLeft: "/assets/road-to-demo/red-top-left.svg",
  rocket: "https://www.figma.com/api/mcp/asset/c9f5380b-3c17-4954-b754-f1f6ddf3ab38",
  sideSmoke: "/assets/road-to-demo/side-smoke.svg",
  cirby: "https://www.figma.com/api/mcp/asset/674148b8-a595-426f-a1ff-e208d28eccf0",
  bluePlus: "https://www.figma.com/api/mcp/asset/1dc0dd45-bb94-4a47-b523-fbf943cc1477",
  emptyHeart: "https://www.figma.com/api/mcp/asset/4d6bdf1b-dfcd-4b99-8d66-5bdf649d8c9b",
  sparky: "https://www.figma.com/api/mcp/asset/a8e11ab5-354e-4e42-92d8-362400941212",
  ladder: "https://www.figma.com/api/mcp/asset/ee29edca-a766-4b25-aa99-f1a5354c0554",
  grid5: "/assets/road-to-demo/blue-top-left.svg",
  grid2: "https://www.figma.com/api/mcp/asset/7116c4fe-8bde-4ee2-abd7-38090e629ee8",
  grid6: "/assets/road-to-demo/grid6.svg",
  grid7: "/assets/road-to-demo/grid7.svg",
  grid3: "/assets/road-to-demo/grid3.svg",
  platform1: "/assets/road-to-demo/platform1.svg",
  platform2: "/assets/road-to-demo/platform2.svg",
  whitedot: "/assets/road-to-demo/white-dot.svg",
  cross: "/assets/road-to-demo/cross.svg",
  cloud1: "/assets/road-to-demo/cloud1.svg",
  cloud2: "/assets/road-to-demo/cloud2.svg",
  cloud3: "/assets/road-to-demo/cloud3.svg"
};

const DecAsset = ({
  posClass,
  sizeClass,
  src,
  imageClass = "object-contain",
  containerOpacity = ""
}: {
  posClass: string;
  sizeClass: string;
  src: string;
  imageClass?: string;
  containerOpacity?: string;
}) => (
  <div className={`absolute pointer-events-none ${posClass} ${sizeClass} ${containerOpacity}`} aria-hidden>
    <Image src={src} alt="" fill unoptimized className={imageClass} />
  </div>
);

const RoadmapCard = ({
  index,
  baseClass,
  rectangleSrc,
  variant,
  leftCornerBlend = "mix-blend-plus-lighter",
  largeCornerClass = "w-[12.26%] h-[52.03%]",
  smallCornerClass = "w-[4.90%] h-[26.01%]"
}: {
  index: number;
  baseClass: string;
  rectangleSrc: string;
  variant: "right-large" | "left-large";
  leftCornerBlend?: string;
  largeCornerClass?: string;
  smallCornerClass?: string;
}) => {
  return (
    <div className={`absolute w-[50.93%] h-[7.88%] ${baseClass}`}>
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={rectangleSrc} alt="" fill unoptimized className="object-cover" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <Image src={assets.vectorPattern} alt="" fill unoptimized className="object-cover mix-blend-hard-light opacity-20" />
        </div>
        {variant === "right-large" ? (
          <>
            <div className={`absolute top-0 right-0 pointer-events-none ${largeCornerClass}`}>
              <Image src={assets.blueTopRight} alt="" fill unoptimized className="object-cover mix-blend-plus-lighter" />
            </div>
            <div className={`absolute top-0 left-0 pointer-events-none ${smallCornerClass}`}>
              <Image src={assets.blueTopLeft} alt="" fill unoptimized className="object-cover mix-blend-plus-lighter" />
            </div>
          </>
        ) : (
          <>
            <div className={`absolute top-0 left-0 pointer-events-none ${largeCornerClass}`}>
              <Image src={assets.redTopLeft} alt="" fill unoptimized className={`object-cover ${leftCornerBlend}`} />
            </div>
            <div className={`absolute top-0 right-0 pointer-events-none ${smallCornerClass}`}>
              <Image src={assets.blueTopLeft} alt="" fill unoptimized className="object-cover mix-blend-plus-lighter" />
            </div>
          </>
        )}
        <div className="relative p-[5%] text-white flex flex-col h-full">
          <p className="font-pixel text-[clamp(9px,3vw,16px)] uppercase tracking-widest text-white/85">
            {ROADMAP[index].date}
          </p>
          <h3 className="mt-[2%] font-pixel text-[clamp(11px,3.5vw,20px)] leading-snug text-white">
            {ROADMAP[index].title}
          </h3>
          <p className="mt-[2%] text-[clamp(9px,2.8vw,15px)] leading-relaxed text-white/90">
            {ROADMAP[index].desc}
          </p>
        </div>
      </div>
      <div className="h-[10%] border-x-2 border-b-2 border-navy-900 bg-black-02 opacity-10" aria-hidden />
    </div>
  );
};

export default function RoadToDemo() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-panel-blue via-panel-blue-2 to-navy-900 flex justify-center">
      <div className="absolute inset-0 pointer-events-none">
        <Image src={assets.bgPattern} alt="" fill unoptimized className="object-cover opacity-100" />
      </div>

      {/* Main Fluid Container (Locked to 320:1560 Aspect Ratio) */}
      <div className="relative w-full aspect-[320/1560] max-w-[1200px]">

        {/* === BACKGROUND ELEMENTS === */}
        <DecAsset posClass="top-[75.83%] left-1/2 -translate-x-1/2" sizeClass="w-[247.4%] h-[6.15%]" src={assets.platform1} imageClass="object-contain max-w-none" containerOpacity="opacity-40" />
        <DecAsset posClass="bottom-0 left-33 -translate-x-1/2" sizeClass="w-[500.4%] h-[25.15%]" src={assets.platform2} imageClass="object-contain max-w-none" containerOpacity="opacity-40" />
        <DecAsset posClass="left-[7.5%] top-[6.02%]" sizeClass="w-[37.5%] h-[7.69%]" src={assets.cloud1} />
        <DecAsset posClass="left-[-8.75%] top-[10%]" sizeClass="w-[50%] h-[10.25%]" src={assets.cloud1} />

        <div className="absolute left-1/2 top-[5%] -translate-x-1/2 w-[62.5%] flex flex-col items-center gap-[4%] text-center">
          <h4 className="text-[clamp(24px,7.5vw,48px)] leading-snug font-bold text-white text-center">
            The Road to Demo Day
          </h4>
        </div>

        {/* === DECORATIVE ELEMENTS === */}
        {/* Swarm (Dots and Crosses) */}
        <DecAsset posClass="left-[62.5%] top-[3.84%]" sizeClass="w-[1.25%] h-[0.25%] bg-white rounded-full" src={assets.whitedot} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[87.5%] top-[7.69%]" sizeClass="w-[2.5%] h-[0.51%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[10%] top-[10.25%]" sizeClass="w-[2.5%] h-[0.51%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[67.5%] top-[26.15%]" sizeClass="w-[1.25%] h-[0.25%] bg-white rounded-full" src={assets.whitedot} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[18.75%] top-[33.33%]" sizeClass="w-[2.5%] h-[0.51%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[57.5%] top-[49.23%]" sizeClass="w-[1.25%] h-[0.25%] bg-white rounded-full" src={assets.whitedot} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[91.25%] top-[49.23%]" sizeClass="w-[2.5%] h-[0.51%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[11.25%] top-[56.41%]" sizeClass="w-[2.5%] h-[0.51%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[7.5%] top-[62.82%]" sizeClass="w-[2.5%] h-[0.51%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[90%] top-[73.07%]" sizeClass="w-[2.5%] h-[0.51%]" src={assets.cross} containerOpacity="opacity-60" />

        <DecAsset posClass="left-[68.75%] top-[65.38%]" sizeClass="w-[25%] h-[5.12%]" src={assets.cloud2} />
        <DecAsset posClass="left-[85%] top-[65.89%]" sizeClass="w-[8.75%] h-[1.79%]" src={assets.cloud3} />

        {/* Grids */}
        <DecAsset posClass="left-[7.49%] top-[15.26%]" sizeClass="w-[22.81%] h-[4.4%]" src={assets.grid5} imageClass="object-cover mix-blend-plus-lighter" />
        <DecAsset posClass="left-[68.11%] top-[30.12%]" sizeClass="w-[25%] h-[1.79%]" src={assets.grid6} imageClass="object-cover" />
        <DecAsset posClass="left-[7.22%] top-[52.56%]" sizeClass="w-[20%] h-[1.53%]" src={assets.grid7} imageClass="object-cover" />
        <DecAsset posClass="left-[73.73%] top-[52.56%]" sizeClass="w-[20%] h-[4.10%]" src={assets.grid3} imageClass="object-cover" />
        <DecAsset posClass="left-[21.87%] top-[83.52%]" sizeClass="w-[20%] h-[1.53%]" src={assets.grid6} imageClass="object-contain" />

        {/* Other Decorative */}
        <DecAsset posClass="left-[75.20%] top-[26.62%]" sizeClass="w-[16.63%] h-[2.09%]" src={assets.sideSmoke} imageClass="object-cover" />
        <DecAsset posClass="left-[75%] top-[22.90%]" sizeClass="w-[17.03%] h-[4.36%]" src={assets.rocket} imageClass="object-cover" />
        <DecAsset posClass="left-[14.17%] top-[37.91%]" sizeClass="w-[16.21%] h-[3.32%]" src={assets.cirby} imageClass="object-cover" />
        <DecAsset posClass="left-[27.5%] top-[74.37%]" sizeClass="w-[5.67%] h-[9.20%]" src={assets.ladder} imageClass="object-cover" containerOpacity="opacity-80" />
        <DecAsset posClass="left-[62.5%] top-[75.33%]" sizeClass="w-[19.23%] h-[4.30%]" src={assets.sparky} imageClass="object-cover" />

        {/* Empty Hearts (Grouped as Flex for easy gap control) */}
        <div className="absolute left-[47.38%] top-[65.38%] pointer-events-none flex gap-[2vw]" aria-hidden>
          <div className="relative w-[4.31vw] aspect-square"><Image src={assets.emptyHeart} alt="" fill unoptimized className="object-cover" /></div>
          <div className="relative w-[4.31vw] aspect-square"><Image src={assets.emptyHeart} alt="" fill unoptimized className="object-cover" /></div>
          <div className="relative w-[4.31vw] aspect-square"><Image src={assets.emptyHeart} alt="" fill unoptimized className="object-cover" /></div>
        </div>

        {/* === ROADMAP CARDS === */}
        <RoadmapCard index={0} baseClass="left-[18.77%] top-[16.49%]" rectangleSrc={assets.blueRectangle} variant="right-large" />
        <RoadmapCard index={1} baseClass="left-[42.52%] top-[30.92%]" rectangleSrc={assets.redRectangle} variant="left-large" leftCornerBlend="mix-blend-plus-lighter" />
        <RoadmapCard index={2} baseClass="left-[7.22%] top-[41.60%]" rectangleSrc={assets.yellowRectangle} variant="right-large" />
        <RoadmapCard index={3} baseClass="left-[35.78%] top-[54.59%]" rectangleSrc={assets.greenRectangle} variant="left-large" leftCornerBlend="mix-blend-plus-lighter" />
        <RoadmapCard index={4} baseClass="left-[7.5%] top-[66.48%]" rectangleSrc={assets.blueRectangle} variant="right-large" />
        <RoadmapCard index={5} baseClass="left-[41.63%] top-[78.64%]" rectangleSrc={assets.redRectangle} variant="left-large" leftCornerBlend="mix-blend-plus-lighter" />
      </div>
    </section>
  );
}
