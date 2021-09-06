import React from 'react'
import { ImageBackground, StyleSheet,TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'

const HireRemoteTeam = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground source={require('../assets/hireremote.png')} style={styles.imageBackground} imageStyle={styles.bgImg}>
        <View style={styles.imageContentView}>
          <Text style={styles.imageText}>Hire{'\n'}Remote Team</Text>
          <TouchableOpacity style={styles.hireButton}>
            <Text style={styles.hireButtonText}>Hire Freelancers</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

    mainView:{
     marginTop : 50,
     marginBottom : 30,
     //marginHorizontal : 5
    },
  imageBackground :{
      width : '100%',
      height  : 90,
      borderRadius : 20,
      resizeMode : 'cover'
  },
  bgImg :{
    borderRadius : 15
  },
  imageText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',

  },
  imageContentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingVertical: 22,
    paddingHorizontal: 12
  },
  hireButton: {
    padding: 8,
    width: 100,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,

  },
  hireButtonText:{
      fontSize :10
  }
})

export default HireRemoteTeam
