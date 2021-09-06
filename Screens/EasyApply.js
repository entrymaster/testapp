import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Linking } from 'react-native'
import { MaterialCommunityIcons,FontAwesome,FontAwesome5,Foundation } from '@expo/vector-icons';
import TimesButton from '../Components/TimesButton';

const EasyApply = () => {

    const [jobsAdsDetails, setJobAdsDetails] = useState([]);

    const emailHandler = () => {
        Linking.openURL('mailto:' + (jobsAdsDetails.companyEmail) + '?subject=Job Application&body=Hi, I would like to apply for a job in your organization')
      };
    
      const callHandler = () => {
        Linking.openURL('tel:+919565155000')
      };
    
      const WalkInHandler = () => {
    
      };
    
      const websiteHandler = async () => {
        console.log(jobsAdsDetails.companyWebsite)
        const website = JSON.stringify(jobsAdsDetails.companyWebsite)
        let result = await WebBrowser.openBrowserAsync("https://www.rozgaarindia.com/");
        WebBrowser.dismissBrowser()
      }

    return (
        <View style={styles.MainContainer}>
            <Text style={styles.ItemHeading}>How would you like to {'\n'}apply for this job?</Text>
            <View style={{height:400}}>
            <View style={styles.optionView}>
                <TouchableOpacity style={styles.TouchableOpacityView} onPress={() => { emailHandler() }}>
                    <View style={styles.IconWidth}>
                        <MaterialCommunityIcons name="email" size={24} color="red" />
                    </View>
                    <View style={styles.IconTextWidth}>
                        <Text style={styles.optionText}>Email</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.optionView}>
                <TouchableOpacity style={styles.TouchableOpacityView} onPress={() => { callHandler() }}>
                    <View style={styles.IconWidth}>
                    <FontAwesome name="phone" size={24} color="red" />
                    </View>
                    <View style={styles.IconTextWidth}>
                        <Text style={styles.optionText}>Call</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.optionView}>
                <TouchableOpacity style={styles.TouchableOpacityView}>
                    <View style={styles.IconWidth}>
                    <FontAwesome5 name="walking" size={24} color="red" />
                    </View>
                    <View style={styles.IconTextWidth}>
                        <Text style={styles.optionText}>Walk in</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.optionView} onPress={() => { websiteHandler() }}>
                <TouchableOpacity style={styles.TouchableOpacityView}>
                    <View style={styles.IconWidth}>
                    <Foundation name="web" size={24} color="red" />
                    </View>
                    <View style={styles.IconTextWidth}>
                        <Text style={styles.optionText}>Website</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </View>
            <TouchableOpacity style={styles.closeButton} >
          <TimesButton
            buttonText={"Close"}
            buttonColor={"#F02F39"}
          />
        </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        // padding:20
        paddingHorizontal: 30,
        paddingTop : 20,
        backgroundColor: '#FFFFFF'
    },
    ItemHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        height:50
    },
    optionView: {
        padding: 18,
        // flexDirection: 'row',
        borderRadius: 1,
        marginTop: 25,
        backgroundColor: '#fff',
        borderRadius: 18,
        elevation: 5,
// height:70
    },
    TouchableOpacityView:{ 
        flexDirection:'row' 
    },
    IconWidth:{ 
        width:'40%' 
    },
    IconTextWidth:{ 
        width:'60%'
    },
    optionText: {
        color: 'red',
        fontSize: 18,
    },
    closeButton: {
        width:'40%',
        alignSelf:'center'
    },
})

export default EasyApply





