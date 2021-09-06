import React from "react";
import { View, StyleSheet, Text, Animated, TouchableOpacity } from "react-native";
import AdvertArea from "../Components/AdvertArea";
import CourseCard from "../Components/CourseCard";
import EventsCard from "../Components/CourseCard";
import Footer from "../Components/Footer";
import HeaderMain from "../Components/HeaderMain";
import HeadingsForSection from "../Components/HeadingsForSection";
import JobsSearchBar from "../Components/JobsSearchBar";
import BestSellingCourses from "../Components/BestSellingCourses";
import RozgaarHome from "../Components/RozgaarHome";
import UsefulTools from "../Components/UsefulTools";
import OffineCourseScreen from "../Components/OffineCourseScreen";
import CoursesPartners from "../Components/CoursesPartners";
import RozgaarCard from "../Components/RozgaarCard";
import OfflineCoursePage from "../Components/OfflineCoursePage";
import PopularWithStudents from "../Components/PopularWithStudents";
import { useNavigation } from '@react-navigation/native'


const Courses = () => {
  const adId = 'CO'
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

  const navigation = useNavigation()
  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY },
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
      } >
        <HeaderMain />
      </Animated.View>
      <Animated.ScrollView showsVerticalScrollIndicator={false}
        scrollEventThrottle={5}
        onScroll={handleScroll}
        contentContainerStyle={{ paddingTop: 100, paddingBottom: 10 }}
      >
        <View style={styles.container}>
          <View style={{ paddingVertical: 10 }}>
            <HeadingsForSection title={"TRENDING JOBS"} />
            <CourseCard cardType={"CourseDetail"} />
          </View>
          <RozgaarHome />
          <View style={{ marginBottom: 10 }}>
            <HeadingsForSection title={"FREE COURSES"} />
            <CourseCard cardType={"freeCourses"} />
          </View>
          <AdvertArea advertType={"DualSquare"} adId={adId + '-' + '001'} />
          <HeadingsForSection title={'POPULAR WITH STUDENTS'} />
          <PopularWithStudents />
          <AdvertArea advertType={"Rectangle"} adId={adId + '-' + '002'} />
          <HeadingsForSection title={"COURSES PARTNERS"} />
          <CoursesPartners />
          <RozgaarCard />
          <BestSellingCourses />
          <AdvertArea advertType={"Rectangle"} adId={adId + '-' + '003'} />
          <HeadingsForSection title={"OFFLINE COURSES"} />
          <OfflineCoursePage />
          <AdvertArea advertType={"DualSquare"} adId={adId + '-' + '004'} />
          <OffineCourseScreen />
          <AdvertArea advertType={"Rectangle"} adId={adId + '-' + '005'} />
          <UsefulTools />
           <Footer />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('CXO')}>
          <Text>
            CXO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CourseList')}>
          <Text>
            Course List
          </Text>
        </TouchableOpacity>
      </Animated.ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  // adImage:{

  // },
  pageView: {
    flex: 1,
    backgroundColor: "white",
  },
  imageView: {
    margin: 30,
    alignItems: "center",
  },
  container: {
    padding: 10
  }
});

export default Courses;
