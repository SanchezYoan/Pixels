import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import globalStyle from "../constants/AppStyle";
import NoData from "../components/NoData";
import Colors from "../constants/Colors";

const Selected = ({ navigation }) => {
  const selectedUsers = useSelector((state) => state.users.selectedUsers);

  const ListItem = ({ items }) => {
    return (
      <View style={styles.photosContainer}>
        {items.item.photos.map((photo) => {
          return (
            <Pressable
              onPress={() => navigation.navigate("Photo", photo)}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? Colors.secondary : Colors.white,
                },
              ]}
            >
              <Image
                style={globalStyle.profilImg}
                source={{ uri: photo.url }}
              />
              <Text style={styles.selectedPhotoText}>{photo.title}</Text>
              <View key={photo.id}></View>
            </Pressable>
          );
        })}
      </View>
    );
  };
  return (
    <View style={globalStyle.container}>
      {selectedUsers.length ? (
        <FlatList
          data={selectedUsers}
          renderItem={(selectedUsers) => {
            return <ListItem items={selectedUsers} />;
          }}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <NoData>Aucune Data à afficher</NoData>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  photosContainer: {
    marginVertical: 9,
    alignItems: "center",
    padding: 10,
  },
  selectedPhotoText: {
    fontSize: 19,
    textAlign: "center",
    fontFamily: "InriaSans_300Light",
    margin: 9,
  },
});

export default Selected;
