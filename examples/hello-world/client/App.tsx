import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TestComponent } from "moomin-view";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Moomin - Hello World Boilerplate</Text>
      <TestComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
