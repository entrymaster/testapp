import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'

const PreviousEvent = () => {

    const DATA = [
        {
            id: '1',
            image: require('../assets/preeventimg.jpg'),
            text: 'June 23,2021',
            heading: 'Previous Conference Event Number 02',
            paragraph: 'You need to have the right balance is a term you must...'
        },
        {
            id: '2',
            image: require('../assets/preeventimg.jpg'),
            text: 'June 23,2021',
            heading: 'Previous Conference Event Number 02',
            paragraph: 'You need to have the right balance is a term you must...'
        },
        {
            id: '3',
            image: require('../assets/preeventimg.jpg'),
            text: 'June 23,2021',
            heading: 'Previous Conference Event Number 02',
            paragraph: 'You need to have the right balance is a term you must...'
        },
    ];

    return (
        <View >
            <View style={styles.event_Container}><Text style={styles.event_Heading}>PREVIOUS EVENTS</Text></View>
            <View style={styles.event_itemContainer}></View>
            <ScrollView style={styles.event_ScrollView} horizontal={true} >
                <FlatList
                    data={DATA}
                    numColumns={3}
                    contentContainerStyle={styles.flatList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.event_FlatList}>
                            <TouchableOpacity><Image source={item.image} style={styles.Images} /></TouchableOpacity>
                            <View style={styles.event_TextView}>
                                <Text style={styles.event_CardTextFirst}>{item.text}</Text>
                                <Text style={styles.event_CardTextsecond}>{item.heading}</Text>
                                <Text style={styles.event_CardTextThird}>{item.paragraph}</Text>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
            <TouchableOpacity>
                <Text style={styles.event_ViewText}>View More</Text>
            </TouchableOpacity>
            <View style={styles.event_ViewMore}></View>
        </View>

    )
}

const styles = StyleSheet.create({
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
    event_FlatList: {
        width: 270,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginHorizontal: 4
    },
    event_CardTextFirst: {
        fontSize: 14,
        paddingLeft: 12,
        paddingTop: 10,
        fontWeight: 'bold',
        color:'#737373'
    },
    Images: {
        width: '100%',
        height: 170,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    event_TextView: {
        padding: 11
    },
    event_CardTextsecond: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 12
    },
    event_CardTextThird: {
        paddingHorizontal: 12,
        fontSize: 15,
        color: '#a6a6a6',
        paddingBottom: 8
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
    }

})

export default PreviousEvent