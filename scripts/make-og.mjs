import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glowTL" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(120 60) scale(760 560)">
      <stop offset="0" stop-color="#7C3AED" stop-opacity="0.38"/>
      <stop offset="1" stop-color="#7C3AED" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowBR" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1120 600) scale(680 480)">
      <stop offset="0" stop-color="#22D3EE" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#22D3EE" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0.2">
      <stop offset="0" stop-color="#7C3AED"/>
      <stop offset="0.4" stop-color="#A855F7"/>
      <stop offset="1" stop-color="#22D3EE"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#050509"/>
  <rect width="${W}" height="${H}" fill="url(#glowTL)"/>
  <rect width="${W}" height="${H}" fill="url(#glowBR)"/>
  <text x="600" y="318" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="96" font-weight="700" letter-spacing="2" fill="#F4F4F8">downloadx<tspan fill="url(#brand)">AI</tspan></text>
  <text x="600" y="392" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-size="40" font-weight="400" fill="#A7A7BC">Free Playvids Video Downloader</text>
  <text x="600" y="470" text-anchor="middle" font-family="'Consolas', 'Courier New', monospace" font-size="22" fill="#6C6C85">playvids.videodownloaderai.com</text>
</svg>`;

const logo = await sharp(join(root, "public", "logo_icon.png"))
  .resize(132, 132)
  .png()
  .toBuffer();

const out = await sharp(Buffer.from(svg))
  .composite([{ input: logo, left: Math.round((W - 132) / 2), top: 96 }])
  .png()
  .toFile(join(root, "public", "og.png"));

console.log("og.png written:", out.width, "x", out.height);
