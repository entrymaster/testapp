import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const JobsSearchBar = (props) => {
  const navigation = useNavigation();
  const [searchTerm ,setSearchTerm] = useState()
  
  const searchTrigger = (searchedValue) => {
    if(!searchedValue){
      navigation.navigate('ArticleSearch', { mysearch: searchTeam });
    }
  /*   console.log(searchedValue) */
    navigation.navigate('ArticleSearch', { mysearch: searchedValue });
}


  return (
    <View style={styles.searchBar}>
      <View style={styles.searchArea}>
        <View style={styles.iconAndTextInput}>
        <Entypo name="briefcase" size={24} color="grey" />
        

          <TextInput
            placeholder="Find the right job for you"
            style={styles.textInputSearch}
            returnKeyType={'search'}
            returnKeyLabel={'search'}
            onSubmitEditing={searchedText => searchTrigger(searchedText.nativeEvent.text)}
            onChangeText= {searchTerm => setSearchTerm(searchTerm)  }
          />
        </View>

        <MaterialIcons name="search" size={24} color="grey" />
      </View>
    </View>
  );
};

const jobStyles = StyleSheet.create({
  searchBar: {
    width: "95%",
    margin: 20,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 25,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 5,
  },
  searchArea: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconAndTextInput: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  articleDrowpdown: {
    marginLeft: 5,
    color: "grey",
    fontWeight: "700",
  },
  dividerHori: {
    fontSize: 20,
    fontWeight: "300",
    color: "grey",
    marginBottom: 4,
  },
  textInputSearch: {
    paddingHorizontal: 10,
    width: "75%",
    fontSize:16
  },
});
export default JobsSearchBar;
