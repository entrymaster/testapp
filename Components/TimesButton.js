import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const TimesButton = (props) => {
  let buttonColor = props.buttonColor;
  const colorCheck = buttonColor ? buttonColor : "#5bc335";

  return (
    <View style={{width:props.buttonWidth,alignSelf:props.alignSelf}}>
      {props.iconButton ? (
        <View style={{
            padding: 10,
            backgroundColor: colorCheck,
            alignItems: "center",
            borderRadius: 15,
            justifyContent: "center",
            margin: 10,
            flexDirection:'row'
          }}>
          <MaterialIcons name="bolt" size={24} color="white" />
          <Text style={styles.buttonText}>{props.buttonText}</Text>
        </View>
      ) : (
        <View
          style={{
            padding: 10,
            backgroundColor: colorCheck,
            alignItems: "center",
            borderRadius: 15,
            justifyContent: "center",
            margin: 10,
          }}
        >
          <Text style={styles.buttonText}>{props.buttonText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    backgroundColor: "#5bc335",
    alignItems: "center",
    borderRadius: 15,
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default TimesButton;
