import { View, Text, Image, Button } from "react-native";
import { globalStyle } from "../constants/AppStyle";
import React from "react";

const Portfolio = ({ navigation, route }) => {
  const name = route.params.name;
  const country = route.params.country;
  const totalImg = route.params.totalImg;
  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.titleText}>Portfolio</Text>
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
