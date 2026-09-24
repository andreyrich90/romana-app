import type { Lesson } from '../types';

/** B2 · Unit 1 · Lesson 4 — recognising the literary simple past: zise, merse, fu, veni, făcu; A fost odată ca niciodată. */
export const u19l4: Lesson = {
  id: 'u19l4',
  title: { ru: 'Как в книгах', ua: 'Як у книжках' },
  words: [
    { ro: 'zise', tr: { ru: 'сказал (в книгах)', ua: 'сказав (у книжках)' } },
    { ro: 'merse', tr: { ru: 'пошёл (в книгах)', ua: 'пішов (у книжках)' } },
    { ro: 'fu', tr: { ru: 'был (в книгах)', ua: 'був (у книжках)' } },
    { ro: 'A fost odată ca niciodată…', tr: { ru: 'Жили-были…', ua: 'Жили-були…' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Și el zise: „Plecăm!”',
      tr: { ru: 'И он сказал: «Уходим!»', ua: 'І він сказав: «Ідемо!»' },
      note: {
        ru: 'В сказках и романах вместо a zis пишут zise — простое прошедшее, одно слово. Говорить так не нужно, узнавать — да.',
        ua: 'У казках і романах замість a zis пишуть zise — простий минулий, одне слово. Говорити так не треба, упізнавати — так.',
      },
    },
    {
      kind: 'intro',
      ro: 'Merse până la râu.',
      tr: { ru: 'Он дошёл до реки.', ua: 'Він дійшов до річки.' },
      note: {
        ru: 'merse = a mers. râu ≈ «рыу» — река.',
        ua: 'merse = a mers. râu ≈ «риу» — річка.',
      },
    },
    {
      kind: 'intro',
      ro: 'A fost odată ca niciodată…',
      tr: { ru: 'Жили-были…', ua: 'Жили-були…' },
      note: {
        ru: 'Так начинаются румынские сказки: дословно «было однажды, как никогда».',
        ua: 'Так починаються румунські казки: дослівно «було колись, як ніколи».',
      },
    },
    {
      kind: 'tip',
      title: 'Zise, merse, fu',
      body: {
        ru: [
          '**Perfectul simplu** — книжное прошедшее, одно слово вместо двух. В речи его заменяет **am / a + форма**; только на юго-западе, в Олтении, так говорят и в жизни.',
          'Узнавайте по форме «он»: **plecă** (a plecat), **veni** (a venit), **fu** (a fost), **zise** (a zis), **făcu** (a făcut).',
        ],
        ua: [
          '**Perfectul simplu** — книжний минулий, одне слово замість двох. У мовленні його заміняє **am / a + форма**; лише на південному заході, в Олтенії, так кажуть і в житті.',
          'Упізнавайте за формою «він»: **plecă** (a plecat), **veni** (a venit), **fu** (a fost), **zise** (a zis), **făcu** (a făcut).',
        ],
      },
      rows: [
        { ro: 'zise = a zis', tr: { ru: 'сказал', ua: 'сказав' } },
        { ro: 'merse = a mers', tr: { ru: 'пошёл', ua: 'пішов' } },
        { ro: 'fu = a fost', tr: { ru: 'был', ua: 'був' } },
        { ro: 'făcu = a făcut', tr: { ru: 'сделал', ua: 'зробив' } },
        { ro: 'veni = a venit', tr: { ru: 'пришёл', ua: 'прийшов' } },
      ],
    },
    {
      kind: 'pickNative',
      q: 'Zise că e obosit.',
      correct: { ru: 'Он сказал, что устал.', ua: 'Він сказав, що втомився.' },
      wrong: [
        { ru: 'Он говорит, что устал.', ua: 'Він каже, що втомився.' },
        { ru: 'Он скажет, что устал.', ua: 'Він скаже, що втомився.' },
        { ru: 'Я сказал, что устал.', ua: 'Я сказав, що втомився.' },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Как в разговоре сказать «făcu»?', ua: 'Як у розмові сказати «făcu»?' },
      correct: 'a făcut',
      wrong: ['face', 'făcea', 'o să facă'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'zise', tr: { ru: 'сказал', ua: 'сказав' } },
        { ro: 'merse', tr: { ru: 'пошёл', ua: 'пішов' } },
        { ro: 'fu', tr: { ru: 'был', ua: 'був' } },
        { ro: 'veni', tr: { ru: 'пришёл', ua: 'прийшов' } },
        { ro: 'făcu', tr: { ru: 'сделал', ua: 'зробив' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'A fost odată ca niciodată',
      tr: { ru: 'Жили-были', ua: 'Жили-були' },
      wrong: ['A fost odată o fată', 'Era odată un băiat', 'A fost o zi frumoasă'],
    },
    {
      kind: 'pickNative',
      q: 'Merse până la râu.',
      correct: { ru: 'Он дошёл до реки.', ua: 'Він дійшов до річки.' },
      wrong: [
        { ru: 'Он живёт у реки.', ua: 'Він живе біля річки.' },
        { ru: 'Он идёт к реке.', ua: 'Він іде до річки.' },
        { ru: 'Он переплыл реку.', ua: 'Він переплив річку.' },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Как в разговоре сказать «fu»?', ua: 'Як у розмові сказати «fu»?' },
      correct: 'a fost',
      wrong: ['era', 'este', 'o să fie'],
    },
    {
      kind: 'pickNative',
      q: 'Veni noaptea.',
      correct: { ru: 'Наступила ночь.', ua: 'Настала ніч.' },
      wrong: [
        { ru: 'Ночь прошла.', ua: 'Ніч минула.' },
        { ru: 'Ночь будет длинной.', ua: 'Ніч буде довгою.' },
        { ru: 'Приходи ночью.', ua: 'Приходь уночі.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Жили-были…', ua: 'Жили-були…' },
      words: ['A', 'fost', 'odată', 'ca', 'niciodată'],
      extra: ['era', 'o', 'cândva'],
      shown: 'A fost odată ca niciodată…',
    },
    {
      kind: 'type',
      q: { ru: 'Жили-были…', ua: 'Жили-були…' },
      answers: ['A fost odată ca niciodată'],
      shown: 'A fost odată ca niciodată…',
    },
    {
      kind: 'type',
      q: { ru: 'Он сказал (в разговоре).', ua: 'Він сказав (у розмові).' },
      answers: ['A zis', 'A spus', 'El a zis', 'El a spus'],
      shown: 'A zis.',
    },
  ],
};
