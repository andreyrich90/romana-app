import type { Lesson } from '../types';

/** B2 · Unit 4 · Lesson 4 — weather warnings and environment: cod galben, caniculă, inundații, secetă, poluarea, mediul, trebuie protejate. */
export const u22l4: Lesson = {
  id: 'u22l4',
  title: { ru: 'Природа', ua: 'Природа' },
  words: [
    { ro: 'caniculă', tr: { ru: 'сильная жара', ua: 'спека' } },
    { ro: 'inundații', tr: { ru: 'наводнения', ua: 'повені' } },
    { ro: 'seceta', tr: { ru: 'засуха', ua: 'посуха' } },
    { ro: 'poluarea', tr: { ru: 'загрязнение', ua: 'забруднення' } },
    { ro: 'mediul', tr: { ru: 'окружающая среда', ua: 'довкілля' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Meteorologii au emis cod galben de caniculă.',
      tr: { ru: 'Синоптики объявили жёлтый код из-за жары.', ua: 'Синоптики оголосили жовтий код через спеку.' },
      note: {
        ru: 'cod galben / portocaliu / roșu — жёлтый / оранжевый / красный уровень опасности.',
        ua: 'cod galben / portocaliu / roșu — жовтий / помаранчевий / червоний рівень небезпеки.',
      },
    },
    {
      kind: 'intro',
      ro: 'Ploile au provocat inundații.',
      tr: { ru: 'Дожди вызвали наводнения.', ua: 'Дощі спричинили повені.' },
      note: {
        ru: 'a provoca — вызывать, провоцировать; inundație ≈ «инундацие».',
        ua: 'a provoca — спричиняти, провокувати; inundație ≈ «інундаціє».',
      },
    },
    {
      kind: 'intro',
      ro: 'Pădurile trebuie protejate.',
      tr: { ru: 'Леса нужно защищать.', ua: 'Ліси треба захищати.' },
      note: {
        ru: 'trebuie + форма на -t (как в пассиве): trebuie protejate — должны быть защищены.',
        ua: 'trebuie + форма на -t (як у пасиві): trebuie protejate — мають бути захищені.',
      },
    },
    {
      kind: 'tip',
      title: 'Cod galben',
      body: {
        ru: [
          'Погода в новостях: **caniculă** (сильная жара), **ger** (мороз), **furtună** (буря), **inundații** (наводнения), **secetă** (засуха). Предупреждение — **cod galben / portocaliu / roșu**.',
          '**trebuie** + форма на -t, согласованная с предметом: **pădurile trebuie protejate**, **apa trebuie economisită** (воду нужно экономить).',
        ],
        ua: [
          'Погода в новинах: **caniculă** (спека), **ger** (мороз), **furtună** (буря), **inundații** (повені), **secetă** (посуха). Попередження — **cod galben / portocaliu / roșu**.',
          '**trebuie** + форма на -t, узгоджена з предметом: **pădurile trebuie protejate**, **apa trebuie economisită** (воду треба економити).',
        ],
      },
      rows: [
        { ro: 'cod roșu', tr: { ru: 'красный код', ua: 'червоний код' } },
        { ro: 'furtună', tr: { ru: 'буря', ua: 'буря' } },
        { ro: 'poluarea aerului', tr: { ru: 'загрязнение воздуха', ua: 'забруднення повітря' } },
        { ro: 'apa trebuie economisită', tr: { ru: 'воду нужно экономить', ua: 'воду треба економити' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Дожди вызвали наводнения.', ua: 'Дощі спричинили повені.' },
      correct: 'Ploile au provocat inundații.',
      wrong: ['Ploile au provocat secetă.', 'Inundațiile au provocat ploi.', 'Ploaia provoacă inundații.'],
    },
    {
      kind: 'pickNative',
      q: 'Poluarea aerului a crescut în orașe.',
      correct: { ru: 'Загрязнение воздуха в городах выросло.', ua: 'Забруднення повітря в містах зросло.' },
      wrong: [
        { ru: 'Загрязнение воздуха в городах снизилось.', ua: 'Забруднення повітря в містах знизилося.' },
        { ru: 'В городах стало больше машин.', ua: 'У містах стало більше машин.' },
        { ru: 'Загрязнение воды в сёлах выросло.', ua: 'Забруднення води в селах зросло.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'caniculă', tr: { ru: 'сильная жара', ua: 'спека' } },
        { ro: 'seceta', tr: { ru: 'засуха', ua: 'посуха' } },
        { ro: 'furtună', tr: { ru: 'буря', ua: 'буря' } },
        { ro: 'poluarea', tr: { ru: 'загрязнение', ua: 'забруднення' } },
        { ro: 'mediul', tr: { ru: 'окружающая среда', ua: 'довкілля' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Meteorologii au emis cod galben de caniculă',
      tr: { ru: 'Синоптики объявили жёлтый код из-за жары', ua: 'Синоптики оголосили жовтий код через спеку' },
      wrong: ['Meteorologii au emis cod roșu de caniculă', 'Meteorologii au emis cod galben de ploi', 'Mâine va fi caniculă'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Леса нужно защищать.', ua: 'Ліси треба захищати.' },
      words: ['Pădurile', 'trebuie', 'protejate'],
      extra: ['protejat', 'pădure', 'să'],
      shown: 'Pădurile trebuie protejate.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'По оценкам, засуха продолжится.', ua: 'За оцінками, посуха триватиме.' },
      correct: 'Se estimează că seceta va continua.',
      wrong: ['Se estimează că seceta s-a terminat.', 'Seceta a continuat.', 'Se estimează că ploile vor continua.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Нужно защищать окружающую среду.', ua: 'Треба захищати довкілля.' },
      words: ['Trebuie', 'să', 'protejăm', 'mediul'],
      extra: ['protejate', 'aerul', 'nu'],
      shown: 'Trebuie să protejăm mediul.',
    },
    {
      kind: 'type',
      q: { ru: 'Засуха.', ua: 'Посуха.' },
      answers: ['Seceta', 'Secetă', 'O secetă'],
      shown: 'Seceta.',
    },
    {
      kind: 'type',
      q: { ru: 'Красный код.', ua: 'Червоний код.' },
      answers: ['Cod roșu'],
      shown: 'Cod roșu.',
    },
  ],
};
