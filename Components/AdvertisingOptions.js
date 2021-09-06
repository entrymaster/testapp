import React from 'react'
import { View, Text,  Image , StyleSheet,  TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const AdvertisingOptions = () => {

    const navigation = useNavigation(); 

    return (
        <View style = {styles.mainView}>
            <Text style={styles.mainHeading}>Advertising Options</Text>
            <Text style = {styles.headingText}>Post a Job</Text>
            <Text>Help us help you finding the right talent for your business</Text>
            <View style ={styles.postJobView}>
            <Image source = {require('../assets/postJob.png')} style = {styles.AdsImg1}/>
            </View>
            <TouchableOpacity style={styles.advertiseButton} onPress = {() => navigation.navigate('PostJobForm')}>
                <Text style={styles.buttonText}>Advertise Now</Text>
            </TouchableOpacity>
            <Text style = {styles.headingText}>Featured Ads</Text>
            <Text>Get featured in a monthly newsletter that goes to 2,600+ agencedecision-makers</Text>
            <Image source ={require('../assets/featured-ads.png')} style = {styles.AdsImg}/>
            <View>
                <TouchableOpacity style = {styles.advertiseButton} onPress ={() => navigation.navigate('PostJobForm2')} >
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
    mainHeading:{
        fontSize:25,
        paddingVertical:20,
        textAlign:'center',
        fontWeight:'bold',
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
    AdsImg1:{
        resizeMode : 'contain',
        width : '100%',
        height : 250,
        // marginTop : 
    },
    advertiseButton : {
        backgroundColor : '#F02F39',
        width : 170,
        height : 50,
        alignSelf : 'center',
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 25,
        marginBottom : 25
    },
    postJobView:{
        backgroundColor : '#EDEDEF',
        height: 230,
        marginTop : 20,
        justifyContent : 'center',
        alignItems : 'center'
    },
    buttonText :{
        fontWeight : 'bold',
        color : '#fff',
    }
})

export default AdvertisingOptions
