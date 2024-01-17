import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  infos: {
    fontSize: 20,
    fontFamily: "InriaSans_300Light",
  },
  titleText: {
    fontSize: 25,
    padding: 9,
    fontFamily: "InriaSans_700Bold",
  },
  profilImg: {
    width: 350,
    height: 350,
    borderRadius: 14,
  },
  profilItem: {
    padding: 15,
    alignItems: "center",
  },
});

export default globalStyle;
