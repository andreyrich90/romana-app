import type { Lesson } from '../types';

/** A2 · Unit 5 · Lesson 4 — gifts: the dative with îi (îi dau lui Andrei, îi cumpăr mamei), pentru, La mulți ani! */
export const u11l4: Lesson = {
  id: 'u11l4',
  title: { ru: 'Подарок', ua: 'Подарунок' },
  words: [
    { ro: 'un cadou', tr: { ru: 'подарок', ua: 'подарунок' } },
    { ro: 'pentru', tr: { ru: 'для', ua: 'для' } },
    { ro: 'Îi dau lui Andrei…', tr: { ru: 'Я даю Андрею…', ua: 'Я даю Андрію…' } },
    { ro: 'Îi cumpăr mamei…', tr: { ru: 'Я покупаю маме…', ua: 'Я купую мамі…' } },
    { ro: 'ziua de naștere', tr: { ru: 'день рождения', ua: 'день народження' } },
    { ro: 'La mulți ani!', tr: { ru: 'С днём рождения!', ua: 'З днем народження!' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Un cadou pentru mama.',
      tr: { ru: 'Подарок для мамы.', ua: 'Подарунок для мами.' },
      note: {
        ru: 'cadou ≈ «кадоу». После pentru («для») слово не меняется: pentru mama, pentru Andrei.',
        ua: 'cadou ≈ «кадоу». Після pentru («для») слово не змінюється: pentru mama, pentru Andrei.',
      },
    },
    {
      kind: 'intro',
      ro: 'Îi cumpăr mamei o rochie.',
      tr: { ru: 'Я покупаю маме платье.', ua: 'Я купую мамі сукню.' },
      note: {
        ru: 'Кому — та же форма, что «чей»: mamei, lui Andrei. Перед глаголом ещё îi ≈ «ый» — «ей, ему».',
        ua: 'Кому — та сама форма, що «чий»: mamei, lui Andrei. Перед дієсловом ще îi ≈ «ий» — «їй, йому».',
      },
    },
    {
      kind: 'intro',
      ro: 'La mulți ani!',
      tr: { ru: 'С днём рождения!', ua: 'З днем народження!' },
      note: {
        ru: 'Дословно «на много лет» ≈ «ла мулць ань». Так поздравляют и с днём рождения, и с Новым годом. День рождения — ziua de naștere: Azi e ziua mea de naștere.',
        ua: 'Дослівно «на багато років» ≈ «ла мулць ань». Так вітають і з днем народження, і з Новим роком. День народження — ziua de naștere: Azi e ziua mea de naștere.',
      },
    },
    {
      kind: 'tip',
      title: 'Îi dau lui Andrei',
      body: {
        ru: [
          '«Кому» — та же форма, что «чей»: **lui Andrei**, **mamei**, **Anei**.',
          'Перед глаголом ставят ещё **îi** (ему, ей): **Îi dau lui Andrei o carte** — «Я даю Андрею книгу», дословно «ему даю Андрею». Это удвоение обязательно.',
          '**Pentru** проще, без падежа: **un cadou pentru Andrei** — подарок для Андрея.',
        ],
        ua: [
          '«Кому» — та сама форма, що «чий»: **lui Andrei**, **mamei**, **Anei**.',
          'Перед дієсловом ставлять ще **îi** (йому, їй): **Îi dau lui Andrei o carte** — «Я даю Андрію книжку», дослівно «йому даю Андрію». Це подвоєння обов’язкове.',
          '**Pentru** простіше, без відмінка: **un cadou pentru Andrei** — подарунок для Андрія.',
        ],
      },
      rows: [
        { ro: 'Îi dau lui Andrei.', tr: { ru: 'Я даю Андрею. · «ый дау луй андрей»', ua: 'Я даю Андрію. · «ий дау луй андрей»' } },
        { ro: 'Îi cumpăr mamei.', tr: { ru: 'Я покупаю маме. · «ый кумпэр мамей»', ua: 'Я купую мамі. · «ий кумпер мамей»' } },
        { ro: 'un cadou pentru Ana', tr: { ru: 'подарок для Анны · «ун кадоу пентру ана»', ua: 'подарунок для Анни · «ун кадоу пентру ана»' } },
        { ro: 'La mulți ani!', tr: { ru: 'С днём рождения! · «ла мулць ань»', ua: 'З днем народження! · «ла мулць ань»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я покупаю маме подарок.', ua: 'Я купую мамі подарунок.' },
      correct: 'Îi cumpăr mamei un cadou.',
      wrong: ['Îi cumpăr mama un cadou.', 'Cumpăr un cadou pentru tata.', 'Mama îmi cumpără un cadou.'],
    },
    {
      kind: 'pickNative',
      q: 'Îi dau lui Ion o carte.',
      correct: { ru: 'Я даю Иону книгу.', ua: 'Я даю Іону книжку.' },
      wrong: [
        { ru: 'Ион даёт мне книгу.', ua: 'Іон дає мені книжку.' },
        { ru: 'Я даю Марии книгу.', ua: 'Я даю Марії книжку.' },
        { ru: 'Это книга Иона.', ua: 'Це книжка Іона.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'cadou', tr: { ru: 'подарок', ua: 'подарунок' } },
        { ro: 'pentru', tr: { ru: 'для', ua: 'для' } },
        { ro: 'îi dau', tr: { ru: 'я ему даю', ua: 'я йому даю' } },
        { ro: 'La mulți ani!', tr: { ru: 'С днём рождения!', ua: 'З днем народження!' } },
        { ro: 'ziua de naștere', tr: { ru: 'день рождения', ua: 'день народження' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Un cadou pentru Maria',
      tr: { ru: 'Подарок для Марии', ua: 'Подарунок для Марії' },
      wrong: ['Un cadou pentru Ana', 'Cadoul Mariei', 'Un cadou pentru mama'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я покупаю Андрею футболку.', ua: 'Я купую Андрію футболку.' },
      words: ['Îi', 'cumpăr', 'lui', 'Andrei', 'un', 'tricou'],
      extra: ['o', 'mamei', 'cămașă'],
      shown: 'Îi cumpăr lui Andrei un tricou.',
      also: ['Îi cumpăr un tricou lui Andrei'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сегодня мой день рождения.', ua: 'Сьогодні мій день народження.' },
      correct: 'Azi e ziua mea de naștere.',
      wrong: ['Azi e ziua ta de naștere.', 'Mâine e ziua mea de naștere.', 'La mulți ani!'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Подарок для Марии.', ua: 'Подарунок для Марії.' },
      words: ['Un', 'cadou', 'pentru', 'Maria'],
      extra: ['Mariei', 'o', 'lui'],
      shown: 'Un cadou pentru Maria.',
    },
    {
      kind: 'type',
      q: { ru: 'С днём рождения!', ua: 'З днем народження!' },
      answers: ['La mulți ani'],
      shown: 'La mulți ani!',
    },
    {
      kind: 'type',
      q: { ru: 'Я покупаю маме платье.', ua: 'Я купую мамі сукню.' },
      answers: ['Îi cumpăr mamei o rochie', 'Îi cumpăr o rochie mamei', 'Cumpăr o rochie pentru mama', 'Eu îi cumpăr mamei o rochie'],
      shown: 'Îi cumpăr mamei o rochie.',
    },
  ],
};
