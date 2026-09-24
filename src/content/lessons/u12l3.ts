import type { Lesson } from '../types';

/** A2 · Unit 6 · Lesson 3 — object pronouns: îl, o, îi, le, te; l-am văzut, am văzut-o; pe before people; a aștepta. */
export const u12l3: Lesson = {
  id: 'u12l3',
  title: { ru: 'Я его видел', ua: 'Я його бачив' },
  words: [
    { ro: 'îl · o', tr: { ru: 'его · её', ua: 'його · її' } },
    { ro: 'Îl văd pe Andrei.', tr: { ru: 'Я вижу Андрея.', ua: 'Я бачу Андрія.' } },
    { ro: 'L-am văzut.', tr: { ru: 'Я его видел(а).', ua: 'Я його бачив(ла).' } },
    { ro: 'Am văzut-o.', tr: { ru: 'Я её видел(а).', ua: 'Я її бачив(ла).' } },
    { ro: 'Te aștept.', tr: { ru: 'Я тебя жду.', ua: 'Я тебе чекаю.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Îl văd pe Andrei.',
      tr: { ru: 'Я вижу Андрея.', ua: 'Я бачу Андрія.' },
      note: {
        ru: 'îl ≈ «ыл» — «его». Если дальше названо лицо, перед ним ставят pe, а îl остаётся: дословно «его вижу Андрея». Это снова удвоение, как îi dau lui Andrei.',
        ua: 'îl ≈ «ил» — «його». Якщо далі названо особу, перед нею ставлять pe, а îl лишається: дослівно «його бачу Андрія». Це знову подвоєння, як îi dau lui Andrei.',
      },
    },
    {
      kind: 'intro',
      ro: 'Te aștept la gară.',
      tr: { ru: 'Я жду тебя на вокзале.', ua: 'Я чекаю на тебе на вокзалі.' },
      note: {
        ru: 'a aștepta — ждать: aștept ≈ «аштепт». te — «тебя», стоит перед глаголом.',
        ua: 'a aștepta — чекати: aștept ≈ «аштепт». te — «тебе», стоїть перед дієсловом.',
      },
    },
    {
      kind: 'intro',
      ro: 'L-am văzut ieri.',
      tr: { ru: 'Я его видел(а) вчера.', ua: 'Я його бачив(ла) вчора.' },
      note: {
        ru: 'В прошедшем îl сжимается: îl + am = l-am ≈ «лам». А «её» уходит в конец: am văzut-o ≈ «ам вэзуто».',
        ua: 'У минулому îl стискається: îl + am = l-am ≈ «лам». А «її» йде в кінець: am văzut-o ≈ «ам везуто».',
      },
    },
    {
      kind: 'tip',
      title: 'Îl, o, îi, le',
      body: {
        ru: [
          '«Кого» стоит перед глаголом: **mă** (меня), **te** (тебя), **îl** (его), **o** (её), **îi** (их, м.), **le** (их, ж.).',
          'В прошедшем: **l-am văzut** (его), **am văzut-o** (её), **i-am văzut** (их), **le-am văzut** (их, ж.). Отрицание: **nu l-am văzut**, **n-am văzut-o**.',
          'Про людей добавляют **pe** + имя: **O aștept pe Ana** — Я жду Анну.',
        ],
        ua: [
          '«Кого» стоїть перед дієсловом: **mă** (мене), **te** (тебе), **îl** (його), **o** (її), **îi** (їх, ч.), **le** (їх, ж.).',
          'У минулому: **l-am văzut** (його), **am văzut-o** (її), **i-am văzut** (їх), **le-am văzut** (їх, ж.). Заперечення: **nu l-am văzut**, **n-am văzut-o**.',
          'Про людей додають **pe** + ім’я: **O aștept pe Ana** — Я чекаю на Анну.',
        ],
      },
      rows: [
        { ro: 'Îl văd.', tr: { ru: 'Я его вижу. · «ыл вэд»', ua: 'Я його бачу. · «ил вед»' } },
        { ro: 'O văd.', tr: { ru: 'Я её вижу. · «о вэд»', ua: 'Я її бачу. · «о вед»' } },
        { ro: 'L-am văzut.', tr: { ru: 'Я его видел. · «лам вэзут»', ua: 'Я його бачив. · «лам везут»' } },
        { ro: 'Am văzut-o.', tr: { ru: 'Я её видел. · «ам вэзуто»', ua: 'Я її бачив. · «ам везуто»' } },
        { ro: 'Te aștept.', tr: { ru: 'Я тебя жду. · «те аштепт»', ua: 'Я тебе чекаю. · «те аштепт»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я его вижу.', ua: 'Я його бачу.' },
      correct: 'Îl văd.',
      wrong: ['O văd.', 'Te văd.', 'L-am văzut.'],
    },
    {
      kind: 'pickNative',
      q: 'Am văzut-o ieri.',
      correct: { ru: 'Я видел её вчера.', ua: 'Я бачив її вчора.' },
      wrong: [
        { ru: 'Я видел его вчера.', ua: 'Я бачив його вчора.' },
        { ru: 'Я увижу её завтра.', ua: 'Я побачу її завтра.' },
        { ru: 'Она видела меня вчера.', ua: 'Вона бачила мене вчора.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'îl', tr: { ru: 'его', ua: 'його' } },
        { ro: 'o', tr: { ru: 'её', ua: 'її' } },
        { ro: 'te', tr: { ru: 'тебя', ua: 'тебе' } },
        { ro: 'l-am văzut', tr: { ru: 'я его видел', ua: 'я його бачив' } },
        { ro: 'te aștept', tr: { ru: 'я тебя жду', ua: 'я тебе чекаю' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Te aștept la gară',
      tr: { ru: 'Я жду тебя на вокзале', ua: 'Я чекаю на тебе на вокзалі' },
      wrong: ['Te aștept la hotel', 'Îl aștept la gară', 'O aștept la gară'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я жду Иона.', ua: 'Я чекаю на Іона.' },
      words: ['Îl', 'aștept', 'pe', 'Ion'],
      extra: ['o', 'la', 'lui'],
      shown: 'Îl aștept pe Ion.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я её не видел.', ua: 'Я її не бачив.' },
      correct: 'N-am văzut-o.',
      wrong: ['Nu l-am văzut.', 'Am văzut-o.', 'Nu o văd.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я видел его вчера.', ua: 'Я бачив його вчора.' },
      words: ['L-am', 'văzut', 'ieri'],
      extra: ['am', 'văzut-o', 'azi'],
      shown: 'L-am văzut ieri.',
      also: ['Ieri l-am văzut'],
    },
    {
      kind: 'type',
      q: { ru: 'Я тебя жду.', ua: 'Я тебе чекаю.' },
      answers: ['Te aștept', 'Eu te aștept'],
      shown: 'Te aștept.',
    },
    {
      kind: 'type',
      q: { ru: 'Я его видел(а).', ua: 'Я його бачив(ла).' },
      answers: ['L-am văzut', 'Eu l-am văzut'],
      shown: 'L-am văzut.',
    },
  ],
};
