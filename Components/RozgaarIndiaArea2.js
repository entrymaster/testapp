import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'


const RozgaarImageArea2 = () => {
    return (
        <View style={styles.Container}>
            <ImageBackground source={require('../assets/bgimageGig.jpg')} style={styles.BackImg}>
                <View style={styles.ImageView}>
                    <Image source={require('../assets/Roz.png')} style={styles.Images}/>
                </View>
                <View style={styles.TextStyleView}>
                    <Text style={styles.TextFirstLine}>Work on a gig or get</Text>
                    <Text style={styles.TextSecondLine}>part time & full time work</Text>
                    <Text style={styles.TextParagraph}>An online freelancer work platform where businessess and independent skilled professionals can connect and collaborate remotely.</Text>
                </View>

                <View style={styles.CardDirection}>
                    <TouchableOpacity style={styles.FirstCardBtn}>
                        <Text style={styles.CardBtnText}>Post a job & hire freelancer</Text>
                        <View style={styles.IconTextView}>
                            <Text style={styles.IconText}>Post requirements</Text>
                            <AntDesign name="arrowright" size={15} color="#fff" style={styles.IconStyle} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.SecondCardBtn}>
                        <Text style={styles.CardBtnText}>Earn money freelancing</Text>
                        <View style={styles.IconTextView}>
                            <Text style={styles.IconText}>Become freelancer</Text>
                            <AntDesign name="arrowright" size={15} color="#fff" style={styles.IconStyle} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
    },
    BackImg: {
        width: "100%",
        resizeMode: 'cover'
    },
    Images: {
        right: 20,
        position: 'absolute',
        width: '32%',
        resizeMode: 'contain',
    },
    ImageView: {
        height: 48
    },
    TextFirstLine: {
        width: '50%',
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold'
    },
    TextSecondLine: {
        width: '50%',
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    TextParagraph: {
        width: '45%',
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 16
    },
    CardDirection: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        marginBottom: 15,
        margin: 12
    },
    FirstCardBtn: {
        width: '48%',
        height: 100,
        borderRadius: 8,
        backgroundColor: '#29A746',
    },
    SecondCardBtn: {
        width: '48%',
        height: 100,
        borderRadius: 8,
        backgroundColor: '#0090FF'
    },
    CardBtnText: {
        fontSize: 17,
        paddingHorizontal: 15,
        paddingTop: 12,
        fontWeight: 'bold',
        color: '#fff',
    },
    IconTextView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        position: 'absolute',
        bottom: 15
    },
    IconText: {
        fontSize: 10,
        color: '#fff',
        fontWeight: 'bold'
    },
    IconStyle: {
        paddingLeft: 20,
        justifyContent: 'center'
    },
    TextStyleView: {
        paddingLeft: 12
    }
})

export default RozgaarImageArea2;
