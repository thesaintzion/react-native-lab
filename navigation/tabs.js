import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { Home } from "../screens"
import { COLORS, FONTS, icons } from "../constants"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            // inactiveTintColor: '',
            activeTintColor: 'yellow',
            style: {
                // backgroundColor:  "#ff6e4e",
              }
        }} >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (tabInfo) => (
                      <View style={{justifyContent: 'center', alignItems: 'center'}}>
                          <Image source={icons.home}  resizeMode="contain"></Image>
                          <Text>Home</Text>
                      </View>
                    ),
                  }}
            />
            <Tab.Screen
                name="Details"
                component={Home}
            />
            <Tab.Screen
                name="Charts"
                component={Home}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;