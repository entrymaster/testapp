import React, { useEffect, useState, useRef } from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, Text, TextInput, BackHandler, FlatList, TouchableOpacity, Keyboard } from "react-native";
// import { TouchableOpacity} from 'react-native-gesture-handler';
// import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import searchData from '../assets/data/searchSuggestionSecond.json'
import HeaderMain from "../Components/HeaderMain";
import { log } from 'react-native-reanimated';
import { StackActions } from '@react-navigation/native';


const SearchScreen = ({ navigation }) => {

    let searchBar = useRef(null);

    const [loading, setLoading] = useState();
 
    const [searchTitle, setSearchTittle] = useState('Category')
 
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryVisible, setCategoryVisible] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [isSearchTriggered, setIsSearchTriggered] = useState(null);
    // console.log(filteredData);

    // Keyboard.addListener("keyboardDidHide", ()=>{navigation.goBack()});
    Keyboard.removeAllListeners("keyboardDidHide", ()=>true)
    
    

    useEffect(() => {
        searchBar.focus();
    });
   
//         Keyboard.addListener("keyboardDidHide", ()=>{
// console.log(isSearchTriggered);
//             if(isSearchTriggered == false){
//                 navigation.dispatch(StackActions.pop(1));
//             }
//         });
        
    
    
    


    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         console.log('Refreshed!');
    //       });
    //       return unsubscribe;
    // }, [navigation])

    const handleFilterData = (searchText) => {
        if (searchText == '') {
            setFilteredData([]);
        }
        else {
            setFilteredData(searchData.filter((item) => {
                return item.searchTerms.toLowerCase().includes(searchText)
            }))
        }
    }

    const searchTrigger = (searchedValue) => {
        
    if (!searchedValue) {
      navigation.navigate("ArticleSearch", { mysearch: searchTerm });
    }
    /*   console.log(searchedValue) */
    navigation.navigate("ArticleSearch", { mysearch: searchedValue });
  };

    return (
        <View style={styles.mainContainer}>
            {/* <HeaderMain /> */}
        <View style={styles.searchBar}>
            <View style={styles.searchArea}>
                    
                    <TextInput
                        ref={(input) => (searchBar = input)}
                        placeholder="What are you looking for ?"
                        placeholderTextColor={'#BFBFBF'}
                        style={styles.textInputSearch}
                        returnKeyType={'search'}
                        returnKeyLabel={'search'}
                        value={searchTerm}
                        onSubmitEditing={searchedText => {setIsSearchTriggered(true);searchTrigger(searchedText.nativeEvent.text)}}
                        onChangeText={searchTerm => { setSearchTerm(searchTerm); handleFilterData(searchTerm.toLowerCase()) }}
                    />

                <TouchableOpacity onPress={() => searchTrigger()} >
                    <MaterialIcons name="search" size={24} color="grey" />
                </TouchableOpacity>
            </View>
        </View>
        <FlatList 
                data={filteredData}
                keyboardDismissMode={'none'}
                keyboardShouldPersistTaps={'always'}
                // contentContainerStyle={{flex:1,width:'100%'}}
                scrollEnabled={true}
                keyExtractor={item => item.keyIndex.toString()}
                renderItem={({item})=>(
                    <TouchableOpacity style={{ width: '100%' }} onPress={() => { setSearchTerm(item.searchTerms) }}>
                        
                        <Text style={{ fontSize: 18, paddingLeft: 20 }}>{item.searchTerms}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#FFFFFF',
        paddingTop:30
    },
    items: {
        height: 100,
        width: '100%',
        backgroundColor: '#29A746',
        borderWidth: 1,
    },
    searchBar: {
        
        width: "100%",
        marginVertical:10,
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
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
        paddingVertical: 10,
        paddingHorizontal:15,
        justifyContent: "space-between",
    },
    iconAndTextInput: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 5,
        width: '100%'
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
        paddingHorizontal: 5,
        fontSize: 18,
        width:'90%',
    },
    
    horizontalLine: {
        borderBottomColor: "#BFBFBF",
        borderBottomWidth: 2,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center'
    },
})

export default SearchScreen