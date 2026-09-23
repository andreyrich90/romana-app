/** A string in both interface languages: Russian and Ukrainian. */
export type Bi = { ru: string; ua: string };

export type Lang = keyof Bi;

/** A Romanian word or phrase with its translation. */
export type Word = { ro: string; tr: Bi };

export type Exercise =
  /** Introduces a new word: shown, spoken, explained. Not graded. */
  | { kind: 'intro'; ro: string; tr: Bi; note: Bi }
  /** A grammar card. Body paragraphs may use **bold** for emphasis. Not graded. */
  | { kind: 'tip'; title: string; body: { ru: string[]; ua: string[] }; rows: Word[] }
  /** Romanian prompt, pick the translation. */
  | { kind: 'pickNative'; q: string; correct: Bi; wrong: Bi[] }
  /** Native prompt, pick the Romanian. */
  | { kind: 'pickRo'; q: Bi; correct: string; wrong: string[] }
  /** Hear a Romanian phrase, pick what was said. */
  | { kind: 'listen'; ro: string; tr: Bi; wrong: string[] }
  /**
   * Build the Romanian sentence from word tiles. `words` is the answer in order;
   * `also` lists other sentences the same tiles can correctly make (e.g. without the pronoun).
   */
  | { kind: 'tiles'; q: Bi; words: string[]; extra: string[]; shown: string; also?: string[] }
  /** Match Romanian words with their translations. */
  | { kind: 'match'; pairs: Word[] }
  /** Type the Romanian translation. Any of `answers` is accepted. */
  | { kind: 'type'; q: Bi; answers: string[]; shown: string };

export type Lesson = {
  id: string;
  title: Bi;
  /** What the lesson teaches, shown on the start card and the results screen. */
  words: Word[];
  exercises: Exercise[];
};

export type LessonMeta = {
  id: string;
  title: Bi;
  /** Absent while the lesson is only planned in docs/curriculum-a1.md. */
  lesson?: Lesson;
};

export type Unit = {
  id: string;
  level: 'A1' | 'A2' | 'B1';
  title: Bi;
  /** The unit's name in Romanian, shown as its subtitle. */
  ro: string;
  lessons: LessonMeta[];
};
