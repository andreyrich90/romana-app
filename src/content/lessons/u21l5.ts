import type { Lesson } from '../types';

/** B2 · Unit 3 · Lesson 5 — review of să after impersonal phrases, ca să / fără să, the gerund and the passive. No new grammar. */
export const u21l5: Lesson = {
  id: 'u21l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'E important să vii.', tr: { ru: 'Важно, чтобы ты пришёл.', ua: 'Важливо, щоб ти прийшов.' } },
    { ro: 'Fără să știe…', tr: { ru: 'Не зная…', ua: 'Не знаючи…' } },
    { ro: 'Casa a fost construită anul trecut.', tr: { ru: 'Дом построили в прошлом году.', ua: 'Будинок збудували минулого року.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Să, -ând, a fost',
      body: {
        ru: [
          '**E important / greu / posibil să…**, **ca să**, **fără să** — всё с формой после să.',
          'Деепричастие **-ând / -ind**: mergând, citind. Пассив **a fost + форма**: a fost construită.',
        ],
        ua: [
          '**E important / greu / posibil să…**, **ca să**, **fără să** — усе з формою після să.',
          'Дієприслівник **-ând / -ind**: mergând, citind. Пасив **a fost + форма**: a fost construită.',
        ],
      },
      rows: [
        { ro: 'e important să', tr: { ru: 'важно, чтобы', ua: 'важливо, щоб' } },
        { ro: 'ca să', tr: { ru: 'чтобы', ua: 'щоб' } },
        { ro: 'mergând', tr: { ru: 'идя', ua: 'ідучи' } },
        { ro: 'a fost construită', tr: { ru: 'была построена', ua: 'була збудована' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Важно, чтобы ты пришёл.', ua: 'Важливо, щоб ти прийшов.' },
      correct: 'E important să vii.',
      wrong: ['E important că vii.', 'E important să vin.', 'A fost important să vii.'],
    },
    {
      kind: 'pickNative',
      q: 'Fără să știe, a greșit.',
      correct: { ru: 'Не зная, он ошибся.', ua: 'Не знаючи, він помилився.' },
      wrong: [
        { ru: 'Зная это, он ошибся.', ua: 'Знаючи це, він помилився.' },
        { ru: 'Он знал, что ошибся.', ua: 'Він знав, що помилився.' },
        { ru: 'Не зная, он не ошибся.', ua: 'Не знаючи, він не помилився.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'e important să', tr: { ru: 'важно', ua: 'важливо' } },
        { ro: 'ca să', tr: { ru: 'чтобы', ua: 'щоб' } },
        { ro: 'fără să', tr: { ru: 'не сделав', ua: 'не зробивши' } },
        { ro: 'mergând', tr: { ru: 'идя', ua: 'ідучи' } },
        { ro: 'construită', tr: { ru: 'построена', ua: 'збудована' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Am plecat ca să nu întârzii',
      tr: { ru: 'Я ушёл, чтобы не опоздать', ua: 'Я пішов, щоб не запізнитися' },
      wrong: ['Am plecat și am întârziat', 'Pleacă ca să nu întârzie', 'Am plecat ca să ajung devreme'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Легко учиться, слушая музыку.', ua: 'Легко вчитися, слухаючи музику.' },
      words: ['E', 'ușor', 'să', 'înveți', 'ascultând', 'muzică'],
      extra: ['greu', 'învățând', 'ascultă'],
      shown: 'E ușor să înveți ascultând muzică.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Билеты продаются в кассе.', ua: 'Квитки продаються в касі.' },
      correct: 'Biletele se vând la casă.',
      wrong: ['Biletele vând la casă.', 'Biletele s-au vândut la casă.', 'Biletul se vinde la casă.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Дом был построен в прошлом году.', ua: 'Будинок був збудований минулого року.' },
      words: ['Casa', 'a', 'fost', 'construită', 'anul', 'trecut'],
      extra: ['construit', 'e', 'trecută'],
      shown: 'Casa a fost construită anul trecut.',
    },
    {
      kind: 'type',
      q: { ru: 'Трудно.', ua: 'Важко.' },
      answers: ['E greu', 'Este greu', 'Greu'],
      shown: 'E greu.',
    },
    {
      kind: 'type',
      q: { ru: 'Чтобы не забыть.', ua: 'Щоб не забути.' },
      answers: ['Ca să nu uit', 'Ca să nu uiți', 'Pentru a nu uita'],
      shown: 'Ca să nu uit.',
    },
    {
      kind: 'type',
      q: { ru: 'Идя домой.', ua: 'Ідучи додому.' },
      answers: ['Mergând acasă', 'Mergând spre casă'],
      shown: 'Mergând acasă.',
    },
  ],
};
