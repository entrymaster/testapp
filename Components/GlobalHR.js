import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native';

const GlobalHR = () => {

    const DATA = [
        {
            id: '1',
            image: require('../assets/globalHr.jpg'),
            text: 'HR Analytics for Talent Acquisition',
            paragraph: 'THE SOLE aim of employing HR analytics for Talent acquisition is to improve employee and getting a better return on investment'
        },
        {
            id: '2',
            image: require('../assets/globalHr.jpg'),
            text: 'HR Analytics for Talent Acquisition',
            paragraph: 'THE SOLE aim of employing HR analytics for Talent acquisition is to improve employee and getting a better return on investment'
        },
        {
            id: '3',
            image: require('../assets/globalHr.jpg'),
            text: 'HR Analytics for Talent Acquisition',
            paragraph: 'THE SOLE aim of employing HR analytics for Talent acquisition is to improve employee and getting a better return on investment'
        },
    ];

    return (
        <View style={styles.maincontainer}>
            <View>
               
             
                <ScrollView style={styles.ScrollView} horizontal={true}>
                    <FlatList
                        data={DATA}
                        numColumns={3}
                        contentContainerStyle={styles.flatList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.FlatList}>
                                <TouchableOpacity style={styles.BgImg}>
                                    <Image source={item.image} style={styles.Images} />
                                </TouchableOpacity>
                                <Text style={styles.FlatListText}>{item.text}</Text>
                                <Text style={styles.TextParagraph}>{item.paragraph}</Text>
                            </View>
                        )}
                    />
                </ScrollView>
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
        paddingVertical: 15,
        backgroundColor: '#fff'
    },
    event_Container: {
        padding: 16
    },
    event_Heading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#f0333c'
    },
    event_itemContainer: {
        borderTopWidth: 2,
        borderColor: '#c2c2c2',
        padding: 14,
        width: '92%',
        alignSelf: 'center'
    },
    FlatList: {
        width: 270,
        backgroundColor: "#fff",
        // borderWidth : 1,
        borderRadius: 25,
        borderColor : '#c5c5c5',
        marginHorizontal: 4,
        shadowColor: 'rgba(0,0,0,0.4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 10,
        shadowRadius: 5,
        margin:5,
        elevation: 2, // 

    },
    FlatListText: {
        fontSize: 14,
        paddingHorizontal: 12,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    BgImg: {
        paddingTop: 10
    },
    Images: {
        width: '92%',
        height: 130,
        alignSelf: 'center',
    },
    TextParagraph: {
        padding: 12,
        fontSize: 12,
        color: '#c5c5c5'
    },
    event_ViewMore: {
        borderBottomWidth: 2,
        width: '92%',
        alignSelf: 'center',
        borderColor: '#c2c2c2'
    },
    event_ViewText: {
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 8,
        alignSelf: 'flex-end',
        color: '#f0333c'
    },
})

export default GlobalHR;