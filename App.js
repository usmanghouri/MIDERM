// // import { StatusBar } from "expo-status-bar";
// // import { useEffect, useState } from "react";
// // import {
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   View,
// //   FlatList,
// //   Image,
// // } from "react-native";

// // export default function App() {
// //   var flag = 100;
// //   var myData = [
// //     { title: "Junaid", msg: "AOA", time: "5:55", unreadcount: 12 },
// //     { title: "Hussain", msg: "Hello", time: "5:55", unreadcount: 12 },
// //     { title: "Ali", msg: "Hi", time: "5:55", unreadcount: 12 },
// //     { title: "Akbar", msg: "GGGGG", time: "5:55", unreadcount: 12 },
// //     { title: "Asif", msg: "hahahahahahah", time: "5:55", unreadcount: 12 },
// //     { title: "Khalid", msg: "Take Care", time: "5:55", unreadcount: 12 },
// //     { title: "Noman", msg: "Fine", time: "5:55", unreadcount: 12 },
// //     { title: "Tahir", msg: "Good Bye", time: "5:55", unreadcount: 12 },
// //   ];
 

// //   const [data, setData] = useState(100);
// //   const [data1, setData1] = useState(100);

// //   const onPress = () => {
// //     console.log("Pressed");
// //     flag = flag + 100;
// //     console.log(flag);

// //     setData(data + 100);
// //   };

// //   const onPress2 = () => {
// //     console.log("Pressed");
// //     flag = flag + 100;
// //     console.log(flag);

// //     setData1(data1 + 100);
// //   };
// //   useEffect(() => {});

// //   return (
// //     <View style={styles.container}>
// //       <Text style={{ fontSize: 30 }}>Test {data} </Text>
// //       <TouchableOpacity onPress={onPress}>
// //         <Text> Touch able </Text>
// //       </TouchableOpacity>

// //       <TouchableOpacity onPress={onPress2}>
// //         <Text> Touch able 2 </Text>
// //       </TouchableOpacity>

// //       <Text> Hello </Text>
// //       <Text> Hello </Text>
// //       <Text> Hello </Text>
// //       <Text> Hello </Text>
// //       <Text style={{ fontSize: 30 }}> test 2 {data1} </Text>
      
      
// //       <FlatList
// //         data={myData}
// //         renderItem={({ item }) => (
// //           <View
          
// //             style={{
// //               backgroundColor: "lightgrey",
// //               marginBottom: 10,
// //               alignItems: "center",
// //               justifyContent: "center",
// //               flex: 1,
// //               flexDirection: "row",
// //               height: 40,
// //             }}
// //           >
// //           <Image style={{width: 110,height:110,marginLeft: -130}}source={require('./assets/image1.png')} />
// //             <View
// //               style={{
// //                 flex: 0.3,
// //                 backgroundColor: "green",
// //                 flexDirection: "column",
// //               }}
// //             >
// //               <View>
// //                 <Text style={{ color: "white", fontSize: 18 }}>
// //                   {" "}
// //                   {item.title}{" "}
// //                 </Text>
// //               </View>
// //               <View>
// //                 <Text style={{ color: "white", fontSize: 18 }}>
// //                   {" "}
// //                   {item.msg}{" "}
// //                 </Text>
// //               </View>
// //             </View>

// //             <View
// //               style={{
// //                 flex: 0.3,
// //                 backgroundColor: "grey",
// //                 flexDirection: "column",
// //               }}
// //             >
// //               <View>
// //                 <Text style={{ color: "white", fontSize: 18 }}>
// //                   {" "}
// //                   {item.time}{" "}
// //                 </Text>
// //               </View>
// //               <View>
// //                 <Text style={{ color: "white", fontSize: 18 }}>
// //                   {" "}
// //                   {item.unreadcount}{" "}
// //                 </Text>
// //               </View>
// //             </View>
// //           </View>
// //         )}
// //       />
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     // alignItems: 'center',
// //     justifyContent: "center",
// //   },
// // });
// // import * as React from 'react';
// // import { View, Text } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // function HomeScreen() {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen</Text>
// //     </View>
// //   );
// // }


// // const Stack = createNativeStackNavigator();

// // function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
// //         <Stack.Screen
// //   name="Home"
// //   component={HomeScreen}
// //   options={{ title: 'Overview' }}
// // />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // export default App;
// import * as React from 'react';
// import { Button, View, Text,ImageBackground,StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {loginscreen} from './screens/loginscreen';
// import {counter} from './screens/counter';
// import { signupscreen } from './screens/signupscreen';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
//       {/* <Text>Home Screen</Text> */}
      
//       <ImageBackground source={require('./assets/unsplash.jpg')} style={{flex: 1,width:360,
//     resizeMode: 'contain',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius:70, }}>
      
//       <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 20, color:'white',paddingBottom:30}}>Welcome to Home Screen</Text>
//       {/* <Text style={{paddingTop:600}}> */}
//         <Text style={{marginTop:10}}>
//       <Button 
//         color="#841584"
//         title="Go to Login Page"
//         onPress={() => navigation.navigate('Login')}
//       />
//       </Text>
//       <Text style={{marginTop:20}}>
//       <Button
//         color="#841584"
//         title="Go to SignUp Page"
//         onPress={()=>navigation.navigate('SignUp')}
//       />
//     </Text>
//     </ImageBackground>
    
//     </View>
//   );
// }

// // function DetailsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Details Screen</Text>
// //       <Button
// //         title="Go to Options"
// //         onPress={() => navigation.navigate('Options')}
// //       />
      
// //     </View>
// //   );
// // }
// // function OptionsScreen({navigation}) {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Options Screen</Text>
// //       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
// //       <Button title="Go back" onPress={() => navigation.goBack()} />
// //     </View>
    
// //   );
// // }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       {/* <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="Options" component={OptionsScreen} />
//       </Stack.Navigator> */}
//        <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//         //  options={{ title: 'Login' }}
//         />
//          <Stack.Screen
//           name='Login'
//           component={loginscreen}
//           //options={{ title: 'Home' }}
//         /> 
//         <Stack.Screen
//           name='SignUp'
//           component={signupscreen}
//           //options={{ title: 'Home' }}
//         /> 
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import surahNamesEnglish from './QuranData/surahNamesEnglish';
import surahNamesArabic from './QuranData/surahNamesArabic';
import surahDetails from './QuranData/surahDetails';
import JuzzScreen from './QuranData/juzz';



const MainScreen = ({ navigation }) => {
  const handleNavigateToQuran = () => {
    navigation.navigate('Quran');
  };

  return (
    <SafeAreaView style={styles.container}>
       <Image
        source={require('./assets/pic2.png')} // Change 'your_image_name.jpg' to the actual name of your image file
        style={styles.image}
      />
      <TouchableOpacity style={styles.quranButton} onPress={handleNavigateToQuran}>
        <Text style={styles.quranButtonText}>Go to Quran</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const QuranScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSurahs = surahDetails.filter(surah =>
    surahNamesEnglish[surahDetails.indexOf(surah)].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderSurahItem = ({ item, index }) => (
    <View style={[styles.item, isDarkMode ? styles.darkMode : null]}>
      <View style={styles.textContainer}>
        <Text style={[styles.title, isDarkMode ? styles.darkModeText : null]}>
          {`${index + 1}. ${item.name} (${item.verses} verses, Revelation Order: ${item.revelationOrder})`}
        </Text>
        <Text style={[styles.arabicTitle, isDarkMode ? styles.darkModeText : null]}>{surahNamesArabic[index]}</Text>
      </View>
      <Text style={[styles.englishTitle, isDarkMode ? styles.darkModeText : null]}>{surahNamesEnglish[index]}</Text>
    </View>
  );

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkModeContainer : null]}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Surah"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.modeButton} onPress={toggleMode}>
          <Text style={styles.modeButtonText}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredSurahs}
        renderItem={renderSurahItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Main Page' }} />
//         <Stack.Screen name="Quran" component={QuranScreen} options={{ title: 'Quran Page' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="M" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Options" component={OptionsScreen} />
      </Stack.Navigator> */}
       <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
        //  options={{ title: 'Login' }}
        />
         <Stack.Screen
          name='Quran'
          component={QuranScreen}
          //options={{ title: 'Home' }}
        /> 
        <Stack.Screen name="Juzz" component={JuzzScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  quranButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  quranButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  darkModeContainer: {
    backgroundColor: '#333',
  },
  item: {
    backgroundColor: '#CBC3E3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  darkMode: {
    backgroundColor: '#444',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkModeText: {
    color: '#fff',
  },
  arabicTitle: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 5,
    textAlign: 'center',
  },
  modeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007BFF',
    paddingVertical: 10,
  },
  modeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
  },
  englishTitle: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'right',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default App;
