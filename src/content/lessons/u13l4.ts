import type { Lesson } from '../types';

/** B1 · Unit 1 · Lesson 4 — memories: îmi amintesc de…, îmi plăcea / îmi plăceau, bunica, bunicul, mereu, pe vremuri. */
export const u13l4: Lesson = {
  id: 'u13l4',
  title: { ru: 'Воспоминания', ua: 'Спогади' },
  words: [
    { ro: 'îmi amintesc de…', tr: { ru: 'я помню…', ua: 'я пам’ятаю…' } },
    { ro: 'bunica · bunicul', tr: { ru: 'бабушка · дедушка', ua: 'бабуся · дідусь' } },
    { ro: 'mereu', tr: { ru: 'всегда', ua: 'завжди' } },
    { ro: 'îmi plăcea', tr: { ru: 'мне нравилось', ua: 'мені подобалося' } },
    { ro: 'pe vremuri', tr: { ru: 'в былые времена', ua: 'колись, у давні часи' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Îmi amintesc de bunica.',
      tr: { ru: 'Я помню бабушку.', ua: 'Я пам’ятаю бабусю.' },
      note: {
        ru: 'a-și aminti de — «помнить о ком-то»: îmi amintesc ≈ «ымь аминтеск», de — «о».',
        ua: 'a-și aminti de — «пам’ятати про когось»: îmi amintesc ≈ «имь амінтеск», de — «про».',
      },
    },
    {
      kind: 'intro',
      ro: 'Bunicul mereu citea ziarul.',
      tr: { ru: 'Дедушка всегда читал газету.', ua: 'Дідусь завжди читав газету.' },
      note: {
        ru: 'mereu ≈ «мереу» — всегда. ziarul — газета. citea — «читал» (привычка).',
        ua: 'mereu ≈ «мереу» — завжди. ziarul — газета. citea — «читав» (звичка).',
      },
    },
    {
      kind: 'intro',
      ro: 'Îmi plăcea să merg la munte.',
      tr: { ru: 'Мне нравилось ходить в горы.', ua: 'Мені подобалося ходити в гори.' },
      note: {
        ru: 'plăcea — имперфект от place: «нравилось». ≈ «ымь плэчя».',
        ua: 'plăcea — імперфект від place: «подобалося». ≈ «имь плечя».',
      },
    },
    {
      kind: 'tip',
      title: 'Îmi plăcea',
      body: {
        ru: [
          'Всё из урока «Мне нравится» работает и в прошлом: **îmi place** → **îmi plăcea**, **îmi plac** → **îmi plăceau**.',
          'Воспоминание часто начинается с **îmi amintesc de…** или **pe vremuri** — в былые времена.',
        ],
        ua: [
          'Усе з уроку «Мені подобається» працює й у минулому: **îmi place** → **îmi plăcea**, **îmi plac** → **îmi plăceau**.',
          'Спогад часто починається з **îmi amintesc de…** або **pe vremuri** — колись, у давні часи.',
        ],
      },
      rows: [
        { ro: 'Îmi plăcea vara.', tr: { ru: 'Мне нравилось лето.', ua: 'Мені подобалося літо.' } },
        { ro: 'Îmi plăceau cărțile.', tr: { ru: 'Мне нравились книги.', ua: 'Мені подобалися книжки.' } },
        { ro: 'Îmi amintesc de școală.', tr: { ru: 'Я помню школу.', ua: 'Я пам’ятаю школу.' } },
        { ro: 'pe vremuri', tr: { ru: 'в былые времена', ua: 'колись' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мне нравилось лето.', ua: 'Мені подобалося літо.' },
      correct: 'Îmi plăcea vara.',
      wrong: ['Îmi place vara.', 'Îmi plăceau vara.', 'Îți plăcea vara.'],
    },
    {
      kind: 'pickNative',
      q: 'Bunica mereu făcea plăcinte.',
      correct: { ru: 'Бабушка всегда пекла пироги.', ua: 'Бабуся завжди пекла пироги.' },
      wrong: [
        { ru: 'Бабушка сейчас печёт пироги.', ua: 'Бабуся зараз пече пироги.' },
        { ru: 'Дедушка всегда пёк пироги.', ua: 'Дідусь завжди пік пироги.' },
        { ru: 'Бабушка никогда не пекла пироги.', ua: 'Бабуся ніколи не пекла пирогів.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'bunica', tr: { ru: 'бабушка', ua: 'бабуся' } },
        { ro: 'bunicul', tr: { ru: 'дедушка', ua: 'дідусь' } },
        { ro: 'mereu', tr: { ru: 'всегда', ua: 'завжди' } },
        { ro: 'îmi amintesc', tr: { ru: 'я помню', ua: 'я пам’ятаю' } },
        { ro: 'pe vremuri', tr: { ru: 'в былые времена', ua: 'колись' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Îmi amintesc de bunicul',
      tr: { ru: 'Я помню дедушку', ua: 'Я пам’ятаю дідуся' },
      wrong: ['Îmi amintesc de bunica', 'Îți amintești de bunicul', 'Nu-mi amintesc de bunicul'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мне нравились книги.', ua: 'Мені подобалися книжки.' },
      words: ['Îmi', 'plăceau', 'cărțile'],
      extra: ['plăcea', 'place', 'cartea'],
      shown: 'Îmi plăceau cărțile.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Ты помнишь?', ua: 'Ти пам’ятаєш?' },
      correct: 'Îți amintești?',
      wrong: ['Îmi amintesc?', 'Vă amintiți?', 'Ți-a plăcut?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Дедушка всегда читал газету.', ua: 'Дідусь завжди читав газету.' },
      words: ['Bunicul', 'mereu', 'citea', 'ziarul'],
      extra: ['citeam', 'bunica', 'ziar'],
      shown: 'Bunicul mereu citea ziarul.',
      also: ['Bunicul citea mereu ziarul'],
    },
    {
      kind: 'type',
      q: { ru: 'Я помню бабушку.', ua: 'Я пам’ятаю бабусю.' },
      answers: ['Îmi amintesc de bunica', 'Îmi aduc aminte de bunica', 'Mi-amintesc de bunica'],
      shown: 'Îmi amintesc de bunica.',
    },
    {
      kind: 'type',
      q: { ru: 'Мне нравилось лето.', ua: 'Мені подобалося літо.' },
      answers: ['Îmi plăcea vara'],
      shown: 'Îmi plăcea vara.',
    },
  ],
};
