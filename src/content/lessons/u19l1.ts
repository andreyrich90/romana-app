import type { Lesson } from '../types';

/** B2 · Unit 1 · Lesson 1 — the pluperfect for what had already happened: plecase deja, terminasem, încă nu. */
export const u19l1: Lesson = {
  id: 'u19l1',
  title: { ru: 'Он уже ушёл', ua: 'Він уже пішов' },
  words: [
    { ro: 'plecase', tr: { ru: 'он (она) уже ушёл (ушла), уехал(а)', ua: 'він (вона) уже пішов (пішла), поїхав(ла)' } },
    { ro: 'deja', tr: { ru: 'уже', ua: 'уже' } },
    { ro: 'încă nu', tr: { ru: 'ещё не', ua: 'ще не' } },
    { ro: 'terminasem', tr: { ru: 'я уже закончил(а)', ua: 'я вже закінчив(ла)' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Când am ajuns, trenul plecase deja.',
      tr: { ru: 'Когда я пришёл, поезд уже ушёл.', ua: 'Коли я прийшов, потяг уже пішов.' },
      note: {
        ru: 'plecase — «прошлое в прошлом»: случилось раньше другого прошлого. Русский обходится словом «уже», румынский меняет форму. ≈ «плекасе».',
        ua: 'plecase — «минуле в минулому»: сталося раніше за іншу подію в минулому. Українська обходиться словом «уже», румунська змінює форму. ≈ «плекасе».',
      },
    },
    {
      kind: 'intro',
      ro: 'Terminasem lucrul când a sunat.',
      tr: { ru: 'Я уже закончил работу, когда он позвонил.', ua: 'Я вже закінчив роботу, коли він подзвонив.' },
      note: {
        ru: 'terminat → terminasem: «я уже закончил (к тому моменту)». lucrul — работа, дело.',
        ua: 'terminat → terminasem: «я вже закінчив (на той момент)». lucrul — робота, справа.',
      },
    },
    {
      kind: 'intro',
      ro: 'Încă nu mâncase.',
      tr: { ru: 'Он ещё не ел (к тому моменту).', ua: 'Він ще не їв (на той момент).' },
      note: {
        ru: 'încă nu ≈ «ынкэ ну» — ещё не.',
        ua: 'încă nu ≈ «инке ну» — ще не.',
      },
    },
    {
      kind: 'tip',
      title: 'Plecase deja',
      body: {
        ru: [
          '**Mai-mult-ca-perfectul** — действие, которое закончилось раньше другого прошлого: **Când am ajuns** (потом), **trenul plecase** (раньше).',
          'Образуется от формы на -at, -it, -ut: **plecat → plecase**, **terminat → terminase**, **văzut → văzuse**. По-русски чаще всего добавляют «уже».',
        ],
        ua: [
          '**Mai-mult-ca-perfectul** — дія, що закінчилася раніше за інше минуле: **Când am ajuns** (потім), **trenul plecase** (раніше).',
          'Утворюється від форми на -at, -it, -ut: **plecat → plecase**, **terminat → terminase**, **văzut → văzuse**. Українською найчастіше додають «уже».',
        ],
      },
      rows: [
        { ro: 'plecasem', tr: { ru: 'я уже ушёл', ua: 'я вже пішов' } },
        { ro: 'plecase', tr: { ru: 'он уже ушёл', ua: 'він уже пішов' } },
        { ro: 'terminaseră', tr: { ru: 'они уже закончили', ua: 'вони вже закінчили' } },
        { ro: 'văzusem', tr: { ru: 'я уже видел', ua: 'я вже бачив' } },
        { ro: 'încă nu', tr: { ru: 'ещё не', ua: 'ще не' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Когда я пришёл, поезд уже ушёл.', ua: 'Коли я прийшов, потяг уже пішов.' },
      correct: 'Când am ajuns, trenul plecase deja.',
      wrong: ['Când am ajuns, trenul a plecat.', 'Când ajung, trenul pleacă.', 'Când am ajuns, trenul pleca deja.'],
    },
    {
      kind: 'pickNative',
      q: 'Văzusem deja filmul.',
      correct: { ru: 'Я уже видел этот фильм.', ua: 'Я вже бачив цей фільм.' },
      wrong: [
        { ru: 'Я ещё не видел этот фильм.', ua: 'Я ще не бачив цей фільм.' },
        { ru: 'Он уже видел этот фильм.', ua: 'Він уже бачив цей фільм.' },
        { ru: 'Я смотрю этот фильм.', ua: 'Я дивлюся цей фільм.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'plecase', tr: { ru: 'он уже ушёл', ua: 'він уже пішов' } },
        { ro: 'deja', tr: { ru: 'уже', ua: 'уже' } },
        { ro: 'încă nu', tr: { ru: 'ещё не', ua: 'ще не' } },
        { ro: 'terminasem', tr: { ru: 'я уже закончил', ua: 'я вже закінчив' } },
        { ro: 'văzuse', tr: { ru: 'он уже видел', ua: 'він уже бачив' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Încă nu mâncase',
      tr: { ru: 'Он ещё не ел', ua: 'Він ще не їв' },
      wrong: ['Încă nu mâncasem', 'Mâncase deja', 'Încă nu mănâncă'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Когда мы пришли, они уже поели.', ua: 'Коли ми прийшли, вони вже поїли.' },
      words: ['Când', 'am', 'ajuns', 'ei', 'mâncaseră', 'deja'],
      extra: ['mănâncă', 'au', 'plecaseră'],
      shown: 'Când am ajuns, ei mâncaseră deja.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я уже закончил работу.', ua: 'Я вже закінчив роботу.' },
      correct: 'Terminasem deja lucrul.',
      wrong: ['Termin deja lucrul.', 'Terminase deja lucrul.', 'O să termin lucrul.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Фильм уже начался.', ua: 'Фільм уже почався.' },
      words: ['Filmul', 'începuse', 'deja'],
      extra: ['începe', 'a', 'început'],
      shown: 'Filmul începuse deja.',
    },
    {
      kind: 'type',
      q: { ru: 'Поезд уже ушёл (к тому времени).', ua: 'Потяг уже пішов (на той час).' },
      answers: ['Trenul plecase deja', 'Trenul plecase'],
      shown: 'Trenul plecase deja.',
    },
    {
      kind: 'type',
      q: { ru: 'Когда я пришёл…', ua: 'Коли я прийшов…' },
      answers: ['Când am ajuns', 'Când am venit'],
      shown: 'Când am ajuns…',
    },
  ],
};
