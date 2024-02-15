import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
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

const Pictures = ({ navigation, route }) => {
  // const url = route.params.url;
  // const title = route.params.title;
  // const desc = route.params.photoDesc;

  // destructuring
  const { url, title, photoDesc } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,

      headerStyle: {
        backgroundColor: Colors.info,
      },
      headerTitle: () => <Logo />,
      headerTitleStyle: {
        color: Colors.white,
        fontFamily: "InriaSans_300Light_Italic",
      },
    });
  }, [navigation, title]);
  const handlePress = () => {
    navigation.popToTop();
    // retourne à la page racine
    // navigation.pop();
    // retourne à la page précédente
  };
  return (
    <ScrollView style={globalStyle.container}>
      <Image style={styles.selectedImage} source={{ uri: url }} />
      <View style={styles.photoDesc}>
        <Text style={globalStyle.titleText}>{title}</Text>
        <Text style={styles.photoDescText}>{photoDesc}</Text>
      </View>
      {/* <Button title="Home" onPress={handlePress} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectedImage: {
    width: "100%",
    height: 400,
  },
  photoDesc: {
    padding: 15,
    fontSize: 25,
    fontFamily: "InriaSans_400Regular",
  },
  photoDescText: {
    fontFamily: "InriaSans_400Regular",
    fontSize: 20,
    padding: 9,
  },
});
export default Pictures;
