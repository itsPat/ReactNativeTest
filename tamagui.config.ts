import { config } from '@tamagui/config';
import { createTamagui } from 'tamagui';

const tamaguiConfig = createTamagui({
  ...config,
  themes: {
    ...config.themes,
    light: {
      ...config.themes.light,
      background: '#ffffff',
      color: '#000000',
      primary: '#007aff',
    },
    dark: {
      ...config.themes.dark,
      background: '#000000',
      color: '#ffffff',
      primary: '#007aff',
    },
  },
  tokens: {
    ...config.tokens,
    color: {
      ...config.tokens.color,
      primary: '#007aff',
      secondary: '#ff9500',
    },
  },
  defaultTheme: 'dark',
});

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
