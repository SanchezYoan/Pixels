import { View, Text, Button, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { globalStyle } from "../constants/AppStyle";
import Colors from "../constants/Colors";
import Profils from "../data/profils";

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
//   "route": {"key": "Home-yFDKUZKiesc5oJe9Npl_J", "name": "Home","params": undefined}}

const Home = ({ navigation }) => {
  const renderProfils = ({ item }) => {
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
  return (
    <View style={globalStyle.container}>
      <FlatList
        data={Profils}
        renderItem={renderProfils}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
