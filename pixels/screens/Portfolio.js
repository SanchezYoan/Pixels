import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Portfolio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
      <Button
        onPress={() => navigation.navigate("Pictures")}
        title="Pictures"
      />
    </View>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "InriaSans_700Bold_Italic",
    fontSize: 25,
  },
});
