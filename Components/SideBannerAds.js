import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

const SideBannerAds = ({navigation}) => {
    return (
        <View style = {styles.mainView}>
        <Text style = {styles.headingText}>Side Banner Ads</Text>
        <Text>Promote your product and increase sales with Sidebar Banner Ads in our feed, event and job section</Text>
        <Image source ={require('../assets/sideBannerAds.png')} style = {styles.AdsImg}/>
        <View>
            <TouchableOpacity style = {styles.advertiseButton} onPress={()=>navigation.navigate('BannerAds')}>
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

export default SideBannerAds
