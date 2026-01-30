import { StyleSheet } from 'react-native';

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function okScreen() {
  const titleText = "I'm OK :)";

  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">{titleText}</ThemedText>
    </ThemedView>
)};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  }
});