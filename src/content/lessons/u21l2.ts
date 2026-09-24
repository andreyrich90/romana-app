import type { Lesson } from '../types';

/** B2 · Unit 3 · Lesson 2 — purpose and absence: ca să, ca să nu, pentru a (written), fără să. */
export const u21l2: Lesson = {
  id: 'u21l2',
  title: { ru: 'Чтобы, не сделав', ua: 'Щоб, не зробивши' },
  words: [
    { ro: 'ca să', tr: { ru: 'чтобы', ua: 'щоб' } },
    { ro: 'ca să nu', tr: { ru: 'чтобы не', ua: 'щоб не' } },
    { ro: 'fără să', tr: { ru: 'не (сделав), без того чтобы', ua: 'не (зробивши), без того щоб' } },
    { ro: 'pentru a', tr: { ru: 'чтобы (книжн.)', ua: 'щоб (книжн.)' } },
    { ro: 'nimic', tr: { ru: 'ничего', ua: 'нічого' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Învăț română ca să lucrez aici.',
      tr: { ru: 'Я учу румынский, чтобы работать здесь.', ua: 'Я вчу румунську, щоб працювати тут.' },
      note: {
        ru: 'ca să — цель, «чтобы». На письме — pentru a + словарная форма: pentru a lucra.',
        ua: 'ca să — мета, «щоб». На письмі — pentru a + словникова форма: pentru a lucra.',
      },
    },
    {
      kind: 'intro',
      ro: 'A plecat fără să spună nimic.',
      tr: { ru: 'Он ушёл, ничего не сказав.', ua: 'Він пішов, нічого не сказавши.' },
      note: {
        ru: 'fără să — «не сделав»: fără să spună — не сказав. nimic ≈ «ничик» — ничего.',
        ua: 'fără să — «не зробивши»: fără să spună — не сказавши. nimic ≈ «німік» — нічого.',
      },
    },
    {
      kind: 'intro',
      ro: 'Mă grăbesc ca să nu întârzii.',
      tr: { ru: 'Я спешу, чтобы не опоздать.', ua: 'Я поспішаю, щоб не запізнитися.' },
      note: {
        ru: 'a se grăbi — спешить: mă grăbesc ≈ «мэ грэбеск».',
        ua: 'a se grăbi — поспішати: mă grăbesc ≈ «ме гребеск».',
      },
    },
    {
      kind: 'tip',
      title: 'Ca să, fără să',
      body: {
        ru: [
          'Цель: **ca să** + глагол: ca să lucrez. Отрицание — **ca să nu**. На письме — **pentru a** + словарная форма: pentru a lucra.',
          'Без действия: **fără să** + глагол: fără să știe — не зная, fără să întrebe — не спросив.',
        ],
        ua: [
          'Мета: **ca să** + дієслово: ca să lucrez. Заперечення — **ca să nu**. На письмі — **pentru a** + словникова форма: pentru a lucra.',
          'Без дії: **fără să** + дієслово: fără să știe — не знаючи, fără să întrebe — не запитавши.',
        ],
      },
      rows: [
        { ro: 'ca să învăț', tr: { ru: 'чтобы учиться', ua: 'щоб учитися' } },
        { ro: 'ca să nu uit', tr: { ru: 'чтобы не забыть', ua: 'щоб не забути' } },
        { ro: 'fără să spună', tr: { ru: 'не сказав', ua: 'не сказавши' } },
        { ro: 'pentru a înțelege', tr: { ru: 'чтобы понять', ua: 'щоб зрозуміти' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я учу румынский, чтобы работать здесь.', ua: 'Я вчу румунську, щоб працювати тут.' },
      correct: 'Învăț română ca să lucrez aici.',
      wrong: ['Învăț română fără să lucrez aici.', 'Învăț română pentru că lucrez aici.', 'Învăț română ca să lucrezi aici.'],
    },
    {
      kind: 'pickNative',
      q: 'A intrat fără să bată la ușă.',
      correct: { ru: 'Он вошёл, не постучав в дверь.', ua: 'Він увійшов, не постукавши в двері.' },
      wrong: [
        { ru: 'Он вошёл и постучал в дверь.', ua: 'Він увійшов і постукав у двері.' },
        { ru: 'Он постучал, чтобы войти.', ua: 'Він постукав, щоб увійти.' },
        { ru: 'Он не вошёл в дверь.', ua: 'Він не увійшов у двері.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'ca să', tr: { ru: 'чтобы', ua: 'щоб' } },
        { ro: 'ca să nu', tr: { ru: 'чтобы не', ua: 'щоб не' } },
        { ro: 'fără să', tr: { ru: 'не сделав', ua: 'не зробивши' } },
        { ro: 'pentru a', tr: { ru: 'чтобы (книжн.)', ua: 'щоб (книжн.)' } },
        { ro: 'nimic', tr: { ru: 'ничего', ua: 'нічого' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Mă grăbesc ca să nu întârzii',
      tr: { ru: 'Я спешу, чтобы не опоздать', ua: 'Я поспішаю, щоб не запізнитися' },
      wrong: ['Mă grăbesc pentru că am întârziat', 'Te grăbești ca să nu întârzii', 'Mă grăbesc ca să ajung'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Он ушёл, ничего не сказав.', ua: 'Він пішов, нічого не сказавши.' },
      words: ['A', 'plecat', 'fără', 'să', 'spună', 'nimic'],
      extra: ['ca', 'spune', 'ceva'],
      shown: 'A plecat fără să spună nimic.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Чтобы не забыть.', ua: 'Щоб не забути.' },
      correct: 'Ca să nu uit.',
      wrong: ['Ca să uit.', 'Fără să uit.', 'Pentru că am uitat.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я записываю, чтобы не забыть.', ua: 'Я записую, щоб не забути.' },
      words: ['Scriu', 'ca', 'să', 'nu', 'uit'],
      extra: ['fără', 'uitat', 'scrie'],
      shown: 'Scriu ca să nu uit.',
    },
    {
      kind: 'type',
      q: { ru: 'Чтобы работать здесь.', ua: 'Щоб працювати тут.' },
      answers: ['Ca să lucrez aici', 'Pentru a lucra aici'],
      shown: 'Ca să lucrez aici.',
    },
    {
      kind: 'type',
      q: { ru: 'Не зная.', ua: 'Не знаючи.' },
      answers: ['Fără să știu', 'Fără să știe', 'Fără să știi', 'Fără să știm', 'Neștiind'],
      shown: 'Fără să știu.',
    },
  ],
};
