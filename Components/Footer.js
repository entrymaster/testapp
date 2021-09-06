import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'

const Footer = props => {
    return (
        <View>
             <Image style={styles.logoMain} source={require('../assets/times_ascent_black_logo.png')} />
        </View>

    );
};

const styles = StyleSheet.create({

    logoMain:{
        width:180,
      resizeMode:'contain',
      alignSelf:'center',
      
     
      },
});
export default Footer;
