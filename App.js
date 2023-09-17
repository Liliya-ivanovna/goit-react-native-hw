import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import MapScreen from "./src/Screens/MapScreen/MapScreen";
import Home from "./src/Screens/Home/Home";
import CommentsScreen from "./src/Screens/CommentsScreen/CommentsScreen";

const MainStack = createStackNavigator(); 

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/Fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator 
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Registration" component={RegistrationScreen} />{/* Аналог Route */}
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerShown: true,
            headerTitle: "Коментарі",
            headerTitleAlign: "center",
          }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: true,
            headerTitle: "Мапа",
            headerTitleAlign: "center",
          }}
        />
    </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});