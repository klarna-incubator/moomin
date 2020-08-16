import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RemoteView } from "moomin-view";

const remote = "https://moomin-demo.herokuapp.com";

const Header = ({ color, children }) => (
  <Text style={{ color, fontSize: 106 }}>{children}</Text>
);

const SubTitle = ({ color, children }) => (
  <Text style={{ color, fontSize: 28, marginTop: 16, marginBottom: 12 }}>
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
    paddingVertical: "4rem",
    paddingHorizontal: "8rem",
  },
});
