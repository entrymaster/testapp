import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
// import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";
import { AuthContext } from "../Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";

const Login = ({ navigation }) => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [passHidden, setPassHidden] = useState(true);
  const [loading, setLoading] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState([]);
  const { login } = React.useContext(AuthContext);
  const { skip } = React.useContext(AuthContext);
  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  let regPhone = /^[6789][0-9]{9}$/;

  const saveDataToStorage = (loginStatus, candidateId) => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ Status: loginStatus, candidateId:candidateId })
    );
  };
  const SubmitLogin = () => {
    if (!userID) {
      showMessage({
        message: "Please fill email !",
        type: "warning",
        icon: "warning",
        duration: 3500,
      });
    } else if (
      regEmail.test(userID) == false &&
      regPhone.test(userID) == false
    ) {
      showMessage({
        message: "Please fill valid Email/Phone !",
        type: "warning",
        icon: "warning",
        duration: 3500,
      });
    } else if (!password) {
      showMessage({
        message: "Please fill password !",
        type: "warning",
        icon: "warning",
        duration: 3500,
      });
    } else {
      setLoading(true);
      fetch(global.baseURL + "api/apiTimes/Login", {
        method: "POST",
        timeout: 10000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Token 77927b69bb144b065ca11bf2a9d452819cd852db",
        },
        body: JSON.stringify({
          Mobile: userID,
          Email: userID,
          Password: password,
        }),
      })
        .then((response) => response.json())
        // .then((json) => console.log(json))
        .then((result) => {
          console.log(result)

          {
            if (result.status_code === 200 && result.status === "SUCCESS") {
              showMessage({
                message: "Login Successful!",
                type: "success",
                icon: "success",
                duration: 3500,
              });

              saveDataToStorage("success", result.data.candidateId);
              login();
            } else if (result.status_code === 300 && result.status === "FAIL") {
              showMessage({
                message: "Login Failed ! ",
                description: "Invalid Credentials",
                type: "danger",
                icon: "danger",
                duration: 3500,
              });
            } else {
              showMessage({
                message: "Please check your internet connection",
                description:
                  "Please try again. If the problem persists contact support",
                type: "warning",
                icon: "warning",
                duration: 3500,
              });
            }
          }
        })
        .finally(() => setLoading(false))
        .catch((error) => console.log(error));
    }
  };

  const FeatureNotSupported = () => {
    showMessage({
      message: "Sorry, we don't support this feature yet.",
      type: "warning",
      icon: "warning",
      duration: 3500,
    });
  };

  const skipHandler = () => {
    skip();
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient style={{ flex: 1 }} colors={["#5801FA", "#E52B44"]}>
          <TouchableOpacity
            onPress={() => skipHandler()}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                alignSelf: "flex-end",
                paddingHorizontal: 20,
                paddingTop: 40,
              }}
            >
              SKIP
            </Text></TouchableOpacity>
          <KeyboardAvoidingView behavior={"position"}>
            <View style={styles.headerContainer}>
              <Image
                source={require("../assets/Group-1.png")}
                style={styles.timesLogo}
                resizeMode="contain"
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.headingText}>Login</Text>
              <View style={styles.horizontalLine} />
              <Text style={styles.inputBoxLabel}>Email/Mobile</Text>
              <TextInput
                selectionColor="#FFFFFF"
                style={styles.inputBox}
                onChangeText={(text) => setUserID(text)}
                value={userID}
                autoCapitalize="none"
              />
              <Text style={styles.inputBoxLabel}>Password</Text>
              <View>
                <TextInput
                  selectionColor="#FFFFFF"
                  secureTextEntry={passHidden}
                  style={styles.inputBox}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.eyeIcon}
                  onPress={() => setPassHidden(!passHidden)}
                >
                  <Ionicons
                    name={
                      passHidden ? "ios-eye-off-outline" : "ios-eye-outline"
                    }
                    size={25}
                    color="white"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
              activeOpacity={1}
                style={styles.loginBtn}
                onPress={() => SubmitLogin()}
              >
                {loading ? (
                  <ActivityIndicator color={'#F02F39'} />
                ) : (
                  <Text style={styles.loginBtnText}>Login</Text>
                )}
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.itemContainer}>
            <Text style={styles.itemHeading}>or login with</Text>
            <View style={styles.logoContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.logo}
                onPress={() => FeatureNotSupported()}
              >
                <Image
                  source={require("../assets/google.png")}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.logo}
                onPress={() => FeatureNotSupported()}
              >
                <Image
                  source={require("../assets/facebook.png")}
                  style={styles.logoImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.bottomTextView}>
              <Text style={styles.bottomText}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignUpPage")}
              >
                <Text style={styles.signupText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //marginTop: Platform.OS === 'android' ? Constants.statusBarHeight: null,
  },
  headerContainer: {
    marginTop: 100,
  },
  timesLogo: {
    margin: 10,
    alignSelf: "center",
    width: 200,
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    padding: 30,
  },
  headingText: {
    fontWeight: "600",
    fontSize: 22,
    color: "#FFFFFF",
  },
  horizontalLine: {
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 40,
  },
  inputBox: {
    width: "100%",
    height: 30,
    fontSize: 16,
    color: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    textDecorationLine: "none",
  },
  inputBoxLabel: {
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 40,
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
  },
  forgotText: {
    alignSelf: "flex-end",
    color: "#FFFFFF",
    fontSize: 16,
    marginVertical: 20,
  },
  loginBtn: {
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "#F3F3F3",
    padding: 12,
    width: 220,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 30,
  },
  loginBtnText: {
    textAlign: "center",
    color: "#DE284B",
    fontSize: 18,
    fontWeight: "bold",
  },

  loginBtnContainer: {},
  itemContainer: {
    marginHorizontal: 40,
    flex: 1,
    justifyContent: "space-around",
  },
  itemHeading: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    elevation: 3,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 50,
  },
  logoImage: {
    height: 40,
    width: 80,
  },
  bottomTextView: {
    flexDirection: "row",
    alignSelf: "center",
  },
  bottomText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  signupText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default Login;
