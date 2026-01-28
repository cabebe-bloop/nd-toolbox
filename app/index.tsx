import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function Index() {
  const tapped = useSharedValue<boolean>(false);

  const singleTap = Gesture.Tap()
    .onEnd(() => {
      tapped.value = tapped.value === false ? true : false;
      console.log('Now tapped is ' + tapped.value);
    });

  const viewStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: tapped.value ? 'royalblue' : 'tomato'
      
    };
  });
  
  return (
    <GestureDetector gesture={singleTap}>
      <ThemedView style={[styles.titleContainer, viewStyle]}>
        <ThemedText type="title" >How are you feeling today?</ThemedText>
      </ThemedView>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});