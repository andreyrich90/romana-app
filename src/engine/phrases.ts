import { CARDS } from '../content/cards';
import { COURSE } from '../content/course';
import { GLOSSARY, type GlossEntry } from '../content/glossary';
import type { Bi, Lang } from '../content/types';
import { normalize } from './check';
import { transcribe } from './transcribe';

/** What the course itself says about a Romanian phrase. */
export type PhraseInfo = {
  /** Translation, when some exercise or word list gives one. */
  tr?: Bi;
  /** Hand-written reading from a grammar table, when there is one. */
  say?: Bi;
};

const SAY = /^(.*?)\s·\s«([^»]+)»\s*$/;

let index: Map<string, PhraseInfo> | null = null;

/** Every Romanian phrase in the course with its translation, built once on first use. */
function build(): Map<string, PhraseInfo> {
  const map = new Map<string, PhraseInfo>();
  const add = (ro: string, tr: Bi, say?: Bi) => {
    const k = normalize(ro);
    const had = map.get(k) ?? {};
    map.set(k, { tr: had.tr ?? tr, say: had.say ?? say });
  };
  for (const unit of COURSE)
    for (const meta of unit.lessons) {
      const lesson = meta.lesson;
      if (!lesson) continue;
      for (const w of lesson.words) add(w.ro, w.tr);
      for (const ex of lesson.exercises) {
        switch (ex.kind) {
          case 'intro':
          case 'listen':
            add(ex.ro, ex.tr);
            break;
          case 'pickNative':
            add(ex.q, ex.correct);
            break;
          case 'pickRo':
            add(ex.correct, ex.q);
            break;
          case 'tiles':
          case 'type':
            add(ex.shown, ex.q);
            break;
          case 'match':
            for (const p of ex.pairs) add(p.ro, p.tr);
            break;
          case 'tip':
            for (const r of ex.rows) {
              const ru = r.tr.ru.match(SAY);
              const ua = r.tr.ua.match(SAY);
              if (ru && ua) add(r.ro, { ru: ru[1], ua: ua[1] }, { ru: ru[2], ua: ua[2] });
              else add(r.ro, r.tr);
            }
            break;
        }
      }
    }
  // Cards come after the course, so a course translation wins where both have one.
  for (const card of CARDS) {
    add(card.ro.replace(/[.!?]$/, ''), card.tr);
    for (const w of [...card.examples, ...card.expressions]) add(w.ro, w.tr);
    if (card.quote) add(card.quote.ro, card.quote.tr);
  }
  return map;
}

export function phraseInfo(ro: string): PhraseInfo {
  index ??= build();
  return index.get(normalize(ro)) ?? {};
}

/** How to read the phrase: the lesson's own transcription if it has one, otherwise the rules. */
export function reading(ro: string, lang: Lang): string {
  return phraseInfo(ro).say?.[lang] ?? transcribe(ro, lang);
}

/** The words of a phrase as the learner sees them (punctuation apart), each once. */
export function wordsIn(ro: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const w of ro.split(/[^\p{L}\-’']+/u)) {
    const k = w.toLowerCase();
    if (!w || seen.has(k)) continue;
    seen.add(k);
    out.push(w);
  }
  return out;
}

export function gloss(word: string): GlossEntry | undefined {
  const k = word.toLowerCase();
  // Own entries only: «constructor» or «toString» must not find Object.prototype members.
  return Object.prototype.hasOwnProperty.call(GLOSSARY, k) ? GLOSSARY[k] : undefined;
}
