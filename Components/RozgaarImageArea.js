import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const RozgaarImageArea = () => {
    return (
        <View style={styles.Container}>
            <ImageBackground source={require('../assets/GirlGig.jpg')} style={styles.BackImg}>
                <View style={styles.ImageView}>
                    <Image source={require('../assets/Roz.png')} style={styles.Images} />
                </View>
                <View>
                    <Text style={styles.TextFirstLine}>Work on a gig or get</Text>
                    <Text style={styles.TextSecondLine}>part time & full time work</Text>
                    <Text style={styles.TextParagraph}>An online freelancer work platform where businessess and independent skilled professionals can connect and collaborate remotely.</Text>
                </View>
            </ImageBackground>
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
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        //justifyContent: 'center',
        //paddingHorizontal: 10
    },
    BackImg: {
        width: "100%",
        height: 200,
        resizeMode: 'cover'
    },
    Images: {
        right: 15,
        position: 'absolute',
        width: '40%',
        resizeMode: 'contain',
    },
    ImageView: {
        height: 60
    },
    TextFirstLine: {
        right: 10,
        position: 'absolute',
        width: '45%',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    },
    TextSecondLine: {
        right: 10,
        position: 'absolute',
        width: '45%',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 14
    },
    TextParagraph: {
        right: 10,
        position: 'absolute',
        width: '45%',
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 45
    },
    CardDirection: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    FirstCardBtn: {
        width: '47%',
        height: 100,
        borderRadius: 8,
        backgroundColor: '#29A746'
    },
    SecondCardBtn: {
        width: '47%',
        height: 100,
        borderRadius: 8,
        backgroundColor: '#0090FF'
    },
    CardBtnText: {
        fontSize: 17,
        paddingHorizontal: 15,
        paddingTop: 12,
        fontWeight: 'bold',
        color: '#fff'
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
    }
})

export default RozgaarImageArea;
