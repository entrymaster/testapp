import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const WhyAdvertise = () => {
    return (
        <View style={styles.mainView}>
            <Text style={styles.topText}>
                Why advertise with us?
            </Text>
            <Image source={require('../assets/audience.png')} style={styles.audienceIcon} />
            <Text style={styles.audienceText}>The Right Audience</Text>
            <Text style={styles.audienceText2} >Over 90% of our traffic is organic and generated{'\n'}from digital marketing keyword</Text>
            <Image source={require('../assets/solution.png')} style={styles.audienceIcon} />
            <Text style={styles.audienceText}>Various Ad Solutions</Text>
            <Text style={styles.audienceText2}>We offers diverse ad formats for both raising brand awareness and driving traffic to your agency’s website</Text>
            <Image source={require('../assets/growth.png')} style={styles.audienceIcon} />
            <Text style={styles.audienceText}>Online Growth</Text>
            <Text style={styles.audienceText2}>Our ads will help your listing to gain more awareness and boost your website’s click rates approximately 10 times. </Text>


        </View>
    )
}


const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 10
    },
    topText: {
        color: '#FF0000',
        fontWeight: 'bold',
        fontSize: 22
    },
    audienceIcon: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        marginTop: 30
        // backgroundColor : 'yellow'
    },
    audienceText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 15
    },
    audienceText2: {
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 20
    }

})
export default WhyAdvertise
