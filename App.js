import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from 'expo-font';


//import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
//import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import PostsScreen from "./src/Screens/PostScreen/PostsScreen";
export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../goit-react-native-hw/assets/Fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
   
      <PostsScreen/>
    </View>
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