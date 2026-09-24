import type { Lesson } from '../types';

/** B1 · Unit 1 · Lesson 2 — the imperfect of regular verbs (lucram, mergeam, citeam) for habits: de obicei, în fiecare zi. */
export const u13l2: Lesson = {
  id: 'u13l2',
  title: { ru: 'Раньше я…', ua: 'Раніше я…' },
  words: [
    { ro: 'lucram', tr: { ru: 'я работал(а) (тогда, регулярно)', ua: 'я працював(ла) (тоді, регулярно)' } },
    { ro: 'mergeam', tr: { ru: 'я ходил(а), ездил(а)', ua: 'я ходив(ла), їздив(ла)' } },
    { ro: 'de obicei', tr: { ru: 'обычно', ua: 'зазвичай' } },
    { ro: 'în fiecare zi', tr: { ru: 'каждый день', ua: 'щодня' } },
    { ro: 'pe jos', tr: { ru: 'пешком', ua: 'пішки' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Înainte lucram la o bancă.',
      tr: { ru: 'Раньше я работал(а) в банке.', ua: 'Раніше я працював(ла) в банку.' },
      note: {
        ru: 'lucram — не «работаю» и не «поработал», а «работал тогда, какое-то время». ≈ «ынаинте лукрам».',
        ua: 'lucram — не «працюю» і не «попрацював», а «працював тоді, якийсь час». ≈ «инаінте лукрам».',
      },
    },
    {
      kind: 'intro',
      ro: 'În fiecare zi mergeam la școală pe jos.',
      tr: { ru: 'Каждый день я ходил(а) в школу пешком.', ua: 'Щодня я ходив(ла) до школи пішки.' },
      note: {
        ru: 'în fiecare zi ≈ «ын фиекаре зи» — каждый день. pe jos — пешком. mergeam — «ходил (регулярно)».',
        ua: 'în fiecare zi ≈ «ин фієкаре зі» — щодня. pe jos — пішки. mergeam — «ходив (регулярно)».',
      },
    },
    {
      kind: 'intro',
      ro: 'De obicei citeam seara.',
      tr: { ru: 'Обычно я читал(а) вечером.', ua: 'Зазвичай я читав(ла) увечері.' },
      note: {
        ru: 'de obicei ≈ «де обичей» — обычно. a citi → citeam.',
        ua: 'de obicei ≈ «де обічей» — зазвичай. a citi → citeam.',
      },
    },
    {
      kind: 'tip',
      title: 'Lucram, mergeam',
      body: {
        ru: [
          'Глаголы на **-a** берут **-am, -ai, -a, -am, -ați, -au**: lucram, lucrai, lucra, lucram, lucrați, lucrau.',
          'Остальные — **-eam, -eai, -ea, -eam, -eați, -eau**: mergeam, citeam, făceam, dormeam.',
          'Имперфект говорит о привычках и повторениях: **de obicei**, **în fiecare zi**, **mereu** (всегда).',
        ],
        ua: [
          'Дієслова на **-a** беруть **-am, -ai, -a, -am, -ați, -au**: lucram, lucrai, lucra, lucram, lucrați, lucrau.',
          'Решта — **-eam, -eai, -ea, -eam, -eați, -eau**: mergeam, citeam, făceam, dormeam.',
          'Імперфект говорить про звички й повторення: **de obicei**, **în fiecare zi**, **mereu** (завжди).',
        ],
      },
      rows: [
        { ro: 'eu lucram', tr: { ru: 'я работал(а)', ua: 'я працював(ла)' } },
        { ro: 'tu lucrai', tr: { ru: 'ты работал(а)', ua: 'ти працював(ла)' } },
        { ro: 'el mergea', tr: { ru: 'он ходил', ua: 'він ходив' } },
        { ro: 'noi făceam', tr: { ru: 'мы делали', ua: 'ми робили' } },
        { ro: 'voi citeați', tr: { ru: 'вы читали', ua: 'ви читали' } },
        { ro: 'ei dormeau', tr: { ru: 'они спали', ua: 'вони спали' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Раньше я работал в магазине.', ua: 'Раніше я працював у магазині.' },
      correct: 'Înainte lucram la un magazin.',
      wrong: ['Înainte lucrez la un magazin.', 'Înainte lucrai la un magazin.', 'Mâine lucrez la un magazin.'],
    },
    {
      kind: 'pickNative',
      q: 'De obicei mergeam pe jos.',
      correct: { ru: 'Обычно я ходил пешком.', ua: 'Зазвичай я ходив пішки.' },
      wrong: [
        { ru: 'Обычно я езжу на автобусе.', ua: 'Зазвичай я їжджу автобусом.' },
        { ru: 'Сегодня я пошёл пешком.', ua: 'Сьогодні я пішов пішки.' },
        { ru: 'Обычно мы ездили на автобусе.', ua: 'Зазвичай ми їздили автобусом.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'lucram', tr: { ru: 'я работал', ua: 'я працював' } },
        { ro: 'mergeam', tr: { ru: 'я ходил', ua: 'я ходив' } },
        { ro: 'citeam', tr: { ru: 'я читал', ua: 'я читав' } },
        { ro: 'făceam', tr: { ru: 'я делал', ua: 'я робив' } },
        { ro: 'de obicei', tr: { ru: 'обычно', ua: 'зазвичай' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'În fiecare zi citeam',
      tr: { ru: 'Каждый день я читал', ua: 'Щодня я читав' },
      wrong: ['În fiecare zi citesc', 'În fiecare zi citeai', 'În fiecare seară citeam'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Каждый день мы играли в парке.', ua: 'Щодня ми гралися в парку.' },
      words: ['În', 'fiecare', 'zi', 'ne', 'jucam', 'în', 'parc'],
      extra: ['mă', 'jucăm', 'la'],
      shown: 'În fiecare zi ne jucam în parc.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Они обычно спали до восьми.', ua: 'Вони зазвичай спали до восьмої.' },
      correct: 'De obicei dormeau până la opt.',
      wrong: ['De obicei dorm până la opt.', 'De obicei dormeam până la opt.', 'Azi au dormit până la opt.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Раньше она работала в Бухаресте.', ua: 'Раніше вона працювала в Бухаресті.' },
      words: ['Înainte', 'ea', 'lucra', 'la', 'București'],
      extra: ['lucram', 'în', 'acum'],
      shown: 'Înainte ea lucra la București.',
      also: ['Înainte lucra la București'],
    },
    {
      kind: 'type',
      q: { ru: 'Раньше я работал(а) в банке.', ua: 'Раніше я працював(ла) в банку.' },
      answers: ['Înainte lucram la o bancă', 'Înainte lucram la bancă', 'Lucram la o bancă înainte', 'Înainte eu lucram la o bancă'],
      shown: 'Înainte lucram la o bancă.',
    },
    {
      kind: 'type',
      q: { ru: 'Обычно я читал(а) вечером.', ua: 'Зазвичай я читав(ла) увечері.' },
      answers: ['De obicei citeam seara', 'De obicei eu citeam seara', 'Seara de obicei citeam'],
      shown: 'De obicei citeam seara.',
    },
  ],
};
