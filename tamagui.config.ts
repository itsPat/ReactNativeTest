import { config } from '@tamagui/config';
import { createTamagui } from 'tamagui';
import { themes } from './constants/theme';

export const tamaguiConfig = createTamagui({
  ...config,
  themes,
});

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
