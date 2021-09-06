import React,{useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import TimesButton from './TimesButton';
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import * as Application from "expo-application";
import * as IntentLauncher from "expo-intent-launcher";
import { Entypo } from "@expo/vector-icons";
import { FlatList } from 'react-native';
import * as WebBrowser from 'expo-web-browser';


const CvCard = props => {
    const [cv, setCv] = useState(null);

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

    const DocPicker = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            createAlert();
        } else {
            let result = await DocumentPicker.getDocumentAsync({ multiple: true });
            if (!result.cancelled) {
                setCv(result)
                console.log(result);
            }
        }
    }

    const cvOpenHandler = async(resumePath)=> {
        let result = await WebBrowser.openBrowserAsync(resumePath);
    };
    
    return (
        <View style={styles.cardView}>
            <View style={styles.headingIcon}>
                <AntDesign name="book" size={20} color="grey" />
                <Text style={styles.cvHeading}>CV</Text>
            </View>
            <Divider />
            <Text style={styles.subHeading}>
                Upload a new CV or use our CV builder to build one for you
            </Text>
            
            {(cv != null && cv.type != 'cancel') &&
            (<View style={styles.cvContainer}>
                <Text style={styles.cvName}>File Selected: {cv.name}</Text>
                <TouchableOpacity onPress={()=>setCv(null)} style={styles.crossIcon}>
                    <Entypo name="circle-with-cross" size={20} color="grey"  />
                </TouchableOpacity>
            </View>)}
            
            <View style={styles.buttonCV}>
                <TouchableOpacity onPress={()=>DocPicker()}>
                    <TimesButton buttonText={"Upload CV"} buttonColor={"#F02F39"} />
                </TouchableOpacity>
                </View>
                <FlatList
                data={props.jobAds}
                keyExtractor={item => item.keyIndex}
                
                renderItem={({ item }) => (
                    <View> 
                        <TouchableOpacity onPress={()=> cvOpenHandler(item.resumePath) }> 
                        <Text style={{padding:10, color:'#3ebff1', fontSize:12}}>{item.ResumeTitle} </Text>
                        </TouchableOpacity>
                        </View>
                )
    } />
            
        </View>

    );
};

const styles = StyleSheet.create({
    cardView: {
        width: "95%",
        backgroundColor: 'white',
        alignSelf: 'center',


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
        flexDirection: 'row',
        alignContent: 'center',
        padding: 10
    },
    cvHeading: {
        color: 'grey',
        marginLeft: 5
    },
    subHeading: {
        padding: 10,
        color: 'grey'
    },
    cvContainer:{
        width:'90%',
        flexDirection:'row',
    },
    cvName:{
        padding: 10,
        color: 'grey'
    },
    crossIcon:{
        alignSelf:'center'
    },
    buttonCV: {
        width: '50%',
        alignSelf: 'center'
    }

});
export default CvCard;