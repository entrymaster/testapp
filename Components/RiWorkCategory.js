
import React from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, Text } from 'react-native'


const RiWorkCategory = props => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.categoryRow}>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/graphicDesigners.png')} />
                    <Text style={styles.categoryHeading}>Graphic Designers</Text>
                </View>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/AppDeveloper.png')} />
                    <Text style={styles.categoryHeading}>App Developers</Text>
                </View>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/dataEntry.png')} />
                    <Text style={styles.categoryHeading}>Data Entry</Text>
                </View>
            </View>
            <View style={styles.categoryRow}>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/writer.png')} />
                    <Text style={styles.categoryHeading}>Writers & Translators</Text>
                </View>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/WebMobile.png')} />
                    <Text style={styles.categoryHeading}>Web & Mobile Design</Text>
                </View>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/voiceOver.png')} />
                    <Text style={styles.categoryHeading}>Voice Over Artist</Text>
                </View>
            </View>
            <View style={styles.categoryRow}>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/VideoAnimation.png')} />
                    <Text style={styles.categoryHeading}>Video & Animation</Text>
                </View>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/blogger.png')} />
                    <Text style={styles.categoryHeading}>Blogger</Text>
                </View>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/seoSme.png')} />
                    <Text style={styles.categoryHeading}>SEO/SEM</Text>
                </View>
            </View>
            <View style={styles.categoryRow}>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/resumeIcon.png')} />
                    <Text style={styles.categoryHeading}>Resume & Cover Letters</Text>
                </View>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/2d-3d.png')} />
                    <Text style={styles.categoryHeading}>2D/3D designers</Text>
                </View>
                <View style={styles.iconAndHead}>
                    <Image style={styles.categoryIcon} source={require('../assets/digitalMarketing.png')} />
                    <Text style={styles.categoryHeading}>Digital Marketing</Text>
                </View>
            </View>


        </View>

    );
};

const styles = StyleSheet.create({

    categoryIcon: {
        height: 50,
        width: 50,
        marginBottom: 10
    },
    iconAndHead: {
        alignContent: 'center',
        //flexDirection:'row',
        justifyContent: 'center',
        width: '33%',
        alignItems: 'center',

        backgroundColor: "white",
        margin: 10,


    },
    categoryHeading: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    categoryRow: {
        flexDirection: 'row', justifyContent: "center", alignSelf: 'center', width: '90%'
    }
});
export default RiWorkCategory;
