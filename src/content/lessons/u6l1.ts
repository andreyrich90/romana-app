import type { Lesson } from '../types';

/** Unit 6 · Lesson 1 — rooms: casa, camera, bucătăria…, «în bucătărie» without the article, «a locui», într-un / într-o. */
export const u6l1: Lesson = {
  id: 'u6l1',
  title: { ru: 'Комнаты', ua: 'Кімнати' },
  words: [
    { ro: 'casa, apartamentul', tr: { ru: 'дом, квартира', ua: 'будинок, квартира' } },
    { ro: 'camera', tr: { ru: 'комната', ua: 'кімната' } },
    { ro: 'bucătăria, baia, dormitorul', tr: { ru: 'кухня, ванная, спальня', ua: 'кухня, ванна, спальня' } },
    { ro: 'acasă', tr: { ru: 'дома', ua: 'вдома' } },
    { ro: 'în bucătărie', tr: { ru: 'на кухне', ua: 'на кухні' } },
    { ro: 'Locuiesc într-un apartament.', tr: { ru: 'Я живу в квартире.', ua: 'Я живу в квартирі.' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'casa, apartamentul',
      tr: { ru: 'дом, квартира', ua: 'будинок, квартира' },
      note: {
        ru: 'casă → casa. А «дома» — одним словом: acasă. Sunt acasă — Я дома.',
        ua: 'casă → casa. А «вдома» — одним словом: acasă. Sunt acasă — Я вдома.',
      },
    },
    {
      kind: 'intro',
      ro: 'bucătăria, baia, dormitorul',
      tr: { ru: 'кухня, ванная, спальня', ua: 'кухня, ванна, спальня' },
      note: {
        ru: 'bucătărie ≈ «букэтэрие», baie → baia ≈ «бая». dormitor — от a dormi, «спать».',
        ua: 'bucătărie ≈ «букетерие», baie → baia ≈ «бая». dormitor — від a dormi, «спати».',
      },
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'casa', tr: { ru: 'дом', ua: 'будинок' } },
        { ro: 'camera', tr: { ru: 'комната', ua: 'кімната' } },
        { ro: 'bucătăria', tr: { ru: 'кухня', ua: 'кухня' } },
        { ro: 'baia', tr: { ru: 'ванная', ua: 'ванна' } },
        { ro: 'dormitorul', tr: { ru: 'спальня', ua: 'спальня' } },
      ],
    },
    {
      kind: 'intro',
      ro: 'Locuiesc într-un apartament.',
      tr: { ru: 'Я живу в квартире.', ua: 'Я живу в квартирі.' },
      note: {
        ru: 'a locui — жить: locuiesc ≈ «локуеск». în + un = într-un, în + o = într-o.',
        ua: 'a locui — жити: locuiesc ≈ «локуєск». în + un = într-un, în + o = într-o.',
      },
    },
    {
      kind: 'tip',
      title: 'În bucătărie',
      body: {
        ru: [
          'После **în** слово обычно без артикля, как после la в разделе 4: în **bucătărie**, în **baie**, în **dormitor**.',
          'А с «одним» они сливаются: în + un = **într-un**, în + o = **într-o**.',
        ],
        ua: [
          'Після **în** слово зазвичай без артикля, як після la в розділі 4: în **bucătărie**, în **baie**, în **dormitor**.',
          'А з «одним» вони зливаються: în + un = **într-un**, în + o = **într-o**.',
        ],
      },
      rows: [
        { ro: 'Sunt acasă.', tr: { ru: 'Я дома. · «сунт акасэ»', ua: 'Я вдома. · «сунт акасе»' } },
        { ro: 'Mama este în bucătărie.', tr: { ru: 'Мама на кухне. · «мама есте ын букэтэрие»', ua: 'Мама на кухні. · «мама єсте ин букетерие»' } },
        { ro: 'Locuiesc într-un apartament.', tr: { ru: 'Я живу в квартире. · «локуеск ынтр-ун апартамент»', ua: 'Я живу в квартирі. · «локуєск интр-ун апартамент»' } },
        { ro: 'Locuiesc într-o casă.', tr: { ru: 'Я живу в доме. · «локуеск ынтр-о касэ»', ua: 'Я живу в будинку. · «локуєск интр-о касе»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мама на кухне.', ua: 'Мама на кухні.' },
      correct: 'Mama este în bucătărie.',
      wrong: ['Mama este în bucătăria.', 'Mama sunt în bucătărie.', 'Mama este în baie.'],
    },
    {
      kind: 'listen',
      ro: 'Sunt acasă',
      tr: { ru: 'Я дома', ua: 'Я вдома' },
      wrong: ['Ești acasă', 'Suntem acasă', 'Sunt aici'],
    },
    {
      kind: 'pickNative',
      q: 'Locuiesc într-o casă.',
      correct: { ru: 'Я живу в доме.', ua: 'Я живу в будинку.' },
      wrong: [
        { ru: 'Я живу в квартире.', ua: 'Я живу в квартирі.' },
        { ru: 'Мы живём в доме.', ua: 'Ми живемо в будинку.' },
        { ru: 'Я дома.', ua: 'Я вдома.' },
      ],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я живу в квартире.', ua: 'Я живу в квартирі.' },
      words: ['Locuiesc', 'într-un', 'apartament'],
      extra: ['într-o', 'casa', 'în'],
      shown: 'Locuiesc într-un apartament.',
    },
    {
      kind: 'tiles',
      q: { ru: 'Где ванная?', ua: 'Де ванна?' },
      words: ['Unde', 'este', 'baia'],
      extra: ['baie', 'sunt', 'în'],
      shown: 'Unde este baia?',
    },
    {
      kind: 'type',
      q: { ru: 'Я дома.', ua: 'Я вдома.' },
      answers: ['Sunt acasă', 'Eu sunt acasă'],
      shown: 'Sunt acasă.',
    },
    {
      kind: 'type',
      q: { ru: 'Папа в спальне.', ua: 'Тато в спальні.' },
      answers: ['Tata este în dormitor', 'Tata e în dormitor', 'Tatăl meu este în dormitor', 'Tatăl meu e în dormitor'],
      shown: 'Tata este în dormitor.',
    },
  ],
};
