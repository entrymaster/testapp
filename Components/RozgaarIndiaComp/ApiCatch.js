import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApiCatch = props => {

    // Platform type
    const PlatformType = Platform.OS === 'ios' ? "BuyerIOS" : "BuyerAndroid"

    // Concatenating Source and Error
    const errorAddOn = '[' + props.source + '], ' + String(props.error);

    // Getting token from async storage
    AsyncStorage.getItem('userData').then((value) => {
        let parseData = JSON.parse(value);
        {
            // Hitting APi For sending error
            fetch(global.baseUrl + '/webapi/saveAppError', {
                method: 'POST',
                body: JSON.stringify({
                    "token": (!(parseData == null)) ? (parseData.token) : 'NotLoggedIn',
                    "error": (errorAddOn ? errorAddOn : 'unableToGetError'),
                    "request_type": (PlatformType ? PlatformType : 'UnableToGetPlatform')
                })
            })
                .then((response) => response.json())
                //.then((json) => console.log('API CATCH', json))
                .catch((error) => console.error('API CATCH', error))
        }
    }).catch((error)=>console.log('APICatch - Asyncstorage',error))
};

export default ApiCatch;