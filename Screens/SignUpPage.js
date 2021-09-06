import React, { useState, useEffect, useRef } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Overlay } from "react-native-elements";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { showMessage } from "react-native-flash-message";

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfrmPass, setCnfrmPass] = useState("");
    const [mobile, setMobile] = useState("");
    const [passHidden, setPassHidden] = useState(true);
    const [cnfrmPassHidden, setCnfrmPassHidden] = useState(true);
    const [isTerms, setIsTerms] = useState(false);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState();
    const [countryList, setCountryList] = useState(null);
    const [countrySelected, setCountrySelected] = useState({
        "code": "IN",
        "dial_code": "+91",
        "name": "India",
    });

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/codes', {
            method: 'GET',
            headers: {
                'X-Powered-By': 'Express',
                'ETag': 'W/"33a9-RY5jDkIqMwVvcjy/jKVZWcrHK7I"',
                'Connection': 'keep-alive'
            },
        })
            .then((response) => response.json())
            // .then((json) => console.log(json))
            .then((json) => {
                if (json.error === false && json.msg === 'countries and codes retrieved') {
                    setCountryList(json.data);
                }
            })

    }, [])

    const SubmitSignUp = () => {
        if (!email) {
            showMessage({
                message: "Please fill email !",
                type: "warning",
                icon: "warning",
                duration: 3500,
            });
        }
        else if (reg.test(email) == false) {
            showMessage({
                message: "Invalid email !",
                type: "warning",
                icon: "warning",
                duration: 3500,
            });
        }
        else if (!mobile) {
            showMessage({
                message: "Please fill mobile number !",
                type: "warning",
                icon: "warning",
                duration: 3500,
            });
        }
        else if (!password) {
            showMessage({
                message: "Please fill password !",
                type: "warning",
                icon: "warning",
                duration: 3500,
            });
        }
        else if (password != cnfrmPass) {
            showMessage({
                message: "Confirm Password did not matched !",
                type: "warning",
                icon: "warning",
                duration: 3500,
            });
        }
        else if (!isTerms) {
            showMessage({
                message: "Please accept our terms and conditions !",
                type: "warning",
                icon: "warning",
                duration: 3500,
            });
        }
        else {
            setLoading(true)
            fetch(global.baseURL + "/api/apiTimes/SignUp", {
                method: 'POST',
                timeout: 10000,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Token 77927b69bb144b065ca11bf2a9d452819cd852db'
                },
                body: JSON.stringify({
                    "Mobile": mobile,
                    "Email": email,
                    "CountryCode": countrySelected.dial_code,
                    "Password": password
                }
                )
            })
                .then((response) => response.json())
                //   .then((json) => console.log(json))
                .then((result) => {
                    {
                        if (result.status_code === 200 && result.status === "SUCCESS") {
                            showMessage({
                                message: "Signed Up Successfully !",
                                type: "success",
                                icon: "success",
                                duration: 3500,
                            });
                            HandleVerification();

                        } else if (result.status_code === 300 && result.status === "FAIL") {
                            showMessage({
                                message: "Account already exists, please login !",
                                type: "danger",
                                icon: "danger",
                                duration: 3500,
                            });
                        }
                        else if (result.status_code === 300 && result.status === "FAILD") {
                            showMessage({
                                message: "An error occoured, please retry !",
                                type: "danger",
                                icon: "danger",
                                duration: 3500,
                            });
                        }
                        else {
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
                .catch((error) => console.log(error))
        }

    }

      const codeSelected = (item) => {
        setCountrySelected(item)
        setVisible(false)
    };

    const FeatureNotSupported = () => {
        alert("Sorry, we don't support this feature yet.");
    }
    const HandleVerification = () => {
        // Keyboard.dismiss
        countrySelected.code == "IN" ?
            navigation.navigate("OtpSignup", { mobileNo: mobile })
            :
            navigation.navigate('EmailVerify', { emailID: email })
    }


   
    return (
        <View style={styles.mainContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient style={{ flex: 1 }} colors={["#5801FA", "#E52B44"]}>

                    <KeyboardAvoidingView
                        behavior={'position'}
                    >
                        <Image
                            source={require("../assets/Group-1.png")}
                            style={styles.timesLogo}
                            resizeMode="contain"
                        />
                        <View style={styles.fieldContainer}>
                            <Text style={styles.headingText}>Sign up</Text>
                            <View style={styles.horizontalLine} />
                            <Text style={styles.inputBoxLabel}>Email</Text>
                            <TextInput
                                selectionColor="#FFFFFF"
                                style={styles.inputBox}
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                                autoCapitalize="none"
                            />
                            <Text style={styles.inputBoxLabel}>Mobile Number</Text>
                            <View>

                                <View style={{
                                    flexDirection: 'row', borderBottomWidth: 1,
                                    borderBottomColor: "#FFFFFF",
                                }}>
                                    <TouchableOpacity onPress={() => setVisible(true)}>
                                        <Image source={{ uri: "https://www.countryflags.io/" + countrySelected.code + "/flat/64.png" }} style={{ width: 35, height: 30 }} />
                                    </TouchableOpacity>
                                    <Text style={styles.dialCode}>{countrySelected.dial_code + ' -'}</Text>
                                    <TextInput
                                        selectionColor="#FFFFFF"
                                        keyboardType="phone-pad"
                                        style={styles.mobileInputBox}
                                        onChangeText={(text) => setMobile(text)}
                                        value={mobile}
                                        maxLength={10}
                                        autoCapitalize="none"
                                    />
                                </View>

                            </View>
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
                            </View>
                            <Text style={styles.inputBoxLabel}>Confirm Password</Text>
                            <View>
                                <TextInput
                                    selectionColor="#FFFFFF"
                                    secureTextEntry={cnfrmPassHidden}
                                    style={styles.inputBox}
                                    onChangeText={(text) => setCnfrmPass(text)}
                                    value={cnfrmPass}
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity
                                    activeOpacity={1}
                                    style={styles.eyeIcon}
                                    onPress={() => setCnfrmPassHidden(!cnfrmPassHidden)}
                                >
                                    <Ionicons
                                        name={
                                            cnfrmPassHidden
                                                ? "ios-eye-off-outline"
                                                : "ios-eye-outline"
                                        }
                                        size={25}
                                        color="white"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.termsContainer}>
                                <TouchableOpacity
                                    style={styles.circle}
                                    onPress={() => setIsTerms(!isTerms)}
                                >
                                    {isTerms && <View style={styles.checkedCircle} />}
                                </TouchableOpacity>
                                <Text style={styles.termsText}> I agree to the</Text>
                                <TouchableOpacity>
                                    <Text style={styles.termsLink}> terms & conditions</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={styles.registerBtn} onPress={() => SubmitSignUp()}>
                                <Text style={styles.registerBtnText}>Proceed</Text>
                            </TouchableOpacity>
                        </View>

                        {/* </ScrollView> */}

                    </KeyboardAvoidingView>
                    <Overlay
                        isVisible={visible}
                        onBackdropPress={() => setVisible(!visible)}
                        overlayStyle={styles.overlay}
                    >
                        <View style={styles.overlayContainer}>
                            <View style={{ borderTopWidth: 2, borderBottomWidth: 2, borderColor: '#BFBFBF' }}>

                                <FlatList
                                    data={countryList}
                                    keyExtractor={(item) => item.code}
                                    renderItem={({ item }) => (
                                        <View style={styles.flagContainer}>
                                            <Image source={{ uri: "https://www.countryflags.io/" + item.code + "/flat/64.png" }} style={styles.flagImage} />
                                            {/* {displayFlag(item.code)} */}

                                            <TouchableOpacity onPress={()=>codeSelected(item)}>
                                                <Text style={styles.overlayText}>{item.name+" ("+item.dial_code+')'}</Text>
                                            </TouchableOpacity>

                                        </View>
                                    )}
                                />
                            </View>
                        </View>
                    </Overlay>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemHeading}>or login with</Text>
                        <View style={styles.logoContainer}>
                            <TouchableOpacity activeOpacity={0.8} style={styles.logo} onPress={() => FeatureNotSupported()}>
                                <Image
                                    source={require("../assets/google.png")}
                                    style={styles.logoImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={styles.logo} onPress={() => FeatureNotSupported()}>
                                <Image
                                    source={require("../assets/facebook.png")}
                                    style={styles.logoImage}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomTextView}>
                            <Text style={styles.bottomText}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                                <Text style={styles.signupText}>LOGIN</Text>
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
        
        // marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : null,
    },
    timesLogo: {
        margin: 10,
        alignSelf: "center",
        width: 200,
        marginTop:40
    },
    fieldContainer: {
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
        width: 50,
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
    dialCode: {
        padding: 4,
        fontWeight: "600",
        fontSize: 16,
        color: "#FFFFFF",
    },
    mobileInputBox: {
        width: "100%",
        height: 30,
        fontSize: 16,
        color: "#FFFFFF",
        textDecorationLine: "none",
    },
    inputBoxLabel: {
        fontWeight: "600",
        fontSize: 18,
        color: "#FFFFFF",
        marginTop: 25,
    },
    overlay: {
        borderRadius: 10,
        padding: 20,
        height: '80%',
        width: 300,
    },
    overlayContainer: {
        // height:'80%',
        // width: 300,
    },
    overlayText: {
        padding: 8,

        fontSize: 16,
        color: 'grey',

    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagImage: {
        resizeMode: 'contain',
        width: 35
    },
    verify: {
        position: "absolute",
        right: 0,
    },
    verifyText: {
        fontSize: 16,
        color: "#FCD2A2",
    },
    eyeIcon: {
        position: "absolute",
        right: 0,
    },
    termsContainer: {
        flexDirection: "row",
        marginTop: 30,
        alignItems: "center",
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: "#FFFFFF",
    },
    termsLink: {
        fontSize: 14,
        color: "#FCD2A2",
    },
    termsText: {
        fontSize: 14,
        color: "#FFFFFF",
    },
    registerBtn: {
        alignSelf: "center",
        borderRadius: 30,
        backgroundColor: "#F3F3F3",
        padding: 12,
        marginVertical: 20,
        width: 220,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 30,
    },
    registerBtnText: {
        textAlign: "center",
        color: "#DE284B",
        fontSize: 18,
        fontWeight: "bold",
    },
    itemContainer: {
        marginHorizontal: 40,
        // height:"10%",
        flex: 1,
        justifyContent: "space-evenly",
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

export default SignUp;
