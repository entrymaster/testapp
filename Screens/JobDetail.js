import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Share, Linking } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { AntDesign } from "@expo/vector-icons";
import TimesButton from "../Components/TimesButton";
import { Image } from "react-native-elements/dist/image/Image";
import { ScrollView } from "react-native-gesture-handler";

import { TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements/dist/overlay/Overlay";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as WebBrowser from 'expo-web-browser';
import TimesActivityIndicator from "../Components/TimesActivityIndicator";

const JobDetail = ({ props, navigation, route }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [jobsAdsDetails, setJobAdsDetails] = useState([]);
  const [isloading, setLoading] = useState();
  const [starKey, setStarKey] = useState(true);
  const { JobId } = route.params;
  const adId = route.params.adId;

  const onShare = async () => {
    const result = await Share.share({
      message: "Visit www.timesascent.com",
    });
  };
  const applyHandler = () => {
    setOverlayVisible(true);
  };

  useEffect(() => {
    jobDetailAPI();
  }, []);

  const jobDetailAPI = () => {
    setLoading(true);
    fetch(global.baseURL + "/api/apiTimes/GetJobCard", {
      method: "POST",
      timeout: 10000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token 77927b69bb144b065ca11bf2a9d452819cd852db",
      },
      body: JSON.stringify({
        "JobId": JobId,
      }),
    })
      .then((response) => response.json())

      .then((result) => {
        //console.log(result.data)
        setJobAdsDetails(result.data);
      })
      .finally(() => setLoading(false))

      .catch((error) => console.log(error));
  };

  const emailHandler = () => {
    Linking.openURL('mailto:' + (jobsAdsDetails.companyEmail) + '?subject=Job Application&body=Hi, I would like to apply for a job in your organization')
  };

  const callHandler = () => {
    Linking.openURL('tel:+919565155000')
  };

  const WalkInHandler = () => {

  };

  const websiteHandler = async () => {
    console.log(jobsAdsDetails.companyWebsite)
    const website = JSON.stringify(jobsAdsDetails.companyWebsite)
    let result = await WebBrowser.openBrowserAsync("https://www.rozgaarindia.com/");
    WebBrowser.dismissBrowser()
  }

  const starKeyHandler = () => {
    setStarKey(!starKey)
  }

  const sample = "../assets/AdSampleImg.png";
  return (
    <View style={styles.pageView}>
      {isloading ? <TimesActivityIndicator /> :
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleAndShare}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.mainHeading}> Job Detail </Text>
              <TouchableOpacity
                onPress={() => {
                  onShare();
                }}
              >
                <AntDesign name="sharealt" size={24} color="grey" />
              </TouchableOpacity>
            </View>
            <View >
              <TouchableOpacity style={{ flexDirection: "column", alignItems: "center" }} onPress={() => { starKeyHandler() }} >
                {starKey ? <AntDesign name="staro" size={24} color="black" /> :
                  <AntDesign name="star" size={24} color="#F02F39" />
                }
                {/* <AntDesign name="star" size={24} color="#F02F39" /> */}
                <Text style={styles.topIconContent}>Save Job</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Divider style={styles.headingUnderline} />
          <View style={styles.companyAndPosted}>
            <Text style={styles.companyName}>{jobsAdsDetails.CompanyName} </Text>
            <Text>Posted on {jobsAdsDetails.issueDate}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("JobAdsFullPage", { fullAd: jobsAdsDetails.imageUrl });
            }}
          >
            <View style={{ alignSelf: 'center' }}>
              <Image
                style={styles.imgPlacement}
                source={{ uri: jobsAdsDetails.imageUrl }}
              />
            </View>
          </TouchableOpacity>
          <Divider style={styles.sectionDivider} />
          <View style={styles.locationAndPositionContainer}>
            <View
              style={{
                alignItems: "center",
                alignContent: "center",
                width: "50%",
              }}
            >
              <Image style={{ height: 30, width: 30 }} source={require('../assets/JobDetailLocation.png')} />
              {/*   <Entypo name="location-pin" size={30} color="black" /> */}
              <Text style={styles.iconHeading}>Location</Text>
              <Text style={styles.topIconContent}>
                {jobsAdsDetails.city},{jobsAdsDetails.country}{" "}
              </Text>
            </View>
            <Divider orientation="vertical" width={1} />
            <View style={styles.positionLocationIcon}>
              <Image style={{ height: 30, width: 30 }} source={require('../assets/JobDetailPosition.png')} />
              <Text style={styles.iconHeading}>Position</Text>
              <Text style={styles.topIconContent}>
                {jobsAdsDetails.positionTitle}
              </Text>
            </View>
          </View>

          <Divider style={styles.sectionDivider} />

          <Text style={styles.subHeadings}>Job Description </Text>
          <Text style={styles.subContent}>{jobsAdsDetails.jobDescription}</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.tags}>
              <Text style={styles.tagsTitle}> {jobsAdsDetails.Category} </Text>
            </View>
            <View style={styles.tags}>
              <Text style={styles.tagsTitle}> {jobsAdsDetails.Industry} </Text>
            </View>
          </View>
          <Divider style={styles.sectionDivider} />
          <Text style={styles.subHeadings}>Company Detail </Text>
          <Text style={styles.subContent} numberOfLines={2}>{jobsAdsDetails.companyDetails}</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('CompanyProfilePage', { companyId: jobsAdsDetails.companyId, adId: adId }) }} >
            <Text style={{ color: '#F02F39', padding: 10, textAlign: 'right' }}> Read More</Text>
          </TouchableOpacity>
          <Divider style={styles.sectionDivider} />
          <Text style={styles.subHeadings}>Application Detail </Text>
          <Text style={styles.subContent}>
            {jobsAdsDetails.applicationDetails}
          </Text>

          <Divider style={styles.sectionDivider} />
          <Text style={styles.subHeadings}>Salary</Text>
          <Text style={styles.subContent}>30,000 - 60,000 p.a. </Text>

          <Overlay
            isVisible={overlayVisible}
            overlayStyle={styles.overLayAlignment}
          >
            <View style={{ alignSelf: "flex-end" }}>
              <TouchableOpacity
                onPress={() => {
                  setOverlayVisible(false);
                }}
              >
                <MaterialCommunityIcons
                  name="close-circle"
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.headingOverlay}>
              How would you like to apply for this job ?
            </Text>
            <View style={styles.rowTabs}>
              <View>
                <TouchableOpacity style={styles.iconAndHead} onPress={() => { emailHandler() }}>
                  <MaterialCommunityIcons
                    name="email-check"
                    size={34}
                    color="#F02F39"
                  />
                  <View style={styles.actionButton}>

                    <Text style={styles.contactIcon}>EMAIL</Text>

                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.iconAndHead} onPress={() => { callHandler() }}>
                  <MaterialCommunityIcons
                    name="cellphone-charging"
                    size={34}
                    color="#F02F39"
                  />
                  <View style={styles.actionButton}>
                    <Text style={styles.contactIcon}>Call</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.rowTabs}>
              <View>
                <TouchableOpacity style={styles.iconAndHead} onPress={() => { websiteHandler() }}>
                  <MaterialCommunityIcons name="walk" size={34} color="#F02F39" />
                  <View style={styles.actionButton}>
                    <Text style={styles.contactIcon}>Walk In</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View >
                <TouchableOpacity style={styles.iconAndHead} onPress={() => { websiteHandler() }}>
                  <MaterialCommunityIcons name="web-clock" size={34} color="#F02F39" />
                  <View style={styles.actionButton}>
                    <Text style={styles.contactIcon}>Website</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Overlay>


        </ScrollView>
      }
      <View style={styles.buttonPlacement}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EasyApply');
          }}
        >
          <TimesButton
            buttonText={"Easy Apply"}
            iconButton={true}
            buttonColor={"#F02F39"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageView: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 100,
  },
  companyAndPosted: {
    marginVertical: 20,
  },
  companyName: {
    color: "#F02F39",
    fontWeight: "bold",
    fontSize: 20,
  },
  mainHeading: {
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 10,
  },
  headingUnderline: {
    borderWidth: 5,
    width: "20%",
    borderColor: "red",
    marginTop: 10,
    marginLeft: 5,
  },
  titleAndShare: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subHeadings: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  subContent: {
    paddingVertical: 10,
    color: "grey",
  },
  sectionDivider: {
    marginTop: 10,
  },
  imgPlacement: {
    height: 150,
    width: 300,
    alignSelf: "center",
    resizeMode: "contain",
    // vmaxHeight:200,
    marginBottom: 20,
  },
  buttonPlacement: {
    bottom: 5,
    position: "absolute",
    width: "85%",
    alignSelf: "center",
  },
  contactIcon: {
    //color:'white',
    fontWeight: "bold",
    fontSize: 12,
    padding: 3,
  },
  iconAndHead: {
    alignItems: "center",

    margin: 10,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
  },
  headingOverlay: {
    fontSize: 16,
    margin: 8,
    fontWeight: "bold",
  },
  overLayAlignment: {
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    height: 400,
  },
  actionButton: {
    height: 25,
    margin: 5,
    width: 60,
    //backgroundColor:'#F02F39',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  rowTabs: {
    flexDirection: "row",
    padding: 10,
  },
  topIconContent: {
    color: "grey",
    textAlign: "center",
    marginTop: 5,
  },
  iconHeading: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 10,
  },
  locationAndPositionContainer: {
    flexDirection: "row",
    margin: 10,
    marginTop: 20,
    width: "95%",
    alignContent: "center",
    justifyContent: "space-between",
  },

  positionLocationIcon: {
    alignItems: "center",
    alignContent: "center",
    width: "50%",
  },
  tags: {
    //backgroundColor:'#3ebff1',
    borderRadius: 10,
    width: "40%",
    margin: 10,
    borderWidth: 1,
    borderColor: "#F02F39"
  },
  tagsTitle: {
    padding: 6,
    justifyContent: 'center',
    alignContent: 'center',
    color: 'grey',
    // fontWeight:'500',
    fontSize: 12,
    textAlign: 'center'
  }
});
export default JobDetail;
