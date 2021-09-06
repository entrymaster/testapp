import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import TacentInput from '../Components/TacentInput'
import TacentInputField from '../Components/TacentInputField'
import { Overlay } from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import TimesButton from '../Components/TimesButton'

const AdvertContactUs = ({ navigation }) => {

    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const [company, setCompany] = useState();
    const [mobile, setMobile] = useState();
    const [message, setMessage] = useState();
    const [visible, setVisible] = useState(false);


    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null} keyboardVerticalOffset={60} style={styles.MainContainer}>
            <View >
                <Text style={styles.TextRedHeading}>Contact Us</Text>
            </View>
            <View style={styles.BorderBottom}></View>

            <ScrollView style={styles.InputViewContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.HeadingView}>
                    <Text style={styles.TextHeading}>Fill out the form below to submit your query.</Text>
                </View>

                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Full Name'}
                        color={'grey'}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Mobile'}
                        color={'grey'}
                        value={mobile}
                        onChangeText={(text) => setMobile(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Email'}
                        value={email}
                        color={'grey'}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInput
                        label={'Company Name'}
                        color={'grey'}
                        value={company}
                        onChangeText={(text) => setCompany(text)}
                    />
                </View>
                <View style={styles.TextInputheight}>
                    <TacentInputField
                        label={'Message'}
                        color={'grey'}
                        value={message}
                        onChangeText={(text) => setMessage(text)}
                    />
                </View>
                <TouchableOpacity style={styles.BtnButton} onPress={() => setVisible(true)}>
                    <TimesButton buttonColor={'#f02f39'} buttonText={'Submit'} />
                </TouchableOpacity>
            </ScrollView>
            <Overlay
                isVisible={visible}
                onBackdropPress={() => setVisible(!visible)}
                overlayStyle={styles.overlay}
            >
                <FontAwesome5 name="thumbs-up" size={70} color="#f02f39" style={styles.thumbsUp} />
                <Text style={styles.overlayText}>Thank you for submitting your request.{'\n'}We will get back soon.</Text>
                <TouchableOpacity style={styles.overlayButton} onPress={() =>setVisible(false)}>
                    <TimesButton buttonColor={'#f02f39'} buttonText={'Ok'} />
                </TouchableOpacity>
            </Overlay>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 16
    },
    TextRedHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e73b3b'
    },
    BorderBottom: {
        borderBottomWidth: 2,
        width: '10%',
        paddingTop: 5,
        borderColor: '#e73b3b'
    },
    HeadingView: {
        paddingTop: 12
    },
    TextHeading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    TextInputheight: {
        marginTop: 20
    },
    BtnButton: {
        width: 170,
        alignSelf: 'center',
        marginTop: 20
    },
    overlay: {
        borderRadius: 10,
        padding: 20,
        height: 300,
        justifyContent: 'space-around'
    },
    thumbsUp:{
        alignSelf:'center',
    },
    overlayText: {
        textAlign: 'center',
        fontWeight: '700'
    },
    overlayButton: {
        alignSelf: 'center',
        width: 120
    },
    overlayButtonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    },
})

export default AdvertContactUs


