import { useState } from 'react';
import { Linking, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

import { usePalette } from '../lib/theme';
import { useProgress } from '../state/progress';

export const PLAY_URL = 'https://play.google.com/store/apps/details?id=pro.seajobs.romana';
const HIDDEN_KEY = 'romana.getApp.hidden';

/** The site only: Android and desktop visitors are told the app is on Google Play. iPhones get nothing to install yet. */
function shouldShow(): boolean {
  if (Platform.OS !== 'web' || typeof navigator === 'undefined') return false;
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) return false;
  try {
    return localStorage.getItem(HIDDEN_KEY) !== '1';
  } catch {
    return true;
  }
}

export function GetTheApp() {
  const c = usePalette();
  const { t } = useProgress();
  const [shown, setShown] = useState(shouldShow);
  if (!shown) return null;
  const hide = () => {
    setShown(false);
    try {
      localStorage.setItem(HIDDEN_KEY, '1');
    } catch {}
  };
  return (
    <View style={[s.box, { backgroundColor: c.blueSoft, borderColor: c.blueEdge }]}>
      <Pressable accessibilityRole="link" onPress={() => Linking.openURL(PLAY_URL)} style={s.main}>
        <Text style={s.icon}>📲</Text>
        <View style={{ flex: 1, gap: 2 }}>
          <Text style={[s.title, { color: c.ink }]}>{t.getApp}</Text>
          <Text style={[s.sub, { color: c.muted }]}>{t.getAppSub}</Text>
        </View>
        <Text style={[s.chev, { color: c.blue }]}>›</Text>
      </Pressable>
      <Pressable accessibilityRole="button" onPress={hide} hitSlop={8}>
        <Text style={[s.hide, { color: c.muted }]}>{t.getAppHide}</Text>
      </Pressable>
    </View>
  );
}

const s = StyleSheet.create({
  box: { borderWidth: 2, borderBottomWidth: 4, borderRadius: 18, padding: 16, gap: 8 },
  main: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  icon: { fontSize: 30 },
  title: { fontSize: 17, fontWeight: '800' },
  sub: { fontSize: 14, lineHeight: 19 },
  chev: { fontSize: 26, fontWeight: '600' },
  hide: { fontSize: 13, fontWeight: '700', alignSelf: 'flex-end' },
});
