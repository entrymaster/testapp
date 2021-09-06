import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Animated } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import HeaderMain from '../Components/HeaderMain'
import HeadingsForSection from '../Components/HeadingsForSection'
import SearchBar from '../Components/SearchBar'
// import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import { color } from 'react-native-elements/dist/helpers'
import AdvertArea from '../Components/AdvertArea'
import HireRemoteTeam from '../Components/HireRemoteTeam';
import JobTabs from '../Components/JobTabs'
import CXOArticles from '../Components/CXOArticles'
import BecomeMentor from '../Components/BecomeMentor'
import ConnectWithCoach from '../Components/ConnectWithCoach'

const DATA = [
    {
        id: '1',
        post: 'CEO',
        watch: 'access-time',
        loc: 'ios-location-outline',
        rupee: 'rupee',
        star: 'star',
        share: 'share',
        date: '03 Feb,2021',
        location: 'Lucknow',
        image: require('../assets/indus.png'),
        text: 'Self-motivated and dilligent in approach with an interest to build a career in corporate finance',
        price: '3,00,000 p.a ~ ',
        price2: '6,00,000 p.a',
        jobPosted: 'Posted on 13 July 2021',
        saveJob: ' Save Job',
        shareJob: ' Share Job'
    },
    {
        id: '2',
        post: 'CEO',
        watch: 'access-time',
        loc: 'ios-location-outline',
        rupee: 'rupee',
        star: 'star',
        share: 'share',
        date: '03 Feb,2021',
        price2: '6,00,000 p.a',
        location: 'Lucknow',
        image: require('../assets/indus.png'),
        text: 'Self-motivated and dilligent in approach with an interest to build a career in corporate finance',
        price: '3,00,000p.a ~ ',
        jobPosted: 'Posted on 13 July 2021',
        saveJob: ' Save Job',
        shareJob: 'Share Job'
    },
    {
        id: '3',
        post: 'CEO',
        watch: 'access-time',
        loc: 'ios-location-outline',
        rupee: 'rupee',
        star: 'star',
        share: 'share',
        date: '03 Feb,2021',
        price2: '6,00,000 p.a',
        location: 'Lucknow',
        image: require('../assets/indus.png'),
        text: 'Self-motivated and dilligent in approach with an interest to build a career in corporate finance',
        price: '3,00,000p.a ~ ',
        jobPosted: 'Posted on 13 July 2021',
        saveJob: ' Save Job',
        shareJob: ' Share Job'
    },
    {
        id: '4',
        post: 'CEO',
        date: '03 Feb,2021',
        watch: 'access-time',
        loc: 'ios-location-outline',
        rupee: 'rupee',
        star: 'star',
        share: 'share',
        location: 'Lucknow',
        image: require('../assets/indus.png'),
        text: 'Self-motivated and dilligent in approach with an interest to build a career in corporate finance',
        price: '3,00,000 p.a ~ ',
        price2: '6,00,000 p.a',
        jobPosted: 'Posted on 13 July 2021',
        saveJob: ' Save Job',
        shareJob: ' Share Job'
    }
]

const CXO = () => {

    let scrollY = new Animated.Value(0);
    const diffClampScrolly = Animated.diffClamp(scrollY, 0, 70);

    const headerTranslateY = diffClampScrolly.interpolate({
        inputRange: [0, 70],
        outputRange: [0, -70],
        extrapolate: 'clamp'
    })
    const headerOpacity = diffClampScrolly.interpolate({
        inputRange: [0, 70],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })

    const handleScroll = Animated.event(
        [
            {
                nativeEvent: {
                    contentOffset: { y: scrollY },
                },
            },
        ],
        {
            useNativeDriver: true,
        },
    );

    return (
        <View style={styles.mainContainer}>

            <Animated.View style={
                {
                    marginTop: 30,
                    transform: [{ translateY: headerTranslateY }],
                    opacity: headerOpacity,
                    elevation: 1,
                    zIndex: 1,

                }
            } >
                <HeaderMain />

            </Animated.View>


            <Animated.ScrollView showsVerticalScrollIndicator={false}
                scrollEventThrottle={5}
                onScroll={handleScroll}
                contentContainerStyle={{ paddingTop: 100, paddingBottom: 10 }}
            >
                <View style={styles.itemContainer}>
                <HeadingsForSection title={'TRENDING CXO JOBS'} />
                <FlatList
                    data={DATA}
                    horizontal
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <View style={styles.renderView}>
                            <Image source={item.image} style={styles.flatlistImage} />
                            <View style={styles.textMainView}>
                                <Text style={styles.postText}>{item.post}</Text>
                                <View style={styles.textView}>
                                    <View style={styles.dateView}>
                                        <MaterialIcons name={item.watch} size={15} color="black" style={styles.watchIcon} />
                                        <Text style={styles.dateViewText}>
                                            {item.date}
                                        </Text>
                                    </View>
                                    <View style={styles.dateView}>
                                        <Ionicons name={item.loc} size={15} color="black" />
                                        <Text style={styles.dateViewText}>
                                            {item.location}
                                        </Text>
                                    </View>
                                </View>
                                <View >
                                    <Text style={styles.paraText}>
                                        {item.text}
                                    </Text>
                                    <Text style={styles.priceText}>
                                        <FontAwesome name={item.rupee} size={15} color="#00B047" />
                                        {item.price}
                                        <FontAwesome name={item.rupee} size={15} color="#00B047" />
                                        {item.price2}
                                    </Text>
                                </View>
                                <View style={styles.postedJobView}>
                                    <Text>
                                        {item.jobPosted}
                                    </Text>
                                    <TouchableOpacity>
                                        <Text style={styles.buttonText}>
                                            Show More
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.bottomView}>
                                    <View style={styles.iconView}>
                                        <Foundation name="star" size={18} color="black" />
                                        <Text>
                                            {item.saveJob}
                                        </Text>
                                    </View>
                                    <View style={styles.iconView}>
                                        <MaterialCommunityIcons name={item.share} size={24} color="#00B047" />
                                        <Text>
                                            {item.shareJob}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    }
                />
                <View style={styles.viewMoreButtonView}>
                    <TouchableOpacity style={styles.viewMoreButton}>
                        <Text style={styles.buttonText}>
                            View More
                        </Text>
                    </TouchableOpacity>
                </View>
                <HireRemoteTeam />
                <AdvertArea advertType={'Rectangle'} />
                <HeadingsForSection title={'CAREERS'} />
                <JobTabs />
                <CXOArticles />
                <View style={styles.becomeMentorView}>
                    <BecomeMentor />
                    <View style={styles.connectWithCoachView}>
                        <HeadingsForSection title={'CONNECT WITH COACH'} />
                    </View>
                    <ConnectWithCoach />
                </View>
                </View>
            </Animated.ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        // marginVertical : 30

    },
    itemContainer:{
        padding:12
    },
    flatlistImage: {
        width: 240,
        // height : 200,
        alignSelf: 'center',
        resizeMode: 'contain',
        paddingVertical: 10

    },
    renderView: {
        width: 265,
        height: 420,
        backgroundColor: "#fff",
        borderRadius: 18,
        marginHorizontal: 15,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        margin: 8,
        elevation: 5,
    },
    textMainView: {
        marginHorizontal: 16
    },
    textView: {
        flexDirection: 'row'
    },
    watchIcon: {
        justifyContent: 'center'
    },

    postText: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 8
    },
    textView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 200
    },
    dateView: {
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-evenly',
        paddingBottom: 10
    },
    dateViewText: {
        fontWeight: 'bold'
    },
    priceText: {
        color: '#00B047',
        paddingTop: 10
    },
    postedJobView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#BFBFBF",
        paddingBottom: 10
    },
    buttonText: {
        color: '#F02F39'
    },
    paraText: {
        color: "#A2A2A2",
    },
    bottomView: {
        flexDirection: "row",
        paddingTop: 17,
        justifyContent: 'space-around'
    },
    iconView: {
        flexDirection: "row",
        width: 100,
        justifyContent: 'space-evenly'
    },
    viewMoreButton: {
        alignSelf: 'flex-end',
        marginRight: 5,
        paddingBottom: 10,
        marginTop: 20
    },
    viewMoreButtonView: {
        borderBottomWidth: 2,
        borderBottomColor: '#BFBFBF',
        width: '100%',
        alignSelf: 'center'
    },
    becomeMentorView: {
        marginTop: 20,
        //marginHorizontal: 10
    },
    connectWithCoachView: {
        marginVertical: 20
    }


})

export default CXO
