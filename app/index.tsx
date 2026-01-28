import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function Index() {
  return (
    // <View style={styles.screenContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" >How are you today?</ThemedText>
      </ThemedView>
    // </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "royalblue",
    padding: 20
  }
});