import * as Colors from '@tamagui/colors';
import { createThemes, defaultTemplates } from '@tamagui/theme-builder';

// Modern green-focused palette
const darkPalette = [
  'hsla(160, 25%, 8%, 1)', // Deep forest black
  'hsla(158, 24%, 12%, 1)', // Rich moss
  'hsla(156, 23%, 16%, 1)', // Dark evergreen
  'hsla(154, 22%, 20%, 1)', // Forest shadow
  'hsla(152, 21%, 24%, 1)', // Deep sage
  'hsla(150, 20%, 28%, 1)', // Forest green
  'hsla(148, 19%, 32%, 1)', // Muted pine
  'hsla(146, 18%, 36%, 1)', // Soft forest
  'hsla(144, 17%, 40%, 1)', // Light pine
  'hsla(142, 16%, 44%, 1)', // Pale sage
  'hsla(140, 15%, 90%, 1)', // Almost white
  'hsla(140, 15%, 98%, 1)', // Pure white
];

const lightPalette = [
  'hsla(140, 45%, 98%, 1)', // Fresh white
  'hsla(142, 42%, 92%, 1)', // Morning fog
  'hsla(144, 40%, 86%, 1)', // Pale mint
  'hsla(146, 38%, 80%, 1)', // Soft sage
  'hsla(148, 36%, 74%, 1)', // Light forest
  'hsla(150, 34%, 68%, 1)', // Gentle pine
  'hsla(152, 32%, 62%, 1)', // Medium sage
  'hsla(154, 30%, 56%, 1)', // Forest green
  'hsla(156, 28%, 50%, 1)', // Vibrant green
  'hsla(158, 26%, 44%, 1)', // Deep forest
  'hsla(160, 25%, 12%, 1)', // Near black
  'hsla(160, 25%, 8%, 1)', // Pure black
];

const lightShadows = {
  shadow1: 'rgba(0, 77, 51, 0.05)',
  shadow2: 'rgba(0, 77, 51, 0.08)',
  shadow3: 'rgba(0, 77, 51, 0.12)',
  shadow4: 'rgba(0, 77, 51, 0.16)',
  shadow5: 'rgba(0, 77, 51, 0.20)',
  shadow6: 'rgba(0, 77, 51, 0.24)',
};

const darkShadows = {
  shadow1: 'rgba(0, 26, 17, 0.20)',
  shadow2: 'rgba(0, 26, 17, 0.30)',
  shadow3: 'rgba(0, 26, 17, 0.40)',
  shadow4: 'rgba(0, 26, 17, 0.50)',
  shadow5: 'rgba(0, 26, 17, 0.60)',
  shadow6: 'rgba(0, 26, 17, 0.70)',
};

// Accent colors using a complementary color scheme
const builtThemes = createThemes({
  templates: defaultTemplates,

  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: [
        'hsla(150, 60%, 35%, 1)', // Rich forest
        'hsla(150, 60%, 38%, 1)',
        'hsla(150, 60%, 41%, 1)',
        'hsla(150, 60%, 44%, 1)',
        'hsla(150, 60%, 47%, 1)',
        'hsla(150, 60%, 50%, 1)', // Vibrant green
        'hsla(150, 60%, 53%, 1)',
        'hsla(150, 60%, 56%, 1)',
        'hsla(150, 60%, 59%, 1)',
        'hsla(150, 60%, 62%, 1)', // Light forest
        'hsla(150, 15%, 90%, 1)',
        'hsla(150, 15%, 95%, 1)',
      ],
      light: [
        'hsla(150, 65%, 45%, 1)',
        'hsla(150, 65%, 48%, 1)',
        'hsla(150, 65%, 51%, 1)',
        'hsla(150, 65%, 54%, 1)',
        'hsla(150, 65%, 57%, 1)',
        'hsla(150, 65%, 60%, 1)',
        'hsla(150, 65%, 63%, 1)',
        'hsla(150, 65%, 66%, 1)',
        'hsla(150, 65%, 69%, 1)',
        'hsla(150, 65%, 72%, 1)',
        'hsla(150, 15%, 95%, 1)',
        'hsla(150, 15%, 98%, 1)',
      ],
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: [
          'hsla(45, 100%, 35%, 1)',
          'hsla(45, 100%, 38%, 1)',
          'hsla(45, 100%, 41%, 1)',
          'hsla(45, 100%, 44%, 1)',
          'hsla(45, 100%, 47%, 1)',
          'hsla(45, 100%, 50%, 1)',
          'hsla(45, 100%, 53%, 1)',
          'hsla(45, 100%, 56%, 1)',
          'hsla(45, 100%, 59%, 1)',
          'hsla(45, 100%, 62%, 1)',
          'hsla(45, 15%, 90%, 1)',
          'hsla(45, 15%, 95%, 1)',
        ],
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: [
          'hsla(0, 90%, 35%, 1)',
          'hsla(0, 90%, 38%, 1)',
          'hsla(0, 90%, 41%, 1)',
          'hsla(0, 90%, 44%, 1)',
          'hsla(0, 90%, 47%, 1)',
          'hsla(0, 90%, 50%, 1)',
          'hsla(0, 90%, 53%, 1)',
          'hsla(0, 90%, 56%, 1)',
          'hsla(0, 90%, 59%, 1)',
          'hsla(0, 90%, 62%, 1)',
          'hsla(0, 15%, 90%, 1)',
          'hsla(0, 15%, 95%, 1)',
        ],
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: [
          'hsla(120, 80%, 35%, 1)',
          'hsla(120, 80%, 38%, 1)',
          'hsla(120, 80%, 41%, 1)',
          'hsla(120, 80%, 44%, 1)',
          'hsla(120, 80%, 47%, 1)',
          'hsla(120, 80%, 50%, 1)',
          'hsla(120, 80%, 53%, 1)',
          'hsla(120, 80%, 56%, 1)',
          'hsla(120, 80%, 59%, 1)',
          'hsla(120, 80%, 62%, 1)',
          'hsla(120, 15%, 90%, 1)',
          'hsla(120, 15%, 95%, 1)',
        ],
        light: Object.values(Colors.green),
      },
    },
  },
});

export type Themes = typeof builtThemes;

export const themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' &&
  process.env.NODE_ENV === 'production'
    ? ({} as any)
    : (builtThemes as any);
