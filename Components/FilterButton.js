import React,  { useState } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

const FilterButton = (props) => {
    const [color , setColor] = useState()

    return (
        <View>
           <TouchableOpacity onPress = {() => {setColor(!color)}}>
               <Text style = {color?styles.filterActive:styles.filterUnactive}>
                   {props.text}
               </Text>
           </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    filterActive : {
        borderWidth: 1,
        width: '30%',
        textAlign: 'center',
        borderRadius: 20,
        backgroundColor: '#F02F39',
        opacity : 0.6
    },
    filterUnactive : {
        borderWidth: 1,
        width: '30%',
        textAlign: 'center',
        borderRadius: 20,
        backgroundColor: '#fff'
    }
})
export default FilterButton
