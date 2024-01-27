import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const MaterialIconsHeader = ({ onPressIcon, iconColor, iconName }) => {
  return (
    <Pressable
      onPress={onPressIcon}
      style={({ pressed }) => pressed && styles.inconPressed}
    >
      <MaterialIcons name={iconName} size={24} color={iconColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inconPressed: {
    opacity: 0.2,
  },
});
export default MaterialIconsHeader;
