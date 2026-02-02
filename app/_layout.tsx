import { Stack } from 'expo-router';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
    <Stack>
      <Stack.Screen 
        name="index"
        options={{ 
          title: 'Home',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="not-ok"
        options={{
          title: 'Not ok',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ok"
        options={{
          title: 'Ok',
          headerShown: false,
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="energy-check"
        options={{
          title: 'energy-check',
          headerShown: false,
          animation: 'fade_from_bottom',
        }}
      />
    </Stack>
  </GestureHandlerRootView>
  );
}
