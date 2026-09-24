import type { Lesson } from '../types';

/** B2 · Unit 6 · Lesson 4 — biographies: s-a născut în, a fost, a scris, a compus, a câștigat. Eminescu 1850, Brâncuși 1876, Enescu 1881, Nadia Comăneci (Montreal 1976). */
export const u24l4: Lesson = {
  id: 'u24l4',
  title: { ru: 'Известные румыны', ua: 'Відомі румуни' },
  words: [
    { ro: 's-a născut', tr: { ru: 'родился', ua: 'народився' } },
    { ro: 'poet', tr: { ru: 'поэт', ua: 'поет' } },
    { ro: 'sculptor', tr: { ru: 'скульптор', ua: 'скульптор' } },
    { ro: 'compozitor', tr: { ru: 'композитор', ua: 'композитор' } },
    { ro: 'celebru', tr: { ru: 'знаменитый', ua: 'знаменитий' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mihai Eminescu s-a născut în 1850.',
      tr: { ru: 'Михай Эминеску родился в 1850 году.', ua: 'Міхай Емінеску народився в 1850 році.' },
      note: {
        ru: 'a se naște — рождаться: s-a născut — родился, родилась.',
        ua: 'a se naște — народжуватися: s-a născut — народився, народилася.',
      },
    },
    {
      kind: 'intro',
      ro: 'Eminescu a fost cel mai mare poet român.',
      tr: { ru: 'Эминеску был величайшим румынским поэтом.', ua: 'Емінеску був найвидатнішим румунським поетом.' },
      note: {
        ru: 'Его стихотворение «Luceafărul» знает каждый школьник.',
        ua: 'Його вірш «Luceafărul» знає кожен школяр.',
      },
    },
    {
      kind: 'intro',
      ro: 'Nadia Comăneci a luat primul zece din istorie.',
      tr: { ru: 'Надя Команечи получила первую «десятку» в истории.', ua: 'Надія Команечі отримала першу «десятку» в історії.' },
      note: {
        ru: 'Монреаль, 1976: первая идеальная оценка в гимнастике.',
        ua: 'Монреаль, 1976: перша ідеальна оцінка в гімнастиці.',
      },
    },
    {
      kind: 'tip',
      title: 'S-a născut, a fost',
      body: {
        ru: [
          'Биография: **s-a născut în** (родился в), **a trăit** (жил), **a scris** (написал), **a compus** (сочинил музыку), **a câștigat** (выиграл), **a murit** (умер).',
          'Кто есть кто: **Constantin Brâncuși** (1876) — скульптор, **George Enescu** (1881) — композитор и скрипач, **Nadia Comăneci** — гимнастка.',
        ],
        ua: [
          'Біографія: **s-a născut în** (народився в), **a trăit** (жив), **a scris** (написав), **a compus** (склав музику), **a câștigat** (виграв), **a murit** (помер).',
          'Хто є хто: **Constantin Brâncuși** (1876) — скульптор, **George Enescu** (1881) — композитор і скрипаль, **Nadia Comăneci** — гімнастка.',
        ],
      },
      rows: [
        { ro: 'a trăit la Paris', tr: { ru: 'жил в Париже', ua: 'жив у Парижі' } },
        { ro: 'a compus muzică', tr: { ru: 'сочинил музыку', ua: 'склав музику' } },
        { ro: 'a scris poezii', tr: { ru: 'писал стихи', ua: 'писав вірші' } },
        { ro: 'a câștigat aurul', tr: { ru: 'выиграла золото', ua: 'виграла золото' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Бранкузи был скульптором.', ua: 'Бранкузі був скульптором.' },
      correct: 'Brâncuși a fost sculptor.',
      wrong: ['Brâncuși a fost poet.', 'Brâncuși este sculptor.', 'Brâncuși a fost compozitor.'],
    },
    {
      kind: 'pickNative',
      q: 'Enescu a compus muzică celebră.',
      correct: { ru: 'Энеску сочинил знаменитую музыку.', ua: 'Енеску склав знамениту музику.' },
      wrong: [
        { ru: 'Энеску слушал знаменитую музыку.', ua: 'Енеску слухав знамениту музику.' },
        { ru: 'Энеску писал знаменитые стихи.', ua: 'Енеску писав знамениті вірші.' },
        { ru: 'Энеску стал знаменитым в Париже.', ua: 'Енеску став знаменитим у Парижі.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'poet', tr: { ru: 'поэт', ua: 'поет' } },
        { ro: 'sculptor', tr: { ru: 'скульптор', ua: 'скульптор' } },
        { ro: 'compozitor', tr: { ru: 'композитор', ua: 'композитор' } },
        { ro: 'gimnastă', tr: { ru: 'гимнастка', ua: 'гімнастка' } },
        { ro: 'celebru', tr: { ru: 'знаменитый', ua: 'знаменитий' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Brâncuși a trăit mulți ani la Paris',
      tr: { ru: 'Бранкузи много лет жил в Париже', ua: 'Бранкузі багато років жив у Парижі' },
      wrong: ['Brâncuși a trăit puțini ani la Paris', 'Enescu a trăit mulți ani la Paris', 'Brâncuși a lucrat mulți ani la Paris'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Эминеску был величайшим румынским поэтом.', ua: 'Емінеску був найвидатнішим румунським поетом.' },
      words: ['Eminescu', 'a', 'fost', 'cel', 'mai', 'mare', 'poet', 'român'],
      extra: ['este', 'mic', 'română'],
      shown: 'Eminescu a fost cel mai mare poet român.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Где он родился?', ua: 'Де він народився?' },
      correct: 'Unde s-a născut?',
      wrong: ['Când s-a născut?', 'Unde a murit?', 'Unde locuiește?'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Она выиграла золото.', ua: 'Вона виграла золото.' },
      words: ['A', 'câștigat', 'aurul'],
      extra: ['pierdut', 'argintul', 'au'],
      shown: 'A câștigat aurul.',
    },
    {
      kind: 'type',
      q: { ru: 'Он родился в Бухаресте.', ua: 'Він народився в Бухаресті.' },
      answers: ['S-a născut în București', 'El s-a născut în București'],
      shown: 'S-a născut în București.',
    },
    {
      kind: 'type',
      q: { ru: 'Она была гимнасткой.', ua: 'Вона була гімнасткою.' },
      answers: ['A fost gimnastă', 'Ea a fost gimnastă'],
      shown: 'A fost gimnastă.',
    },
  ],
};
