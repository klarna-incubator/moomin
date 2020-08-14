import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TestComponent, deserialize } from "moomin-view";

const testSerializedPage = {
  type: "View" as const,
  props: {
    children: {
      type: "Text" as const,
      props: {
        children: "Moomin - Hello World Boilerplate",
      },
    },
  },
};

const testSerializedPage2 = {
  type: "View" as const,
  props: {
    children: [
      {
        type: "Text" as const,
        props: {
          children: "Test 2",
        },
      },
      {
        type: "Text" as const,
        props: {
          children: "Test 2",
        },
      },
    ],
  },
};

export default function App() {
  console.log(deserialize(testSerializedPage));
  return (
    <View style={styles.container}>
      <TestComponent />
      {deserialize(testSerializedPage2)}
      <View>{deserialize(testSerializedPage)}</View>
      <Text>{deserialize("foo bar")}</Text>
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
