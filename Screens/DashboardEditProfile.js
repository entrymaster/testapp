import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Divider, CheckBox, Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import TacentInput from "../Components/TacentInput";
import TacentInputField from "../Components/TacentInputField";
import TimesButton from "../Components/TimesButton";
import * as ImagePicker from "expo-image-picker";
import * as Application from "expo-application";
import * as IntentLauncher from "expo-intent-launcher";

const DashboardEditProfile = () => {
  const [status, setStatus] = useState(true);
  const [name, setName] = useState(null);
  const [value, setvalue] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [isExperienced, setIsExperienced] = useState(false);
  const [experienceDropdown, setExperienceDropdown] = useState(false);
  // let name = "Deepak Singh";
  // let category = "Graphic Designer";

  const open_settings = () => {
    if (Platform.OS === "ios") {
      Linking.openURL(`app-settings:`);
    } else {
      IntentLauncher.startActivityAsync(
        IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
        {
          data: `package:${Application.applicationId}`,
        }
      );
    }
  };

  const createAlert = () =>
    Alert.alert(
      "Permission error !",
      "Please grant media access permission from app settings",
      [
        {
          text: "Cancel",
        },
        { text: "OK", onPress: () => open_settings() },
      ],
      { cancelable: false }
    );

  let selectImage = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      createAlert();
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.cancelled) {
        setProfilePicture(result.uri);
        console.log(result);
      }
    }
  };

  const username = (name) => {
    var str = name;
    if (str) {
      var res = str.slice(0, 1);
      var res = res.toUpperCase();
    } else {
      var res = "-";
    }
    return res;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.cardView}>
      <View style={styles.mainContainer}>
        <View style={styles.headingIcon}>
          <FontAwesome name="user-o" size={24} color="#707070" />
          <Text style={styles.cvHeading}>About You</Text>
        </View>
      </View>
      <Divider />

      {profilePicture == null ? (
        <View style={styles.imageView}>
          <FontAwesome
            style={{ alignSelf: "center", paddingTop: 30 }}
            name="user-o"
            size={60}
            color="#c6c6c6"
          />
          <TouchableOpacity
            onPress={() => selectImage()}
            style={{ alignSelf: "flex-end", marginTop: 10 }}
          >
            <FontAwesome name="pencil-square-o" size={24} color="#F02F39" />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            marginTop:30,
            // justifyContent: "center",
            alignSelf: "center",
            height: 150,
            width: 150,
            borderRadius: 80,
            // borderWidth: 1,
          }}
        >
          <Image
            source={{ uri: profilePicture }}
            style={{
              // marginTop: 30,
              height: 150,
              width: 150,
              borderRadius: 80,
            }}
          />
          <TouchableOpacity
            onPress={() => selectImage()}
            style={{alignSelf:'flex-end'}}
          >
            <FontAwesome name="pencil-square-o" size={24} color="#F02F39" />
          </TouchableOpacity>
        </View>
      )}

      <View style={{ padding: 20 }}>
        <TacentInput label={"Name"} color={"#707070"} paddingVertical={10} />
        <TacentInput
          label={"Position"}
          color={"#707070"}
          paddingVertical={10}
        />
        <TacentInputField
          label={"About"}
          color={"#707070"}
          paddingVertical={10}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.fieldHeading}>Experience</Text>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setExperienceDropdown(!experienceDropdown)}
          >
            {experienceDropdown ? (
              <FontAwesome name="minus" size={20} color="#F02F39" />
            ) : (
              <FontAwesome name="plus" size={20} color="#F02F39" />
            )}
          </TouchableOpacity>
        </View>
        {experienceDropdown && (
          <View
            style={{
              borderWidth: 0.5,
              marginVertical: 5,
              borderRadius: 20,
              borderColor: "#707070",
            }}
          >
            <CheckBox
              containerStyle={{
                backgroundColor: "#FFFFFF",
                borderWidth: 0,
                width: 150,
              }}
              title="Fresher"
              checkedIcon="dot-circle-o"
              activeOpacity={1}
              uncheckedIcon="circle-o"
              checkedColor={"#F02F39"}
              uncheckedColor={"#F02F39"}
              checked={!isExperienced}
              onIconPress={() => setIsExperienced(!isExperienced)}
            />
            <Divider style={{ width: "90%", alignSelf: "center" }} width={1} />
            <View
              style={{
                flexDirection: "row",
                width: "95%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CheckBox
                containerStyle={{
                  backgroundColor: "#FFFFFF",
                  borderWidth: 0,
                  width: 150,
                }}
                title="Experienced"
                checkedIcon="dot-circle-o"
                activeOpacity={1}
                uncheckedIcon="circle-o"
                checkedColor={"#F02F39"}
                uncheckedColor={"#F02F39"}
                checked={isExperienced}
                onIconPress={() => setIsExperienced(!isExperienced)}
              />
              {isExperienced && (
                <TouchableOpacity style={styles.experiencePlus}>
                  <FontAwesome name="plus" size={24} color="#F02F39" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        <Divider style={{ paddingVertical: 10 }} width={1} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.fieldHeading}>Skills</Text>
          <TouchableOpacity>
            <FontAwesome name="plus" size={20} color="#F02F39" />
          </TouchableOpacity>
        </View>
        <Divider style={{ paddingVertical: 10 }} width={1} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.fieldHeading}>Hobbies</Text>
          <TouchableOpacity>
            <FontAwesome name="plus" size={20} color="#F02F39" />
          </TouchableOpacity>
        </View>
        <Divider style={{ paddingVertical: 10 }} width={1} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.fieldHeading}>Language</Text>
          <TouchableOpacity>
            <FontAwesome name="plus" size={20} color="#F02F39" />
          </TouchableOpacity>
        </View>
        <Divider style={{ paddingVertical: 10 }} width={1} />
        <TouchableOpacity>
          <TimesButton
            buttonText={"Submit"}
            buttonWidth={180}
            alignSelf={"center"}
            buttonColor={"#F02F39"}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DashboardEditProfile;

const styles = StyleSheet.create({
  cardView: {
    width: "95%",
    backgroundColor: "white",
    alignSelf: "center",
    padding: 1,
    margin: 10,
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
  headingIcon: {
    flexDirection: "row",
    alignContent: "center",
    padding: 10,
  },
  cvHeading: {
    color: "#707070",
    marginLeft: 5,
    fontSize: 18,
  },

  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  subHeading: {
    padding: 10,
    color: "grey",
  },
  buttonCV: {
    width: "50%",
    alignSelf: "center",
  },
  editButton: {
    padding: 10,
    color: "#FF0000",
  },

  nameAndCat: {
    alignSelf: "center",
    justifyContent: "center",
    // alignItems: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#707070",
  },
  category: {
    fontSize: 19,

    fontWeight: "bold",
    color: "#F02F39",
    // paddingVertical: 10,
  },
  content: {
    padding: 10,
  },
  showMore: {
    alignSelf: "center",
    color: "#F02F39",
    paddingVertical: 10,
  },
  ProfilePicText: {
    fontSize: 40,
    color: "#DA9917",
    textAlign: "center",
    fontWeight: "600",
  },
  imageView: {
    height: 150,
    width: 150,
    borderRadius: 80,
    backgroundColor: "#ebebeb",
    margin: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  fieldHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#707070",
    paddingVertical: 20,
  },
  experiencePlus: {
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    // marginHorizontal: 4,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 10,
    // margin: 14,
    elevation: 2,
  },
});
