import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Linking, Platform, StyleSheet, Text, View } from 'react-native';

import { Button } from '../../components/ui';
import { cleanCode, playLinkFor, rememberCode, trackRef } from '../../lib/referral';
import { usePalette } from '../../lib/theme';
import { useProgress } from '../../state/progress';

const isAndroidBrowser = () =>
  Platform.OS === 'web' && typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * A partner's link. The click is recorded and the code kept, then an Android visitor goes
 * straight to Google Play with the code in `referrer`; anyone else can get the app or
 * learn on the site, and a sign-in on the site still counts for the partner.
 */
export default function PartnerLink() {
  const { code: raw } = useLocalSearchParams<{ code: string }>();
  const code = cleanCode(raw);
  const c = usePalette();
  const { t } = useProgress();
  const [leaving, setLeaving] = useState(isAndroidBrowser());

  useEffect(() => {
    if (!code) return;
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      if (isAndroidBrowser()) window.location.replace(playLinkFor(code));
    };
    rememberCode(code);
    // Leave once the click is recorded, or after a second whatever happens.
    trackRef(code, 'click').finally(go);
    const timer = setTimeout(go, 1000);
    return () => clearTimeout(timer);
  }, [code]);

  if (!code || Platform.OS !== 'web') return <Redirect href="/" />;

  return (
    <View style={[s.wrap, { backgroundColor: c.bg }]}>
      <Text style={s.flag}>🇷🇴</Text>
      <Text style={[s.title, { color: c.ink }]}>Română</Text>
      <Text style={[s.sub, { color: c.muted }]}>{t.refSub}</Text>
      {leaving ? (
        <Text style={[s.sub, { color: c.muted }]}>{t.refOpening}</Text>
      ) : null}
      <View style={s.buttons}>
        <Button tone="primary" onPress={() => Linking.openURL(playLinkFor(code))}>
          {t.refGetApp}
        </Button>
        <Button
          onPress={() => {
            setLeaving(false);
            router.replace('/');
          }}
        >
          {t.refOnSite}
        </Button>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 12 },
  flag: { fontSize: 56 },
  title: { fontSize: 32, fontWeight: '800' },
  sub: { fontSize: 16, textAlign: 'center', maxWidth: 420, lineHeight: 22 },
  buttons: { alignSelf: 'stretch', maxWidth: 420, width: '100%', gap: 10, marginTop: 12 },
});
