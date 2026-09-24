import type { Lesson } from '../types';

/** B1 · Unit 1 · Lesson 5 — review of the imperfect against the perfect compus. No new grammar. */
export const u13l5: Lesson = {
  id: 'u13l5',
  title: { ru: 'Повторение', ua: 'Повторення' },
  words: [
    { ro: 'În fiecare vară mergeam la mare.', tr: { ru: 'Каждое лето мы ездили на море.', ua: 'Щоліта ми їздили на море.' } },
    { ro: 'Dormeam când a sunat telefonul.', tr: { ru: 'Я спал, когда зазвонил телефон.', ua: 'Я спав, коли задзвонив телефон.' } },
    { ro: 'Îmi amintesc de școală.', tr: { ru: 'Я помню школу.', ua: 'Я пам’ятаю школу.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Imperfectul',
      body: {
        ru: [
          'Имперфект — фон, привычка, описание: **eram, aveam, lucram, mergeam, îmi plăcea**.',
          '**Am + форма** — одно событие: **a sunat, am fost**. Вместе: **Dormeam când a sunat telefonul.**',
        ],
        ua: [
          'Імперфект — тло, звичка, опис: **eram, aveam, lucram, mergeam, îmi plăcea**.',
          '**Am + форма** — одна подія: **a sunat, am fost**. Разом: **Dormeam când a sunat telefonul.**',
        ],
      },
      rows: [
        { ro: 'eram', tr: { ru: 'я был', ua: 'я був' } },
        { ro: 'aveam', tr: { ru: 'у меня было', ua: 'у мене було' } },
        { ro: 'lucram', tr: { ru: 'я работал', ua: 'я працював' } },
        { ro: 'mergeam', tr: { ru: 'я ходил', ua: 'я ходив' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Раньше мы жили в Кишинёве.', ua: 'Раніше ми жили в Кишиневі.' },
      correct: 'Înainte locuiam la Chișinău.',
      wrong: ['Acum locuim la Chișinău.', 'Înainte locuiați la Chișinău.', 'O să locuim la Chișinău.'],
    },
    {
      kind: 'pickNative',
      q: 'Când eram mică, îmi plăcea să desenez.',
      correct: { ru: 'Когда я была маленькой, я любила рисовать.', ua: 'Коли я була малою, я любила малювати.' },
      wrong: [
        { ru: 'Сейчас я люблю рисовать.', ua: 'Зараз я люблю малювати.' },
        { ru: 'Когда я была маленькой, я не любила рисовать.', ua: 'Коли я була малою, я не любила малювати.' },
        { ru: 'Когда он был маленьким, он любил рисовать.', ua: 'Коли він був малим, він любив малювати.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'eram', tr: { ru: 'я был', ua: 'я був' } },
        { ro: 'aveam', tr: { ru: 'у меня было', ua: 'у мене було' } },
        { ro: 'ploua', tr: { ru: 'шёл дождь', ua: 'ішов дощ' } },
        { ro: 'deodată', tr: { ru: 'вдруг', ua: 'раптом' } },
        { ro: 'mereu', tr: { ru: 'всегда', ua: 'завжди' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Pe vremuri totul era altfel',
      tr: { ru: 'В былые времена всё было иначе', ua: 'Колись усе було інакше' },
      wrong: ['Pe vremuri totul era frumos', 'Acum totul e altfel', 'Pe vremuri totul era ieftin'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Каждое лето мы ездили на море.', ua: 'Щоліта ми їздили на море.' },
      words: ['În', 'fiecare', 'vară', 'mergeam', 'la', 'mare'],
      extra: ['vara', 'am', 'mers'],
      shown: 'În fiecare vară mergeam la mare.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Пока я работал, дети играли.', ua: 'Поки я працював, діти гралися.' },
      correct: 'În timp ce lucram, copiii se jucau.',
      wrong: ['În timp ce lucram, copiii s-au jucat.', 'În timp ce am lucrat, copiii se joacă.', 'Deodată am lucrat, copiii se jucau.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я читал, когда пришла мама.', ua: 'Я читав, коли прийшла мама.' },
      words: ['Citeam', 'când', 'a', 'venit', 'mama'],
      extra: ['am', 'citit', 'venea'],
      shown: 'Citeam când a venit mama.',
    },
    {
      kind: 'type',
      q: { ru: 'Раньше я много работал(а).', ua: 'Раніше я багато працював(ла).' },
      answers: ['Înainte lucram mult', 'Lucram mult înainte', 'Înainte eu lucram mult'],
      shown: 'Înainte lucram mult.',
    },
    {
      kind: 'type',
      q: { ru: 'Вдруг зазвонил телефон.', ua: 'Раптом задзвонив телефон.' },
      answers: ['Deodată a sunat telefonul', 'Telefonul a sunat deodată', 'Deodată telefonul a sunat'],
      shown: 'Deodată a sunat telefonul.',
    },
    {
      kind: 'type',
      q: { ru: 'Я помню школу.', ua: 'Я пам’ятаю школу.' },
      answers: ['Îmi amintesc de școală', 'Îmi aduc aminte de școală', 'Mi-amintesc de școală'],
      shown: 'Îmi amintesc de școală.',
    },
  ],
};
