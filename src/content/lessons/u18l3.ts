import type { Lesson } from '../types';

/** B1 · Unit 6 · Lesson 3 — the imperative for tu: vino, fă, du-te, ia, stai, fii; lucrează, citește; negative nu + infinitive. */
export const u18l3: Lesson = {
  id: 'u18l3',
  title: { ru: 'Приди! Сделай!', ua: 'Прийди! Зроби!' },
  words: [
    { ro: 'vino!', tr: { ru: 'приходи! иди сюда!', ua: 'приходь! іди сюди!' } },
    { ro: 'du-te!', tr: { ru: 'иди! уходи!', ua: 'іди! йди геть!' } },
    { ro: 'ia!', tr: { ru: 'возьми!', ua: 'візьми!' } },
    { ro: 'stai!', tr: { ru: 'подожди! стой!', ua: 'почекай! стій!' } },
    { ro: 'nu uita!', tr: { ru: 'не забудь!', ua: 'не забудь!' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Vino aici!',
      tr: { ru: 'Иди сюда!', ua: 'Іди сюди!' },
      note: {
        ru: 'Повелительное на «ты» у частых глаголов неправильное: a veni → vino ≈ «вино».',
        ua: 'Наказовий спосіб на «ти» в частих дієслів неправильний: a veni → vino ≈ «віно».',
      },
    },
    {
      kind: 'intro',
      ro: 'Du-te acasă!',
      tr: { ru: 'Иди домой!', ua: 'Іди додому!' },
      note: {
        ru: 'a merge → du-te ≈ «дуте» — «иди, уходи». Вежливо и многим — mergeți.',
        ua: 'a merge → du-te ≈ «дуте» — «іди». Увічливо й до багатьох — mergeți.',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu uita cheile!',
      tr: { ru: 'Не забудь ключи!', ua: 'Не забудь ключі!' },
      note: {
        ru: 'Запрет на «ты» — nu + словарная форма без a: nu uita, nu pleca, nu fi trist.',
        ua: 'Заборона на «ти» — nu + словникова форма без a: nu uita, nu pleca, nu fi trist.',
      },
    },
    {
      kind: 'tip',
      title: 'Vino! Nu uita!',
      body: {
        ru: [
          'Чаще всего повелительное на «ты» совпадает с формой «он»: **lucrează!** (работай), **ascultă!** (слушай), **citește!** (читай), **scrie!** (пиши).',
          'Неправильные — запомнить: **vino** (приходи), **fă** (сделай), **du-te** (иди), **ia** (возьми), **stai** (стой, подожди), **fii** (будь).',
          'Запрет: **nu** + словарная форма: **nu veni**, **nu uita**, **nu pleca**, **nu fi trist**.',
        ],
        ua: [
          'Найчастіше наказовий на «ти» збігається з формою «він»: **lucrează!** (працюй), **ascultă!** (слухай), **citește!** (читай), **scrie!** (пиши).',
          'Неправильні — запам’ятати: **vino** (приходь), **fă** (зроби), **du-te** (іди), **ia** (візьми), **stai** (стій, почекай), **fii** (будь).',
          'Заборона: **nu** + словникова форма: **nu veni**, **nu uita**, **nu pleca**, **nu fi trist**.',
        ],
      },
      rows: [
        { ro: 'Vino!', tr: { ru: 'Приходи! Иди сюда!', ua: 'Приходь! Іди сюди!' } },
        { ro: 'Fă asta!', tr: { ru: 'Сделай это!', ua: 'Зроби це!' } },
        { ro: 'Stai puțin!', tr: { ru: 'Подожди немного!', ua: 'Почекай трохи!' } },
        { ro: 'Nu pleca!', tr: { ru: 'Не уходи!', ua: 'Не йди!' } },
        { ro: 'Fii atent!', tr: { ru: 'Будь внимателен!', ua: 'Будь уважний!' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Иди сюда!', ua: 'Іди сюди!' },
      correct: 'Vino aici!',
      wrong: ['Vin aici!', 'Du-te acolo!', 'Vine aici!'],
    },
    {
      kind: 'pickNative',
      q: 'Stai puțin!',
      correct: { ru: 'Подожди немного!', ua: 'Почекай трохи!' },
      wrong: [
        { ru: 'Иди быстрее!', ua: 'Іди швидше!' },
        { ru: 'Не уходи!', ua: 'Не йди!' },
        { ru: 'Приходи завтра!', ua: 'Приходь завтра!' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'vino', tr: { ru: 'приходи', ua: 'приходь' } },
        { ro: 'du-te', tr: { ru: 'иди', ua: 'іди' } },
        { ro: 'ia', tr: { ru: 'возьми', ua: 'візьми' } },
        { ro: 'stai', tr: { ru: 'подожди', ua: 'почекай' } },
        { ro: 'nu uita', tr: { ru: 'не забудь', ua: 'не забудь' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Nu uita cheile',
      tr: { ru: 'Не забудь ключи', ua: 'Не забудь ключі' },
      wrong: ['Nu uita telefonul', 'Ia cheile', 'Am uitat cheile'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Сделай это сейчас!', ua: 'Зроби це зараз!' },
      words: ['Fă', 'asta', 'acum'],
      extra: ['face', 'fac', 'mâine'],
      shown: 'Fă asta acum!',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Не уходи!', ua: 'Не йди!' },
      correct: 'Nu pleca!',
      wrong: ['Nu pleci!', 'Pleacă!', 'Nu plec!'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Будь внимателен!', ua: 'Будь уважний!' },
      words: ['Fii', 'atent'],
      extra: ['ești', 'atentă', 'nu'],
      shown: 'Fii atent!',
    },
    {
      kind: 'type',
      q: { ru: 'Иди сюда!', ua: 'Іди сюди!' },
      answers: ['Vino aici', 'Vino încoace'],
      shown: 'Vino aici!',
    },
    {
      kind: 'type',
      q: { ru: 'Не забудь!', ua: 'Не забудь!' },
      answers: ['Nu uita'],
      shown: 'Nu uita!',
    },
  ],
};
