import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import AdvertArea from '../Components/AdvertArea';
import Footer from '../Components/Footer';
import NewsCard from '../Components/NewsCard';
import RozgaarHome from '../Components/RozgaarHome';
import HeadingsForSection from '../Components/HeadingsForSection';
import SearchBarMain from '../Components/SearchBar';
import UsefulTools from '../Components/UsefulTools';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import HeaderMain from '../Components/HeaderMain';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const NewsAndInfo = ({ props, navigation }) => {

    const [recommendedArticles, setRecommendedArticles] = useState();
    const [isloading, setLoading] = useState();
    const adId = 'CR'
    useEffect(() => {
        careerScreenApi();
    }, []);
    const careerScreenApi = () => {
        setLoading(true);
        fetch(global.baseURL + "/api/apiTimes/CareersScreen", {
            method: "POST",
            timeout: 10000,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Token 77927b69bb144b065ca11bf2a9d452819cd852db",
            },
            body: JSON.stringify({
                page: "1",
                content: "6",
            }),
        })
            .then((response) => response.json())

            .then((result) => {
                {
                    if (result.status_code === 200 && result.status === "SUCCESS") {
                        setRecommendedArticles(result.recommendedArticles);
                    } else {
                        alert("Something went wrong, Code:500");
                    }
                }
            })
            .finally(() => setLoading(false))

            .catch((error) => console.log(error));
    };

    return (
        <View style={styles.pageView}>
            <ScrollView showsVerticalScrollIndicator={false}>


                {/*  <View style={styles.headerMain}> 
       <TouchableOpacity onPress={()=> {navigation.openDrawer()}}>
        <AntDesign name="appstore1" size={24} color="#F02F39" />
     </TouchableOpacity>
       
        <Image style={styles.logoMain} source={require('../assets/times_ascent_black_logo.png')} />
        <TouchableOpacity onPress= {()=> navigation.navigate('UserProfile')}>
        <FontAwesome name="user-circle" size={24} color="#F02F39" />
        </TouchableOpacity>
        </View> */}
                <HeadingsForSection title={'TRENDING NEWS'} />
                <NewsCard newsType={'TimesSource'} apiData={recommendedArticles} />
                <RozgaarHome />
                <AdvertArea advertType={'Square'} adId={adId + '-' + '010'} />
                <HeadingsForSection title={'LATEST NEWS'} />
                <NewsCard newsType={'NewsGen'} apiData={recommendedArticles} />
                <AdvertArea advertType={'Rectangle'} adId={adId + '-' + '011'} />
                <HeadingsForSection title={'SPONSORED BY'} />
                <NewsCard newsType={'SponsoredCard'} ArticleTitle={'Toyota Kirloskar signs up with Karnataka Govt to drive'} />
                <NewsCard newsType={'SponsoredCard'} ArticleTitle={'Toyota Kirloskar signs up with Karnataka Govt to drive'} />
                <NewsCard newsType={'SponsoredCard'} ArticleTitle={'Toyota Kirloskar signs up with Karnataka Govt to drive'} />
                <Divider style={styles.DividerLine}/>
                <UsefulTools />
                <Footer />
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    pageView: {
        flex: 1,
        backgroundColor: 'white',
        padding: 14
    },
    logoMain: {
        width: 180,
        resizeMode: 'contain',
        alignSelf: 'center',


    },
    headerMain: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        padding: 10
    },
    DividerLine:{
        paddingTop:8, 
    }
});
export default NewsAndInfo;