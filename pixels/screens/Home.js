import { View, FlatList, Button } from "react-native";
import React from "react";
import { globalStyle } from "../constants/AppStyle";
import Colors from "../constants/Colors";
import PressableItems from "../components/PressableItems";
import { DATA } from "../data/usersData";
import { useSelector } from "react-redux";
import NoData from "../components/NoData";

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
  const selectedCategories = useSelector(
    (state) => state.users.selectedCategories
  );

  const renderProfils = ({ item }) => {
    return (
      <PressableItems
        item={item}
        // handleNavigate={() => navigation.navigate("Portfolio", item)}
      />
    );
  };

  // const handleDrawer = () => {
  //   navigation.toggleDrawer();
  // };

  if (selectedCategories.length === 0) {
    // message d'erreur
    return <NoData>Pas d'utilisateur à afficher</NoData>;
  } else {
    return (
      <View style={globalStyle.container}>
        {/* <Button title="Drawer" onPress={handleDrawer} /> */}
        <FlatList
          data={selectedCategories}
          renderItem={renderProfils}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
};

export default Home;
