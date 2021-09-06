import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import AdvertArea from "../Components/AdvertArea";
import ArticleCard from "../Components/ArticleCard";
import ArticleVideo from "../Components/ArticleVideos";
import RozgaarHome from "../Components/RozgaarHome";
import SearchBarMain from "../Components/SearchBar";
import RozgaarImageArea from "../Components/RozgaarImageArea";
import UsefulTools from "../Components/UsefulTools";
import TrendingNews from "../Components/TrendingNews";
import Footer from "../Components/Footer";
import HeaderMain from "../Components/HeaderMain";


const HomePage = ({ props, navigation }) => {
  const adId = 'CR';
  const [recommendedArticles, setRecommendedArticles] = useState();
  const [featuredArticles, setFeaturedArticles] = useState();
  const [videoLink, setVideoLink] = useState();
  const [interviewArticles, setInterviewArticles] = useState();
  const [careerArticle, setCareerArticle] = useState();
  const [isloading, setLoading] = useState();
  const [hideContent, setHideContent] = useState(false);

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

  useEffect(() => {
    scrollY
   
  }, [hideContent])

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
            setFeaturedArticles(result.featuredArticles);
            setVideoLink(result.videoLink);
            setInterviewArticles(result.interviewArticles);
            setCareerArticle(result.careerArticle);
          } else {
            alert("Something went wrong, Code:500");
          }
        }
      })
      .finally(() => setLoading(false))

      .catch((error) => console.log(error));
  };

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
    <View style={styles.pageView}>
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
        // nestedScrollEnabled={true}
        // scrollsToTop={hideContent}
        // scrollEnabled={!hideContent}
        contentContainerStyle={{
          paddingTop: 100,
           paddingBottom: 30
           }}
      >


        <SearchBarMain type={'home'}  />
        {/* <View style={{width:'100%',marginVertical: hideContent?300:0}} /> */}
        <View style={styles.itemContainer}>
          <ArticleCard
            articleType={"Recommended"}
            apiData={recommendedArticles}
            SectionHeading={"RECOMMENDED ARTICLES"}
            loading={isloading}
            bottomText={"Discover great things happening"}
            adId={adId}
          />

          <RozgaarHome />

          <ArticleVideo
            apiData={videoLink}
            SectionHeading={"POPULAR VIDEOS"}
            bottomText={
              "Whether you're a graduate looking for a job or an employer looking to find the perfect candidate our videos are here to help."
            }
            loading={isloading}
          />

          {/* <RozgaarImageArea />  */}

          <ArticleCard
            articleType={"Featured"}
            apiData={featuredArticles}
            SectionHeading={"FEATURED ARTICAL"}
            bottomText={
              "Take your career to the next level with our tips and advice"
            }
            loading={isloading}
            adId={adId}
          />

          <AdvertArea advertType={"Square"} adId={adId+'-'+'001'} />

          <View style={{ marginVertical: 10 }}>
            <ArticleCard
              articleType={"InterView"}
              SectionHeading={"INTERVIEW TIPS"}
              bottomText={
                "Take your career to the next level with our tips and advice"
              }
              apiData={interviewArticles}
              loading={isloading}
              adId={adId}
            />
          </View>
          <AdvertArea advertType={"Rectangle"} adId={adId+'-'+'002'}/>

          <ArticleVideo

            SectionHeading={"CAREER DEVELOPMENT"}
            bottomText={
              "Browse up-to-date and actionable advice about career development, salaries, promotions, performance reviews and career breaks."
            }
            loading={isloading}
            apiData={careerArticle} />

          <AdvertArea advertType={"DualSquare"} adId={adId+'-'+'003'}/>
          <TrendingNews />
          <AdvertArea advertType={"DualSquare"} adId={adId+'-'+'004'}/>
          <UsefulTools />
          <AdvertArea advertType={"Square"} adId={adId+'-'+'005'}/>
          <Footer />
        </View>
        {/* </View>
        )
        :null
        } */}
        


      </Animated.ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  pageView: {
    backgroundColor: "white",
    paddingHorizontal: 5,
  },
  itemContainer: {
    padding: 10
  },
  logoMain: {
    width: 180,
    resizeMode: "contain",
    alignSelf: "center",
  },

});
export default HomePage;
