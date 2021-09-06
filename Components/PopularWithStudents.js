import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const PopularWithStudents = () => {
    const DATA = [
        {
            id: '1',
            image: require('../assets/bootcamp.jpg'),
            text: 'The Complete 2021 Web Development Bootcamp',
            nitimage: require('../assets/udemy-2-logo.png'),
            review: '4.7',
            star: 'star',
            halfstar: "star-half-empty",
            NumText: '(138,087)',
            rupey: "rupee",
            money: '455',
            course: 'View course'
        },
        {
            id: '2',
            image: require('../assets/excel.jpg'),
            text: 'The Complete 2021 Web Development Bootcamp',
            nitimage: require('../assets/udemy-2-logo.png'),

            review: '4.7',
            star: 'star',
            halfstar: "star-half-empty",
            NumText: '(138,087)',
            rupey: "rupee",
            money: '455',
            course: 'View course'
        },
        {
            id: '3',
            image: require('../assets/money.jpg'),
            text: 'The Complete 2021 Web Development Bootcamp',
            nitimage: require('../assets/udemy-2-logo.png'),

            review: '4.7',
            star: 'star',
            halfstar: "star-half-empty",
            NumText: '(138,087)',
            rupey: "rupee",
            money: '455',
            course: 'View course'
        },
    ];
    return (



        <View style={styles.maincontainer}>
            <View>


                <View style={styles.ScrollView}>
                    <FlatList
                        data={DATA}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.flatList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.FlatList}>
                                <Image source={item.image} style={styles.Images} />
                                <Text style={styles.FlatListText}>{item.text}</Text>
                                <View style={styles.ReviewStyle}>
                                    <Text style={styles.ReviewText}>{item.review}</Text>
                                    <View style={styles.ReviewIcon}>
                                        <FontAwesome name={item.star} size={14} color="#FFB653" style={styles.StarIcon} />
                                        <FontAwesome name={item.star} size={14} color="#FFB653" style={styles.StarIcon} />
                                        <FontAwesome name={item.star} size={14} color="#FFB653" style={styles.StarIcon} />
                                        <FontAwesome name={item.star} size={14} color="#FFB653" style={styles.StarIcon} />
                                        <FontAwesome name={item.halfstar} size={14} color="#FFB653" style={styles.StarIcon} />
                                    </View>
                                    <Text style={styles.ReviewTextSecond}>{item.NumText}</Text>
                                </View>
                                <View style={styles.NITImgView}>
                                    <Image source={item.nitimage} style={styles.NITTImages} />
                                </View>
                                <View style={styles.TopBorderStyle}>
                                    <View style={styles.BottomViewStyle}>
                                        <View style={styles.rupeeIconView}>
                                            <FontAwesome name={item.rupey} size={14} color="black" style={styles.rupeeIcon} />
                                            <Text style={styles.TextMoney}>{item.money}</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <Text style={styles.TextCourse}>{item.course}</Text>
                                        </TouchableOpacity>
                                    </View>
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
    event_HeadigView: {
        padding: 16
    },
    event_HeadingText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#f5433a'
    },
    event_borderBottom: {
        borderBottomWidth: 2,
        borderBottomColor: '#bfbfbf',
        width: '90%',
        alignSelf: 'center',
    },
    ScrollView: {
        //marginTop: 20
    },
    FlatList: {
        width: 250,
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
        fontSize: 14,
        paddingLeft: 12,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    Images: {
        width: '100%',
        height: 140,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    ReviewStyle: {
        flexDirection: 'row',
        padding: 14
    },
    ReviewText: {
        color: '#B9B9B9'
    },
    ReviewIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 6
    },
    StarIcon: {
        paddingLeft: 3
    },
    ReviewTextSecond: {
        fontSize: 12,
        paddingLeft: 10,
        color: '#B9B9B9'
    },
    TopBorderStyle: {
        borderTopWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderColor: '#D1D0D0'
    },
    BottomViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 12
    },
    TextMoney: {
        fontWeight: 'bold',
        paddingLeft: 4
    },
    TextCourse: {
        paddingRight: 10,
        fontSize: 13,
        color: '#907EC8'
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
    rupeeIconView: {
        flexDirection: 'row',
        paddingLeft: 2
    },
    rupeeIcon: {
        alignSelf: 'center',
        marginTop: 2
    },
    NITImgView: {
        // flexDirection:'row',
        paddingBottom: 10,
        paddingLeft: 6
    },
    NITTImages: {
        width: 100,
        height: 45
    },
    NITTText: {
        fontSize: 14,
        alignItems: 'center',
        fontWeight: 'bold',
        padding: 3
    }
})
export default PopularWithStudents
