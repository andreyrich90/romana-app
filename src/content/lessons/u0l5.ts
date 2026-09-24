import type { Lesson } from '../types';

/** Alphabet · Lesson 5 — reading practice: ea / ia as «я», the soft final i, and everything from the unit. */
export const u0l5: Lesson = {
  id: 'u0l5',
  title: { ru: 'Читаем слова', ua: 'Читаємо слова' },
  words: [
    { ro: 'cafea', tr: { ru: 'кофе', ua: 'кава' } },
    { ro: 'Bună ziua!', tr: { ru: 'Добрый день!', ua: 'Добрий день!' } },
    { ro: 'ani', tr: { ru: 'годы, лет', ua: 'роки, років' } },
    { ro: 'ieri', tr: { ru: 'вчера', ua: 'учора' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Ea, ia, -i',
      body: {
        ru: [
          '**ea** и **ia** читаются как «я»: **cafea** — «кафя».',
          'Короткое **i** в конце слова почти не слышно — оно смягчает согласную: **ani** — «ань», **pantofi** — «пантофь».',
          '**ie** в начале слова — «е» с «й»: **ieri** — «ерь».',
        ],
        ua: [
          '**ea** та **ia** читаються як «я»: **cafea** — «кафя».',
          'Коротке **i** в кінці слова майже не чути — воно пом’якшує приголосну: **ani** — «ань», **pantofi** — «пантофь».',
          '**ie** на початку слова — «є»: **ieri** — «єрь».',
        ],
      },
      rows: [
        { ro: 'cafea', tr: { ru: 'кофе · «кафя»', ua: 'кава · «кафя»' } },
        { ro: 'ani', tr: { ru: 'годы · «ань»', ua: 'роки · «ань»' } },
        { ro: 'ieri', tr: { ru: 'вчера · «ерь»', ua: 'учора · «єрь»' } },
        { ro: 'Bună ziua!', tr: { ru: 'Добрый день! · «бунэ зиуа»', ua: 'Добрий день! · «буне зіуа»' } },
      ],
    },
    {
      kind: 'pickNative',
      q: 'cafea',
      correct: { ru: 'кофе', ua: 'кава' },
      wrong: [
        { ru: 'чай', ua: 'чай' },
        { ru: 'хлеб', ua: 'хліб' },
        { ru: 'джем', ua: 'джем' },
      ],
    },
    {
      kind: 'listen',
      ro: 'Bună ziua',
      tr: { ru: 'Добрый день', ua: 'Добрий день' },
      wrong: ['Bună seara', 'Mulțumesc', 'Da, mama'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'ă', tr: { ru: 'э', ua: 'е' } },
        { ro: 'î', tr: { ru: 'ы', ua: 'и' } },
        { ro: 'ș', tr: { ru: 'ш', ua: 'ш' } },
        { ro: 'ț', tr: { ru: 'ц', ua: 'ц' } },
        { ro: 'ce', tr: { ru: 'че', ua: 'че' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Какое слово читается «кафя»?', ua: 'Яке слово читається «кафя»?' },
      correct: 'cafea',
      wrong: ['cafia', 'căfea', 'caffe'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Какое слово читается «пыйне»?', ua: 'Яке слово читається «пийне»?' },
      correct: 'pâine',
      wrong: ['paine', 'pâne', 'pine'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'casă', tr: { ru: 'дом', ua: 'будинок' } },
        { ro: 'pâine', tr: { ru: 'хлеб', ua: 'хліб' } },
        { ro: 'cafea', tr: { ru: 'кофе', ua: 'кава' } },
        { ro: 'țară', tr: { ru: 'страна', ua: 'країна' } },
        { ro: 'cheie', tr: { ru: 'ключ', ua: 'ключ' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Mulțumesc',
      tr: { ru: 'Спасибо', ua: 'Дякую' },
      wrong: ['Bună ziua', 'Da, mama', 'Cinci'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Добрый день, мама!', ua: 'Добрий день, мамо!' },
      words: ['Bună', 'ziua', 'mama'],
      extra: ['seara', 'tata'],
      shown: 'Bună ziua, mama!',
    },
    {
      kind: 'pickNative',
      q: 'ieri',
      correct: { ru: 'вчера', ua: 'учора' },
      wrong: [
        { ru: 'сегодня', ua: 'сьогодні' },
        { ru: 'завтра', ua: 'завтра' },
        { ru: 'годы', ua: 'роки' },
      ],
    },
    {
      kind: 'listen',
      ro: 'șase',
      tr: { ru: 'шесть', ua: 'шість' },
      wrong: ['cinci', 'casă', 'ceai'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Кофе и хлеб.', ua: 'Кава і хліб.' },
      words: ['Cafea', 'și', 'pâine'],
      extra: ['ceai', 'gem'],
      shown: 'Cafea și pâine.',
    },
  ],
};
