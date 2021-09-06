import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

const PopularEvent = () => {

    const DATA = [
        {
            id: '1',
            text: 'Lorem Ipsum Event Lorem Tpsum Event'

        },
        {
            id: '2',
            text: 'Lorem Ipsum Event Lorem Tpsum Event'

        },
        {
            id: '3',
            text: 'Lorem Ipsum Event Lorem Tpsum Event'

        },
        {
            id: '4',
            text: 'Lorem Ipsum Event Lorem Tpsum Event'

        },
        {
            id: '5',
            text: 'Lorem Ipsum Event Lorem Tpsum Event'

        },
        {
            id: '6',
            text: 'Lorem Ipsum Event Lorem Tpsum Event'

        },
        {
            id: '7',
            text: 'Lorem Ipsum Event Lorem Tpsum Event'

        },
        {
            id: '8',
            text: 'Lorem Ipsum Event Lorem Tpsum Event'

        },
    ]

    return (
        <View style={styles.event_Container}>
            <Text style={styles.event_Heading}>POPULAR EVENTS</Text>
            <View style={styles.event_itemContainer}>
                <View style={styles.event_FlatlistView}></View>
                <FlatList
                    data={DATA}
                    contentContainerStyle={styles.flatList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.event_TextView}>
                            <Text style={styles.event_Text}>{item.text}</Text>
                        </View>
                    )}
                />
                <TouchableOpacity>
                    <View style={styles.event_ViewMore}>
                        <Text style={styles.event_ViewMoreText}>View More</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    event_Container: {
        //padding:18
    },
    event_Heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f02f40'
    },
    event_itemContainer: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#bfbfbf',
        paddingBottom: 10,
        marginTop: 14
    },
    event_FlatlistView: {
        padding: 10,
    },
    event_TextView: {
        padding: 2
    },
    event_Text: {
        fontSize: 16,
        color: '#a2a2a2'
    },
    event_ViewMore: {
        paddingTop: 14,
        alignItems: 'flex-end'
    },
    event_ViewMoreText: {
        color: '#f02f40'
    }
})

export default PopularEvent