import { View, FlatList, StyleSheet, Modal, Text } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { globalStyle } from "../constants/AppStyle";
import Colors from "../constants/Colors";
import PressableItems from "../components/PressableItems";
import { useSelector } from "react-redux";
import NoData from "../components/NoData";
import { MaterialIcons } from "@expo/vector-icons";
import Settings from "../components/Settings";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const selectedCategories = useSelector(
    (state) => state.users.selectedCategories
  );

  const handleSettingsModal = () => {
    setModalVisible(!modalVisible);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialIcons
          name="settings"
          size={24}
          onPress={handleSettingsModal}
          style={{ marginRight: 15 }}
          color="white"
        />
      ),
    });
  });
  const renderProfils = ({ item }) => {
    return <PressableItems item={item} />;
  };

  if (selectedCategories.length === 0) {
    // message d'erreur
    return <NoData>Pas d'utilisateur à afficher</NoData>;
  } else {
    return (
      <View style={globalStyle.container}>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalBody}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={handleSettingsModal}
              style={styles.modalClose}
              color="black"
            />
            <Settings />
          </View>
        </Modal>
        <FlatList
          data={selectedCategories}
          renderItem={renderProfils}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    backgroundColor: Colors.ghost,
    marginVertical: 60,
    padding: 20,
    alignSelf: "center",
    borderRadius: 10,
    width: "90%",
  },
  modalClose: {
    alignSelf: "flex-end",
  },
});

export default Home;
