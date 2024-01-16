import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Pictures = ({ navigation }) => {
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pictures</Text>
      <Button title="Portfolio" onPress={handlePress} />

      <Button onPress={() => navigation.navigate("Home")} title="Home" />
    </View>
  );
};

export default Pictures;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontFamily: "InriaSans_700Bold_Italic",
  },
});
