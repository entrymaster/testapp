import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import HeadingsForSection from "./HeadingsForSection";

const UsefulTools = () => {
    return (
        <View style={styles.mainContainer}>
           <HeadingsForSection title={'USEFUL TOOLS'}/>
            <TouchableOpacity>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../assets/Group-644.png")}
                        style={styles.image}
                    >
                        <View style={styles.contentView}>
                            <View style={styles.textContainer}>
                                <Text style={styles.headingText}>Salary{"\n"}Calculator</Text>
                                <Text style={styles.titleDiscription}>
                                see how your current paycheck compares to other cities and people in your field
                                </Text>
                            </View>
                            <Image
                                source={require("../assets/Group-492.png")}
                                style={styles.iconImage}
                            />
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.container}>
                    <ImageBackground
                        source={require("../assets/Group-645.png")}
                        style={styles.image}
                    >
                        <View style={styles.contentView}>
                            <View style={styles.textContainer}>
                                <Text style={styles.headingText}>TAX{"\n"}Calculator</Text>
                                <Text style={styles.titleDiscription}>
                                Easy and simple way to know your tax and emi's
                                </Text>
                            </View>
                            <Image
                                source={require("../assets/tax-svgrepo-com.png")}
                                style={styles.iconImage}
                            />
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
            <View style={styles.horizontalLine} />
        </View>
    );
};


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        //padding: 20,
    },
    titleText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#F02F39",
        marginBottom: 10,

    },
    horizontalLine: {
        borderBottomColor: "#BFBFBF",
        borderBottomWidth: 2,
        marginVertical: 10,
    },
    image: {
        width: "100%",
        height: 170,
    },
    headingText: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#FFFFFF",
    },
    titleDiscription: {
        paddingVertical: 7,
        fontWeight: "bold",
        fontSize: 11,
        width:'75%',
        color: "#FFFFFF",
    },
    contentView: {
        flexDirection: "row",
         padding: 15,
         paddingVertical:20
    },
    iconImage: {
        height: 80,
        width: 70,
        marginVertical:10,
        resizeMode:'contain'
    },
    textContainer:{
        width:'75%'
    }
});

export default UsefulTools;
