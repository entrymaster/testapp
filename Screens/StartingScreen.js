import React from 'react';
import { View,  ActivityIndicator, ImageBackground } from 'react-native';


const StartingScreen = ({ props, navigation, route }) => {
  
    return (
        <View style={{}}>
            <ImageBackground
                style={{ resizeMode: 'contain', height: '100%', width: "100%" }}
                source={require('../assets/splash.png')}>
                  <ActivityIndicator size="large" color="white"
                    style={{flex:1, bottom:150, position:'absolute', alignSelf:'center'}}
                />
                
            </ImageBackground>
        </View>
    );

};


export default StartingScreen;
