import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';

const JobsSuggestion = props => {

    const jobsGenricDataSwitch = (type) => {
        switch (type) {
          case "Industry":
            return (
                <View style={styles.cardView}>
                <View style={styles.headingIcon}>
     <AntDesign name="book" size={20} color="grey" />
               <Text style={styles.cvHeading}>{props.heading}</Text> 
               <Divider />
               </View>
               <View style={styles.listData}> 
                 <FlatList
                           data={props.apiData}
                           keyExtractor={item => item.IndustryId}
                           renderItem={({ item }) => (
          <View>
              <TouchableOpacity>
     <Text style={{padding:6, fontSize:16, color:'grey'}}>{item.Industry}</Text>
     </TouchableOpacity>
              </View>
                           )}
                             />
     </View>
             </View>
            );
            break;
    
          case "Location":
            return (
                <View style={styles.cardView}>
                <View style={styles.headingIcon}>
     <AntDesign name="book" size={20} color="grey" />
               <Text style={styles.cvHeading}>{props.heading}</Text> 
               <Divider />
               </View>
               <View style={styles.listData}> 
                 <FlatList
                           data={props.apiData}
                           keyExtractor={item => item.IndustryId}
                           renderItem={({ item }) => (
          <View>
              <TouchableOpacity>
     <Text style={{padding:6, fontSize:16, color:'grey'}}>{item.location}</Text>
     </TouchableOpacity>
              </View>
                           )}
                             />
     </View>
             </View>
            );
            break;
    
          default:
            console.log("Article type not found");
        }
      };

    return (
     
<View> 
{jobsGenricDataSwitch(props.cardType)}
</View>
    );
};

const styles = StyleSheet.create({
    cardView:{
        width:"95%",
        backgroundColor:'white',
        alignSelf:'center',
      
        
       padding:1,
       margin:10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    
        elevation: 5,
       
    },
    headingIcon:{
        flexDirection:'row',
        alignContent:'center',
        padding:10
    },
    listData:{
        padding:10,
        
    },
    cvHeading:{
        paddingHorizontal:5,
    }
});
export default JobsSuggestion;