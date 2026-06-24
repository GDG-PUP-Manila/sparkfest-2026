const sharp = require("sharp");
const path = require("path");
const files = [
  "public/assets/hero/logo.webp",
  "public/assets/nav/sparkfest-mascot.png",
  "public/assets/hero/sparky.webp",
  "public/assets/hero/ufo.webp",
];
(async () => {
  for (const f of files) {
    try {
      const m = await sharp(path.join(__dirname, f)).metadata();
      console.log(f, "->", m.width + "x" + m.height, m.format, "alpha=" + m.hasAlpha);
    } catch (e) {
      console.log(f, "-> MISSING/err", e.message);
    }
  }
})();
