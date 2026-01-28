import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import {GestureREs}
// TODO: Find ways to delete or header 
// TODO: Find ways to hide nav
// TODO: Add 'not found' screen that navigates to the first screen

export default function RootLayout() {
  return (
  <GestureHandlerRootView>
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' , headerShown: false }}></Tabs.Screen>
      <Tabs.Screen name="not-ok" options={{ title: 'Not ok', headerShown: false }}></Tabs.Screen>
    </Tabs>
  </GestureHandlerRootView>
  );
}
