
import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const AdvertArea = props => {

  const adverySwitch = (type) => {
    switch (type) {
      case "Square":
        return (
          <View style={styles.mainAdvertarea}>
            <Text>{props.adId}</Text>
            <Text style={styles.advertHeading}> Advertisment</Text>
            <AntDesign name="closesquareo" size={90} color="grey" />
            <Text style={styles.advertHeading}> Square </Text>
          </View>
        );
        break;

      case "Rectangle":
        return (
          <View style={styles.rectangleAdvertarea}>
            <Text>{props.adId}</Text>
            <Text style={styles.advertHeading}> Advertisment</Text>
            <AntDesign name="closesquareo" size={40} color="grey" />
            <Text style={styles.advertHeading}> Rectangle </Text>
          </View>
        );
        break;

      case "DualSquare":
        return (
          <View style={styles.dualAdvertarea}>
            <Text>{props.adId}</Text>
            <Text style={styles.advertHeading}> Advertisment</Text>
            <AntDesign name="closesquareo" size={40} color="grey" />
            <Text style={styles.advertHeading}> Dual Square </Text>
          </View>
        );
        break;

      case "4":
        break;

      default:
        console.log("Article type not found");
    }
  };



  return (
    <View style={styles.pageView}>
      {adverySwitch(props.advertType)}
    </View>

  );
};

const styles = StyleSheet.create({

  pageView: {
    //padding:10,
    marginVertical: 20

  },

  mainAdvertarea: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f0f3f4',
    alignSelf: 'center',
    justifyContent: 'center',


  },
  advertHeading: {
    padding: 10,
    fontSize: 15,
    color: 'grey',
    fontWeight: '500'
  },
  rectangleAdvertarea: {
    height: 130,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f0f3f4',
    alignSelf: 'center',
    justifyContent: 'center'

  },
  dualAdvertarea: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f0f3f4',
    alignSelf: 'center',
    justifyContent: 'center'
  }

});
export default AdvertArea;
