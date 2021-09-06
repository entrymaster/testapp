import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native'
import TacentHeading from '../Components/TacentHeading'
import TacentInput from '../Components/TacentInput'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import ActionSheet from 'react-native-actionsheet';
import { Overlay } from "react-native-elements";
// import { Dropdown } from 'react-native-material-dropdown';
import TacentInputField from '../Components/TacentInputField';
import TimesButton from '../Components/TimesButton';


const BannerAds = () => {

    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [email, setEmail] = useState();
    const [company, setCompany] = useState();
    const [index, setIndex] = useState(null);
    const [visible, setVisible] = useState(false);

    let data = [{
        value: 'Banana',
    }, {
        value: 'Mango',
    }, {
        value: 'Pear',
    }];

    const getActionSheetRe = (ref) => { (actionsheets = ref) }
    let optionArray = [
        'category1', 'category2', 'category3'
    ]

    const showActionSheet = () => {
        actionsheets.show();
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : null} keyboardVerticalOffset={60} style={styles.mainContainer}>

            <TacentHeading label={"Banner Ads"} />
            <Text style={styles.titleDescription}>Fill the form below to submit your ad.</Text>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>

                <View style={styles.textInputHeight}>
                    <TacentInput
                        label={'Full Name'}
                        value={name}
                        color={'grey'}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.textInputHeight}>
                    <TacentInput
                        label={'Mobile Number'}
                        keyboardType={'numeric'}
                        maxLength={10}
                        color={'grey'}
                        value={mobile}
                        onChangeText={(text) => setMobile(text)}
                    />
                </View>
                <View style={styles.textInputHeight}>
                    <TacentInput
                        label={'Email'}
                        value={email}
                        color={'grey'}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.textInputHeight}>
                    <TacentInput
                        label={'Company Name'}
                        value={company}
                        color={'grey'}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.textInputHeight}>
                    <Text style={styles.borderText}>Company Category</Text>
                    <TouchableOpacity onPress={showActionSheet}>
                        <View style={styles.dropdownBox}>
                            {
                                optionArray[index] == null ? 
                                
                                    <Text style={styles.typeText}>Select Category</Text>
                                :<Text style={styles.typeText}>{optionArray[index]}</Text>
                            }
                            
                            <AntDesign name="down" size={16} color="grey" style={styles.addicon} />
                            <ActionSheet
                                ref={getActionSheetRe}
                                options={optionArray}
                                placeholder  = {'Company Category'}
                                destructiveButtonIndex={0}
                                onPress={(index) => {
                                    setIndex(index);
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <Dropdown
                    label='Favorite Fruit'
                    data={data}
                /> */}

                <TouchableOpacity style={styles.quoteButton} onPress={()=>setVisible(true)}>
                    <TimesButton buttonColor={'#f02f39'} buttonText={'Get Quote'} />
                </TouchableOpacity>

            </ScrollView>
            <Overlay
                isVisible={visible}
                onBackdropPress={() => setVisible(!visible)}
                overlayStyle={styles.overlay}
            >
                

                    <FontAwesome5 name="thumbs-up" size={70} color="#f02f39" style={styles.thumbsUp} />
                   <Text style={styles.overlayText}>Thank you for submitting your request.{'\n'}We will get back soon.</Text>
                   <TouchableOpacity style={styles.overlayButton} onPress={()=>setVisible(false)}>
                   <TimesButton buttonColor={'#f02f39'} buttonText={'Ok'} />
                   </TouchableOpacity>
            </Overlay>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16
    },
    titleDescription: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 20
    },

    textInputHeight: {
        marginTop: 20
    },
    dropdownBox: {
        borderBottomWidth: 1,
        height: Platform.OS === 'ios' ? 30 : 35,
        flexDirection: 'row',
        borderColor: 'grey',
        justifyContent: 'space-between',
        paddingTop: 4,
        marginVertical: 20
    },
    addicon: {
        alignSelf: 'flex-end',
        paddingRight: 8,
    },
    borderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey'
    },
    btn_Button: {
        backgroundColor: '#f02f39',
        borderRadius: 6,
        padding: 6,
        width: '30%',
        alignSelf: 'center',
        alignItems: 'center'
    },
    btn_Text: {
        fontSize: 18,
        color: '#fff',
    },
    typeText: {
        fontSize: 18,
        color: 'grey'
    },
    overlay:{
        borderRadius:10,
        padding:20,
        height:300,
        justifyContent:'space-around'
    },
    thumbsUp:{
        alignSelf:'center',
    },
    overlayText:{
        textAlign:'center',
        fontWeight:'700'
    },
    overlayButton:{
        alignSelf:'center',
        width:120
    },
    overlayButtonText:{
        textAlign:'center',
        color:'#FFFFFF'
    },
    quoteButton:{
        width:200,
        alignSelf:'center'
    }

})

export default BannerAds