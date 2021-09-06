import React from "react";
import {View,Text,FlatList,Image,TouchableOpacity,StyleSheet,} from "react-native";

const GlobalHrTrends = () => {
  const DATA = [
    {
      id: 1,
      image: require("../assets/ajaykumar.png"),
      title: "Ajay Kumar",
      profession: "DB Digital - Lead/Senior",
      location: "Kanpur",
    },
    {
      id: 2,
      image: require("../assets/ajaykumar.png"),
      title: "Ajay Kumar",
      profession: "Associate - HR Consulting",
      location: "Lucknow",
    },
    {
      id: 3,
      image: require("../assets/ajaykumar.png"),
      title: "Ajay Kumar",
      profession: "Manager - Talent Acquisition",
      location: "Delhi",
    },
  ];
  return (
    <View style={styles.flatlistMainView}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.renderView}>
            <Image
              source={item.image}
              style={styles.image}
            />
            <View style={styles.textView}>
              <Text style={styles.titleName}>{item.title}</Text>
              <Text style={styles.profession}>
                {item.profession}
              </Text>
              <View style={styles.buttonView}>
                <Text style={styles.location}>
                  {item.location}
                </Text>
                <TouchableOpacity
                  style={styles.button}>
                  <Text style={styles.buttonText}>
                    Connect
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
        )}
      />
      <View>
        <TouchableOpacity
          style={styles.viewMoreButton}
        >
          <Text style={styles.viewMoreButtonText}>
            View More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistMainView: {
    backgroundColor: "#fff"
  },

  renderView: {
    borderBottomWidth: 1,
    borderBottomColor: "#AEAEAE",
    flexDirection: "row",
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10
  },
  textView: {
    paddingHorizontal: 2,
    width: '98%'
  },
  titleName: {
    fontSize: 16,
    paddingTop: 10
  },
  profession: {
    fontSize: 16,
    paddingTop: 10
  },
  location: {
    fontSize: 16,
    paddingTop: 10
  },
  buttonView: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: "#43ce31",
    padding: 6,
    width: 80,
    marginTop: 10,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 10,
    textAlign: "center",
    padding: 2,
    color: '#fff',

  },
  viewMoreButton: {
    alignItems: "flex-end",
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20
  },
  viewMoreButtonText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 15
  }

});
// viewMoreButton : {
//   alignItems: "flex-end", 
//   marginRight: 10, 
//   marginTop: 20,
//   marginBottom : 20
// },
// viewMoreButtonText : {
//   color: "red", 
//   fontWeight: "bold", 
//   fontSize: 15
// }

// });


export default GlobalHrTrends;
