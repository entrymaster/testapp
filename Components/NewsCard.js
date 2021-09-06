
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import ImageOrVideo from "./ImageOrVideo";


const NewsCard = props => {
  const [recommendedArticles, setRecommendedArticles] = useState();
  const [isloading, setLoading] = useState();
  let test = "../assets/Group636.jpg";
  let sectionHeading = props.SectionHeading
  let toiLogo = "../assets/toilogo.jpeg"
  useEffect(() => {
    recommnededArticlesApi()

  }, []);

  const recommnededArticlesApi = () => {
    setLoading(true)
    fetch(global.baseURL + '/api/apiTimes/recommended_Articles', {
      method: 'POST',
      timeout: 10000,
      headers: {
        Accept: 'application/json', 'Content-Type': 'application/json',
        Authorization: 'Token 77927b69bb144b065ca11bf2a9d452819cd852db'
      },
      body: JSON.stringify({

      })
    })
      .then((response) => response.json())

      .then((result) => {
        // console.log(result)
        setRecommendedArticles(result.data)
      })
      .finally(() => setLoading(false))

      .catch((error) => console.log(error))

  }

  const newsSwitch = (type) => {
    switch (type) {
      case "TimesSource":
        return (

          <View style={styles.pageViewShadowArticle}>


            <FlatList
              data={props.apiData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.keyIndex}
              renderItem={({ item }) => (
                <View style={styles.shadowArticleCard}>

                  {/* <Divider style={styles.dividerStyle} /> */}
                  <ImageOrVideo video={item.videoLink} image={item.imagePath} borderTopLeftRadius={20} borderTopRightRadius={20} />
                  <View style={{ paddingHorizontal: 10 }}>

                    <Text style={styles.articleHeading}>{item.Title}</Text>
                    <Text style={styles.relatedSubContent} numberOfLines={4}>{item.ShortDescription}...</Text>

                    <Text style={styles.date}>14 SEPT 2021 </Text>
                    <Text style={styles.relatedSubContent}>Source: </Text>
                    <Text>By Arnab Goswami (email@gmail.com)</Text>
                    <Image style={styles.sourceImage} source={require(toiLogo)} />

                  </View>

                </View>
              )}
            />
          </View>
        );
        break;

      case "NewsGen":
        return (

          <View style={styles.pageViewShadowArticle}>
            <FlatList
              data={props.apiData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.keyIndex}
              renderItem={({ item }) => (
                <View style={styles.shadowArticleCard}>

                  {/* <Divider style={styles.dividerStyle} /> */}
                  <ImageOrVideo video={item.videoLink} image={item.imagePath} borderTopLeftRadius={20} borderTopRightRadius={20} />
                  <View style={{ padding: 10 }}>

                    <Text style={styles.articleHeading}>{item.Title}</Text>
                    <Text style={styles.relatedSubContent} numberOfLines={4}>{item.ShortDescription}...</Text>

                    <Text style={styles.date}>14 SEPT 2021 </Text>
                    <Text style={styles.relatedSubContent}>Source: </Text>
                    <Text>By Arnab Goswami (email@gmail.com)</Text>

                  </View>

                </View>
              )}
            />
          </View>
        );
        break;


      case "SponsoredCard":
        return (
          <View style={styles.pageView}>
            <Divider style={styles.dividerStyle} />
            <View style={styles.videoAndArticle}>
              <Image
                style={styles.videoArea}
                source={require(test)}
              />
              <Text style={styles.articleHeadingSponsored}>{props.ArticleTitle}</Text>
            </View>
            <Text numberOfLines={2} style={styles.newsContent}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</Text>
          </View>

        );
        break;


      default:
        console.log("Article type not found");
    }
  };


  return (
    <View>
      {newsSwitch(props.newsType)}
    </View>

  );
};

const styles = StyleSheet.create({
  pageViewShadowArticle: {
    //padding: 14,
  },
  headings: {
    color: "#F02F39",
    fontWeight: "700",
    paddingBottom: 10
  },

  dividerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: "#e1e8ee",
    padding: 5,
  },
  shadowArticleCard: {
    width: Dimensions.get('window').width - 80,
    backgroundColor: "white",
    padding: 2,
    margin: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  articleImageForShadowArticle: {
    alignSelf: "center",
    width: "100%",

  },
  articleHeading: {
    fontWeight: "600",
    fontSize: 18,
  },
  relatedSubContent: {
    color: 'grey',
    marginVertical: 10
  },
  date: {
    fontSize: 12
  },
  sourceImage: {
    width: '50%',
    resizeMode: 'contain',
    height: 50,
  },
  pageView: {
    paddingVertical: 10,
    width: '100%',
  },
  videoArea: {
    height: 60,
    width: 70
  },
  videoAndArticle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  articleHeadingSponsored: {
    fontWeight: '600',
    fontSize: 16,
    width: "75%",
    padding: 10,

  },
  newsContent: {
    color: 'grey'
  }

});
export default NewsCard;