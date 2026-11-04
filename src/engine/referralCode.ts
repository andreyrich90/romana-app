/** Partner codes: lower-case letters, digits, `-` and `_`, 2–32 long (the database checks the same). */
export const cleanCode = (raw: string | null | undefined) => {
  const c = (raw ?? '').trim().toLowerCase();
  return /^[a-z0-9_-]{2,32}$/.test(c) ? c : null;
};

/** `ref=anna` or `utm_content=anna` in the Google Play install referrer string. */
export function codeFromReferrer(referrer: string): string | null {
  for (const part of referrer.split('&')) {
    const [k, v = ''] = part.split('=');
    if (k === 'ref' || k === 'utm_content') {
      try {
        return cleanCode(decodeURIComponent(v));
      } catch {
        return cleanCode(v);
      }
    }
  }
  return null;
}
