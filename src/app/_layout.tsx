import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { usePalette } from '../lib/theme';
import { ProgressProvider } from '../state/progress';

export default function RootLayout() {
  const c = usePalette();
  return (
    <SafeAreaProvider>
      <ProgressProvider>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: c.bg } }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="lesson/[id]" options={{ presentation: 'fullScreenModal', gestureEnabled: false }} />
        </Stack>
      </ProgressProvider>
    </SafeAreaProvider>
  );
}
