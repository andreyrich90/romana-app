import type { Lesson } from '../types';

/** A2 · Unit 2 · Lesson 4 — making plans with someone: Ești liber?, Ne vedem mâine, Pe mâine!, Sigur! */
export const u8l4: Lesson = {
  id: 'u8l4',
  title: { ru: 'Договориться о встрече', ua: 'Домовитися про зустріч' },
  words: [
    { ro: 'Ești liber? / Ești liberă?', tr: { ru: 'Ты свободен? / Ты свободна?', ua: 'Ти вільний? / Ти вільна?' } },
    { ro: 'Ne vedem mâine.', tr: { ru: 'Увидимся завтра.', ua: 'Побачимося завтра.' } },
    { ro: 'Pe mâine!', tr: { ru: 'До завтра!', ua: 'До завтра!' } },
    { ro: 'Sigur!', tr: { ru: 'Конечно!', ua: 'Звісно!' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Ești liber mâine?',
      tr: { ru: 'Ты свободен завтра?', ua: 'Ти вільний завтра?' },
      note: {
        ru: 'Женщине — Ești liberă? ≈ «ешть либер / либерэ». Ответ: Da, sunt liber. / Nu, o să lucrez.',
        ua: 'Жінці — Ești liberă? ≈ «ешть лібер / лібере». Відповідь: Da, sunt liber. / Nu, o să lucrez.',
      },
    },
    {
      kind: 'intro',
      ro: 'Ne vedem mâine la ora cinci.',
      tr: { ru: 'Увидимся завтра в пять.', ua: 'Побачимося завтра о п’ятій.' },
      note: {
        ru: 'ne vedem ≈ «не ведем» — буквально «видимся». Договариваются настоящим временем, как в русском «встречаемся завтра».',
        ua: 'ne vedem ≈ «не ведем» — буквально «бачимося». Домовляються теперішнім часом, як в українській «зустрічаємося завтра».',
      },
    },
    {
      kind: 'intro',
      ro: 'Sigur! Pe mâine!',
      tr: { ru: 'Конечно! До завтра!', ua: 'Звісно! До завтра!' },
      note: {
        ru: 'sigur ≈ «сигур» — «конечно, точно». pe mâine ≈ «пе мыйне». Так же: Pe diseară! — До вечера!',
        ua: 'sigur ≈ «сігур» — «звісно, точно». pe mâine ≈ «пе мийне». Так само: Pe diseară! — До вечора!',
      },
    },
    {
      kind: 'tip',
      title: 'Ne vedem!',
      body: {
        ru: [
          'О договорённостях говорят настоящим временем: **Ne vedem mâine** — «Встречаемся завтра».',
          'Время — **la ora** + число, как в разделе «Время»: **la ora opt**, **la ora cinci și jumătate**.',
          'Прощание «до…» — **pe** + когда: **Pe mâine!**, **Pe diseară!**, **Pe luni!** (до понедельника).',
        ],
        ua: [
          'Про домовленості говорять теперішнім часом: **Ne vedem mâine** — «Зустрічаємося завтра».',
          'Час — **la ora** + число, як у розділі «Час»: **la ora opt**, **la ora cinci și jumătate**.',
          'Прощання «до…» — **pe** + коли: **Pe mâine!**, **Pe diseară!**, **Pe luni!** (до понеділка).',
        ],
      },
      rows: [
        { ro: 'Ne vedem mâine?', tr: { ru: 'Увидимся завтра? · «не ведем мыйне»', ua: 'Побачимося завтра? · «не ведем мийне»' } },
        { ro: 'La ce oră?', tr: { ru: 'Во сколько? · «ла че орэ»', ua: 'О котрій? · «ла че оре»' } },
        { ro: 'La ora opt.', tr: { ru: 'В восемь. · «ла ора опт»', ua: 'О восьмій. · «ла ора опт»' } },
        { ro: 'Pe luni!', tr: { ru: 'До понедельника! · «пе лунь»', ua: 'До понеділка! · «пе лунь»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Во сколько увидимся?', ua: 'О котрій побачимося?' },
      correct: 'La ce oră ne vedem?',
      wrong: ['Cât e ceasul?', 'Unde ne vedem?', 'Când ai ajuns?'],
    },
    {
      kind: 'pickNative',
      q: 'Mâine o să lucrez, nu sunt liber.',
      correct: { ru: 'Завтра я буду работать, я не свободен.', ua: 'Завтра я працюватиму, я не вільний.' },
      wrong: [
        { ru: 'Завтра я свободен.', ua: 'Завтра я вільний.' },
        { ru: 'Вчера я работал, я не был свободен.', ua: 'Учора я працював, я не був вільний.' },
        { ru: 'Завтра ты будешь работать?', ua: 'Завтра ти працюватимеш?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'Pe mâine!', tr: { ru: 'До завтра!', ua: 'До завтра!' } },
        { ro: 'Pe diseară!', tr: { ru: 'До вечера!', ua: 'До вечора!' } },
        { ro: 'La ce oră?', tr: { ru: 'Во сколько?', ua: 'О котрій?' } },
        { ro: 'liber', tr: { ru: 'свободен', ua: 'вільний' } },
        { ro: 'Sigur!', tr: { ru: 'Конечно!', ua: 'Звісно!' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Ne vedem la ora șase',
      tr: { ru: 'Увидимся в шесть', ua: 'Побачимося о шостій' },
      wrong: ['Ne vedem la ora șapte', 'Ne vedem mâine', 'Ne vedem la ora trei'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Ты свободна сегодня вечером?', ua: 'Ти вільна сьогодні ввечері?' },
      words: ['Ești', 'liberă', 'diseară'],
      extra: ['liber', 'aseară', 'sunt'],
      shown: 'Ești liberă diseară?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Конечно! До завтра!', ua: 'Звісно! До завтра!' },
      correct: 'Sigur! Pe mâine!',
      wrong: ['Sigur! Pe diseară!', 'Nu! Pe mâine!', 'Sigur! La revedere!'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Увидимся завтра в семь.', ua: 'Побачимося завтра о сьомій.' },
      words: ['Ne', 'vedem', 'mâine', 'la', 'ora', 'șapte'],
      extra: ['vede', 'ieri', 'opt'],
      shown: 'Ne vedem mâine la ora șapte.',
      also: ['Mâine ne vedem la ora șapte', 'Ne vedem la ora șapte mâine'],
    },
    {
      kind: 'type',
      q: { ru: 'До завтра!', ua: 'До завтра!' },
      answers: ['Pe mâine'],
      shown: 'Pe mâine!',
    },
    {
      kind: 'type',
      q: { ru: 'Ты свободен завтра?', ua: 'Ти вільний завтра?' },
      answers: ['Ești liber mâine', 'Mâine ești liber', 'Tu ești liber mâine', 'Ești liberă mâine'],
      shown: 'Ești liber mâine?',
    },
  ],
};
