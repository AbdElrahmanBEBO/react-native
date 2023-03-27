import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Home';

const Stack = createNativeStackNavigator()

export default function UserStack() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}