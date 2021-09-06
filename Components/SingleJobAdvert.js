import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import TimesButton from './TimesButton';

const SingleJobAdvert = () => {
    return (
        <View style={styles.MainContainer}>
            <ImageBackground source={require('../assets/singlejobadvert.png')} style={styles.BackImg}>
                <View style={styles.TextStyleView}>
                    <Text style={styles.TextFirstLine}>Boost{'\n'}Your Job</Text>
                </View>
            </ImageBackground>
            <View style={styles.ItemContainer}>
                <Text style={styles.Text_Heading}>Post A Single Job Advert</Text>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextDescription}>We'll help you hire the person you need with email and online support</Text>
                </View>
                <View style={styles.TextIconView}>
                    <AntDesign name="caretright" size={10} color="#b1b1b1" style={styles.IconStyle} />
                    <Text style={styles.IconText}>1 month to create and post your 6 week job ad</Text>
                </View>
                <View style={styles.TextIconView}>
                    <AntDesign name="caretright" size={10} color="#b1b1b1" style={styles.IconStyle} />
                    <Text style={styles.IconText}>We recommend the most relevant people to speed up your hiring</Text>
                </View>
                <View style={styles.TextIconView}>
                    <AntDesign name="caretright" size={10} color="#b1b1b1" style={styles.IconStyle} />
                    <Text style={styles.IconText}>We'll email you tips,insight and advice around hiring people</Text>
                </View>
            </View>
            <View style={styles.BottomTextView}>
                <Text style={styles.BottomText}>Boost Your Job advert For:</Text>
                <View style={styles.TextIconView}>
                <FontAwesome name="rupee" size={24} color="black" style={styles.IconStyle}/>
                <Text style={styles.PrizeText}>2000</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.BtnButton}>
                <TimesButton buttonColor={'#e1d8d8'} buttonText={'Boost Now'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
    BackImg: {
        width: "100%",
        height: 200
    },
    TextStyleView: {
        paddingVertical: 60,
        paddingLeft: 22,
    },
    TextFirstLine: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    ItemContainer: {
        padding: 20
    },
    Text_Heading: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    TextContainer: {
        paddingTop: 20
    },
    TextDescription:{
        color:'#b1b1b1'
    },
    TextIconView: {
        flexDirection: 'row',
        paddingTop: 15
    },
    IconStyle: {
        paddingTop:4
    },
    IconText: {
        paddingHorizontal: 5,
        color:'#b1b1b1'
    },
    BottomTextView:{
        alignItems:'center',
        paddingTop:25   
    },
    BottomText:{
        fontSize:17,
        fontWeight:'bold'
    },
    PrizeText:{
        fontSize:22,
        fontWeight:'bold',
        paddingHorizontal:5
    },
    BtnButton:{
        width:150,
        alignSelf:'center',
    },
})

export default SingleJobAdvert


