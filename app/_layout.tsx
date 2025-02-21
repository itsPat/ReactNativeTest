import { useColorScheme } from '@/hooks/useColorScheme';
import tamaguiConfig from '@/tamagui.config';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { TamaguiProvider, Theme } from 'tamagui';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    InterThin: require('@tamagui/font-inter/otf/Inter-Thin.otf'),
    InterThinItalic: require('@tamagui/font-inter/otf/Inter-ThinItalic.otf'),
    InterExtraLight: require('@tamagui/font-inter/otf/Inter-ExtraLight.otf'),
    InterExtraLightItalic: require('@tamagui/font-inter/otf/Inter-ExtraLightItalic.otf'),
    InterLight: require('@tamagui/font-inter/otf/Inter-Light.otf'),
    InterLightItalic: require('@tamagui/font-inter/otf/Inter-LightItalic.otf'),
    InterRegular: require('@tamagui/font-inter/otf/Inter-Regular.otf'),
    InterItalic: require('@tamagui/font-inter/otf/Inter-Italic.otf'),
    InterMedium: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterMediumItalic: require('@tamagui/font-inter/otf/Inter-MediumItalic.otf'),
    InterSemiBold: require('@tamagui/font-inter/otf/Inter-SemiBold.otf'),
    InterSemiBoldItalic: require('@tamagui/font-inter/otf/Inter-SemiBoldItalic.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    InterBoldItalic: require('@tamagui/font-inter/otf/Inter-BoldItalic.otf'),
    InterExtraBold: require('@tamagui/font-inter/otf/Inter-ExtraBold.otf'),
    InterExtraBoldItalic: require('@tamagui/font-inter/otf/Inter-ExtraBoldItalic.otf'),
    InterBlack: require('@tamagui/font-inter/otf/Inter-Black.otf'),
    InterBlackItalic: require('@tamagui/font-inter/otf/Inter-BlackItalic.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={colorScheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
        <StatusBar
          style={colorScheme === 'dark' ? 'dark' : 'light'}
          backgroundColor={
            colorScheme === 'dark' ? '$backgroundDark' : '$backgroundLight'
          }
        />
      </Theme>
    </TamaguiProvider>
  );
}
