import type { Lesson } from '../types';

/** A2 · Unit 6 · Lesson 2 — station and airport: bilet dus-întors, pleacă / sosește / întârzie, peronul, zborul, avionul. */
export const u12l2: Lesson = {
  id: 'u12l2',
  title: { ru: 'Вокзал и аэропорт', ua: 'Вокзал і аеропорт' },
  words: [
    { ro: 'un bilet dus-întors', tr: { ru: 'билет туда и обратно', ua: 'квиток туди й назад' } },
    { ro: 'pleacă · sosește', tr: { ru: 'отправляется · прибывает', ua: 'відправляється · прибуває' } },
    { ro: 'întârzie', tr: { ru: 'опаздывает, задерживается', ua: 'запізнюється, затримується' } },
    { ro: 'peronul', tr: { ru: 'платформа', ua: 'платформа' } },
    { ro: 'zborul', tr: { ru: 'рейс, полёт', ua: 'рейс, політ' } },
    { ro: 'aeroportul · avionul', tr: { ru: 'аэропорт · самолёт', ua: 'аеропорт · літак' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Un bilet dus-întors, vă rog.',
      tr: { ru: 'Билет туда и обратно, пожалуйста.', ua: 'Квиток туди й назад, будь ласка.' },
      note: {
        ru: 'dus-întors ≈ «дус-ынторс» — «туда-обратно». Только в одну сторону — doar dus.',
        ua: 'dus-întors ≈ «дус-инторс» — «туди-назад». Лише в один бік — doar dus.',
      },
    },
    {
      kind: 'intro',
      ro: 'Trenul pleacă de la peronul trei.',
      tr: { ru: 'Поезд отправляется с третьей платформы.', ua: 'Потяг відправляється з третьої платформи.' },
      note: {
        ru: 'pleacă ≈ «плякэ» — от a pleca. peron ≈ «перон». С какой платформы? — De la ce peron?',
        ua: 'pleacă ≈ «пляке» — від a pleca. peron ≈ «перон». З якої платформи? — De la ce peron?',
      },
    },
    {
      kind: 'intro',
      ro: 'Zborul întârzie.',
      tr: { ru: 'Рейс задерживается.', ua: 'Рейс затримується.' },
      note: {
        ru: 'zbor ≈ «збор» — полёт, рейс. întârzie ≈ «ынтырзие» — родственник târziu (поздно).',
        ua: 'zbor ≈ «збор» — політ, рейс. întârzie ≈ «интирзіє» — родич târziu (пізно).',
      },
    },
    {
      kind: 'tip',
      title: 'Pleacă, sosește, întârzie',
      body: {
        ru: [
          'Три слова с табло и из объявлений: **pleacă** (отправляется), **sosește** (прибывает), **întârzie** (задерживается).',
          '**Sosește** — глагол на -esc, как mă trezesc: sosesc, sosești, sosește.',
          'В расписании — 24 часа: **la ora 17:30** = «la ora șaptesprezece și treizeci».',
        ],
        ua: [
          'Три слова з табло й оголошень: **pleacă** (відправляється), **sosește** (прибуває), **întârzie** (затримується).',
          '**Sosește** — дієслово на -esc, як mă trezesc: sosesc, sosești, sosește.',
          'У розкладі — 24 години: **la ora 17:30** = «la ora șaptesprezece și treizeci».',
        ],
      },
      rows: [
        { ro: 'Trenul pleacă.', tr: { ru: 'Поезд отправляется. · «тренул плякэ»', ua: 'Потяг відправляється. · «тренул пляке»' } },
        { ro: 'Avionul sosește.', tr: { ru: 'Самолёт прибывает. · «авионул сосеште»', ua: 'Літак прибуває. · «авіонул сосеште»' } },
        { ro: 'Zborul întârzie.', tr: { ru: 'Рейс задерживается. · «зборул ынтырзие»', ua: 'Рейс затримується. · «зборул интирзіє»' } },
        { ro: 'De la ce peron?', tr: { ru: 'С какой платформы? · «де ла че перон»', ua: 'З якої платформи? · «де ла че перон»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Билет туда и обратно, пожалуйста.', ua: 'Квиток туди й назад, будь ласка.' },
      correct: 'Un bilet dus-întors, vă rog.',
      wrong: ['Un bilet doar dus, vă rog.', 'Două bilete, vă rog.', 'Unde e biletul?'],
    },
    {
      kind: 'pickNative',
      q: 'La ce oră sosește trenul?',
      correct: { ru: 'Во сколько прибывает поезд?', ua: 'О котрій прибуває потяг?' },
      wrong: [
        { ru: 'Во сколько отправляется поезд?', ua: 'О котрій відправляється потяг?' },
        { ru: 'Где поезд?', ua: 'Де потяг?' },
        { ru: 'Поезд опаздывает?', ua: 'Потяг запізнюється?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'pleacă', tr: { ru: 'отправляется', ua: 'відправляється' } },
        { ro: 'sosește', tr: { ru: 'прибывает', ua: 'прибуває' } },
        { ro: 'întârzie', tr: { ru: 'опаздывает', ua: 'запізнюється' } },
        { ro: 'peronul', tr: { ru: 'платформа', ua: 'платформа' } },
        { ro: 'zborul', tr: { ru: 'рейс', ua: 'рейс' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Zborul întârzie o oră',
      tr: { ru: 'Рейс задерживается на час', ua: 'Рейс затримується на годину' },
      wrong: ['Trenul întârzie o oră', 'Zborul pleacă la ora unu', 'Zborul întârzie două ore'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Поезд отправляется со второй платформы.', ua: 'Потяг відправляється з другої платформи.' },
      words: ['Trenul', 'pleacă', 'de', 'la', 'peronul', 'doi'],
      extra: ['sosește', 'două', 'avionul'],
      shown: 'Trenul pleacă de la peronul doi.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Где аэропорт?', ua: 'Де аеропорт?' },
      correct: 'Unde e aeroportul?',
      wrong: ['Unde e gara?', 'Când pleacă avionul?', 'E aeroportul mare.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Во сколько прибывает самолёт?', ua: 'О котрій прибуває літак?' },
      words: ['La', 'ce', 'oră', 'sosește', 'avionul'],
      extra: ['pleacă', 'trenul', 'când'],
      shown: 'La ce oră sosește avionul?',
    },
    {
      kind: 'type',
      q: { ru: 'Билет туда и обратно, пожалуйста.', ua: 'Квиток туди й назад, будь ласка.' },
      answers: ['Un bilet dus-întors, vă rog', 'Un bilet dus întors, vă rog'],
      shown: 'Un bilet dus-întors, vă rog.',
    },
    {
      kind: 'type',
      q: { ru: 'Рейс задерживается.', ua: 'Рейс затримується.' },
      answers: ['Zborul întârzie', 'Zborul are întârziere'],
      shown: 'Zborul întârzie.',
    },
  ],
};
