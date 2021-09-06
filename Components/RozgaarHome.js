
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'
import * as WebBrowser from 'expo-web-browser';

const RozgaarHome = props => {
    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.rozgaarindia.com/');
       
      };

    return (
        <View style={styles.Container}>
            <ImageBackground source={require('../assets/getwork.jpg')} style={styles.BackImg} imageStyle={styles.bgImage}>
                <View style={styles.ImgView}>
                    <View style={styles.bgText}>
                        <Text style={styles.TextHeading}>Get Work Online</Text>
                        <Text style={styles.TextLine}>Work on a gig or get part time</Text>
                        <Text style={styles.TextLineSecond}>& full time work</Text>
                    </View>
                    <View>
                        <View style={styles.touchable}>
                            <TouchableOpacity style={styles.btn_Button}  onPress={()=> _handlePressButtonAsync() }>
                                <Text style={styles.btn_TextHire}>Hire Freelancers</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.touchableBtn}>
                            <TouchableOpacity style={styles.btn_ButtonStyle} onPress={()=> _handlePressButtonAsync() }>
                                <Text style={styles.btn_Text}>Start Earning</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 2,
        marginVertical: 30
    },
    BackImg: {
        width: "100%",
        height: 118
    },
    bgImage: {
        borderRadius: 8
    },
    TextHeading: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#fff',
        marginTop: 16
    },
    TextLine: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 7
    },
    TextLineSecond: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
    },
    ImgView: {
        flexDirection: 'row',
        marginBottom: 18,
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },
    btn_Button: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
    },
    btn_ButtonStyle: {
        backgroundColor: '#0090FF',
        borderRadius: 20,
        padding: 10,
    },
    touchable: {
        marginTop: 15,
        justifyContent: 'center'
    },
    touchableBtn: {
        marginTop: 8,
        justifyContent: 'center'
    },
    btn_Text: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btn_TextHire: {
        fontSize: 12,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    bgText: {
        paddingLeft: 4
    }
})
export default RozgaarHome;
