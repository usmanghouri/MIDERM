import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Alert, SafeAreaView, Button, TouchableOpacity,ImageBackground} from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function counter({navigation}){
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return(
        <View>
            {/* <Text>Counter Here</Text> */}
            
            <Text style={{alignItems: 'center',padding: 10,fontSize: 20,justifyContent:'center'}}>Count: {count}</Text>
         <TouchableOpacity style={styles.button} onPress={() => setCount(prevCount => prevCount + 1)}>
        <Text style={{color:"white",fontSize: 14,alignItems:'center',justifyContent:'center',fontWeight:'bold',}}>Increment Here</Text>
      </TouchableOpacity> 
      
       <TouchableOpacity style={styles.button} onPress={() => setCount(prevCount => prevCount - 1)}> 
        <Text style={{color:"white",fontSize: 14, alignItems:'center',justifyContent:'center',fontWeight:'bold',}}>Decrement Here</Text>
      </TouchableOpacity> 
            <Button style={{paddingTop:20}}
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
       <Button 
        title="Home"
      //  onPress={() => navigation.navigate('Home')}
      onPress={()=>navigation.popToTop()}
      />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
       justifyContent: 'center',
    },
    container1: {
      //flexDirection: 'row',
      margin: 20,
      padding: 5,
      width: 250,
      backgroundColor: 'gray',
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