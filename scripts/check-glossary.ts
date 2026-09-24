/**
 * Lists word forms a learner can tap that have no glossary entry.
 * Run after adding lessons: npx tsx scripts/check-glossary.ts
 */
import { COURSE } from '../src/content/course';
import { GLOSSARY } from '../src/content/glossary';
import type { Exercise } from '../src/content/types';
import { wordsIn } from '../src/engine/phrases';

function tappable(ex: Exercise): string[] {
  switch (ex.kind) {
    case 'intro':
      return [ex.ro];
    case 'tip':
      return ex.rows.map((r) => r.ro);
    case 'pickNative':
      return [ex.q];
    case 'pickRo':
      return [ex.correct];
    case 'listen':
      return [ex.ro];
    case 'tiles':
    case 'type':
      return [ex.shown];
    case 'match':
      return [];
  }
}

const missing = new Map<string, string>();
for (const unit of COURSE)
  for (const meta of unit.lessons)
    for (const ex of meta.lesson?.exercises ?? [])
      for (const phrase of tappable(ex))
        for (const w of wordsIn(phrase)) {
          const k = w.toLowerCase();
          if (!Object.prototype.hasOwnProperty.call(GLOSSARY, k) && !/^\d+$/.test(k) && !missing.has(k)) missing.set(k, `${meta.id}: ${phrase}`);
        }

if (missing.size) {
  console.log(`${missing.size} word forms without a glossary entry:`);
  for (const [w, where] of missing) console.log(`  ${w}  (${where})`);
  process.exit(1);
}
console.log('glossary: every tappable word has an entry');
