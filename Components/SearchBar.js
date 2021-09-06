import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
// import { TouchableOpacity} from 'react-native-gesture-handler';
import { Overlay } from "react-native-elements";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import searchData from "../assets/data/searchSuggestionSecond.json";
import { Touchable } from "react-native";
// import {  } from "react-native";

// import SearchSuggest from "./SearchSuggest";

const SearchBarMain = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState();
  const [category, setCategory] = useState("");
  const [searchTitle, setSearchTittle] = useState("Category");
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryVisible, setCategoryVisible] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  // const [oriData, setUniversalData] = useState(searchData);

  // consoilteredData);

  useEffect(() => {
    setLoading(true);
    fetch("http://13.232.159.89/v1/api/apiTimes/CategoryOfArticles", {
      method: "POST",
      timeout: 10000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token 77927b69bb144b065ca11bf2a9d452819cd852db",
      },
      body: JSON.stringify({
        page: "1",
      }),
    })
      .then((response) => response.json())
      // .then((json) => console.log(json))
      .then((result) => {
        {
          if (result.status_code === 200 && result.status === "SUCCESS") {
            setCategory(result.data);
          } else {
            alert("Api issue");
          }
        }
      })
      .finally(() => setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  const displayTitle = (value) => {
    if (value.length <= 10) return value;
    else return value.slice(0, 6) + " ...";
  };

  

  const DisplayAutoSuggest = () => {
    return (
      <FlatList
        data={filteredData}
        // extraData={searchTerm}
        scrollEnabled={true}
        style={{
          position: "absolute",
          backgroundColor: "#FFFFFF",
          top: 60,
          right: 0,
          left: 0,
          width: "100%",
          height: 600,
        }}
        keyExtractor={(item) => item.keyIndex}
        // ItemSeparatorComponent={()=>(<View style={{borderBottomWidth:1,borderBottomColor:'#c8c8c8',alignSelf:'center',width:'90%'}} />)}
        renderItem={({ item }) => (
          // handleFilterData(item.searchTerms) &&
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => {
              setSearchTerm(item.searchTerms);
            }}
          >
            <Text style={{ fontSize: 19, paddingLeft: 20 }}>
              {item.searchTerms}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  };

  const searchSwitch = (type) => {
    switch (type) {
      case "home":
        return (
          <View style={styles.searchBar}>
            <View style={styles.searchArea}>
              <View style={styles.iconAndTextInput}>
                {categoryVisible && (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons
                      name="clipboard-text-multiple-outline"
                      size={24}
                      color="grey"
                    />
                    <TouchableOpacity onPress={() => setVisible(true)}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={styles.articleDrowpdown}>
                          {displayTitle(searchTitle)}
                        </Text>
                        <MaterialIcons
                          name="keyboard-arrow-down"
                          size={24}
                          color="grey"
                        />
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.dividerHori}> | </Text>
                  </View>
                )}
                <TouchableOpacity
                  style={{
                    height: 50,
                    alignItems: "center",
                    width: "65%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                  activeOpacity={1}
                  onPress={() => navigation.navigate("SearchScreen")}
                >
                  <Text style={styles.textInputSearch}>
                    What are you looking for ?
                  </Text>
                  <MaterialIcons name="search" size={24} color="grey" />
                </TouchableOpacity>
              </View>
            </View>
            {!categoryVisible && <DisplayAutoSuggest />}
            <Overlay
              isVisible={visible}
              onBackdropPress={() => setVisible(!visible)}
              overlayStyle={styles.overlay}
            >
              <View style={styles.overlayContainer}>
                <View
                  style={{
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: "#BFBFBF",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setSearchTittle("Career Advice");
                      setVisible(!visible);
                    }}
                    style={{}}
                  >
                    <Text style={styles.overlayText}>{"Career Advice"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setSearchTittle("HR Zone");
                      setVisible(!visible);
                    }}
                    style={{}}
                  >
                    <Text style={styles.overlayText}>{"HR Zone"}</Text>
                  </TouchableOpacity>
                  <FlatList
                    data={category}
                    keyExtractor={(item) => item.subcategory}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSearchTittle(item.subcategory);
                          setVisible(!visible);
                        }}
                        style={{}}
                      >
                        <Text style={styles.overlayText}>
                          {item.subcategory}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Overlay>
          </View>
        );

      case "jobs":
        return (
          <View style={styles.searchBar}>
            <View style={styles.searchArea}>
              {/* <View style={styles.iconAndTextInput}> */}
              <Entypo name="briefcase" size={24} color="grey" />

              {/* </View> */}

              <TouchableOpacity
                style={{
                  height: 50,
                  alignItems: "center",
                  width: "90%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                activeOpacity={1}
                onPress={() => navigation.navigate("SearchScreen")}
              >
                <Text style={styles.textInputSearch}>
                  Find the right job for you
                </Text>
                <MaterialIcons name="search" size={24} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
        );
        break;

      default:
        console.log(type + " type not found");
    }
  };
  return <View>{searchSwitch(props.type)}</View>;
};

const styles = StyleSheet.create({
  items: {
    height: 100,
    width: "100%",
    backgroundColor: "#29A746",
    borderWidth: 1,
  },
  searchBar: {
    width: "100%",
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
    width: "100%",
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
    fontSize: 16,
    color: "#BFBFBF",
  },
  overlay: {
    borderRadius: 20,
    padding: 20,
  },
  overlayContainer: {
    width: 250,
  },
  overlayText: {
    paddingVertical: 10,
    fontSize: 16,
    color: "grey",
    textAlign: "center",
  },
  horizontalLine: {
    borderBottomColor: "#BFBFBF",
    borderBottomWidth: 2,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
  },
});
export default SearchBarMain;
