import type { Lesson } from '../types';

/** B1 · Unit 1 · Lesson 1 — the imperfect of a fi and a avea: eram, aveam; când eram mic, pe atunci. */
export const u13l1: Lesson = {
  id: 'u13l1',
  title: { ru: 'Я был, у меня было', ua: 'Я був, у мене було' },
  words: [
    { ro: 'eram', tr: { ru: 'я был(а) (тогда, долго)', ua: 'я був(ла) (тоді, довго)' } },
    { ro: 'aveam', tr: { ru: 'у меня было', ua: 'у мене було' } },
    { ro: 'când eram mic', tr: { ru: 'когда я был маленьким', ua: 'коли я був малим' } },
    { ro: 'pe atunci', tr: { ru: 'тогда, в то время', ua: 'тоді, в той час' } },
    { ro: 'un câine', tr: { ru: 'собака', ua: 'собака' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Când eram mic, locuiam la țară.',
      tr: { ru: 'Когда я был маленьким, я жил в деревне.', ua: 'Коли я був малим, я жив у селі.' },
      note: {
        ru: 'eram — тоже «я был», но это рассказ о том, как было: фон, состояние. Am fost — один факт. la țară — «в деревне». ≈ «кынд ерам мик».',
        ua: 'eram — теж «я був», але це розповідь про те, як було: тло, стан. Am fost — один факт. la țară — «у селі». ≈ «кинд єрам мік».',
      },
    },
    {
      kind: 'intro',
      ro: 'Aveam un câine.',
      tr: { ru: 'У меня была собака.', ua: 'У мене був собака.' },
      note: {
        ru: 'aveam — «у меня было» (долго, в прошлом). câine ≈ «кыйне» — собака.',
        ua: 'aveam — «у мене було» (довго, у минулому). câine ≈ «кийне» — собака.',
      },
    },
    {
      kind: 'intro',
      ro: 'Pe atunci iarna era frig.',
      tr: { ru: 'Тогда зимой было холодно.', ua: 'Тоді взимку було холодно.' },
      note: {
        ru: 'pe atunci ≈ «пе атунч» — тогда, в то время. era — «было».',
        ua: 'pe atunci ≈ «пе атунч» — тоді, в той час. era — «було».',
      },
    },
    {
      kind: 'tip',
      title: 'Eram, aveam',
      body: {
        ru: [
          'Имперфект — время для описания прошлого: как было, что длилось, что повторялось. По-русски это то же «был, было».',
          '**A fi**: eram, erai, era, eram, erați, erau. **A avea**: aveam, aveai, avea, aveam, aveați, aveau.',
          '**Am fost** — один раз, факт: Am fost la mare. **Eram** — фон, состояние: Eram obosit — я был уставшим.',
        ],
        ua: [
          'Імперфект — час для опису минулого: як було, що тривало, що повторювалося. Українською це те саме «був, було».',
          '**A fi**: eram, erai, era, eram, erați, erau. **A avea**: aveam, aveai, avea, aveam, aveați, aveau.',
          '**Am fost** — один раз, факт: Am fost la mare. **Eram** — тло, стан: Eram obosit — я був утомлений.',
        ],
      },
      rows: [
        { ro: 'eu eram', tr: { ru: 'я был(а)', ua: 'я був(ла)' } },
        { ro: 'tu erai', tr: { ru: 'ты был(а)', ua: 'ти був(ла)' } },
        { ro: 'el / ea era', tr: { ru: 'он / она был(а)', ua: 'він / вона був(ла)' } },
        { ro: 'noi eram', tr: { ru: 'мы были', ua: 'ми були' } },
        { ro: 'eu aveam', tr: { ru: 'у меня было', ua: 'у мене було' } },
        { ro: 'ei aveau', tr: { ru: 'у них было', ua: 'у них було' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Когда я был маленьким…', ua: 'Коли я був малим…' },
      correct: 'Când eram mic…',
      wrong: ['Când ești mic…', 'Când erai mic…', 'Când eram mare…'],
    },
    {
      kind: 'pickNative',
      q: 'Aveam o casă mare.',
      correct: { ru: 'У меня был большой дом.', ua: 'У мене був великий будинок.' },
      wrong: [
        { ru: 'У меня большой дом.', ua: 'У мене великий будинок.' },
        { ru: 'У них был большой дом.', ua: 'У них був великий будинок.' },
        { ru: 'У меня был маленький дом.', ua: 'У мене був маленький будинок.' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'eram', tr: { ru: 'я был', ua: 'я був' } },
        { ro: 'era', tr: { ru: 'он был', ua: 'він був' } },
        { ro: 'aveam', tr: { ru: 'у меня было', ua: 'у мене було' } },
        { ro: 'erau', tr: { ru: 'они были', ua: 'вони були' } },
        { ro: 'pe atunci', tr: { ru: 'тогда', ua: 'тоді' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Pe atunci eram student',
      tr: { ru: 'Тогда я был студентом', ua: 'Тоді я був студентом' },
      wrong: ['Acum sunt student', 'Pe atunci era student', 'Pe atunci erau studenți'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Когда я был маленьким, у меня была собака.', ua: 'Коли я був малим, у мене був собака.' },
      words: ['Când', 'eram', 'mic', 'aveam', 'un', 'câine'],
      extra: ['mică', 'avea', 'o'],
      shown: 'Când eram mic, aveam un câine.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Было холодно.', ua: 'Було холодно.' },
      correct: 'Era frig.',
      wrong: ['E frig.', 'Era cald.', 'O să fie frig.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Мы жили в деревне.', ua: 'Ми жили в селі.' },
      words: ['Locuiam', 'la', 'țară'],
      extra: ['locuiesc', 'în', 'oraș'],
      shown: 'Locuiam la țară.',
    },
    {
      kind: 'pickNative',
      q: 'Erați acasă?',
      correct: { ru: 'Вы были дома?', ua: 'Ви були вдома?' },
      wrong: [
        { ru: 'Вы дома?', ua: 'Ви вдома?' },
        { ru: 'Ты был дома?', ua: 'Ти був удома?' },
        { ru: 'Они были дома?', ua: 'Вони були вдома?' },
      ],
    },
    {
      kind: 'type',
      q: { ru: 'У меня была собака.', ua: 'У мене був собака.' },
      answers: ['Aveam un câine', 'Eu aveam un câine', 'Am avut un câine'],
      shown: 'Aveam un câine.',
    },
    {
      kind: 'type',
      q: { ru: 'Тогда было холодно.', ua: 'Тоді було холодно.' },
      answers: ['Pe atunci era frig', 'Atunci era frig', 'Era frig pe atunci'],
      shown: 'Pe atunci era frig.',
    },
  ],
};
