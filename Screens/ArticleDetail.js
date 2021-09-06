import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Share } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import AdvertArea from '../Components/AdvertArea';
import ArticleCard from '../Components/ArticleCard';
import Footer from '../Components/Footer';
import UsefulTools from '../Components/UsefulTools';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import ImageOrVideo from '../Components/ImageOrVideo';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import TimesActivityIndicator from '../Components/TimesActivityIndicator';
import HeadingsForSection from '../Components/HeadingsForSection';

const ArticleDetail = ({ props, navigation, route }) => {

    let test = "../assets/Group636.jpg";
    const adId=route.params.adId
    const [recommendedArticles, setRecommendedArticles] = useState()
    const [isloading, setLoading] = useState()
    const [articleDetail, setArticleDetail] = useState([])
    const [publishedDate, setPublishedDate] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [videoUrl, setVideoUrl] = useState()
    const [articleTitle, setArticleTitle] = useState()

    const articleID = route.params.articleID;


    const source = {
        html: articleDetail
    }

    const tagsStyles = {
        body: {

            fontSize: 16
        },
        a: {
            color: 'green'
        }
    }
    const onShare = async () => {


        const result = await Share.share({
            message: 'Visit www.timesascent.com'
        });

    }
    useEffect(() => {
        ArticleDetailApi()
        careerScreenApi()
    }, []);

    const { width } = useWindowDimensions();
    const ArticleDetailApi = () => {
        setLoading(true)
        fetch(global.baseURL + '/api/apiTimes/GetArticleDetails', {
            method: 'POST',
            timeout: 10000,
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
                Authorization: 'Token 77927b69bb144b065ca11bf2a9d452819cd852db'
            },
            body: JSON.stringify({

                "ArticleId": (articleID)

            })
        })
            .then((response) => response.json())

            .then((result) => {
                //console.log(result.data.ArticleId)

                setArticleDetail(result.data.content)
                setPublishedDate(result.data.updatedDate)
                setImageUrl(result.data.imagePath)
                setVideoUrl(result.data.videoLink)
                setArticleTitle(result.data.title)



            })
            .finally(() => setLoading(false))

            .catch((error) => console.log(error))

    }

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
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false} >
            {isloading ? <TimesActivityIndicator /> :
                <View>
                    <View style={styles.Container}>
                        <Text style={styles.HeadingText}>{articleTitle}</Text>
                        <View style={styles.shareAndDate}>
                            <Text style={styles.publicationDate}>{publishedDate}</Text>
                            <TouchableOpacity onPress={() => { onShare() }}>
                                <AntDesign name="sharealt" size={24} color="grey" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 20 }}>
                            <ImageOrVideo video={videoUrl} image={imageUrl} />
                        </View>
                        <View style={styles.itemContainer}>
                            <RenderHtml
                                contentWidth={width}
                                source={source}
                                tagsStyles={tagsStyles}
                            />
                        </View>
                        <AdvertArea advertType={'Rectangle'} adId={adId+'-'+'0012'}/>
                        <HeadingsForSection title={"RELATED ARTICLES"} />
                        <ArticleCard articleType={'RelatedArticles'} SectionHeading={'RELATED ARTICLES'} apiData={recommendedArticles}
                        />
                    
                    <UsefulTools />
                    <Footer />
                    </View>
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:'#fff'
    },
    Container: {
        padding: 14
    },
    HeadingText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    dateTimeArea: {
        paddingTop: 8
    },
    dayAndDate: {
        color: 'red',
    },
    itemContainer: {
        paddingTop: 14
    },
    Images: {
        resizeMode: 'contain',
        width: '100%',
    },
    publicationDate: {
        marginVertical: 20,
        marginRight: 20,
        color: '#F02F39',
        fontSize: 16,
    },
    shareAndDate: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    // content: {
    //              fontSize: 15,
    //              marginVertical: 10,
    //              letterSpacing: 1,
    //              lineHeight: 20,
    //              color: 'grey',

    //          },
})
export default ArticleDetail;
