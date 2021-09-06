import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native';
import HeadingsForSection from './HeadingsForSection';

const TascentContributors = (props) => {

    let sectionHeading = props.SectionHeading

    const DATA = [
        {
            id: '1',
            image: require('../assets/mentor_shubham.jpg'),
            text: 'Shubham Singh',
            position: 'Arts and Graphics Expert',
            paragraph: 'Based out in India and has great expertise into graphics. Taken his hobby into profession and guides h... '
        },
        {
            id: '2',
            image: require('../assets/mentor_ranvir.jpg'),
            text: 'Ranvir Sethi',
            position: 'Sales and Marketing expert',
            paragraph: 'Based out in California with a happy profession and hobby into sales and marketing'
        },
        {
            id: '3',
            image: require('../assets/mentor_parul.jpg'),
            text: 'Parul Chaudhary',
            position: 'Database Management Expert',
            paragraph: 'Based In India with expertise in database management and statistics and analytics'
        },
        {
            id: '3',
            image: require('../assets/mentor_jannat.jpg'),
            text: 'Jannat Hasan Rizvi',
            position: 'Creative Expert',

        },
    ];

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
                            <View>
                                <View style={styles.FlatList}>
                                    <View style={styles.BgImg}>
                                        <Image source={item.image} style={styles.Images} />
                                    </View>
                                    <Text style={styles.FlatListText}>{item.text}</Text>
                                    <Text style={styles.FlatListtext}>{item.position}</Text>
                                    <Text style={styles.TextParagraph}>{item.paragraph}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.BtnButton}>
                                        <Text style={styles.BtnText}>Ask a Question</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </View>
                {/* <TouchableOpacity>
                    <Text style={styles.event_ViewText}>View More</Text>
                </TouchableOpacity> */}
                <View style={styles.event_ViewMore}></View>
            </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        //paddingVertical: 25,
        backgroundColor: '#fff',

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
        borderRadius: 25,
        marginHorizontal: 4,
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        borderWidth: 1,
        borderColor: 'lightgrey',
        elevation: 2,
        height: 450
    },
    FlatListText: {
        fontSize: 17,
        paddingHorizontal: 12,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    FlatListtext: {
        fontSize: 16,
        paddingHorizontal: 12,
        paddingTop: 8,
        fontWeight: 'bold',
        color: '#a2a2a2'
    },
    BgImg: {
        paddingTop: 10
    },
    Images: {
        width: '92%',
        height: 275,
        alignSelf: 'center',
        borderRadius: 20
    },
    TextParagraph: {
        padding: 12,
        fontSize: 14,
        color: '#a2a2a2'
    },
    event_ViewMore: {
        borderBottomWidth: 2,
        width: '100%',
        alignSelf: 'center',
        borderColor: '#c2c2c2'
    },
    event_ViewText: {
        paddingBottom: 8,
        alignSelf: 'flex-end',
        color: '#f0333c'
    },
    BtnButton: {
        backgroundColor: '#f0333c',
        padding: 15,
        width: '70%',
        alignSelf: 'center',
        borderRadius: 2,
        marginVertical: 20
    },
    BtnText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
    headings: {
        color: "#F02F39",
        fontWeight: "700",
    },
    ScrollView: {
        paddingVertical: 10
    }
})

export default TascentContributors;