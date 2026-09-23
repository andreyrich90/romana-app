import { useColorScheme } from 'react-native';

/**
 * The accent is Voroneț blue — the pigment of the painted monasteries of Bukovina,
 * the one colour that is unmistakably Romanian without reaching for the flag.
 */
const light = {
  bg: '#EEF2FB',
  surface: '#FFFFFF',
  sunk: '#E3E9F7',
  ink: '#14204A',
  muted: '#5B6690',
  line: '#D3DBF0',
  blue: '#2446A8',
  blueEdge: '#162E78',
  blueSoft: '#DCE4FA',
  onBlue: '#FFFFFF',
  ochre: '#E09A12',
  ochreEdge: '#A86F05',
  ochreSoft: '#FCEFD2',
  good: '#1C8A4C',
  goodEdge: '#136638',
  goodBg: '#DCF3E4',
  bad: '#C9344A',
  badEdge: '#98202F',
  badBg: '#FBE2E5',
};

export type Palette = typeof light;

const dark: Palette = {
  bg: '#0B1230',
  surface: '#141D45',
  sunk: '#0F1739',
  ink: '#E7EBF8',
  muted: '#9BA6CE',
  line: '#28346B',
  blue: '#6D8BFF',
  blueEdge: '#3F5CD0',
  blueSoft: '#1E2B64',
  onBlue: '#0B1230',
  ochre: '#F2B53C',
  ochreEdge: '#B07F17',
  ochreSoft: '#3A2C10',
  good: '#4CD787',
  goodEdge: '#2A9A5A',
  goodBg: '#10321F',
  bad: '#FF7F90',
  badEdge: '#C94458',
  badBg: '#3B1520',
};

export function usePalette(): Palette {
  return useColorScheme() === 'dark' ? dark : light;
}
