import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import TacentInput from '../Components/TacentInput'
import TacentInputField from '../Components/TacentInputField'

const BecomeMentorForm = ({ navigation }) => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [company, setCompany] = useState()
    const [mobile, setMobile] = useState()
    const [designation, setDesignation] = useState()
    const [location, setLocation] = useState()
    const [mentor, setMentor] = useState()
    const [mentorship, setMentorShip] = useState()

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null} keyboardVerticalOffset={60} style={styles.MainContainer}>
            <View >
                <Text style={styles.TextRedHeading}>Become a Mentor</Text>
            </View>
            <View style={styles.BorderBottom}></View>

            <ScrollView style={styles.InputViewContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.HeadingView}>
                    <Text style={styles.TextHeading}>Make a difference : Mentoring amplifies change</Text>
                </View>
                <View style={styles.HeadingView}>
                    <Text style={styles.TextHeading}>Are you ready to join the mentoring movement?</Text>
                </View>

                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'First Name'}
                        placeholder={'Enter your full name'}
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Last Name'}
                        placeholder={'Enter your last name'}
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Email'}
                        placeholder={'Enter your email'}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Company'}
                        placeholder={'Enter your company'}
                        value={company}
                        onChangeText={(text) => setCompany(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Mobile'}
                        placeholder={'mobile'}
                        value={mobile}
                        onChangeText={(text) => setMobile(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Designation'}
                        placeholder={'Enter your Designation'}
                        value={designation}
                        onChangeText={(text) => setDesignation(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Location'}
                        placeholder={'Enter your office location'}
                        value={location}
                        onChangeText={(text) => setLocation(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInputField
                        label={'Please briefly describe why would you like to be mentor ?'}
                        placeholder={'Comments'}
                        value={mentor}
                        onChangeText={(text) => setMentor(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInputField
                        label={'Please specify your area of speciality for mentorship'}
                        placeholder={'Comments'}
                        value={mentorship}
                        onChangeText={(text) => setMentorShip(text)}
                    />
                </View>
                <TouchableOpacity>
                    <View style={styles.BtnView}>
                        <Text style={styles.BtnText}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor:'#FFFFFF',
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    TextRedHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e73b3b'
    },
    BorderBottom: {
        borderBottomWidth: 2,
        width: '10%',
        paddingTop: 2,
        borderColor: '#e73b3b'
    },
    HeadingView: {
        paddingTop: 12
    },
    TextHeading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    InputViewContainer: {
        //paddingTop: 25
    },
    TextInputheight: {
        marginTop: 20
    },
    BtnView: {
        marginVertical: 30,
        backgroundColor: '#e73b3b',
        padding: 13,
        width: '40%',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 4
    },
    BtnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default BecomeMentorForm


