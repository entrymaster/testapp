import React, { useState } from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView,Alert } from 'react-native'
import Constants from "expo-constants";
import {
    DrawerItem
} from '@react-navigation/drawer';
import * as WebBrowser from 'expo-web-browser';

import { Entypo, FontAwesome } from '@expo/vector-icons';
import { AuthContext } from "../Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SideDrawer = ({ props, navigation }) => {
    const [carrersDropdown, setCareersDropdown] = useState(false);
    const [infoDropdown, setInfoDropdown] = useState(false);
    const [otherSitesDropdown, setOtherSitesDropdown] = useState(false);
    const { logOut } = React.useContext(AuthContext);

    const LogOutPressed = () => {
        Alert.alert(
            'Logout Times Ascent',
            'Are you sure you want to logout ? ',
            [
                { text: 'OK', onPress: () => { handleLogout() } },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        );
    };
    
    const handleLogout = async () => {
        
            //console.log('hh')
            const clearData = await AsyncStorage.clear();
            AsyncStorage.getItem("userData").then((value) => {
                let parseData = JSON.parse(value);
                //console.log(parseData);
            })      
            //console.log(clearData)
            logOut();
        
    };
    
    const HandleWebBrowserLink = async (link) => {
           let result = await WebBrowser.openBrowserAsync(link) ;
           console.log(result);
       }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.logoMenuView} onPress={() => navigation.closeDrawer()}>
                    <Image style={styles.logoMenu} source={require('../assets/menu-close-logo.png')} />
                </TouchableOpacity>
                <Image style={styles.logoMain} source={require('../assets/times_ascent_black_logo.png')} />
            </View>
            <View style={styles.banner}>
                <Image source={require('../assets/profile-grey-icon.png')} style={styles.logoProfile} />
            
                <Text style={styles.bannerText}>Hello ! Abhishek</Text>
            </View>
            <ScrollView>
                <View style={styles.courseContainer}>
                    <DrawerItem
                        style={styles.labelView}
                        labelStyle={styles.labelStyle}
                        label="Careers"
                        onPress={() => { navigation.navigate('HomePage') }}
                        activeTintColor={'#000000'}
                    />
                    <TouchableOpacity activeOpacity={1} onPress={() => setCareersDropdown(!carrersDropdown)}>
                        {
                            carrersDropdown ?
                                (<Entypo name="chevron-up" size={27} color="#777777" style={styles.dropdownLogo} />)
                                :
                                (<Entypo name="chevron-down" size={27} color="#777777" style={styles.dropdownLogo} />)
                        }
                    </TouchableOpacity>
                </View>
                {
                    carrersDropdown ?
                        (<View style={styles.dropdown}>
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Advice"
                                // onPress={() => {navigation.navigate('Jobs')}}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Interview and GD Prep"
                                onPress={() => { navigation.navigate('InterViewAndGD') }}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Resume Writing"
                                // onPress={() => {props.navigation.navigate('Home')}}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Mentorship"
                                onPress={() => { navigation.navigate('MentorshipPage') }}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="News and Info"
                                onPress={() => { navigation.navigate('NewsAndInfo') }}
                                activeTintColor={'#000000'}
                            />
                        </View>)
                        :
                        null
                }
                <DrawerItem
                    style={styles.labelView}
                    labelStyle={styles.labelStyle}
                    label="Jobs"
                    onPress={() => { navigation.navigate('Jobs') }}
                    activeTintColor={'#000000'}
                />
                <DrawerItem
                    style={styles.labelView}
                    labelStyle={styles.labelStyle}
                    label="Courses"
                    onPress={() => { navigation.navigate('Courses') }}
                    activeTintColor={'#000000'}
                />
                <DrawerItem
                    style={styles.labelView}
                    labelStyle={styles.labelStyle}
                    label="Events"
                    onPress={() => { navigation.navigate('Events') }}
                    activeTintColor={'#000000'}
                />
                <DrawerItem
                    style={styles.labelView}
                    labelStyle={styles.labelStyle}
                    label="HR Professionals"
                    onPress={() => { navigation.navigate('HRpro') }}
                    activeTintColor={'#000000'}
                />
                <DrawerItem
                    style={styles.labelView}
                    labelStyle={styles.labelStyle}
                    label="Remote Work"
                    onPress={() => { navigation.navigate('RemoteWork') }}
                    activeTintColor={'#000000'}
                />
                <DrawerItem
                    style={styles.labelView}
                    labelStyle={styles.labelStyle}
                    label="Advertise With Us"
                    onPress={() => {navigation.navigate("AdvertiseWithUs")}}
                    activeTintColor={'#000000'}
                />
                <DrawerItem
                    style={styles.labelView}
                    labelStyle={styles.labelStyle}
                    label="Contact Us"
                    // onPress={() => {navigation.navigate('')}}
                    activeTintColor={'#000000'}
                />

                <View style={styles.horizontalLine} />

                <View style={styles.courseContainer}>
                    <DrawerItem
                        style={styles.labelView}
                        labelStyle={styles.labelStyle}
                        label="Information"
                        onPress={() => setInfoDropdown(!infoDropdown)}
                        activeTintColor={'#000000'}
                    />
                    <TouchableOpacity activeOpacity={1} onPress={() => setInfoDropdown(!infoDropdown)}>
                        {
                            infoDropdown ?
                                (<Entypo name="chevron-up" size={27} color="#777777" style={styles.dropdownLogo} />)
                                :
                                (<Entypo name="chevron-down" size={27} color="#777777" style={styles.dropdownLogo} />)
                        }
                    </TouchableOpacity>
                </View>
                {
                    infoDropdown ?
                        (<View style={styles.dropdown}>
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="FAQ"
                                // onPress={() => {navigation.navigate('Jobs')}}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="About Us"
                                // onPress={() => {props.navigation.navigate('Home')}}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Report A Bug"
                                onPress={() => { navigation.navigate('ReportABugScreen') }}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Feedback"
                                onPress={() => { navigation.navigate('FeedbackScreen') }}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Privacy Policy"
                                // onPress={() => {props.navigation.navigate('Home')}}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Terms of Use"
                                // onPress={() => {props.navigation.navigate('Home')}}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Site Map"
                                // onPress={() => {props.navigation.navigate('Home')}}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Subscribe"
                                // onPress={() => {props.navigation.navigate('Home')}}
                                activeTintColor={'#000000'}
                            />
                        </View>)
                        :
                        null
                }
                <View style={styles.courseContainer}>
                    <DrawerItem
                        style={styles.labelView}
                        labelStyle={styles.labelStyle}
                        label="Other Sites"
                        onPress={() => setOtherSitesDropdown(!otherSitesDropdown)}
                        activeTintColor={'#000000'}
                    />
                    <TouchableOpacity activeOpacity={1} onPress={() => setOtherSitesDropdown(!otherSitesDropdown)}>
                        {
                            otherSitesDropdown ?
                                (<Entypo name="chevron-up" size={27} color="#777777" style={styles.dropdownLogo} />)
                                :
                                (<Entypo name="chevron-down" size={27} color="#777777" style={styles.dropdownLogo} />)
                        }
                    </TouchableOpacity>
                </View>
                {
                    otherSitesDropdown ?
                        (<View style={styles.dropdown}>
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="ePaper"
                                onPress={() => HandleWebBrowserLink('https://epaper.timesgroup.com/TOI/TimesOfIndia/index.html?a=c#')}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Education Times"
                                onPress={() => HandleWebBrowserLink('https://www.educationtimes.com/')}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Times Interact"
                                onPress={() => HandleWebBrowserLink('https://ads.timesgroup.com/')}
                                activeTintColor={'#000000'}
                            />
                            <DrawerItem
                                style={styles.dropdownlabelView}
                                labelStyle={styles.dropdownlabelStyle}
                                label="Times Property"
                                onPress={() => HandleWebBrowserLink('https://timesproperty.com/')}
                                activeTintColor={'#000000'}
                            />
                        </View>)
                        :
                        null
                }
                  <DrawerItem
                    style={styles.labelView}
                    labelStyle={styles.labelStyle}
                    label="Log Out"
                    onPress={() => LogOutPressed()}
                    activeTintColor={'#000000'}
                />

            </ScrollView>
            <Text style={styles.socialText}>
                Connect with us
            </Text>
            <View style={styles.socialContainer}>
                <TouchableOpacity onPress={()=>HandleWebBrowserLink('https://www.facebook.com/timesascent/')}>
                    <Entypo name="facebook-with-circle" size={40} color="#3b5998" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>HandleWebBrowserLink('https://twitter.com/timesascent')}>
                    <Entypo name="twitter-with-circle" size={40} color="#00acee" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>HandleWebBrowserLink('https://www.linkedin.com/company/times-ascent/')}>
                    <Entypo name="linkedin-with-circle" size={40} color="#0077b5" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SideDrawer

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        paddingTop:40,
        height: 97,
        flexDirection: 'row',
    },
    logoMenuView: {
        alignSelf: 'center',
    },
    logoMenu: {
        margin: 10,
        width: 25,
        resizeMode: 'contain',
    },
    logoMain: {
        marginLeft: 35,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    banner: {
        backgroundColor: '#707070',
        width: '100%',
        flexDirection: 'row',
    },
    logoProfile: {
        alignSelf:'center',
        marginLeft:5
    },
    bannerText: {
        fontSize: 20,
        color: '#FFFFFF',
        margin: 10,
        fontWeight: '200'
    },
    labelView: {
        height: 47,
        width: 220,
        justifyContent: 'center'
    },
    labelStyle: {

        color: '#000000',
        fontSize: 16,
        fontWeight: '600'
    },
    courseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropdownLogo: {
        padding: 10
    },
    dropdown: {
        paddingLeft: 20
    },
    dropdownlabelView: {
        height: 40,
        justifyContent: 'center'
    },
    dropdownlabelStyle: {
        color: '#777777',
        fontSize: 14,
        fontWeight: '600'
    },
    horizontalLine: {
        borderBottomColor: "#BFBFBF",
        borderBottomWidth: 1,
        marginVertical: 20,
        width: '90%',
        alignSelf: 'center'
    },
    socialContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
    },
    socialText: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 16,
        fontWeight: '600'
    }
})
