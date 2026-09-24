import type { Lesson } from '../types';

/** A2 · Unit 2 · Lesson 2 — plans: diseară, în weekend, o să lucrez; the written future voi lucra; n-o să. */
export const u8l2: Lesson = {
  id: 'u8l2',
  title: { ru: 'Планы', ua: 'Плани' },
  words: [
    { ro: 'diseară', tr: { ru: 'сегодня вечером', ua: 'сьогодні ввечері' } },
    { ro: 'în weekend', tr: { ru: 'на выходных', ua: 'на вихідних' } },
    { ro: 'Ce o să faci?', tr: { ru: 'Что ты будешь делать?', ua: 'Що ти робитимеш?' } },
    { ro: 'o să mă odihnesc', tr: { ru: 'я отдохну', ua: 'я відпочину' } },
    { ro: 'voi lucra', tr: { ru: 'я буду работать', ua: 'я працюватиму' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Ce o să faci diseară?',
      tr: { ru: 'Что ты будешь делать сегодня вечером?', ua: 'Що ти робитимеш сьогодні ввечері?' },
      note: {
        ru: 'diseară ≈ «дисярэ» — пара к aseară (вчера вечером). В речи ce o să сливается: «чео сэ».',
        ua: 'diseară ≈ «дісяре» — пара до aseară (учора ввечері). У мовленні ce o să зливається: «чео се».',
      },
    },
    {
      kind: 'intro',
      ro: 'În weekend o să mă odihnesc.',
      tr: { ru: 'На выходных я отдохну.', ua: 'На вихідних я відпочину.' },
      note: {
        ru: 'weekend — как в английском, «уикенд». a se odihni (отдыхать) — возвратный, как mă trezesc: o să mă odihnesc ≈ «о сэ мэ одихнеск».',
        ua: 'weekend — як в англійській, «вікенд». a se odihni (відпочивати) — зворотне, як mă trezesc: o să mă odihnesc ≈ «о се ме одіхнеск».',
      },
    },
    {
      kind: 'intro',
      ro: 'Voi lucra.',
      tr: { ru: 'Я буду работать.', ua: 'Я працюватиму.' },
      note: {
        ru: 'Второе будущее — книжное: voi + глагол без a. Встретится в новостях, письмах, прогнозе погоды. ≈ «вой лукра».',
        ua: 'Друге майбутнє — книжне: voi + дієслово без a. Трапиться в новинах, листах, прогнозі погоди. ≈ «вой лукра».',
      },
    },
    {
      kind: 'tip',
      title: 'O să lucrez = voi lucra',
      body: {
        ru: [
          'Две формы, один смысл. **o să** — в разговоре, **voi, vei, va, vom, veți, vor** + глагол — на письме.',
          'Не путайте: **voi lucra** — «я буду работать», а просто **voi** — «вы».',
          'Отрицание — **n-o să**: **N-o să lucrez** — «Я не буду работать».',
        ],
        ua: [
          'Дві форми, один зміст. **o să** — у розмові, **voi, vei, va, vom, veți, vor** + дієслово — на письмі.',
          'Не плутайте: **voi lucra** — «я працюватиму», а просто **voi** — «ви».',
          'Заперечення — **n-o să**: **N-o să lucrez** — «Я не працюватиму».',
        ],
      },
      rows: [
        { ro: 'o să lucrez = voi lucra', tr: { ru: 'я буду работать · «о сэ лукрез = вой лукра»', ua: 'я працюватиму · «о се лукрез = вой лукра»' } },
        { ro: 'o să faci = vei face', tr: { ru: 'ты сделаешь · «о сэ фачь = вей фаче»', ua: 'ти зробиш · «о се фачь = вей фаче»' } },
        { ro: 'o să fie = va fi', tr: { ru: 'будет · «о сэ фие = ва фи»', ua: 'буде · «о се фіє = ва фі»' } },
        { ro: 'o să mergem = vom merge', tr: { ru: 'мы пойдём · «о сэ мерджем = вом мердже»', ua: 'ми підемо · «о се мерджем = вом мердже»' } },
        { ro: 'N-o să lucrez.', tr: { ru: 'Я не буду работать. · «но сэ лукрез»', ua: 'Я не працюватиму. · «но се лукрез»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Что ты будешь делать на выходных?', ua: 'Що ти робитимеш на вихідних?' },
      correct: 'Ce o să faci în weekend?',
      wrong: ['Ce ai făcut în weekend?', 'Ce o să facă în weekend?', 'Ce faci diseară?'],
    },
    {
      kind: 'pickNative',
      q: 'Diseară o să lucrez.',
      correct: { ru: 'Сегодня вечером я буду работать.', ua: 'Сьогодні ввечері я працюватиму.' },
      wrong: [
        { ru: 'Вчера вечером я работал.', ua: 'Учора ввечері я працював.' },
        { ru: 'Сегодня вечером ты будешь работать.', ua: 'Сьогодні ввечері ти працюватимеш.' },
        { ru: 'Завтра я буду работать.', ua: 'Завтра я працюватиму.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'diseară', tr: { ru: 'сегодня вечером', ua: 'сьогодні ввечері' } },
        { ro: 'aseară', tr: { ru: 'вчера вечером', ua: 'учора ввечері' } },
        { ro: 'în weekend', tr: { ru: 'на выходных', ua: 'на вихідних' } },
        { ro: 'voi lucra', tr: { ru: 'я буду работать', ua: 'я працюватиму' } },
        { ro: 'o să faci', tr: { ru: 'ты сделаешь', ua: 'ти зробиш' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Vom merge la munte',
      tr: { ru: 'Мы поедем в горы', ua: 'Ми поїдемо в гори' },
      wrong: ['Voi merge la munte', 'Vor merge la munte', 'Am mers la munte'],
    },
    {
      kind: 'tiles',
      q: { ru: 'На выходных я отдохну.', ua: 'На вихідних я відпочину.' },
      words: ['În', 'weekend', 'o', 'să', 'mă', 'odihnesc'],
      extra: ['am', 'lucrez', 'te'],
      shown: 'În weekend o să mă odihnesc.',
      also: ['O să mă odihnesc în weekend'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Они будут работать.', ua: 'Вони працюватимуть.' },
      correct: 'Vor lucra.',
      wrong: ['Voi lucra.', 'Vom lucra.', 'Au lucrat.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Сегодня вечером мы посмотрим фильм.', ua: 'Сьогодні ввечері ми подивимося фільм.' },
      words: ['Diseară', 'o', 'să', 'vedem', 'un', 'film'],
      extra: ['aseară', 'am', 'văzut'],
      shown: 'Diseară o să vedem un film.',
      also: ['O să vedem un film diseară'],
    },
    {
      kind: 'type',
      q: { ru: 'Что ты будешь делать сегодня вечером?', ua: 'Що ти робитимеш сьогодні ввечері?' },
      answers: [
        'Ce o să faci diseară',
        'Ce-o să faci diseară',
        'Diseară ce o să faci',
        'Ce vei face diseară',
        'Tu ce o să faci diseară',
        'Ce faci diseară',
      ],
      shown: 'Ce o să faci diseară?',
    },
    {
      kind: 'type',
      q: { ru: 'Я не буду работать завтра.', ua: 'Я не працюватиму завтра.' },
      answers: [
        'N-o să lucrez mâine',
        'Nu o să lucrez mâine',
        'Mâine n-o să lucrez',
        'Mâine nu o să lucrez',
        'Nu voi lucra mâine',
        'Mâine nu voi lucra',
        'Mâine nu lucrez',
        'Nu lucrez mâine',
      ],
      shown: 'N-o să lucrez mâine.',
    },
  ],
};
