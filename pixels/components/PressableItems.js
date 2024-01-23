import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { globalStyle } from "../constants/AppStyle";
import Colors from "../constants/Colors";

const PressableItems = ({ item, navigation }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.secondary : Colors.white },
        { alignItems: "center" },
      ]}
      onPress={() => navigation.navigate("Portfolio", item)}
      name={item.name}
      country={item.country}
      totalImg={item.totalImg}
    >
      <Text style={globalStyle.titleText}>{item.name}</Text>
      <Image source={{ uri: item.img }} style={globalStyle.profilImg} />
    </Pressable>
  );
};

export default PressableItems;
