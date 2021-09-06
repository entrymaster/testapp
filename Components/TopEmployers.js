import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import HeadingsForSection from './HeadingsForSection';
import { useNavigation } from '@react-navigation/native';

const TopEmplyoers = ({ props, route }) => {
    const navigation = useNavigation();
    const [emplyoer, setEmplyoer] = useState()

    useEffect(() => {
        emplyoerSearchApi()

    }, []);

    const mysearch = "job" /* route.params.mysearch  */
    //console.log(mysearch)
    const emplyoerSearchApi = () => {
        // setLoading(true)
        fetch(global.baseURL + '/api/apiTimes/GetCompany', {
            method: 'POST',
            timeout: 10000,
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json',
                Authorization: 'Token 77927b69bb144b065ca11bf2a9d452819cd852db'
            },
            body: JSON.stringify(
                {
                    "company": "top"

                }


            )
        })
            .then((response) => response.json())

            .then((result) => {
                // console.log(result.data)   

                setEmplyoer(result.data)

            })
            //   .finally(() => setLoading(false))

            .catch((error) => console.log(error))
    }
    // const DATA = [
    //     {
    //         id: '1',
    //         image: require('../assets/25742.png'),
    //         companyID:"25742",
    //         imagePath:'../assets/25742.png',

    //     },
    //     {
    //         id: '2',
    //         image: require('../assets/29572.png'),
    //         companyID:"29572"
    //     },
    //     {
    //         id: '3',
    //         image: require('../assets/15977.png'),
    //         companyID:"29572"
    //     },
    //     {
    //         id: '4',
    //         image: require('../assets/32400.png'),
    //         companyID:"32400"

    //     },
    //     {
    //         id: '5',
    //         image: require('../assets/20599.png'),
    //         companyID:"20599"

    //     },
    //     {
    //         id: '6',
    //         image: require('../assets/10488.png'),
    //         companyID:"20599",
    //     },
    //     {
    //         id: '7',
    //         image: require('../assets/21109.png'),
    //         companyID:"21109",
    //     },
    //     {
    //         id: '8',
    //         image: require('../assets/23160.png'),
    //         companyID:"21109",
    //     },
    //     {
    //         id: '9',
    //         image: require('../assets/19802.png'),
    //         companyID:"19802",

    //     },
    //     {
    //         id: '10',
    //         image: require('../assets/11209.png'),
    //         companyID:"11209",
    //     },
    //     {
    //         id: '11',
    //         image: require('../assets/15977.png'),
    //         companyID:"15977",

    //     },
    //     {
    //         id: '12',
    //         image: require('../assets/21899.png'),
    //         companyID:"21899",

    //     },
    //     {
    //         id: '13',
    //         image: require('../assets/15795.png'),
    //         companyID:"10790",
    //     },
    //     {
    //         id: '14',
    //         image: require('../assets/32035.png'),
    //         companyID:"32035",
    //     },
    //     {
    //         id: '15',
    //         image: require('../assets/21543.png'),
    //         companyID:"21543",


    //     },
    // ];

    return (
        <View style={styles.container}>
            <HeadingsForSection title="TOP EMPLOYERS" />

            <View style={styles.BorderView}>
                <FlatList
                    data={emplyoer}
                    contentContainerStyle={styles.flatList}
                    keyExtractor={item => item.keyIndex}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <View style={styles.FlatList}>
                            {/* {console.log("https://timesascent.com"+item.imagePath)} */}
                            <TouchableOpacity onPress={() => navigation.navigate('CompanyProfilePage', { companyId: item.companyId })}>
                                <Image source={{ uri: "https://timesascent.com" + item.imagePath }} style={styles.Images} />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //padding: 16
    },
    Images: {
        width: 85,
        height: 85,
        resizeMode: 'contain',
    },
    FlatList: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10
    },
    TextView: {
        marginTop: 30
    },
    TextStyle: {
        position: 'absolute',
        right: 1,
        bottom: 10,
        color: 'red',
        fontSize: 14,
        fontWeight: "bold"
    },
    BorderView: {
        //borderTopWidth: 3,
        //borderTopColor: 'grey',
        marginTop: 12,
        marginBottom: 20
        //borderBottomWidth: 2,
        //borderBottomColor: 'grey'
    },
    TextHeading: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'red'
    }
})

export default TopEmplyoers