import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const TascentMentorshipAbout = () => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.itemContainer}>
                <View style={styles.BgImg}>
                    <Image source={require('../assets/mentorship_1.jpg')} style={styles.Images} />
                </View>
                <View style={styles.TextView}>
                    <Text style={styles.HeadingText}>Manish harlalka</Text>
                    <View style={styles.ParagraphView}>
                    <Text style={styles.ParagraphText}>As a young inner-city child in a single-parent household,</Text>
                    <Text style={styles.ParagraphText}>Joe was one of many young people facing an opportunity</Text>
                    <Text style={styles.ParagraphText}>gap – as he describes it,“the odds were stacked against</Text>
                    <Text style={styles.ParagraphText}>me.” Robin became Joeʼs mentor when he was just
                        8 years old, and they both saw immediate changes
                        notably in the improvement of Joeʼs grades. But the
                        changes, a “ripple effect,” as Joe notes, would extend
                        far beyond that.
                    </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1
    },
    itemContainer: {
        //padding: 12
    },
    BgImg: {
        paddingTop: 10
    },
    Images: {
        width: '100%',
        height: 235,
        alignSelf: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    TextView: {
        padding: 16,
        backgroundColor: '#37687a',
        borderBottomLeftRadius:16,
        borderBottomRightRadius:16
    },
    HeadingText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    ParagraphView:{
        paddingTop:16
    },
    ParagraphText: {
        fontSize: 15,
        paddingTop: 4,
        color: '#fff'
    }

})

export default TascentMentorshipAbout


