import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

import { speak } from '../lib/speech';
import { usePalette, type Palette } from '../lib/theme';

type Tone = 'plain' | 'primary' | 'good' | 'bad' | 'selected' | 'right' | 'wrong';

function toneColors(c: Palette, tone: Tone) {
  switch (tone) {
    case 'primary':
      return { bg: c.blue, edge: c.blueEdge, fg: c.onBlue };
    case 'good':
      return { bg: c.good, edge: c.goodEdge, fg: c.onBlue };
    case 'bad':
      return { bg: c.bad, edge: c.badEdge, fg: c.onBlue };
    case 'selected':
      return { bg: c.blueSoft, edge: c.blue, fg: c.ink };
    case 'right':
      return { bg: c.goodBg, edge: c.good, fg: c.ink };
    case 'wrong':
      return { bg: c.badBg, edge: c.bad, fg: c.ink };
    default:
      return { bg: c.surface, edge: c.line, fg: c.ink };
  }
}

/** The chunky, pressable button: a thick bottom edge that collapses when pressed. */
export function Button({
  children,
  onPress,
  tone = 'plain',
  disabled,
  style,
  textStyle,
  accessibilityLabel,
}: {
  children: ReactNode;
  onPress?: () => void;
  tone?: Tone;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  accessibilityLabel?: string;
}) {
  const c = usePalette();
  const k = disabled && (tone === 'primary' || tone === 'good' || tone === 'bad')
    ? { bg: c.sunk, edge: c.line, fg: c.muted }
    : toneColors(c, tone);
  const primary = tone === 'primary' || tone === 'good' || tone === 'bad';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      onPress={() => {
        Haptics.selectionAsync().catch(() => {});
        onPress?.();
      }}
      style={({ pressed }) => [
        s.btn,
        { backgroundColor: k.bg, borderColor: k.edge },
        pressed && !disabled && s.pressed,
        style,
      ]}
    >
      {typeof children === 'string' ? (
        <Text style={[s.btnText, primary && s.btnTextMain, { color: k.fg }, textStyle]}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

export function SpeakButton({ text, size = 44, slow }: { text: string; size?: number; slow?: boolean }) {
  const c = usePalette();
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Послушать: ${text}`}
      onPress={() => speak(text, slow)}
      style={({ pressed }) => [
        s.speak,
        {
          width: size,
          height: size,
          borderRadius: size * 0.27,
          backgroundColor: slow ? c.blueSoft : c.blue,
          borderColor: slow ? c.line : c.blueEdge,
        },
        pressed && s.pressed,
      ]}
    >
      <Text style={{ fontSize: size * 0.42, color: slow ? c.blue : c.onBlue }}>{slow ? '🐢' : '🔊'}</Text>
    </Pressable>
  );
}

export function Label({ children, color }: { children: ReactNode; color?: string }) {
  const c = usePalette();
  return <Text style={[s.label, { color: color ?? c.ochre }]}>{children}</Text>;
}

export function Title({ children, style }: { children: ReactNode; style?: StyleProp<TextStyle> }) {
  const c = usePalette();
  return <Text style={[s.title, { color: c.ink }, style]}>{children}</Text>;
}

/** Renders `**bold**` spans, the only markup lesson copy uses. */
export function RichText({ children, style }: { children: string; style?: StyleProp<TextStyle> }) {
  const c = usePalette();
  const parts = children.split(/\*\*(.+?)\*\*/g);
  return (
    <Text style={[s.body, { color: c.ink }, style]}>
      {parts.map((p, i) =>
        i % 2 ? (
          <Text key={i} style={{ fontWeight: '700', color: c.blue }}>
            {p}
          </Text>
        ) : (
          p
        ),
      )}
    </Text>
  );
}

export function Card({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  const c = usePalette();
  return <View style={[s.card, { backgroundColor: c.surface, borderColor: c.line }, style]}>{children}</View>;
}

const s = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderBottomWidth: 5,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { transform: [{ translateY: 3 }], borderBottomWidth: 2, marginBottom: 3 },
  btnText: { fontSize: 18, fontWeight: '500' },
  btnTextMain: { fontSize: 15, fontWeight: '700', letterSpacing: 0.9, textTransform: 'uppercase' },
  speak: { borderWidth: 2, borderBottomWidth: 4, alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 13, fontWeight: '700', letterSpacing: 1, textTransform: 'uppercase' },
  title: { fontSize: 22, lineHeight: 28, fontWeight: '800' },
  body: { fontSize: 16, lineHeight: 23 },
  card: { borderWidth: 2, borderRadius: 20, padding: 20, gap: 12 },
});
