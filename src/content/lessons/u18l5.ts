import type { Lesson } from '../types';

/** B1 · Unit 6 · Lesson 5 — the B1 finale: imperfect, conditional, se, comparison, reported speech, imperative. No new grammar. */
export const u18l5: Lesson = {
  id: 'u18l5',
  title: { ru: 'Итог B1', ua: 'Підсумок B1' },
  words: [
    { ro: 'Când eram mic, locuiam la mare.', tr: { ru: 'Когда я был маленьким, мы жили у моря.', ua: 'Коли я був малим, ми жили біля моря.' } },
    { ro: 'Dacă aș avea timp, aș învăța mai mult.', tr: { ru: 'Если бы у меня было время, я бы учился больше.', ua: 'Якби в мене був час, я б учився більше.' } },
    { ro: 'Mi-a spus că s-a stricat liftul.', tr: { ru: 'Он сказал мне, что сломался лифт.', ua: 'Він сказав мені, що зламався ліфт.' } },
  ],
  exercises: [
    {
      kind: 'tip',
      title: 'Nivelul B1',
      body: {
        ru: [
          'За B1 вы научились рассказывать о прошлом (**eram, lucram**), мечтать и советовать (**aș, ar trebui să**), говорить о работе (**se caută**), спорить (**mai… decât, deși**), пересказывать (**mi-a spus că**) и справляться с бытом (**vino, nu uita, s-a stricat**).',
        ],
        ua: [
          'За B1 ви навчилися розповідати про минуле (**eram, lucram**), мріяти й радити (**aș, ar trebui să**), говорити про роботу (**se caută**), сперечатися (**mai… decât, deși**), переказувати (**mi-a spus că**) і давати раду побуту (**vino, nu uita, s-a stricat**).',
        ],
      },
      rows: [
        { ro: 'Când eram mic…', tr: { ru: 'Когда я был маленьким… · имперфект', ua: 'Коли я був малим… · імперфект' } },
        { ro: 'Dacă aș avea timp…', tr: { ru: 'Если бы у меня было время… · «бы»', ua: 'Якби в мене був час… · «б»' } },
        { ro: 'Se caută șofer.', tr: { ru: 'Требуется водитель · se', ua: 'Потрібен водій · se' } },
        { ro: 'Mi-a spus că vine.', tr: { ru: 'Он сказал, что придёт · косвенная речь', ua: 'Він сказав, що прийде · непряма мова' } },
        { ro: 'Nu uita!', tr: { ru: 'Не забудь! · повелительное', ua: 'Не забудь! · наказовий' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Когда я был маленьким, мы жили у моря.', ua: 'Коли я був малим, ми жили біля моря.' },
      correct: 'Când eram mic, locuiam la mare.',
      wrong: ['Când am fost mic, locuim la mare.', 'Când eram mic, locuiesc la mare.', 'Când sunt mic, locuiam la mare.'],
    },
    {
      kind: 'pickNative',
      q: 'Dacă aș avea timp, aș învăța mai mult.',
      correct: { ru: 'Если бы у меня было время, я бы учился больше.', ua: 'Якби в мене був час, я б учився більше.' },
      wrong: [
        { ru: 'Когда у меня есть время, я учусь больше.', ua: 'Коли в мене є час, я вчуся більше.' },
        { ru: 'Если бы у тебя было время, ты бы учился больше.', ua: 'Якби в тебе був час, ти б учився більше.' },
        { ru: 'У меня было время, и я учился больше.', ua: 'У мене був час, і я вчився більше.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'eram', tr: { ru: 'я был', ua: 'я був' } },
        { ro: 'aș merge', tr: { ru: 'я бы пошёл', ua: 'я б пішов' } },
        { ro: 'se caută', tr: { ru: 'требуется', ua: 'потрібен' } },
        { ro: 'mi-a spus', tr: { ru: 'мне сказал', ua: 'мені сказав' } },
        { ro: 'vino', tr: { ru: 'приходи', ua: 'приходь' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Mi-a spus că s-a stricat liftul',
      tr: { ru: 'Он сказал мне, что сломался лифт', ua: 'Він сказав мені, що зламався ліфт' },
      wrong: ['Mi-a spus că merge liftul', 'Ți-a spus că s-a stricat liftul', 'Mi-a spus că s-a stricat frigiderul'],
    },
    {
      kind: 'tiles',
      q: { ru: 'По-моему, эта квартира лучше.', ua: 'На мою думку, ця квартира краща.' },
      words: ['După', 'părerea', 'mea', 'apartamentul', 'ăsta', 'e', 'mai', 'bun'],
      extra: ['cel', 'decât', 'ta'],
      shown: 'După părerea mea, apartamentul ăsta e mai bun.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Не забудь документы!', ua: 'Не забудь документи!' },
      correct: 'Nu uita actele!',
      wrong: ['Nu uiți actele!', 'Ai uitat actele!', 'Nu uit actele!'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне нужно заполнить бланк.', ua: 'Мені треба заповнити бланк.' },
      words: ['Trebuie', 'să', 'completez', 'un', 'formular'],
      extra: ['completați', 'o', 'ar'],
      shown: 'Trebuie să completez un formular.',
    },
    {
      kind: 'type',
      q: { ru: 'Иди домой!', ua: 'Іди додому!' },
      answers: ['Du-te acasă', 'Mergi acasă'],
      shown: 'Du-te acasă!',
    },
    {
      kind: 'type',
      q: { ru: 'Мне кажется, так лучше.', ua: 'Мені здається, так краще.' },
      answers: ['Mi se pare că e mai bine', 'Mi se pare mai bine', 'Cred că e mai bine', 'Mi se pare că așa e mai bine'],
      shown: 'Mi se pare că e mai bine.',
    },
    {
      kind: 'type',
      q: { ru: 'Сломался холодильник.', ua: 'Зламався холодильник.' },
      answers: ['S-a stricat frigiderul', 'Frigiderul s-a stricat'],
      shown: 'S-a stricat frigiderul.',
    },
  ],
};
