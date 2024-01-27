import Home from "./screens/Home";
import {
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from "@expo-google-fonts/inria-sans";
import Portfolio from "./screens/Portfolio";
import Pictures from "./screens/Pictures";
import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./constants/Colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Faq from "./screens/Faq";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import MaterialIconsHeader from "./components/MaterialIconsHeader";
// import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightBrown,
        },
        headerTintColor: Colors.white,
        drawerActiveBackgroundColor: "#00BFFF",
        drawerInactiveTintColor: "#4B0082",
        drawerActiveTintColor: "#F0FFF0",
        drawerStyle: {
          backgroundColor: "#00FFFF",
          opacity: 0.8,
          width: 180,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Acceuil",
          drawerIcon: () => (
            <FontAwesome name="user-circle" size={24} color="#F0FFF0" />
          ),
        }}
      />
      <Drawer.Screen
        name="Faq"
        component={Faq}
        options={{
          title: "FAQ",
          drawerIcon: ({ color }) => (
            <MaterialIconsHeader iconName="question-answer" iconColor={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  });
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.secondary,
          },
          headerTitleStyle: {
            fontFamily: "InriaSans_300Light_Italic",
          },
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={MyDrawer}
          options={{
            // title: "Acceuil",
            // gestureEnabled: true,
            // animationTypeForReplace: "push",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
          options={({ route }) => {
            return {
              title: `Portfolio de ${route.params.name}`,
              headerStyle: {
                backgroundColor: route.params.favColor,
              },
              // gestureEnabled: true,
            };
          }}
        />
        <Stack.Screen
          name="Pictures"
          component={Pictures}
          options={{
            title: "Pictures",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
