import PostsScreen from '../PostScreen/PostsScreen'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();
const navigation = useNavigation();

const Home=()=>{
    return(
        <>
        <PostsScreen/>
        <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused&&"grid";
          } else if (route.name === "Create") {
            iconName = focused&&"plus"
          }
          else if (route.name === "Profile") {
            iconName =focused&&"user"
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
    
    </Tabs.Navigator>
     
        </>
    )
};
export default Home;