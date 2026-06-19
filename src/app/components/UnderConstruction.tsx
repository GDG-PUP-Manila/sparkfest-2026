import Image from "next/image";

export default function UnderConstruction() {
  return (
    <main
      id="top"
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[#050a1f] px-5 py-10"
    >
      <h1 className="sr-only">
        SparkFest 2026 — Under construction. The devs are still building this
        site.
      </h1>

      {/* Nav — Figma 615:12095 (mascot) + 615:12096 (wordmark) */}
      <header className="absolute inset-x-0 top-0 flex items-center px-6 pt-6 md:px-10 md:pt-8">
        <a
          href="#top"
          className="flex h-12 items-center gap-[5px]"
          aria-label="SparkFest 2026"
        >
          <Image
            src="/assets/nav/sparkfest-mascot.png"
            alt=""
            width={120}
            height={96}
            priority
            className="h-12 w-[60px] shrink-0 select-none object-contain"
          />
          <Image
            src="/assets/nav/sparkfest-wordmark.png"
            alt=""
            width={278}
            height={96}
            priority
            className="h-12 w-[139px] shrink-0 select-none object-contain"
          />
        </a>
      </header>

      <div
        className="w-full max-w-[360px] border-x-[5px] border-b-[5px] border-t-[22px] border-solid border-[#2b7fff] bg-[#0a162a] px-5 py-8 text-center md:max-w-[420px] md:px-8 md:py-10"
        style={{
          boxShadow: "0 8px 0 0 #1447e6, 0 0 48px rgba(43,127,255,0.15)",
        }}
      >
        <div className="mx-auto mb-5 flex max-w-[200px] justify-center md:max-w-[220px]">
          <Image
            src="/assets/under-construction/sparkypoints-cirby-denied.png"
            alt=""
            width={440}
            height={440}
            priority
            className="h-auto w-full select-none mix-blend-screen"
          />
        </div>

        <p
          className="mb-3 font-pixelify text-base font-medium leading-snug text-google-yellow-500 md:text-lg"
          style={{ textShadow: "0 2px 0 #432004" }}
        >
          Under construction muna — sandali lang!
        </p>

        <p className="mb-4 font-sans text-lg font-bold leading-snug text-white md:text-xl">
          The devs are still building this site.
        </p>

        <p className="font-pixelify text-sm font-medium leading-relaxed text-[#eff6ff]/85">
          Sparkfest 2026 — launching soon
        </p>
      </div>
    </main>
  );
}
