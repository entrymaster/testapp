import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, FlatList, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const RemoteWorkHiring = () => {

    return (
        <View style={styles.maincontainer}>
                    <View style={styles.FlatList}>
                        <Image source={require('../assets/remotehiring.png')} style={styles.Images} />
                        <Image source={require('../assets/rozlogo.png')} style={styles.RozImages} />
                        <View style={styles.headingContainer}>
                            <Text style={styles.HeadingText}>Work on a gig or get{'\n'}part time & full time work</Text>
                            <Text>An online freelance work platform where business and independent skilled professionals can connect and collaborate remotely.</Text>   
                        </View>
                        <View style={styles.hireBtnView}>
                            <TouchableOpacity>
                                <Text style={styles.HireBtnText}>Hire a freelancer</Text>
                                <View style={styles.forwardiconView}>
                                <Text style={styles.postText}>Post requirements</Text>
                                <AntDesign name="arrowright" size={18} color="black" style={styles.forwardIcon}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.becomeBtnView}>
                            <TouchableOpacity>
                                <Text style={styles.BecomeHeading}>Become a freelancer</Text>
                                <View style={styles.forwardiconView}>
                                <Text style={styles.becomeText}>Become freelancer</Text>
                                <AntDesign name="arrowright" size={18} color="#fff" style={styles.forwardIcon}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        //paddingVertical: 10
    },

    FlatList: {
        width: '100%',
        backgroundColor: "#fff",
        borderRadius: 12,
        paddingTop:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        
        elevation: 5,
    },
    
    Images: {
        width: '100%',
        height: 340,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    RozImages: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: '90%',
        marginBottom:-25
    },
    forwardiconView:{
        flexDirection:'row'
    },
    headingContainer:{
        padding:16
    },
    HeadingText:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom:16
    },
    hireBtnView:{
        padding:10,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        margin: 14,
        elevation: 5,
        width:'90%',
        alignSelf:'center'
    },
    HireBtnText:{
        fontSize:18,
        fontWeight:'bold'
    },
    forwardIcon:{
        paddingLeft:25,
        paddingTop:2
    },
    becomeBtnView:{
        backgroundColor:'#0090FF',
        padding:10,
        borderRadius: 12,
        margin: 14,
        width:'90%',
        alignSelf:'center'
    },
    BecomeHeading:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    },
    becomeText:{
        color:'#fff'
    }
})

export default RemoteWorkHiring;