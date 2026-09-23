import * as Speech from 'expo-speech';

let voice: string | undefined;
let looked = false;

/** Prefer an installed Romanian voice; without one the platform picks by `language`. */
async function romanianVoice(): Promise<string | undefined> {
  if (looked) return voice;
  looked = true;
  try {
    const voices = await Speech.getAvailableVoicesAsync();
    voice = voices.find((v) => /^ro/i.test(v.language))?.identifier;
  } catch {
    voice = undefined;
  }
  return voice;
}

export async function speak(text: string, slow = false): Promise<void> {
  const id = await romanianVoice();
  Speech.stop();
  Speech.speak(text.replace(/…/g, ''), { language: 'ro-RO', voice: id, rate: slow ? 0.55 : 0.9 });
}
