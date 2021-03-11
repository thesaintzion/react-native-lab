import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Charts from '../screens/Charts';
import { Button, StyleSheet, View, Dimensions, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import Profile from '../screens/Profile';
import MoreNavigation from './MoreNavication';



const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('screen');


const SingleTab = (props) =>{
    // console.log('The prop from Single', props);
    const {name, color, onPress, params} = props; 
    return (
          <TouchableOpacity  style={styles.tabBtn} onPress={onPress}>
               {params && <Ionicons style={styles.tabIcon} name={params.icon} size={23} color={color} />}
                <Text style={{color: color}}>{name}</Text>
          </TouchableOpacity>
      );
}

const CustomTabBar = (props) => {
    const {state, descriptors, navigation} = props;
    const { routes } = state;
    const [selected, setSelected] = useState('Home');

    // console.log('The state route', routes);
    
    const handlePress = (routeName, index) => {
        if(state.index !== index){
            setSelected(routeName);
            navigation.navigate(routeName);
        }
        // console.log('State index', state.index, 'Map index', index);
    } 

    const color = (routeName) => {
        return routeName === selected ? '#ff6e4e' : '#333';
    }

   

    const icon = (routeName) => {
        return  routeName;
    }


    return (
        <View style={styles.tabCon}>
            <View style={styles.tabInnerCon}>
                {routes && routes.map((route, index) => {

                  return ( <SingleTab onPress={ () => handlePress(route.name,  index)} key={route.key} color={color(route.name)}  {...route} />)

                })}
            </View>
        </View>
      );

}

const RoundedTab = () => {
    return (
        <Tab.Navigator tabBar={ (props) => <CustomTabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} initialParams={{icon : 'home-outline'}}/>
            <Tab.Screen name="Chart" component={Charts} initialParams={{icon : 'bar-chart-outline'}} />
            <Tab.Screen name="Profile" component={Profile} initialParams={{icon : 'person-outline'}} />
            <Tab.Screen name="More" component={MoreNavigation} initialParams={{icon : 'ellipsis-horizontal-outline'}}  />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
  tabCon: {
      height: 60,
      width: width,
      position: 'absolute',
      bottom: 15,
      paddingHorizontal:20
  },
    tabInnerCon:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    overflow: 'hidden',
    elevation: 2
    },
    tabBtn:{
        // backgroundColor: '#ff7058',
        paddingHorizontal: 20,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    borderBottom:{
        borderBottomWidth: 3,
        borderBottomColor: '#ff7058'  
    },
    tabIcon: {
        width: 25,
        height: 25,
        // marginBottom:2,
        // opacity: 0.5

    },
    tabText: {
        fontSize: 13,
        color: '#9d9d9d'
    }
});

export default RoundedTab;
