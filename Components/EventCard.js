import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import HeadingsForSection from './HeadingsForSection';

const EventCard = (props) => {


    const DATA = [
        {
            id: '1',
            image: require('../assets/eventgirl.jpg'),
            text: 'Job Conference Event Number 02',
            month: 'SEP',
            date: '18',
            paragraph: 'You need to have the right balance is a term you must...'
        },
        {
            id: '2',
            image: require('../assets/eventgirl.jpg'),
            text: 'Job Conference Event Number 02',
            month: 'SEP',
            date: '18',
            paragraph: 'You need to have the right balance is a term you must...'
        },
        {
            id: '3',
            image: require('../assets/eventgirl.jpg'),
            text: 'Job Conference Event Number 02',
            month: 'SEP',
            date: '18',
            paragraph: 'You need to have the right balance is a term you must...'
        },
    ];

    //Webinars
    const data = [
        {
            id: '1',
            image: require('../assets/webinarimg.jpg'),
            text: 'Webinar Conference Event Number 02',
            month: 'SEP',
            date: '18',
            paragraph: 'You need to have the right balance is a term you must...'
        },
        {
            id: '2',
            image: require('../assets/webinarimg.jpg'),
            text: 'Webinar Conference Event Number 02',
            month: 'SEP',
            date: '18',
            paragraph: 'You need to have the right balance is a term you must...'
        },
        {
            id: '3',
            image: require('../assets/webinarimg.jpg'),
            text: 'Webinar Conference Event Number 02',
            month: 'AUG',
            date: '17',
            paragraph: 'You need to have the right balance is a term you must...'
        },
    ];

    // PreviousEvent
    const PREEVENT = [
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

    const articleSwitch = (type) => {
        switch (type) {
            case "UpComing":
                return (
                    <View style={styles.maincontainer}>
                        <View style={styles.event_HeadigView}>
                            <HeadingsForSection title={'UPCOMING EVENT'} />
                        </View>

                        <View style={styles.event_ScrollView} >
                            <FlatList
                                data={DATA}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.flatList}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <View style={styles.event_FlatList}>
                                        <Image source={item.image} style={styles.event_Images} />
                                        <View style={styles.event_CardStyle}>
                                            <View>
                                                <Text style={styles.event_monthText}>{item.month}</Text>
                                                <Text style={styles.event_dateText}>{item.date}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.event_CardTextHeading}>{item.text}</Text>
                                                <Text style={styles.event_CardTextParagraph}>{item.paragraph}</Text>
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

                );
                break;

            case "Webinars":
                return (
                    <View style={styles.maincontainer}>
                        <View style={styles.event_HeadigView}>
                            <HeadingsForSection title={'WEBINARS'} />
                        </View>

                        <View style={styles.event_ScrollView} >
                            <FlatList
                                data={data}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.flatList}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <View style={styles.event_FlatList}>
                                        <Image source={item.image} style={styles.event_Images} />
                                        <View style={styles.event_CardStyle}>
                                            <View>
                                                <Text style={styles.event_monthText}>{item.month}</Text>
                                                <Text style={styles.event_dateText}>{item.date}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.event_CardTextHeading}>{item.text}</Text>
                                                <Text style={styles.event_CardTextParagraph}>{item.paragraph}</Text>
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

                );
                break;

            case "Previous":
                return (
                    <View style={styles.maincontainer} >
                        <View style={styles.event_HeadigView}><HeadingsForSection title={'PREVIOUS EVENT'} /></View>
                        <View style={styles.event_ScrollView} >
                            <FlatList
                                data={PREEVENT}
                                horizontal
                                showsHorizontalScrollIndicator={false}
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
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.event_ViewText}>View More</Text>
                        </TouchableOpacity>
                        <View style={styles.event_ViewMore}></View>
                    </View>

                );
                break;
            default:
                console.log("Article type not found");

        }
    }
    return <View>{articleSwitch(props.articleType)}</View>;
};

const styles = StyleSheet.create({

    event_HeadigView: {
        //padding: 16
    },
    event_ScrollView: {
        paddingTop: 12

    },
    // event_FlatList: {
    //     width: 300,
    //     backgroundColor: "#fff",
    //     borderRadius: 12,
    //     marginHorizontal: 4,
    // },
    event_Images: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    event_CardStyle: {
        flexDirection: 'row',
        padding: 18
    },
    event_monthText: {
        color: '#9663da',
        fontSize: 16,
        paddingTop: 2
    },
    event_dateText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 7
    },
    event_CardTextHeading: {
        fontSize: 17,
        paddingHorizontal: 30,
        color: '#000',
        fontWeight: 'bold'
    },
    event_ViewMore: {
        borderBottomWidth: 2,
        width: '100%',
        alignSelf: 'center',
        borderColor: '#c2c2c2'
    },
    event_ViewText: {
        //paddingHorizontal: 16,
        paddingTop: 22,
        paddingBottom: 8,
        alignSelf: 'flex-end',
        color: '#f0333c'
    },
    event_CardTextParagraph: {
        fontSize: 16,
        color: '#a2a2a2',
        paddingHorizontal: 30,
        paddingTop: 10
    },

    // WebinarsEvent
    // event_HeadigView: {
    //     padding: 18
    // },
    // event_HeadingText: {
    //     fontSize: 17,
    //     fontWeight: 'bold',
    //     color: '#f5433a'
    // },
    // event_borderBottom: {
    //     borderBottomWidth: 2,
    //     borderBottomColor: '#bfbfbf',
    //     width: '90%',
    //     alignSelf: 'center',
    // },
    // event_ScrollView: {
    //     paddingTop: 30

    // },
    // event_FlatList: {
    //     width: 300,
    //     backgroundColor: "#fff",
    //     borderRadius: 15,
    //     marginHorizontal: 4,
    // },
    // event_Images: {
    //     width: '100%',
    //     height: 160,
    //     borderTopLeftRadius: 15,
    //     borderTopRightRadius: 15
    // },
    // event_CardStyle: {
    //     flexDirection: 'row',
    //     padding: 18
    // },
    // event_monthText: {
    //     color: '#9663da',
    //     fontSize: 16,
    //     paddingTop: 2
    // },
    // event_dateText: {
    //     fontSize: 25,
    //     fontWeight: 'bold',
    //     paddingTop: 7
    // },
    // event_CardTextHeading: {
    //     fontSize: 20,
    //     paddingHorizontal: 30,
    //     color: '#000',
    //     fontWeight: 'bold'
    // },
    // event_ViewMore: {
    //     borderBottomWidth: 2,
    //     width: '92%',
    //     alignSelf: 'center',
    //     borderColor: '#c2c2c2'
    // },
    // event_ViewMoreText: {
    //     color: '#F02F39',
    //     fontWeight: 'bold'
    // },
    // event_CardTextParagraph: {
    //     fontSize: 16,
    //     color: '#a2a2a2',
    //     paddingHorizontal: 30,
    //     paddingTop: 10
    // },
    // event_ViewText: {
    //     paddingHorizontal: 16,
    //     paddingTop: 18,
    //     paddingBottom: 8,
    //     alignSelf: 'flex-end',
    //     color: '#f0333c'
    // },
    // // PreviousEvent
    // event_Container: {
    //     padding: 16
    // },
    // event_Heading: {
    //     fontSize: 15,
    //     fontWeight: 'bold',
    //     color: '#f0333c'
    // },
    event_itemContainer: {
        borderTopWidth: 2,
        borderColor: '#c2c2c2',
        padding: 14,
        width: '92%',
        alignSelf: 'center'
    },
    event_FlatList: {
        width: 280,
        //height:330,
        backgroundColor: "#fff",
        borderRadius: 20,
        //marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        margin: 8,
        elevation: 6,
    },
    event_CardTextFirst: {
        fontSize: 14,
        paddingLeft: 12,
        paddingTop: 10,
        fontWeight: 'bold',
        color: '#737373'
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
        //paddingHorizontal: 12,
        fontSize: 15,
        color: '#a6a6a6',
        paddingBottom: 6
    },
    // event_ViewMore: {
    //     borderBottomWidth: 2,
    //     width: '92%',
    //     alignSelf: 'center',
    //     borderColor: '#c2c2c2'
    // },
    // event_ViewText: {
    //     paddingHorizontal: 16,
    //     paddingTop: 22,
    //     paddingBottom: 8,
    //     alignSelf: 'flex-end',
    //     color: '#f0333c'
    // }
})

export default EventCard