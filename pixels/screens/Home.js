import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

// {"navigation": {
//   "addListener": [Function addListener],
//   "canGoBack": [Function canGoBack],
//   "dispatch": [Function dispatch],
//   "getId": [Function getId],
//   "getParent": [Function getParent],
//   "getState": [Function anonymous],
// "goBack": [Function anonymous],
// "isFocused": [Function isFocused],
// "navigate": [Function anonymous],
// "pop": [Function anonymous],
// "popToTop": [Function anonymous],
// "push": [Function anonymous],
// "removeListener": [Function removeListener],
// "replace": [Function anonymous],
// "reset": [Function anonymous],
// "setOptions": [Function setOptions],
//  "setParams": [Function anonymous]},
//   "route": {"key": "Home-yFDKUZKiesc5oJe9Npl_J",
//    "name": "Home",
//     "params": undefined}}

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Portfolio");
    // navigation.push("Portfolio");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button onPress={handlePress} title="Portfolio" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontFamily: "InriaSans_700Bold_Italic",
  },
});
