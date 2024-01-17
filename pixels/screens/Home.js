import { View, Text, Button, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { globalStyle } from "../constants/AppStyle";
import Colors from "../constants/Colors";
// import { Profils } from "../data/profils";

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
  const Profils = [
    {
      id: "1",
      name: "Emma",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Allemagne",
      totalImg: 3,
      img: "https://cdn.pixabay.com/photo/2023/07/22/04/15/motorbike-8142649_960_720.jpg",
    },
    {
      id: "2",
      name: "Marcel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "France",
      totalImg: 5,
      img: "https://cdn.pixabay.com/photo/2023/10/21/06/34/european-shorthair-8330819_960_720.jpg",
    },
    {
      id: "3",
      name: "Diana",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Espagne",
      totalImg: 4,
      img: "https://cdn.pixabay.com/photo/2024/01/07/16/27/chinese-reed-8493547_960_720.jpg",
    },
    {
      id: "4",
      name: "Diego",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae eum nostrum pariatur exercitationem earum natus, dolor placeat! Animi quaerat ducimus fuga sequi a culpa sit illo iste alias aperiam",
      country: "Italie",
      totalImg: 5,
      img: "https://cdn.pixabay.com/photo/2017/03/24/18/59/face-2171923_960_720.jpg",
    },
  ];

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
