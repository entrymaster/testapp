import React from 'react'
import { ScrollView, StyleSheet, Animated, View } from 'react-native'
import HeaderMain from '../Components/HeaderMain';
import AdvertiseHeaderImage from '../Components/AdvertiseHeaderImage'
import WhyAdvertise from '../Components/WhyAdvertise'
import AdvertisingOptions from '../Components/AdvertisingOptions'
import SponsoredAds from '../Components/SponsoredAds'
import SideBannerAds from '../Components/SideBannerAds'
import AdvertiseNow from '../Components/AdvertiseNow'
import InPageDisplayAds from '../Components/InPageDisplayAds'
import ContactUs from '../Components/ContactUs';
const AdvertiseWithUs = ({navigation}) => {

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
                contentOffset: {y: scrollY},
              },
            },
          ],
          {
            useNativeDriver: true,
          },
        );

    return (
      <View style={styles.mainContainer}>
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
      contentContainerStyle={{paddingTop:100}}
      >
                <AdvertiseHeaderImage />
                <View style={styles.itemContainer}>
                <WhyAdvertise />
                <View style = {styles.AdView}>
                <AdvertisingOptions />
                </View>
                <SponsoredAds  />
                <View style = {styles.AdView}>
                <SideBannerAds navigation={navigation} />
                </View>
                <View style = {styles.AdView}>
                <InPageDisplayAds />
                </View>
                {/* <View style = {styles.advNowView}>
                <AdvertiseNow navigation={navigation} />
                </View> */}
                <ContactUs/>
                </View>
            </Animated.ScrollView>
            </View>
        
    )
}

export default AdvertiseWithUs

const styles = StyleSheet.create({
    mainContainer:{
        flex : 1,
        backgroundColor:'#fff',
    },
    itemContainer:{
        padding:16
    },
      AdView : {
      marginTop : 15,

      },
      advNowView:{
          marginTop : 25
      }
   
    
})
