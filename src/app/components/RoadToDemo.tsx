import Image from "next/image";
import React from "react";
import { ROADMAP } from "./content";

const assets = {
  bgPattern: "https://www.figma.com/api/mcp/asset/3e41c6f0-2e6b-4538-bb05-80f4e96c967c",
  vectorPattern: "https://www.figma.com/api/mcp/asset/cc53c2af-8a2a-4d98-a305-5358074467a7",
  xlBlueRectangle: "/assets/road-to-demo/xl-blue-rectangle.svg",
  xlRedRectangle: "/assets/road-to-demo/xl-red-rectangle.svg",
  xlYellowRectangle: "/assets/road-to-demo/xl-yellow-rectangle.svg",
  xlGreenRectangle: "/assets/road-to-demo/xl-green-rectangle.svg",
  xlRedRight: "/assets/road-to-demo/xl-red-right.svg",
  xlYellowLeft: "/assets/road-to-demo/xl-yellow-left.svg",
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
  xlRectangleSrc,
  xlHeightClass = "xl:h-[7.79%]",
  variant,
  leftCornerBlend = "mix-blend-plus-lighter",
  largeCornerClass = "w-[12.26%] h-[52.03%]",
  smallCornerClass = "w-[4.90%] h-[26.01%]"
}: {
  index: number;
  baseClass: string;
  rectangleSrc: string;
  xlRectangleSrc: string;
  xlHeightClass?: string;
  variant: "right-large" | "left-large";
  leftCornerBlend?: string;
  largeCornerClass?: string;
  smallCornerClass?: string;
}) => {
  return (
    <div className={`absolute w-[50.93%] md:w-[54.63%] xl:w-[48.05%] h-[7.88%] md:h-[10.09%] ${xlHeightClass} ${baseClass}`}>
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none xl:hidden">
          <Image src={rectangleSrc} alt="" fill unoptimized className="object-cover" />
        </div>
        <div className="absolute inset-0 pointer-events-none hidden xl:block">
          <Image src={xlRectangleSrc} alt="" fill unoptimized className="object-cover" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <Image src={assets.vectorPattern} alt="" fill unoptimized className="object-cover mix-blend-hard-light opacity-20" />
        </div>
        {variant === "right-large" ? (
          <>
            <div className={`absolute top-0 right-0 xl:top-0 xl:right-1 pointer-events-none ${largeCornerClass}`}>
              <Image src={assets.blueTopRight} alt="" fill unoptimized className="object-cover mix-blend-plus-lighter" />
            </div>
            <div className={`absolute top-0 left-0 pointer-events-none xl:h-30 xl:w-6 ${smallCornerClass}`}>
              <Image src={assets.blueTopLeft} alt="" fill unoptimized className="object-cover mix-blend-plus-lighter" />
            </div>
          </>
        ) : (
          <>
            <div className={`absolute top-0 left-0 xl:top-1 xl:left-3 pointer-events-none ${largeCornerClass}`}>
              <Image src={assets.redTopLeft} alt="" fill unoptimized className={`object-cover ${leftCornerBlend}`} />
            </div>
            <div className={`absolute top-0 right-0 pointer-events-none xl:h-30 xl:w-6 ${smallCornerClass}`}>
              <Image src={assets.blueTopLeft} alt="" fill unoptimized className="object-cover mix-blend-plus-lighter" />
            </div>
          </>
        )}
        <div className={`relative py-[7%] text-white flex flex-col h-full ${variant === "left-large" ? "text-right items-end pr-[7%] pl-[15%] md:pl-[20%] xl:pl-[15%]" : "text-left items-start pl-[7%] pr-[15%] md:pr-[20%] xl:pr-[20%]"}`}>
          <p className="mt-[0.2%] uppercase tracking-widest text-white/85 text-[clamp(7px,2.5vw,19px)] leading-[clamp(11px,5vw,35px)] md:text-[clamp(19px,2vw,25px)] xl:text-[clamp(25px,1.5vw,35px)] xl:leading-[clamp(35px,2.5vw,45px)]">
            {ROADMAP[index].date}
          </p>
          <h3 className="mt-[2%] font-pixel text-white text-[clamp(9px,3vw,25px)] leading-[clamp(11px,4vw,27px)] md:text-[clamp(25px,2.5vw,31px)] md:leading-[clamp(27px,4.5vw,51px)] xl:text-[clamp(31px,2vw,45px)] xl:leading-[clamp(51px,4vw,65px)]">
            {ROADMAP[index].title}
          </h3>
          <p className="whitespace-pre-line mt-[2%] text-white/90 text-[clamp(7px,2.5vw,19px)] leading-[clamp(11px,5vw,35px)] md:text-[clamp(19px,2vw,25px)] xl:text-[clamp(25px,1.5vw,35px)] xl:leading-[clamp(35px,2.5vw,45px)]">
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

      {/* Main Fluid Container (Locked to Aspect Ratios) */}
      <div className="relative w-full aspect-[320/1560] md:aspect-[768/3200] xl:aspect-[1920/5300] max-w-[1920px]">

        {/* === BACKGROUND ELEMENTS === */}
        <DecAsset posClass="top-[75.83%] xl:top-[82.98%] left-1/2 -translate-x-1/2" sizeClass="w-[247.4%] h-[6.15%]" src={assets.platform1} imageClass="object-contain max-w-none" containerOpacity="opacity-40" />
        <DecAsset posClass="bottom-0 xl:-bottom-110 left-33 -translate-x-1/2" sizeClass="w-[500.4%] h-[25.15%]" src={assets.platform2} imageClass="object-contain max-w-none" containerOpacity="opacity-40" />
        <DecAsset posClass="left-[7.5%] top-[6.02%]" sizeClass="w-[37.5%] h-[7.69%]" src={assets.cloud1} />
        <DecAsset posClass="left-[-8.75%] top-[10%]" sizeClass="w-[50%] h-[10.25%]" src={assets.cloud1} />

        <div className="absolute left-1/2 top-[5%] md:top-[4.78%] -translate-x-1/2 w-[62.5%] md:w-[47.66%] flex flex-col items-center gap-[4%] text-center">
          <h4 className="text-[clamp(24px,7.5vw,64px)] leading-snug font-bold text-white text-center">
            The Road to Demo Day
          </h4>
        </div>

        {/* === DECORATIVE ELEMENTS === */}
        {/* Swarm (Dots and Crosses) */}
        <DecAsset posClass="left-[62.5%] xl:left-[85%] top-[3.84%] xl:top-[8%]" sizeClass="w-[1.25%] xl:w-[0.41%] h-[0.25%] xl:h-[0.15%] bg-white rounded-full" src={assets.whitedot} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[87.5%] xl:left-[25%] top-[7.69%] xl:top-[5%]" sizeClass="w-[2.5%] xl:w-[0.83%] h-[0.51%] xl:h-[0.3%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[10%] xl:left-[15%] top-[10.25%] xl:top-[25%]" sizeClass="w-[2.5%] xl:w-[0.83%] h-[0.51%] xl:h-[0.3%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[67.5%] xl:left-[75%] top-[26.15%] xl:top-[40%]" sizeClass="w-[1.25%] xl:w-[0.41%] h-[0.25%] xl:h-[0.15%] bg-white rounded-full" src={assets.whitedot} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[18.75%] xl:left-[90%] top-[33.33%] xl:top-[50%]" sizeClass="w-[2.5%] xl:w-[0.83%] h-[0.51%] xl:h-[0.3%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[57.5%] xl:left-[15%] top-[49.23%] xl:top-[62%]" sizeClass="w-[1.25%] xl:w-[0.41%] h-[0.25%] xl:h-[0.15%] bg-white rounded-full" src={assets.whitedot} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[91.25%] xl:left-[85%] top-[49.23%] xl:top-[72%]" sizeClass="w-[2.5%] xl:w-[0.83%] h-[0.51%] xl:h-[0.3%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[11.25%] xl:left-[20%] top-[56.41%] xl:top-[85%]" sizeClass="w-[2.5%] xl:w-[0.83%] h-[0.51%] xl:h-[0.3%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[7.5%] xl:left-[55%] top-[62.82%] xl:top-[18%]" sizeClass="w-[2.5%] xl:w-[0.83%] h-[0.51%] xl:h-[0.3%]" src={assets.cross} containerOpacity="opacity-60" />
        <DecAsset posClass="left-[90%] xl:left-[40%] top-[73.07%] xl:top-[48%]" sizeClass="w-[2.5%] xl:w-[0.83%] h-[0.51%] xl:h-[0.3%]" src={assets.cross} containerOpacity="opacity-60" />

        <DecAsset posClass="left-[68.75%] top-[65.38%]" sizeClass="w-[25%] h-[5.12%]" src={assets.cloud2} />
        <DecAsset posClass="left-[85%] top-[65.89%]" sizeClass="w-[8.75%] h-[1.79%]" src={assets.cloud3} />

        {/* Grids */}
        <DecAsset posClass="left-[7.49%] md:left-[5.46%] xl:left-[2.5%] top-[15.26%] md:top-[10.04%] xl:top-[10.07%]" sizeClass="w-[22.81%] md:w-[20.88%] xl:w-[25.5%] h-[4.4%] md:h-[4.72%] xl:h-[8.75%]" src={assets.grid5} imageClass="object-cover mix-blend-plus-lighter" />
        <DecAsset posClass="left-[68.11%] md:left-[69.73%] xl:left-[70%] top-[30.12%] md:top-[25.81%] xl:top-[26.81%]" sizeClass="w-[25%] md:w-[24.98%] xl:w-[25%] h-[1.79%] md:h-[2.00%] xl:h-[3.06%]" src={assets.grid6} imageClass="object-cover" />
        <DecAsset posClass="left-[7.22%] md:left-[5.21%] xl:left-[6%] top-[52.56%] md:top-[49.88%] xl:top-[52.53%]" sizeClass="w-[20%] md:w-[19.15%] xl:w-[25%] h-[1.53%] md:h-[1.53%] xl:h-[3.06%]" src={assets.grid7} imageClass="object-cover" />
        <DecAsset posClass="left-[73.73%] md:left-[74.50%] xl:left-[72%] top-[52.56%] md:top-[49.71%] xl:top-[55.00%]" sizeClass="w-[20%] md:w-[20.38%] xl:w-[25.5%] h-[4.10%] md:h-[4.89%] xl:h-[9.25%]" src={assets.grid3} imageClass="object-cover" />
        <DecAsset posClass="left-[21.87%] md:left-[20.32%] xl:left-[30%] top-[83.52%] md:top-[84.15%] xl:top-[90.87%]" sizeClass="w-[20%] md:w-[19.24%] xl:w-[25%] h-[1.53%] md:h-[1.52%] xl:h-[3.06%]" src={assets.grid6} imageClass="object-contain" />

        {/* Other Decorative */}
        <DecAsset posClass="left-[75.20%] md:left-[76.01%] xl:left-[74%] top-[26.62%] md:top-[22.89%] xl:top-[20.24%]" sizeClass="w-[16.63%] md:w-[15.22%] xl:w-[15.3%] h-[2.09%] md:h-[2.38%] xl:h-[3.83%]" src={assets.sideSmoke} imageClass="object-cover" />
        <DecAsset posClass="left-[75%] md:left-[75.83%] xl:left-[76.2%] top-[22.90%] md:top-[19.18%] xl:top-[14.35%]" sizeClass="w-[17.03%] md:w-[15.60%] xl:w-[10.83%] h-[4.36%] md:h-[4.68%] xl:h-[7.33%]" src={assets.rocket} imageClass="object-cover" />
        <DecAsset posClass="left-[14.17%] md:left-[11.57%] xl:left-[23.93%] top-[37.91%] md:top-[34.29%] xl:top-[43.40%]" sizeClass="w-[16.21%] md:w-[14.85%] xl:w-[9.95%] h-[3.32%] md:h-[3.56%] xl:h-[3.60%]" src={assets.cirby} imageClass="object-cover" />
        <DecAsset posClass="left-[27.5%] md:left-[25.36%] xl:left-[35.29%] top-[74.37%] md:top-[74.30%] xl:top-[78.46%]" sizeClass="w-[5.67%] md:w-[5.20%] xl:w-[5.48%] h-[9.20%] md:h-[9.85%] xl:h-[12.39%]" src={assets.ladder} imageClass="object-cover" containerOpacity="opacity-80" />
        <DecAsset posClass="left-[62.5%] md:left-[64.29%] xl:left-[65%] top-[75.33%] md:top-[74.44%] xl:top-[80.55%]" sizeClass="w-[19.23%] md:w-[17.60%] xl:w-[17%] h-[4.30%] md:h-[4.61%] xl:h-[5.47%]" src={assets.sparky} imageClass="object-cover" />
        <DecAsset posClass="hidden xl:block xl:left-[83.05%] xl:top-[28.23%]" sizeClass="xl:w-[2.55%] xl:h-[7.55%]" src={assets.xlRedRight} imageClass="object-cover" />
        <DecAsset posClass="hidden xl:block xl:left-[8.05%] xl:top-[42.35%]" sizeClass="xl:w-[2.55%] xl:h-[7.55%]" src={assets.xlYellowLeft} imageClass="object-cover" />
        <DecAsset posClass="hidden xl:block xl:left-[94.3%] xl:top-[84.67%]" sizeClass="xl:w-[2.55%] xl:h-[7.55%]" src={assets.xlRedRight} imageClass="object-cover" />

        {/* Empty Hearts (Grouped as Flex for easy gap control) */}
        <div className="absolute left-[42.38%] md:left-[48.89%] xl:left-[33.28%] top-[65.38%] md:top-[63.72%] xl:top-[68.68%] pointer-events-none flex gap-[2vw] md:gap-[1.5vw] xl:gap-[1vw]" aria-hidden>
          <div className="relative w-[4.31vw] md:w-[3vw] xl:w-[4.5vw] aspect-square"><Image src={assets.emptyHeart} alt="" fill unoptimized className="object-cover" /></div>
          <div className="relative w-[4.31vw] md:w-[3vw] xl:w-[4.5vw] aspect-square"><Image src={assets.emptyHeart} alt="" fill unoptimized className="object-cover" /></div>
          <div className="relative w-[4.31vw] md:w-[3vw] xl:w-[4.5vw] aspect-square"><Image src={assets.emptyHeart} alt="" fill unoptimized className="object-cover" /></div>
        </div>

        {/* === ROADMAP CARDS === */}
        <RoadmapCard index={0} baseClass="left-[18.77%] md:left-[15.78%] xl:left-[13.60%] top-[16.49%] md:top-[11.35%] xl:top-[14.36%]" rectangleSrc={assets.blueRectangle} xlRectangleSrc={assets.xlBlueRectangle} variant="right-large" leftCornerBlend="mix-blend-plus-lighter"
          largeCornerClass="w-[12.26%] h-[52.03%] xl:w-[8.5%] xl:h-[90.9%]" />
        <RoadmapCard index={1} baseClass="left-[42.52%] md:left-[40.38%] xl:left-[35.00%] top-[30.92%] md:top-[26.81%] xl:top-[28.45%]" rectangleSrc={assets.redRectangle} xlRectangleSrc={assets.xlRedRectangle} variant="left-large" leftCornerBlend="mix-blend-plus-lighter" largeCornerClass="w-[12.26%] h-[52.03%] xl:w-[8.5%] xl:h-[89%]" smallCornerClass="xl:!top-1 xl:!right-3" />
        <RoadmapCard index={2} baseClass="left-[7.22%] md:left-[5.21%] xl:left-[10.96%] top-[41.60%] md:top-[38.25%] xl:top-[42.54%]" rectangleSrc={assets.yellowRectangle} xlRectangleSrc={assets.xlYellowRectangle} variant="right-large" largeCornerClass="w-[12.26%] h-[52.03%] xl:w-[8.5%] xl:h-[88%] xl:top-1 xl:right-3" smallCornerClass="xl:!top-1 xl:!left-3" />
        <RoadmapCard index={3} baseClass="left-[35.78%] md:left-[34.21%] xl:left-[40.28%] top-[54.59%] md:top-[52.15%] xl:top-[56.64%]" rectangleSrc={assets.greenRectangle} xlRectangleSrc={assets.xlGreenRectangle} xlHeightClass="xl:h-[6.78%]" variant="left-large" leftCornerBlend="mix-blend-plus-lighter" largeCornerClass="w-[12.26%] h-[52.03%] xl:w-[8.1%] xl:h-[90.9%] xl:!-left-2 xl:!top-0" />
        <RoadmapCard index={4} baseClass="left-[7.5%] md:left-[5.46%] xl:left-[5.21%] top-[66.48%] md:top-[64.89%] xl:top-[70.74%]" rectangleSrc={assets.blueRectangle} xlRectangleSrc={assets.xlBlueRectangle} variant="right-large" largeCornerClass="w-[12.26%] h-[52.03%] xl:w-[8.5%] xl:h-[90.9%]" />
        <RoadmapCard index={5} baseClass="left-[41.63%] md:left-[39.57%] xl:left-[45.81%] top-[78.64%] md:top-[77.91%] xl:top-[84.83%]" rectangleSrc={assets.redRectangle} xlRectangleSrc={assets.xlRedRectangle} variant="left-large" leftCornerBlend="mix-blend-plus-lighter" largeCornerClass="w-[12.26%] h-[52.03%] xl:w-[8.5%] xl:h-[89%]" smallCornerClass="xl:!top-1 xl:!right-3" />
      </div>
    </section>
  );
}
