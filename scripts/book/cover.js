// Covers for the textbook: the full print wrap (back, spine, front, 0.125 in bleed) sized for
// KDP's white paper, and the front alone as a PNG for the e-book.
//   node scripts/book/cover.js ru   (after render.js: the spine follows book/book-<lang>.pdf's page count)
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const lang = process.argv[2] || 'ru';
const TX = {
  ru: {
    title: 'Румынский',
    sub: 'с нуля до уровня A2',
    kicker: 'Самоучитель для русскоговорящих',
    part: 'Часть 1',
    badges: ['Алфавит и чтение', '71 урок', 'Ответы', 'Словарь'],
    backTitle: 'Заговорите по-румынски с первого урока',
    back: [
      'Самоучитель для тех, кто начинает с нуля: от алфавита и правил чтения до уверенного уровня A2.',
      'Каждый урок — слова с подсказкой произношения русскими буквами, грамматика простым языком в сравнении с русским, живые диалоги и упражнения. Ответы ко всем заданиям и словарь — в конце книги.',
    ],
    list: ['Чтение и произношение с первого урока', 'Семья, кафе, город, покупки, врач, путешествия', 'Прошедшее и будущее время, «хочу», «надо», «могу»', 'Упражнения с ключами для самопроверки'],
    app: 'Слушайте произношение и проходите уроки в приложении Română — Google Play и romana-app-seven.vercel.app',
    spine: 'РУМЫНСКИЙ · с нуля до A2 · Часть 1',
  },
  ua: {
    title: 'Румунська',
    sub: 'з нуля до рівня A2',
    kicker: 'Самовчитель для україномовних',
    part: 'Частина 1',
    badges: ['Абетка й читання', '71 урок', 'Відповіді', 'Словник'],
    backTitle: 'Заговоріть румунською з першого уроку',
    back: [
      'Самовчитель для тих, хто починає з нуля: від абетки й правил читання до впевненого рівня A2.',
      'Кожен урок — слова з підказкою вимови українськими літерами, граматика простою мовою в порівнянні з українською, живі діалоги та вправи. Відповіді до всіх завдань і словник — наприкінці книжки.',
    ],
    list: ['Читання й вимова з першого уроку', 'Родина, кафе, місто, покупки, лікар, подорожі', 'Минулий і майбутній час, «хочу», «треба», «можу»', 'Вправи з ключами для самоперевірки'],
    app: 'Слухайте вимову й проходьте уроки в застосунку Română — Google Play і romana-app-seven.vercel.app',
    spine: 'РУМУНСЬКА · з нуля до A2 · Частина 1',
  },
}[lang];

const CHIPS = [
  ['Bună ziua!', -6, 8, 30],
  ['Mulțumesc', 5, 58, 24],
  ['Ce faci?', 4, 14, 52],
  ['acasă', -4, 66, 50],
  ['Te iubesc', -3, 40, 70],
  ['dor', 7, 9, 77],
];

const pdfPath = path.resolve(`book/book-${lang}.pdf`);
const pages = Number(/Pages:\s+(\d+)/.exec(execFileSync('pdfinfo', [pdfPath]).toString())[1]);
const TRIM_W = 6.69;
const TRIM_H = 9.61;
const BLEED = 0.125;
const SPINE = +(pages * 0.002252).toFixed(4); // KDP, black and white on white paper
const W = BLEED * 2 + TRIM_W * 2 + SPINE;
const H = TRIM_H + BLEED * 2;

const css = `
* { box-sizing: border-box; margin: 0; }
body { font-family: 'Nunito', sans-serif; }
.bg { background: radial-gradient(120% 80% at 70% 10%, #3557d6 0%, #1f3aa8 45%, #13246e 100%); color: #fff; position: relative; overflow: hidden; }
.flag { position: absolute; top: 0; left: 0; right: 0; height: 0.16in; display: flex; }
.flag i { flex: 1; } .flag i:nth-child(1){background:#2b4fd8} .flag i:nth-child(2){background:#f2c230} .flag i:nth-child(3){background:#d8313a}
.chip { position: absolute; background: #fff; color: #16204a; font-weight: 900; border-radius: 0.14in; padding: 0.08in 0.16in; box-shadow: 0 0.04in 0.1in rgba(0,0,0,.25); white-space: nowrap; }
.front { position: absolute; }
.kicker { font-size: 13pt; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #c9d4ff; }
.title { font-size: 64pt; font-weight: 900; line-height: 1; margin-top: 0.12in; }
.sub { font-size: 22pt; font-weight: 800; color: #f2c230; margin-top: 0.08in; }
.logo { width: 0.95in; height: 0.95in; border-radius: 0.22in; background: #fff; color: #1f3aa8; font-weight: 900; font-size: 50pt; line-height: 0.95in; text-align: center; }
.badges { display: flex; flex-wrap: wrap; gap: 0.08in; }
.badge { border: 1.5pt solid rgba(255,255,255,.55); border-radius: 0.2in; padding: 0.04in 0.14in; font-size: 11pt; font-weight: 800; }
.part { font-size: 14pt; font-weight: 900; color: #f2c230; }
.back h2 { font-size: 22pt; font-weight: 900; line-height: 1.15; margin-bottom: 0.18in; }
.back p { font-family: 'PT Serif', serif; font-size: 11.5pt; line-height: 1.45; margin-bottom: 0.12in; color: #eef1ff; }
.back ul { margin: 0.1in 0 0.2in 0.2in; padding: 0; font-size: 11.5pt; font-weight: 800; line-height: 1.7; }
.back .app { font-size: 10pt; font-weight: 700; color: #c9d4ff; }
.barcode { position: absolute; width: 2in; height: 1.2in; background: #fff; border-radius: 0.04in; }
.spine { position: absolute; top: 0; height: 100%; display: flex; align-items: center; justify-content: center; }
.spine span { transform: rotate(90deg); white-space: nowrap; font-weight: 900; font-size: 12pt; letter-spacing: .05em; }
`;

function chips(x0, y0, w, h) {
  return CHIPS.map(
    ([t, rot, x, y], i) =>
      `<div class="chip" style="left:${x0 + (x / 100) * w}in;top:${y0 + (y / 100) * h}in;transform:rotate(${rot}deg);font-size:${i % 2 ? 19 : 23}pt;opacity:${i > 3 ? 0.92 : 1}">${t}</div>`,
  ).join('');
}

/** The front panel, positioned at (x, y) inches from the page's top left. */
function front(x, y) {
  return `
  ${chips(x + 0.3, y + 3.35, TRIM_W - 2.1, 4.2)}
  <div class="front" style="left:${x + 0.6}in;top:${y + 0.85}in;width:${TRIM_W - 1.2}in">
    <div class="kicker">${TX.kicker}</div>
    <div class="title">${TX.title}</div>
    <div class="sub">${TX.sub}</div>
    <div class="badges" style="margin-top:0.35in">${TX.badges.map((b) => `<span class="badge">${b}</span>`).join('')}</div>
  </div>
  <div class="front" style="left:${x + 0.6}in;top:${y + TRIM_H - 1.55}in;display:flex;align-items:center;gap:0.2in">
    <div class="logo">Ă</div><div><div style="font-size:18pt;font-weight:900">Română</div><div class="part">${TX.part}</div></div>
  </div>`;
}

const fonts =
  '<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=PT+Serif:wght@400;700&display=swap" rel="stylesheet">';

const wrapHtml = `<!doctype html><html><head><meta charset="utf-8">${fonts}<style>${css}
@page { size: ${W}in ${H}in; margin: 0 } body { width: ${W}in; height: ${H}in; }</style></head><body>
<div class="bg" style="width:${W}in;height:${H}in">
  <div class="flag"><i></i><i></i><i></i></div>
  <div class="back front" style="left:${BLEED + 0.6}in;top:${BLEED + 0.9}in;width:${TRIM_W - 1.2}in">
    <h2>${TX.backTitle}</h2>${TX.back.map((p) => `<p>${p}</p>`).join('')}
    <ul>${TX.list.map((l) => `<li>${l}</li>`).join('')}</ul>
    <div class="app">${TX.app}</div>
  </div>
  <div class="barcode" style="left:${BLEED + TRIM_W - 0.4 - 2}in;top:${BLEED + TRIM_H - 0.4 - 1.2}in"></div>
  <div class="spine" style="left:${BLEED + TRIM_W}in;width:${SPINE}in"><span>${TX.spine}</span></div>
  ${front(BLEED + TRIM_W + SPINE, BLEED)}
</div></body></html>`;

const frontHtml = `<!doctype html><html><head><meta charset="utf-8">${fonts}<style>${css}
body { width: ${TRIM_W}in; height: ${TRIM_H}in; }</style></head><body>
<div class="bg" style="width:${TRIM_W}in;height:${TRIM_H}in"><div class="flag"><i></i><i></i><i></i></div>${front(0, 0)}</div></body></html>`;

(async () => {
  fs.writeFileSync(`book/cover-${lang}.html`, wrapHtml);
  fs.writeFileSync(`book/cover-front-${lang}.html`, frontHtml);
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + path.resolve(`book/cover-${lang}.html`), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: `book/cover-${lang}.pdf`, preferCSSPageSize: true, printBackground: true });
  const q = await b.newPage({ viewport: { width: Math.round(TRIM_W * 96), height: Math.round(TRIM_H * 96) }, deviceScaleFactor: 2.5 });
  await q.goto('file://' + path.resolve(`book/cover-front-${lang}.html`), { waitUntil: 'networkidle' });
  await q.evaluate(() => document.fonts.ready);
  await q.screenshot({ path: `book/cover-front-${lang}.png` });
  await b.close();
  console.log(`cover-${lang}: ${pages} pages, spine ${SPINE} in, wrap ${W.toFixed(3)}×${H.toFixed(3)} in`);
})();
