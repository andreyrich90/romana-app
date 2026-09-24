import type { Lesson } from '../types';

/** Alphabet · Lesson 4 — c and g before e / i (ce «че», ge «дже») and the h that keeps them hard (che «ке», ghe «ге»). */
export const u0l4: Lesson = {
  id: 'u0l4',
  title: { ru: 'Ce, chi, ge, ghi', ua: 'Ce, chi, ge, ghi' },
  words: [
    { ro: 'ceai', tr: { ru: 'чай', ua: 'чай' } },
    { ro: 'cinci', tr: { ru: 'пять', ua: 'п’ять' } },
    { ro: 'cheie', tr: { ru: 'ключ', ua: 'ключ' } },
    { ro: 'gem', tr: { ru: 'джем, варенье', ua: 'джем, варення' } },
    { ro: 'ghid', tr: { ru: 'гид', ua: 'гід' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'ceai',
      tr: { ru: 'чай', ua: 'чай' },
      note: {
        ru: 'c перед e и i читается «ч»: ce — «че», ci — «чи». ceai ≈ «чай», cinci (пять) ≈ «чинч».',
        ua: 'c перед e та i читається «ч»: ce — «че», ci — «чі». ceai ≈ «чай», cinci (п’ять) ≈ «чінч».',
      },
    },
    {
      kind: 'intro',
      ro: 'cheie',
      tr: { ru: 'ключ', ua: 'ключ' },
      note: {
        ru: 'Чтобы перед e и i осталось «к», пишут ch: che — «ке», chi — «ки». cheie ≈ «кейе».',
        ua: 'Щоб перед e та i лишилося «к», пишуть ch: che — «ке», chi — «кі». cheie ≈ «кейе».',
      },
    },
    {
      kind: 'intro',
      ro: 'gem',
      tr: { ru: 'джем', ua: 'джем' },
      note: {
        ru: 'С g то же самое: ge — «дже», gi — «джи», а ghe, ghi — «ге», «ги». gem ≈ «джем», ghid (гид) ≈ «гид».',
        ua: 'З g те саме: ge — «дже», gi — «джі», а ghe, ghi — «ге», «гі». gem ≈ «джем», ghid (гід) ≈ «гід».',
      },
    },
    {
      kind: 'tip',
      title: 'C și G',
      body: {
        ru: [
          'Правило одно для c и g: перед **e** и **i** они смягчаются — **ч**, **дж**. Буква **h** после них возвращает твёрдый звук — **к**, **г**.',
          'Перед a, o, u и согласными c и g всегда твёрдые: **cafea** — «кафя», **gară** — «гарэ».',
        ],
        ua: [
          'Правило одне для c та g: перед **e** та **i** вони пом’якшуються — **ч**, **дж**. Літера **h** після них повертає твердий звук — **к**, **г**.',
          'Перед a, o, u та приголосними c і g завжди тверді: **cafea** — «кафя», **gară** — «гаре».',
        ],
      },
      rows: [
        { ro: 'ce, ci', tr: { ru: '«че, чи»', ua: '«че, чі»' } },
        { ro: 'che, chi', tr: { ru: '«ке, ки»', ua: '«ке, кі»' } },
        { ro: 'ge, gi', tr: { ru: '«дже, джи»', ua: '«дже, джі»' } },
        { ro: 'ghe, ghi', tr: { ru: '«ге, ги»', ua: '«ге, гі»' } },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'ce', tr: { ru: 'че', ua: 'че' } },
        { ro: 'chi', tr: { ru: 'ки', ua: 'кі' } },
        { ro: 'gi', tr: { ru: 'джи', ua: 'джі' } },
        { ro: 'ghe', tr: { ru: 'ге', ua: 'ге' } },
        { ro: 'ca', tr: { ru: 'ка', ua: 'ка' } },
      ],
    },
    {
      kind: 'pickNative',
      q: 'cinci',
      correct: { ru: 'пять', ua: 'п’ять' },
      wrong: [
        { ru: 'шесть', ua: 'шість' },
        { ru: 'чай', ua: 'чай' },
        { ru: 'ключ', ua: 'ключ' },
      ],
    },
    {
      kind: 'listen',
      ro: 'cheie',
      tr: { ru: 'ключ', ua: 'ключ' },
      wrong: ['ceai', 'cinci', 'ghid'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Какое слово читается «чинч»?', ua: 'Яке слово читається «чінч»?' },
      correct: 'cinci',
      wrong: ['chinchi', 'cinchi', 'kinci'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Какое слово читается «гид»?', ua: 'Яке слово читається «гід»?' },
      correct: 'ghid',
      wrong: ['gid', 'jid', 'chid'],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'ceai', tr: { ru: 'чай', ua: 'чай' } },
        { ro: 'cinci', tr: { ru: 'пять', ua: 'п’ять' } },
        { ro: 'cheie', tr: { ru: 'ключ', ua: 'ключ' } },
        { ro: 'gem', tr: { ru: 'джем', ua: 'джем' } },
        { ro: 'ghid', tr: { ru: 'гид', ua: 'гід' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'ceai',
      tr: { ru: 'чай', ua: 'чай' },
      wrong: ['cheie', 'gem', 'cinci'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Чай и джем.', ua: 'Чай і джем.' },
      words: ['Ceai', 'și', 'gem'],
      extra: ['cheie', 'ghid'],
      shown: 'Ceai și gem.',
    },
  ],
};
