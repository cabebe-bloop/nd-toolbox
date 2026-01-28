import { Stack } from "expo-router";
// import {GestureREs}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }}></Stack.Screen>
  </Stack>
  );
}
