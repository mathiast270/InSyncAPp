import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="play_song" options={{ title: 'Play_Song' }} />
    </Stack>
  );
}
