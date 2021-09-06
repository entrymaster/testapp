import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

const Congratulation = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
           <LinearGradient style={{ flex: 1 }} colors={["#5801FA", "#E52B44"]}>
                
                    <View style={styles.fieldContainer}>

                        <Image
                            source={require("../assets/congrats.png")}
                            style={styles.congratsImage}
                            resizeMode="contain"
                        />

                        <Text style={styles.heading}>Congratulations!</Text>
                        <Text style={styles.descText}>
                            You have been registered successfully.
                        </Text>
                    </View>

                    <TouchableOpacity activeOpacity={1} style={styles.okBtn} onPress={()=>navigation.navigate('LoginPage')}>
                        <Text style={styles.okBtnText}>OK</Text>
                    </TouchableOpacity>
        
                    </LinearGradient>
        </View>
    )
}

export default Congratulation

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    fieldContainer: {
        height: 608,
        paddingHorizontal: 62,
        paddingVertical: 40,
        justifyContent: 'center'
    },
    congratsImage: {
        marginTop: 103,
        alignSelf: "center",
    },
    heading: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600',
        textAlign: "center",
        marginTop: 33,
    },
    descText: {
        color: "#FFFFFF",
        fontSize: 15,
        textAlign: "center",

    },
    okBtn: {
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
    okBtnText: {
        textAlign: "center",
        color: "#DE284B",
        fontSize: 18,
        fontWeight: "bold",
    },
})
