import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
  },
  text: {},
});
