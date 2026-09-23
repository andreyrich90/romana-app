import type { Lesson } from '../types';

/** Unit 5 · Lesson 3 — my day: verbs in -ez (a lucra), reflexive «mă trezesc», dimineața / seara, de la … până la … */
export const u5l3: Lesson = {
  id: 'u5l3',
  title: { ru: 'Мой день', ua: 'Мій день' },
  words: [
    { ro: 'Lucrez.', tr: { ru: 'Я работаю.', ua: 'Я працюю.' } },
    { ro: 'Mă trezesc la ora șapte.', tr: { ru: 'Я просыпаюсь в семь.', ua: 'Я прокидаюся о сьомій.' } },
    { ro: 'dimineața, seara', tr: { ru: 'утром, вечером', ua: 'вранці, увечері' } },
    { ro: 'de la nouă până la cinci', tr: { ru: 'с девяти до пяти', ua: 'з девʼятої до пʼятої' } },
    { ro: 'de luni până vineri', tr: { ru: 'с понедельника по пятницу', ua: 'з понеділка до пʼятниці' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Lucrez.',
      tr: { ru: 'Я работаю.', ua: 'Я працюю.' },
      note: {
        ru: 'a lucra — работать: lucrez ≈ «лукрез». Ce lucrezi? — Кем ты работаешь?',
        ua: 'a lucra — працювати: lucrez ≈ «лукрез». Ce lucrezi? — Ким ти працюєш?',
      },
    },
    {
      kind: 'intro',
      ro: 'Mă trezesc la ora șapte.',
      tr: { ru: 'Я просыпаюсь в семь.', ua: 'Я прокидаюся о сьомій.' },
      note: {
        ru: 'mă — как русское «-ся», только стоит перед глаголом: mă trezesc — «просыпаюсь».',
        ua: 'mă — як українське «-ся», тільки стоїть перед дієсловом: mă trezesc — «прокидаюся».',
      },
    },
    {
      kind: 'intro',
      ro: 'dimineața, seara',
      tr: { ru: 'утром, вечером', ua: 'вранці, увечері' },
      note: {
        ru: 'Знакомые слова из Bună dimineața и Bună seara (раздел 1): они же значат «утром» и «вечером».',
        ua: 'Знайомі слова з Bună dimineața і Bună seara (розділ 1): вони ж означають «вранці» та «увечері».',
      },
    },
    {
      kind: 'intro',
      ro: 'Lucrez de luni până vineri.',
      tr: { ru: 'Я работаю с понедельника по пятницу.', ua: 'Я працюю з понеділка до пʼятниці.' },
      note: {
        ru: 'de … până … — «с … по …». Со временем добавляют la: de la nouă până la cinci — с девяти до пяти.',
        ua: 'de … până … — «з … до …». З часом додають la: de la nouă până la cinci — з девʼятої до пʼятої.',
      },
    },
    {
      kind: 'tip',
      title: 'A lucra — работать',
      body: {
        ru: [
          'Многие глаголы на **-a** спрягаются так же — с **-ez**: a lucra → lucr**ez**, lucr**ezi**, lucr**ează**.',
          'У глаголов с «-ся» частица стоит впереди и меняется по лицам: **mă** trezesc, **te** trezești, **se** trezește.',
        ],
        ua: [
          'Багато дієслів на **-a** відмінюються так само — з **-ez**: a lucra → lucr**ez**, lucr**ezi**, lucr**ează**.',
          'У дієслів із «-ся» частка стоїть попереду й змінюється за особами: **mă** trezesc, **te** trezești, **se** trezește.',
        ],
      },
      rows: [
        { ro: 'eu lucrez', tr: { ru: 'я работаю · «еу лукрез»', ua: 'я працюю · «єу лукрез»' } },
        { ro: 'tu lucrezi', tr: { ru: 'ты работаешь · «ту лукрезь»', ua: 'ти працюєш · «ту лукрезь»' } },
        { ro: 'el, ea lucrează', tr: { ru: 'он, она работает · «ел, я лукрязэ»', ua: 'він, вона працює · «єл, я лукрязе»' } },
        { ro: 'noi lucrăm', tr: { ru: 'мы работаем · «ной лукрэм»', ua: 'ми працюємо · «ной лукрем»' } },
        { ro: 'voi lucrați', tr: { ru: 'вы работаете · «вой лукраць»', ua: 'ви працюєте · «вой лукраць»' } },
        { ro: 'ei, ele lucrează', tr: { ru: 'они работают · «ей, еле лукрязэ»', ua: 'вони працюють · «єй, єле лукрязе»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Она работает.', ua: 'Вона працює.' },
      correct: 'Ea lucrează.',
      wrong: ['Ea lucrez.', 'Ea lucrezi.', 'El lucrează.'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'lucrez', tr: { ru: 'я работаю', ua: 'я працюю' } },
        { ro: 'mă trezesc', tr: { ru: 'я просыпаюсь', ua: 'я прокидаюся' } },
        { ro: 'dimineața', tr: { ru: 'утром', ua: 'вранці' } },
        { ro: 'seara', tr: { ru: 'вечером', ua: 'увечері' } },
        { ro: 'până', tr: { ru: 'до', ua: 'до' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Mă trezesc la ora șase',
      tr: { ru: 'Я просыпаюсь в шесть', ua: 'Я прокидаюся о шостій' },
      wrong: ['Mă trezesc la ora șapte', 'Te trezești la ora șase', 'Mă trezesc la ora opt'],
    },
    {
      kind: 'pickNative',
      q: 'Seara mâncăm acasă.',
      correct: { ru: 'Вечером мы едим дома.', ua: 'Увечері ми їмо вдома.' },
      wrong: [
        { ru: 'Утром мы едим дома.', ua: 'Вранці ми їмо вдома.' },
        { ru: 'Вечером я ем дома.', ua: 'Увечері я їм вдома.' },
        { ru: 'Вечером мы работаем дома.', ua: 'Увечері ми працюємо вдома.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я работаю с девяти до пяти.', ua: 'Я працюю з девʼятої до пʼятої.' },
      words: ['Lucrez', 'de', 'la', 'nouă', 'până', 'la', 'cinci'],
      extra: ['șase', 'mă', 'ora'],
      shown: 'Lucrez de la nouă până la cinci.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Утром я просыпаюсь в семь.', ua: 'Вранці я прокидаюся о сьомій.' },
      words: ['Dimineața', 'mă', 'trezesc', 'la', 'ora', 'șapte'],
      extra: ['seara', 'te', 'șase'],
      shown: 'Dimineața mă trezesc la ora șapte.',
      also: ['Mă trezesc dimineața la ora șapte', 'Mă trezesc la ora șapte dimineața'],
    },
    {
      kind: 'type',
      q: { ru: 'Мы работаем.', ua: 'Ми працюємо.' },
      answers: ['Lucrăm', 'Noi lucrăm'],
      shown: 'Lucrăm.',
    },
    {
      kind: 'type',
      q: { ru: 'Где ты работаешь?', ua: 'Де ти працюєш?' },
      answers: ['Unde lucrezi', 'Tu unde lucrezi', 'Unde lucrezi tu'],
      shown: 'Unde lucrezi?',
    },
  ],
};
