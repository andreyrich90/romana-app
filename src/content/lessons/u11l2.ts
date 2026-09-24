import type { Lesson } from '../types';

/** A2 · Unit 5 · Lesson 2 — size and colour: mărime, port, mai mare / mai mic, prea, colours agreeing with the item. */
export const u11l2: Lesson = {
  id: 'u11l2',
  title: { ru: 'Размер и цвет', ua: 'Розмір і колір' },
  words: [
    { ro: 'mărimea', tr: { ru: 'размер', ua: 'розмір' } },
    { ro: 'Port mărimea 42.', tr: { ru: 'Я ношу 42-й размер.', ua: 'Я ношу 42-й розмір.' } },
    { ro: 'mai mare · mai mic', tr: { ru: 'больше · меньше', ua: 'більший · менший' } },
    { ro: 'prea', tr: { ru: 'слишком', ua: 'занадто' } },
    { ro: 'roșu, roșie', tr: { ru: 'красный, красная', ua: 'червоний, червона' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Ce mărime purtați?',
      tr: { ru: 'Какой размер вы носите?', ua: 'Який розмір ви носите?' },
      note: {
        ru: 'mărime ≈ «мэриме». a purta — носить: port (я ношу), purtați (вы носите). Ответ: Port mărimea 42 «порт мэримя патрузечь ши дой».',
        ua: 'mărime ≈ «меріме». a purta — носити: port (я ношу), purtați (ви носите). Відповідь: Port mărimea 42 «порт мерімя патрузечь ші дой».',
      },
    },
    {
      kind: 'intro',
      ro: 'E prea mică. Aveți una mai mare?',
      tr: { ru: 'Она слишком маленькая. У вас есть побольше?', ua: 'Вона занадто мала. У вас є більша?' },
      note: {
        ru: 'Про куртку, geaca. prea ≈ «пря» — слишком, mai mare — больше. una — «одну» для женского рода, unul — для мужского.',
        ua: 'Про куртку, geaca. prea ≈ «пря» — занадто, mai mare — більша. una — «одну» для жіночого роду, unul — для чоловічого.',
      },
    },
    {
      kind: 'intro',
      ro: 'o rochie roșie',
      tr: { ru: 'красное платье', ua: 'червона сукня' },
      note: {
        ru: 'roșu ≈ «рошу» — красный, roșie ≈ «рошие» — красная. Цвет стоит после вещи и согласуется с ней.',
        ua: 'roșu ≈ «рошу» — червоний, roșie ≈ «рошіє» — червона. Колір стоїть після речі й узгоджується з нею.',
      },
    },
    {
      kind: 'tip',
      title: 'Mai mare, prea mic',
      body: {
        ru: [
          '**mai** — «более»: **mai mare** (больше), **mai mic** (меньше), **mai ieftin** (дешевле). **prea** — «слишком»: **prea scump** (слишком дорого).',
          'Цвет согласуется с вещью, как в разделе «Дом»: **un tricou negru**, **o geacă neagră**, **pantofi negri**.',
        ],
        ua: [
          '**mai** — «більш»: **mai mare** (більший), **mai mic** (менший), **mai ieftin** (дешевший). **prea** — «занадто»: **prea scump** (занадто дорого).',
          'Колір узгоджується з річчю, як у розділі «Дім»: **un tricou negru**, **o geacă neagră**, **pantofi negri**.',
        ],
      },
      rows: [
        { ro: 'E prea mare.', tr: { ru: 'Слишком большое. · «е пря маре»', ua: 'Занадто велике. · «е пря маре»' } },
        { ro: 'Aveți una mai mică?', tr: { ru: 'У вас есть поменьше? · «авець уна май микэ»', ua: 'У вас є менша? · «авець уна май міке»' } },
        { ro: 'o cămașă albă', tr: { ru: 'белая рубашка · «о кэмашэ албэ»', ua: 'біла сорочка · «о кемаше албе»' } },
        { ro: 'un tricou roșu', tr: { ru: 'красная футболка · «ун трикоу рошу»', ua: 'червона футболка · «ун трікоу рошу»' } },
        { ro: 'pantofi negri', tr: { ru: 'чёрные туфли · «пантофь негрь»', ua: 'чорні туфлі · «пантофь негрь»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Слишком дорого.', ua: 'Занадто дорого.' },
      correct: 'E prea scump.',
      wrong: ['E mai scump.', 'E prea ieftin.', 'E prea mare.'],
    },
    {
      kind: 'pickNative',
      q: 'Aveți una mai mare?',
      correct: { ru: 'У вас есть побольше?', ua: 'У вас є більша?' },
      wrong: [
        { ru: 'У вас есть поменьше?', ua: 'У вас є менша?' },
        { ru: 'Она слишком большая.', ua: 'Вона занадто велика.' },
        { ru: 'У вас есть подешевле?', ua: 'У вас є дешевша?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mai mare', tr: { ru: 'больше', ua: 'більший' } },
        { ro: 'mai mic', tr: { ru: 'меньше', ua: 'менший' } },
        { ro: 'prea', tr: { ru: 'слишком', ua: 'занадто' } },
        { ro: 'mărime', tr: { ru: 'размер', ua: 'розмір' } },
        { ro: 'roșu', tr: { ru: 'красный', ua: 'червоний' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'O rochie roșie',
      tr: { ru: 'Красное платье', ua: 'Червона сукня' },
      wrong: ['O rochie albă', 'O cămașă roșie', 'Un tricou roșu'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я ношу 42-й размер.', ua: 'Я ношу 42-й розмір.' },
      words: ['Port', 'mărimea', '42'],
      extra: ['mărime', 'am', '40'],
      shown: 'Port mărimea 42.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'белая рубашка', ua: 'біла сорочка' },
      correct: 'o cămașă albă',
      wrong: ['o cămașă alb', 'un tricou alb', 'o cămașă neagră'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Куртка слишком маленькая.', ua: 'Куртка занадто мала.' },
      words: ['Geaca', 'e', 'prea', 'mică'],
      extra: ['mic', 'mai', 'mare'],
      shown: 'Geaca e prea mică.',
    },
    {
      kind: 'type',
      q: { ru: 'Слишком дорого.', ua: 'Занадто дорого.' },
      answers: ['E prea scump', 'Este prea scump', 'Prea scump'],
      shown: 'E prea scump.',
    },
    {
      kind: 'type',
      q: { ru: 'У вас есть поменьше?', ua: 'У вас є менша?' },
      answers: ['Aveți una mai mică', 'Aveți unul mai mic', 'Aveți ceva mai mic', 'Aveți o mărime mai mică'],
      shown: 'Aveți una mai mică?',
    },
  ],
};
