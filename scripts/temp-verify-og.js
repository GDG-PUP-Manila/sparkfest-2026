const sharp = require("sharp");
const path = require("path");
const f = path.join(__dirname, "public/og-image.png");

async function brightRatio(region) {
  const { data, info } = await sharp(f).extract(region).raw().toBuffer({ resolveWithObject: true });
  let bright = 0, total = info.width * info.height;
  for (let i = 0; i < data.length; i += info.channels) {
    if (data[i] > 200 && data[i+1] > 200 && data[i+2] > 200) bright++;
  }
  return { pct: +(100 * bright / total).toFixed(2), region };
}

(async () => {
  // tagline band
  console.log("tagline:", JSON.stringify(await brightRatio({ left: 200, top: 478, width: 800, height: 30 })));
  // date pill text band
  console.log("datepill:", JSON.stringify(await brightRatio({ left: 360, top: 545, width: 480, height: 28 })));
  // org line band
  console.log("org:", JSON.stringify(await brightRatio({ left: 250, top: 598, width: 700, height: 22 })));
})().catch(e => { console.error(e); process.exit(1); });
