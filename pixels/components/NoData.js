import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";

const NoData = ({ children }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_960_720.png",
      }}
      style={styles.emptyMsgWrapper}
    >
      <Text style={styles.emptyMsgText}>{children}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  emptyMsgWrapper: {
    flex: 1,
    backgroundColor: Colors.lightBrown,
  },
  emptyMsgText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 23,
    color: Colors.secondary,
  },
});
export default NoData;
