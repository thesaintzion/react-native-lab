import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, Button } from 'react-native'

const Home = () => {
    const [count, setCount] = useState(4);
    const countDown  = () => {
        // if
        setTimeout( () => {
                setCount( count < 1 ? 0 : count - 1);
        }, 1000)
    }
    // countDown();
    return (
        <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Home page</Text>
        <View>
        <Text style={styles.count}>{ count }s</Text>
        </View>
      

        <StatusBar
        animated={true}
        backgroundColor="#ff6e4e"
        barStyle="light-content"
        showHideTransition="slide"/>
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
   flex: 1,
   backgroundColor: '#eee',
   justifyContent: 'center',
   paddingHorizontal: 10,
   justifyContent: 'center',
   textAlign: 'center'
    },

    count:{
fontSize:50,
fontWeight: '900',
textAlign: 'center',
color: '#ff6e4e',
    },

    btn:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        overflow: 'hidden',
        elevation: 2,
        color: '#ff6e4e',
        backgroundColor: 'red'
        
    }
    });

export default Home;



