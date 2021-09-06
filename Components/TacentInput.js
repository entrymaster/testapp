import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const TacentInput = (props,navigation) => {
    return (
        <View style={{paddingVertical:props.paddingVertical}}>
            <Text
                style={[styles.borderText,{color:props.color}]}>{props.label}</Text>
                
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                multiline={true}
                value={props.value}
                onChangeText={props.onChangeText}
                maxLength={props.maxLength}
                autoCapitalize={props.autoCapitalize}
            />
            
        </View>
    )
}
const styles = StyleSheet.create({
    borderText: {
        fontSize: 18,
        fontWeight:'bold'
    },
    input: {
        height: Platform.OS === 'ios' ? 30 : 40,
        borderBottomWidth: 1,
        paddingHorizontal:4,
        borderColor: '#a2a2a2',
        fontSize: 18,
        marginTop: 8,
        //padding:10
        // height: 50
    },
});

export default TacentInput;