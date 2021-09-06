import React from 'react';

import { View, StyleSheet, Text, Image, Animated } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import HeadingsForSection from '../Components/HeadingsForSection';
import RiWorkCategory from '../Components/RiWorkCategory';
import RozgaarJobCard from '../Components/RozgaarIndiaComp/RozgaarJobCard';
import SearchBarMain from '../Components/SearchBar';
import HeaderMain from '../Components/HeaderMain';
import { TouchableOpacity } from 'react-native';
import RemoteWorkHiring from '../Components/RemoteWorkHiring';
import WorldMapComponent from '../Components/WorldMapComponent';
import RemoteWorkCard from '../Components/RemoteWorkCard';


const RemoteWork = () => {

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
        <View style={styles.bannerArea}>
          <Image style={styles.ImgStyle} source={(require('../assets/remoteWorkBanner.png'))} />
        </View>
        {/* <SearchBarMain /> */}
        <View style={styles.heightContainer}>


          <HeadingsForSection title={"WHAT IS REMOTE WORK"} />
          <View style={styles.itemcontainer}>
            <Text style={styles.remoteWorkAbout}>Remote work is a working style that allows professionals to work outside of a traditional office environment</Text>
            <TouchableOpacity>
              <Text style={styles.ViewMoreText}>View More</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.HeadingContainer}>
            <HeadingsForSection title={"TRENDING REMOTE WORK CATEGORY"} />
            <RiWorkCategory />
          </View>
          <View style={styles.HeadingContainer}>
            <HeadingsForSection title={"TRENDING REMOTE JOBS"} />
            <RemoteWorkCard remoteType={"TrendingRemote"} />
          </View>
          <View style={styles.HeadingContainer}>
            <HeadingsForSection title={"LATEST ARTICLES"} />
            <RemoteWorkCard remoteType={"LatestArtical"} />
            <RemoteWorkHiring />
            <WorldMapComponent />
            <HeadingsForSection title={"REMOTE WORK ARTICLES"} />
            <RemoteWorkCard remoteType={"RemoteWorkArtical"} />
          </View>
          {/* <Divider style={styles.sectionDivider}  /> */}
          <View style={styles.HeadingContainer}>
            <HeadingsForSection title={"PROFESSIONAL FREELANCERS"} />
            <RozgaarJobCard />
          </View>
        </View>
      </Animated.ScrollView>
    </View>

  )
};

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: "white"
  },
  bannerArea: {
    height: 200,
    backgroundColor: '#daeff1',
    resizeMode: 'contain'
    //width:'100%'
  },

  remoteWorkAbout: {
    fontWeight: 'bold',
    //padding:12,
    fontSize: 16,
    // borderBottomWidth:1
  },
  sectionDivider: {
    marginTop: 10,
  },
  ViewMoreText: {
    paddingBottom: 8,
    textAlign: 'right',
    color: "#F02F39",
  },
  itemcontainer: {
    borderBottomWidth: 1
  },
  HeadingContainer: {
    paddingTop: 18,
    borderBottomWidth: 1,
    paddingBottom: 10
  },
  ImgStyle: {
    height: 200,
    width: '100%'
  },
  heightContainer: {
    padding: 16
  }
});


export default RemoteWork;