import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../Login';

export default function LoginStack() {
    const Stack = createNativeStackNavigator()
    
    return ( 
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>  
        </NavigationContainer>
      );
}

