import type { Lesson } from '../types';

/** B1 · Unit 2 · Lesson 2 — conditions: dacă aș avea…, aș… (unreal) against dacă plouă, rămânem (real). */
export const u14l2: Lesson = {
  id: 'u14l2',
  title: { ru: 'Если бы', ua: 'Якби' },
  words: [
    { ro: 'dacă', tr: { ru: 'если', ua: 'якщо' } },
    { ro: 'dacă aș avea', tr: { ru: 'если бы у меня было', ua: 'якби в мене було' } },
    { ro: 'bani', tr: { ru: 'деньги', ua: 'гроші' } },
    { ro: 'aș cumpăra', tr: { ru: 'я бы купил(а)', ua: 'я б купив(ла)' } },
    { ro: 'rămânem', tr: { ru: 'остаёмся', ua: 'залишаємося' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Dacă aș avea timp, aș merge la munte.',
      tr: { ru: 'Если бы у меня было время, я бы поехал(а) в горы.', ua: 'Якби в мене був час, я б поїхав(ла) в гори.' },
      note: {
        ru: '«Бы» в обеих частях, как в русском: dacă aș avea…, aș merge…. dacă ≈ «дакэ» — если.',
        ua: '«Б» в обох частинах, як в українській: dacă aș avea…, aș merge…. dacă ≈ «даке» — якщо.',
      },
    },
    {
      kind: 'intro',
      ro: 'Dacă aș avea bani, aș cumpăra o casă.',
      tr: { ru: 'Если бы у меня были деньги, я бы купил(а) дом.', ua: 'Якби в мене були гроші, я б купив(ла) будинок.' },
      note: {
        ru: 'bani ≈ «бань» — деньги, всегда во множественном, как в русском.',
        ua: 'bani ≈ «бань» — гроші, завжди в множині, як в українській.',
      },
    },
    {
      kind: 'intro',
      ro: 'Dacă plouă, rămânem acasă.',
      tr: { ru: 'Если пойдёт дождь, мы останемся дома.', ua: 'Якщо піде дощ, ми залишимося вдома.' },
      note: {
        ru: 'Реальное условие — без «бы», в настоящем времени. rămânem ≈ «рэмынем» — остаёмся.',
        ua: 'Реальна умова — без «б», у теперішньому часі. rămânem ≈ «риминем» — залишаємося.',
      },
    },
    {
      kind: 'tip',
      title: 'Dacă aș avea…',
      body: {
        ru: [
          'Нереальное условие: **dacă + aș, ai, ar…**, и в ответе тоже **aș, ar…**: Dacă aș avea timp, aș citi mai mult.',
          'Реальное — как в русском, без «бы»: **Dacă plouă, rămânem acasă.** — Если пойдёт дождь, останемся дома.',
        ],
        ua: [
          'Нереальна умова: **dacă + aș, ai, ar…**, і у відповіді теж **aș, ar…**: Dacă aș avea timp, aș citi mai mult.',
          'Реальна — як в українській, без «б»: **Dacă plouă, rămânem acasă.** — Якщо піде дощ, залишимося вдома.',
        ],
      },
      rows: [
        { ro: 'dacă aș avea', tr: { ru: 'если бы у меня было', ua: 'якби в мене було' } },
        { ro: 'dacă ai ști', tr: { ru: 'если бы ты знал', ua: 'якби ти знав' } },
        { ro: 'dacă ar fi cald', tr: { ru: 'если бы было тепло', ua: 'якби було тепло' } },
        { ro: 'aș cumpăra', tr: { ru: 'я бы купил', ua: 'я б купив' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Если бы у меня было время…', ua: 'Якби в мене був час…' },
      correct: 'Dacă aș avea timp…',
      wrong: ['Dacă am timp…', 'Dacă am avut timp…', 'Când aș avea timp…'],
    },
    {
      kind: 'pickNative',
      q: 'Dacă ai ști!',
      correct: { ru: 'Если бы ты знал!', ua: 'Якби ти знав!' },
      wrong: [
        { ru: 'Если ты знаешь!', ua: 'Якщо ти знаєш!' },
        { ru: 'Ты знал!', ua: 'Ти знав!' },
        { ru: 'Если бы я знал!', ua: 'Якби я знав!' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'dacă', tr: { ru: 'если', ua: 'якщо' } },
        { ro: 'bani', tr: { ru: 'деньги', ua: 'гроші' } },
        { ro: 'aș avea', tr: { ru: 'у меня было бы', ua: 'у мене було б' } },
        { ro: 'ai ști', tr: { ru: 'ты бы знал', ua: 'ти б знав' } },
        { ro: 'aș cumpăra', tr: { ru: 'я бы купил', ua: 'я б купив' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Dacă aș avea bani',
      tr: { ru: 'Если бы у меня были деньги', ua: 'Якби в мене були гроші' },
      wrong: ['Dacă am bani', 'Dacă ai avea bani', 'Dacă aș avea timp'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Если бы было тепло, мы бы пошли в парк.', ua: 'Якби було тепло, ми б пішли в парк.' },
      words: ['Dacă', 'ar', 'fi', 'cald', 'am', 'merge', 'în', 'parc'],
      extra: ['e', 'mergem', 'frig'],
      shown: 'Dacă ar fi cald, am merge în parc.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Если пойдёт дождь, останемся дома.', ua: 'Якщо піде дощ, залишимося вдома.' },
      correct: 'Dacă plouă, rămânem acasă.',
      wrong: ['Dacă ar ploua, rămânem acasă.', 'Dacă plouă, am rămâne acasă.', 'Când plouă, rămânem acasă.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Если бы у меня были деньги, я бы купил дом.', ua: 'Якби в мене були гроші, я б купив будинок.' },
      words: ['Dacă', 'aș', 'avea', 'bani', 'aș', 'cumpăra', 'o', 'casă'],
      extra: ['am', 'cumpăr', 'un'],
      shown: 'Dacă aș avea bani, aș cumpăra o casă.',
    },
    {
      kind: 'type',
      q: { ru: 'Если бы ты знал(а)!', ua: 'Якби ти знав(ла)!' },
      answers: ['Dacă ai ști'],
      shown: 'Dacă ai ști!',
    },
    {
      kind: 'type',
      q: { ru: 'Я бы купил(а) дом.', ua: 'Я б купив(ла) будинок.' },
      answers: ['Aș cumpăra o casă', 'Eu aș cumpăra o casă'],
      shown: 'Aș cumpăra o casă.',
    },
  ],
};
