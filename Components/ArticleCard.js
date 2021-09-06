import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, StyleSheet, Text, Image, FlatList, Dimensions } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import ImageOrVideo from "./ImageOrVideo";
import TimesActivityIndicator from "../Components/TimesActivityIndicator";
import HeadingsForSection from "./HeadingsForSection";

const ArticleCard = (props) => {
  const navigation = useNavigation();
  let test = "../assets/Group636.jpg";
  let sectionHeading = props.SectionHeading

  const articleType = props.articleType

  const [recommendedArticles, setRecommendedArticles] = useState()

  const [featuredArticles, setfeaturedArticles] = useState()
  // console.log(props.apiData);
  const adId = props.adId
  




  const articleSwitch = (type) => {
    switch (type) {
      case "Recommended":
        return (

          <View style={styles.pageView}>

            <HeadingsForSection title={sectionHeading} bottomText={props.bottomText} />
            {props.loading ? <TimesActivityIndicator api={true} /> :
              <FlatList
                data={props.apiData}
                keyExtractor={item => item.keyIndex}
                renderItem={({ item }) => (
                  <View>

                    {/*   <Divider style={styles.dividerStyle} /> */}
                    <ImageOrVideo video={item.videoLink} image={item.imagePath} vmargin={10} />

                    <View>
                      {/* <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { articleID: item.ArticleId })}> */}
                        <Text style={styles.articleHeading}>{item.title}</Text>
                        <Text style={styles.shortDescContent}>{item.shortDescription}</Text>
                      {/* </TouchableOpacity> */}
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { articleID: item.ArticleId, adId: adId })}>
                      <Text style={styles.readMore}>Read More</Text>
                    </TouchableOpacity>
                    <Divider style={styles.dividerStyle} />
                  </View>
                )}
              />
            }
          </View>
        );
        break;

      case "Featured":
        return (
          <View style={styles.pageView}>
            {sectionHeading &&
              <View>

                <HeadingsForSection title={sectionHeading} bottomText={props.bottomText} />

              </View>
            }
            {props.loading ? <TimesActivityIndicator api={true} /> :
              <FlatList
                data={props.apiData}
                keyExtractor={item => item.keyIndex}

                renderItem={({ item }) => (

                  <View>


                    <View>
                      <Text style={styles.featuredHeading}>{item.title}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { articleID: item.ArticleId, adId:adId })}>
                      <Text style={styles.readMore}>Read More</Text>
                    </TouchableOpacity>
                    <Divider style={styles.newdividerStyle} />
                  </View>
                )}
              />
            }
          </View>
        );
        break;

      case "InterView":
        return (
          <View style={styles.pageView}>
            <HeadingsForSection title={sectionHeading} bottomText={props.bottomText} />
            {props.loading ? <TimesActivityIndicator api={true} /> :
              <FlatList
                data={props.apiData}
                keyExtractor={item => item.keyIndex}

                renderItem={({ item }) => (
                  <View>
                    <View>
                      <Text style={styles.interViewTitle}>{item.title}</Text>
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { articleID: item.ArticleId,adId: adId })}>
                        <Text style={styles.articleContent}>{item.shortDescription}...  <Text style={styles.readMore}>view more</Text></Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )} />
            }

          </View>
        );
        break;

      case "RecommendedInJobs":
        return (

          <View style={styles.pageView}>

            <Text style={styles.headings}>{sectionHeading}</Text>
            {props.loading ? <TimesActivityIndicator api={true} /> :
              <FlatList
                data={props.apiData}
                keyExtractor={item => item.keyIndex}
                renderItem={({ item }) => (
                  <View style={{ borderWidth: 0.5, borderColor: 'grey', marginVertical: 10, padding: 5 }}>

                    <Divider style={styles.dividerStyle} />
                    <ImageOrVideo video={item.videoLink} image={item.imagePath} vmargin={0} />
                    {/*  <Image style={styles.articleImageForJobs} source={require(test)} /> */}
                    <View style={{ padding: 10 }}>
                      <Text>{item.Update_At}</Text>
                      <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { articleID: item.ArticleId })}>
                        <Text style={styles.articleHeading}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { articleID: item.ArticleId, adId: adId })}>
                      <Text style={styles.readMore}>Read More</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            }
          </View>
        );
        break;

      case "RelatedArticles":
        return (

          <View style={styles.pageView}>


            {props.loading ? <TimesActivityIndicator api={true} /> :
              <FlatList
                data={props.apiData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.keyIndex}
                renderItem={({ item }) => (
                  <View style={styles.relatedArticleBox}>


                    <ImageOrVideo video={item.videoLink} image={item.imagePath} vmargin={0} borderTopLeftRadius={10} borderTopRightRadius={10} />
                    <View style={{ padding: 10, minHeight: 180 }}>
                      <Text style={styles.relatedDate}>{item.Update_At}</Text>
                      <Text style={styles.articleHeading}>{item.title}</Text>
                      <Text style={styles.relatedSubContent} numberOfLines={4}>{item.ShortDescription}</Text>
                    </View>
                    <Divider />
                    <TouchableOpacity onPress={() => navigation.navigate('ArticleSearch', { mysearch: item.mysearch })}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                        <MaterialIcons name="next-plan" size={24} color="#F02F39" />
                        <Text style={styles.readMoreRelatedArticles}> Read More</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              />
            }
          </View>
        );
        break;

      case "ShadowArticleCard":
        return (

          <View style={styles.pageViewShadowArticle}>

            <Text style={styles.headings}>{sectionHeading}</Text>
            {props.loading ? <TimesActivityIndicator api={true} /> :
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

                      <Text style={styles.articleHeading}>{item.title}</Text>
                      <Text style={styles.relatedSubContent} numberOfLines={4}>{item.shortDescription}...</Text>
                      <Text style={styles.readMoreShadowArticles}> Read More</Text>
                    </View>

                  </View>
                )}
              />
            }
          </View>
        );
        break;
      case "FocusedShadowArticleCard":
        return (

          <View style={styles.pageViewShadowArticle}>
            <HeadingsForSection title={'EXPERT OPINION'} />
            <Text style={styles.headings}>{sectionHeading}</Text>
            {props.loading ? <TimesActivityIndicator api={true} /> :
              <FlatList
                data={props.apiData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.keyIndex}
                renderItem={({ item }) => (
                  <View style={styles.shadowArticleCard}>
                    <ImageOrVideo video={item.videoLink} image={item.imagePath} borderTopLeftRadius={20} borderTopRightRadius={20} />
                    <View style={{ padding: 10 }}>

                      <Text style={styles.articleHeading}>{item.title}</Text>
                      {/*  <Text style={styles.relatedSubContent}  numberOfLines={4}>{item.ShortDescription}...</Text>
                    <Text style={styles.readMoreShadowArticles}> Read More</Text>  */}
                    </View>

                  </View>
                )}
              />
            }
          </View>
        );
        break;
      default:
        console.log("Article type not found");
    }
  };

  return <View>{articleSwitch(props.articleType)}</View>;
};
const styles = StyleSheet.create({
  pageView: {
    //padding: 10,
  },

  pageViewShadowArticle: {
    padding: 5,
  },

  headings: {
    color: "#F02F39",
    fontWeight: "700",
  },

  dividerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: "#e1e8ee",

  },

  newdividerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#e1e8ee",
    padding: 5,
    marginVertical: 10,
  },
  articleHeading: {
    fontWeight: "600",
    fontSize: 18,
  },
  readMore: {
    textAlign: "right",
    color: "#F02F39",
    marginTop: 10,
    fontWeight: '400',
    marginBottom: 10

  },
  articleImage: {
    alignSelf: "center",
    width: "100%",
    margin: 5,

  },

  articleImageForJobs: {
    alignSelf: "center",
    width: "100%",
    resizeMode: 'contain',


  },
  featuredHeading: {
    fontWeight: "600",
    fontSize: 18,
    marginTop: 5
  },
  interViewTitle: {
    fontWeight: "600",
    fontSize: 18,
    marginTop: 5

  },
  articleContent: {
    color: 'grey',
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: '600'
  },
  relatedArticleBox: {
    width: Dimensions.get('window').width - 100,

    backgroundColor: "white",
    padding: 1,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 5,
  },
  readMoreRelatedArticles: {

    marginHorizontal: 5,
    color: "#F02F39",

    fontWeight: 'bold',

  },
  relatedDate: {
    //marginBottom: 10
  },
  relatedSubContent: {
    color: 'grey',
    marginVertical: 10
  },
  shadowArticleCard: {
    width: Dimensions.get('window').width - 80,

    backgroundColor: "white",
    padding: 1,
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
  readMoreShadowArticles: {
    marginHorizontal: 5,
    color: "#F02F39",
    textAlign: 'right',
    fontWeight: 'bold',

  },
  articleImageForShadowArticle: {
    alignSelf: "center",
    width: "100%",

  },
  shortDescContent: {
    color: 'grey',
    paddingVertical: 5
  }
});
export default ArticleCard;
