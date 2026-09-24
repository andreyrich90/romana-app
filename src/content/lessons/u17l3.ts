import type { Lesson } from '../types';

/** B1 · Unit 5 · Lesson 3 — reported questions: m-a întrebat dacă…, m-a întrebat unde…, pot să vă întreb ceva? */
export const u17l3: Lesson = {
  id: 'u17l3',
  title: { ru: 'Он спросил', ua: 'Він запитав' },
  words: [
    { ro: 'm-a întrebat', tr: { ru: 'он (она) спросил(а) меня', ua: 'він (вона) запитав(ла) мене' } },
    { ro: 'dacă', tr: { ru: 'ли (в косвенном вопросе)', ua: 'чи (у непрямому питанні)' } },
    { ro: 'l-am întrebat', tr: { ru: 'я спросил(а) его', ua: 'я запитав(ла) його' } },
    { ro: 'cineva', tr: { ru: 'кто-то, кто-нибудь', ua: 'хтось' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'M-a întrebat dacă vreau cafea.',
      tr: { ru: 'Он спросил, хочу ли я кофе.', ua: 'Він запитав, чи хочу я кави.' },
      note: {
        ru: 'm-a = mă + a: «меня … он». «Ли» — dacă: m-a întrebat dacă… Спрашивают кого, как в русском.',
        ua: 'm-a = mă + a: «мене … він». «Чи» — dacă: m-a întrebat dacă… Питають кого, як в українській.',
      },
    },
    {
      kind: 'intro',
      ro: 'M-a întrebat unde locuiesc.',
      tr: { ru: 'Он спросил, где я живу.', ua: 'Він запитав, де я живу.' },
      note: {
        ru: 'С вопросительным словом — как в русском: unde, când, de ce, cât.',
        ua: 'З питальним словом — як в українській: unde, când, de ce, cât.',
      },
    },
    {
      kind: 'intro',
      ro: 'Pot să vă întreb ceva?',
      tr: { ru: 'Можно вас кое о чём спросить?', ua: 'Можна вас дещо запитати?' },
      note: {
        ru: 'a întreba ≈ «ынтреба» — спрашивать. vă — «вас».',
        ua: 'a întreba ≈ «интреба» — питати. vă — «вас».',
      },
    },
    {
      kind: 'tip',
      title: 'M-a întrebat dacă…',
      body: {
        ru: [
          'Спросили кого — **mă, te, îl, o…**: **m-a întrebat** (меня спросил), **te-a întrebat** (тебя), **l-am întrebat** (я его спросил), **am întrebat-o** (я её спросил).',
          '«Ли» — **dacă**: **m-a întrebat dacă sunt liber** — спросил, свободен ли я. Иначе — вопросительное слово: **unde, când, de ce, cât**.',
        ],
        ua: [
          'Запитали кого — **mă, te, îl, o…**: **m-a întrebat** (мене запитав), **te-a întrebat** (тебе), **l-am întrebat** (я його запитав), **am întrebat-o** (я її запитав).',
          '«Чи» — **dacă**: **m-a întrebat dacă sunt liber** — запитав, чи я вільний. Інакше — питальне слово: **unde, când, de ce, cât**.',
        ],
      },
      rows: [
        { ro: 'M-a întrebat dacă vin.', tr: { ru: 'Он спросил, приду ли я.', ua: 'Він запитав, чи я прийду.' } },
        { ro: 'Te-a întrebat cineva?', tr: { ru: 'Тебя кто-нибудь спрашивал?', ua: 'Тебе хтось питав?' } },
        { ro: 'L-am întrebat cât costă.', tr: { ru: 'Я спросил его, сколько стоит.', ua: 'Я запитав його, скільки коштує.' } },
        { ro: 'Pot să vă întreb ceva?', tr: { ru: 'Можно вас спросить?', ua: 'Можна вас запитати?' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Он спросил, хочу ли я кофе.', ua: 'Він запитав, чи хочу я кави.' },
      correct: 'M-a întrebat dacă vreau cafea.',
      wrong: ['M-a întrebat că vreau cafea.', 'L-am întrebat dacă vrea cafea.', 'M-a întrebat dacă vrei cafea.'],
    },
    {
      kind: 'pickNative',
      q: 'L-am întrebat unde e gara.',
      correct: { ru: 'Я спросил его, где вокзал.', ua: 'Я запитав його, де вокзал.' },
      wrong: [
        { ru: 'Он спросил меня, где вокзал.', ua: 'Він запитав мене, де вокзал.' },
        { ru: 'Я спросил её, где вокзал.', ua: 'Я запитав її, де вокзал.' },
        { ru: 'Я сказал ему, где вокзал.', ua: 'Я сказав йому, де вокзал.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'm-a întrebat', tr: { ru: 'меня спросил', ua: 'мене запитав' } },
        { ro: 'l-am întrebat', tr: { ru: 'я его спросил', ua: 'я його запитав' } },
        { ro: 'dacă', tr: { ru: 'ли', ua: 'чи' } },
        { ro: 'întreb', tr: { ru: 'спрашиваю', ua: 'питаю' } },
        { ro: 'cineva', tr: { ru: 'кто-нибудь', ua: 'хтось' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'M-a întrebat unde locuiesc',
      tr: { ru: 'Он спросил, где я живу', ua: 'Він запитав, де я живу' },
      wrong: ['M-a întrebat unde lucrez', 'L-am întrebat unde locuiește', 'M-a întrebat când plec'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Можно вас кое о чём спросить?', ua: 'Можна вас дещо запитати?' },
      words: ['Pot', 'să', 'vă', 'întreb', 'ceva'],
      extra: ['te', 'întrebat', 'cineva'],
      shown: 'Pot să vă întreb ceva?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Она спросила, свободен ли я.', ua: 'Вона запитала, чи я вільний.' },
      correct: 'M-a întrebat dacă sunt liber.',
      wrong: ['M-a întrebat că sunt liber.', 'Am întrebat-o dacă e liberă.', 'M-a întrebat dacă ești liber.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я спросил, сколько стоит.', ua: 'Я запитав, скільки коштує.' },
      words: ['Am', 'întrebat', 'cât', 'costă'],
      extra: ['m-a', 'când', 'costa'],
      shown: 'Am întrebat cât costă.',
    },
    {
      kind: 'type',
      q: { ru: 'Он спросил, где я живу.', ua: 'Він запитав, де я живу.' },
      answers: ['M-a întrebat unde locuiesc', 'M-a întrebat unde stau'],
      shown: 'M-a întrebat unde locuiesc.',
    },
    {
      kind: 'type',
      q: { ru: 'Можно вас спросить?', ua: 'Можна вас запитати?' },
      answers: ['Pot să vă întreb ceva', 'Pot să vă întreb', 'Vă pot întreba ceva', 'Pot să vă pun o întrebare'],
      shown: 'Pot să vă întreb ceva?',
    },
  ],
};
