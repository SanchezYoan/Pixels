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
import { useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "./constants/Colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Faq from "./screens/Faq";
import { FontAwesome } from "@expo/vector-icons";
import MaterialIconsHeader from "./components/MaterialIconsHeader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Selected from "./screens/Selected";
import { Platform, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { StatusBar } from "expo-status-bar";
import globalStyle from "./constants/AppStyle";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

function MyStack() {
  return (
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
  );
}

const renderScene = ({ route }) => {
  switch (route.key) {
    case "first":
      return <Home />;
    case "second":
      return <Faq />;
    default:
      return null;
  }
};

function SelectedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Selected"
        component={Selected}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Photo"
        component={Pictures}
        options={{ title: "Photo" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

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
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            headerStyle: {
              backgroundColor: Colors.lightBrown,
            },
            headerTintColor: Colors.white,
          }}
        >
          <Tab.Screen
            name="Members"
            component={MyStack}
            options={{
              tabBarLabel: "Acceuil",
              headerShown: false,

              tabBarIcon: ({ size, color }) => (
                <MaterialIconsHeader
                  iconName="home"
                  size={size}
                  color={color}
                />
              ),
              tabBarStyle: {
                backgroundColor:
                  Platform.OS === "android" ? Colors.lightBrown : Colors.white,
              },
              tabBarActiveTintColor:
                Platform.OS === "android" ? Colors.white : Colors.lightBrown,

              tabBarInactiveTintColor:
                Platform.OS === "android" ? Colors.white : Colors.info,
            }}
          />
          <Tab.Screen
            name="Likes"
            component={SelectedStack}
            options={{
              title: "favories",
              tabBarLabel: "Selection",
              tabBarIcon: ({ size, color }) => (
                <MaterialIconsHeader
                  iconName="thumb-up"
                  size={size}
                  color={color}
                />
              ),
              tabBarStyle: {
                backgroundColor:
                  Platform.OS === "android" ? Colors.lightBrown : Colors.white,
              },
              tabBarActiveTintColor:
                Platform.OS === "android" ? Colors.white : Colors.lightBrown,
              tabBarInactiveTintColor:
                Platform.OS === "android" ? Colors.white : Colors.info,
            }}
          />
        </Tab.Navigator>
        {/* <TabView
           navigationState={{ index, routes }}
           renderScene={renderScene}
           onIndexChange={setIndex}
           initialLayout={{ width: layout.width }}
         /> */}
      </NavigationContainer>
    </>
  );
}
