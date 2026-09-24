import { router } from 'expo-router';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, Card, Title } from '../components/ui';
import { usePalette } from '../lib/theme';
import { useAuth, type AuthError } from '../state/auth';
import { useProgress } from '../state/progress';

type Notice = { tone: 'info' | 'error'; text: string } | null;

export default function Account() {
  const c = usePalette();
  const insets = useSafeAreaInsets();
  const { t, sync } = useProgress();
  const auth = useAuth();

  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<Notice>(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const say = (error: AuthError) => setNotice({ tone: 'error', text: t.authErrors[error] });
  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    setNotice(null);
    try {
      await fn();
    } finally {
      setBusy(false);
    }
  };

  const submit = () =>
    run(async () => {
      if (mode === 'signIn') {
        const r = await auth.signIn(email, password);
        if (!r.ok) return say(r.error);
        setPassword('');
      } else {
        const r = await auth.signUp(email, password);
        if (!r.ok) return say(r.error);
        setPassword('');
        if (r.needsConfirm) {
          setMode('signIn');
          setNotice({ tone: 'info', text: t.confirmSent });
        }
      }
    });

  const forgot = () =>
    run(async () => {
      if (!email.trim()) return say('email');
      const r = await auth.resetPassword(email);
      setNotice(r.ok ? { tone: 'info', text: t.resetSent } : { tone: 'error', text: t.authErrors[r.error] });
    });

  const saveNewPassword = () =>
    run(async () => {
      const r = await auth.setNewPassword(password);
      if (!r.ok) return say(r.error);
      setPassword('');
      setNotice({ tone: 'info', text: t.passwordSaved });
    });

  const remove = () =>
    run(async () => {
      const r = await auth.deleteAccount();
      setConfirmDelete(false);
      if (!r.ok) say(r.error);
    });

  const input = [s.input, { color: c.ink, backgroundColor: c.surface, borderColor: c.line }];
  const user = auth.session?.user;

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: c.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={[s.body, { paddingTop: insets.top + 12, paddingBottom: insets.bottom + 32 }]}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
          hitSlop={10}
          accessibilityRole="button"
          style={s.back}
        >
          <Text style={[s.backText, { color: c.muted }]}>← {t.back}</Text>
        </Pressable>
        <Title>{t.account}</Title>

        {!auth.enabled ? (
          <Text style={[s.text, { color: c.muted }]}>{t.accountOff}</Text>
        ) : auth.recovering ? (
          <Card>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder={t.newPassword}
              placeholderTextColor={c.muted}
              secureTextEntry
              autoComplete="new-password"
              textContentType="newPassword"
              style={input}
            />
            <Button tone="primary" disabled={busy || password.length < 6} onPress={saveNewPassword}>
              {t.setPassword}
            </Button>
          </Card>
        ) : user ? (
          <>
            <Card>
              <Text style={[s.text, { color: c.muted }]}>{t.signedInAs}</Text>
              <Text style={[s.email, { color: c.ink }]}>{user.email}</Text>
              <View style={s.syncRow}>
                <View
                  style={[
                    s.dot,
                    { backgroundColor: sync === 'error' ? c.bad : sync === 'syncing' ? c.ochre : c.good },
                  ]}
                />
                <Text style={[s.syncText, { color: sync === 'error' ? c.bad : c.muted }]}>
                  {sync === 'error' ? t.syncError : sync === 'syncing' ? t.syncSyncing : t.syncSaved}
                </Text>
              </View>
            </Card>
            <Button onPress={() => run(auth.signOut)} disabled={busy}>
              {t.signOut}
            </Button>
            <Text style={[s.note, { color: c.muted }]}>{t.signOutNote}</Text>

            {confirmDelete ? (
              <Card style={{ borderColor: c.bad }}>
                <Text style={[s.text, { color: c.ink }]}>{t.deleteConfirm}</Text>
                <Button tone="bad" onPress={remove} disabled={busy}>
                  {t.deleteYes}
                </Button>
                <Button onPress={() => setConfirmDelete(false)}>{t.cancel}</Button>
              </Card>
            ) : (
              <Pressable onPress={() => setConfirmDelete(true)} hitSlop={8} style={s.linkWrap}>
                <Text style={[s.link, { color: c.bad }]}>{t.deleteAccount}</Text>
              </Pressable>
            )}
          </>
        ) : (
          <>
            <Text style={[s.text, { color: c.muted }]}>{t.accountWhy}</Text>
            <Card>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder={t.email}
                placeholderTextColor={c.muted}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                textContentType="emailAddress"
                style={input}
              />
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder={t.password}
                placeholderTextColor={c.muted}
                secureTextEntry
                autoComplete={mode === 'signUp' ? 'new-password' : 'current-password'}
                textContentType={mode === 'signUp' ? 'newPassword' : 'password'}
                onSubmitEditing={submit}
                style={input}
              />
              <Button tone="primary" disabled={busy || !email.trim() || !password} onPress={submit}>
                {mode === 'signIn' ? t.signIn : t.signUp}
              </Button>
            </Card>
            <Pressable
              onPress={() => {
                setMode(mode === 'signIn' ? 'signUp' : 'signIn');
                setNotice(null);
              }}
              hitSlop={8}
              style={s.linkWrap}
            >
              <Text style={[s.link, { color: c.blue }]}>{mode === 'signIn' ? t.toSignUp : t.toSignIn}</Text>
            </Pressable>
            {mode === 'signIn' && (
              <Pressable onPress={forgot} hitSlop={8} style={s.linkWrap} disabled={busy}>
                <Text style={[s.link, { color: c.muted }]}>{t.forgot}</Text>
              </Pressable>
            )}
          </>
        )}

        <Pressable onPress={() => router.push('/privacy')} hitSlop={8} style={s.linkWrap}>
          <Text style={[s.small, { color: c.muted }]}>{t.privacy}</Text>
        </Pressable>

        {notice && (
          <Text
            accessibilityLiveRegion="polite"
            style={[
              s.notice,
              notice.tone === 'error'
                ? { color: c.bad, backgroundColor: c.badBg }
                : { color: c.ink, backgroundColor: c.goodBg },
            ]}
          >
            {notice.text}
          </Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  body: { paddingHorizontal: 16, gap: 16, maxWidth: 560, width: '100%', alignSelf: 'center' },
  back: { alignSelf: 'flex-start', paddingVertical: 4 },
  backText: { fontSize: 15, fontWeight: '700' },
  text: { fontSize: 16, lineHeight: 23 },
  email: { fontSize: 18, fontWeight: '700' },
  input: { borderWidth: 2, borderRadius: 14, paddingHorizontal: 14, paddingVertical: 12, fontSize: 17 },
  syncRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  dot: { width: 10, height: 10, borderRadius: 5 },
  syncText: { fontSize: 14, flexShrink: 1 },
  note: { fontSize: 14, lineHeight: 20 },
  linkWrap: { alignSelf: 'center', paddingVertical: 4 },
  link: { fontSize: 15, fontWeight: '700' },
  small: { fontSize: 13, textDecorationLine: 'underline' },
  notice: { fontSize: 15, lineHeight: 21, padding: 12, borderRadius: 12, overflow: 'hidden' },
});
