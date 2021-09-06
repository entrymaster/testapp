import React, { useState, useRef, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

const OtpSignup = ({navigation,route}) => {
    const mobileNo = route.params.mobileNo;
    let textInput = useRef(null);
    const lengthInput = 4;
    const [internalVal, setInternalVal] = useState("");

    useEffect(() => {
        textInput.focus();
    }, [])

    const onChangeText = (val) => {
        setInternalVal(val);
    };

    return (
        <View style={styles.mainContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient style={{ flex: 1 }} colors={["#5801FA", "#E52B44"]}>

                    <TouchableOpacity style={styles.crossBtn}>
                        <Entypo name="cross" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                    <KeyboardAvoidingView
                            behavior={'position'}
                        >
                    <View style={styles.fieldContainer}>
                        <Text style={styles.headingText}>Verification</Text>
                        <View style={styles.horizontalLine} />
                                <Image
                                    source={require("../assets/1773389.png")}
                                    style={styles.otpImage}
                                    resizeMode="contain"
                                />
                                <Text style={styles.descText}>
                                    Enter 4 digit OTP sent to{"\n" + mobileNo}
                                </Text>
                                <View style={styles.otpContainer}>
                                    <View>
                                        <TextInput
                                            ref={(input) => (textInput = input)}
                                            onChangeText={onChangeText}
                                            style={styles.OTPbox}
                                            value={internalVal}
                                            maxLength={lengthInput}
                                            returnKeyType="done"
                                            keyboardType="numeric"
                                        />
                                        <TouchableWithoutFeedback onPress={() => textInput.focus()}>
                                            <View style={styles.containerInput}>
                                                <View
                                                    style={[styles.cellView, {
                                                        borderBottomColor:
                                                            internalVal.length == 0 ? "#9a9a9a" : "#FFFFFF",
                                                    }]}
                                                >
                                                    <Text
                                                        style={styles.cellText}
                                                        onPress={() => textInput.focus()}
                                                    >
                                                        {internalVal && internalVal.length > 0
                                                            ? internalVal[0]
                                                            : ""}
                                                    </Text>
                                                </View>

                                                <View
                                                    style={[styles.cellView, {
                                                        borderBottomColor:
                                                            internalVal.length == 1 ? "#9a9a9a" : "#FFFFFF",
                                                    }]}
                                                >
                                                    <Text
                                                        style={styles.cellText}
                                                        onPress={() => textInput.focus()}
                                                    >
                                                        {internalVal && internalVal.length > 0
                                                            ? internalVal[1]
                                                            : ""}
                                                    </Text>
                                                </View>

                                                <View
                                                    style={[styles.cellView, {
                                                        borderBottomColor:
                                                            internalVal.length == 2 ? "#9a9a9a" : "#FFFFFF",
                                                    }]}
                                                >
                                                    <Text
                                                        style={styles.cellText}
                                                        onPress={() => textInput.focus()}
                                                    >
                                                        {internalVal && internalVal.length > 0
                                                            ? internalVal[2]
                                                            : ""}
                                                    </Text>
                                                </View>

                                                <View
                                                    style={[styles.cellView, {
                                                        borderBottomColor:
                                                            internalVal.length == 3 ? "#9a9a9a" : "#FFFFFF",
                                                    }]}
                                                >
                                                    <Text
                                                        style={styles.cellText}
                                                        onPress={() => textInput.focus()}
                                                    >
                                                        {internalVal && internalVal.length > 0
                                                            ? internalVal[3]
                                                            : ""}
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                                <View style={styles.resendContainer}>
                                    <Text style={styles.resendText}> Didn't get OTP?</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.resendLink}> Resend OTP</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity activeOpacity={0.8} style={styles.proceedBtn} onPress={()=>{navigation.navigate('SignUpSuccess')}}>
                                    <Text style={styles.proceedBtnText}>Proceed</Text>
                                </TouchableOpacity>
                            {/* </View> */}
                        
                    </View>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </TouchableWithoutFeedback>
        </View>
    );
};



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },

    crossBtn: {
        alignSelf: "flex-end",
        paddingTop: 10,
    },
    fieldContainer: {

        // justifyContent:'space-between',
        // height: 613,
        padding: 50
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
    otpImage: {
        marginTop: 80,
        width: 100,
        alignSelf: "center",
    },
    descText: {
        color: "#FFFFFF",
        fontSize: 18,
        textAlign: "center",
        marginTop: 33,
    },
    otpContainer: {
        // height:60,
        marginTop: 10,
        //flex: 1,
        //alignItems: "center",
    },
    OTPbox: {
        width: 0,
        height: 0,
        padding: 10,
        marginLeft: 20,
    },
    containerInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    cellView: {
        // paddingVertical: 11,
        width: 45,
        margin: 8,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 3,
    },
    cellText: {
        textAlign: "center",
        fontSize: 40,
        color: '#FFFFFF'
    },
    resendContainer: {
        flexDirection: 'row',
        alignSelf: 'center',

        margin: 20,
    },
    resendLink: {
        fontSize: 14,
        color: '#FCD2A2'
    },
    resendText: {
        fontSize: 14,
        color: '#FFFFFF'
    },
    proceedBtn: {
        marginTop:30,
        alignSelf: "center",
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
        padding: 12,
        width: 220,
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 30,
        // marginHorizontal:13
    },
    proceedBtnText: {
        textAlign: "center",
        color: "#DE284B",
        fontSize: 18,
        fontWeight: "bold",
    },
    itemContainer:{
    }
});
export default OtpSignup;