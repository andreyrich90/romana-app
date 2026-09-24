import type { Lesson } from '../types';

/** B1 · Unit 5 · Lesson 2 — reported statements: mi-a spus că…, i-am spus că…, no shift of tense after că. */
export const u17l2: Lesson = {
  id: 'u17l2',
  title: { ru: 'Он сказал, что', ua: 'Він сказав, що' },
  words: [
    { ro: 'mi-a spus că', tr: { ru: 'он (она) сказал(а) мне, что', ua: 'він (вона) сказав(ла) мені, що' } },
    { ro: 'a spus că', tr: { ru: 'сказал(а), что', ua: 'сказав(ла), що' } },
    { ro: 'i-am spus', tr: { ru: 'я сказал(а) ему (ей)', ua: 'я сказав(ла) йому (їй)' } },
    { ro: 'adevărul', tr: { ru: 'правда', ua: 'правда' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Mi-a spus că e obosit.',
      tr: { ru: 'Он сказал мне, что устал.', ua: 'Він сказав мені, що втомився.' },
      note: {
        ru: 'mi-a = îmi + a: «мне … он». Время после că не сдвигается: e obosit — «устал» (сейчас), как в русском.',
        ua: 'mi-a = îmi + a: «мені … він». Час після că не зсувається: e obosit — «утомлений» (зараз), як в українській.',
      },
    },
    {
      kind: 'intro',
      ro: 'Ana a spus că vine mâine.',
      tr: { ru: 'Анна сказала, что придёт завтра.', ua: 'Анна сказала, що прийде завтра.' },
      note: {
        ru: 'a spus ≈ «а спус» — сказал(а). В разговоре часто a zis.',
        ua: 'a spus ≈ «а спус» — сказав(ла). У розмові часто a zis.',
      },
    },
    {
      kind: 'intro',
      ro: 'I-am spus că nu pot.',
      tr: { ru: 'Я сказал ему, что не могу.', ua: 'Я сказав йому, що не можу.' },
      note: {
        ru: 'i-am = îi + am: «ему (ей) я». Им — le-am spus.',
        ua: 'i-am = îi + am: «йому (їй) я». Їм — le-am spus.',
      },
    },
    {
      kind: 'tip',
      title: 'Mi-a spus că…',
      body: {
        ru: [
          'Кому сказали — перед глаголом: **mi-a spus** (мне), **ți-a spus** (тебе), **i-a spus** (ему, ей), **ne-a spus** (нам), **v-a spus** (вам).',
          'Я сказал кому: **i-am spus** (ему, ей), **le-am spus** (им).',
          'Время после **că** — как в русском: **a spus că e bolnav** — сказал, что болеет.',
        ],
        ua: [
          'Кому сказали — перед дієсловом: **mi-a spus** (мені), **ți-a spus** (тобі), **i-a spus** (йому, їй), **ne-a spus** (нам), **v-a spus** (вам).',
          'Я сказав кому: **i-am spus** (йому, їй), **le-am spus** (їм).',
          'Час після **că** — як в українській: **a spus că e bolnav** — сказав, що хворіє.',
        ],
      },
      rows: [
        { ro: 'Mi-a spus că vine.', tr: { ru: 'Он сказал мне, что придёт.', ua: 'Він сказав мені, що прийде.' } },
        { ro: 'Ți-a spus ceva?', tr: { ru: 'Он тебе что-нибудь сказал?', ua: 'Він тобі щось сказав?' } },
        { ro: 'I-am spus adevărul.', tr: { ru: 'Я сказал ему правду.', ua: 'Я сказав йому правду.' } },
        { ro: 'Ne-a spus că pleacă.', tr: { ru: 'Он сказал нам, что уезжает.', ua: 'Він сказав нам, що їде.' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Она сказала мне, что устала.', ua: 'Вона сказала мені, що втомилася.' },
      correct: 'Mi-a spus că e obosită.',
      wrong: ['I-am spus că e obosită.', 'Mi-a spus că era obosit.', 'Ți-a spus că e obosită.'],
    },
    {
      kind: 'pickNative',
      q: 'Ți-a spus ceva?',
      correct: { ru: 'Он тебе что-нибудь сказал?', ua: 'Він тобі щось сказав?' },
      wrong: [
        { ru: 'Ты ему что-нибудь сказал?', ua: 'Ти йому щось сказав?' },
        { ru: 'Он мне что-нибудь сказал?', ua: 'Він мені щось сказав?' },
        { ru: 'Ты что-нибудь сказал?', ua: 'Ти щось сказав?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'mi-a spus', tr: { ru: 'мне сказал', ua: 'мені сказав' } },
        { ro: 'ți-a spus', tr: { ru: 'тебе сказал', ua: 'тобі сказав' } },
        { ro: 'i-am spus', tr: { ru: 'я ему сказал', ua: 'я йому сказав' } },
        { ro: 'ne-a spus', tr: { ru: 'нам сказал', ua: 'нам сказав' } },
        { ro: 'adevărul', tr: { ru: 'правда', ua: 'правда' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Ne-a spus că pleacă',
      tr: { ru: 'Он сказал нам, что уезжает', ua: 'Він сказав нам, що їде' },
      wrong: ['Ne-a spus că vine', 'Mi-a spus că pleacă', 'V-a spus că pleacă'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Я сказал ему, что не могу.', ua: 'Я сказав йому, що не можу.' },
      words: ['I-am', 'spus', 'că', 'nu', 'pot'],
      extra: ['mi-a', 'poate', 'le-am'],
      shown: 'I-am spus că nu pot.',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Анна сказала, что придёт завтра.', ua: 'Анна сказала, що прийде завтра.' },
      correct: 'Ana a spus că vine mâine.',
      wrong: ['Ana a spus că a venit ieri.', 'Ana spune că vine mâine.', 'Ana a spus să vină mâine.'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Он сказал нам правду.', ua: 'Він сказав нам правду.' },
      words: ['Ne-a', 'spus', 'adevărul'],
      extra: ['mi-a', 'adevăr', 'am'],
      shown: 'Ne-a spus adevărul.',
    },
    {
      kind: 'type',
      q: { ru: 'Он сказал мне, что устал.', ua: 'Він сказав мені, що втомився.' },
      answers: ['Mi-a spus că e obosit', 'Mi-a spus că este obosit', 'Mi-a zis că e obosit'],
      shown: 'Mi-a spus că e obosit.',
    },
    {
      kind: 'type',
      q: { ru: 'Я сказал(а) ему, что не могу.', ua: 'Я сказав(ла) йому, що не можу.' },
      answers: ['I-am spus că nu pot', 'I-am zis că nu pot'],
      shown: 'I-am spus că nu pot.',
    },
  ],
};
