import type { Lesson } from '../types';

/** B2 · Unit 2 · Lesson 2 — past unreal conditions: dacă aș fi știut, aș fi venit; the colloquial dacă știam, veneam. */
export const u20l2: Lesson = {
  id: 'u20l2',
  title: { ru: 'Если бы я знал', ua: 'Якби я знав' },
  words: [
    { ro: 'dacă aș fi știut', tr: { ru: 'если бы я знал', ua: 'якби я знав' } },
    { ro: 'aș fi venit', tr: { ru: 'я бы пришёл', ua: 'я б прийшов' } },
    { ro: 'mai devreme', tr: { ru: 'раньше', ua: 'раніше' } },
    { ro: 'dacă n-ar fi plouat', tr: { ru: 'если бы не дождь', ua: 'якби не дощ' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Dacă aș fi știut, aș fi venit.',
      tr: { ru: 'Если бы я знал, я бы пришёл.', ua: 'Якби я знав, я б прийшов.' },
      note: {
        ru: 'Несбывшееся прошлое: aș fi + форма в обеих частях. știut — от a ști (знать).',
        ua: 'Нездійснене минуле: aș fi + форма в обох частинах. știut — від a ști (знати).',
      },
    },
    {
      kind: 'intro',
      ro: 'Dacă ai fi venit mai devreme, l-ai fi văzut.',
      tr: { ru: 'Если бы ты пришёл раньше, ты бы его увидел.', ua: 'Якби ти прийшов раніше, ти б його побачив.' },
      note: {
        ru: 'mai devreme ≈ «май девреме» — раньше. l-ai fi văzut — «ты бы его увидел».',
        ua: 'mai devreme ≈ «май девреме» — раніше. l-ai fi văzut — «ти б його побачив».',
      },
    },
    {
      kind: 'intro',
      ro: 'Dacă n-ar fi plouat, am fi mers la mare.',
      tr: { ru: 'Если бы не дождь, мы бы поехали на море.', ua: 'Якби не дощ, ми б поїхали на море.' },
      note: {
        ru: 'Дословно «если бы не шёл дождь». n-ar = nu + ar.',
        ua: 'Дослівно «якби не йшов дощ». n-ar = nu + ar.',
      },
    },
    {
      kind: 'tip',
      title: 'Dacă aș fi știut…',
      body: {
        ru: [
          'Несбывшееся прошлое: **dacă + aș fi …**, **aș fi …**: Dacă aș fi știut, aș fi venit.',
          'В разговоре часто проще — имперфект в обеих частях: **Dacă știam, veneam.** Смысл тот же; узнавайте и эту форму.',
        ],
        ua: [
          'Нездійснене минуле: **dacă + aș fi …**, **aș fi …**: Dacă aș fi știut, aș fi venit.',
          'У розмові часто простіше — імперфект в обох частинах: **Dacă știam, veneam.** Зміст той самий; упізнавайте й цю форму.',
        ],
      },
      rows: [
        { ro: 'dacă aș fi știut', tr: { ru: 'если бы я знал', ua: 'якби я знав' } },
        { ro: 'dacă ai fi venit', tr: { ru: 'если бы ты пришёл', ua: 'якби ти прийшов' } },
        { ro: 'dacă n-ar fi plouat', tr: { ru: 'если бы не было дождя', ua: 'якби не було дощу' } },
        { ro: 'mai devreme', tr: { ru: 'раньше', ua: 'раніше' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Если бы я знал, я бы пришёл.', ua: 'Якби я знав, я б прийшов.' },
      correct: 'Dacă aș fi știut, aș fi venit.',
      wrong: ['Dacă aș ști, aș veni.', 'Dacă am știut, am venit.', 'Dacă ai fi știut, ai fi venit.'],
    },
    {
      kind: 'pickNative',
      q: 'Dacă știam, veneam.',
      correct: { ru: 'Если бы я знал, я бы пришёл.', ua: 'Якби я знав, я б прийшов.' },
      wrong: [
        { ru: 'Я знал и пришёл.', ua: 'Я знав і прийшов.' },
        { ru: 'Если я узнаю, я приду.', ua: 'Якщо я дізнаюся, я прийду.' },
        { ru: 'Когда я знал, я приходил.', ua: 'Коли я знав, я приходив.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'dacă aș fi știut', tr: { ru: 'если бы я знал', ua: 'якби я знав' } },
        { ro: 'aș fi venit', tr: { ru: 'я бы пришёл', ua: 'я б прийшов' } },
        { ro: 'mai devreme', tr: { ru: 'раньше', ua: 'раніше' } },
        { ro: 'n-ar fi plouat', tr: { ru: 'не было бы дождя', ua: 'не було б дощу' } },
        { ro: 'ai fi văzut', tr: { ru: 'ты бы увидел', ua: 'ти б побачив' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Dacă ai fi venit mai devreme',
      tr: { ru: 'Если бы ты пришёл раньше', ua: 'Якби ти прийшов раніше' },
      wrong: ['Dacă ai veni mai devreme', 'Dacă aș fi venit mai devreme', 'Dacă ai fi venit mai târziu'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Если бы не дождь, мы бы поехали на море.', ua: 'Якби не дощ, ми б поїхали на море.' },
      words: ['Dacă', 'n-ar', 'fi', 'plouat', 'am', 'fi', 'mers', 'la', 'mare'],
      extra: ['plouă', 'mergem', 'munte'],
      shown: 'Dacă n-ar fi plouat, am fi mers la mare.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Если бы ты мне сказал, я бы помог.', ua: 'Якби ти мені сказав, я б допоміг.' },
      correct: 'Dacă mi-ai fi spus, te-aș fi ajutat.',
      wrong: ['Dacă mi-ai spune, te-aș ajuta.', 'Dacă ți-aș fi spus, m-ai fi ajutat.', 'Mi-ai spus și te-am ajutat.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Если бы я знала, я бы пришла раньше.', ua: 'Якби я знала, я б прийшла раніше.' },
      words: ['Dacă', 'aș', 'fi', 'știut', 'aș', 'fi', 'venit', 'mai', 'devreme'],
      extra: ['am', 'știu', 'târziu'],
      shown: 'Dacă aș fi știut, aș fi venit mai devreme.',
    },
    {
      kind: 'type',
      q: { ru: 'Если бы я знал(а)…', ua: 'Якби я знав(ла)…' },
      answers: ['Dacă aș fi știut', 'Dacă știam'],
      shown: 'Dacă aș fi știut…',
    },
    {
      kind: 'type',
      q: { ru: 'Раньше (пораньше).', ua: 'Раніше.' },
      answers: ['Mai devreme'],
      shown: 'Mai devreme.',
    },
  ],
};
