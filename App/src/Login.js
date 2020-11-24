import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, navigation} from 'react-native';


export default function App() {

  click = () => {
   Alert.alert("Obrigado!!!", "Login Efetuado com sucesso!");

  }
  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/meulogo.png')}
        style={styles.logo}
      />

      <TextInput
      style={styles.input}
        placeholder="Digite Seu Email"

      />

      <TextInput
        style={styles.input}
        placeholder="Digite Uma Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        
         onPress={ () => {this.props.navigation.navigate('Home')}}
        
        >

        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393636',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 150,
    height:150,
    borderRadius:55 
  },
  input:{
    marginTop:10,
    padding:10,
    width:300,
    backgroundColor:"#fff",
    fontSize:15,
    fontWeight: 'bold',
    borderRadius: 2,
  },
  button:{
    width:150,
    right:5,
    padding:12,
    backgroundColor: '#4DBF76',
    marginTop:20,
    borderRadius: 6,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:15,
    fontWeight:'bold',
    color:"#fff",
  }
});
