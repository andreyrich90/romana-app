import type { Lesson } from '../types';

/** B1 · Unit 1 · Lesson 3 — imperfect for the background, perfect compus for the event: dormeam când a sunat telefonul. */
export const u13l3: Lesson = {
  id: 'u13l3',
  title: { ru: 'Пока… вдруг', ua: 'Поки… раптом' },
  words: [
    { ro: 'în timp ce', tr: { ru: 'пока, в то время как', ua: 'поки, у той час як' } },
    { ro: 'deodată', tr: { ru: 'вдруг', ua: 'раптом' } },
    { ro: 'a sunat', tr: { ru: 'позвонил; зазвонил', ua: 'подзвонив; задзвонив' } },
    { ro: 'a început', tr: { ru: 'начался, начала', ua: 'почався, почала' } },
    { ro: 'ploua', tr: { ru: 'шёл дождь', ua: 'ішов дощ' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Dormeam când a sunat telefonul.',
      tr: { ru: 'Я спал(а), когда зазвонил телефон.', ua: 'Я спав(ла), коли задзвонив телефон.' },
      note: {
        ru: 'Фон — имперфект (dormeam: «спал»), событие — am / a + форма (a sunat: «зазвонил»). Как в русском: несовершенный и совершенный вид.',
        ua: 'Тло — імперфект (dormeam: «спав»), подія — am / a + форма (a sunat: «задзвонив»). Як в українській: недоконаний і доконаний вид.',
      },
    },
    {
      kind: 'intro',
      ro: 'În timp ce mâncam, deodată a început să plouă.',
      tr: { ru: 'Пока мы ели, вдруг начался дождь.', ua: 'Поки ми їли, раптом почався дощ.' },
      note: {
        ru: 'în timp ce ≈ «ын тимп че» — пока. deodată ≈ «деодатэ» — вдруг. a început să — «начал(ся)».',
        ua: 'în timp ce ≈ «ин тимп че» — поки. deodată ≈ «деодате» — раптом. a început să — «почав(ся)».',
      },
    },
    {
      kind: 'intro',
      ro: 'Ploua.',
      tr: { ru: 'Шёл дождь.', ua: 'Ішов дощ.' },
      note: {
        ru: 'plouă — «идёт дождь», ploua — «шёл дождь» (фон). Так же ninge → ningea.',
        ua: 'plouă — «іде дощ», ploua — «ішов дощ» (тло). Так само ninge → ningea.',
      },
    },
    {
      kind: 'tip',
      title: 'Dormeam când a sunat',
      body: {
        ru: [
          'Две формы прошлого работают вместе. **Имперфект** — что происходило, фон: dormeam, mâncam, ploua.',
          '**Am + форма** — что случилось: a sunat, a venit, a început. Схема: **фон + când + событие**.',
        ],
        ua: [
          'Дві форми минулого працюють разом. **Імперфект** — що відбувалося, тло: dormeam, mâncam, ploua.',
          '**Am + форма** — що сталося: a sunat, a venit, a început. Схема: **тло + când + подія**.',
        ],
      },
      rows: [
        { ro: 'Dormeam.', tr: { ru: 'Я спал (фон).', ua: 'Я спав (тло).' } },
        { ro: 'A sunat telefonul.', tr: { ru: 'Зазвонил телефон (событие).', ua: 'Задзвонив телефон (подія).' } },
        { ro: 'Citeam când a venit Ana.', tr: { ru: 'Я читал, когда пришла Анна.', ua: 'Я читав, коли прийшла Анна.' } },
        { ro: 'În timp ce lucram, ploua.', tr: { ru: 'Пока я работал, шёл дождь.', ua: 'Поки я працював, ішов дощ.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я спал, когда зазвонил телефон.', ua: 'Я спав, коли задзвонив телефон.' },
      correct: 'Dormeam când a sunat telefonul.',
      wrong: ['Am dormit când a sunat telefonul.', 'Dormeam când suna telefonul.', 'Dorm când sună telefonul.'],
    },
    {
      kind: 'pickNative',
      q: 'Deodată a început să plouă.',
      correct: { ru: 'Вдруг начался дождь.', ua: 'Раптом почався дощ.' },
      wrong: [
        { ru: 'Вдруг пошёл снег.', ua: 'Раптом пішов сніг.' },
        { ru: 'Дождь шёл весь день.', ua: 'Дощ ішов увесь день.' },
        { ru: 'Вчера был дождь.', ua: 'Учора був дощ.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'în timp ce', tr: { ru: 'пока', ua: 'поки' } },
        { ro: 'deodată', tr: { ru: 'вдруг', ua: 'раптом' } },
        { ro: 'a sunat', tr: { ru: 'зазвонил', ua: 'задзвонив' } },
        { ro: 'ploua', tr: { ru: 'шёл дождь', ua: 'ішов дощ' } },
        { ro: 'a început', tr: { ru: 'начался', ua: 'почався' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Citeam când a venit Ana',
      tr: { ru: 'Я читал, когда пришла Анна', ua: 'Я читав, коли прийшла Анна' },
      wrong: ['Citeam când a venit Ion', 'Am citit când a venit Ana', 'Citeam când venea Ana'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Пока мы ели, пришёл Андрей.', ua: 'Поки ми їли, прийшов Андрій.' },
      words: ['În', 'timp', 'ce', 'mâncam', 'a', 'venit', 'Andrei'],
      extra: ['am', 'mâncat', 'venea'],
      shown: 'În timp ce mâncam, a venit Andrei.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Шёл дождь.', ua: 'Ішов дощ.' },
      correct: 'Ploua.',
      wrong: ['Plouă.', 'Ningea.', 'O să plouă.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Вдруг зазвонил телефон.', ua: 'Раптом задзвонив телефон.' },
      words: ['Deodată', 'a', 'sunat', 'telefonul'],
      extra: ['suna', 'sună', 'când'],
      shown: 'Deodată a sunat telefonul.',
    },
    {
      kind: 'type',
      q: { ru: 'Я спал(а), когда зазвонил телефон.', ua: 'Я спав(ла), коли задзвонив телефон.' },
      answers: ['Dormeam când a sunat telefonul', 'Eu dormeam când a sunat telefonul'],
      shown: 'Dormeam când a sunat telefonul.',
    },
    {
      kind: 'type',
      q: { ru: 'Шёл дождь.', ua: 'Ішов дощ.' },
      answers: ['Ploua'],
      shown: 'Ploua.',
    },
  ],
};
