import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ScrollView } from 'react-native-gesture-handler';
import AdvertArea from '../Components/AdvertArea';
import ArticleCard from '../Components/ArticleCard';
import Footer from '../Components/Footer';
import FrequentAskedQuestions from '../Components/FrequentAskedQuestions';
import HeaderMain from '../Components/HeaderMain';
import HeadingsForSection from '../Components/HeadingsForSection';
import RozgaarHome from '../Components/RozgaarHome';
import UsefulTools from '../Components/UsefulTools';

const InterViewAndGD = (props) => {

  const adId = 'CR'
  const [interviewArticle, setInterviewArticle] = useState(null);
  const [videoInterview, setVideoInterview] = useState(null);
  const [paidArticles, setPaidArticles] = useState(null);
  const [isloading, setLoading] = useState();

  useEffect(() => {
    interViewAndGDApi()

  }, []);

  const interViewAndGDApi = () => {
    setLoading(true)
    fetch(global.baseURL + '/api/apiTimes/InterviewAndGdprep', {
      method: 'POST',
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Token 77927b69bb144b065ca11bf2a9d452819cd852db'
      },
      body: JSON.stringify({
        "page": "1",
      }
      )
    })
      .then((response) => response.json())
      // .then((json) => console.log(json))
      .then((result) => {
        {
          if (result.status_code === 200 && result.status === "SUCCESS") {

            setInterviewArticle(result.InterviewArticle);
            setPaidArticles(result.PaidArticles);
            setVideoInterview(result.VideoInterview);
          } else {
            alert("Api issue")
          }

        }

      })
      .finally(() => setLoading(false))

      .catch((error) => console.log(error))

  }


  const bImage = '../assets/sampleBannerInterView.jpg'
  return (
    <View style={styles.pageView}>


      <ScrollView>


        <View style={styles.imageView}>
          <Image style={styles.adImage} source={require(bImage)} />
        </View>
        <View >
          <RozgaarHome />
        </View>
        <View style={styles.container}>
          <HeadingsForSection title={'INTERVIEW TIPS'} />
          <ArticleCard articleType={'ShadowArticleCard'} apiData={interviewArticle} />
          <AdvertArea advertType={'Rectangle'} adId={adId + '-' + '006'} />
          <HeadingsForSection title={'TRENDING VIDEOS'} />
          <ArticleCard articleType={'ShadowArticleCard'} apiData={videoInterview} />
          <Divider />

          <ArticleCard articleType={'FocusedShadowArticleCard'} apiData={paidArticles} />
          <ArticleCard articleType={'RelatedArticles'} />
          <Divider />
          <FrequentAskedQuestions />

          <UsefulTools />
          <Footer />
        </View>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  adImage: {

  },
  HeaderMain: {
    height: 80
  },
  pageView: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageView: {
    alignItems: 'center'
  },
  container: {
    paddingHorizontal: 16
  }


});
export default InterViewAndGD;