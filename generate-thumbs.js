const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(__dirname, 'public', 'img', 'boardmember25');
const outDir = path.join(srcDir, 'small');

if (!fs.existsSync(srcDir)) {
  console.error('Source directory not found:', srcDir);
  process.exit(1);
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f));

(async () => {
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const outPath = path.join(outDir, file);

    // skip if the output already exists and is newer
    try {
      const sStat = fs.statSync(srcPath);
      let skip = false;
      if (fs.existsSync(outPath)) {
        const oStat = fs.statSync(outPath);
        if (oStat.mtimeMs >= sStat.mtimeMs) skip = true;
      }
      if (skip) continue;
    } catch (e) {}

    try {
      await sharp(srcPath)
        .resize({ width: 600 })
        .jpeg({ quality: 65 })
        .toFile(outPath);
      console.log('Written', outPath);
    } catch (err) {
      // try png output for png sources
      try {
        await sharp(srcPath)
          .resize({ width: 600 })
          .png({ quality: 65 })
          .toFile(outPath);
        console.log('Written', outPath);
      } catch (err2) {
        console.error('Failed to process', srcPath, err2.message || err2);
      }
    }
  }
  console.log('Thumbnails generation complete');
})();
