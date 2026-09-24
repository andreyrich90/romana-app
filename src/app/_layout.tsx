import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { PhraseProvider } from '../components/PhraseSheet';
import { usePalette } from '../lib/theme';
import { AuthProvider } from '../state/auth';
import { ProgressProvider } from '../state/progress';

export default function RootLayout() {
  const c = usePalette();
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <ProgressProvider>
          <PhraseProvider>
            <StatusBar style="auto" />
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.bg } }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="lesson/[id]" options={{ presentation: 'fullScreenModal', gestureEnabled: false }} />
              <Stack.Screen name="welcome" options={{ gestureEnabled: false }} />
              <Stack.Screen name="profile" />
              <Stack.Screen name="words" />
              <Stack.Screen name="account" />
              <Stack.Screen name="privacy" />
              <Stack.Screen name="delete-account" />
            </Stack>
          </PhraseProvider>
        </ProgressProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
