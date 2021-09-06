import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

const InPageDisplayAds = () => {
    return (
        <View style = {styles.mainView}>
        <Text style = {styles.headingText}>In-Page Display Ads</Text>
        <Text>Promote your product and increase sales with an in-page banner ad in our blog post</Text>
        <Image source ={require('../assets/InPageDisplayAds.png')} style = {styles.AdsImg}/>
        <View>
            <TouchableOpacity style = {styles.advertiseButton}>
                <Text style ={styles.buttonText}>Advertise Now</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex : 1,
    backgroundColor : '#fff',
    marginVertical:10
    },
    headingText :{
     fontWeight : 'bold',
     fontSize : 20,
     marginBottom : 10
    },
    AdsImg:{
        resizeMode : 'contain',
        width : '100%',
        height : 250,
        marginTop : 20
    },
    advertiseButton : {
        // padding : 20,
        backgroundColor : '#F02F39',
        width : 170,
        // height : 55,
        height : 50,
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 18
    },
    buttonText :{
        fontWeight : 'bold',
        color : '#fff'
    }
})

export default InPageDisplayAds
