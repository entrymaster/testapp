import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import FlashMessage from "react-native-flash-message";
import IntroSlider from './Screens/IntroSlider';

export default function App() {

  global.baseURL = 'http://13.232.159.89/v1'
  return (
  
    <View style={styles.container}>
   <AppNavigation />   
     
      <StatusBar style="auto"  /> 
      <FlashMessage position="top" statusBarHeight={35} />
    </View>

     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
