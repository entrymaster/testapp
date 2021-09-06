import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, FlatList, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native';

const HRExpert = () => {

    const DATA = [
        {
            id: '1',
            image: require('../assets/HrExpert.jpg'),
            text: 'HR Analytics for Talent Acquisition',
            paragraph: 'THE SOLE aim of employing HR analytics for Talent acquisition is to improve employee and getting a better return on investment'
        },
        {
            id: '2',
            image: require('../assets/HrExpert.jpg'),
            text: 'HR Analytics for Talent Acquisition',
            paragraph: 'THE SOLE aim of employing HR analytics for Talent acquisition is to improve employee and getting a better return on investment'
        },
        {
            id: '3',
            image: require('../assets/HrExpert.jpg'),
            text: 'HR Analytics for Talent Acquisition',
            paragraph: 'THE SOLE aim of employing HR analytics for Talent acquisition is to improve employee and getting a better return on investment'
        },
    ];

    return (
        <View style={styles.maincontainer}>
            <View>
                <ImageBackground source={require('../assets/sellingbgimg.jpg')} style={styles.bgImages}>
                    <View style={styles.BgTextView}>
                        <Text style={styles.BgText}>Best selleing Courses</Text>
                        <Text style={styles.bgText}>Enhance your skills with{'\n'}best selling courses</Text>
                    </View>
                </ImageBackground>

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
        paddingVertical: 25,
        backgroundColor: '#fff',
        //paddingHorizontal:8
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
    ScrollView: {
        marginTop: 10
    },
    FlatList: {
        width: 270,
        backgroundColor: "#fff",
        borderRadius: 25,
        marginHorizontal: 4,
        shadowColor: 'rgba(0,0,0, 0.9)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        // borderWidth: 1,
        borderColor: '#fff',
        elevation: 2, 
        margin:8

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
    TextParagraph:{
        padding:12,
        fontSize:12,
        color:'#c5c5c5'
    },
    event_ViewMore: {
        borderBottomWidth: 2,
        width: '100%',
        alignSelf: 'center',
        borderColor: '#c2c2c2'
    },
    event_ViewText: {
        //paddingHorizontal: ,
        paddingTop: 18,
        paddingBottom: 8,
        alignSelf: 'flex-end',
        color: '#f0333c'
    },
})

export default HRExpert;