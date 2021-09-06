import React from 'react';
import { FlatList } from 'react-native';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

import HeadingsForSection from './HeadingsForSection';
import ImageOrVideo from './ImageOrVideo';
import { useNavigation } from '@react-navigation/native';
import TimesActivityIndicator from '../Components/TimesActivityIndicator';

const ArticleVideo = props => {
  const navigation = useNavigation();
  let sectionHeading = props.SectionHeading

  return (

    <View style={styles.pageView}>
      {sectionHeading &&
<HeadingsForSection title={sectionHeading} bottomText={props.bottomText}/>
        }
      
      {props.loading ?  <TimesActivityIndicator api={true} />  : 
      <FlatList
        data={props.apiData}
        keyExtractor={item => item.keyIndex}

        renderItem={({ item }) => (
          <View style={styles.videoAndArticle}>
        
              <ImageOrVideo video={""} image={item.primeThumb} imgMode={'contain'} height={60} width={70}/>
              <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', { articleID: item.ArticleId })}>
              <Text style={styles.articleHeading}>{item.title}</Text>
              </TouchableOpacity>
           
          </View>
          
        )} />
        }
    </View>

  );
};

const styles = StyleSheet.create({
  pageView: {
 //margin:10,
  marginBottom:30
  
    
   
  },
  headings: {
    color: "#F02F39",
    fontWeight: "700",
  },
  
 
  videoAndArticle: {
    flexDirection: 'row',
    width:'80%',
    
    alignItems:'center'
  },
  articleHeading: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft:10,
   // padding: 10,
    //width:'90%'

  },
});
export default ArticleVideo;