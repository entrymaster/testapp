import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import TacentHeading from '../Components/TacentHeading'
import TacentInput from '../Components/TacentInput'
import { AntDesign } from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet'
import { ScrollView } from 'react-native';
import TacentInputField from '../Components/TacentInputField';
import TimesButtom from '../Components/TimesButton';

const FeedbackScreen = () => {

    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [address, setAddress] = useState();
    const [message, setMessage] = useState();
    const [index, setIndex] = useState(null)

    //Feedback

    const getActionSheetRe = (ref) => { (actionsheets = ref) }
    let optionArray = [
        'category1', 'category2', 'category3'
    ]

    const showActionSheet = () => {
        actionsheets.show();
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null} keyboardVerticalOffset={60} style={styles.pageLayout}>
            <View>
                <TacentHeading label={"Feedback"} />
                
            </View>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Name'}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Mobile'}
                        keyboardType={'numeric'}
                        maxLength={10}
                        value={mobile}
                        onChangeText={(text) => setMobile(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Email'}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <Text style={styles.borderText}>Select Feedback Type</Text>
                    <TouchableOpacity onPress={showActionSheet}>
                    <View style={styles.FlatListBox}>
                        <Text style={styles.TypeText}>{optionArray[index]}</Text>
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
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Subject'}
                        value={subject}
                        onChangeText={(text) => setSubject(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Address'}
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInputField
                        label={'Message'}
                        value={message}
                        onChangeText={(text) => setMessage(text)}
                    />
                </View>
                <View style={styles.buttonArea}>
                    <TimesButtom  buttonText = {"Submit"}/>
                  {/*   <TouchableOpacity style={styles.btn_Button}>
                        <Text style={styles.btn_Text}>Submit</Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    pageLayout: {
        flex: 1,
        padding: 16,
        backgroundColor:"white"
    },
    TextInputheight: {
        marginTop: 20
    },
    buttonArea:{
marginVertical:20,
width:'75%',
alignSelf:'center'
    },
    FlatListBox: {
        borderBottomWidth: 1,
        height: Platform.OS === 'ios' ? 30 : 35,
        flexDirection: 'row',
        borderColor: 'grey',
        justifyContent: 'space-between',
        paddingTop:4,
        marginTop:6
    },
    addicon: {
        alignSelf: 'flex-end',
        paddingRight: 8,
    },
    borderText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    btn_Button: {
        backgroundColor: '#f02f39',
        borderRadius: 6,
        padding: 6,
        width: '30%',
        alignItems: 'center'
    },
    btn_Text: {
        fontSize: 18,
        color: '#fff',
    },
    TypeText:{
        fontSize:18
    }
})

export default FeedbackScreen