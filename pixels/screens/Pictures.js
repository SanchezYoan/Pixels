import { View, Button, Image } from "react-native";
import { useLayoutEffect } from "react";
import React from "react";
import Colors from "../constants/Colors";
import globalStyle from "../constants/AppStyle";

const Logo = () => {
  return (
    <Image
      source={require("../assets/img/camera.png")}
      style={{ width: 30, height: 30 }}
    />
  );
};

const Pictures = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Photo",

      headerStyle: {
        backgroundColor: Colors.info,
      },
      headerTitle: () => <Logo />,
      headerTitleStyle: {
        color: Colors.white,
        fontFamily: "InriaSans_300Light_Italic",
      },
    });
  }, [navigation]);
  const handlePress = () => {
    navigation.popToTop();
    // retourne à la page racine
    // navigation.pop();
    // retourne à la page précédente
  };
  return (
    <View style={globalStyle.container}>
      <Button title="Home" onPress={handlePress} />
    </View>
  );
};

export default Pictures;
