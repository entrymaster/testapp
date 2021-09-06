import React from 'react';

import { View, StyleSheet, Animated } from 'react-native'
import HeaderMain from '../Components/HeaderMain';
import ExpertQueryCard from '../Components/ExpertQueryCard'
import GlobalHrTrends from '../Components/GlobalHrTrends'
import RecruitmentConsultants from '../Components/RecruitmentConsultants'
import HeadingsForSection from '../Components/HeadingsForSection';
import UsefulTools from '../Components/UsefulTools';
import RozgaarHome from '../Components/RozgaarHome';
import Footer from '../Components/Footer';
import AdvertArea from '../Components/AdvertArea';
import GlobalHR from '../Components/GlobalHR';
// import GlobalHR from '../Components/GlobalHR';
import HRExpert from '../Components/HRExpert';


const HRpro = () => {

  const adId = 'HR'
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
        <ExpertQueryCard />
        <View style={styles.itemContainer}>
          <HeadingsForSection title={'GLOBAL HR TRENDS'} />
          <GlobalHR />
          <RozgaarHome />
          <AdvertArea advertType="Rectangle" adId={adId + '-' + '001'}/>
          <HRExpert />
          <HeadingsForSection title={'GLOBAL HR TRENDS'} />
          <GlobalHrTrends />
        </View>
        {/* <HeadingsForSection title = {'RECRUITMENT CONSULTANTS'}/>
            <RecruitmentConsultants/> */}
        <AdvertArea advertType="DualSquare" adId={adId + '-' + '002'}/>
        <AdvertArea advertType="Rectangle" adId={adId + '-' + '003'}/>
        <UsefulTools />
        <Footer />
      </Animated.ScrollView>
    </View>


  )

};
const styles = StyleSheet.create({

  pageView: {
    flex: 1,
    backgroundColor: 'white',

  },
  imageView: {
    margin: 30,
    alignItems: 'center'
  },
  itemContainer: {
    paddingHorizontal: 14
  }


});
export default HRpro;