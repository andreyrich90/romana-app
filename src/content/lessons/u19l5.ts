import type { Lesson } from '../types';

/** B2 · Unit 1 · Lesson 5 — review of the pluperfect, event order and the literary past. No new grammar. */
export const u19l5: Lesson = {
  id: 'u19l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'Când am ajuns, plecase deja.', tr: { ru: 'Когда я пришёл, он уже ушёл.', ua: 'Коли я прийшов, він уже пішов.' } },
    { ro: 'Mai întâi…, apoi…', tr: { ru: 'Сначала…, потом…', ua: 'Спочатку…, потім…' } },
    { ro: 'Înainte să plec…', tr: { ru: 'Прежде чем уйти…', ua: 'Перш ніж піти…' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Trecutul trecutului',
      body: {
        ru: [
          'Раньше другого прошлого — **plecase, terminasem, fusese**. Порядок событий — **mai întâi, apoi, după ce, înainte să**.',
          'В книгах — **zise, merse, fu**: читайте как **a zis, a mers, a fost**.',
        ],
        ua: [
          'Раніше за інше минуле — **plecase, terminasem, fusese**. Порядок подій — **mai întâi, apoi, după ce, înainte să**.',
          'У книжках — **zise, merse, fu**: читайте як **a zis, a mers, a fost**.',
        ],
      },
      rows: [
        { ro: 'plecase deja', tr: { ru: 'он уже ушёл', ua: 'він уже пішов' } },
        { ro: 'după ce am terminat', tr: { ru: 'после того как закончил', ua: 'після того як закінчив' } },
        { ro: 'zise', tr: { ru: 'сказал', ua: 'сказав' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Когда я позвонил, он уже уснул.', ua: 'Коли я подзвонив, він уже заснув.' },
      correct: 'Când am sunat, el adormise deja.',
      wrong: ['Când am sunat, el a adormit.', 'Când sun, el adoarme.', 'Când a sunat, eu adormisem deja.'],
    },
    {
      kind: 'pickNative',
      q: 'După ce am terminat, am plecat acasă.',
      correct: { ru: 'После того как мы закончили, мы пошли домой.', ua: 'Після того як ми закінчили, ми пішли додому.' },
      wrong: [
        { ru: 'Прежде чем закончить, мы пошли домой.', ua: 'Перш ніж закінчити, ми пішли додому.' },
        { ru: 'Мы закончили дома.', ua: 'Ми закінчили вдома.' },
        { ru: 'Мы пошли домой, не закончив.', ua: 'Ми пішли додому, не закінчивши.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'plecase', tr: { ru: 'уже ушёл', ua: 'уже пішов' } },
        { ro: 'mai întâi', tr: { ru: 'сначала', ua: 'спочатку' } },
        { ro: 'apoi', tr: { ru: 'потом', ua: 'потім' } },
        { ro: 'după ce', tr: { ru: 'после того как', ua: 'після того як' } },
        { ro: 'zise', tr: { ru: 'сказал', ua: 'сказав' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Nu mai fusese niciodată aici',
      tr: { ru: 'Он никогда раньше здесь не был', ua: 'Він ніколи раніше тут не був' },
      wrong: ['Nu mai fusesem niciodată aici', 'Nu a fost niciodată acolo', 'Nu mai vine niciodată aici'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Сначала я прочитал письмо, потом ответил.', ua: 'Спочатку я прочитав лист, потім відповів.' },
      words: ['Mai', 'întâi', 'am', 'citit', 'scrisoarea', 'apoi', 'am', 'răspuns'],
      extra: ['citisem', 'după', 'răspund'],
      shown: 'Mai întâi am citit scrisoarea, apoi am răspuns.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мы уже поели (к тому времени).', ua: 'Ми вже поїли (на той час).' },
      correct: 'Mâncaserăm deja.',
      wrong: ['Mâncăm deja.', 'Mâncaseră deja.', 'O să mâncăm.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Прежде чем уйти, закрой дверь!', ua: 'Перш ніж піти, зачини двері!' },
      words: ['Înainte', 'să', 'pleci', 'închide', 'ușa'],
      extra: ['după', 'pleacă', 'fereastra'],
      shown: 'Înainte să pleci, închide ușa!',
    },
    {
      kind: 'type',
      q: { ru: 'Я уже видел(а) этот фильм.', ua: 'Я вже бачив(ла) цей фільм.' },
      answers: ['Văzusem deja filmul', 'Am văzut deja filmul', 'Văzusem deja acest film', 'Am văzut deja acest film'],
      shown: 'Văzusem deja filmul.',
    },
    {
      kind: 'type',
      q: { ru: 'Тем временем.', ua: 'Тим часом.' },
      answers: ['Între timp'],
      shown: 'Între timp.',
    },
    {
      kind: 'type',
      q: { ru: 'Сначала мы поели.', ua: 'Спочатку ми поїли.' },
      answers: ['Mai întâi am mâncat', 'Întâi am mâncat', 'Mai întâi noi am mâncat'],
      shown: 'Mai întâi am mâncat.',
    },
  ],
};
