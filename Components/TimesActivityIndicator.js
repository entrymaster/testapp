import React from 'react';
import { ActivityIndicator } from 'react-native';
import { View, StyleSheet, Text } from 'react-native'

const TimesActivityIndicator = props => {
    return (
        <View style={styles.backgroundArea}>
           <ActivityIndicator color={'black'} />
           {!props.api && <Text style={{marginTop:10}}>Loading</Text> }
           
        </View>

    );
};

const styles = StyleSheet.create({

    backgroundArea:{
        height:70,
        alignSelf:'center',
        width:70,
       
flex:1,
         //backgroundColor: 'rgba(52, 52, 52, 0.6)',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10
    }
});
export default TimesActivityIndicator;