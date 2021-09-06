import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TacentInputField = (props) => {
    return (
        <View style={{paddingVertical:props.paddingVertical}}>
            <Text style={[styles.borderText,{color:props.color}]}>{props.label}</Text>
            <TextInput
                style={styles.inputFeild}
                placeholder={props.placeholder}
                multiline={true}
                value = {props.value}
                onChangeText={props.onChangeText}
                />
            
        </View>
    )
}

const styles = StyleSheet.create({
    borderText: {
        fontSize: 18,
        fontWeight:'bold'
    },
    inputFeild: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#a2a2a2',
        paddingHorizontal: 10,
        fontSize: 18,
        textAlignVertical: "top",
        paddingTop: 8,
        lineHeight: 25,
        marginTop: 8,
        padding: 60
    },
});

export default TacentInputField;