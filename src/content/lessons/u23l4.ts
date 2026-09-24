import type { Lesson } from '../types';

/** B2 · Unit 5 · Lesson 4 — polite requests and firm refusals: v-aș ruga să, nu vă supărați, din păcate, nu sunt de acord, vă rog să nu. */
export const u23l4: Lesson = {
  id: 'u23l4',
  title: { ru: 'Вежливо и твёрдо', ua: 'Ввічливо й твердо' },
  words: [
    { ro: 'v-aș ruga să', tr: { ru: 'я бы попросил вас', ua: 'я б попросив вас' } },
    { ro: 'nu vă supărați', tr: { ru: 'извините (не сердитесь)', ua: 'вибачте (не гнівайтеся)' } },
    { ro: 'din păcate', tr: { ru: 'к сожалению', ua: 'на жаль' } },
    { ro: 'nu sunt de acord', tr: { ru: 'я не согласен', ua: 'я не згоден' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'V-aș ruga să închideți ușa.',
      tr: { ru: 'Я бы попросил вас закрыть дверь.', ua: 'Я б попросив вас зачинити двері.' },
      note: {
        ru: 'aș ruga — условное наклонение из B1: очень вежливая просьба.',
        ua: 'aș ruga — умовний спосіб із B1: дуже ввічливе прохання.',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu vă supărați, unde este gara?',
      tr: { ru: 'Извините, где вокзал?', ua: 'Вибачте, де вокзал?' },
      note: {
        ru: 'Дословно «не сердитесь»: так обращаются к незнакомому человеку.',
        ua: 'Дослівно «не гнівайтеся»: так звертаються до незнайомої людини.',
      },
    },
    {
      kind: 'intro',
      ro: 'Îmi pare rău, dar nu sunt de acord.',
      tr: { ru: 'Мне жаль, но я не согласен.', ua: 'Мені шкода, але я не згоден.' },
      note: {
        ru: 'a fi de acord — быть согласным; sunt de acord — согласен.',
        ua: 'a fi de acord — погоджуватися; sunt de acord — згоден.',
      },
    },
    {
      kind: 'tip',
      title: 'Вежливо, но твёрдо',
      body: {
        ru: [
          'Просьба: **vă rog să** + глагол (прошу вас), **v-aș ruga să** (я бы попросил вас — мягче), **ați putea să…?** (не могли бы вы…?).',
          'Отказ: **din păcate, nu pot** (к сожалению, не могу), **îmi pare rău, dar…** (мне жаль, но…), **nu sunt de acord** (не согласен). Запрет вежливо: **vă rog să nu fumați**.',
        ],
        ua: [
          'Прохання: **vă rog să** + дієслово (прошу вас), **v-aș ruga să** (я б попросив вас — м’якше), **ați putea să…?** (чи не могли б ви…?).',
          'Відмова: **din păcate, nu pot** (на жаль, не можу), **îmi pare rău, dar…** (мені шкода, але…), **nu sunt de acord** (не згоден). Заборона ввічливо: **vă rog să nu fumați**.',
        ],
      },
      rows: [
        { ro: 'vă rog să așteptați', tr: { ru: 'прошу вас подождать', ua: 'прошу вас зачекати' } },
        { ro: 'ați putea să repetați?', tr: { ru: 'не могли бы вы повторить?', ua: 'чи не могли б ви повторити?' } },
        { ro: 'din păcate, nu pot', tr: { ru: 'к сожалению, не могу', ua: 'на жаль, не можу' } },
        { ro: 'sunt de acord', tr: { ru: 'я согласен', ua: 'я згоден' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я бы попросил вас закрыть дверь.', ua: 'Я б попросив вас зачинити двері.' },
      correct: 'V-aș ruga să închideți ușa.',
      wrong: ['V-am rugat să închideți ușa.', 'V-aș ruga să deschideți ușa.', 'Închideți ușa!'],
    },
    {
      kind: 'pickNative',
      q: 'Din păcate, nu pot veni mâine.',
      correct: { ru: 'К сожалению, я не смогу прийти завтра.', ua: 'На жаль, я не зможу прийти завтра.' },
      wrong: [
        { ru: 'К счастью, я смогу прийти завтра.', ua: 'На щастя, я зможу прийти завтра.' },
        { ru: 'К сожалению, я не пришёл вчера.', ua: 'На жаль, я не прийшов учора.' },
        { ru: 'Я приду завтра, не волнуйтесь.', ua: 'Я прийду завтра, не хвилюйтеся.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'din păcate', tr: { ru: 'к сожалению', ua: 'на жаль' } },
        { ro: 'de acord', tr: { ru: 'согласен', ua: 'згоден' } },
        { ro: 'nu vă supărați', tr: { ru: 'извините', ua: 'вибачте' } },
        { ro: 'vă rog', tr: { ru: 'прошу вас', ua: 'прошу вас' } },
        { ro: 'îmi pare rău', tr: { ru: 'мне жаль', ua: 'мені шкода' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Nu vă supărați, unde este gara?',
      tr: { ru: 'Извините, где вокзал?', ua: 'Вибачте, де вокзал?' },
      wrong: ['Nu vă supărați, unde este banca?', 'Nu vă supărați, când pleacă trenul?', 'Nu te supăra, unde este gara?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне жаль, но я не согласен.', ua: 'Мені шкода, але я не згоден.' },
      words: ['Îmi', 'pare', 'rău', 'dar', 'nu', 'sunt', 'de', 'acord'],
      extra: ['bine', 'și', 'păcate'],
      shown: 'Îmi pare rău, dar nu sunt de acord.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Прошу вас не курить здесь.', ua: 'Прошу вас не палити тут.' },
      correct: 'Vă rog să nu fumați aici.',
      wrong: ['Vă rog să fumați aici.', 'Nu vă rog să fumați aici.', 'Aici se fumează.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'К сожалению, я не могу.', ua: 'На жаль, я не можу.' },
      words: ['Din', 'păcate', 'nu', 'pot'],
      extra: ['acord', 'poți', 'rău'],
      shown: 'Din păcate, nu pot.',
    },
    {
      kind: 'type',
      q: { ru: 'Я согласен.', ua: 'Я згоден.' },
      answers: ['Sunt de acord', 'De acord'],
      shown: 'Sunt de acord.',
    },
    {
      kind: 'type',
      q: { ru: 'К сожалению.', ua: 'На жаль.' },
      answers: ['Din păcate', 'Din nefericire'],
      shown: 'Din păcate.',
    },
  ],
};
