// Renders every app icon and the splash image into assets/ from one vector glyph (Ă).
// Run: NODE_PATH=$(npm root -g) node scripts/render-icons.js   (needs Playwright + Chromium)
const { chromium } = require('playwright');
const path = require('path');
const BLUE = '#2446A8', BLUE_LIGHT = '#3558C4', OCHRE = '#F2B53C';
// The glyph: a chunky rounded «A» with an ochre breve — «Ă», the most Romanian letter.
const glyph = (a = '#FFFFFF', breve = OCHRE) => `
  <path d="M 300 790 L 512 332 L 724 790" fill="none" stroke="${a}" stroke-width="124" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 398 622 L 626 622" fill="none" stroke="${a}" stroke-width="104" stroke-linecap="round"/>
  <path d="M 404 150 Q 512 262 620 150" fill="none" stroke="${breve}" stroke-width="74" stroke-linecap="round"/>`;
const bg = `<defs><radialGradient id="g" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="${BLUE_LIGHT}"/><stop offset="1" stop-color="${BLUE}"/></radialGradient></defs><rect width="1024" height="1024" fill="url(#g)"/>`;
const scaled = (inner, k) => `<g transform="translate(512 512) scale(${k}) translate(-512 -500)">${inner}</g>`;
const files = {
  'icon.png':                     { size: 1024, svg: bg + scaled(glyph(), 0.82) },
  'android-icon-background.png':  { size: 1024, svg: `<rect width="1024" height="1024" fill="${BLUE}"/>` },
  'android-icon-foreground.png':  { size: 1024, svg: scaled(glyph(), 0.6), transparent: true },
  'android-icon-monochrome.png':  { size: 1024, svg: scaled(glyph('#FFFFFF', '#FFFFFF'), 0.6), transparent: true },
  'splash-icon.png':              { size: 1024, svg: scaled(glyph(), 0.9), transparent: true },
  'favicon.png':                  { size: 48,   svg: bg + scaled(glyph(), 0.82) },
};
(async () => {
  const b = await chromium.launch();
  for (const [name, f] of Object.entries(files)) {
    const p = await b.newPage({ viewport: { width: f.size, height: f.size } });
    await p.setContent(`<html><body style="margin:0;background:transparent"><svg xmlns="http://www.w3.org/2000/svg" width="${f.size}" height="${f.size}" viewBox="0 0 1024 1024">${f.svg}</svg></body></html>`);
    await p.screenshot({ path: path.join(__dirname, '..', 'assets', name), omitBackground: !!f.transparent });
    await p.close();
  }
  // Android launchers crop the adaptive icon to a circle: preview the foreground on the background, masked.
  const p = await b.newPage({ viewport: { width: 512, height: 512 } });
  await p.setContent(`<html><body style="margin:0;background:#888"><svg width="512" height="512" viewBox="0 0 1024 1024"><clipPath id="c"><circle cx="512" cy="512" r="512"/></clipPath><g clip-path="url(#c)"><rect width="1024" height="1024" fill="${BLUE}"/>${scaled(glyph(), 0.6)}</g></svg></body></html>`);
  await p.screenshot({ path: path.join(__dirname, 'android-circle-preview.png') });
  await b.close();
})();
