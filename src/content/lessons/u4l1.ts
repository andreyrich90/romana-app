import type { Lesson } from '../types';

/** Unit 4 · Lesson 1 — asking where things are: «Unde este…?», places in town, aici / acolo, aproape / departe. */
export const u4l1: Lesson = {
  id: 'u4l1',
  title: { ru: 'Где это?', ua: 'Де це?' },
  words: [
    { ro: 'Unde este…?', tr: { ru: 'Где…?', ua: 'Де…?' } },
    { ro: 'gara', tr: { ru: 'вокзал', ua: 'вокзал' } },
    { ro: 'farmacia, banca, hotelul', tr: { ru: 'аптека, банк, гостиница', ua: 'аптека, банк, готель' } },
    { ro: 'toaleta', tr: { ru: 'туалет', ua: 'туалет' } },
    { ro: 'aici, acolo', tr: { ru: 'здесь, там', ua: 'тут, там' } },
    { ro: 'aproape, departe', tr: { ru: 'близко, далеко', ua: 'близько, далеко' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Unde este gara?',
      tr: { ru: 'Где вокзал?', ua: 'Де вокзал?' },
      note: {
        ru: 'unde ≈ «унде». О конкретном месте спрашивают с артиклем: gară → gara.',
        ua: 'unde ≈ «унде». Про конкретне місце питають з артиклем: gară → gara.',
      },
    },
    {
      kind: 'intro',
      ro: 'farmacia, banca, hotelul',
      tr: { ru: 'аптека, банк, гостиница', ua: 'аптека, банк, готель' },
      note: {
        ru: 'Слова знакомые, артикль — как в разделе 2: farmacie → farmacia, bancă → banca, hotel → hotelul.',
        ua: 'Слова знайомі, артикль — як у розділі 2: farmacie → farmacia, bancă → banca, hotel → hotelul.',
      },
    },
    {
      kind: 'intro',
      ro: 'aici, acolo',
      tr: { ru: 'здесь, там', ua: 'тут, там' },
      note: {
        ru: 'aici ≈ «аичь», acolo ≈ «аколо». Toaleta este acolo — Туалет там.',
        ua: 'aici ≈ «аїчь», acolo ≈ «аколо». Toaleta este acolo — Туалет там.',
      },
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'gara', tr: { ru: 'вокзал', ua: 'вокзал' } },
        { ro: 'farmacia', tr: { ru: 'аптека', ua: 'аптека' } },
        { ro: 'hotelul', tr: { ru: 'гостиница', ua: 'готель' } },
        { ro: 'banca', tr: { ru: 'банк', ua: 'банк' } },
        { ro: 'toaleta', tr: { ru: 'туалет', ua: 'туалет' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'aproape, departe',
      tr: { ru: 'близко, далеко', ua: 'близько, далеко' },
      note: {
        ru: 'aproape ≈ «апроапе». Спросить «Это далеко?» — просто E departe?',
        ua: 'aproape ≈ «апроапе». Спитати «Це далеко?» — просто E departe?',
      },
    },
    {
      kind: 'tip',
      title: 'Unde este? Unde sunt?',
      body: {
        ru: [
          'Об одном месте — **este** (в разговоре просто **e**), о нескольких — **sunt**: Unde **sunt** toaletele?',
          'В румынском **unde** — и «где», и «куда». Это пригодится в следующем уроке.',
        ],
        ua: [
          'Про одне місце — **este** (у розмові просто **e**), про кілька — **sunt**: Unde **sunt** toaletele?',
          'У румунській **unde** — і «де», і «куди». Це знадобиться в наступному уроці.',
        ],
      },
      rows: [
        { ro: 'Unde este gara?', tr: { ru: 'Где вокзал? · «унде есте гара»', ua: 'Де вокзал? · «унде єсте гара»' } },
        { ro: 'Unde e hotelul?', tr: { ru: 'Где гостиница? · «унде е хотелул»', ua: 'Де готель? · «унде є хотелул»' } },
        { ro: 'Unde sunt toaletele?', tr: { ru: 'Где туалеты? · «унде сунт тоалетеле»', ua: 'Де туалети? · «унде сунт тоалетеле»' } },
        { ro: 'E aproape.', tr: { ru: 'Это близко. · «е апроапе»', ua: 'Це близько. · «є апроапе»' } },
        { ro: 'E departe.', tr: { ru: 'Это далеко. · «е департе»', ua: 'Це далеко. · «є департе»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Где аптека?', ua: 'Де аптека?' },
      correct: 'Unde este farmacia?',
      wrong: ['Unde este farmacie?', 'Unde sunt farmacia?', 'Unde este banca?'],
    },
    {
      kind: 'listen',
      ro: 'Hotelul este aproape',
      tr: { ru: 'Гостиница близко', ua: 'Готель близько' },
      wrong: ['Hotelul este departe', 'Gara este aproape', 'Hotelul este aici'],
    },
    {
      kind: 'pickNative',
      q: 'Toaleta este acolo.',
      correct: { ru: 'Туалет там.', ua: 'Туалет там.' },
      wrong: [
        { ru: 'Туалет здесь.', ua: 'Туалет тут.' },
        { ru: 'Где туалет?', ua: 'Де туалет?' },
        { ru: 'Туалет далеко.', ua: 'Туалет далеко.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Где вокзал?', ua: 'Де вокзал?' },
      words: ['Unde', 'este', 'gara'],
      extra: ['sunt', 'hotelul', 'aici'],
      shown: 'Unde este gara?',
    },
    {
      kind: 'tiles',
      q: { ru: 'Банк близко?', ua: 'Банк близько?' },
      words: ['Banca', 'este', 'aproape'],
      extra: ['departe', 'unde', 'sunt'],
      shown: 'Banca este aproape?',
      also: ['Este banca aproape'],
    },
    {
      kind: 'type',
      q: { ru: 'Где гостиница?', ua: 'Де готель?' },
      answers: ['Unde este hotelul', 'Unde e hotelul'],
      shown: 'Unde este hotelul?',
    },
    {
      kind: 'type',
      q: { ru: 'Это далеко?', ua: 'Це далеко?' },
      answers: ['E departe', 'Este departe'],
      shown: 'E departe?',
    },
  ],
};
