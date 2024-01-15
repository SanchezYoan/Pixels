import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Pictures = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pictures</Text>
    </View>
  );
};

export default Pictures;

const styles = StyleSheet({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
  },
  text: {},
});
