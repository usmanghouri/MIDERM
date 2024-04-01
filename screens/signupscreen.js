import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Alert, SafeAreaView, Button, TouchableOpacity,ImageBackground} from 'react-native';
import React, {useState} from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import firebase from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export function signupscreen({navigation}) {
   // const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
 // const [username, setUsername] = useState('');
  // const handleSignup = () => {
  //   const params = {
  //     "userame":"Demo",
  //     "email":"testakhn@gmail.com",
  //     "password":"12345678",
  //   };

  //   axios.post('https://dev.iqrakitab.net/api/signup', params)
  //     .then(response => {
  //       // Handle success
  //       Alert.alert('Success', 'Signup successful!');
  //       // You may navigate to another page or perform other actions upon successful signup
  //     })
  //     .catch(error => {
  //       // Handle error
  //       Alert.alert('Error', 'Signup failed. Please try again.');
  //       console.error('Signup Error:', error);
  //     });
  // };
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    country: "",
    city: "",
    email: "",
    password: "",
    cnfPassword: ""
  });

  function handleChange(name, text) {
    setUserData({
      ...userData,
      [name]: text
    });
  }

  const handleSignup = async () => {

    console.log('LOGGED signup')

    await createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        console.log("Succesfull", userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log('Error Message == ', errorMessage)
      });

  };

    return(
        <View style={styles.container}>
            <Text style={{fontSize:20,marginBottom:90,fontWeight:'bold'}}>Welcome to Sign Up Page</Text>
            <TextInput
            style={styles.input}
          placeholder="Email Address"
          onChangeText={(text) => handleChange("email", text)}
          value={userData.email}
          keyboardType="email-address"
        />
        <TextInput
        style={styles.input}
          placeholder="Password"
          onChangeText={(text) => handleChange("password", text)}
          value={userData.password}
          keyboardType="default"
          secureTextEntry={true}
        />
        {/* <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        /> */}
         <Button
         color="#841584"
          title="Sign Up"
          onPress={handleSignup}
        /> 
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        
      },
      input: {
        color:'white',
        width: 280,
        marginBottom: 10,
        padding: 10,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
});