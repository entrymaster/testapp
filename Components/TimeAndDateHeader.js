import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const TimeAndDateHeader = props => {
    let today = (new Date()).toString().split(' ').splice(0,4).join(' ');

   

 
    return (
        <View style={styles.dateTimeArea}>
            <Text style={styles.dayAndDate}> {today} </Text> 
        </View>

    );
};

const styles = StyleSheet.create({

    dateTimeArea: {
       width:'100%',
       backgroundColor:'#f0f3f4',
       padding:10
        
    },

    dateAndDate: {
        color: '#282828',
    },
});
export default TimeAndDateHeader;
