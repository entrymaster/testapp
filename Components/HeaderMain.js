import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import TimeAndDateHeader from './TimeAndDateHeader';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const HeaderMain = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
      <TouchableOpacity onPress={()=> {navigation.openDrawer()}} >
      <Image style={styles.logoMenu} source={require('../assets/side-drawer-open-icon.png')} />
      </TouchableOpacity>
        <Image source={require('../assets/times_ascent_black_logo.png')} style={styles.Images} />
        <TouchableOpacity onPress= {()=> navigation.navigate('DashBoard')} >
         <FontAwesome name="user-circle" size={24} color="#F02F39" />
         </TouchableOpacity>
      </View>
      <TimeAndDateHeader />

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    height:100,
    backgroundColor:'#FFFFFF'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:5,
    alignItems:'center'
  },
  
  logoMenu: {
    margin: 5,
    width: 20,
    height:22,
    resizeMode: 'contain',
},
  Images: {
    height: 40,
    width: 180,
    resizeMode: 'contain',
  },
})

export default HeaderMain;