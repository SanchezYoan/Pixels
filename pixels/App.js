import Home from "./pages/Home";
import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    InriaSans_300Light: require("./assets/fonts/InriaSans-Light.ttf"),
    InriaSans_300Light_Italic: require("./assets/fonts/InriaSans-LightItalic.ttf"),
    InriaSans_400Regular: require("./assets/fonts/InriaSans-Regular.ttf"),
    InriaSans_400Regular_Italic: require("./assets/fonts/InriaSans-Italic.ttf"),
    InriaSans_700Bold: require("./assets/fonts/InriaSans-Bold.ttf"),
    InriaSans_700Bold_Italic: require("./assets/fonts/InriaSans-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return <Home />;
}
