import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ExpertQueryCard = () => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require("../assets/HeaderImage.jpg")}
        style={styles.expertImage}
      >
        <View style={styles.topTextView}>
          <Text style={ styles.headerImageText1 }>
            Get your queries answered by
          </Text>
          <Text style={styles.headerImageText2}>an expert</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 4,
          position: "relative",
          bottom: 60,
        }}
      >
        <View style={styles.hrdImageView}>
          <Image
            source={require("../assets/HRDirector.jpg")}
            style={styles.hrdImage}
          />
        </View>
        <View style={styles.headerImageTextView}>
          <Text style={styles.headerImageText3}>Manish Harlalka</Text>
          <Text style = {styles.headerImageText4} >Human Resource Director</Text>
          <Text style = {styles.paraGraph}>
            Manish Harlalka has had 40 odd years experience in Industry. He has
            worked in various HR roles with Unilever in Kenya and India and was
            Executive Director HR Motorola for Asia Pacific countries. He worked
            with Shell Malaysia as Director Human Resources, Shell Malaysia and
            Managing Director of Shell People Services Asia Sdn Bhd. His last
            corporate assignment was with IBM India Limited as Executive
            Director Human Resources.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
mainView: {
  marginHorizontal: 8,
  marginTop: 10,
  backgroundColor: "white",
},

expertImage: {
  width: "100%",
  resizeMode: "cover",
  height: 160,
},
topTextView : {
    padding: 16 
},
headerImageText1: {
  color: "white",
  fontWeight: "bold",
  fontSize: 15,
  
},
headerImageText2: {
  color: "white",
  fontSize: 25,
 
},
hrdImageView :{
  width: "40%" 
},
hrdImage : {
  height: 350,
  width: 155,
  borderWidth: 7,
  borderColor: "white",
},
headerImageText3 : {
  paddingTop: 24 ,
  color : '#fff',
  fontWeight : 'bold',
  fontSize : 15,
  paddingLeft : 10
},
headerImageText4 : {
  fontSize : 9, 
  color : '#fff', 
  fontWeight : 'normal', 
  paddingLeft : 10
},
headerImageTextView : {
  width: "60%", 
  paddingLeft: 15
},
paraGraph : {
  paddingTop : 12 , 
  paddingLeft : 10 , 
  width : '100%'
}

});

export default ExpertQueryCard;
