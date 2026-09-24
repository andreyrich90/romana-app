import type { Lesson } from '../types';

/** B1 · Unit 5 · Lesson 4 — letters and messages: dragă…, stimate domnule / stimată doamnă, vă scriu pentru că…, cu drag, cu stimă. */
export const u17l4: Lesson = {
  id: 'u17l4',
  title: { ru: 'Письмо', ua: 'Лист' },
  words: [
    { ro: 'Dragă…', tr: { ru: 'Дорогой, дорогая…', ua: 'Дорогий, дорога…' } },
    { ro: 'Stimată doamnă', tr: { ru: 'Уважаемая госпожа', ua: 'Шановна пані' } },
    { ro: 'Vă scriu pentru că…', tr: { ru: 'Пишу вам, потому что…', ua: 'Пишу вам, бо…' } },
    { ro: 'Cu drag', tr: { ru: 'С любовью (тепло, другу)', ua: 'З любов’ю (тепло, другові)' } },
    { ro: 'Cu stimă', tr: { ru: 'С уважением', ua: 'З повагою' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Dragă Ana, ce mai faci?',
      tr: { ru: 'Дорогая Анна, как дела?', ua: 'Дорога Анно, як справи?' },
      note: {
        ru: 'dragă ≈ «драгэ» — одинаково для мужчин и женщин: dragă Ion, dragă Ana. Ce mai faci? — «как поживаешь?».',
        ua: 'dragă ≈ «драге» — однаково для чоловіків і жінок: dragă Ion, dragă Ana. Ce mai faci? — «як поживаєш?».',
      },
    },
    {
      kind: 'intro',
      ro: 'Stimate domnule director,',
      tr: { ru: 'Уважаемый господин директор,', ua: 'Шановний пане директоре,' },
      note: {
        ru: 'Официально: stimate domnule (м.), stimată doamnă (ж.). domn ≈ «домн» — господин.',
        ua: 'Офіційно: stimate domnule (ч.), stimată doamnă (ж.). domn ≈ «домн» — пан.',
      },
    },
    {
      kind: 'intro',
      ro: 'Vă scriu pentru că am o întrebare.',
      tr: { ru: 'Пишу вам, потому что у меня вопрос.', ua: 'Пишу вам, бо маю питання.' },
      note: {
        ru: 'a scrie → scriu ≈ «скриу» — пишу. întrebare — вопрос.',
        ua: 'a scrie → scriu ≈ «скріу» — пишу. întrebare — питання.',
      },
    },
    {
      kind: 'tip',
      title: 'Cu stimă',
      body: {
        ru: [
          'Другу: **Dragă…**, в конце **Cu drag** (тепло, с любовью) или **Te pup** (целую; разговорное).',
          'Официально: **Stimate domnule…** / **Stimată doamnă…**, в конце **Cu stimă** (с уважением). Внутри письма — **dumneavoastră** (Вы).',
        ],
        ua: [
          'Другові: **Dragă…**, наприкінці **Cu drag** (тепло, з любов’ю) або **Te pup** (цілую; розмовне).',
          'Офіційно: **Stimate domnule…** / **Stimată doamnă…**, наприкінці **Cu stimă** (з повагою). У листі — **dumneavoastră** (Ви).',
        ],
      },
      rows: [
        { ro: 'Dragă Ion,', tr: { ru: 'Дорогой Ион,', ua: 'Дорогий Іоне,' } },
        { ro: 'Stimată doamnă,', tr: { ru: 'Уважаемая госпожа,', ua: 'Шановна пані,' } },
        { ro: 'Cu drag,', tr: { ru: 'С любовью,', ua: 'З любов’ю,' } },
        { ro: 'Cu stimă,', tr: { ru: 'С уважением,', ua: 'З повагою,' } },
        { ro: 'Aștept răspunsul dumneavoastră.', tr: { ru: 'Жду вашего ответа.', ua: 'Чекаю на вашу відповідь.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'С уважением,', ua: 'З повагою,' },
      correct: 'Cu stimă,',
      wrong: ['Cu drag,', 'Dragă,', 'Stimată,'],
    },
    {
      kind: 'pickNative',
      q: 'Aștept răspunsul dumneavoastră.',
      correct: { ru: 'Жду вашего ответа.', ua: 'Чекаю на вашу відповідь.' },
      wrong: [
        { ru: 'Жду твоего ответа.', ua: 'Чекаю на твою відповідь.' },
        { ru: 'Вот мой ответ.', ua: 'Ось моя відповідь.' },
        { ru: 'Спасибо за ваш ответ.', ua: 'Дякую за вашу відповідь.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'dragă', tr: { ru: 'дорогой', ua: 'дорогий' } },
        { ro: 'stimată', tr: { ru: 'уважаемая', ua: 'шановна' } },
        { ro: 'cu drag', tr: { ru: 'с любовью', ua: 'з любов’ю' } },
        { ro: 'cu stimă', tr: { ru: 'с уважением', ua: 'з повагою' } },
        { ro: 'răspunsul', tr: { ru: 'ответ', ua: 'відповідь' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Vă scriu pentru că am o întrebare',
      tr: { ru: 'Пишу вам, потому что у меня вопрос', ua: 'Пишу вам, бо маю питання' },
      wrong: ['Îți scriu pentru că am o întrebare', 'Vă scriu pentru că am o problemă', 'Vă răspund pentru că am o întrebare'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Дорогая Мария, как дела?', ua: 'Дорога Маріє, як справи?' },
      words: ['Dragă', 'Maria', 'ce', 'mai', 'faci'],
      extra: ['stimată', 'faceți', 'cum'],
      shown: 'Dragă Maria, ce mai faci?',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Уважаемая госпожа,', ua: 'Шановна пані,' },
      correct: 'Stimată doamnă,',
      wrong: ['Stimate doamnă,', 'Dragă doamnă,', 'Stimată domnule,'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Пишу вам, потому что у меня вопрос.', ua: 'Пишу вам, бо маю питання.' },
      words: ['Vă', 'scriu', 'pentru', 'că', 'am', 'o', 'întrebare'],
      extra: ['îți', 'răspuns', 'deși'],
      shown: 'Vă scriu pentru că am o întrebare.',
    },
    {
      kind: 'type',
      q: { ru: 'С уважением,', ua: 'З повагою,' },
      answers: ['Cu stimă', 'Cu respect', 'Cu considerație'],
      shown: 'Cu stimă,',
    },
    {
      kind: 'type',
      q: { ru: 'Дорогой Андрей,', ua: 'Дорогий Андрію,' },
      answers: ['Dragă Andrei'],
      shown: 'Dragă Andrei,',
    },
  ],
};
