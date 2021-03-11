import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 



const AppButton = ({ onPress, title, icon }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        {icon && <Ionicons  name={icon} size={23} color="#fff" />}
         <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

const More = ({state, descriptors, navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
            <AppButton icon="file-tray-stacked-outline" onPress={ () => navigation.navigate('Details') } title="Details"/>
            <AppButton icon="settings-outline" title="Settings" onPress={ () => navigation.navigate('Settings') }  />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
      
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    appButtonContainer: {
        flex:1,
        elevation: 8,
        backgroundColor: "#ff7058",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal:3,
        flexDirection: 'row',
        // justifyContent:  'space-between'
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        marginLeft: 10,
        
      },
      nav:{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#eee',
          paddingVertical: 10,
          backgroundColor: "#ff7058",
          paddingHorizontal: 10
      }
})

export default More;
