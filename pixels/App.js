import Home from "./screens/Home";

import Portfolio from "./screens/Portfolio";
import Pictures from "./screens/Pictures";
import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

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
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="Pictures" component={Pictures} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
