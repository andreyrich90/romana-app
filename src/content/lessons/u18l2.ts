import type { Lesson } from '../types';

/** B1 · Unit 6 · Lesson 2 — renting a flat: a închiria, chiria, proprietarul, contractul, garanția, utilitățile, mobilat. */
export const u18l2: Lesson = {
  id: 'u18l2',
  title: { ru: 'Квартира', ua: 'Квартира' },
  words: [
    { ro: 'a închiria', tr: { ru: 'снимать, арендовать', ua: 'винаймати, орендувати' } },
    { ro: 'chiria', tr: { ru: 'плата за аренду', ua: 'орендна плата' } },
    { ro: 'proprietarul', tr: { ru: 'хозяин (квартиры)', ua: 'власник (квартири)' } },
    { ro: 'contractul', tr: { ru: 'договор', ua: 'договір' } },
    { ro: 'mobilat', tr: { ru: 'с мебелью', ua: 'з меблями' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Caut un apartament de închiriat.',
      tr: { ru: 'Ищу квартиру в аренду.', ua: 'Шукаю квартиру в оренду.' },
      note: {
        ru: 'de închiriat — «для аренды». închiria ≈ «ынкирия».',
        ua: 'de închiriat — «для оренди». închiria ≈ «инкірія».',
      },
    },
    {
      kind: 'intro',
      ro: 'Cât e chiria pe lună?',
      tr: { ru: 'Сколько стоит аренда в месяц?', ua: 'Скільки коштує оренда на місяць?' },
      note: {
        ru: 'chirie ≈ «кирие» — плата за квартиру.',
        ua: 'chirie ≈ «кіріє» — плата за квартиру.',
      },
    },
    {
      kind: 'intro',
      ro: 'Apartamentul e mobilat?',
      tr: { ru: 'Квартира с мебелью?', ua: 'Квартира з меблями?' },
      note: {
        ru: 'mobilat — «меблированный». Мебель — mobila.',
        ua: 'mobilat — «мебльований». Меблі — mobila.',
      },
    },
    {
      kind: 'tip',
      title: 'Chiria',
      body: {
        ru: [
          '**Chiria** — плата за аренду; **utilitățile** — коммунальные (свет, газ, вода); **garanția** — залог.',
          'С хозяином — **proprietarul** / **proprietara** — подписывают **contractul**.',
        ],
        ua: [
          '**Chiria** — орендна плата; **utilitățile** — комунальні (світло, газ, вода); **garanția** — застава.',
          'З власником — **proprietarul** / **proprietara** — підписують **contractul**.',
        ],
      },
      rows: [
        { ro: 'Utilitățile sunt incluse?', tr: { ru: 'Коммунальные включены?', ua: 'Комунальні включено?' } },
        { ro: 'garanția', tr: { ru: 'залог', ua: 'застава' } },
        { ro: 'proprietarul', tr: { ru: 'хозяин', ua: 'власник' } },
        { ro: 'Semnăm contractul.', tr: { ru: 'Подписываем договор.', ua: 'Підписуємо договір.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Сколько аренда в месяц?', ua: 'Скільки оренда на місяць?' },
      correct: 'Cât e chiria pe lună?',
      wrong: ['Cât e salariul pe lună?', 'Cât costă apartamentul?', 'Când plătesc chiria?'],
    },
    {
      kind: 'pickNative',
      q: 'Utilitățile sunt incluse?',
      correct: { ru: 'Коммунальные услуги включены?', ua: 'Комунальні послуги включено?' },
      wrong: [
        { ru: 'Завтрак включён?', ua: 'Сніданок включено?' },
        { ru: 'Квартира с мебелью?', ua: 'Квартира з меблями?' },
        { ru: 'Сколько стоят коммунальные?', ua: 'Скільки коштують комунальні?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'chiria', tr: { ru: 'аренда', ua: 'оренда' } },
        { ro: 'proprietarul', tr: { ru: 'хозяин', ua: 'власник' } },
        { ro: 'contractul', tr: { ru: 'договор', ua: 'договір' } },
        { ro: 'garanția', tr: { ru: 'залог', ua: 'застава' } },
        { ro: 'mobilat', tr: { ru: 'с мебелью', ua: 'з меблями' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Caut un apartament de închiriat',
      tr: { ru: 'Ищу квартиру в аренду', ua: 'Шукаю квартиру в оренду' },
      wrong: ['Caut o casă de închiriat', 'Am închiriat un apartament', 'Caut un apartament mobilat'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Квартира с мебелью?', ua: 'Квартира з меблями?' },
      words: ['Apartamentul', 'e', 'mobilat'],
      extra: ['mobilă', 'casa', 'sunt'],
      shown: 'Apartamentul e mobilat?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Когда мы подписываем договор?', ua: 'Коли ми підписуємо договір?' },
      correct: 'Când semnăm contractul?',
      wrong: ['Unde semnăm contractul?', 'Când plătim chiria?', 'Când ați semnat contractul?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я хотел бы снять квартиру.', ua: 'Я б хотів винайняти квартиру.' },
      words: ['Aș', 'vrea', 'să', 'închiriez', 'un', 'apartament'],
      extra: ['vreau', 'închiriat', 'o'],
      shown: 'Aș vrea să închiriez un apartament.',
    },
    {
      kind: 'type',
      q: { ru: 'Сколько аренда?', ua: 'Скільки оренда?' },
      answers: ['Cât e chiria', 'Cât costă chiria', 'Cât este chiria'],
      shown: 'Cât e chiria?',
    },
    {
      kind: 'type',
      q: { ru: 'Квартира с мебелью?', ua: 'Квартира з меблями?' },
      answers: ['Apartamentul e mobilat', 'Apartamentul este mobilat', 'E mobilat apartamentul', 'E mobilat'],
      shown: 'Apartamentul e mobilat?',
    },
  ],
};
