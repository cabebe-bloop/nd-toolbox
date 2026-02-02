import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from 'react';

export default function notOkScreen() {
const titleText = "I'm not OK";

  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText 
        style={styles.titleText}
        type="title">{titleText}
      </ThemedText>
      <View style={styles.fillerView}/>
      {/* <ThemedText type="subtitle">Swipe Up</ThemedText> */}
      <Link
        href={"/energy-check"}
        // style={styles.button}
      >button placeholder</Link>
    </ThemedView>
)};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: 'darkorange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
  },
  fillerView: {
    height: '20%'
  }
});