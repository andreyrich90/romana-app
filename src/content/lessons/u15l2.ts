import type { Lesson } from '../types';

/** B1 · Unit 3 · Lesson 2 — the job interview: interviu, de ce…?, pot să încep de luni, vorbesc…, mă descurc cu… */
export const u15l2: Lesson = {
  id: 'u15l2',
  title: { ru: 'Собеседование', ua: 'Співбесіда' },
  words: [
    { ro: 'un interviu', tr: { ru: 'собеседование', ua: 'співбесіда' } },
    { ro: 'De ce…?', tr: { ru: 'Почему…?', ua: 'Чому…?' } },
    { ro: 'Pot să încep de luni.', tr: { ru: 'Я могу начать с понедельника.', ua: 'Я можу почати з понеділка.' } },
    { ro: 'mă descurc', tr: { ru: 'справляюсь, разбираюсь', ua: 'даю раду, розуміюся' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Am un interviu mâine.',
      tr: { ru: 'У меня завтра собеседование.', ua: 'У мене завтра співбесіда.' },
      note: {
        ru: 'interviu ≈ «интервью» — и собеседование, и интервью.',
        ua: 'interviu ≈ «інтервʼю» — і співбесіда, і інтерв’ю.',
      },
    },
    {
      kind: 'intro',
      ro: 'De ce vreți să lucrați la noi?',
      tr: { ru: 'Почему вы хотите работать у нас?', ua: 'Чому ви хочете працювати в нас?' },
      note: {
        ru: 'de ce ≈ «де че» — почему. la noi — «у нас».',
        ua: 'de ce ≈ «де че» — чому. la noi — «у нас».',
      },
    },
    {
      kind: 'intro',
      ro: 'Pot să încep de luni.',
      tr: { ru: 'Я могу начать с понедельника.', ua: 'Я можу почати з понеділка.' },
      note: {
        ru: 'a începe → încep ≈ «ынчеп» — начинаю. de luni — «с понедельника».',
        ua: 'a începe → încep ≈ «инчеп» — починаю. de luni — «з понеділка».',
      },
    },
    {
      kind: 'tip',
      title: 'La interviu',
      body: {
        ru: [
          'О себе: **Sunt…** (serios — серьёзный, punctual — пунктуальный), **Vorbesc…** (româna, engleza), **Mă descurc cu…** — справляюсь с…',
          'Вопросы: **De ce…?** — почему, **Când puteți începe?** — когда можете начать?',
        ],
        ua: [
          'Про себе: **Sunt…** (serios — серйозний, punctual — пунктуальний), **Vorbesc…** (româna, engleza), **Mă descurc cu…** — даю раду з…',
          'Питання: **De ce…?** — чому, **Când puteți începe?** — коли можете почати?',
        ],
      },
      rows: [
        { ro: 'Vorbesc engleza.', tr: { ru: 'Я говорю по-английски.', ua: 'Я говорю англійською.' } },
        { ro: 'Sunt punctual.', tr: { ru: 'Я пунктуален.', ua: 'Я пунктуальний.' } },
        { ro: 'Mă descurc cu calculatorul.', tr: { ru: 'Я разбираюсь в компьютере.', ua: 'Я розуміюся на комп’ютері.' } },
        { ro: 'Când puteți începe?', tr: { ru: 'Когда вы можете начать?', ua: 'Коли ви можете почати?' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Почему вы хотите работать у нас?', ua: 'Чому ви хочете працювати в нас?' },
      correct: 'De ce vreți să lucrați la noi?',
      wrong: ['Unde vreți să lucrați?', 'De ce ați lucrat la noi?', 'Când vreți să lucrați la noi?'],
    },
    {
      kind: 'pickNative',
      q: 'Când puteți începe?',
      correct: { ru: 'Когда вы можете начать?', ua: 'Коли ви можете почати?' },
      wrong: [
        { ru: 'Когда вы начали?', ua: 'Коли ви почали?' },
        { ru: 'Где вы можете начать?', ua: 'Де ви можете почати?' },
        { ru: 'Когда вы закончите?', ua: 'Коли ви закінчите?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'interviu', tr: { ru: 'собеседование', ua: 'співбесіда' } },
        { ro: 'de ce', tr: { ru: 'почему', ua: 'чому' } },
        { ro: 'încep', tr: { ru: 'начинаю', ua: 'починаю' } },
        { ro: 'CV', tr: { ru: 'резюме', ua: 'резюме' } },
        { ro: 'punctual', tr: { ru: 'пунктуальный', ua: 'пунктуальний' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Pot să încep de luni',
      tr: { ru: 'Я могу начать с понедельника', ua: 'Я можу почати з понеділка' },
      wrong: ['Pot să încep de marți', 'Am început luni', 'Poți să începi de luni'],
    },
    {
      kind: 'tiles',
      q: { ru: 'У меня завтра собеседование.', ua: 'У мене завтра співбесіда.' },
      words: ['Am', 'un', 'interviu', 'mâine'],
      extra: ['o', 'ieri', 'interviul'],
      shown: 'Am un interviu mâine.',
      also: ['Mâine am un interviu'],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Я говорю по-румынски и по-английски.', ua: 'Я говорю румунською й англійською.' },
      correct: 'Vorbesc româna și engleza.',
      wrong: ['Vorbești româna și engleza.', 'Vorbesc româna, nu engleza.', 'Am vorbit româna și engleza.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я разбираюсь в компьютере.', ua: 'Я розуміюся на комп’ютері.' },
      words: ['Mă', 'descurc', 'cu', 'calculatorul'],
      extra: ['te', 'descurci', 'la'],
      shown: 'Mă descurc cu calculatorul.',
    },
    {
      kind: 'type',
      q: { ru: 'Почему?', ua: 'Чому?' },
      answers: ['De ce'],
      shown: 'De ce?',
    },
    {
      kind: 'type',
      q: { ru: 'Я могу начать с понедельника.', ua: 'Я можу почати з понеділка.' },
      answers: ['Pot să încep de luni', 'Pot începe de luni', 'Pot să încep luni'],
      shown: 'Pot să încep de luni.',
    },
  ],
};
