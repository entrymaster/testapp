import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { TouchableOpacity} from 'react-native-gesture-handler';
import searchData from '../assets/data/searchSuggestionSecond.json'

const SearchSuggest = (props) => {
    const [search, setSearch] = useState(props.searchQuery);
    console.log(search);

    const handleFilterData = (item) =>{

    }
    return (
        <FlatList
            data={searchData}
            style={styles.mainContainer}
            keyExtractor={item => item.keyIndex}
            // ItemSeparatorComponent={()=>(<View style={{borderBottomWidth:1,borderBottomColor:'#c8c8c8',alignSelf:'center',width:'90%'}} />)}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>{setSearch(item.searchTerms);props.selectedQuery(item.searchTerms)}}>
                <View style={{width:'100%',backgroundColor:'tomato'}}><Text style={{fontSize:19,paddingLeft:20}}>{item.searchTerms}</Text></View>
              </TouchableOpacity>
            )}
          />
    )
}

export default SearchSuggest

const styles = StyleSheet.create({
    mainContainer:{
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        top: 60,
        right: 0,
        left: 0,
        width: '100%',
        height: 600 
    }
})
