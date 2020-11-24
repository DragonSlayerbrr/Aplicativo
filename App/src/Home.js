import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default class Home extends Component {
    render(){

        return(
            <View style={styles.container}>Bem Vindo a Home Page</View> 

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#393636',
        alignItems: 'center',
        justifyContent: 'center',
      },

})