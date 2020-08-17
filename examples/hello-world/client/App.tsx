import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RemoteView } from "moomin-view";

const remote = "https://moomin-demo.herokuapp.com";

const Header = ({ color, children }) => (
  <Text style={{ color, fontSize: 48 }}>{children}</Text>
);

const SubTitle = ({ color, children }) => (
  <Text style={{ color, fontSize: 12, marginTop: 8, marginBottom: 12 }}>
    {children}
  </Text>
);

export default function App() {
  return (
    <View style={styles.container}>
      <RemoteView
        key="page2"
        src={`${remote}/views/page2`}
        components={{ Header, SubTitle }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingVertical: 40,
    paddingHorizontal: 80,
  },
});
