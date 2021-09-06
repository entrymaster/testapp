import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ShowMore from './ShowMore';
import { useNavigation } from '@react-navigation/native';

import ImageCompo from '../RozgaarIndiaComp/ImageCompo';
import AudioVideoCompo from '../RozgaarIndiaComp/AudioVideoCompo';
import OtherFilesCompo from '../RozgaarIndiaComp/OtherFilesCompo';
import ApiCatch from '../RozgaarIndiaComp/ApiCatch';
import ProfilePic from '../RozgaarIndiaComp/ProfilePic';
import * as WebBrowser from 'expo-web-browser';

const RozgaarJobCard = props => {

    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [mydata, setMydata] = useState({ posts: [] });
    const [title, setTitle] = useState();
    const [subheading, setSubheading] = useState();


    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://www.rozgaarindia.com/');
       
      };
    useEffect(() => {
        try {
            fetch('https://www.rozgaarindia.com/bridge/queuedWorks', {
                method: 'POST',
                timeout: 10000,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Auth-Token': 'QtLRxjAC4ulU19iyX0FzxU6VB5Wwm8cBbtlVkxsF'
                },
                body: JSON.stringify({
                    "type": "featured"
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setMydata(json.data.slice(0, 5));
                    setTitle(json.heading);
                    setSubheading(json.sub_heading);
                })
                .catch((error) => ApiCatch({ error: error, source: 'JobCard - queuedWorks' }))
                .finally(() => setLoading(false));
        } catch (error) {
            ApiCatch({ error: error, source: 'JobCard - queuedWorks' })
        }
    }, [props.trigger]);

    const fileCheck = (f_type, f_url, f_width, f_height, f_padding, f_justifyAlign, f_margin, f_resize, p_token) => {

        switch (f_type) {
            case 'av':
                return (
                    <AudioVideoCompo
                        file_url={f_url}
                        height={f_height}
                        width={f_width}
                        resize={f_resize}
                        padding={f_padding}
                        margin={f_margin}
                        justifyAlign={f_justifyAlign}
                    />
                );
            case 'img':
                return (
                    <TouchableOpacity onPress={() => { (_handlePressButtonAsync()) }}>
                        <ImageCompo
                            file_url={f_url}
                            height={f_height}
                            width={f_width}
                            resize={f_resize}
                        />
                    </TouchableOpacity>
                );
            case 'others':
                return (
                    <TouchableOpacity onPress={() => { (_handlePressButtonAsync()) }}>
                        <OtherFilesCompo
                            file_url={f_url}
                            height={f_height}
                            width={f_width}
                            resize={f_resize}
                        />
                    </TouchableOpacity>
                );
            default:
                return (
                    <TouchableOpacity onPress={() => { _handlePressButtonAsync() }}>
                        <ImageCompo
                            file_url={'https://nodatafound.jpg'}
                            height={f_height}
                            width={f_width}
                            resize={f_resize}
                        />
                    </TouchableOpacity>
                );
        }
    }

    const showMoreView = () => {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: "center" }}>
                <TouchableOpacity onPress={() => { _handlePressButtonAsync()   }}>
                    <ShowMore />
                </TouchableOpacity>
            </View>
        )
    }

    return (

        <View>
        

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={mydata}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={4}
                    keyExtractor={({ keyIndex }, index) => keyIndex}
                    ListFooterComponent={showMoreView}
                    renderItem={({ item }) => (
                        <View style={styles.jobCardContainer} >
                            {fileCheck(item.work_img1_type, item.work_img1, '100%', 130, 0, 'center', 0, 'cover', item.post_token)}

                            <TouchableOpacity onPress={() => { _handlePressButtonAsync()   }}>

                                <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center', }}>
                                    <ProfilePic profilepicture={item.profilepicture} mytext={item.username} width={30} height={30} size={"small"} fontSize={22} shape={'rounded'} />
                                    <Text style={{ marginLeft: 10 }}>{item.username} </Text>
                                </View>
                                <Text style={styles.title}>I can {item.gtitle}</Text>

                            </TouchableOpacity>

                            <View style={{ flex: 1, alignSelf: 'flex-end', padding: 5, alignItems: 'flex-end', justifyContent: 'flex-end' }} >
                                <Text style={styles.Price}> <Text style={{ fontSize: 12, color: '#32CD32', }} > From</Text> <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#77ab59' }}>{'\u20B9'}{item.payable_price} </Text> </Text>
                            </View>

                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({

    jobCardContainer: {
        shadowColor: 'grey',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#f9f9f9',
        backgroundColor: 'white',
        width: 270,
        margin: 7,
        borderRadius:20
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: "cover"
    },
    title: {
        fontSize: 14,
        marginVertical: 5,
        marginHorizontal: 8,
        fontWeight: '500',
    },
    price: {
        alignSelf: 'flex-end'
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 40,
        marginLeft: 12,
        color: '#404040'
    },
    subHeading: {
        fontSize: 15,
        marginTop: 3,
        marginLeft: 12,
        marginBottom: 20,
        color: '#999999'
    },
}
);

export default RozgaarJobCard;