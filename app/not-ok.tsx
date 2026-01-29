import { StyleSheet } from 'react-native';

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function notOkScreen() {
    return (
        <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Not OK</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      backgroundColor: 'darkorange',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });