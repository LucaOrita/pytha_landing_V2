const fs = require('fs');
const path = require('path');

const COLORS = {
  darkRed: '#8a1820',
  red: '#e71b29',
  coral: '#f93a47',
  cyan: '#10a5ca',
  cyanDark: '#118ab2',
};

function blob(name, width, height, shapes) {
  const defs = shapes
    .map((s, i) => `<linearGradient id="g${i}" x1="${s.gx1 || '0%'}" y1="${s.gy1 || '0%'}" x2="${s.gx2 || '100%'}" y2="${s.gy2 || '100%'}">
      <stop offset="0%" stop-color="${s.from}" stop-opacity="${s.fromOpacity || 0.4}"/>
      <stop offset="100%" stop-color="${s.to}" stop-opacity="${s.toOpacity || 0.15}"/>
    </linearGradient>`)
    .join('\n    ');

  const elements = shapes
    .map((s, i) => `<ellipse cx="${s.cx}" cy="${s.cy}" rx="${s.rx}" ry="${s.ry}" fill="url(#g${i})" filter="url(#blur)"/>`)
    .join('\n    ');

  const blur = shapes[0].blur || 40;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="none" aria-hidden="true">
  <defs>
    ${defs}
    <filter id="blur"><feGaussianBlur stdDeviation="${blur}"/></filter>
  </defs>
  ${elements}
</svg>`;
}

const blobs = [
  {
    name: 'blob-hero.svg',
    svg: blob('hero', 800, 700, [
      { cx: 500, cy: 200, rx: 300, ry: 220, from: COLORS.darkRed, to: COLORS.coral, fromOpacity: 0.35, toOpacity: 0.15, blur: 50 },
      { cx: 350, cy: 450, rx: 250, ry: 180, from: COLORS.cyan, to: COLORS.cyanDark, fromOpacity: 0.25, toOpacity: 0.1, blur: 50 },
    ]),
  },
  {
    name: 'blob-section.svg',
    svg: blob('section', 600, 500, [
      { cx: 300, cy: 250, rx: 280, ry: 200, from: COLORS.red, to: COLORS.cyan, fromOpacity: 0.2, toOpacity: 0.1, blur: 45 },
    ]),
  },
  {
    name: 'blob-footer.svg',
    svg: blob('footer', 600, 400, [
      { cx: 450, cy: 300, rx: 300, ry: 200, from: COLORS.darkRed, to: COLORS.red, fromOpacity: 0.3, toOpacity: 0.15, blur: 40 },
      { cx: 200, cy: 150, rx: 200, ry: 150, from: COLORS.cyan, to: COLORS.cyanDark, fromOpacity: 0.2, toOpacity: 0.1, blur: 40, gx1: '100%', gx2: '0%' },
    ]),
  },
];

const outDir = path.join(__dirname, '..', 'public', 'blobs');
fs.mkdirSync(outDir, { recursive: true });

blobs.forEach(({ name, svg }) => {
  fs.writeFileSync(path.join(outDir, name), svg);
  console.log(`Generated: public/blobs/${name}`);
});

console.log('Done.');
