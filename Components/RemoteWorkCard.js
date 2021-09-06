import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text, Image, FlatList, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, EvilIcons } from '@expo/vector-icons';


const RemoteWorkCard = (props) => {

    const [heartKey, setHeartKey] = useState(true)

    const navigation = useNavigation();

    let sectionHeading = props.SectionHeading

    const articleType = props.articleType

    const HeartKeyHandler = () => {
        setHeartKey(!heartKey)
    }

    // ------Trending Jobs-------
    const DATA = [
        {
            id: '1',
            image: require('../assets/bootcamp.jpg'),
            text: 'I can create a professional customised Youtube banner',
            rupey: "rupee",
            money: '1947',
            chat: 'Chat',
            imagesIcon: require('../assets/amanKhare.png'),
            heart: "heart",
            name: 'Sahilbhat',
            position: 'Logo',
            heartIcon: 'heart'
        },
        {
            id: '2',
            image: require('../assets/bootcamp.jpg'),
            text: 'I can create a professional customised Youtube banner',
            rupey: "rupee",
            money: '1947',
            chat: 'Chat',
            imagesIcon: require('../assets/amanKhare.png'),
            heart: "heart",
            name: 'Sahilbhat',
            position: 'Logo',
            heartIcon: 'heart'
        },
        {
            id: '3',
            image: require('../assets/bootcamp.jpg'),
            text: 'I can create a professional customised Youtube banner',
            rupey: "rupee",
            money: '1947',
            chat: 'Chat',
            imagesIcon: require('../assets/amanKhare.png'),
            heart: "heart",
            name: 'Sahilbhat',
            position: 'Logo',
            heartIcon: 'heart'
        },
    ];

    const RemoteDATA = [
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


    const remoteSwitch = (type) => {
        switch (type) {
            case "TrendingRemote":
                return (

                    <View style={styles.maincontainer}>
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
                                        <View style={styles.itemContainer}>
                                            <View style={styles.ImageLogo}>
                                                <Image source={item.imagesIcon} style={styles.ImagesIcon} />
                                                <View style={styles.NameTextView}>
                                                    <Text style={styles.nameText}>{item.name}</Text>
                                                    <Text>{item.position}</Text>
                                                </View>
                                            </View>
                                            <TouchableOpacity onPress={() => HeartKeyHandler()}>
                                                {heartKey ?
                                                    <EvilIcons name={item.heart} size={40} color="#0000004D" style={styles.heartIcon} /> :

                                                    <FontAwesome name={item.heartIcon} size={30} color="#F02F39" style={styles.heartIcon} />}
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.FlatListText}>{item.text}</Text>
                                        <View style={styles.TopBorderStyle}>
                                            <View style={styles.BottomViewStyle}>
                                                <TouchableOpacity>
                                                    <Text style={styles.TextCourse}>{item.chat}</Text>
                                                </TouchableOpacity>
                                                <View style={styles.rupeeIconView}>
                                                    <FontAwesome name={item.rupey} size={17} color="#00B047" style={styles.rupeeIcon} />
                                                    <Text style={styles.TextMoney}>{item.money}</Text>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>

                    </View>
                );
                break;

            case "RemoteWorkArtical":
                return (
                    <View style={styles.maincontainer}>
                        <View>


                            <View style={styles.ScrollView}>
                                <FlatList
                                    data={RemoteDATA}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    contentContainerStyle={styles.flatList}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => (
                                        <View style={styles.FlatList}>
                                            <Image source={item.image} style={styles.Images} />
                                            <View style={{ padding: 16, paddingHorizontal: 12 }}>
                                                <Text style={styles.dateText}>{item.datetext}</Text>
                                                <Text style={styles.FlatListTextStyle}>{item.text}</Text>
                                                <Text style={styles.paraText}>{item.paratext}</Text>
                                            </View>
                                            <View style={styles.TopBorderStyle}>


                                                <TouchableOpacity style={styles.ShareIconview}>
                                                    <FontAwesome name={item.shareicon} size={16} color="#F02F39" />
                                                    <Text style={styles.TextRead}>{item.course}</Text>
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
                );
                break;

            case "LatestArtical":
                return (
                    <View style={styles.maincontainer}>
                        <View>


                            <View style={styles.ScrollView}>
                                <FlatList
                                    data={RemoteDATA}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    contentContainerStyle={styles.flatList}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => (
                                        <View style={styles.FlatList}>
                                            <Image source={item.image} style={styles.Images} />
                                            <View style={{ padding: 16, paddingHorizontal: 12 }}>
                                                <Text style={styles.dateText}>{item.datetext}</Text>
                                                <Text style={styles.FlatListTextStyle}>{item.text}</Text>
                                                <Text style={styles.paraText}>{item.paratext}</Text>
                                            </View>
                                            <View style={styles.TopBorderStyle}>


                                                <TouchableOpacity style={styles.ShareIconview}>
                                                    <FontAwesome name={item.shareicon} size={16} color="#F02F39" />
                                                    <Text style={styles.TextRead}>{item.course}</Text>
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
                );

            default:
                console.log("Article type not found");
        }
    };

    return <View>{remoteSwitch(props.remoteType)}</View>;
};
const styles = StyleSheet.create({

    // -----trending jobs------
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
        width: 280,
        backgroundColor: "#fff",
        margin: 8,
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,

        elevation: 5,
        marginBottom: 20
    },
    FlatListText: {
        fontSize: 14,
        paddingLeft: 12,
        paddingTop: 10,
        fontWeight: 'bold',
        height: 75
    },
    Images: {
        width: 280,
        height: 170,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    TopBorderStyle: {
        borderTopWidth: 1,
        width: '100%',
        alignSelf: 'center',
        borderColor: '#D1D0D0'
    },
    BottomViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },
    TextMoney: {
        fontWeight: 'bold',
        paddingLeft: 4,
        fontSize: 16,
        color: '#00B047'
    },
    TextCourse: {
        paddingRight: 10,
        fontSize: 18,
        color: '#0090FF'
    },
    rupeeIconView: {
        flexDirection: 'row',
        paddingLeft: 2
    },
    rupeeIcon: {
        alignSelf: 'center',
        marginTop: 2
    },
    ImagesIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    ImageLogo: {
        flexDirection: 'row'
    },
    NameTextView: {
        paddingLeft: 8
    },
    nameText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
    },

    // -----trending jobs------
    FlatListTextStyle: {
        fontSize: 15,
        paddingBottom: 6,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20
    },
    dateText: {
        textAlign: 'center',
        paddingBottom: 6,
        color: '#000'
    },
    paraText: {
        textAlign: 'center',
        paddingBottom: 6,
        color: '#A2A2A2'
    },

    TextRead: {

        fontSize: 13,
        color: '#F02F39',
        paddingLeft: 6
    },

    event_ViewText: {
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 8,
        alignSelf: 'flex-end',
        color: '#f0333c'
    },

    ShareIconview: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        padding: 12
    }
});
export default RemoteWorkCard;
