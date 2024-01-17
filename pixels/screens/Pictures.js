import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect } from "react";

const Pictures = ({ navigation }) => {
  const handlePress = () => {
    navigation.popToTop();
    // retourne à la page racine
    // navigation.pop();
    // retourne à la page précédente
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pictures</Text>
      <Button title="Home" onPress={handlePress} />
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
