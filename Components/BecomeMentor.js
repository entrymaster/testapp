import React,{useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'

const BecomeMentor = ({ navigation })=> {
    
    return (
        <View style={styles.MainContainer}>
            <ImageBackground source={require('../assets/becomementor.jpg')} style={styles.BackImg}>
                <View style={styles.TextStyleView}>
                    <Text style={styles.TextFirstLine}>Want to be a</Text>
                    <Text style={styles.TextSecondLine}>MENTOR ?</Text>
                    <Text style={styles.TextParagraph}>Guiding professionals around </Text>
                    <Text style={styles.TextParagraph}>the world to have them </Text>
                    <Text style={styles.TextParagraph}>reach their goals.</Text>
                </View>
                <View style={styles.BtnView}>
                    <TouchableOpacity style={styles.BtnStyle} onPress={()=>navigation.navigate('BecomeMentorForm')}>
                        <Text style={styles.BtnText}>Become a Mentor</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        //marginHorizontal:8,
        paddingVertical:30
    },
    BackImg: {
        width: "100%",
        height: 280
    },
    TextStyleView: {
        padding: 20
    },
    TextFirstLine: {
        width: '70%',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    TextSecondLine: {
        width: '70%',
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 4,
    },
    TextParagraph: {
        width: '70%',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 4,
    },
    BtnView: {
        width: '60%',
        padding:8
    },
    BtnStyle: {
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 25,
        width: "90%",
        alignSelf: 'center'
    },
    BtnText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#37687a'
    }
})

export default BecomeMentor


