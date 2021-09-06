import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Dimensions, Share } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { TabRouter, useNavigation } from '@react-navigation/native';
import TimesActivityIndicator from "../Components/TimesActivityIndicator";
import HeadingsForSection from "../Components/HeadingsForSection";
import { Image } from 'react-native-elements';

const JobCard = (props) => {
  const navigation = useNavigation();
const adId=props.adId

  const [starRed, setStarRed] = useState(false);
  const [starKey, setstarKey] = useState()

  console.log(starRed)
  const onShare = async () => {


    const result = await Share.share({
      message: 'Visit www.timesascent.com'
    });

  }

  let test = "../assets/sampleImgJob.png";
  const windowWidth = Dimensions.get('window').width;


  const starColorCheck = (key) => {


    setstarKey(key)

  }




  return (
    <View style={styles.pageView}>
      <HeadingsForSection title={props.SectionHeading} />
      {props.loading ? <TimesActivityIndicator api={true} /> :
        <FlatList
          data={props.jobAds}
          keyExtractor={item => item.keyIndex}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.jobBox}>

              <Image style={styles.adImage} source={{ uri: item.imageUrl }} />
              <View style={{ minHeight: 280 }}>
                <TouchableOpacity onPress={() => navigation.navigate('JobDetail', { JobId: item.JobId })}>
                  <View style={{ minHeight: 60, }}>
                    <Text numberOfLines={2} style={styles.companyName}>{item.CompanyName}</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.contentAndIconArea}>
                  <View style={styles.dateAndTime}>
                    <Entypo name="stopwatch" size={20} color="black" />
                    <Text style={styles.date}> {item.issueDate} </Text>
                  </View>
                  <View style={styles.location}>
                    <Entypo name="location-pin" size={20} color="black" />
                    <Text style={styles.date}>{item.locationName}</Text>
                  </View>
                </View>
                <Text style={styles.jobContent} numberOfLines={4}>{item.jobDescription} </Text>
                <Text style={{ fontWeight: 'bold', paddingHorizontal: 10 }}>Position:<Text style={styles.package}> {item.positionTitle} </Text></Text>
                <View style={styles.dateAndButton}>
                  <Text style={styles.dateOfPost}>{item.Category} </Text>

                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('JobDetail', { JobId: item.JobId,adId:adId })}>
                <Text style={styles.viewMore}> View Details </Text>
              </TouchableOpacity>
              <Divider />
              <View style={styles.bottomButtons}>
                {!props.hideSaveJob &&
                  <TouchableOpacity onPress={() => starColorCheck(item.keyIndex)} >
                    <View style={styles.bottomAction}>
                      {starKey !== item.keyIndex ? <AntDesign name="staro" size={20} color="black" /> :
                        <AntDesign name="star" size={20} color="#F02F39" />
                      }

                      <Text style={styles.shareAndSave}>Save Job </Text>
                    </View>
                  </TouchableOpacity>
                }
                <TouchableOpacity onPress={() => { onShare() }} >
                  <View style={styles.bottomAction}>

                    <FontAwesome name="share" size={20} color="#F02F39" />
                    <Text style={styles.shareAndSave}>Share Job </Text>

                  </View>
                </TouchableOpacity>

              </View>
            </View>
          )}
        />
      }

    </View>
  );
};

const styles = StyleSheet.create({
  pageView: {
    //padding: 10,
  },
  jobBox: {
    width: Dimensions.get('window').width - 100,
    padding: 10,
    backgroundColor: "white",
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
  adImage: {
    height: 180,
    resizeMode: 'cover',
    /* 
     height:50,
     width:50 */
    width: '100%',
  },
  companyName: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
  dateAndTime: {
    flexDirection: "row",

    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  contentAndIconArea: {
    flexDirection: "row",
    //justifyContent:"space-between",
    paddingHorizontal: 10,
  },
  date: {
    fontSize: 14,
  },
  jobContent: {
    fontSize: 16,
    color: "grey",
    padding: 10,
    //marginVertical: 10,

  },
  package: {
    color: "#F02F39",
    padding: 10,
  },
  dateOfPost: {
    color: "grey",
  },
  viewMore: {
    color: "#F02F39",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'right'
  },
  dateAndButton: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    padding: 10,
  },
  bottomAction: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  bottomButtons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    alignContent: 'center',


  },
  shareAndSave: {
    marginLeft: 10,

  },
  dividerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: "#e1e8ee",
    padding: 5,
    width: '90%',
    margin: 15

  },
});
export default JobCard;
