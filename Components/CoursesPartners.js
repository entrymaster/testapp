import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

const CoursesPartners = () => {
    return (

        <View style={styles.mainContainer}>
            <View style={styles.topImageView}>
                <View style={styles.oracleView}>
                    <Image source={require('../assets/oracle.png')} style={styles.oracle} />
                    <View style={styles.bottomView}></View>
                    <Text style={styles.imgText}>1089 Courses</Text>
                </View>
                <View style={styles.oracleView}>
                    <Image source={require('../assets/prince2.png')} style={styles.oracle} />
                    <View style={styles.bottomView}></View>
                    <Text style={styles.imgText}>1089 Courses</Text>
                </View>
                <View style={styles.oracleView}>
                    <Image source={require('../assets/adobe.png')} style={styles.oracle} />
                    <View style={styles.bottomView}></View>
                    <Text style={styles.imgText}>1089 Courses</Text>
                </View>
            </View>
            <View style={styles.bottomImageView}>
                <View style={styles.oracleView}>
                    <Image source={require('../assets/microsoft.png')} style={styles.oracle} />
                    <View style={styles.bottomView}></View>
                    <Text style={styles.imgText}>1089 Courses</Text>
                </View>
                <View style={styles.oracleView}>
                    <Image source={require('../assets/cordis.png')} style={styles.oracle} />
                    <View style={styles.bottomView}></View>
                    <Text style={styles.imgText}>1089 Courses</Text>
                </View>
            </View>
        </View>


    )
}


const styles = StyleSheet.create({
    mainContainer:{
         flex: 1, 
         borderBottomWidth: 3, 
         borderBottomColor: '#C0C0C0', 
    },
    oracleView: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
        //  padding :100,
        width: 110,
        height: 80,
        //marginHorizontal: 4,
        alignItems: 'center',
        marginTop: 15,
        //backgroundColor:'green',

    },
    oracle: {
        resizeMode: 'contain',
        //  borderBottomWidth : 1,
        width: 90,
        height: 30,
        marginTop: 10
    },
    bottomView: {
        borderBottomWidth: 1,
        borderBottomColor: '#C0C0C0',
        width: 90,
        alignSelf: 'center',
        marginTop: 6
    },
    imgText: {
        marginTop: 5,
        color: '#00BFFF',
        fontWeight: 'bold',
        fontSize: 12
    },
    topImageView: {
        flexDirection: 'row',
        width: '100%',
        //backgroundColor:'yellow',
        justifyContent: 'space-evenly'
    },
    bottomImageView: {
        width: '67%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',

        paddingBottom: 35,



    }

})
export default CoursesPartners
