import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import globalStyle from "../constants/AppStyle";
import Colors from "../constants/Colors";
import { CustomSwitch } from "./CustomSwitch";

const Settings = () => {
  const [isAnimals, setIsAnimals] = useState(true);
  const [isTravels, setIsTravels] = useState(true);
  const [isCars, setIsCars] = useState(true);

  return (
    <View stylee={globalStyle.container}>
      <Text style={styles.settingsTitle}>Réglages</Text>
      <Text style={styles.settingsText}>
        Utilisez les paramètres ci-dessous pour gérer les catégories à afficher
      </Text>
      <View style={styles.separator}></View>
      <CustomSwitch
        label="Animaux"
        state={isAnimals}
        handleSwitch={(newVal) => setIsAnimals(newVal)}
      />
      <CustomSwitch
        label="Voyages"
        state={isTravels}
        handleSwitch={(newVal) => setIsTravels(newVal)}
      />
      <CustomSwitch
        label="Voitures"
        state={isCars}
        handleSwitch={(newVal) => setIsCars(newVal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsTitle: {
    fontSize: 20,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
    textAlign: "center",
  },
  settingsText: {
    fontFamily: "InriaSans_300Light",
    fontSize: 18,
    padding: 9,
    textAlign: "center",
  },
  separator: {
    borderWidth: 0.5,
    borderColor: Colors.lightGrey,
    marginVertical: 25,
  },
});
export default Settings;
