import React from 'react'
// import {  } from 'react-native'
import { StyleSheet, Text, View , Animated , TouchableOpacity} from 'react-native'
import HeaderMain from './HeaderMain'
import TacentInput from './TacentInput'

const PostJobForm2 = () => {

    let scrollY = new Animated.Value(0);
    const diffClampScrolly = Animated.diffClamp(scrollY, 0, 70);

    const headerTranslateY = diffClampScrolly.interpolate({
        inputRange: [0, 70],
        outputRange: [0, -70],
        extrapolate: 'clamp'
      })
      const headerOpacity = diffClampScrolly.interpolate({
        inputRange: [0, 70],
        outputRange: [1, 0],
        extrapolate: 'clamp'
      })
    
        
    return (
        
        <View style = {styles.mainContainer}>
            <Animated.View style={
                {
                    marginTop: 30,
                    transform: [{ translateY: headerTranslateY }],
                    opacity: headerOpacity,
                    elevation: 1,
                    zIndex: 1,
                }
            } >
                <HeaderMain />
            </Animated.View>
            
            <View style={styles.formContainer}>
            <Text style={styles.headerText}>Post a Job</Text>
            <Text style = {styles.subHeadText}>Fill the form below to submit your ad enquiry</Text>
            <View style = {styles.compView}>
            <TacentInput label = {'Full Name'}/>
            </View>
            <TacentInput label = {'Mobile'}/>
            <View style = {styles.compView}>
            <TacentInput label = {'Company Name'}/>
            </View>
            <View style = {styles.compView}>
             <TacentInput label = {'Company Website Url'}/>
             </View>
            <TouchableOpacity style = {styles.submitButton}>
                <Text style = {styles.text}>Submit</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer:{
     backgroundColor : '#fff',
    //  marginTop : 10,
     flex : 1
    },

    formContainer: {
        marginHorizontal: 20,
        marginVertical : 100

    },

    headerText: {
        fontWeight: 'bold',
        color: '#F02F39',
        fontSize: 20,
        marginTop  : 10
    },
    subHeadText:{
        fontWeight : 'bold',
        fontSize : 15,
        marginTop : 13,
        marginBottom : 18
    },
    submitButton:{
        padding : 12,
        backgroundColor : '#F02F39',
        // width : '40%',
        width : 130,
        // justifyContent : 'center'
        alignItems : 'center',
        alignSelf: 'center',
        marginTop : 20,
        borderRadius : 5 
    },
    compView: {
        marginTop: 20,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default PostJobForm2


