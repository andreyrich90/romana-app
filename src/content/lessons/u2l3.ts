import type { Lesson } from '../types';

/** Unit 2 · Lesson 3 — the verb «a avea» (to have), negation, frați / surori / copii. */
export const u2l3: Lesson = {
  id: 'u2l3',
  title: { ru: 'У меня есть', ua: 'У мене є' },
  words: [
    { ro: 'Am un frate.', tr: { ru: 'У меня есть брат.', ua: 'У мене є брат.' } },
    { ro: 'Ai o soră?', tr: { ru: 'У тебя есть сестра?', ua: 'У тебе є сестра?' } },
    { ro: 'el / ea are', tr: { ru: 'у него / у неё есть', ua: 'у нього / у неї є' } },
    { ro: 'avem, aveți, au', tr: { ru: 'у нас, у вас, у них есть', ua: 'у нас, у вас, у них є' } },
    { ro: 'Nu am…', tr: { ru: 'У меня нет…', ua: 'У мене немає…' } },
    { ro: 'frați, surori, copii', tr: { ru: 'братья, сёстры, дети', ua: 'брати, сестри, діти' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Am un frate.',
      tr: { ru: 'У меня есть брат.', ua: 'У мене є брат.' },
      note: {
        ru: 'Румыны не говорят «у меня есть», а говорят «имею»: am — «(я) имею». Местоимение eu, как обычно, можно опустить.',
        ua: 'Румуни не кажуть «у мене є», а кажуть «маю»: am — «(я) маю». Займенник eu, як завжди, можна опустити.',
      },
    },
    {
      kind: 'intro',
      ro: 'Ai o soră?',
      tr: { ru: 'У тебя есть сестра?', ua: 'У тебе є сестра?' },
      note: {
        ru: 'ai ≈ «ай». Вопрос отличается от утверждения только интонацией.',
        ua: 'ai ≈ «ай». Питання відрізняється від ствердження лише інтонацією.',
      },
    },
    {
      kind: 'tip',
      title: 'A avea — иметь',
      body: {
        ru: [
          'Отрицание — **nu** перед глаголом: **Nu am** frați — у меня нет братьев. В разговоре часто сливается: **N-am** frați.',
          'Множественное число у этих слов нужно просто запомнить: frate → **frați**, soră → **surori**, copil → **copii**.',
        ],
        ua: [
          'Заперечення — **nu** перед дієсловом: **Nu am** frați — у мене немає братів. У розмові часто зливається: **N-am** frați.',
          'Множину цих слів треба просто запамʼятати: frate → **frați**, soră → **surori**, copil → **copii**.',
        ],
      },
      rows: [
        { ro: 'eu am', tr: { ru: 'у меня есть · «еу ам»', ua: 'у мене є · «єу ам»' } },
        { ro: 'tu ai', tr: { ru: 'у тебя есть · «ту ай»', ua: 'у тебе є · «ту ай»' } },
        { ro: 'el, ea are', tr: { ru: 'у него, у неё · «ел, я аре»', ua: 'у нього, у неї · «єл, я аре»' } },
        { ro: 'noi avem', tr: { ru: 'у нас есть · «ной авем»', ua: 'у нас є · «ной авем»' } },
        { ro: 'voi aveți', tr: { ru: 'у вас есть · «вой авець»', ua: 'у вас є · «вой авець»' } },
        { ro: 'ei, ele au', tr: { ru: 'у них есть · «ей, еле ау»', ua: 'у них є · «єй, єле ау»' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'eu am', tr: { ru: 'у меня есть', ua: 'у мене є' } },
        { ro: 'tu ai', tr: { ru: 'у тебя есть', ua: 'у тебе є' } },
        { ro: 'el are', tr: { ru: 'у него есть', ua: 'у нього є' } },
        { ro: 'noi avem', tr: { ru: 'у нас есть', ua: 'у нас є' } },
        { ro: 'ei au', tr: { ru: 'у них есть', ua: 'у них є' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'У неё есть сестра.', ua: 'У неї є сестра.' },
      correct: 'Ea are o soră.',
      wrong: ['Ea ai o soră.', 'El are o soră.', 'Ea are un soră.'],
    },
    {
      kind: 'pickNative',
      q: 'Are doi frați.',
      correct: { ru: 'У него два брата.', ua: 'У нього два брати.' },
      wrong: [
        { ru: 'У меня два брата.', ua: 'У мене два брати.' },
        { ru: 'У него есть брат.', ua: 'У нього є брат.' },
        { ru: 'У него две сестры.', ua: 'У нього дві сестри.' },
      ],
    },
    {
      kind: 'intro',
      ro: 'Ai copii?',
      tr: { ru: 'У тебя есть дети?', ua: 'У тебе є діти?' },
      note: {
        ru: 'copil — ребёнок, copii — дети (≈ «копий»). Ответ: Da, am doi copii — Да, у меня двое детей.',
        ua: 'copil — дитина, copii — діти (≈ «копій»). Відповідь: Da, am doi copii — Так, у мене двоє дітей.',
      },
    },
    {
      kind: 'listen',
      ro: 'Avem doi copii',
      tr: { ru: 'У нас двое детей', ua: 'У нас двоє дітей' },
      wrong: ['Am doi copii', 'Aveți doi copii', 'Au doi copii'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'У меня нет сестры.', ua: 'У мене немає сестри.' },
      correct: 'Nu am soră.',
      wrong: ['Nu ai soră.', 'Am o soră.', 'Nu are soră.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'У нас двое детей.', ua: 'У нас двоє дітей.' },
      words: ['Noi', 'avem', 'doi', 'copii'],
      extra: ['au', 'două', 'copil'],
      shown: 'Noi avem doi copii.',
    },
    {
      kind: 'type',
      q: { ru: 'У тебя есть брат?', ua: 'У тебе є брат?' },
      answers: ['Ai un frate', 'Tu ai un frate', 'Ai frate', 'Tu ai frate'],
      shown: 'Ai un frate?',
    },
    {
      kind: 'type',
      q: { ru: 'У меня нет детей.', ua: 'У мене немає дітей.' },
      answers: ['Nu am copii', 'Eu nu am copii', 'N-am copii'],
      shown: 'Nu am copii.',
    },
  ],
};
