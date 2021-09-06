import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'

const MentoringProgram = () => {
    return (
        <View style={styles.MainContainer}>
            <ImageBackground source={require('../assets/mentoring.png')} style={styles.BackImg}>
                <View style={styles.TextStyleView}>
                    <Text style={styles.TextFirstLine}>Search for a Local</Text>
                    <Text style={styles.TextSecondLine}>Mentoring Program</Text>
                    <View style={styles.ParagrapghView}>
                    <Text style={styles.TextParagraph}>The Mentoring Connector is a volunteer recruitment tool for programs. </Text>
                    <Text style={styles.TextParagraph}>f you are searching to find a mentor, we encourage you to use these</Text>
                    <Text style={styles.TextParagraph}>results to contact the program outside ofthis system.</Text>
                </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        //marginHorizontal: 8
    },
    BackImg: {
        width: "100%",
        height: 300
    },
    TextStyleView: {
        padding: 16,
        paddingTop: 60
    },
    TextFirstLine: {
        width: '70%',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    TextSecondLine: {
        width: '70%',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 4,
    },
    ParagrapghView:{
        paddingVertical:12
    },
    TextParagraph: {
        width: '80%',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 4,
    },
})

export default MentoringProgram


