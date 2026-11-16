/**
 * The printable textbook, built from the course itself: alphabet + A1 + A2 (Part 1).
 *   npx tsx scripts/book/build.ts ru|ua [pages.json]  → book/book-<lang>.html
 * scripts/book/render.js turns the HTML into a print-ready PDF (6.69×9.61 in, a KDP trim size).
 * pages.json (written by render.js) carries each lesson's page number for the contents.
 */
import fs from 'node:fs';
import path from 'node:path';

import { COURSE } from '../../src/content/course';
import { GLOSSARY } from '../../src/content/glossary';
import type { Exercise, Lang, Lesson, Word } from '../../src/content/types';
import { reading } from '../../src/engine/phrases';
import { wordsIn } from '../../src/engine/phrases';

const lang = (process.argv[2] ?? 'ru') as Lang;
const pages: Record<string, number> = process.argv[3] && fs.existsSync(process.argv[3]) ? JSON.parse(fs.readFileSync(process.argv[3], 'utf8')) : {};
const LEVELS = ['A0', 'A1', 'A2'];

const T = {
  ru: {
    title: 'Румынский',
    subtitle: 'с нуля до уровня A2',
    part: 'Часть 1 · Алфавит, A1, A2',
    series: 'Română — самоучитель для русскоговорящих',
    contents: 'Содержание',
    howTitle: 'Как заниматься по этой книге',
    how: [
      'Книга идёт от простого к сложному: сначала **алфавит и чтение**, потом уровни **A1** и **A2**. Проходите уроки по порядку — каждый опирается на предыдущие.',
      'В начале урока — **слова** с подсказкой, как их читать. Читайте вслух: румынский читается почти так, как пишется.',
      'Блок **«Грамматика»** объясняет правило простыми словами и сравнивает его с русским языком.',
      '**Упражнения** выполняйте письменно, в тетради или прямо в книге. Ответы — в конце книги, в разделе **«Ключи»**.',
      'В конце книги есть **словарь** всех слов курса.',
      'Слушать произношение, проходить уроки как игру и повторять слова можно в приложении **Română** — в Google Play и на сайте romana-app-seven.vercel.app.',
    ],
    reading: 'Чтение: подсказки «в кавычках» показывают звучание русскими буквами. Ударение в румынском чаще всего на предпоследний слог.',
    unit: 'Раздел',
    lesson: 'Урок',
    start: 'Старт',
    words: 'Слова урока',
    remember: 'Запомните',
    grammar: 'Грамматика',
    dialog: 'Диалог',
    exercises: 'Упражнения',
    exPick: 'Выберите правильный вариант.',
    exTrans: 'Переведите на русский.',
    exRead: 'Прочитайте вслух и переведите.',
    exMatch: 'Соедините слово с переводом.',
    exOrder: 'Составьте предложение из слов.',
    exWrite: 'Переведите на румынский.',
    keys: 'Ключи к упражнениям',
    dict: 'Румынско-русский словарь',
    dictNote: 'Слова даны в начальной форме; глаголы — с частицей a (a lucra — работать).',
    end: 'Продолжение — во второй части: уровни B1 и B2.',
    app: 'Слушайте произношение и повторяйте слова в приложении Română',
  },
  ua: {
    title: 'Румунська',
    subtitle: 'з нуля до рівня A2',
    part: 'Частина 1 · Абетка, A1, A2',
    series: 'Română — самовчитель для україномовних',
    contents: 'Зміст',
    howTitle: 'Як займатися за цією книжкою',
    how: [
      'Книжка йде від простого до складного: спочатку **абетка й читання**, потім рівні **A1** і **A2**. Проходьте уроки по черзі — кожен спирається на попередні.',
      'На початку уроку — **слова** з підказкою, як їх читати. Читайте вголос: румунська читається майже так, як пишеться.',
      'Блок **«Граматика»** пояснює правило простими словами й порівнює його з українською мовою.',
      '**Вправи** виконуйте письмово, у зошиті або просто в книжці. Відповіді — наприкінці книжки, у розділі **«Ключі»**.',
      'Наприкінці книжки є **словник** усіх слів курсу.',
      'Слухати вимову, проходити уроки як гру й повторювати слова можна в застосунку **Română** — у Google Play і на сайті romana-app-seven.vercel.app.',
    ],
    reading: 'Читання: підказки «в лапках» показують звучання українськими літерами. Наголос у румунській найчастіше на передостанній склад.',
    unit: 'Розділ',
    lesson: 'Урок',
    start: 'Старт',
    words: 'Слова уроку',
    remember: 'Запам’ятайте',
    grammar: 'Граматика',
    dialog: 'Діалог',
    exercises: 'Вправи',
    exPick: 'Оберіть правильний варіант.',
    exTrans: 'Перекладіть українською.',
    exRead: 'Прочитайте вголос і перекладіть.',
    exMatch: 'З’єднайте слово з перекладом.',
    exOrder: 'Складіть речення зі слів.',
    exWrite: 'Перекладіть румунською.',
    keys: 'Ключі до вправ',
    dict: 'Румунсько-український словник',
    dictNote: 'Слова подано в початковій формі; дієслова — з часткою a (a lucra — працювати).',
    end: 'Продовження — у другій частині: рівні B1 і B2.',
    app: 'Слухайте вимову й повторюйте слова в застосунку Română',
  },
}[lang];

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = (s: string) => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');

/** Seeded shuffle, so the book is the same on every build. */
function rng(seed: string) {
  let h = 2166136261;
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}
function shuffle<T>(a: T[], seed: string): T[] {
  const r = a.slice();
  const rand = rng(seed);
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}
const LETTERS = 'abcdefgh';

const say = (ro: string) => {
  const r = reading(ro, lang);
  return r ? `«${esc(r)}»` : '';
};

type Key = { n: number; text: string };

/** The printable exercises of a lesson and their answers. */
function exercisesOf(lesson: Lesson): { html: string; keys: Key[] } {
  const blocks: string[] = [];
  const keys: Key[] = [];
  const pick: string[] = [];
  const pickKeys: string[] = [];
  const trans: string[] = [];
  const transKeys: string[] = [];
  const order: string[] = [];
  const orderKeys: string[] = [];
  const write: string[] = [];
  const writeKeys: string[] = [];
  let match: Word[] | null = null;

  lesson.exercises.forEach((ex: Exercise, i) => {
    const seed = `${lesson.id}#${i}`;
    switch (ex.kind) {
      case 'pickNative': {
        const opts = shuffle([ex.correct, ...ex.wrong].map((o) => o[lang]), seed);
        pick.push(`<span class="ro">${esc(ex.q)}</span> — ${opts.map((o, k) => `<span class="opt">${LETTERS[k]}) ${esc(o)}</span>`).join(' ')}`);
        pickKeys.push(`${LETTERS[opts.indexOf(ex.correct[lang])]}`);
        break;
      }
      case 'pickRo': {
        const opts = shuffle([ex.correct, ...ex.wrong], seed);
        pick.push(`${esc(ex.q[lang])} — ${opts.map((o, k) => `<span class="opt ro">${LETTERS[k]}) ${esc(o)}</span>`).join(' ')}`);
        pickKeys.push(`${LETTERS[opts.indexOf(ex.correct)]}`);
        break;
      }
      case 'listen':
        trans.push(`<span class="ro">${esc(ex.ro)}</span><span class="line"></span>`);
        transKeys.push(esc(ex.tr[lang]));
        break;
      case 'tiles':
        order.push(shuffle(ex.words, seed).map((w) => `<span class="tile ro">${esc(w)}</span>`).join(' ') + ` <span class="q">(${esc(ex.q[lang])})</span>`);
        order[order.length - 1] += '<span class="line"></span>';
        orderKeys.push(`<span class="ro">${esc(ex.shown)}</span>`);
        break;
      case 'type':
        write.push(`${esc(ex.q[lang])}<span class="line"></span>`);
        writeKeys.push(`<span class="ro">${esc(ex.shown)}</span>`);
        break;
      case 'match':
        if (!match) match = ex.pairs;
        break;
    }
  });

  let n = 0;
  const list = (title: string, items: string[], answers: string[]) => {
    if (!items.length) return;
    n++;
    blocks.push(`<div class="ex"><div class="exT"><span class="num">${n}</span>${esc(title)}</div><ol>${items.map((x) => `<li>${x}</li>`).join('')}</ol></div>`);
    keys.push({ n, text: answers.map((a, k) => `${k + 1}) ${a}`).join('; ') });
  };
  list(T.exPick, pick, pickKeys);
  list(T.exRead, trans, transKeys);
  if (match) {
    n++;
    const m: Word[] = match;
    const right = shuffle(m.map((p) => p.tr[lang]), lesson.id + 'm');
    blocks.push(
      `<div class="ex"><div class="exT"><span class="num">${n}</span>${esc(T.exMatch)}</div><table class="match">${m
        .map((p, k) => `<tr><td class="ro">${k + 1}. ${esc(p.ro)}</td><td>${LETTERS[k]}) ${esc(right[k])}</td></tr>`)
        .join('')}</table></div>`,
    );
    keys.push({ n, text: m.map((p, k) => `${k + 1}–${LETTERS[right.indexOf(p.tr[lang])]}`).join(', ') });
  }
  list(T.exOrder, order, orderKeys);
  list(T.exWrite, write, writeKeys);
  return { html: blocks.join(''), keys };
}

function lessonHtml(lesson: Lesson, num: number): { html: string; keys: Key[] } {
  const parts: string[] = [];
  parts.push(`<section class="lesson" id="${lesson.id}"><span class="mark">§${lesson.id}§</span><div class="lhead"><span class="lnum">${T.lesson} ${num}</span><h2>${esc(lesson.title[lang])}</h2></div>`);
  // Words with their readings.
  parts.push(
    `<h3>${T.words}</h3><table class="words">${lesson.words
      .map((w) => `<tr><td class="ro">${esc(w.ro)}</td><td class="say">${say(w.ro)}</td><td>${esc(w.tr[lang])}</td></tr>`)
      .join('')}</table>`,
  );
  const notes = lesson.exercises.filter((e): e is Extract<Exercise, { kind: 'intro' }> => e.kind === 'intro');
  if (notes.length)
    parts.push(
      `<h3>${T.remember}</h3><div class="notes">${notes
        .map((e) => `<p><span class="ro">${esc(e.ro)}</span> — ${esc(e.tr[lang])}. ${rich(e.note[lang])}</p>`)
        .join('')}</div>`,
    );
  for (const tip of lesson.exercises.filter((e): e is Extract<Exercise, { kind: 'tip' }> => e.kind === 'tip')) {
    parts.push(
      `<div class="tip"><div class="tipT">${T.grammar}: <span class="ro">${esc(tip.title)}</span></div>${tip.body[lang]
        .map((p) => `<p>${rich(p)}</p>`)
        .join('')}<table class="rows">${tip.rows
        .map((r) => `<tr><td class="ro">${esc(r.ro)}</td><td>${esc(r.tr[lang])}</td></tr>`)
        .join('')}</table></div>`,
    );
  }
  for (const d of lesson.exercises.filter((e): e is Extract<Exercise, { kind: 'dialog' }> => e.kind === 'dialog')) {
    parts.push(
      `<div class="dialog"><div class="tipT">${T.dialog}: ${esc(d.title[lang])}</div><table>${d.lines
        .map((l) => `<tr><td class="who">${esc(l.who)}:</td><td class="ro">${esc(l.ro)}</td><td class="tr">${esc(l.tr[lang])}</td></tr>`)
        .join('')}</table></div>`,
    );
  }
  const ex = exercisesOf(lesson);
  if (ex.html) parts.push(`<h3>${T.exercises}</h3>${ex.html}`);
  parts.push('</section>');
  return { html: parts.join(''), keys: ex.keys };
}

// ── Assemble ───────────────────────────────────────────────────────────────
const units = COURSE.filter((u) => LEVELS.includes(u.level));
const body: string[] = [];
const toc: string[] = [];
const allKeys: { lesson: string; title: string; keys: Key[] }[] = [];
let lessonNo = 0;
let a1 = 0;
let a2 = 0;
for (const u of units) {
  const unitNo = u.level === 'A1' ? ++a1 : u.level === 'A2' ? ++a2 : 0;
  const kicker = u.level === 'A0' ? T.start : `${u.level} · ${T.unit} ${unitNo}`;
  body.push(`<section class="unit" id="unit-${u.id}"><div class="ukicker">${esc(kicker)}</div><h1>${esc(u.title[lang])}</h1><div class="uro">${esc(u.ro)}</div><ol class="ulist">${u.lessons
    .filter((l) => l.lesson)
    .map((l) => `<li>${esc(l.title[lang])}</li>`)
    .join('')}</ol></section>`);
  toc.push(`<div class="tocU">${esc(kicker)} — ${esc(u.title[lang])}</div>`);
  for (const meta of u.lessons) {
    if (!meta.lesson) continue;
    lessonNo++;
    const { html, keys } = lessonHtml(meta.lesson, lessonNo);
    body.push(html);
    allKeys.push({ lesson: `${T.lesson} ${lessonNo}`, title: meta.lesson.title[lang], keys });
    toc.push(`<div class="tocL"><span>${T.lesson} ${lessonNo}. ${esc(meta.lesson.title[lang])}</span><span class="dots"></span><span class="pg">${pages[meta.id] ?? ''}</span></div>`);
  }
}
toc.push(`<div class="tocU">${T.keys}<span class="dots"></span><span class="pg">${pages['keys'] ?? ''}</span></div>`);
toc.push(`<div class="tocU">${T.dict}<span class="dots"></span><span class="pg">${pages['dict'] ?? ''}</span></div>`);

// Keys.
const keysHtml = `<section class="keys" id="keys"><span class="mark">§keys§</span><h1>${T.keys}</h1><div class="cols">${allKeys
  .filter((k) => k.keys.length)
  .map((k) => `<div class="key"><b>${esc(k.lesson)}. ${esc(k.title)}</b>${k.keys.map((x) => `<div><span class="num s">${x.n}</span>${x.text}</div>`).join('')}</div>`)
  .join('')}</div></section>`;

// Dictionary: every word form used in these lessons, by its dictionary form.
const seen = new Map<string, [string, string]>();
const phrasesOf = (ex: Exercise): string[] => {
  switch (ex.kind) {
    case 'intro':
    case 'listen':
      return [ex.ro];
    case 'tip':
      return ex.rows.map((r) => r.ro);
    case 'pickNative':
      return [ex.q];
    case 'pickRo':
      return [ex.correct];
    case 'tiles':
    case 'type':
      return [ex.shown];
    case 'match':
      return ex.pairs.map((p) => p.ro);
    case 'dialog':
      return ex.lines.map((l) => l.ro);
  }
};
for (const u of units)
  for (const m of u.lessons)
    for (const ex of m.lesson?.exercises ?? [])
      for (const ph of phrasesOf(ex))
        for (const w of wordsIn(ph)) {
          const g = GLOSSARY[w.toLowerCase()];
          if (!g || g[1] === 'name' || g[1] === 'syl') continue;
          const base = g[0] || w.toLowerCase();
          if (seen.has(base)) continue;
          const own = GLOSSARY[base];
          const ru = own ? own[2] : g[2];
          const ua = own ? own[3] : g[3];
          seen.set(base, [ru, ua]);
        }
const dictRows = [...seen.entries()].sort((a, b) => a[0].localeCompare(b[0], 'ro'));
const dictHtml = `<section class="dict" id="dict"><span class="mark">§dict§</span><h1>${T.dict}</h1><p class="small">${T.dictNote}</p><div class="cols">${dictRows
  .map(([ro, tr]) => `<p><b class="ro">${esc(ro)}</b> — ${esc(lang === 'ru' ? tr[0] : tr[1])}</p>`)
  .join('')}</div><p class="end">${T.end}</p></section>`;

const html = `<!doctype html><html lang="${lang === 'ru' ? 'ru' : 'uk'}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
<style>${fs.readFileSync(path.join(__dirname, 'book.css'), 'utf8')}</style></head><body>
<section class="titlepage"><div class="series">${esc(T.series)}</div><div class="big">${esc(T.title)}</div><div class="sub">${esc(T.subtitle)}</div><div class="part">${esc(T.part)}</div><div class="logo">Ă</div></section>
<section class="front"><h1>${T.contents}</h1><div class="toc">${toc.join('')}</div></section>
<section class="front"><h1>${T.howTitle}</h1>${T.how.map((p) => `<p>${rich(p)}</p>`).join('')}<p class="small">${esc(T.reading)}</p></section>
${body.join('\n')}
${keysHtml}
${dictHtml}
</body></html>`;

fs.mkdirSync('book', { recursive: true });
fs.writeFileSync(`book/book-${lang}.html`, html);
console.log(`book/book-${lang}.html`, lessonNo, 'lessons,', dictRows.length, 'dictionary entries');
