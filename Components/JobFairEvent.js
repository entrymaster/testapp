import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, FlatList, TouchableOpacity, Image } from 'react-native'

const JobFairEvent = () => {

    const DATA = [
        {
            id: '1',
            image: require('../assets/mircosoft_logo.png')

        },
        {
            id: '2',
            image: require('../assets/reliance.png')

        },
        {
            id: '3',
            image: require('../assets/capgemini.png')

        },
        {
            id: '4',
            image: require('../assets/icici.png')

        },
        {
            id: '5',
            image: require('../assets/tcs.png')

        },
        {
            id: '6',
            image: require('../assets/infosys.png')

        },
        {
            id: '7',
            image: require('../assets/hdfc.png')

        },
        {
            id: '8',
            image: require('../assets/yes.png')

        },
        {
            id: '9',
            image: require('../assets/accenture.png')

        },
        {
            id: '10',
            image: require('../assets/bajaj.png')

        },
    ]

    return (
        <ScrollView style={styles.event_mainContainer} vertical={true}>
            <View style={styles.BgImgView}>
                <ImageBackground source={require('../assets/job.jpg')} style={styles.event_bgImages}>
                    <View style={styles.JobFairView}>
                        <View style={styles.jobFairHeadingView}>
                            <Text style={styles.JobFairTextHeading}>Job Fair</Text>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#3334bb', '#1e66b8', '#10bbff']} style={styles.LinearGradientBorder}>
                                <View style={styles.LinearGradientView}><Text style={styles.LinearGradientYearText}>2021</Text></View>
                            </LinearGradient>
                        </View>
                        <Text style={styles.JobFairText}>India's best companies to work for 2021</Text>
                    </View>
                    <View style={styles.CalenderView}>
                        <View style={styles.CalenderViewTextStyle}>
                            <Text style={styles.NumericText}>08</Text>
                            <View style={styles.calenderViewText}>
                                <Text style={styles.CalenderText}>August</Text>
                                <Text style={styles.CalenderText}>2021</Text>
                            </View>
                        </View>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#3334bb', '#1e66b8', '#10bbff']} style={styles.LinearGradientBorderLeft}>
                            <View style={styles.LinearGradientLeftBorder}></View></LinearGradient>
                        <View style={styles.NumericTextView}>
                            <Text style={styles.NumericText}>09</Text>
                            <View style={styles.calenderViewText}>
                                <Text style={styles.CalenderText}>Am</Text>
                                <Text style={styles.CalenderText}>Onwards</Text>
                            </View>
                        </View>
                    </View>
                    <View><Text style={styles.JobFairAddressText}>Doordarshan kendra 23,Ashok Marg,Hazatganj Lucknow,Uttar Pradesh 226001</Text></View>
                </ImageBackground>
            </View>
            <View style={styles.event_itemContainer}>
                <View style={styles.AboutHeadingView}>
                    <Text style={styles.AboutTextHeading}>About the event</Text>
                    <View style={styles.AboutTextView}>
                        <Text style={styles.AboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed velit quis nibh efficitur luctus. Aenean rutrum nunc et suscipit condimentum. Quisque in metus facilisis, auctor magna vel, eleifend nisl. Donec rutrum luctus tellus nec scelerisque. In elementum pretium nisi non tristique. Morbi a nibh dolor. Cras bibendum ligula ac enim tincidunt pellentesque. Quisque mauris magna, tempus sed fringilla eget, rhoncus quis sapien</Text>
                    </View>
                    <View style={styles.AboutTextView}>
                        <Text style={styles.AboutText}>Duis pretium at risus a ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla semper a metus et suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris suscipit quam ut pharetra sodales. In bibendum tincidunt urna, nec ultrices nisl gravida nec. Proin aliquam volutpat arcu, non suscipit quam ultricies eu.</Text>
                    </View>
                </View>
                <Text style={styles.CompaniesTextHeading}>Top Companies appearing</Text>
                <View style={styles.BorderView}>
                    <FlatList
                        data={DATA}
                        contentContainerStyle={styles.flatList}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={styles.FlatList}>
                                <Image source={item.image} style={styles.Images} />
                            </View>
                        )}
                    />
                    <TouchableOpacity>
                        <LinearGradient style={styles.BtnStyle} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#3e3dff', '#2e68ff', '#17a9ff']}>
                            <Text style={styles.BtnText}>Register Now</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    event_mainContainer: {
        flex: 1
    },
    event_bgImages: {
        height: 340,
        width: '100%',
    },
    JobFairView: {
        alignSelf: 'center',
        paddingTop: 110
    },
    jobFairHeadingView: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    JobFairTextHeading: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    JobFairText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center'
    },
    CalenderView: {
        paddingTop: 16,
        flexDirection: 'row',
        alignSelf: 'center',
        paddingLeft: 12
    },
    CalenderViewTextStyle: {
        flexDirection: 'row',
        paddingRight: 12
    },
    NumericTextView: {
        flexDirection: 'row',
        paddingLeft: 12
    },
    NumericText: {
        color: 'white',
        fontSize: 35
    },
    calenderViewText: {
        paddingLeft: 10,
        paddingTop: 6
    },
    CalenderText: {
        color: 'white'
    },
    JobFairAddressText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        paddingHorizontal: 40,
        paddingTop: 14
    },
    event_itemContainer: {
        backgroundColor: '#fff',
        marginHorizontal: 15,
        position: 'relative',
        bottom: 35,
        borderRadius: 4,
        //marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        margin: 8,
        elevation: 10,
    },
    AboutHeadingView: {
        padding: 18
    },
    AboutTextHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        paddingTop: 12
    },
    AboutTextView: {
        paddingTop: 18
    },
    AboutText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#b6b6b6'
    },
    CompaniesTextHeading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        paddingTop: 12
    },
    FlatList: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        margin: 12,
        height: 60,
        marginTop: 20,
        borderColor: '#d1d0d0'
    },
    Images: {
        width: 110,
        resizeMode: 'contain',
        justifyContent: 'center',
        flex: 1
    },
    BtnStyle: {
        backgroundColor: 'transparent',
        padding: 14,
        marginBottom: 20,
        marginTop: 25,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10
    },
    BtnText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    LinearGradientBorder: {
        borderWidth: 1,
        borderColor: 'transparent',
        width: 100,
        borderRadius: 5,
        marginLeft: 15,
        alignSelf: 'center',
        padding: 2
    },
    LinearGradientView: {
        backgroundColor: '#000',
        borderRadius: 3
    },
    LinearGradientYearText: {
        fontSize: 28,
        color: 'white',
        textAlign: 'center',
    },
    LinearGradientLeftBorder: {
        borderLeftWidth: 1,
        borderColor: 'blue',
        paddingLeft: 1,
    }
})

export default JobFairEvent