import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Home';
import Signup from '../Auth/Singup';
import Login from '../Auth/Login';
import Profile from '../Profile/Profile';

const Stack = createNativeStackNavigator()

export default function UserStack() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}