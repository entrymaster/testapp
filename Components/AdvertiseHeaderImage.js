import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

const AdvertiseHeaderImage = () => {
    return (
        <View style= {styles.headerImgView}>
         <ImageBackground source = {require('../assets/app-banner.png')} style ={styles.headerImg}>
             <View style = {{width : '87%'}}>
             <Text style = {styles.imageText}>Advertise with us and find your next hire quickly</Text> 
             <Text style = {styles.imageText2}>Get better reach and more qualified applicants when you promote</Text>
             </View>
         </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({

    headerImgView:{
         width: '100%',
        //  height: 140
        //  height : '100%'
        // height : 300
    },
    headerImg : {
        // flex :1,
        resizeMode : 'contain',
        width : '100%',
        height : 150
    },
    imageText : {
        color : "black",
       fontWeight : 'bold',
       fontSize : 18,
       paddingTop : 18,
       marginLeft : 10
    },
    imageText2:{
        color : 'black',
        fontSize : 12,
        marginLeft : 10,
        marginTop :4
    }
})

export default AdvertiseHeaderImage
