import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import JobSearchCard from '../Components/JobSearchCard';
import TimesActivityIndicator from '../Components/TimesActivityIndicator';


const JobSearch = props => {


  const [isloading, setLoading] = useState()
  const [articleSearchData, setArticleSearchData] = useState();
  const [topArticle, setTopArticle] = useState("Loading");

  useEffect(() => {
    articleSearchApi()

  }, []);

  const mysearch = "job" /* route.params.mysearch  */
  console.log(mysearch)
  const articleSearchApi = () => {
    setLoading(true)
    fetch(global.baseURL + '/api/apiTimes/SearchArticles', {
      method: 'POST',
      timeout: 10000,
      headers: {
        Accept: 'application/json', 'Content-Type': 'application/json',
        Authorization: 'Token 77927b69bb144b065ca11bf2a9d452819cd852db'
      },
      body: JSON.stringify(
        {
          "SearchCategory": "",
          "SearchTerm": (mysearch),
          "page": "1"
        }


      )
    })
      .then((response) => response.json())

      .then((result) => {
        ///console.log('hi')   

        setArticleSearchData(result.data)
        setTopArticle(result.data[0])
      })
      .finally(() => setLoading(false))

      .catch((error) => console.log(error))
  }


  return (
    <View style={styles.pageView}>
      <JobSearchCard />
    </View>

  );
};

const styles = StyleSheet.create({
  pageView: {
    flex: 1
  }

});
export default JobSearch;