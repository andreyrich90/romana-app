import type { Lesson } from '../types';

/** Unit 1 · Lesson 1 — greetings, thanks, please, introducing yourself. */
export const u1l1: Lesson = {
  id: 'u1l1',
  title: { ru: 'Приветствия', ua: 'Привітання' },
  words: [
    { ro: 'Salut!', tr: { ru: 'Привет!', ua: 'Привіт!' } },
    { ro: 'Bună ziua!', tr: { ru: 'Добрый день!', ua: 'Добрий день!' } },
    { ro: 'Mulțumesc', tr: { ru: 'Спасибо', ua: 'Дякую' } },
    { ro: 'Te rog', tr: { ru: 'Пожалуйста', ua: 'Будь ласка' } },
    { ro: 'La revedere!', tr: { ru: 'До свидания!', ua: 'До побачення!' } },
    { ro: 'Da / Nu', tr: { ru: 'Да / Нет', ua: 'Так / Ні' } },
    { ro: 'Ce faci?', tr: { ru: 'Как дела?', ua: 'Як справи?' } },
    { ro: 'Mă numesc…', tr: { ru: 'Меня зовут…', ua: 'Мене звати…' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Salut!',
      tr: { ru: 'Привет!', ua: 'Привіт!' },
      note: {
        ru: 'Неформально: друзьям, ровесникам, коллегам. Им же можно и попрощаться.',
        ua: 'Неформально: друзям, одноліткам, колегам. Ним же можна й попрощатися.',
      },
    },
    {
      kind: 'intro',
      ro: 'Bună ziua!',
      tr: { ru: 'Добрый день!', ua: 'Добрий день!' },
      note: {
        ru: 'Вежливо: в магазине, в офисе, с незнакомыми. «ă» читается как безударное «ы/э».',
        ua: 'Ввічливо: у магазині, в офісі, з незнайомими. «ă» читається як ненаголошене «и/е».',
      },
    },
    {
      kind: 'pickNative',
      q: 'Mulțumesc',
      correct: { ru: 'Спасибо', ua: 'Дякую' },
      wrong: [
        { ru: 'Пожалуйста', ua: 'Будь ласка' },
        { ru: 'До свидания', ua: 'До побачення' },
        { ru: 'Привет', ua: 'Привіт' },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'До свидания!', ua: 'До побачення!' },
      correct: 'La revedere!',
      wrong: ['Bună ziua!', 'Te rog!', 'Mulțumesc!'],
    },
    {
      kind: 'listen',
      ro: 'Te rog',
      tr: { ru: 'Пожалуйста', ua: 'Будь ласка' },
      wrong: ['Da', 'Nu', 'Salut'],
    },
    {
      kind: 'tip',
      title: 'Bună ziua, seara, dimineața',
      body: {
        ru: [
          '**Bună** значит «добрая» — женский род, потому что zi (день), seară (вечер) и dimineață (утро) в румынском женского рода.',
          'Определённый артикль пишется **в конце слова**: zi → zi**ua**, seară → sear**a**, dimineață → dimineaț**a**. Это главная особенность румынского — привыкайте к ней с первого дня.',
        ],
        ua: [
          '**Bună** означає «добра» — жіночий рід, бо zi (день), seară (вечір) і dimineață (ранок) у румунській жіночого роду.',
          'Означений артикль пишеться **в кінці слова**: zi → zi**ua**, seară → sear**a**, dimineață → dimineaț**a**. Це головна особливість румунської — звикайте до неї з першого дня.',
        ],
      },
      rows: [
        { ro: 'Bună dimineața', tr: { ru: 'Доброе утро · примерно до 11:00', ua: 'Доброго ранку · приблизно до 11:00' } },
        { ro: 'Bună ziua', tr: { ru: 'Добрый день · днём', ua: 'Добрий день · вдень' } },
        { ro: 'Bună seara', tr: { ru: 'Добрый вечер · после ~18:00', ua: 'Добрий вечір · після ~18:00' } },
        { ro: 'Noapte bună', tr: { ru: 'Спокойной ночи · только прощание', ua: 'На добраніч · лише прощання' } },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Добрый вечер! Как дела?', ua: 'Добрий вечір! Як справи?' },
      words: ['Bună', 'seara', 'ce', 'faci'],
      extra: ['ziua', 'bine', 'nu'],
      shown: 'Bună seara! Ce faci?',
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'da', tr: { ru: 'да', ua: 'так' } },
        { ro: 'nu', tr: { ru: 'нет', ua: 'ні' } },
        { ro: 'salut', tr: { ru: 'привет', ua: 'привіт' } },
        { ro: 'mulțumesc', tr: { ru: 'спасибо', ua: 'дякую' } },
        { ro: 'te rog', tr: { ru: 'пожалуйста', ua: 'будь ласка' } },
      ],
    },
    {
      kind: 'type',
      q: { ru: 'Меня зовут Анна.', ua: 'Мене звати Анна.' },
      answers: ['Mă numesc Ana', 'Numele meu este Ana', 'Eu sunt Ana', 'Sunt Ana'],
      shown: 'Mă numesc Ana.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Хорошо, спасибо.', ua: 'Добре, дякую.' },
      words: ['Bine', 'mulțumesc'],
      extra: ['Bună', 'rog', 'seara', 'Nu'],
      shown: 'Bine, mulțumesc.',
    },
    {
      kind: 'type',
      q: { ru: 'Доброе утро!', ua: 'Доброго ранку!' },
      answers: ['Bună dimineața'],
      shown: 'Bună dimineața!',
    },
  ],
};
