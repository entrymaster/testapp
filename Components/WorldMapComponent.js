
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { FontAwesome,AntDesign } from '@expo/vector-icons';

const WorldMapComponent = props => {
   
    return (
        <View style={styles.Container}>
            <ImageBackground source={require('../assets/worldmap.png')} style={styles.BackImg} imageStyle={styles.bgImage}>
                <View style={styles.ImgView}>
                    <View style={styles.bgText}>
                        <Text style={styles.TextHeading}>You deserve an extraordinary career</Text>
                        <Text style={styles.TextLine}>No matter where you live</Text>
                        
                    </View>
                    <View style={styles.btncontainer}>
                    <View style={styles.touchable}>
                            <TouchableOpacity style={styles.btn_ButtonStyle} >
                                <Text style={styles.btn_Text}>Hire{'\n'}freelancer</Text>
                                <AntDesign name="arrowright" size={20} color="#fff" style={styles.forwardIcon}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.touchable}>
                            <TouchableOpacity style={styles.btn_ButtonStyle} >
                                <Text style={styles.btn_Text}>Become a{'\n'}freelancer</Text>
                                <AntDesign name="arrowright" size={20} color="#fff" style={styles.forwardIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        // paddingHorizontal: 2,
        marginVertical: 30
    },
    BackImg: {
        width: "100%",
        height: 220
    },
    bgImage: {
        borderRadius: 8
    },
    TextHeading: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#000',
        textAlign:'center'
    },
    TextLine: {
        fontSize: 18,
        color: '#000',
       textAlign:'center'
    },
    TextLineSecond: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
    },
    ImgView: {
        paddingVertical:50
    },
    btn_Button: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
    },
    btn_ButtonStyle: {
        backgroundColor: '#0090FF',
        flexDirection:'row',
        padding: 10,
        width:'100%'
    },
    touchable: {
        marginLeft: 15,
    },
    
    btn_Text: {
        fontSize: 14,
        color: '#fff',
        
        fontWeight: 'bold'
    },
    btn_TextHire: {
        fontSize: 12,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    bgText: {
        paddingLeft: 4
    },
    btncontainer:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:18
        // justifyContent:'space-between',
        // width:'80%'
        
    },
    forwardIcon:{
        paddingLeft:16,
        paddingTop:8
    },
})
export default WorldMapComponent;
