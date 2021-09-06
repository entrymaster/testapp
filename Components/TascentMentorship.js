import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'

const TascentMentorship = () => {
    return (
        <View style={styles.MainContainer}>
            <ImageBackground source={require('../assets/mentorshipBgImg.jpg')} style={styles.BackImg}>
                <View style={styles.TextStyleView}>
                    <Text style={styles.TextFirstLine}>Welcome to the</Text>
                    <Text style={styles.TextSecondLine}>Mentorship Program</Text>
                </View>
            </ImageBackground>
            <View style={styles.itemContanier}>
                <Text style={styles.HeadingText}>LOOKING FOR A MENTOR</Text>
                <Text style={styles.ParagraphText}>Are you a parent, guardian, teacher, or caring adult to a young person who you feel could benefit from a mentor?
                    Or are you a young person who wants to connect with a
                    mentor? Mentors are supportive individuals who build
                    relationships with young people by offering them
                    guidance, support, and encouragement to help cultivate
                    positive and healthy development – many of the same
                    things you do. Mentors are not meant to replace parents,
                    guardians, or teachers, or to play the role of disciplinarians
                    or decision makers. Rather, they become part of a team of
                    caring adults to that young person. Mentors can help
                    encourage positive choices, promote high self-esteem,
                    support academic achievement and introduce new ideas.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    },
    BackImg: {
        width: "100%",
        height: 200
    },
    TextStyleView: {
        padding: 30
    },
    TextFirstLine: {
        width: '50%',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    TextSecondLine: {
        width: '50%',
        color: '#fff',
        fontSize: 27,
        fontWeight: 'bold',
        paddingTop: 4,
        lineHeight: 35
    },
    TextParagraph: {
        width: '45%',
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 16
    },
    itemContanier: {
        paddingHorizontal: 30,
        paddingTop:20
    },
    HeadingText: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold'
    },
    ParagraphText:{
        fontSize:14,
        paddingTop:16,
    }
})

export default TascentMentorship


