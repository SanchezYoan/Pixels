import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { globalStyle } from "../constants/AppStyle";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const PressableItems = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.secondary : Colors.white },
        { alignItems: "center" },
      ]}
      // onPress={handleNavigate}
      onPress={() => navigation.navigate("Portfolio", item)}
      name={item.name}
      country={item.country}
      totalImg={item.photos.length}
    >
      <Text style={globalStyle.titleText}>{item.name}</Text>
      <Image source={{ uri: item.img }} style={globalStyle.profilImg} />
      <Text>{item.photos.length}</Text>
    </Pressable>
  );
};

export default PressableItems;
