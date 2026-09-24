import type { Lang } from '../content/types';

/**
 * Approximate Cyrillic reading of Romanian text, in the course's own convention:
 * ă → «э» (ua «е»), â/î → «ы» (ua «и»), ce/ci → «че/чи», che/chi → «ке/ки»,
 * ge/gi → «дже/джи», ea → «я», a final unstressed i softens the consonant («ани» → «ань»).
 * Stress is not marked. Hand-written transcriptions in the lessons take precedence.
 */
const VOWELS = 'aeiouăâî';
const isVowel = (ch: string | undefined) => !!ch && VOWELS.includes(ch);

const CONS: Record<string, string> = {
  b: 'б', d: 'д', f: 'ф', h: 'х', j: 'ж', k: 'к', l: 'л', m: 'м', n: 'н', p: 'п', r: 'р',
  s: 'с', ș: 'ш', ş: 'ш', t: 'т', ț: 'ц', ţ: 'ц', v: 'в', w: 'в', x: 'кс', z: 'з', q: 'к',
};

function word(w: string, lang: Lang): string {
  const ua = lang === 'ua';
  const I = ua ? 'і' : 'и';
  const Y = ua ? 'и' : 'ы';
  const E_SCHWA = ua ? 'е' : 'э';
  const JE = ua ? 'є' : 'е';
  const vowelCount = [...w].filter(isVowel).length;
  let out = '';
  for (let i = 0; i < w.length; i++) {
    const ch = w[i];
    const next = w[i + 1];
    const prev = w[i - 1];
    // c, g: hard before a, o, u, ă, â, î and consonants; soft (ч, дж) before e, i; ch/gh keep them hard.
    if (ch === 'c' || ch === 'g') {
      const soft = ch === 'c' ? 'ч' : 'дж';
      const hard = ch === 'c' ? 'к' : 'г';
      if (next === 'h' && (w[i + 2] === 'e' || w[i + 2] === 'i')) {
        out += hard;
        i += 1;
        continue;
      }
      if (next === 'e' || next === 'i') {
        out += soft;
        // cea, cia, ciu, geo…: the e / i only softens and is not heard.
        const after = w[i + 2];
        if (after && 'aou'.includes(after)) i += 1;
        else if (next === 'i' && i + 2 === w.length && vowelCount > 1) {
          out += 'ь';
          i += 1;
        }
        continue;
      }
      out += hard;
      continue;
    }
    if (ch === 'e') {
      if (next === 'a') {
        out += 'я';
        i += 1;
        continue;
      }
      out += i === 0 ? JE : 'е';
      continue;
    }
    if (ch === 'i') {
      const atStart = i === 0;
      const afterVowel = isVowel(prev);
      if (next === 'a' && (atStart || afterVowel)) {
        out += 'я';
        i += 1;
        continue;
      }
      if (next === 'e' && (atStart || afterVowel)) {
        // ieri → «ерь», trebuie → «требуе»: Cyrillic е / є already carry the й.
        out += JE;
        i += 1;
        continue;
      }
      if (next === 'e' && i + 2 < w.length && !isVowel(w[i + 2])) {
        // miercuri → «мьеркурь», pierdut → «пьердут»: one syllable inside the word.
        out += ua ? '’є' : 'ье';
        i += 1;
        continue;
      }
      if (next === 'u' && afterVowel) {
        out += 'ю';
        i += 1;
        continue;
      }
      if (next === 'i' && i + 2 === w.length) {
        out += `${I}й`;
        i += 1;
        continue;
      }
      if (next === 'a') {
        out += `${I}я`;
        i += 1;
        continue;
      }
      if (next === 'e') {
        out += ua ? 'іє' : 'ие';
        i += 1;
        continue;
      }
      if (afterVowel && !isVowel(next)) {
        out += 'й';
        continue;
      }
      if (i === w.length - 1 && !afterVowel && vowelCount > 1) {
        out += 'ь';
        continue;
      }
      out += I;
      continue;
    }
    if (ch === 'a') out += 'а';
    else if (ch === 'o') out += 'о';
    else if (ch === 'u') out += 'у';
    else if (ch === 'ă') out += E_SCHWA;
    else if (ch === 'â' || ch === 'î') out += Y;
    else if (ch === 'y') out += I;
    else out += CONS[ch] ?? ch;
  }
  return out;
}

/** Hyphenated clitics read as one word (n-am → «нам», văzut-o → «вэзуто»); compounds keep the hyphen. */
function joinClitics(w: string): string {
  return w.replace(/([a-zăâîșțşţ]+)-([a-zăâîșțşţ]+)/g, (m, left: string, right: string) =>
    left.length <= 2 || (right === 'o' && left.length > 4) ? left + right : m,
  );
}

export function transcribe(ro: string, lang: Lang): string {
  return joinClitics(ro.toLowerCase())
    .replace(/\s—\s/g, ' — ')
    .split(/[^a-zăâîșțşţ—-]+/)
    .filter(Boolean)
    .map((w) =>
      w
        .split('-')
        .map((part) => (part === '—' ? part : word(part, lang)))
        .join('-'),
    )
    .join(' ');
}
