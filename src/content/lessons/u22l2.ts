import type { Lesson } from '../types';

/** B2 · Unit 4 · Lesson 2 — economy: au crescut / au scăzut cu … la sută, s-a scumpit / s-a ieftinit, se estimează că. */
export const u22l2: Lesson = {
  id: 'u22l2',
  title: { ru: 'Цены и экономика', ua: 'Ціни й економіка' },
  words: [
    { ro: 'au crescut', tr: { ru: 'выросли', ua: 'зросли' } },
    { ro: 'au scăzut', tr: { ru: 'снизились', ua: 'знизилися' } },
    { ro: 'la sută', tr: { ru: 'процент(ов)', ua: 'відсоток (відсотків)' } },
    { ro: 's-a scumpit', tr: { ru: 'подорожал', ua: 'подорожчав' } },
    { ro: 'se estimează că', tr: { ru: 'по оценкам, ожидается', ua: 'за оцінками, очікується' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Prețurile au crescut cu cinci la sută.',
      tr: { ru: 'Цены выросли на пять процентов.', ua: 'Ціни зросли на п’ять відсотків.' },
      note: {
        ru: 'На сколько — cu: au crescut cu cinci la sută. На письме: 5%.',
        ua: 'На скільки — cu: au crescut cu cinci la sută. На письмі: 5%.',
      },
    },
    {
      kind: 'intro',
      ro: 'Benzina s-a scumpit din nou.',
      tr: { ru: 'Бензин снова подорожал.', ua: 'Бензин знову подорожчав.' },
      note: {
        ru: 'a se scumpi — дорожать (scump — дорогой); a se ieftini — дешеветь (ieftin — дешёвый).',
        ua: 'a se scumpi — дорожчати (scump — дорогий); a se ieftini — дешевшати (ieftin — дешевий).',
      },
    },
    {
      kind: 'intro',
      ro: 'Se estimează că inflația va scădea.',
      tr: { ru: 'Ожидается, что инфляция снизится.', ua: 'Очікується, що інфляція знизиться.' },
      note: {
        ru: 'se estimează că — безличное «по оценкам»; va scădea — снизится (будущее).',
        ua: 'se estimează că — безособове «за оцінками»; va scădea — знизиться (майбутнє).',
      },
    },
    {
      kind: 'tip',
      title: 'Cu cinci la sută',
      body: {
        ru: [
          'Рост и падение: **a crescut / au crescut** (вырос / выросли), **a scăzut / au scăzut** (снизился / снизились). На сколько — **cu**: **cu zece la sută**.',
          'Безлично, как в газете: **se estimează că** (по оценкам), **se spune că** (говорят, что).',
        ],
        ua: [
          'Зростання і падіння: **a crescut / au crescut** (зріс / зросли), **a scăzut / au scăzut** (знизився / знизилися). На скільки — **cu**: **cu zece la sută**.',
          'Безособово, як у газеті: **se estimează că** (за оцінками), **se spune că** (кажуть, що).',
        ],
      },
      rows: [
        { ro: 'salariul a crescut', tr: { ru: 'зарплата выросла', ua: 'зарплата зросла' } },
        { ro: 'șomajul a scăzut', tr: { ru: 'безработица снизилась', ua: 'безробіття знизилося' } },
        { ro: 'cu zece la sută', tr: { ru: 'на десять процентов', ua: 'на десять відсотків' } },
        { ro: 's-a ieftinit', tr: { ru: 'подешевел', ua: 'подешевшав' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Цены выросли на пять процентов.', ua: 'Ціни зросли на п’ять відсотків.' },
      correct: 'Prețurile au crescut cu cinci la sută.',
      wrong: ['Prețurile au scăzut cu cinci la sută.', 'Prețurile au crescut la cinci la sută.', 'Prețul a crescut cu cincizeci la sută.'],
    },
    {
      kind: 'pickNative',
      q: 'Șomajul a scăzut anul acesta.',
      correct: { ru: 'Безработица в этом году снизилась.', ua: 'Безробіття цього року знизилося.' },
      wrong: [
        { ru: 'Безработица в этом году выросла.', ua: 'Безробіття цього року зросло.' },
        { ru: 'Зарплаты в этом году снизились.', ua: 'Зарплати цього року знизилися.' },
        { ru: 'Безработица снизится в следующем году.', ua: 'Безробіття знизиться наступного року.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'prețurile', tr: { ru: 'цены', ua: 'ціни' } },
        { ro: 'salariul', tr: { ru: 'зарплата', ua: 'зарплата' } },
        { ro: 'inflația', tr: { ru: 'инфляция', ua: 'інфляція' } },
        { ro: 'șomajul', tr: { ru: 'безработица', ua: 'безробіття' } },
        { ro: 'benzina', tr: { ru: 'бензин', ua: 'бензин' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Benzina s-a scumpit din nou',
      tr: { ru: 'Бензин снова подорожал', ua: 'Бензин знову подорожчав' },
      wrong: ['Benzina s-a ieftinit din nou', 'Pâinea s-a scumpit din nou', 'Benzina e scumpă'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Ожидается, что инфляция снизится.', ua: 'Очікується, що інфляція знизиться.' },
      words: ['Se', 'estimează', 'că', 'inflația', 'va', 'scădea'],
      extra: ['crește', 'scăzut', 'prețurile'],
      shown: 'Se estimează că inflația va scădea.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Хлеб подешевел.', ua: 'Хліб подешевшав.' },
      correct: 'Pâinea s-a ieftinit.',
      wrong: ['Pâinea s-a scumpit.', 'Pâinea e ieftină.', 'Pâinea se ieftinește.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Зарплата выросла на десять процентов.', ua: 'Зарплата зросла на десять відсотків.' },
      words: ['Salariul', 'a', 'crescut', 'cu', 'zece', 'la', 'sută'],
      extra: ['scăzut', 'din', 'cinci'],
      shown: 'Salariul a crescut cu zece la sută.',
    },
    {
      kind: 'type',
      q: { ru: 'Цены выросли.', ua: 'Ціни зросли.' },
      answers: ['Prețurile au crescut', 'Prețurile s-au mărit'],
      shown: 'Prețurile au crescut.',
    },
    {
      kind: 'type',
      q: { ru: 'Бензин подорожал.', ua: 'Бензин подорожчав.' },
      answers: ['Benzina s-a scumpit'],
      shown: 'Benzina s-a scumpit.',
    },
  ],
};
