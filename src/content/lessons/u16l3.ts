import type { Lesson } from '../types';

/** B1 · Unit 4 · Lesson 3 — comparison: mai… decât, cel mai / cea mai, la fel de… ca, mai bun / mai bine. */
export const u16l3: Lesson = {
  id: 'u16l3',
  title: { ru: 'Лучше и хуже', ua: 'Краще й гірше' },
  words: [
    { ro: 'mai… decât', tr: { ru: 'более… чем', ua: 'більш… ніж' } },
    { ro: 'cel mai · cea mai', tr: { ru: 'самый · самая', ua: 'найбільш: най-' } },
    { ro: 'la fel de… ca', tr: { ru: 'такой же… как', ua: 'такий самий… як' } },
    { ro: 'mai bun', tr: { ru: 'лучше, лучший', ua: 'кращий' } },
    { ro: 'mai rău', tr: { ru: 'хуже', ua: 'гірше' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Brașovul e mai mic decât Bucureștiul.',
      tr: { ru: 'Брашов меньше Бухареста.', ua: 'Брашов менший за Бухарест.' },
      note: {
        ru: 'mai + прилагательное + decât — «более… чем». decât ≈ «декыт». Города тоже берут артикль: Brașovul.',
        ua: 'mai + прикметник + decât — «більш… ніж». decât ≈ «декит». Міста теж беруть артикль: Brașovul.',
      },
    },
    {
      kind: 'intro',
      ro: 'Asta e cea mai bună pizza.',
      tr: { ru: 'Это самая вкусная пицца.', ua: 'Це найсмачніша піца.' },
      note: {
        ru: 'cel mai / cea mai — «самый / самая». cea mai bună — «самая хорошая, лучшая».',
        ua: 'cel mai / cea mai — «най-»: cea mai bună — «найкраща».',
      },
    },
    {
      kind: 'intro',
      ro: 'Ana e la fel de înaltă ca Maria.',
      tr: { ru: 'Анна такая же высокая, как Мария.', ua: 'Анна така ж висока, як Марія.' },
      note: {
        ru: 'la fel de… ca — «такой же… как». înalt, înaltă ≈ «ыналт» — высокий.',
        ua: 'la fel de… ca — «такий самий… як». înalt, înaltă ≈ «иналт» — високий.',
      },
    },
    {
      kind: 'tip',
      title: 'Mai mare, cel mai mare',
      body: {
        ru: [
          'Сравнение: **mai** + прилагательное + **decât**: mai ieftin decât — дешевле, чем.',
          'Самый: **cel mai** (м.), **cea mai** (ж.), **cei mai** (мн. м.), **cele mai** (мн. ж.): cel mai mare oraș — самый большой город.',
          'Равенство: **la fel de… ca**. Лучше: **mai bun** (о вещи), **mai bine** (о действии).',
        ],
        ua: [
          'Порівняння: **mai** + прикметник + **decât**: mai ieftin decât — дешевший, ніж.',
          'Най-: **cel mai** (ч.), **cea mai** (ж.), **cei mai** (мн. ч.), **cele mai** (мн. ж.): cel mai mare oraș — найбільше місто.',
          'Рівність: **la fel de… ca**. Краще: **mai bun** (про річ), **mai bine** (про дію).',
        ],
      },
      rows: [
        { ro: 'mai scump decât', tr: { ru: 'дороже, чем', ua: 'дорожчий, ніж' } },
        { ro: 'cel mai frumos', tr: { ru: 'самый красивый', ua: 'найкрасивіший' } },
        { ro: 'cea mai bună', tr: { ru: 'самая лучшая', ua: 'найкраща' } },
        { ro: 'la fel de mare ca', tr: { ru: 'такой же большой, как', ua: 'такий самий великий, як' } },
        { ro: 'mai bine', tr: { ru: 'лучше (как)', ua: 'краще (як)' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Чай дешевле, чем кофе.', ua: 'Чай дешевший, ніж кава.' },
      correct: 'Ceaiul e mai ieftin decât cafeaua.',
      wrong: ['Ceaiul e mai scump decât cafeaua.', 'Ceaiul e la fel de ieftin ca cafeaua.', 'Cafeaua e mai ieftină decât ceaiul.'],
    },
    {
      kind: 'pickNative',
      q: 'E cel mai bun restaurant din oraș.',
      correct: { ru: 'Это лучший ресторан в городе.', ua: 'Це найкращий ресторан у місті.' },
      wrong: [
        { ru: 'Это хороший ресторан в городе.', ua: 'Це добрий ресторан у місті.' },
        { ru: 'Это худший ресторан в городе.', ua: 'Це найгірший ресторан у місті.' },
        { ru: 'Это самый дорогой ресторан в городе.', ua: 'Це найдорожчий ресторан у місті.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mai mare', tr: { ru: 'больше', ua: 'більший' } },
        { ro: 'cel mai mare', tr: { ru: 'самый большой', ua: 'найбільший' } },
        { ro: 'decât', tr: { ru: 'чем', ua: 'ніж' } },
        { ro: 'la fel de', tr: { ru: 'так же', ua: 'так само' } },
        { ro: 'mai rău', tr: { ru: 'хуже', ua: 'гірше' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Azi e mai cald decât ieri',
      tr: { ru: 'Сегодня теплее, чем вчера', ua: 'Сьогодні тепліше, ніж учора' },
      wrong: ['Azi e mai frig decât ieri', 'Ieri a fost mai cald', 'Azi e la fel de cald ca ieri'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мой брат выше меня.', ua: 'Мій брат вищий за мене.' },
      words: ['Fratele', 'meu', 'e', 'mai', 'înalt', 'decât', 'mine'],
      extra: ['cel', 'ca', 'înaltă'],
      shown: 'Fratele meu e mai înalt decât mine.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Самая красивая страна.', ua: 'Найкрасивіша країна.' },
      correct: 'Cea mai frumoasă țară.',
      wrong: ['Cel mai frumoasă țară.', 'Mai frumoasă țară.', 'Cea mai frumos țară.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Здесь так же дорого, как в Бухаресте.', ua: 'Тут так само дорого, як у Бухаресті.' },
      words: ['Aici', 'e', 'la', 'fel', 'de', 'scump', 'ca', 'în', 'București'],
      extra: ['decât', 'mai', 'cel'],
      shown: 'Aici e la fel de scump ca în București.',
    },
    {
      kind: 'type',
      q: { ru: 'Сегодня теплее, чем вчера.', ua: 'Сьогодні тепліше, ніж учора.' },
      answers: ['Azi e mai cald decât ieri', 'Astăzi e mai cald decât ieri', 'Azi este mai cald decât ieri'],
      shown: 'Azi e mai cald decât ieri.',
    },
    {
      kind: 'type',
      q: { ru: 'Это лучшая пицца.', ua: 'Це найкраща піца.' },
      answers: ['Asta e cea mai bună pizza', 'E cea mai bună pizza', 'Aceasta e cea mai bună pizza', 'Asta este cea mai bună pizza'],
      shown: 'Asta e cea mai bună pizza.',
    },
  ],
};
