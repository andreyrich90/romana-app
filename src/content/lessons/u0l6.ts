import type { Lesson } from '../types';

/** Alphabet · Lesson 6 — two vowels read as one sound (oa, ea, ia, ie) and the final -i that only softens. */
export const u0l6: Lesson = {
  id: 'u0l6',
  title: { ru: 'Oa, ea, ia, ie', ua: 'Oa, ea, ia, ie' },
  words: [
    { ro: 'școală', tr: { ru: 'школа', ua: 'школа' } },
    { ro: 'seară', tr: { ru: 'вечер', ua: 'вечір' } },
    { ro: 'iarnă', tr: { ru: 'зима', ua: 'зима' } },
    { ro: 'ieri', tr: { ru: 'вчера', ua: 'учора' } },
    { ro: 'bani', tr: { ru: 'деньги', ua: 'гроші' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'școală',
      tr: { ru: 'школа', ua: 'школа' },
      note: {
        ru: 'oa читается одним слогом, быстрое «уа»: școală ≈ «шкуалэ». Не «шко-а-лэ».',
        ua: 'oa читається одним складом, швидке «уа»: școală ≈ «шкуале». Не «шко-а-ле».',
      },
    },
    {
      kind: 'intro',
      ro: 'seară',
      tr: { ru: 'вечер', ua: 'вечір' },
      note: {
        ru: 'ea после согласной — почти русское «я»: seară ≈ «сярэ». Bună seara! — Добрый вечер!',
        ua: 'ea після приголосної — майже українське «я»: seară ≈ «сяре». Bună seara! — Добрий вечір!',
      },
    },
    {
      kind: 'intro',
      ro: 'iarnă',
      tr: { ru: 'зима', ua: 'зима' },
      note: {
        ru: 'ia — «я», ie — «йе»: iarnă ≈ «ярнэ», ieri (вчера) ≈ «йерь».',
        ua: 'ia — «я», ie — «йе»: iarnă ≈ «ярне», ieri (учора) ≈ «йерь».',
      },
    },
    {
      kind: 'tip',
      title: 'Două vocale, un sunet',
      body: {
        ru: [
          'Две гласные рядом часто читаются **одним слогом**: **oa** — «уа», **ea** — «я», **ia** — «я», **ie** — «йе».',
          '**i** в конце слова после согласной почти не слышно: оно только смягчает её, как русский **ь**. bani ≈ «бань», ieri ≈ «йерь».',
        ],
        ua: [
          'Дві голосні поруч часто читаються **одним складом**: **oa** — «уа», **ea** — «я», **ia** — «я», **ie** — «йе».',
          '**i** в кінці слова після приголосної майже не чути: воно лише пом’якшує її, як український **ь**. bani ≈ «бань», ieri ≈ «йерь».',
        ],
      },
      rows: [
        { ro: 'școală', tr: { ru: '«шкуалэ»', ua: '«шкуале»' } },
        { ro: 'seară', tr: { ru: '«сярэ»', ua: '«сяре»' } },
        { ro: 'iarnă', tr: { ru: '«ярнэ»', ua: '«ярне»' } },
        { ro: 'ieri', tr: { ru: '«йерь»', ua: '«йерь»' } },
        { ro: 'bani', tr: { ru: '«бань»', ua: '«бань»' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'școală', tr: { ru: 'школа', ua: 'школа' } },
        { ro: 'seară', tr: { ru: 'вечер', ua: 'вечір' } },
        { ro: 'iarnă', tr: { ru: 'зима', ua: 'зима' } },
        { ro: 'ieri', tr: { ru: 'вчера', ua: 'учора' } },
        { ro: 'bani', tr: { ru: 'деньги', ua: 'гроші' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Какое слово читается «сярэ»?', ua: 'Яке слово читається «сяре»?' },
      correct: 'seară',
      wrong: ['siară', 'sieră', 'seare'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Какое слово читается «бань»?', ua: 'Яке слово читається «бань»?' },
      correct: 'bani',
      wrong: ['bane', 'baie', 'banî'],
    },
    {
      kind: 'listen',
      ro: 'Bună seara!',
      tr: { ru: 'Добрый вечер!', ua: 'Добрий вечір!' },
      wrong: ['Bună ziua!', 'Bună dimineața!', 'Noapte bună!'],
    },
    {
      kind: 'pickNative',
      q: 'iarnă',
      correct: { ru: 'зима', ua: 'зима' },
      wrong: [
        { ru: 'лето', ua: 'літо' },
        { ru: 'вечер', ua: 'вечір' },
        { ru: 'школа', ua: 'школа' },
      ],
    },
    {
      kind: 'intro',
      ro: 'Unde e școala?',
      tr: { ru: 'Где школа?', ua: 'Де школа?' },
      note: {
        ru: 'С артиклем școală → școala ≈ «шкуала». oa остаётся одним слогом.',
        ua: 'З артиклем școală → școala ≈ «шкуала». oa лишається одним складом.',
      },
    },
    {
      kind: 'listen',
      ro: 'ieri',
      tr: { ru: 'вчера', ua: 'учора' },
      wrong: ['iarnă', 'seară', 'bani'],
    },
    {
      kind: 'dialog',
      title: { ru: 'Вечером на улице', ua: 'Увечері на вулиці' },
      lines: [
        { who: 'Ana', ro: 'Bună seara!', tr: { ru: 'Добрый вечер!', ua: 'Добрий вечір!' } },
        { who: 'Ion', ro: 'Bună seara! Unde e școala?', tr: { ru: 'Добрый вечер! Где школа?', ua: 'Добрий вечір! Де школа?' } },
        { who: 'Ana', ro: 'Școala e acolo.', tr: { ru: 'Школа там.', ua: 'Школа там.' } },
        { who: 'Ion', ro: 'Mulțumesc!', tr: { ru: 'Спасибо!', ua: 'Дякую!' } },
      ],
    },
    {
      kind: 'pickNative',
      q: 'Școala e acolo.',
      correct: { ru: 'Школа там.', ua: 'Школа там.' },
      wrong: [
        { ru: 'Школа здесь.', ua: 'Школа тут.' },
        { ru: 'Где школа?', ua: 'Де школа?' },
        { ru: 'Школа закрыта.', ua: 'Школа зачинена.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Вчера вечером в школе.', ua: 'Учора ввечері в школі.' },
      words: ['Ieri', 'seară', 'la', 'școală'],
      extra: ['iarnă', 'bani'],
      shown: 'Ieri seară la școală.',
    },
    {
      kind: 'type',
      q: { ru: 'зима', ua: 'зима' },
      answers: ['iarnă', 'iarna'],
      shown: 'iarnă',
    },
  ],
};
