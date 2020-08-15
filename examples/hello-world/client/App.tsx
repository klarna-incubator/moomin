import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RemoteView } from "moomin-view";

const Header = ({ color, children }) => (
  <Text style={{ color, fontSize: 22 }}>{children}</Text>
)

export default function App() {
  return (
    <View style={styles.container}>
      <RemoteView key="page1" src="http://localhost:3000/views/page1" />
      <Text>----------</Text>
      <RemoteView key="page2" src="http://localhost:3000/views/page2" components={{ Header }} />
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
