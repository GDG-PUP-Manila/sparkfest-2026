const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const W = 1200, H = 630;
const root = __dirname;

const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a1430"/>
      <stop offset="48%" stop-color="#142a66"/>
      <stop offset="100%" stop-color="#0a162a"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="34%" r="44%">
      <stop offset="0%" stop-color="#2f7bff" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="#2f7bff" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#2f7bff" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2" fill="#57caff" fill-opacity="0.10"/>
    </pattern>
    <linearGradient id="pill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2761bf"/>
      <stop offset="100%" stop-color="#0d2b5c"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g fill="#57caff" fill-opacity="0.10">
    <rect x="60" y="40" width="70" height="70"/>
    <rect x="120" y="78" width="44" height="44"/>
    <rect x="1010" y="48" width="80" height="80"/>
    <rect x="1086" y="92" width="40" height="40"/>
    <rect x="980" y="120" width="36" height="36"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(root, "temp-og-bg.svg"), bgSvg);

const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="pill2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2761bf"/>
      <stop offset="100%" stop-color="#0d2b5c"/>
    </linearGradient>
  </defs>
  <g stroke="#57caff" stroke-opacity="0.28" stroke-width="2">
    <line x1="600" y1="612" x2="-220" y2="630"/>
    <line x1="600" y1="612" x2="300" y2="630"/>
    <line x1="600" y1="612" x2="900" y2="630"/>
    <line x1="600" y1="612" x2="1420" y2="630"/>
  </g>
  <text x="600" y="452" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="29" font-weight="700" fill="#eff6ff" letter-spacing="0.5">Igniting Innovation &#183; Building Impact &#183; Empowering Communities</text>
  <rect x="330" y="486" width="540" height="58" rx="10" fill="url(#pill2)" stroke="#ffffff" stroke-opacity="0.92" stroke-width="2"/>
  <text x="600" y="523" text-anchor="middle" font-family="'Courier New', monospace" font-size="24" font-weight="700" fill="#ffffff" letter-spacing="1">JUNE 28 &#8211; JULY 9, 2026 &#183; PUP MANILA</text>
  <text x="600" y="588" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#9db4e0" letter-spacing="0.5">Google Developer Groups on Campus &#8212; Polytechnic University of the Philippines</text>
</svg>`;

(async () => {
  const logoW = 470;
  const logo = await sharp(path.join(root, "public/assets/hero/logo.webp")).resize({ width: logoW }).toBuffer();
  const lm = await sharp(logo).metadata();
  const ufoW = 112;
  const ufo = await sharp(path.join(root, "public/assets/hero/ufo.webp")).resize({ width: ufoW }).toBuffer();
  const um = await sharp(ufo).metadata();

  const logoTop = 86;
  const logoLeft = Math.round((W - logoW) / 2);
  const ufoTop = 40;
  const ufoLeft = Math.round((W - ufoW) / 2) + 6;

  const out = path.join(root, "public/og-image.png");
  await sharp(Buffer.from(bgSvg)).png()
    .composite([
      { input: ufo, left: ufoLeft, top: ufoTop },
      { input: logo, left: logoLeft, top: logoTop },
      { input: Buffer.from(textSvg), left: 0, top: 0 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(out);

  const kb = (fs.statSync(out).size / 1024).toFixed(0);
  console.log("Wrote", out, kb + "KB | logo", lm.width + "x" + lm.height, "@", logoLeft + "," + logoTop,
    "(bottom " + (logoTop + lm.height) + ") | ufo", um.width + "x" + um.height, "@", ufoLeft + "," + ufoTop);
})().catch((e) => { console.error(e); process.exit(1); });
