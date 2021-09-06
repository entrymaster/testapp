import React from "react";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Image, Text } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const IntroSlider = ({ props, navigation }) => {
  const slides = [
    {
      key: "1",
      title: "Career",
      text: "One Stop for all your\nCareer Needs",
      image: require("../assets/AppSlider1.png"),
      backgroundColor: "#59b2ab",
    },
    {
      key: "2",
      title: "Remote Work",
      text: "Work Remotely from\nanywhere",
      image: require("../assets/AppSlider2.png"),
      backgroundColor: "#22bcb5",
    },
    {
        key: "3",
        title: "Jobs",
        text: "Search for Jobs\nOn the Go",
        image: require("../assets/AppSlider3.png"),
        backgroundColor: "#febe29",
      },
    {
      key: "4",
      title: "Job Notification",
      text: "Get Notification about new jobs\nand updates instantly",
      image: require("../assets/AppSlider4.png"),
      backgroundColor: "#22bcb5",
    },
    
    {
      key: "5",
      title: "Stay Updated",
      text: "Stay Updated on industry news",
      image: require("../assets/AppSlider5.png"),
      backgroundColor: "#22bcb5",
    },
  ];

  const DoneClick = () => {
    navigation.navigate("LoginPage");
  };
  const NextBtn = () => {
    return (
      <View
        style={{
          backgroundColor: "#505050",
          height: 40,
          width: "90%",
          alignSelf: "center",
          marginVertical:20,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          {" "}
          NEXT{" "}
        </Text>
      </View>
    );
  };
  const DoneBtn = () => {
    return (
      <View
        style={{
          backgroundColor: "#4f4c9a",
          height: 40,
          width: "90%",
          marginVertical:20,
          alignSelf: "center",
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          {" "}
          DONE{" "}
        </Text>
      </View>
    );
  };
  const SkipBtn = () => {
    return (
      <View
        style={{
          height: 40,
          width: "90%",
          alignSelf: "center",
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#707070",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 16,
            margin: 10,
          }}
        >
          {" "}
          SKIP{" "}
        </Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      keyExtractor={(item) => item.key}
      onDone={DoneClick}
      // showSkipButton={true}
      // onSkip={DoneClick}
      bottomButton={true}
      // showSkipButton={true}
      renderDoneButton={DoneBtn}
      // renderSkipButton={SkipBtn}
      renderNextButton={NextBtn}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
            <Text style={styles.skipBtn}>SKIP</Text>
          </TouchableOpacity>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.heading}>{item.title}</Text>
          <Text style={styles.description}>{item.text}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipBtn: {
    fontSize: 16,
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 40,
    height:160,
    color: "#707070",
  },
  image: {
    width: Dimensions.get("window").width,
    resizeMode: "contain",
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 20,
  },
  description: {
    fontSize: 20,
    color: "#707070",
    textAlign: "center",
  },
});

export default IntroSlider;
