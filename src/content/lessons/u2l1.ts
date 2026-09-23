import type { Lesson } from '../types';

/** Unit 2 · Lesson 1 — family members and the possessives meu / mea, tău / ta. */
export const u2l1: Lesson = {
  id: 'u2l1',
  title: { ru: 'Моя семья', ua: 'Моя родина' },
  words: [
    { ro: 'mama mea', tr: { ru: 'моя мама', ua: 'моя мама' } },
    { ro: 'tatăl meu', tr: { ru: 'мой отец', ua: 'мій батько' } },
    { ro: 'fratele meu', tr: { ru: 'мой брат', ua: 'мій брат' } },
    { ro: 'sora mea', tr: { ru: 'моя сестра', ua: 'моя сестра' } },
    { ro: 'familia mea', tr: { ru: 'моя семья', ua: 'моя родина' } },
    { ro: 'mama ta, tatăl tău', tr: { ru: 'твоя мама, твой отец', ua: 'твоя мама, твій батько' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'mama mea',
      tr: { ru: 'моя мама', ua: 'моя мама' },
      note: {
        ru: '«Моя» ставится после слова, а само слово получает артикль: mamă → mama. Дословно «мама-та моя».',
        ua: '«Моя» ставиться після слова, а саме слово отримує артикль: mamă → mama. Дослівно «мама-та моя».',
      },
    },
    {
      kind: 'intro',
      ro: 'tatăl meu',
      tr: { ru: 'мой отец', ua: 'мій батько' },
      note: {
        ru: 'tată → tatăl (≈ «татэл»). В разговоре о своём папе часто говорят просто tata: Tata e acasă — Папа дома.',
        ua: 'tată → tatăl (≈ «тател»). У розмові про свого тата часто кажуть просто tata: Tata e acasă — Тато вдома.',
      },
    },
    {
      kind: 'intro',
      ro: 'fratele meu, sora mea',
      tr: { ru: 'мой брат, моя сестра', ua: 'мій брат, моя сестра' },
      note: {
        ru: 'frate → fratele, soră → sora. Слова на -e берут артикль -le.',
        ua: 'frate → fratele, soră → sora. Слова на -e отримують артикль -le.',
      },
    },
    {
      kind: 'tip',
      title: 'Meu, mea · tău, ta',
      body: {
        ru: [
          '«Мой» согласуется с тем, что принадлежит: мужской род — **meu**, женский — **mea**. «Твой» — **tău** и **ta**.',
          'Существительное перед ними всегда с артиклем: не «mamă mea», а **mama** mea.',
        ],
        ua: [
          '«Мій» узгоджується з тим, що належить: чоловічий рід — **meu**, жіночий — **mea**. «Твій» — **tău** і **ta**.',
          'Іменник перед ними завжди з артиклем: не «mamă mea», а **mama** mea.',
        ],
      },
      rows: [
        { ro: 'tatăl meu', tr: { ru: 'мой отец', ua: 'мій батько' } },
        { ro: 'fratele meu', tr: { ru: 'мой брат', ua: 'мій брат' } },
        { ro: 'mama mea', tr: { ru: 'моя мама', ua: 'моя мама' } },
        { ro: 'sora mea', tr: { ru: 'моя сестра', ua: 'моя сестра' } },
        { ro: 'tatăl tău', tr: { ru: 'твой отец', ua: 'твій батько' } },
        { ro: 'mama ta', tr: { ru: 'твоя мама', ua: 'твоя мама' } },
      ],
    },
    {
      kind: 'pickNative',
      q: 'sora mea',
      correct: { ru: 'моя сестра', ua: 'моя сестра' },
      wrong: [
        { ru: 'мой брат', ua: 'мій брат' },
        { ru: 'моя мама', ua: 'моя мама' },
        { ru: 'твоя сестра', ua: 'твоя сестра' },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'мой брат', ua: 'мій брат' },
      correct: 'fratele meu',
      wrong: ['fratele mea', 'frate meu', 'sora mea'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mama', tr: { ru: 'мама', ua: 'мама' } },
        { ro: 'tatăl', tr: { ru: 'отец', ua: 'батько' } },
        { ro: 'fratele', tr: { ru: 'брат', ua: 'брат' } },
        { ro: 'sora', tr: { ru: 'сестра', ua: 'сестра' } },
        { ro: 'familia', tr: { ru: 'семья', ua: 'родина' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Ea este sora mea',
      tr: { ru: 'Она моя сестра', ua: 'Вона моя сестра' },
      wrong: ['Ea este mama mea', 'El este fratele meu', 'Ea nu este sora mea'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Он мой отец.', ua: 'Він мій батько.' },
      words: ['El', 'este', 'tatăl', 'meu'],
      extra: ['mea', 'tău', 'sunt'],
      shown: 'El este tatăl meu.',
    },
    {
      kind: 'intro',
      ro: 'familia mea',
      tr: { ru: 'моя семья', ua: 'моя родина' },
      note: {
        ru: 'familie → familia: у слов на -ie артикль -a заменяет последнюю e.',
        ua: 'familie → familia: у слів на -ie артикль -a заміняє останню e.',
      },
    },
    {
      kind: 'type',
      q: { ru: 'Моя мама — румынка.', ua: 'Моя мама — румунка.' },
      answers: ['Mama mea este româncă', 'Mama mea e româncă'],
      shown: 'Mama mea este româncă.',
    },
    {
      kind: 'type',
      q: { ru: 'Твоя сестра — студентка?', ua: 'Твоя сестра — студентка?' },
      answers: ['Sora ta este studentă', 'Sora ta e studentă'],
      shown: 'Sora ta este studentă?',
    },
  ],
};
