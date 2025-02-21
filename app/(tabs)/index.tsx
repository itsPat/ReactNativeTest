import * as Haptics from 'expo-haptics';
import { useCallback, useState } from 'react';
import { Button, Text, YStack } from 'tamagui';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleTap = useCallback(() => {
    setCount((c) => c + 1);
    if (process.env.EXPO_OS === 'ios') {
      // Add a soft haptic feedback when pressing down on the tabs.
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  }, []);

  return (
    <YStack f={1} ai="center" jc="center" bg="$background">
      <Text fontSize={20} color="$color">
        Welcome to Tamagui + Expo Router!
      </Text>
      <Button onPress={handleTap} mt="$4">
        Click me {count.toString()}
      </Button>
    </YStack>
  );
}
