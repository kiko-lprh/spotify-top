import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//import the different screens that are going to be included in the bottom tab
import Artists from "./screens/Artists";
import Settings from "./screens/Settings";
import Songs from "./screens/Songs";

//import the login screen
import Login from "./screens/Login";

//creates the bottom tab menu navigator
const Tab = createBottomTabNavigator();

//creates the stack
const Stack = createNativeStackNavigator();

//function to return the tabs to be displayed
function Tabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Songs" component={Songs} options={{headerShown:false}}/>
            <Tab.Screen name="Artists" component={Artists} options={{headerShown:false}}/>
            <Tab.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}

//
function Navigation(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Main" component={Tabs}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
 }


 export default Navigation;
