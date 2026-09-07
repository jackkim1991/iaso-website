/**
 * Generates the favicon set and the Open Graph card from public/logo.png.
 *
 *   npm run icons
 *
 * Run this whenever you replace the logo. Outputs are committed to the repo so
 * the production build never depends on this script.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const logoPath = path.join(publicDir, 'logo.png');

if (!(await fs.stat(logoPath).catch(() => null))) {
  console.error('public/logo.png not found — nothing to generate.');
  process.exit(1);
}

/** Square PNG of the logo on the brand off-white, at the given size. */
const square = (size) =>
  sharp(logoPath)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 0x0b, g: 0x0b, b: 0x0b, alpha: 1 },
    })
    .flatten({ background: { r: 0x0b, g: 0x0b, b: 0x0b } })
    .png()
    .toBuffer();

const favicon32 = await square(32);
await fs.writeFile(path.join(publicDir, 'favicon-32.png'), favicon32);
await fs.writeFile(path.join(publicDir, 'apple-touch-icon.png'), await square(180));

// Minimal single-image .ico container wrapping the 32x32 PNG above.
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette size
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(favicon32.length, 14);
header.writeUInt32LE(22, 18); // offset to image data
await fs.writeFile(path.join(publicDir, 'favicon.ico'), Buffer.concat([header, favicon32]));

// Open Graph / Twitter card: 1200x630, logo over the brand black.
const card = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0B0B0B"/>
  <rect x="0" y="0" width="1200" height="4" fill="#C9A227"/>
  <text x="600" y="430" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif"
        font-size="86" letter-spacing="18" fill="#F7F5F0">IASO MD</text>
  <text x="600" y="500" text-anchor="middle" font-family="Helvetica, Arial, sans-serif"
        font-size="27" letter-spacing="4" fill="#E4C97E">Korean skincare science, led by your physician.</text>
</svg>`);

await sharp(card)
  .composite([{ input: await square(190), top: 130, left: 505 }])
  .png()
  .toFile(path.join(publicDir, 'og-image.png'));

console.log('Wrote favicon.ico, favicon-32.png, apple-touch-icon.png, og-image.png');
