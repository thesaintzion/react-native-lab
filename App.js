import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RoundedTab from './navigation/RoundedTab';

export default function App() {
  return (
    <NavigationContainer>
          {/* <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={Tabs} />
           <Stack.Screen  name="Charts" component={Charts} />
           <Stack.Screen  name="Details" component={Details} />
      </Stack.Navigator>      */}
        <RoundedTab />
    </NavigationContainer>
  
  );
}