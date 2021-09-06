import React from 'react'
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';

const OffineCourseScreen = () => {
    const DATA = [
        {
            id: '1',
            image: require('../assets/design.jpg'),
            text: 'Design'
        },
        {
            id: '2',
            image: require('../assets/development.jpg'),
            text: 'Development'
        },
        {
            id: '3',
            image: require('../assets/marketing.jpg'),
            text: 'Marketing'
        },
        {
            id: '4',
            image: require('../assets/Technology.jpg'),
            text: 'Technology'
        },
        {
            id: '5',
            image: require('../assets/Business.jpg'),
            text: 'Business'
        },
        {
            id: '6',
            image: require('../assets/Health.jpg'),
            text: 'Health'
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.itemcontainer}>
                <Text style={styles.TextHeading}>OFFLINE COURSE</Text>
                <View style={styles.BorderView}>
                    <FlatList
                        data={DATA}
                        contentContainerStyle={styles.flatList}
                        keyExtractor={item => item.id}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <View style={styles.FlatList}>
                                <TouchableOpacity>
                                    <ImageBackground source={item.image} style={styles.Images}>
                                        <View style={styles.BgTextView}>
                                            <Text style={styles.BgText}>{item.text}</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    <TouchableOpacity>
                        <View style={styles.TextView}><Text style={styles.TextStyle}>View more</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
       margin: 16
    },
    // itemcontainer: {
       
    //     padding: 16
    // },
    Images: {
        width: 98,
        height: 108,
        resizeMode: 'contain',
        marginTop: 10,
    },
    FlatList: {
        flex: 1,
        alignItems: 'center',
        
    },
    TextView: {
        marginTop: 30
    },
    TextStyle: {
        alignSelf: 'flex-end',
        bottom: 10,
        color: 'red',
        fontSize: 15,
        fontWeight: "bold"
    },
    BorderView: {
        marginTop: 15,
    },
    TextHeading: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'red'
    },
    BgTextView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    BgText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#fff'
    }
})

export default OffineCourseScreen