import { StyleSheet, Switch, Text, View } from "react-native";
import React from "react";

export const CustomSwitch = (props) => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.settingsLabel}>{props.label}</Text>
      <Switch value={props.state} onValueChange={props.handleSwitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 14,
  },
  //   settingsLabel: {
  //     margin: 10,
  //     padding: 9,
  //   },
});
