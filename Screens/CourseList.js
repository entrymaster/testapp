import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {  Overlay } from 'react-native-elements';
import FilterButton from '../Components/FilterButton';



const CourseList = () => {

    const [visible, setVisible] = useState(false);

   
    return (
        <View style = {styles.mainView}>
            <View style = {styles.iconView}>
                <TouchableOpacity onPress ={() => {setVisible()}}>
            <FontAwesome name="filter" size={24} color="#F02F39" />
            </TouchableOpacity>  
            </View>
            <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
                <View style ={styles.overlayView}>
                 
                <FilterButton text = {'Course 1'}/>
                <FilterButton text = {'Course 1'}/>
                <FilterButton text = {'Course 1'}/>
                <FilterButton text = {'Course 1'}/>
                </View>
                </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({

    iconView:{
        borderWidth : 2,
        width : '20%',
        height : 65,
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'flex-end'
    },
    overlayView : {
        height : 400,
        width : 300,
        justifyContent : 'space-evenly'
    },
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

export default CourseList
