import type { Lesson } from '../types';

/** B2 · Unit 3 · Lesson 3 — the gerund: -ând / -ind (mergând, citind, fiind, având), negative ne- (neștiind). */
export const u21l3: Lesson = {
  id: 'u21l3',
  title: { ru: 'Делая что-то', ua: 'Роблячи щось' },
  words: [
    { ro: 'mergând', tr: { ru: 'идя', ua: 'ідучи' } },
    { ro: 'citind', tr: { ru: 'читая', ua: 'читаючи' } },
    { ro: 'ascultând', tr: { ru: 'слушая', ua: 'слухаючи' } },
    { ro: 'fiind', tr: { ru: 'будучи', ua: 'будучи' } },
    { ro: 'neștiind', tr: { ru: 'не зная', ua: 'не знаючи' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mergând pe stradă, am văzut un prieten.',
      tr: { ru: 'Идя по улице, я увидел друга.', ua: 'Ідучи вулицею, я побачив друга.' },
      note: {
        ru: 'Деепричастие — на -ând или -ind: mergând ≈ «мерджынд» — идя.',
        ua: 'Дієприслівник — на -ând або -ind: mergând ≈ «мерджинд» — ідучи.',
      },
    },
    {
      kind: 'intro',
      ro: 'Învăț ascultând muzică.',
      tr: { ru: 'Я учу, слушая музыку.', ua: 'Я вчу, слухаючи музику.' },
      note: {
        ru: 'ascultând — «слушая» (a asculta).',
        ua: 'ascultând — «слухаючи» (a asculta).',
      },
    },
    {
      kind: 'intro',
      ro: 'Fiind obosit, am rămas acasă.',
      tr: { ru: 'Будучи уставшим, я остался дома.', ua: 'Бувши втомленим, я залишився вдома.' },
      note: {
        ru: 'fiind — «будучи»; часто переводят «так как»: так как я устал, остался дома.',
        ua: 'fiind — «будучи»; часто перекладають «оскільки»: оскільки я втомився, залишився вдома.',
      },
    },
    {
      kind: 'tip',
      title: '-ând, -ind',
      body: {
        ru: [
          'Большинство глаголов берут **-ând**: lucrând, mâncând, mergând, făcând, având. Глаголы на **-i** — **-ind**: citind, dormind, vorbind, venind; a fi → **fiind**.',
          'Отрицание — приставкой **ne-**: **neștiind** — не зная, **nefiind** — не будучи.',
        ],
        ua: [
          'Більшість дієслів беруть **-ând**: lucrând, mâncând, mergând, făcând, având. Дієслова на **-i** — **-ind**: citind, dormind, vorbind, venind; a fi → **fiind**.',
          'Заперечення — префіксом **ne-**: **neștiind** — не знаючи, **nefiind** — не будучи.',
        ],
      },
      rows: [
        { ro: 'lucrând', tr: { ru: 'работая', ua: 'працюючи' } },
        { ro: 'făcând', tr: { ru: 'делая', ua: 'роблячи' } },
        { ro: 'citind', tr: { ru: 'читая', ua: 'читаючи' } },
        { ro: 'dormind', tr: { ru: 'спя', ua: 'сплячи' } },
        { ro: 'având', tr: { ru: 'имея', ua: 'маючи' } },
        { ro: 'neștiind', tr: { ru: 'не зная', ua: 'не знаючи' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Идя по улице, я увидел друга.', ua: 'Ідучи вулицею, я побачив друга.' },
      correct: 'Mergând pe stradă, am văzut un prieten.',
      wrong: ['Merg pe stradă, am văzut un prieten.', 'Mergeam pe stradă, văd un prieten.', 'Mergând pe stradă, a văzut un prieten.'],
    },
    {
      kind: 'pickNative',
      q: 'Vorbind cu el, am înțeles totul.',
      correct: { ru: 'Разговаривая с ним, я всё понял.', ua: 'Розмовляючи з ним, я все зрозумів.' },
      wrong: [
        { ru: 'Я говорил с ним и ничего не понял.', ua: 'Я говорив з ним і нічого не зрозумів.' },
        { ru: 'Разговаривая с ней, я всё понял.', ua: 'Розмовляючи з нею, я все зрозумів.' },
        { ru: 'Он говорил со мной и всё понял.', ua: 'Він говорив зі мною і все зрозумів.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mergând', tr: { ru: 'идя', ua: 'ідучи' } },
        { ro: 'citind', tr: { ru: 'читая', ua: 'читаючи' } },
        { ro: 'ascultând', tr: { ru: 'слушая', ua: 'слухаючи' } },
        { ro: 'fiind', tr: { ru: 'будучи', ua: 'будучи' } },
        { ro: 'știind', tr: { ru: 'зная', ua: 'знаючи' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Învăț ascultând muzică',
      tr: { ru: 'Я учу, слушая музыку', ua: 'Я вчу, слухаючи музику' },
      wrong: ['Învăț citind cărți', 'Ascult muzică', 'Învăț cântând'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Будучи уставшим, я остался дома.', ua: 'Бувши втомленим, я залишився вдома.' },
      words: ['Fiind', 'obosit', 'am', 'rămas', 'acasă'],
      extra: ['sunt', 'rămân', 'obosită'],
      shown: 'Fiind obosit, am rămas acasă.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Не зная, где он живёт…', ua: 'Не знаючи, де він живе…' },
      correct: 'Neștiind unde locuiește…',
      wrong: ['Știind unde locuiește…', 'Nu știu unde locuiește…', 'Neștiind unde locuiesc…'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Он работает, слушая радио.', ua: 'Він працює, слухаючи радіо.' },
      words: ['Lucrează', 'ascultând', 'radioul'],
      extra: ['ascultă', 'lucrând', 'radio'],
      shown: 'Lucrează ascultând radioul.',
    },
    {
      kind: 'type',
      q: { ru: 'Читая.', ua: 'Читаючи.' },
      answers: ['Citind'],
      shown: 'Citind.',
    },
    {
      kind: 'type',
      q: { ru: 'Слушая музыку.', ua: 'Слухаючи музику.' },
      answers: ['Ascultând muzică', 'Ascultând muzica'],
      shown: 'Ascultând muzică.',
    },
  ],
};
