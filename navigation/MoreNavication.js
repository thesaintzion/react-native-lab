import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import More from '../screens/More';
import Details from '../screens/Details';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();


const MoreNavigation  = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name="More" options={{headerShown: false}} component={More} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}


export default MoreNavigation;