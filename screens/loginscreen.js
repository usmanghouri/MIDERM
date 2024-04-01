import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Alert, SafeAreaView, Button, TouchableOpacity,ImageBackground,Image} from 'react-native';
import React, {useState} from 'react';
//import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


export function loginscreen({navigation}) {
  //const [name,setName] = useState('');
  const [age,setAge] = useState('');
  //const [pass,setPass] = useState('');
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
 
  // const handleLogin = async () => {
  //   Alert.alert("Button Pressed")
  //   axios.get('https://dev.iqrakitab.net/api/login')
  // .then(function(response) {
  //   // Handle successful response
  //   console.log('Data received:', response.data);
  //   <Text>SUCCESS</Text>
  // })
  // .catch(function(error) {
  //   // Handle error
  //   console.error('Error fetching data:', error);
  //   <Text>Error</Text>
  // })};
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  function handleChange(name, text) {
    setUserData({
      ...userData,
      [name]: text
    });
  }

  const handleLogin = async () => {
    console.log('Handle Log In')
    
    await signInWithEmailAndPassword(auth,userData.email, userData.password)
      .then((userCredential) => {
        console.log("user data,", userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };


  return (
    <View style={styles.container}>

        
      
        {/* <Text>AOA</Text>
      <Text>In the name of Allah!</Text>
      <Text style={{marginBottom: 30}}>AOA</Text>
      <StatusBar style="auto" />
      <Text style={{margin: -10}}>Enter Name</Text> */}
      <Text style={{fontSize:20,fontWeight:'bold'}}>Login In here</Text>
      {/* <Image source={require('../assets/login.png')} style={{height:170,width:280}}/> */}
      <ImageBackground source={require('../assets/login.png')} style={{flex: 1,width:300,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:70, 
    }}>
      
      <TextInput
      style={styles.container1}
          placeholder="Email Address"
          onChangeText={(text) => handleChange("email", text)}
          value={userData.email}
          keyboardType="email-address"
        />
        <TextInput
        style={styles.container1}
          placeholder="Password"
          onChangeText={(text) => handleChange("password", text)}
          value={userData.password}
          keyboardType="default"
          secureTextEntry={true}
        />
        {/* <Text style={{margin: -10}}>Enter Age (optional)</Text> */}
        {/* <TextInput 
          style={styles.container1}
          placeholder='18'
          onChangeText={(val)=> setAge(val) }
          
          value={age}
          keyboardType='numeric'
          //secureTextEntry={true}   
        /> */}
        <Button 
        //style={styles.btn}
        onPress={handleLogin }
        // {() =>
         
        //   Alert.alert('Button pressed')}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        </ImageBackground>
         {/* <Text>Name: {name},
        Password: {password},
        Age: {age}
        </Text> */}
        
        {/* <Button 
        title='counter'
        onPress={() => navigation.navigate('counter')}/>
        <Text style={{alignItems: 'center',padding: 10,fontSize: 20}}>Count: {count}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setCount(prevCount => prevCount + 1)}>
        <Text style={{color:"white",fontSize: 14}}>Increment Here</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setCount(prevCount => prevCount - 1)}>
        <Text style={{color:"white",fontSize: 14}}>Decrement Here</Text>
      </TouchableOpacity> */}

    </View>
  );
}

// const Stack = createNativeStackNavigator();
// function App() {
//     return (
//       <NavigationContainer>
//         {/* <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Details" component={DetailsScreen} />
//           <Stack.Screen name="Options" component={OptionsScreen} />
//         </Stack.Navigator> */}
//          <Stack.Navigator>
//            <Stack.Screen
//             name='counter'
//             component={counter}
//             //options={{ title: 'Home' }}
//           /> 
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
// }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A0DAD',
    alignItems: 'center',
     justifyContent: 'center',
  },
  container1: {
    //flexDirection: 'row',
    margin: 20,
    padding: 5,
    width: 250,
    backgroundColor: 'white',
     alignItems: 'center',
     justifyContent: 'center',
     borderRadius: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 10,
    marginBottom: 30,
    color: "white",
    
  },
});
