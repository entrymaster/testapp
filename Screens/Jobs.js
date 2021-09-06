import React, {useEffect, useState} from "react";

import {
  View,
  StyleSheet,
  Animated
} from "react-native";

import JobCard from "../Components/JobCard";
import HeadingsForSection from "../Components/HeadingsForSection";
import RozgaarHome from "../Components/RozgaarHome";
import AdvertArea from "../Components/AdvertArea";
import RozgaarImageArea from "../Components/RozgaarImageArea";
import JobTabs from "../Components/JobTabs";
import RozgaarImageArea2 from "../Components/RozgaarIndiaArea2";
import SearchBarMain from "../Components/SearchBar";
import TopEmplyoers from "../Components/TopEmployers";
import ArticleCard from "../Components/ArticleCard";
import ResumeCoverLetters from "../Components/ResumeCoverLetters";
import UsefulTools from "../Components/UsefulTools";
import Footer from "../Components/Footer";
import HeaderMain from "../Components/HeaderMain";


const Jobs = ({ props, navigation }) => {

  const adId = 'J';
  const [jobAds, setJobAds] =useState();
  const [isloading, setLoading] = useState();
  const [recommendedArticles, setRecommendedArticles] = useState();
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
    jobAdsAPI()
    careerScreenApi();
  }, []);
 
  const jobAdsAPI = () =>{
    setLoading(true)
    fetch(global.baseURL +'/api/apiTimes/JobCard', {
      method: 'POST',
      timeout: 10000,
      headers: { 
        Accept: 'application/json', 'Content-Type': 'application/json',
        Authorization:'Token 77927b69bb144b065ca11bf2a9d452819cd852db' },
      body: JSON.stringify(
        {"page":"1"})
  })
      .then((response) => response.json())
    
      .then((result) => {    
 
        setJobAds(result.data)
  
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

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY},
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
      } ><HeaderMain /></Animated.View>
      <Animated.ScrollView showsVerticalScrollIndicator={false}
      scrollEventThrottle={5}
      onScroll={handleScroll}
      scrollEnabled={!hideContent}
      contentContainerStyle={{paddingTop:100,paddingBottom:10}}
      >
       
       

       <SearchBarMain type={'jobs'} onSearchBarActive={setHideContent} />
       <View style={{width:'100%',marginVertical: hideContent?300:0}} />
       
       <View style={styles.itemContainer}>
          <JobCard jobAds={jobAds} SectionHeading={"TRENDING JOBS"} loading={isloading} adId={adId}/>
          <RozgaarHome />


          <JobCard jobAds={jobAds} SectionHeading={"JOBS BY SKILL"} loading={isloading} />
          <AdvertArea advertType={"Square"} adId={adId + '-' + '001'} />
          <TopEmplyoers />
          <RozgaarImageArea />
          <View style={{ marginVertical: 10 }}>
            <AdvertArea advertType={"Rectangle"} adId={adId + '-' + '002'} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <JobTabs />
            <View style={{ marginVertical: 10 }}>
              <AdvertArea advertType={"DualSquare"} adId={adId + '-' + '003'} />
              <RozgaarImageArea2 />
              <AdvertArea advertType={"DualSquare"} adId={adId + '-' + '004'} />
              <ArticleCard
                articleType={"RecommendedInJobs"}
                SectionHeading={"RECOMMENDED ARTICLES"}
                apiData={recommendedArticles}
                loading={isloading}
                adId={adId}
              />
              <ResumeCoverLetters />
              <AdvertArea advertType={"DualSquare"} adId={adId + '-' + '005'} />
              <UsefulTools />
              <AdvertArea advertType={"DualSquare"} adId={adId + '-' + '006'} />
            </View>
          </View>
          <Footer />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  logoMain: {
    width: 180,
    resizeMode: "contain",
    alignSelf: "center",
    
  },
  itemContainer: {
    padding: 10
  },
  headerMain: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    padding: 10,
  },
  pageView: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 5,
  },
});
export default Jobs;
