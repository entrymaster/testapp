import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AdvertArea from '../Components/AdvertArea'
import JobCard from '../Components/JobCard'
import { Entypo } from '@expo/vector-icons';
import HeadingsForSection from '../Components/HeadingsForSection'
import Jobs from './Jobs'
import Footer from '../Components/Footer';
import TacentInputField from '../Components/TacentInputField'
import HeaderMain from '../Components/HeaderMain'
import TimesActivityIndicator from '../Components/TimesActivityIndicator'
// import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios'
import { Button, Overlay, Divider } from 'react-native-elements';
import TimesButton from '../Components/TimesButton'
import { Rating, AirbnbRating } from 'react-native-ratings';

import { ScreenStackHeaderCenterView } from 'react-native-screens'

const CompanyProfilePage = ({ props, navigation, route }) => {

  const adId= route.params.adId
  const [data, setData] = useState()
  const [companyName, setCompanyName] = useState();
  const [companyDesc, setCompanyDesc] = useState();
  const [jobsByCompany, setJobsByCompany] = useState()
  const [companyWebsite, setCompanyWebiste] = useState()
  const [companyIndustry, setCompanyIndustry] = useState()
  const [companyLogo, setCompanyLogo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isloading, setLoading] = useState()
  const [review, setReview] = useState()
  const [submit, setSubmit] = useState()
  const companyId = route.params.companyId
  // const logo = route.params.logo
  useEffect(() => {
    getCompanyInfo();
    getCompanyJobs();
  }, []);

  const DATA = [
    {
      id: '1',
      image: require("../assets/amanKhare.png"),

      text: 'Aman Khare',
      datetext: 'June 23,2021',
    },

  ];

  const getCompanyInfo = () => {
    setLoading(true)
    fetch(global.baseURL + '/api/apiTimes/GetCompanyDetail', {
      method: 'POST',
      timeout: 10000,
      headers: {
        Accept: 'application/json', 'Content-Type': 'application/json',
        Authorization: 'Token 77927b69bb144b065ca11bf2a9d452819cd852db'
      },
      body: JSON.stringify(
        {
          "CompanyId": (companyId)
        })
    })
      .then((response) => response.json())

      .then((result) => {
         //console.log(result)
        setData(result.data)
        setCompanyLogo(result.data.imagePath)
        setCompanyName(result.data.CompanyName)
        setCompanyDesc(result.data.companyDescription)
        setCompanyWebiste(result.data.website)
        setCompanyIndustry(result.data.Industry)
        //setCompanyDetail(result.data)

      })
      .finally(() => setLoading(false))

      .catch((error) => console.log(error))
  }
  const getCompanyJobs = () => {
    setLoading(true)
    fetch(global.baseURL + '/api/apiTimes/GetJobDetailCompany', {
      method: 'POST',
      timeout: 10000,
      headers: {
        Accept: 'application/json', 'Content-Type': 'application/json',
        Authorization: 'Token 77927b69bb144b065ca11bf2a9d452819cd852db'
      },
      body: JSON.stringify(
        {
          "CompanyId": (companyId)
        })
    })
      .then((response) => response.json())

      .then((result) => {
        // console.log(result)
        setJobsByCompany(result.data);
        //setCompanyDetail(result.data)

      })
      .finally(() => setLoading(false))

      .catch((error) => console.log(error))
  }
  // const strng = JSON.stringify(logo)
  // console.log(strng)
  // let logoNew = (strng)

  // const checkImage = () => {
  //   if (companyId === "25742") {
  //     return (
  //       require('../assets/25742.png')
  //     )
  //   }

  //   if (companyId === "10790") {
  //     return (
  //       require('../assets/15795.png')
  //     )
  //   }
  //   if (companyId === "32400") {
  //     return (
  //       require('../assets/32400.png')
  //     )
  //   }
  //   else {
  //     return (
  //       require('../assets/placeHolder.jpeg')
  //     )
  //   }
  // }

  const toggleOverlay = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      
      {isloading ? <TimesActivityIndicator /> :
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginLeft: 10, marginVertical: 10 }}>
            <HeadingsForSection title={companyName} />
          </View>
          {console.log(companyLogo)}
          <Image
            style={styles.logoImage}
            source={{uri:"http://timesascent.com" +companyLogo}}
          />

          <View style={{ marginLeft: 10, marginVertical: 10 }}>
            <HeadingsForSection title={'ABOUT'} />
          </View>
          <View style={styles.paraTextView}>
            <Text>
              {companyDesc}
              {/*   <Text style={styles.more}>....more</Text> */}
            </Text>
            <View style={styles.industryBox}>
              <Text style={{ padding: 10, textAlign: 'center', color: 'white', fontWeight: '700' }}>{companyIndustry}</Text>
            </View>
          </View>
          <View style={{ paddingVertical: 10, marginVertical: 10 }}>

            <View>
              <View style={{ marginLeft: 10 }}>
                <HeadingsForSection title={'WEBSITE'} />
              </View>
              <View style={styles.paraTextView}>
                <Text> {companyWebsite} </Text>
              </View>
            </View>

          </View>
          <JobCard jobAds={jobsByCompany} SectionHeading={'JOBS BY : ' + companyName} loading={isloading} />
          <Text> </Text>
          <AdvertArea advertType={"Square"} adId={adId + '-' + '007'}/>
          <Overlay isVisible={modalVisible} onBackdropPress={toggleOverlay}>

            <View style={styles.overlayhead}>
              <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                <Entypo name="cross" size={25} color="black" style={styles.buttonicon} />
              </TouchableOpacity>
              <Text style={styles.overlayTextHead}>Write a review</Text>
              <TextInput
                style={styles.inputFeild}
                multiline={true}
                value={review}
                onChangeText={(text) => setReview(text)}
              />
              <View style={{ marginVertical: 20 }}>
                <TouchableOpacity onPress={() => { setSubmit(review); setModalVisible(false) }} >
                  <TimesButton buttonText={'Post'}  buttonColor={"#F02F39"}/>
                </TouchableOpacity>
              </View>
            </View>
          </Overlay>
          <View style={{ paddingVertical: 10, marginVertical: 10 }}>
            <HeadingsForSection title={'Rate & Review'} />
          </View>
          <Rating
            showRating
            // onFinishRating={ratingCompleted}
            style={{ paddingVertical: 10 }}
            startingValue={0}

          />
          {/* <View style={styles.ratingView}>
            <Text style={styles.ratingText}>4.0</Text>
            <TouchableOpacity style={styles.reviewButton} onPress={toggleOverlay}>
              <Text style={styles.reviewButtonText}>Write a review</Text>
            </TouchableOpacity>
          </View> */}
          {/* <View style={styles.ratingIconView}>
            <Entypo name="star" size={40} color="#FFD700" />
            <Entypo name="star" size={40} color="#FFD700" />
            <Entypo name="star" size={40} color="#FFD700" />
            <Entypo name="star" size={40} color="#FFD700" />
            <Entypo name="star" size={40} color="#F1E5AC" />
          </View> */}

          <View style={styles.ratingBar1View}>
            <Text>5</Text>
            <View style={styles.ratingBar1}></View>
          </View>
          <View style={styles.ratingBar2View}>
            <Text>4</Text>
            <View style={styles.ratingBar2}></View>
          </View>
          <View style={styles.ratingBar3View}>
            <Text>3</Text>
            <View style={styles.ratingBar3}></View>
          </View>
          <View style={styles.ratingBar4View}>
            <Text>2</Text>
            <View style={styles.ratingBar4}></View>
          </View>
          <View style={styles.ratingBar5View}>
            <Text>1</Text>
            <View style={styles.ratingBar5}></View>
          </View>

          <View style={styles.reviewsView}>
            <Text style={styles.reviewText}>
              REVIEWS
            </Text>
            <TouchableOpacity style={styles.reviewButton} onPress={toggleOverlay}>
              <Text style={styles.reviewButtonText}>Write a review</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={DATA}
            keyExtractor={item => item.keyIndex}
            renderItem={({ item }) => (
              <View style={styles.revMainView}>
                <View style={styles.revView1}>
                  <Image source={item.image} style={styles.revImg1} />
                  <View>
                    <Text style={styles.revText}>{item.text}</Text>
                    <Text style={styles.revDate}>{item.datetext}</Text>
                  </View>
                </View>
                <View style={styles.revComment}>
                  <Text>{submit}</Text>
                </View>
              </View>
            )}
          />
          <View style={styles.viewMoreButtonView}>
            <TouchableOpacity style={{ width: 100, height: 30, alignSelf: 'flex-end' }}>
              <Text style={{ alignSelf: 'center', marginTop: 5, color: "red" }}>View More</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.revMainView}>
            <View style={styles.revView1}>
              <Image source={require("../assets/sumitSingh.png")} style={styles.revImg1} />
              <View>
                <Text style={styles.revText}>Nikita Goyal</Text>
                <Text style={styles.revDate}>June 23,2021</Text>
              </View>
            </View>
            <View style={styles.revComment}>
              <Text>Great atmosphere and ambience</Text>
            </View>
          </View> */}
          {/* <View > */}
          {/* <View style={styles.revMainViewEnd}>
              <View style={styles.revView1}>
                <Image source={require("../assets/sumitSingh.png")} style={styles.revImg1} />
                <View>
                  <Text style={styles.revText}>Sumit Singh</Text>
                  <Text style={styles.revDate}>June 23,2021</Text>
                </View>
              </View>
              <View style={styles.revComment}>
                <Text>Satisfactory service. Update and improvement is needed</Text>
              </View>
              <View style={styles.viewMoreButtonView}>
                <TouchableOpacity style={{ width: 100, height: 30, alignSelf: 'flex-end' }}>
                  <Text style={{ alignSelf: 'center', marginTop: 5, color: "red" }}>View More</Text>
                </TouchableOpacity>
              </View>
            </View> */}
          {/* </View> */}
          <Footer />
        </ScrollView>
      }
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  logoImage: {
     width: 200,
    height: 120,
    resizeMode: 'contain',
     alignSelf: 'center',


  },

  more: {
    color: "#FF0000",
    fontWeight: 'bold'
  },
  paraTextView: {
    paddingHorizontal: 14
  },

  reviewText: {
    color: "#FF0000",
    fontWeight: 'bold',
    paddingTop: 10
  },
  ratingView: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // marginLeft : 40
  },
  ratingText: {
    color: '#79C9A1',
    fontSize: 50,
    fontWeight: 'bold',
    paddingLeft: 50
  },
  ratingIconView: {
    flexDirection: "row",
    marginLeft: 52,
  },
  reviewButton: {
    padding: 6,
    borderRadius: 4,
    borderColor: '#fff',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 5,
    shadowRadius: 5,
    backgroundColor: '#fff',
    elevation: 8,  
    backgroundColor: '#fff',
  },
  ratingBar1View: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 30
  },
  ratingBar1: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 20,
    width: 260,
    backgroundColor: '#79C9A1',
    marginLeft: 15
  },
  ratingBar2View: {
    flexDirection: 'row',
    marginHorizontal: 30
  },
  ratingBar2: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 20,
    width: 180,
    backgroundColor: '#AED888',
    marginLeft: 15
  },
  ratingBar3View: {
    flexDirection: 'row',
    marginHorizontal: 30
  },
  ratingBar3: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 20,
    width: 100,
    backgroundColor: '#FFD935',
    marginLeft: 15
  },
  ratingBar4View: {
    flexDirection: 'row',
    marginHorizontal: 30
  },
  ratingBar4: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 20,
    width: 80,
    backgroundColor: '#FFB235',
    marginLeft: 15
  },
  ratingBar5View: {
    flexDirection: 'row',
    marginHorizontal: 30
  },
  ratingBar5: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 20,
    width: 40,
    backgroundColor: '#FF8C5A',
    marginLeft: 17
  },
  reviewsView: {
    // marginLeft: 30,
    // marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 14
  },
  revMainView: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    marginHorizontal: 20,
    paddingBottom: 30,

    // marginBottom : 50

  },
  revImg1: {
    width: 70,
    height: 70,

  },
  revView1: {
    flexDirection: "row",
    marginTop: 28
  },
  revText: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 5,
    marginLeft: 10
  },
  revDate: {
    marginLeft: 8,
    fontWeight: 'bold'
  },
  revComment: {
    marginTop: 30
  },
  revMainViewEnd: {
    marginHorizontal: 20
  },
  viewMoreButtonView: {
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingVertical: 20
  },
  industryBox: {
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#3ebff1',
    alignSelf: 'center',
    margin: 20
  },
  overlayhead: {
    width: 300,
    height: 300,
    //paddingVertical: 14,

    //justifyContent: 'center'
  },
  inputFeild: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#a2a2a2',
    paddingHorizontal: 10,
    fontSize: 18,
    textAlignVertical: "top",
    paddingTop: 8,
    lineHeight: 25,
    marginTop: 14,
    padding: 60
  },
  overlayTextHead: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop:20
  },
  buttonicon:{
    alignSelf:'flex-end'
  }


})

export default CompanyProfilePage
