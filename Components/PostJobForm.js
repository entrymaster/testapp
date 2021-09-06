import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { CheckBox } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import TacentInput from './TacentInput';
import TacentInputField from './TacentInputField';
import HeaderMain from './HeaderMain';
import TimesButton from './TimesButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import * as Application from "expo-application";
import * as IntentLauncher from "expo-intent-launcher";
import { Zocial } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet';
import { FontAwesome } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';




const PostJobForm = () => {

    const [isSelected, setSelection] = useState(null);
    const [jobType, setJobType] = useState(null)
    const [radio, setRadio] = useState(false);
    const [doc, setDoc] = useState(null)
    const [index, setIndex] = useState(null);
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

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
        console.log();
        if (permissionResult.granted === false) {
            createAlert();
        } else {
            let result = await DocumentPicker.getDocumentAsync({ multiple: true });
            if (!result.cancelled) {
                setDoc(result)
                console.log(result);
            }
        }
    }

    const getActionSheetRe = (ref) => { (actionsheets = ref) }
    let optionArray = [
        'Automobile', 'Aviation', 'Education' , 'Government' , 'Legal' , 'Logistics' , 'Information Technology' , 'Others'
    ]

    const showActionSheet = () => {
        actionsheets.show();
    }

    return (
        <ScrollView style={styles.mainView} vertical={true}>
            <HeaderMain/>
            <View style={styles.subCont}>
                <Text style={styles.mainHeading}>Post a Job</Text>
                <Text style={styles.subHeading}>Fill out the form below to post your job.</Text>
                <View>

                 <View style = {styles.dropDownView}>
                       
                        <TouchableOpacity onPress={showActionSheet}>
                            <View style={styles.dropdownBox}>
                            {
                                optionArray[index] == null ?

                                    <Text style={styles.typeText}>Company Category</Text>
                                    : <Text style={styles.typeText}>{optionArray[index]}</Text>
                            }
                                <AntDesign name="down" size={16} color="grey" style={styles.addicon} />
                                <ActionSheet
                                    ref={getActionSheetRe}
                                    options={optionArray}
                                    destructiveButtonIndex={0}
                                    onPress={(index) => {
                                        setIndex(index);
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        </View>
              
                    <Text style={styles.checkText}>Job Type</Text>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox
                            activeOpacity={1}
                            // value={isSelected}
                            onPress={() => setJobType('FullTime')}
                            title='Full Time'
                            checked={jobType == 'FullTime'}
                            containerStyle={styles.container}
                        />
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox
                            activeOpacity={1}
                            // value={isSelected}
                            onPress={() => setJobType('PartTime')}
                            title='Part Time'
                            checked={jobType == 'PartTime'}
                            containerStyle={styles.container}
                        />
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox
                            activeOpacity={1}
                            // value={isSelected}
                            onPress={() => setJobType('RemoteWork')}
                            title='Remote Work'
                            checked={jobType == 'RemoteWork'}
                            containerStyle={styles.container}
                        />
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox
                            activeOpacity={1}
                            onPress={() => setJobType('Internship')}
                            checked={jobType == 'Internship'}
                            containerStyle={styles.container}
                            title='Internship'
                        />
                    </View>
                </View>
                <View style = {styles.compView}>
                <TacentInput label={'Position'} />
                </View>
                <View style = {styles.compView}>
                <TacentInputField label={'Job Description (Maximum upto 300 words)'} />
                </View>
                <View style = {styles.compView}> 
                <TacentInput label={'Company Name'} />
                </View>
                <View style = {styles.compView}> 
                <TacentInput label={'Company Website'} />
                </View>
                <View style = {styles.compView}>
                <TacentInput label={'Company Address'} />
                </View>
                <View style = {styles.compView}>
                <TacentInput label={'Average Salary Offered'} />
                </View>
                <View style = {styles.compView}>
                <TacentInput label={'Job Started Date'} />
                </View>
                <View style = {styles.compView}>
                <TacentInput label={'Applicaton Url'} />
                </View>
                <View style = {styles.compView}>
                <TacentInput label={'Contact Email'} />
                </View>
                <View style = {styles.compView}>
                <TacentInput label={'Contact Person Name'}/>
                </View>
               
                <View style = {styles.walkInInterView}>
                    <Text style={styles.interviewText}>Walk in Interview ?</Text>
                    <View style={styles.radioView}>
                        <CheckBox
                            activeOpacity={1}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            onPress={() => setRadio(true)}
                            title='Yes'
                            checked={radio}
                            containerStyle={styles.container}
                        />
                        <CheckBox
                            activeOpacity={1}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            onPress={() => setRadio(false)}
                            title='No'
                            checked={!radio}
                            containerStyle={styles.container}
                        />
                    </View>

                </View>
              {
                  radio && (
                      <View>
                          <View style = {styles.datetimeView}>
                    <View style ={styles.dateTimeInnerView}> 
                <TouchableOpacity >
                    <AntDesign name="calendar" size={30} color="black" />
                </TouchableOpacity>
                <Text></Text>
                        <DatePicker
                            style={styles.datePickerStyle}
                            date={date}
                            mode="date"
                            icon = {false}
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            minDate="01-01-1990"
                            maxDate="01-01-2050"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    display : 'none'
                                },
                                dateInput: {
                                    marginLeft: 10,
                                    width: 10
                                },
                            }}
                            onDateChange={(date) => {
                                setDate(date);
                            }}
                        />
                </View> 
                <View style ={styles.dateTimeInnerView}>
                <TouchableOpacity>
                <AntDesign name="clockcircleo" size={30} color="black" />
                </TouchableOpacity>
                <Text style = {styles.dateBox}></Text>
                </View>
                </View>
                <View style={styles.compView}>
                    <TacentInput label={'Address'} />
                </View>
                <TouchableOpacity onPress={DocPicker}>
                    <View style={styles.uplaoad} >
                        <Text style={styles.pickerPlaceholder}>Upload Logo or Ad Creative</Text>
                        <Feather name="upload" size={24} color="black" style={styles.uploadIcon} />
                    </View>
                </TouchableOpacity>
                      </View>
                  )
              }
             
                
                <View style = {styles.submitButton}>
                <TimesButton buttonColor={'#f02f39'} buttonText={'Submit'}  />
                </View>
                <View style = {styles.contactUsView}>
                    <Text style = {styles.contactUsText}>Contact Us</Text>
                    <Image source = {require('../assets/Contact.png')} style = {styles.contactImg}/>
                    <Text style = {styles.firstName}>Nirmam</Text>
                    <Text style = {styles.surName}>Sanghvi</Text>
                    <View style = {styles.contactDetailView}>
                    <Zocial name="email" size={22} color="#4D4D4D" />
                    <Text style = {styles.contactDetails}>nirmam.sanghvi@timesgroup.com</Text>
                    </View>
                    <View style = {styles.contactDetailView}>
                    <FontAwesome name="phone" size={22} color="#4D4D4D" />
                    <Text style = {styles.contactDetails}>
                        +91 9930548832
                    </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

 
    mainView: {
        flex: 1,
        backgroundColor: '#fff',
        // marginLeft : 5

    },

    container: {
        backgroundColor: '#fff',
        borderWidth: 0
    },

    mainHeading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F02F39',
        marginTop: 100
    },
    subHeading: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 12
    },
    dropDownView :{
     marginTop : 8,
     marginBottom : 8
    },
    borderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
        // marginTop : 0
    },
    pickerPlaceholder:{
    padding : 4,
    fontWeight : 'bold',
    color :'#A2A2A2'
    },
    typeText: {
        fontSize: 18,
        color: 'grey',
        paddingLeft : 12,
        paddingBottom : 5
    },
    checkText: {
        fontWeight: 'bold',
        fontSize: 17,
        color : 'black',
        marginBottom : 10
    },
    walkInInterView : {
     marginTop : 25,
     marginBottom  : 12
    },
    dropdownBox: {
        borderWidth: 1,
        height: Platform.OS === 'ios' ? 30 : 35,
        flexDirection: 'row',
        alignItems : 'center',
        borderColor: 'grey',
        justifyContent: 'space-between',
        paddingTop: 4,
        marginVertical: 20
    },
    addicon: {
        alignSelf: 'flex-end',
        paddingRight: 8,
        paddingBottom : 6
    },

    interviewText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    radioView: {
        flexDirection: 'row'
    },
    subCont: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    dateTimeView: {
        flexDirection: 'row',
    },
    dateBox: {
        borderWidth: 1,
        width: 100,
        height: 30,
        marginLeft : 10
    },
    datetimeView: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 8
    },
    dateTimeInnerView : {
        flexDirection : "row",
    },
    uplaoad :{
        borderWidth : 1,
        height : 33,
        marginTop :35,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    uploadIcon:{
        
        marginRight : 12,
        marginTop : 2
    },
    submitButton:{
    
        width : 160,
        alignSelf: 'center',
        marginTop : 25,
        
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    contactUsText : {
        fontSize : 25,
        fontWeight : 'bold'
    },
    contactImg: {
        resizeMode : 'contain',
        width: 320,
        marginTop : 20
    },
    firstName: {
        fontWeight : 'bold',
        fontSize : 32,
        marginTop : 20
    },
    surName : {
        fontSize : 28,
        marginBottom : 15
    },
    contactDetailView : {
        flexDirection : 'row',
        marginTop : 4
    
    },
    contactDetails : {
        marginLeft : 12,
        fontWeight : 'bold',
        color : '#4D4D4D',
        
    },
    contactUsView :{
        marginTop: 25
    },
    compView : {
        marginTop : 20
    }
})
export default PostJobForm
