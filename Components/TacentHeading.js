import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const TacentHeading = (props) => {

    return (
        <View>
            <Text style={styles.Heading_Candidate}>{props.label}</Text>
            <View style={styles.BottomBorder}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    Heading_Candidate: {
        color:'#f02f39',
        fontSize: 18,
        fontWeight:'bold',
        paddingVertical:10,
    },
    BottomBorder:{
        borderBottomWidth:2,
        width:35,
        paddingTop:6,
        borderBottomColor:'#f02f39'
    }
})

export default TacentHeading;