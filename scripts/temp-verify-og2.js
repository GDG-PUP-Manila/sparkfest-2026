const sharp = require("sharp");
const path = require("path");
const f = path.join(__dirname, "public/og-image.png");
(async () => {
  const r = { left: 250, top: 596, width: 700, height: 26 };
  const { data, info } = await sharp(f).extract(r).raw().toBuffer({ resolveWithObject: true });
  let orgish = 0, total = info.width * info.height;
  for (let i = 0; i < data.length; i += info.channels) {
    const R = data[i], G = data[i+1], B = data[i+2];
    // light blue-gray text ~ #9db4e0
    if (R > 120 && R < 200 && G > 150 && G < 210 && B > 195) orgish++;
  }
  console.log("org-color pixels pct:", +(100 * orgish / total).toFixed(2));
})().catch(e => { console.error(e); process.exit(1); });
