

import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { WebView } from 'react-native-webview';
const JobAdsFullPage = ({props, navigation, route} )=> {

    const fullAd = route.params.fullAd


    return (
        <View style={{flex:1}}>
             <WebView
      style={styles.container}
      source={{ uri: fullAd }}
    />
        </View>

    );
};

const styles = StyleSheet.create({
container:{

}
    
});
export default JobAdsFullPage;