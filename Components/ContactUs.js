import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';
// import * as Linking from 'expo-linking';

const ContactUs = () => {
    return (
        <View style = {styles.mainContainer}>
            <Text style={styles.headingText}>Contact Us</Text>
            <Image source = {require('../assets/Contact.png')} style = {styles.contactImg}/>
            <Text style = {styles.firstName}>Nirmam</Text>
            <Text style = {styles.secName}>Sanghvi</Text>
            <View style = {styles.emailView}>
            <Zocial name="email" size={20} color="black" onPress = {()=> {Linking.openURL('mailto:nirmam.sanghvi@timesgroup.com')}} />
            <Text style = {styles.contactText}>nirmam.sanghvi@timesgroup.com</Text>
            </View>
            <View style = {styles.contactView}>
            <FontAwesome name="phone" size={20} color="black" />
            <Text style = {styles.contactText} >+91 9930548832</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    mainContainer:{
    marginTop : 30,
    justifyContent : 'center'
    },
    headingText : {
        fontWeight : 'bold',
        fontSize : 20
    },
    contactImg:{
        resizeMode : 'contain',
        marginTop : 14,
        width : '100%',
        height : 200
    },
    firstName : {
        marginTop : 25,
        fontWeight : 'bold',
        fontSize : 35,
    },
    secName : {
        fontSize : 32,
        color : '#4D4D4D'
    },
    emailView:{
        flexDirection : 'row',
        // marginVertical : 8
        marginTop : 15,
    },
    contactView : {
        flexDirection : 'row',
        marginTop : 10
    },
    contactText : {
        marginLeft :10,
        fontSize : 15,
        fontWeight : 'bold',
        color : '#4D4D4D'
    }
    
})

export default ContactUs
