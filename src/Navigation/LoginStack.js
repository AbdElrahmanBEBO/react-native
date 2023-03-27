import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Login';
import Home from '../Home';

export default function LoginStack() {
    const Stack = createNativeStackNavigator()
    
    return ( 
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>  
        </NavigationContainer>
      );
}

