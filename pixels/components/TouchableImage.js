import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Colors from "../constants/Colors";

const TouchableImage = ({ imgUrl, onSelectPhoto, title }) => {
  return (
    <View style={styles.photoContainer}>
      <TouchableOpacity onPress={onSelectPhoto}>
        <ImageBackground source={{ uri: imgUrl }} style={styles.bgPhoto}>
          <View style={styles.photoTitle}>
            <Text style={styles.photoTitleText}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    width: "100%",
    height: 350,
    marginBottom: 20,
  },
  bgPhoto: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  photoTitle: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 15,
  },
  photoTitleText: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 19,
    color: Colors.white,
  },
});
export default TouchableImage;
