import {
  View,
  Text,
  Button,
  Platform,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { globalStyle } from "../constants/AppStyle";
import React from "react";
import Colors from "../constants/Colors";
import { useLayoutEffect } from "react";
import MaterialIconsHeader from "../components/MaterialIconsHeader";

import TouchableImage from "../components/TouchableImage";

const Portfolio = ({ navigation, route }) => {
  const name = route.params.name;
  const country = route.params.country;
  const photoArray = route.params.photos;
  const profilBio = route.params.desc;
  const profilImg = route.params.img;
  const favColor = route.params.favColor;

  const handlePress = () => {
    // HTTP request
    return alert("OKAY");
  };
  useLayoutEffect(() => {
    // hiérarchie des options : setOptions, options, screenOptions
    navigation.setOptions({
      // title: `Portfolio de ${name}`,
      headerRight: () => (
        <MaterialIconsHeader
          iconName="info-outline"
          onPressIcon={handlePress}
          iconColor="white"
        />
      ),
      // headerStyle: {
      //   backgroundColor:
      //     // Plateform permet de dicerner "ios" et "andoid"
      //     Platform.OS === "android" ? Colors.lightBrown : Colors.success,
      // },
      headerTitleStyle: {
        color: Colors.white,
        fontFamily: "InriaSans_300Light_Italic",
      },
    });
  }, [navigation]);

  const selectPhoto = (photo) => {
    navigation.navigate("Pictures", photo);
  };
  return (
    <ScrollView style={globalStyle.container}>
      <View style={{ backgroundColor: favColor, ...styles.profilInfos }}>
        <Image source={{ uri: profilImg }} style={styles.smallprofilImg} />
        <Text style={styles.profilName}>{name}</Text>
      </View>
      <View style={styles.profilDescription}>
        <Text style={styles.profilTitleBio}>Bio</Text>
        <Text style={styles.profilTextBio}>{profilBio}</Text>
      </View>
      <View>
        {photoArray.map((photo) => {
          return (
            <TouchableImage
              key={photo.id}
              imgUrl={photo.url}
              title={photo.title}
              onSelectPhoto={() => selectPhoto(photo)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profilInfos: {
    alignItems: "center",
    padding: 10,
  },
  smallprofilImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    margin: 9,
    borderWidth: 6,
    borderColor: Colors.white,
  },
  profilName: {
    fontFamily: "InriaSans_700Bold",
    color: Colors.white,
    fontSize: 25,
  },
  profilDescription: {
    backgroundColor: Colors.ghost,
    margin: 10,
  },
  profilTitleBio: {
    fontFamily: "InriaSans_700Bold",
    fontSize: 20,
    marginBottom: 10,
  },
  profilTextBio: {
    fontFamily: "InriaSans_400Regular",
  },
});

export default Portfolio;
