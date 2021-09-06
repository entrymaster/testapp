import React, { useState, useRef, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

const EmailVerify = ({navigation,route}) => {
    const email = route.params.emailID;
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
                        <Text style={styles.headingText}>Email Verification</Text>
                        <View style={styles.horizontalLine} />
                                {/* <Image
                                    source={require("../assets/1773389.png")}
                                    style={styles.otpImage}
                                    resizeMode="contain"
                                /> */}
                                <Entypo name="mail" size={60} color="#FFFFFF" style={styles.mailImage} />
                                <Text style={styles.descText}>
                                    Enter 4 digit OTP sent to{"\n" + email}
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
                                <TouchableOpacity activeOpacity={0.8} style={styles.proceedBtn} onPress={()=>navigation.navigate('SignUpSuccess')}>
                                    <Text style={styles.proceedBtnText}>Submit</Text>
                                </TouchableOpacity>
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
        width: 60,
    },
    mailImage: {
        marginTop: 80,
        // width: 100,
        alignSelf: "center",
    },
    descText: {
        color: "#FFFFFF",
        fontSize: 18,
        textAlign: "center",
        marginTop: 33,
    },
    otpContainer: {
        marginTop: 10,
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
    },
    proceedBtnText: {
        textAlign: "center",
        color: "#DE284B",
        fontSize: 18,
        fontWeight: "bold",
    },
});
export default EmailVerify;