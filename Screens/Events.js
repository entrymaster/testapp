import React from 'react';

import { View, StyleSheet, Animated } from 'react-native'
import HeaderMain from '../Components/HeaderMain';
import JobFairEvent from '../Components/JobFairEvent';
import PopularEvent from '../Components/PopularEvent';
import UsefulTools from '../Components/UsefulTools'
import AdvertArea from "../Components/AdvertArea";
import RozgaarHome from '../Components/RozgaarHome';
import Constants from 'expo-constants';
import Footer from "../Components/Footer";
import EventCard from '../Components/EventCard';

const Events = () => {
  const adId = 'E';
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
        contentContainerStyle={{ paddingTop: 100 }}
      >

        <JobFairEvent />
        <View style={styles.itemContainer}>
          <EventCard articleType={'UpComing'} />
          <RozgaarHome />
          <AdvertArea advertType={'Square'} adId={adId + '-' + '001'}/>
          <EventCard articleType={"Webinars"} />
          <AdvertArea advertType={'Rectangle'} adId={adId + '-' + '002'}/>
          <PopularEvent />
          <AdvertArea advertType={'Rectangle'} adId={adId + '-' + '003'}/>
          <EventCard articleType={"Previous"} />
          <AdvertArea advertType={'Rectangle'} adId={adId + '-' + '004'}/>

          <UsefulTools />



          <Footer />
        </View>
      </Animated.ScrollView>

    </View>

  )
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12
  },
  pageView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20
    // marginTop: Constants.statusBarHeight
  },
  imageView: {
    margin: 30,
    alignItems: 'center'
  },
  usefullTools: {
    paddingBottom: 100
  }

});

export default Events;