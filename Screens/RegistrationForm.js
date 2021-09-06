import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements';
import TascentHeading from '../Components/TascentHeading'
import TascentInput from '../Components/TascentInput'

const RegistrationForm = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState("")
    const [genderM, setGenderM] = useState();
    const [genderF, setGenderF] = useState();
    const [genderFinal, setGenderFianl] = useState();
    const [employer, setEmployer] = useState();
    const [jobseeker, setJobseeker] = useState();
    const [Final, setFianl] = useState();
    const [isSelected, setSelection] = useState(false);

    // for male
    const checkBoxM = () => {
        setGenderM(true);
        setGenderF();
        setGenderFianl('Male');
    };
    // for female
    const checkBoxF = () => {
        setGenderM();
        setGenderF(true);
        setGenderFianl('Female');
    };

    // for employer
    const checkBoxE = () => {
        setEmployer(true);
        setJobseeker();
        setFianl('Employer');
    };
    // for jobseeker
    const checkBoxJ = () => {
        setEmployer();
        setJobseeker(true);
        setFianl('Jobseeker');
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null} keyboardVerticalOffset={60} style={styles.pageLayout}>
            <View>
                <TascentHeading label={"Registration Form"} />
            </View>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>

                <View style={styles.TextInputheight}>
                    <View style={styles.inputspace}>
                        <TascentInput
                            label={'Name'}
                            placeholder={'Enter your Name'}
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                </View>
                <View style={styles.TextInputheight}>
                    <TascentInput
                        label={'Email'}
                        placeholder={'Enter your Email'}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <View style={styles.inputspace}>
                        <Text
                            style={styles.borderText}>Mobile</Text>
                        <View style={styles.MobileText}>
                            <TextInput
                                style={styles.inputMobile}
                                placeholder='Enter your Mobile Number'
                                keyboardType='numeric'
                                multiline={true}
                                value={mobile}
                                onChangeText={(text) => setMobile(text)}
                                maxLength={10}
                            />
                            <TouchableOpacity><Text style={{paddingTop:16,color: mobile.length===10 ? '#f02f39' : '#a5a5a5'}}>Verify</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.TextInputheight}>
                    <View style={styles.inputspace}>
                        <Text
                            style={styles.borderText}>Gender</Text>
                        <View style={styles.checkboxsection}>
                            <View style={styles.checkbox}>
                                <CheckBox
                                    center
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    onPress={checkBoxM}
                                    checked={genderM}
                                    checkedColor='red'
                                />
                                <Text style={styles.checkboxtext}>Male</Text>
                            </View>
                            <View >
                                <View style={styles.checkboxJ}>
                                    <CheckBox
                                        center
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        onPress={checkBoxF}
                                        checked={genderF}
                                        checkedColor='red'
                                    />
                                    <Text style={styles.checkboxtext}>Female</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.CheckBoxViewheight}>
                    <View style={styles.inputspace}>
                        <Text
                            style={styles.borderText}>Are you Employer or Jobseeker?</Text>
                        <View style={styles.checkboxsection}>
                            <View>
                                <View style={styles.checkbox}>
                                    <CheckBox
                                        center
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        onPress={checkBoxE}
                                        checked={employer}
                                        checkedColor='red'
                                    />
                                    <Text style={styles.checkboxtext}>Employer</Text>
                                </View>
                            </View>
                            <View >
                                <View style={styles.checkbox}>
                                    <CheckBox
                                        center
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        onPress={checkBoxJ}
                                        checked={jobseeker}
                                        checkedColor='red'
                                    />
                                    <Text style={styles.checkboxtext}>Jobseeker</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.TextInputheight}>
                    <View style={styles.inputspaceCheck}>
                        <CheckBox
                            center
                            checked={isSelected}
                            onPress={() => setSelection(!isSelected)}
                            style={styles.checkboxIcon}
                            checkedColor='red'
                        />
                        <View style={styles.CheckBoxText}>
                            <Text style={styles.TextCondition}>I agree to the</Text>
                            <TouchableOpacity>
                                <Text style={styles.TextCondition}> Terms and Conditions</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.TextInputheight}>
                    <TouchableOpacity style={styles.BtnStyle}>
                        <Text style={styles.BtnText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    pageLayout: {
        flex: 1,
        padding: 16
    },
    TextInputheight: {
        marginTop: 20
    },
    CheckBoxViewheight: {
        marginTop: 6
    },
    borderText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        height: Platform.OS === 'ios' ? 30 : 40,
        borderBottomWidth: 1,
        paddingHorizontal: 4,
        borderColor: '#a2a2a2',
        fontSize: 18,
        marginTop: 8,
    },
    inputMobile: {
        height: Platform.OS === 'ios' ? 30 : 40,
        paddingHorizontal: 4,
        borderColor: '#a2a2a2',
        fontSize: 18,
        marginTop: 8,
    },
    MobileText: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#a2a2a2',
        justifyContent: 'space-between'
    },
    VerifyText: {
        paddingTop: 25,
        color: '#f02f39'
    },
    checkboxsection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkbox: {
        flexDirection: "row",
    },
    checkboxJ: {
        flexDirection: "row",
        paddingRight: 20
    },
    checkboxtext: {
        paddingTop: 17,
        fontSize: 16,
    },
    inputspaceCheck: {
        flexDirection: 'row',
    },
    TextCondition: {
        fontSize: 14,
    },
    CheckBoxText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkboxIcon: {
        justifyContent: 'center'
    },
    BtnStyle: {
        backgroundColor: '#f02f39',
        padding: 10,
        borderRadius: 25,
        width: '75%',
        alignSelf: 'center'
    },
    BtnText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    }
})

export default RegistrationForm


