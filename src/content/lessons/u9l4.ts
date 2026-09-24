import type { Lesson } from '../types';

/** A2 · Unit 3 · Lesson 4 — suggestions: hai să + „we" form, ceva, accepting (cu plăcere) and declining (poate altă dată). */
export const u9l4: Lesson = {
  id: 'u9l4',
  title: { ru: 'Давай!', ua: 'Давай!' },
  words: [
    { ro: 'Hai să mergem!', tr: { ru: 'Пойдём!', ua: 'Ходімо!' } },
    { ro: 'Hai!', tr: { ru: 'Давай! Пошли!', ua: 'Давай! Ходімо!' } },
    { ro: 'ceva', tr: { ru: 'что-нибудь, что-то', ua: 'щось' } },
    { ro: 'cu plăcere', tr: { ru: 'с удовольствием', ua: 'із задоволенням' } },
    { ro: 'altă dată', tr: { ru: 'в другой раз', ua: 'іншим разом' } },
  ],
  exercises: [
    {
      kind: 'intro',
      ro: 'Hai să mergem!',
      tr: { ru: 'Пойдём!', ua: 'Ходімо!' },
      note: {
        ru: 'hai ≈ «хай» — «давай». Дальше să и глагол в форме «мы»: hai să mergem. ≈ «хай сэ мерджем».',
        ua: 'hai ≈ «хай» — «давай». Далі să і дієслово у формі «ми»: hai să mergem. ≈ «хай се мерджем».',
      },
    },
    {
      kind: 'intro',
      ro: 'Hai să mâncăm ceva.',
      tr: { ru: 'Давай что-нибудь поедим.', ua: 'Давай щось поїмо.' },
      note: {
        ru: 'ceva ≈ «чева» — «что-нибудь, что-то». mâncăm ≈ «мынкэм» — «мы едим».',
        ua: 'ceva ≈ «чева» — «щось». mâncăm ≈ «минкем» — «ми їмо».',
      },
    },
    {
      kind: 'intro',
      ro: 'Poate altă dată.',
      tr: { ru: 'Может, в другой раз.', ua: 'Може, іншим разом.' },
      note: {
        ru: 'Вежливый отказ. altă dată ≈ «алтэ датэ». Согласие — Da, cu plăcere! ≈ «да, ку плэчере» — Да, с удовольствием!',
        ua: 'Ввічлива відмова. altă dată ≈ «алте дате». Згода — Da, cu plăcere! ≈ «да, ку плечере» — Так, із задоволенням!',
      },
    },
    {
      kind: 'tip',
      title: 'Hai să…',
      body: {
        ru: [
          '**Hai să** + глагол в форме «мы» — «давай(те) …»: **hai să mergem** (пойдём), **hai să vedem** (посмотрим), **hai să învățăm** (давай учить).',
          'a bea (пить) → **bem** (мы пьём): **hai să bem o cafea** — давай выпьем кофе.',
          'Одно **Hai!** — «Давай! Пошли!». Ответ на приглашение — **Da, cu plăcere!** или **Poate altă dată.**',
        ],
        ua: [
          '**Hai să** + дієслово у формі «ми» — «давай(те) …»: **hai să mergem** (ходімо), **hai să vedem** (подивимося), **hai să învățăm** (давай вчити).',
          'a bea (пити) → **bem** (ми п’ємо): **hai să bem o cafea** — давай вип’ємо кави.',
          'Одне **Hai!** — «Давай! Ходімо!». Відповідь на запрошення — **Da, cu plăcere!** або **Poate altă dată.**',
        ],
      },
      rows: [
        { ro: 'Hai să mergem!', tr: { ru: 'Пойдём! · «хай сэ мерджем»', ua: 'Ходімо! · «хай се мерджем»' } },
        { ro: 'Hai să bem o cafea!', tr: { ru: 'Давай выпьем кофе! · «хай сэ бем о кафя»', ua: 'Давай вип’ємо кави! · «хай се бем о кафя»' } },
        { ro: 'Da, cu plăcere!', tr: { ru: 'Да, с удовольствием! · «да, ку плэчере»', ua: 'Так, із задоволенням! · «да, ку плечере»' } },
        { ro: 'Poate altă dată.', tr: { ru: 'Может, в другой раз. · «поате алтэ датэ»', ua: 'Може, іншим разом. · «поате алте дате»' } },
      ],
    },
    {
      kind: 'pickRo',
      q: { ru: 'Давай посмотрим фильм!', ua: 'Давай подивимося фільм!' },
      correct: 'Hai să vedem un film!',
      wrong: ['Am văzut un film.', 'Vreau să văd un film.', 'Hai să vedeți un film!'],
    },
    {
      kind: 'pickNative',
      q: 'Vrei să mergem la mare?',
      correct: { ru: 'Хочешь, поедем на море?', ua: 'Хочеш, поїдемо на море?' },
      wrong: [
        { ru: 'Мы поедем на море.', ua: 'Ми поїдемо на море.' },
        { ru: 'Ты был на море?', ua: 'Ти був на морі?' },
        { ru: 'Хочешь, поедем в горы?', ua: 'Хочеш, поїдемо в гори?' },
      ],
    },
    {
      kind: 'match',
      pairs: [
        { ro: 'hai', tr: { ru: 'давай', ua: 'давай' } },
        { ro: 'ceva', tr: { ru: 'что-нибудь', ua: 'щось' } },
        { ro: 'altă dată', tr: { ru: 'в другой раз', ua: 'іншим разом' } },
        { ro: 'cu plăcere', tr: { ru: 'с удовольствием', ua: 'із задоволенням' } },
        { ro: 'hai să mergem', tr: { ru: 'пойдём', ua: 'ходімо' } },
      ],
    },
    {
      kind: 'listen',
      ro: 'Hai să mâncăm ceva',
      tr: { ru: 'Давай что-нибудь поедим', ua: 'Давай щось поїмо' },
      wrong: ['Hai să bem ceva', 'Vreau să mănânc ceva', 'Hai să mâncăm acasă'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Давай выпьем кофе!', ua: 'Давай вип’ємо кави!' },
      words: ['Hai', 'să', 'bem', 'o', 'cafea'],
      extra: ['beau', 'un', 'ceai'],
      shown: 'Hai să bem o cafea!',
    },
    {
      kind: 'pickRo',
      q: { ru: 'Да, с удовольствием!', ua: 'Так, із задоволенням!' },
      correct: 'Da, cu plăcere!',
      wrong: ['Nu, mulțumesc.', 'Poate altă dată.', 'Da, altă dată!'],
    },
    {
      kind: 'tiles',
      q: { ru: 'Может, в другой раз, сегодня я не могу.', ua: 'Може, іншим разом, сьогодні я не можу.' },
      words: ['Poate', 'altă', 'dată', 'azi', 'nu', 'pot'],
      extra: ['vreau', 'mâine', 'poți'],
      shown: 'Poate altă dată, azi nu pot.',
    },
    {
      kind: 'type',
      q: { ru: 'Пойдём!', ua: 'Ходімо!' },
      answers: ['Hai să mergem', 'Haide să mergem', 'Hai'],
      shown: 'Hai să mergem!',
    },
    {
      kind: 'type',
      q: { ru: 'Давай что-нибудь поедим.', ua: 'Давай щось поїмо.' },
      answers: ['Hai să mâncăm ceva', 'Haide să mâncăm ceva'],
      shown: 'Hai să mâncăm ceva.',
    },
  ],
};
