import { View, Text, Button } from "react-native";
import { globalStyle } from "../constants/AppStyle";
import React from "react";
import Colors from "../constants/Colors";
import { useLayoutEffect } from "react";

const Portfolio = ({ navigation, route }) => {
  const name = route.params.name;
  const country = route.params.country;
  const totalImg = route.params.totalImg;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Portfolio de ${name}`,

      headerStyle: {
        backgroundColor: Colors.info,
      },
      headerTitleStyle: {
        color: Colors.white,
        fontFamily: "InriaSans_300Light_Italic",
      },
    });
  }, [navigation]);
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.text}>{name}</Text>
      <Text style={globalStyle.text}>{country}</Text>
      <Text style={globalStyle.text}>{totalImg}</Text>

      <Button
        onPress={() => navigation.navigate("Pictures")}
        title="Pictures"
      />
    </View>
  );
};

export default Portfolio;
