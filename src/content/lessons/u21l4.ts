import type { Lesson } from '../types';

/** B2 · Unit 3 · Lesson 4 — the passive: a fost construit(ă), este scrisă de…, sunt vândute; agreement; se as the everyday alternative. */
export const u21l4: Lesson = {
  id: 'u21l4',
  title: { ru: 'Было построено', ua: 'Було збудовано' },
  words: [
    { ro: 'a fost construită', tr: { ru: 'была построена', ua: 'була збудована' } },
    { ro: 'este scrisă', tr: { ru: 'написана', ua: 'написана' } },
    { ro: 'de către', tr: { ru: 'кем (в пассиве)', ua: 'ким (у пасиві)' } },
    { ro: 'sunt vândute', tr: { ru: 'продаются, проданы', ua: 'продаються, продані' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Casa a fost construită în 1900.',
      tr: { ru: 'Дом был построен в 1900 году.', ua: 'Будинок збудували в 1900 році.' },
      note: {
        ru: 'a fi + форма на -t, которая согласуется как прилагательное: construit, construită, construiți, construite.',
        ua: 'a fi + форма на -t, що узгоджується як прикметник: construit, construită, construiți, construite.',
      },
    },
    {
      kind: 'intro',
      ro: 'Cartea este scrisă de un autor român.',
      tr: { ru: 'Книга написана румынским автором.', ua: 'Книжку написав румунський автор.' },
      note: {
        ru: 'Кем — de (официальнее de către). autor — автор.',
        ua: 'Ким — de (офіційніше de către). autor — автор.',
      },
    },
    {
      kind: 'intro',
      ro: 'Biletele sunt vândute la casă.',
      tr: { ru: 'Билеты продаются в кассе.', ua: 'Квитки продаються в касі.' },
      note: {
        ru: 'casă — и «дом», и «касса». vândute — от a vinde (продавать).',
        ua: 'casă — і «будинок», і «каса». vândute — від a vinde (продавати).',
      },
    },
    {
      kind: 'tip',
      title: 'A fost construită',
      body: {
        ru: [
          'Пассив: **a fi** + форма на -t, согласованная с предметом: **podul a fost construit**, **casa a fost construită**, **casele au fost construite**.',
          'Кем — **de** / **de către**. В разговоре пассив часто заменяют на **se**: **se vând bilete** = biletele sunt vândute.',
        ],
        ua: [
          'Пасив: **a fi** + форма на -t, узгоджена з предметом: **podul a fost construit**, **casa a fost construită**, **casele au fost construite**.',
          'Ким — **de** / **de către**. У розмові пасив часто заміняють на **se**: **se vând bilete** = biletele sunt vândute.',
        ],
      },
      rows: [
        { ro: 'a fost construit', tr: { ru: 'был построен', ua: 'був збудований' } },
        { ro: 'a fost construită', tr: { ru: 'была построена', ua: 'була збудована' } },
        { ro: 'au fost construite', tr: { ru: 'были построены', ua: 'були збудовані' } },
        { ro: 'este scris de', tr: { ru: 'написан (кем)', ua: 'написаний (ким)' } },
        { ro: 'se vând bilete', tr: { ru: 'продаются билеты', ua: 'продаються квитки' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Дом был построен в 1900 году.', ua: 'Будинок був збудований у 1900 році.' },
      correct: 'Casa a fost construită în 1900.',
      wrong: ['Casa a fost construit în 1900.', 'Casa construiește în 1900.', 'Casa a construit în 1900.'],
    },
    {
      kind: 'pickNative',
      q: 'Scrisoarea a fost trimisă ieri.',
      correct: { ru: 'Письмо было отправлено вчера.', ua: 'Лист було надіслано вчора.' },
      wrong: [
        { ru: 'Письмо отправят завтра.', ua: 'Лист надішлють завтра.' },
        { ru: 'Я отправил письмо вчера.', ua: 'Я надіслав лист учора.' },
        { ru: 'Письмо не было отправлено.', ua: 'Лист не було надіслано.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'construită', tr: { ru: 'построена', ua: 'збудована' } },
        { ro: 'scrisă', tr: { ru: 'написана', ua: 'написана' } },
        { ro: 'trimisă', tr: { ru: 'отправлена', ua: 'надіслана' } },
        { ro: 'vândute', tr: { ru: 'проданы', ua: 'продані' } },
        { ro: 'de către', tr: { ru: 'кем', ua: 'ким' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Biletele sunt vândute la casă',
      tr: { ru: 'Билеты продаются в кассе', ua: 'Квитки продаються в касі' },
      wrong: ['Biletele au fost vândute', 'Casa este vândută', 'Biletele sunt la casă'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Книга написана румынским автором.', ua: 'Книжку написав румунський автор.' },
      words: ['Cartea', 'este', 'scrisă', 'de', 'un', 'autor', 'român'],
      extra: ['scris', 'o', 'română'],
      shown: 'Cartea este scrisă de un autor român.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Мосты были построены давно.', ua: 'Мости були збудовані давно.' },
      correct: 'Podurile au fost construite demult.',
      wrong: ['Podurile a fost construit demult.', 'Podurile construiesc demult.', 'Podurile vor fi construite.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Билеты уже проданы.', ua: 'Квитки вже продані.' },
      words: ['Biletele', 'au', 'fost', 'deja', 'vândute'],
      extra: ['vândut', 'a', 'sunt'],
      shown: 'Biletele au fost deja vândute.',
    },
    {
      kind: 'type',
      q: { ru: 'Дом был построен.', ua: 'Будинок був збудований.' },
      answers: ['Casa a fost construită'],
      shown: 'Casa a fost construită.',
    },
    {
      kind: 'type',
      q: { ru: 'Письмо было отправлено.', ua: 'Лист було надіслано.' },
      answers: ['Scrisoarea a fost trimisă'],
      shown: 'Scrisoarea a fost trimisă.',
    },
  ],
};
