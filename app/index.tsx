import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default function Index() {
  const tapped = useSharedValue<boolean>(false);

  const singleTap = Gesture.Tap()
    .onEnd(() => {
      tapped.value = tapped.value === false ? true : false;
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
        <View style={styles.fillerView}/>
        <Link href={"/ok"} style={styles.button}>I am Ok</Link>
        <Link href={"/not-ok"} style={styles.button}>Not Ok</Link>
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
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 50,
    padding: 12,
    borderColor: 'white', // not showing up
    textAlign: 'center'
  },
  fillerView: {
    height: '20%'
  }
});