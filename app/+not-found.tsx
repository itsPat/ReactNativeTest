import { Link, Stack } from 'expo-router';
import { Text, YStack } from 'tamagui';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <YStack flex={1} alignItems="center" justifyContent="center" padding="$5">
        <Text fontSize="$6" fontWeight="bold">
          This screen doesn't exist.
        </Text>
        <Link href="/" asChild>
          <Text
            fontSize="$4"
            color="$primary"
            marginTop="$4"
            paddingVertical="$4"
          >
            Go to home screen!
          </Text>
        </Link>
      </YStack>
    </>
  );
}
