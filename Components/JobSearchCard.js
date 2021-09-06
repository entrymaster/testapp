import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { MaterialIcons, SimpleLineIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const JobSearchCard = () => {

    const DATA = [
        {
            id: '1',
            image: require('../assets/ibm.jpg'),
            text: 'Graphic Designer.As per AICTE Eligibility Morms Graphic Designer.',
            star: 'ios-star',
            money: '₹3,00,000 p.a.~₹6,00,000 p.a.',
            watch: "watch-later",
            location: "location-pin",
            heading: 'IBM',
            time: '03 Feb,2021',
            place: 'Lucknow',
            startext: 'Save Job',
            sharetext: 'Share Job'
        },
        {
            id: '2',
            image: require('../assets/ibm.jpg'),
            text: 'Graphic Designer.As per AICTE Eligibility Morms Graphic Designer.',
            star: 'ios-star',
            money: '₹3,00,000 p.a.~₹6,00,000 p.a.',
            watch: "watch-later",
            location: "location-pin",
            heading: 'IBM',
            time: '03 Feb,2021',
            place: 'Lucknow',
            startext: 'Save Job',
            sharetext: 'Share Job'
        },
        {
            id: '3',
            image: require('../assets/ibm.jpg'),
            text: 'Graphic Designer.As per AICTE Eligibility Morms Graphic Designer.',
            star: 'ios-star',
            money: '₹3,00,000 p.a.~₹6,00,000 p.a.',
            watch: "watch-later",
            location: "location-pin",
            heading: 'IBM',
            time: '03 Feb,2021',
            place: 'Lucknow',
            startext: 'Save Job',
            sharetext: 'Share Job'
        },
        {
            id: '4',
            image: require('../assets/ibm.jpg'),
            text: 'Graphic Designer.As per AICTE Eligibility Morms Graphic Designer.',
            star: 'ios-star',
            money: '₹3,00,000 p.a.~₹6,00,000 p.a.',
            watch: "watch-later",
            location: "location-pin",
            heading: 'IBM',
            time: '03 Feb,2021',
            place: 'Lucknow',
            startext: 'Save Job',
            sharetext: 'Share Job'
        },
        {
            id: '5',
            image: require('../assets/ibm.jpg'),
            text: 'Graphic Designer.As per AICTE Eligibility Morms Graphic Designer.',
            star: 'ios-star',
            money: '₹3,00,000 p.a.~₹6,00,000 p.a.',
            watch: "watch-later",
            location: "location-pin",
            heading: 'IBM',
            time: '03 Feb,2021',
            place: 'Lucknow',
            startext: 'Save Job',
            sharetext: 'Share Job'
        },

    ];

    return (
        <View style={styles.MainContainer}>
            <View style={styles.itemContainer}>
                <FlatList
                    data={DATA}
                    showsVerticalScrollIndicator ={false}
                    contentContainerStyle={styles.flatList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.FlatListContainer}>
                            <View style={styles.TextView}>
                                <View style={styles.IBMImgView}>
                                    <Image source={item.image} style={styles.Images} />
                                    <View style={styles.LeftBorder}>
                                       
                                        
                                    </View>
                                </View>
                           
                                <View style={styles.IBMTextView}>
                                    <Text style={styles.ItemHeading}>{item.heading}</Text>
                                    <Text style={styles.ItemDescription}>{item.text}</Text>
                                    
                                    <View style={styles.ItemTimePlaceView}>
                                        <View style={styles.ItemIconView}>
                                            <MaterialIcons name={item.watch} size={18} color="black" style={styles.Iconstyle} />
                                            <Text style={styles.itemIconText}>{item.time}</Text>
                                        </View>
                                        <View style={styles.ItemIconView}>
                                            <SimpleLineIcons name={item.location} size={18} color="black" style={styles.Iconstyle} />
                                            <Text style={styles.itemIconText}>{item.place}</Text>
                                        </View>
                                    </View>
                                   
                                </View>
                            </View>
                        </View>
                    )}
                />

            </View>
            <View style={styles.ViewMore}>
                <TouchableOpacity>
                    <Text style={styles.ViewMoreText}>View More</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 4,
        backgroundColor: '#fff',
    },
    FlatListContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 6,
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 5,
    },
    TextView: {
        flexDirection: 'row'
    },
    IBMImgView: {
        width: '40%',
    },
    Images: {
        resizeMode:'cover',
        //height:100,
        width:130

    },
    LeftBorder: {
        borderRightWidth: 2,
        marginTop: 6,
        borderColor: '#a2a2a2'
    },
    IconView: {
        flexDirection: 'row',
        paddingTop: 4
    },
    IconText: {
        fontSize: 16,
        paddingLeft: 10,
        fontWeight: 'bold',
        color:'#a2a2a2'
    },
    IBMTextView: {
        paddingHorizontal: 14,
        width: '65%',
        
      
    },
    ItemHeading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ItemDescription: {
        paddingVertical: 6,
        color: '#a2a2a2'
    },
    ItemPrize: {
        color: '#00af47'
    },
    ItemTimePlaceView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        marginTop:40
    },
    ItemIconView: {
        flexDirection: 'row'
    },
    Iconstyle: {
        alignSelf: 'center'
    },
    itemIconText: {
        paddingLeft: 3
    },
    ViewMore: {
        alignItems: 'center',
        paddingVertical: 10
    },
    ViewMoreText: {
        fontSize: 16,
        color: '#e13742'
    }
})

export default JobSearchCard;


