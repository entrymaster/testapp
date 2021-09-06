import React from 'react'
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity } from 'react-native'

const AdvertiseNow = ({navigation}) => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.HeadingContainer}>
                <Text style={styles.HeadingText}>Advertise Now</Text>
            </View>
            <ScrollView>
                <View style={styles.ItemContainer}>
                    <Image source={require('../assets/boostYourJob.png')} style={styles.Images} />
                    <Text style = {styles.paraText}>Loremu ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incident it labore incididunt it labore ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, dolor sit amet, consectet adipisci</Text>
                    <TouchableOpacity style= {styles.jobPostButton}>
                        <Text style = {styles.buttonText}>Boost Your Job Post</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.ItemContainer}>
                    <Image source={require('../assets/DisplayBannerAds.png')} style={styles.Images} />
                    <Text style = {styles.paraText}>Loremu ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incident it labore incididunt it labore ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, dolor sit amet, consectet adipisci</Text>
                    <TouchableOpacity style= {styles.jobPostButton}>
                        <Text style = {styles.buttonText}>Display Banner Ads</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.ItemContainer}>
                    <Image source={require('../assets/ContactUs.png')} style={styles.Images} />
                    <Text style = {styles.paraText}>Loremu ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incident it labore incididunt it labore ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, dolor sit amet, consectet adipisci</Text>
                    <TouchableOpacity style= {styles.jobPostButton} onPress={()=>navigation.navigate('AdvertContactUs')}>
                        <Text style = {styles.buttonText}>Contact Us</Text>
                        </TouchableOpacity>
                </View>
              
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor : '#fff'
    },
    HeadingContainer: {
        alignSelf: 'center'
    },
    HeadingText: {
        fontSize: 20,
        marginTop : 10,
        color: 'red',
        fontWeight: 'bold'
    },
    ItemContainer: {
        borderWidth : 2,
        borderColor : '#D3D3D3',
        borderRadius: 3,
        marginTop : 25,
        padding: 18
    },
    paraText : {
      paddingTop : 15
    },
    Images: {
        resizeMode: 'cover',
        width: '100%',
        height: 180,
        borderRadius: 3
    },
    jobPostButton : {
        backgroundColor : '#aa7979',
        padding: 15,
        alignItems : 'center',
        marginTop : 20
    },
    buttonText:{
        fontWeight : 'bold',
        color : '#fff',
        fontSize: 16
    }
})

export default AdvertiseNow


