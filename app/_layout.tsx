import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import {GestureREs}

export default function RootLayout() {
  return (
  <GestureHandlerRootView>
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }}></Stack.Screen>
    </Stack>
  </GestureHandlerRootView>
  );
}
