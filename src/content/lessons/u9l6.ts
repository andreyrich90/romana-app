import type { Lesson } from '../types';

/** Unit 9 · Lesson 6 — double negation: nu… nimic, nimeni, niciodată, nicăieri; nici eu. */
export const u9l6: Lesson = {
  id: 'u9l6',
  title: { ru: 'Никто, ничего, никогда', ua: 'Ніхто, нічого, ніколи' },
  words: [
    { ro: 'nimic', tr: { ru: 'ничего', ua: 'нічого' } },
    { ro: 'nimeni', tr: { ru: 'никто, никого', ua: 'ніхто, нікого' } },
    { ro: 'niciodată', tr: { ru: 'никогда', ua: 'ніколи' } },
    { ro: 'nicăieri', tr: { ru: 'нигде, никуда', ua: 'ніде, нікуди' } },
    { ro: 'Nici eu.', tr: { ru: 'Я тоже нет.', ua: 'Я теж ні.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Nu știu nimic.',
      tr: { ru: 'Я ничего не знаю.', ua: 'Я нічого не знаю.' },
      note: {
        ru: 'Как в русском — два отрицания: nu + nimic. Без nu так не говорят.',
        ua: 'Як в українській — два заперечення: nu + nimic. Без nu так не кажуть.',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu văd pe nimeni.',
      tr: { ru: 'Я никого не вижу.', ua: 'Я нікого не бачу.' },
      note: {
        ru: '«Кого?» — с pe: Nu văd pe nimeni. Nu aștept pe nimeni — я никого не жду.',
        ua: '«Кого?» — з pe: Nu văd pe nimeni. Nu aștept pe nimeni — я нікого не чекаю.',
      },
    },
    {
      kind: 'intro',
      ro: 'Nimeni nu răspunde.',
      tr: { ru: 'Никто не отвечает.', ua: 'Ніхто не відповідає.' },
      note: {
        ru: 'Даже когда nimeni стоит первым, nu остаётся: Nimeni nu știe — никто не знает.',
        ua: 'Навіть коли nimeni стоїть першим, nu лишається: Nimeni nu știe — ніхто не знає.',
      },
    },
    {
      kind: 'intro',
      ro: 'Nu fumez niciodată.',
      tr: { ru: 'Я никогда не курю.', ua: 'Я ніколи не курю.' },
      note: {
        ru: 'niciodată ≈ «ничодатэ». Nu merg nicăieri — я никуда не иду.',
        ua: 'niciodată ≈ «нічодате». Nu merg nicăieri — я нікуди не йду.',
      },
    },
    {
      kind: 'tip',
      title: 'Nu… nimic',
      body: {
        ru: [
          'Отрицание в румынском **двойное**, как в русском: **nu** + nimic, nimeni, niciodată, nicăieri.',
          'Ответ одним словом — без nu: — Ce faci? — **Nimic.** «Я тоже нет» — **Nici eu.**',
        ],
        ua: [
          'Заперечення в румунській **подвійне**, як в українській: **nu** + nimic, nimeni, niciodată, nicăieri.',
          'Відповідь одним словом — без nu: — Ce faci? — **Nimic.** «Я теж ні» — **Nici eu.**',
        ],
      },
      rows: [
        { ro: 'Nu știu nimic.', tr: { ru: 'Я ничего не знаю.', ua: 'Я нічого не знаю.' } },
        { ro: 'Nu văd pe nimeni.', tr: { ru: 'Я никого не вижу.', ua: 'Я нікого не бачу.' } },
        { ro: 'Nu merg nicăieri.', tr: { ru: 'Я никуда не иду.', ua: 'Я нікуди не йду.' } },
        { ro: 'Nici eu.', tr: { ru: 'Я тоже нет.', ua: 'Я теж ні.' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'nimic', tr: { ru: 'ничего', ua: 'нічого' } },
        { ro: 'nimeni', tr: { ru: 'никто', ua: 'ніхто' } },
        { ro: 'niciodată', tr: { ru: 'никогда', ua: 'ніколи' } },
        { ro: 'nicăieri', tr: { ru: 'нигде, никуда', ua: 'ніде, нікуди' } },
        { ro: 'Nici eu.', tr: { ru: 'Я тоже нет.', ua: 'Я теж ні.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я ничего не хочу.', ua: 'Я нічого не хочу.' },
      correct: 'Nu vreau nimic.',
      wrong: ['Vreau nimic.', 'Nu vreau nimeni.', 'Nu vreau niciodată.'],
    },
    {
      kind: 'pickNative',
      q: 'Nu merg nicăieri.',
      correct: { ru: 'Я никуда не иду.', ua: 'Я нікуди не йду.' },
      wrong: [
        { ru: 'Я никогда не хожу.', ua: 'Я ніколи не ходжу.' },
        { ru: 'Я никого не жду.', ua: 'Я нікого не чекаю.' },
        { ru: 'Я не иду домой.', ua: 'Я не йду додому.' },
      ],
    },
    {
      kind: 'listen',
      ro: 'Nimeni nu știe.',
      tr: { ru: 'Никто не знает.', ua: 'Ніхто не знає.' },
      wrong: ['Nimeni nu vine.', 'Nu știu nimic.', 'Nimeni nu răspunde.'],
    },
    {
      kind: 'pickRo',
      q: { ru: '— Ce faci? — Ничего.', ua: '— Ce faci? — Нічого.' },
      correct: 'Nimic.',
      wrong: ['Nimeni.', 'Niciodată.', 'Nicăieri.'],
    },
    {
      kind: 'pickRo',
      q: { ru: '— Nu fumez. — Я тоже нет.', ua: '— Nu fumez. — Я теж ні.' },
      correct: 'Nici eu.',
      wrong: ['Și eu.', 'Nici tu.', 'Nici el.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я никогда не опаздываю.', ua: 'Я ніколи не запізнююся.' },
      words: ['Nu', 'întârzii', 'niciodată'],
      extra: ['nimic', 'nimeni'],
      shown: 'Nu întârzii niciodată.',
    },
    {
      kind: 'type',
      q: { ru: 'Я никого не вижу.', ua: 'Я нікого не бачу.' },
      answers: ['Nu văd pe nimeni.'],
      shown: 'Nu văd pe nimeni.',
    },
  ],
};
