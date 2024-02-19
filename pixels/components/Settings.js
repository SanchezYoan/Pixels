import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState, useCallback } from "react";
import globalStyle from "../constants/AppStyle";
import Colors from "../constants/Colors";
import { CustomSwitch } from "./CustomSwitch";
import { setCategorySettings } from "../redux/actions/actionSettings";
import { useDispatch } from "react-redux";

const Settings = ({ closeModal }) => {
  const [isAnimals, setIsAnimals] = useState(true);
  const [isTravels, setIsTravels] = useState(true);
  const [isCars, setIsCars] = useState(true);
  const dispatch = useDispatch();

  const saveSettings = useCallback(() => {
    const savedSettings = {
      animals: isAnimals,
      travel: isTravels,
      cars: isCars,
    };

    dispatch(setCategorySettings(savedSettings));
    closeModal();
  }, [isAnimals, isTravels, isCars]);

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
      {isAnimals === false && isTravels === false && isCars === false ? (
        <Text style={{ ...styles.settingsText, color: Colors.clicked }}>
          Veuillez choisir au moins une catégorie
        </Text>
      ) : (
        <Button title="Valider les paramètres" onPress={saveSettings}></Button>
      )}
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
