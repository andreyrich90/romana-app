import type { Lesson } from '../types';

/** B1 · Unit 6 · Lesson 4 — repairs and complaints: nu funcționează, s-a stricat, curge, instalator, a repara, puteți trimite pe cineva? */
export const u18l4: Lesson = {
  id: 'u18l4',
  title: { ru: 'Что-то сломалось', ua: 'Щось зламалося' },
  words: [
    { ro: 'nu funcționează', tr: { ru: 'не работает', ua: 'не працює' } },
    { ro: 's-a stricat', tr: { ru: 'сломался, сломалось', ua: 'зламався, зламалося' } },
    { ro: 'curge', tr: { ru: 'течёт', ua: 'тече' } },
    { ro: 'un instalator', tr: { ru: 'сантехник', ua: 'сантехнік' } },
    { ro: 'a repara', tr: { ru: 'чинить, починить', ua: 'лагодити, полагодити' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mașina de spălat nu funcționează.',
      tr: { ru: 'Стиральная машина не работает.', ua: 'Пральна машина не працює.' },
      note: {
        ru: 'funcționează ≈ «функционязэ» — работает (о технике). mașina de spălat — стиральная машина.',
        ua: 'funcționează ≈ «функціонязе» — працює (про техніку). mașina de spălat — пральна машина.',
      },
    },
    {
      kind: 'intro',
      ro: 'S-a stricat frigiderul.',
      tr: { ru: 'Сломался холодильник.', ua: 'Зламався холодильник.' },
      note: {
        ru: 's-a stricat — «сломался» (a se strica). frigider ≈ «фриджидер» — холодильник.',
        ua: 's-a stricat — «зламався» (a se strica). frigider ≈ «фріджидер» — холодильник.',
      },
    },
    {
      kind: 'intro',
      ro: 'Curge apă de la robinet.',
      tr: { ru: 'Из крана течёт вода.', ua: 'З крана тече вода.' },
      note: {
        ru: 'curge ≈ «курдже» — течёт. robinet — кран.',
        ua: 'curge ≈ «курдже» — тече. robinet — кран.',
      },
    },
    {
      kind: 'tip',
      title: 'S-a stricat',
      body: {
        ru: [
          'О поломке: **nu funcționează** (не работает), **s-a stricat** (сломалось), **curge** (течёт), **nu merge** (не работает — разг.).',
          'Просьба: **Puteți trimite pe cineva?** — Можете кого-нибудь прислать? **Când poate veni instalatorul?** — Когда может прийти сантехник?',
        ],
        ua: [
          'Про поломку: **nu funcționează** (не працює), **s-a stricat** (зламалося), **curge** (тече), **nu merge** (не працює — розм.).',
          'Прохання: **Puteți trimite pe cineva?** — Можете когось надіслати? **Când poate veni instalatorul?** — Коли може прийти сантехнік?',
        ],
      },
      rows: [
        { ro: 'Nu merge liftul.', tr: { ru: 'Лифт не работает.', ua: 'Ліфт не працює.' } },
        { ro: 'S-a ars becul.', tr: { ru: 'Перегорела лампочка.', ua: 'Перегоріла лампочка.' } },
        { ro: 'Puteți repara?', tr: { ru: 'Можете починить?', ua: 'Можете полагодити?' } },
        { ro: 'Puteți trimite pe cineva?', tr: { ru: 'Можете кого-нибудь прислать?', ua: 'Можете когось надіслати?' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Стиральная машина не работает.', ua: 'Пральна машина не працює.' },
      correct: 'Mașina de spălat nu funcționează.',
      wrong: ['Mașina de spălat funcționează.', 'Frigiderul nu funcționează.', 'Mașina de spălat s-a reparat.'],
    },
    {
      kind: 'pickNative',
      q: 'S-a stricat frigiderul.',
      correct: { ru: 'Сломался холодильник.', ua: 'Зламався холодильник.' },
      wrong: [
        { ru: 'Холодильник работает.', ua: 'Холодильник працює.' },
        { ru: 'Сломалась стиральная машина.', ua: 'Зламалася пральна машина.' },
        { ru: 'Холодильник пустой.', ua: 'Холодильник порожній.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'nu funcționează', tr: { ru: 'не работает', ua: 'не працює' } },
        { ro: 's-a stricat', tr: { ru: 'сломалось', ua: 'зламалося' } },
        { ro: 'curge', tr: { ru: 'течёт', ua: 'тече' } },
        { ro: 'instalator', tr: { ru: 'сантехник', ua: 'сантехнік' } },
        { ro: 'a repara', tr: { ru: 'чинить', ua: 'лагодити' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Puteți trimite pe cineva',
      tr: { ru: 'Можете кого-нибудь прислать', ua: 'Можете когось надіслати' },
      wrong: ['Puteți veni mâine', 'Pot trimite pe cineva', 'Puteți repara mâine'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Из крана течёт вода.', ua: 'З крана тече вода.' },
      words: ['Curge', 'apă', 'de', 'la', 'robinet'],
      extra: ['curg', 'robinetul', 'din'],
      shown: 'Curge apă de la robinet.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Лифт не работает.', ua: 'Ліфт не працює.' },
      correct: 'Nu merge liftul.',
      wrong: ['Merge liftul.', 'Nu merg cu liftul.', 'Unde e liftul?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Когда может прийти сантехник?', ua: 'Коли може прийти сантехнік?' },
      words: ['Când', 'poate', 'veni', 'instalatorul'],
      extra: ['pot', 'vine', 'instalator'],
      shown: 'Când poate veni instalatorul?',
    },
    {
      kind: 'type',
      q: { ru: 'Не работает.', ua: 'Не працює.' },
      answers: ['Nu funcționează', 'Nu merge'],
      shown: 'Nu funcționează.',
    },
    {
      kind: 'type',
      q: { ru: 'Можете починить?', ua: 'Можете полагодити?' },
      answers: ['Puteți repara', 'Puteți să reparați', 'Îl puteți repara', 'O puteți repara'],
      shown: 'Puteți repara?',
    },
  ],
};
