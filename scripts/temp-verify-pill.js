const sharp = require("sharp");
const path = require("path");
const f = path.join(__dirname, "public/og-image.png");
(async () => {
  // full-width band across the date row
  const r = { left: 0, top: 538, width: 1200, height: 40 };
  const { data, info } = await sharp(f).extract(r).raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, maxX = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * info.channels;
      if (data[i] > 220 && data[i+1] > 220 && data[i+2] > 220) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }
  console.log("white date-text x-range:", minX, "to", maxX, "(pill inner ~282..918)");
})().catch(e => { console.error(e); process.exit(1); });
