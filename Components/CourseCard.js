import React from "react";

import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { FontAwesome } from '@expo/vector-icons';

const CourseCard = (props) => {
  let test = "../assets/Group636.jpg";

  const sampleData = [
    {
      keyIndex: "1",
      option: "Experience"
    },
    {
      keyIndex: "2",
      option: "Skills"
    },
    {
      keyIndex: "3",
      option: "Hobbies"
    },
    {
      keyIndex: "4",
      option: "Language"
    },
  ];

  const courseCardSwitch = (type) => {
    switch (type) {
      case "CourseDetail":
        return (
          <View>
            <FlatList
              data={sampleData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.keyIndex}
              renderItem={({ item }) => (
                <View style={styles.cardContainerView}>
                  <View style={styles.nameAndImg}>
                    <Image style={styles.courseImg} source={require(test)} />
                    <Text style={styles.courseName}>Data science with python </Text>
                  </View>
                  <View style={styles.textAndDetail}>
                    <Text style={styles.headingJobs}> Jobs available: <Text style={{ fontWeight: "bold" }}> 29094 </Text></Text>
                    <Text style={styles.headingJobs}> Duration: <Text style={{ fontWeight: "bold" }}> 30 days </Text></Text>
                    <Image source={require('../assets/coursera.png')} style={styles.courseraimg} />
                    <View style={{ padding: 10 }}>
                      <Divider />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                      <Text>30 People have bought </Text>
                      <Text style={styles.courseBtn}>View Courses </Text>
                    </View>
                  </View>
                </View>
              )} />
            <TouchableOpacity>
              <Text style={styles.event_ViewText}>View More</Text>
            </TouchableOpacity>
            <View style={styles.event_ViewMore}></View>
          </View>
        );
        break;

      case "freeCourses":
        return (
          <View>
            <FlatList
              data={sampleData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.keyIndex}
              renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                  <Image style={styles.freecourseImg} source={require(test)} />
                  <View style={styles.textAndDetail}>
                    <Text style={styles.freeTitle}>The Complete 2021 web development bootcamp</Text>
                    <View style={{ padding: 10 }}>
                      <View style={styles.ReviewStyle}>
                        <Text style={styles.ReviewText}>4.7</Text>
                        <View style={styles.ReviewIcon}>
                          <FontAwesome name='star' size={14} color="#FFB653" style={styles.StarIcon} />
                          <FontAwesome name='star' size={14} color="#FFB653" style={styles.StarIcon} />
                          <FontAwesome name='star' size={14} color="#FFB653" style={styles.StarIcon} />
                          <FontAwesome name='star' size={14} color="#FFB653" style={styles.StarIcon} />
                          <FontAwesome name='star-half-empty' size={14} color="#FFB653" style={styles.StarIcon} />
                        </View>
                        <Text style={styles.ReviewTextSecond}>(138,087)</Text>
                      </View>
                      <View>
                        <Image source={require('../assets/udemy-2-logo.png')} style={styles.NITTImages} />
                      </View>
                      <Divider />
                      <Text style={styles.free}>Free </Text>
                    </View>

                  </View>
                </View>
              )} />

          </View>
        );
        break;

      default:
        console.log("Article type not found");
    }
  };

  return (

    <View>

      {courseCardSwitch(props.cardType)}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerView: {

    flex: 1,
    alignSelf: "center",
    borderRadius: 10,

    width: 320,
    height: 310,
    backgroundColor: "white",

    margin: 8,
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
  cardContainer: {

    flex: 1,
    alignSelf: "center",
    borderRadius: 10,

    width: 320,
    height: 350,
    backgroundColor: "white",

    margin: 8,
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
  courseImg: {
    height: 70,
    width: 80,
  },
  courseName: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    color: 'white',
    width: "80%"
  },
  nameAndImg: {
    flexDirection: "row",
    backgroundColor: "green",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  textAndDetail: {
    padding: 10
  },
  headingJobs: {
    paddingVertical: 5,
    fontSize: 20
  },
  courseraimg: {
    margin: 5
  },
  courseBtn: {
    color: '#0090ff',
    fontWeight: 'bold',
    fontSize: 16
  },
  freecourseImg: {
    width: '100%',
    alignSelf: 'center',
    height: 150
  },
  freeTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  free: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 10
  },
  event_ViewMore: {
    borderBottomWidth: 2,
    width: '92%',
    alignSelf: 'center',
    borderColor: '#c2c2c2'
  },
  event_ViewText: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
    alignSelf: 'flex-end',
    color: '#f0333c'
  },
  ReviewStyle: {
    flexDirection: 'row',
    paddingBottom: 14
  },
  ReviewText: {
    color: '#B9B9B9'
  },
  ReviewIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6
  },
  StarIcon: {
    paddingLeft: 3
  },
  ReviewTextSecond: {
    fontSize: 14,
    paddingLeft: 10,
    color: '#B9B9B9'
  },
  NITTImages: {
    width: 100,
    height: 45
  },
});
export default CourseCard;
