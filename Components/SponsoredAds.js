import React from 'react'
import { View, Text ,StyleSheet, Image, TouchableOpacity } from 'react-native'

const SponsoredAds = () => {
    return (
        <View style = {styles.mainView}>
        <Text style = {styles.headingText}>Sponsored Ads</Text>
        <Text>Publish promotional content to reach digital marketers and reap the PR and SEO benefits</Text>
        <Image source ={require('../assets/sponsored-ads.png')} style = {styles.AdsImg}/>
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
    marginVertical : 10
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

export default SponsoredAds
