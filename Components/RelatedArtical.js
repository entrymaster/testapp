import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, FlatList, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const RelatedArtical = () => {

    const DATA = [
        {
            id: '1',
            image: require('../assets/Lartical.png'),
            text: 'Build Aptitude & Correct Attitude',
            shareicon: "share-square",
            datetext: 'June 23,2021',
            course: 'Read More',
            paratext: 'You need to have the right balance is a term you must have heard so many times regarding...'
        },
        {
            id: '2',
            image: require('../assets/Lartical.png'),
            text: 'Build Aptitude & Correct Attitude',
            shareicon: "share-square",
            datetext: 'June 23,2021',
            course: 'Read More',
            paratext: 'You need to have the right balance is a term you must have heard so many times regarding...'
        },
        {
            id: '3',
            image: require('../assets/Lartical.png'),
            shareicon: "share-square",
            text: 'Build Aptitude & Correct Attitude',
            datetext: 'June 23,2021',
            course: 'Read More',
            paratext: 'You need to have the right balance is a term you must have heard so many times regarding...'
        },
    ];

    return (
        <View style={styles.maincontainer}>
            <View>


                <View style={styles.ScrollView}>
                    <FlatList
                        data={DATA}
                        // numColumns={3}
                        horizontal
                        contentContainerStyle={styles.flatList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.FlatList}>
                                <Image source={item.image} style={styles.Images} />
                                <View style={{ padding: 16, paddingHorizontal: 12 }}>
                                    <Text style={styles.dateText}>{item.datetext}</Text>
                                    <Text style={styles.FlatListText}>{item.text}</Text>
                                    <Text style={styles.paraText}>{item.paratext}</Text>
                                </View>
                                <View style={styles.TopBorderStyle}>


                                    <TouchableOpacity style={styles.ShareIconview}>
                                        <FontAwesome name={item.shareicon} size={16} color="#F02F39" />
                                        <Text style={styles.TextCourse}>{item.course}</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        )}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.event_ViewText}>View More</Text>
                </TouchableOpacity>
                <View style={styles.event_ViewMore}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        paddingVertical: 25
    },
    bgImages: {
        width: '100%',
        height: 150,

    },
    BgTextView: {
        padding: 18
    },
    BgText: {
        color: '#fff',
        fontSize: 14
    },
    bgText: {
        fontSize: 18,
        color: '#fff',
        marginTop: 8
    },

    FlatList: {
        width: 280,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        margin: 5,
        elevation: 5,

    },
    FlatListText: {
        fontSize: 18,
        paddingBottom: 6,
        fontWeight: 'bold',
       
        
    },
    dateText: {
        
        paddingBottom: 6
    },
    paraText: {
        
        paddingBottom: 6,
        color: '#A2A2A2'
    },
    Images: {
        width: '100%',
        height: 140,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },

    TopBorderStyle: {
        borderTopWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderColor: '#D1D0D0'
    },

    TextCourse: {

        fontSize: 13,
        color: '#F02F39',
        paddingLeft: 6
    },

    event_ViewText: {
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 8,
        alignSelf:'flex-end',
        color: '#f0333c'
    },

    ShareIconview: {
        flexDirection: 'row',
       paddingVertical:12
        // padding: 12
    }
})

export default RelatedArtical;