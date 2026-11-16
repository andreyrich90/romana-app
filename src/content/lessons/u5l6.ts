import type { Lesson } from '../types';

/** Unit 5 · Lesson 6 — the date: Ce dată e azi?, pe opt martie, întâi for the first, birthdays. */
export const u5l6: Lesson = {
  id: 'u5l6',
  title: { ru: 'Какое сегодня число?', ua: 'Яке сьогодні число?' },
  words: [
    { ro: 'Ce dată e azi?', tr: { ru: 'Какое сегодня число?', ua: 'Яке сьогодні число?' } },
    { ro: 'Azi e cinci martie.', tr: { ru: 'Сегодня пятое марта.', ua: 'Сьогодні п’яте березня.' } },
    { ro: 'pe opt martie', tr: { ru: 'восьмого марта', ua: 'восьмого березня' } },
    { ro: 'întâi ianuarie', tr: { ru: 'первое января', ua: 'перше січня' } },
    { ro: 'ziua de naștere', tr: { ru: 'день рождения', ua: 'день народження' } },
    { ro: 'La mulți ani!', tr: { ru: 'С днём рождения! С праздником!', ua: 'З днем народження! Зі святом!' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Ce dată e azi?',
      tr: { ru: 'Какое сегодня число?', ua: 'Яке сьогодні число?' },
      note: {
        ru: 'data — «дата, число». azi и astăzi — оба «сегодня».',
        ua: 'data — «дата, число». azi і astăzi — обидва «сьогодні».',
      },
    },
    {
      kind: 'intro',
      ro: 'Azi e cinci martie.',
      tr: { ru: 'Сегодня пятое марта.', ua: 'Сьогодні п’яте березня.' },
      note: {
        ru: 'В дате — обычное число, как на часах: cinci martie, буквально «пять марта». Месяц пишут с маленькой буквы.',
        ua: 'У даті — звичайне число, як на годиннику: cinci martie, буквально «п’ять березня». Місяць пишуть з малої літери.',
      },
    },
    {
      kind: 'intro',
      ro: 'pe opt martie',
      tr: { ru: 'восьмого марта', ua: 'восьмого березня' },
      note: {
        ru: '«Какого числа?» — с pe: pe opt martie, pe zece mai. Вопрос: Pe ce dată?',
        ua: '«Якого числа?» — з pe: pe opt martie, pe zece mai. Питання: Pe ce dată?',
      },
    },
    {
      kind: 'tip',
      title: 'Data',
      body: {
        ru: [
          'Только **первое** число говорят особо: **întâi** — întâi ianuarie, întâi decembrie.',
          'Остальные — простые числа: **doi** mai, **trei** iunie, **douăzeci și patru** august.',
        ],
        ua: [
          'Лише **перше** число кажуть по-особливому: **întâi** — întâi ianuarie, întâi decembrie.',
          'Решта — прості числа: **doi** mai, **trei** iunie, **douăzeci și patru** august.',
        ],
      },
      rows: [
        { ro: 'întâi decembrie', tr: { ru: 'первое декабря', ua: 'перше грудня' } },
        { ro: 'doi mai', tr: { ru: 'второе мая', ua: 'друге травня' } },
        { ro: 'pe trei iunie', tr: { ru: 'третьего июня', ua: 'третього червня' } },
        { ro: 'Pe ce dată?', tr: { ru: 'Какого числа?', ua: 'Якого числа?' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'Ziua mea de naștere e pe zece mai.',
      tr: { ru: 'Мой день рождения — десятого мая.', ua: 'Мій день народження — десятого травня.' },
      note: {
        ru: 'ziua de naștere — «день рождения». Поздравляют так: La mulți ani! — буквально «много лет».',
        ua: 'ziua de naștere — «день народження». Вітають так: La mulți ani! — буквально «багато років».',
      },
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'azi', tr: { ru: 'сегодня', ua: 'сьогодні' } },
        { ro: 'mâine', tr: { ru: 'завтра', ua: 'завтра' } },
        { ro: 'ieri', tr: { ru: 'вчера', ua: 'учора' } },
        { ro: 'data', tr: { ru: 'число, дата', ua: 'число, дата' } },
        { ro: 'ziua de naștere', tr: { ru: 'день рождения', ua: 'день народження' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сегодня третье июня.', ua: 'Сьогодні третє червня.' },
      correct: 'Azi e trei iunie.',
      wrong: ['Azi e trei iulie.', 'Azi e treia iunie.', 'Mâine e trei iunie.'],
    },
    {
      kind: 'pickNative',
      q: 'pe întâi ianuarie',
      correct: { ru: 'первого января', ua: 'першого січня' },
      wrong: [
        { ru: 'в январе', ua: 'у січні' },
        { ru: 'первого июня', ua: 'першого червня' },
        { ru: 'до января', ua: 'до січня' },
      ],
    },
    {
      kind: 'listen',
      ro: 'Azi e zece mai.',
      tr: { ru: 'Сегодня десятое мая.', ua: 'Сьогодні десяте травня.' },
      wrong: ['Azi e zece martie.', 'Azi e doi mai.', 'Mâine e zece mai.'],
    },
    {
      kind: 'pickNative',
      q: 'La mulți ani!',
      correct: { ru: 'С днём рождения!', ua: 'З днем народження!' },
      wrong: [
        { ru: 'До свидания!', ua: 'До побачення!' },
        { ru: 'Спокойной ночи!', ua: 'На добраніч!' },
        { ru: 'Приятного аппетита!', ua: 'Смачного!' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мой день рождения — восьмого марта.', ua: 'Мій день народження — восьмого березня.' },
      words: ['Ziua', 'mea', 'de', 'naștere', 'e', 'pe', 'opt', 'martie'],
      extra: ['în', 'mai'],
      shown: 'Ziua mea de naștere e pe opt martie.',
    },
    {
      kind: 'type',
      q: { ru: 'Какое сегодня число?', ua: 'Яке сьогодні число?' },
      answers: ['Ce dată e azi?', 'Ce dată este azi?', 'Ce dată e astăzi?', 'Ce dată este astăzi?'],
      shown: 'Ce dată e azi?',
    },
  ],
};
