import type { Lesson } from '../types';

/** B2 · Unit 2 · Lesson 3 — regrets: ar fi trebuit să, n-ar fi trebuit să, păcat că, îmi pare rău că, regret că. */
export const u20l3: Lesson = {
  id: 'u20l3',
  title: { ru: 'Сожаления', ua: 'Жалі' },
  words: [
    { ro: 'ar fi trebuit să', tr: { ru: 'надо было', ua: 'треба було' } },
    { ro: 'păcat că', tr: { ru: 'жаль, что', ua: 'шкода, що' } },
    { ro: 'îmi pare rău că', tr: { ru: 'мне жаль, что', ua: 'мені шкода, що' } },
    { ro: 'regret că', tr: { ru: 'сожалею, что', ua: 'шкодую, що' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Ar fi trebuit să plec mai devreme.',
      tr: { ru: 'Надо было уйти раньше.', ua: 'Треба було піти раніше.' },
      note: {
        ru: 'ar fi trebuit să — «надо было (но я этого не сделал)».',
        ua: 'ar fi trebuit să — «треба було (але я цього не зробив)».',
      },
    },
    {
      kind: 'intro',
      ro: 'Păcat că n-ai venit.',
      tr: { ru: 'Жаль, что ты не пришёл.', ua: 'Шкода, що ти не прийшов.' },
      note: {
        ru: 'păcat ≈ «пэкат» — жаль; буквально и «грех».',
        ua: 'păcat ≈ «пекат» — шкода; буквально й «гріх».',
      },
    },
    {
      kind: 'intro',
      ro: 'Îmi pare rău că am întârziat.',
      tr: { ru: 'Мне жаль, что я опоздал.', ua: 'Мені шкода, що я запізнився.' },
      note: {
        ru: 'îmi pare rău ≈ «ымь паре рэу» — мне жаль, простите. a întârzia — опаздывать.',
        ua: 'îmi pare rău ≈ «имь паре реу» — мені шкода, вибачте. a întârzia — запізнюватися.',
      },
    },
    {
      kind: 'tip',
      title: 'Ar fi trebuit…',
      body: {
        ru: [
          'Упрёк или сожаление: **ar fi trebuit să** (надо было), **n-ar fi trebuit să** (не надо было).',
          'Чувство: **păcat că…** (жаль, что…), **îmi pare rău că…** (мне жаль, простите, что…), **regret că…** (сожалею, что… — официальнее).',
        ],
        ua: [
          'Докір або жаль: **ar fi trebuit să** (треба було), **n-ar fi trebuit să** (не треба було).',
          'Почуття: **păcat că…** (шкода, що…), **îmi pare rău că…** (мені шкода, вибачте, що…), **regret că…** (шкодую, що… — офіційніше).',
        ],
      },
      rows: [
        { ro: 'Ar fi trebuit să învăț.', tr: { ru: 'Надо было учиться.', ua: 'Треба було вчитися.' } },
        { ro: 'N-ar fi trebuit să spun asta.', tr: { ru: 'Не надо было это говорить.', ua: 'Не треба було це казати.' } },
        { ro: 'Păcat!', tr: { ru: 'Жаль!', ua: 'Шкода!' } },
        { ro: 'Regret că n-am putut veni.', tr: { ru: 'Сожалею, что не смог прийти.', ua: 'Шкодую, що не зміг прийти.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Надо было уйти раньше.', ua: 'Треба було піти раніше.' },
      correct: 'Ar fi trebuit să plec mai devreme.',
      wrong: ['Trebuie să plec mai devreme.', 'Ar trebui să plec mai devreme.', 'Am plecat mai devreme.'],
    },
    {
      kind: 'pickNative',
      q: 'N-ar fi trebuit să spun asta.',
      correct: { ru: 'Не надо было мне это говорить.', ua: 'Не треба було мені це казати.' },
      wrong: [
        { ru: 'Мне надо это сказать.', ua: 'Мені треба це сказати.' },
        { ru: 'Я не сказал этого.', ua: 'Я не сказав цього.' },
        { ru: 'Тебе не надо было это говорить.', ua: 'Тобі не треба було це казати.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'ar fi trebuit', tr: { ru: 'надо было', ua: 'треба було' } },
        { ro: 'păcat', tr: { ru: 'жаль', ua: 'шкода' } },
        { ro: 'regret', tr: { ru: 'сожалею', ua: 'шкодую' } },
        { ro: 'îmi pare rău', tr: { ru: 'мне жаль', ua: 'мені шкода' } },
        { ro: 'am întârziat', tr: { ru: 'я опоздал', ua: 'я запізнився' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Păcat că n-ai venit',
      tr: { ru: 'Жаль, что ты не пришёл', ua: 'Шкода, що ти не прийшов' },
      wrong: ['Păcat că n-am venit', 'Bine că ai venit', 'Păcat că n-a venit'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне жаль, что я опоздал.', ua: 'Мені шкода, що я запізнився.' },
      words: ['Îmi', 'pare', 'rău', 'că', 'am', 'întârziat'],
      extra: ['întârzii', 'ți', 'bine'],
      shown: 'Îmi pare rău că am întârziat.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Жаль!', ua: 'Шкода!' },
      correct: 'Păcat!',
      wrong: ['Bravo!', 'Sigur!', 'Poftim!'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Сожалею, что не смог прийти.', ua: 'Шкодую, що не зміг прийти.' },
      words: ['Regret', 'că', 'n-am', 'putut', 'veni'],
      extra: ['pot', 'vin', 'a'],
      shown: 'Regret că n-am putut veni.',
    },
    {
      kind: 'type',
      q: { ru: 'Надо было учиться.', ua: 'Треба було вчитися.' },
      answers: ['Ar fi trebuit să învăț', 'Trebuia să învăț'],
      shown: 'Ar fi trebuit să învăț.',
    },
    {
      kind: 'type',
      q: { ru: 'Жаль, что ты не пришёл (не пришла).', ua: 'Шкода, що ти не прийшов (не прийшла).' },
      answers: ['Păcat că n-ai venit', 'Păcat că nu ai venit', 'E păcat că n-ai venit'],
      shown: 'Păcat că n-ai venit.',
    },
  ],
};
