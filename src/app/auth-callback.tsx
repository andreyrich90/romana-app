import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { useEffect, useRef } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { supabase } from '../lib/supabase';
import { usePalette } from '../lib/theme';
import { paramsOf, useAuth } from '../state/auth';

/**
 * Where Google's round trip lands in a build (romana://auth-callback). Android delivers the
 * link to the router as well as to openAuthSessionAsync, so without this screen the app
 * shows "Unmatched Route" over a sign-in that already worked. Normally signInWithGoogle has
 * the code; if the browser session was dismissed instead, the code is exchanged here.
 */
export default function AuthCallback() {
  const c = usePalette();
  const { session } = useAuth();
  const url = Linking.useURL();
  const left = useRef(false);

  const leave = () => {
    if (left.current) return;
    left.current = true;
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

  useEffect(() => {
    if (session) leave();
  }, [session]);

  useEffect(() => {
    const retry = setTimeout(() => {
      if (left.current || !supabase || !url) return;
      const code = paramsOf(url).code;
      // A code signInWithGoogle already used fails here harmlessly.
      if (code) supabase.auth.exchangeCodeForSession(code).catch(() => {});
    }, 1500);
    const giveUp = setTimeout(leave, 6000);
    return () => {
      clearTimeout(retry);
      clearTimeout(giveUp);
    };
  }, [url]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: c.bg }}>
      <ActivityIndicator color={c.blue} />
    </View>
  );
}
