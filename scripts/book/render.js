// Prints book/book-<lang>.html to book/book-<lang>.pdf, then finds each lesson's page for the contents.
//   node scripts/book/render.js ru   (run build.ts first; run both twice for page numbers)
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
(async () => {
  const lang = process.argv[2] || 'ru';
  const html = path.resolve(`book/book-${lang}.html`);
  const pdf = path.resolve(`book/book-${lang}.pdf`);
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + html, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({
    path: pdf,
    preferCSSPageSize: true,
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate:
      '<div style="width:100%;text-align:center;font:600 8pt Nunito,sans-serif;color:#5a6385"><span class="pageNumber"></span></div>',
  });
  await b.close();
  const n = Number(/Pages:\s+(\d+)/.exec(execFileSync('pdfinfo', [pdf]).toString())[1]);
  const pages = {};
  for (let i = 1; i <= n; i++) {
    const txt = execFileSync('pdftotext', ['-f', String(i), '-l', String(i), pdf, '-']).toString();
    for (const m of txt.matchAll(/§([a-z0-9]+)§/g)) if (!(m[1] in pages)) pages[m[1]] = i;
  }
  fs.writeFileSync(`book/pages-${lang}.json`, JSON.stringify(pages));
  console.log(pdf, n, 'pages');
})();
