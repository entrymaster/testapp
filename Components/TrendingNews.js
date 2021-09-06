import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, Text, View, FlatList, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HeadingsForSection from './HeadingsForSection'

const Tab = createMaterialTopTabNavigator();

const DateFormatter = (value) => {
    let date = value.split('T')[0].split('-');
    switch (date[1]) {
        case '01':
            return date[2] + ' January ' + date[0];
        case '02':
            return date[2] + ' February ' + date[0];
        case '03':
            return date[2] + ' March ' + date[0];
        case '04':
            return date[2] + ' April ' + date[0];
        case '05':
            return date[2] + ' May ' + date[0];
        case '06':
            return date[2] + ' June ' + date[0];
        case '07':
            return date[2] + ' July ' + date[0];
        case '08':
            return date[2] + ' August ' + date[0];
        case '09':
            return date[2] + ' September ' + date[0];
        case '10':
            return date[2] + ' October ' + date[0];
        case '11':
            return date[2] + ' November ' + date[0];
        case '12':
            return date[0] + ' December ' + date[0];

        default:
            break;
    }

}


const World = () => {

    const [news, setNews] = useState('');

    const keyWord = 'Career in IT'

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?' + 'qInTitle=' + keyWord, {
            method: 'GET',
            headers: {
                'x-api-key': '039dbafbe6ac4d06a5b615b8ce0afd14',
            },
        })
            .then((response) => response.json())
            // .then((json) => console.log(json))
            .then((json) => {
                if (json.status === 'ok') {
                    setNews(json.articles.slice(0, 4))
                }
            })

    }, [])


    return (
        <View style={styles.articleContainer}>
            <FlatList
                data={news}
                keyExtractor={item => item.url}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={styles.articleImage}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.articleTitle} numberOfLines={2} >
                                {item.title}
                            </Text>
                            <Text style={styles.articleDisc} numberOfLines={2} >
                                {item.description}
                            </Text>
                            <Text style={styles.articleSource}>
                                {'Source: ' + item.source.name}
                            </Text>
                            <Text style={styles.articleDate}>
                                {DateFormatter(item.publishedAt)}
                            </Text>
                            <View style={styles.horizontalLineNews} />
                        </View>
                    </View>
                )}
            />
            {/* <TouchableOpacity>
                <Text style={styles.bottomText}>View More</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const Companies = () => {

    const [news, setNews] = useState('');

    const keyWord = 'Engineering Jobs'

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?' + 'qInTitle=' + keyWord, {
            method: 'GET',
            headers: {
                'x-api-key': '039dbafbe6ac4d06a5b615b8ce0afd14',
            },
        })
            .then((response) => response.json())
            // .then((json) => console.log(json))
            .then((json) => {
                if (json.status === 'ok') {
                    setNews(json.articles.slice(0, 4))
                }
            })

    }, [])


    return (
        <View style={styles.articleContainer}>
            <FlatList
                data={news}
                keyExtractor={item => item.url}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={styles.articleImage}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.articleTitle} numberOfLines={2} >
                                {item.title}
                            </Text>
                            <Text style={styles.articleDisc} numberOfLines={2} >
                                {item.description}
                            </Text>
                            <Text style={styles.articleSource}>
                                {'Source: ' + item.source.name}
                            </Text>
                            <Text style={styles.articleDate}>
                                {DateFormatter(item.publishedAt)}
                            </Text>
                            <View style={styles.horizontalLineNews} />
                        </View>
                    </View>
                )}
            />
            {/* <TouchableOpacity>
                <Text style={styles.bottomText}>View More</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const Education = () => {

    const [news, setNews] = useState('');

    const keyWord = 'Marketing'

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?' + 'qInTitle=' + keyWord, {
            method: 'GET',
            headers: {
                'x-api-key': '039dbafbe6ac4d06a5b615b8ce0afd14',
            },
        })
            .then((response) => response.json())
            // .then((json) => console.log(json))
            .then((json) => {
                if (json.status === 'ok') {
                    setNews(json.articles.slice(0, 4))
                }
            })

    }, [])


    return (
        <View style={styles.articleContainer}>
            <FlatList
                data={news}
                keyExtractor={item => item.url}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={styles.articleImage}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.articleTitle} numberOfLines={2} >
                                {item.title}
                            </Text>
                            <Text style={styles.articleDisc} numberOfLines={2}  >
                                {item.description}
                            </Text>
                            <Text style={styles.articleSource}>
                                {'Source: ' + item.source.name}
                            </Text>
                            <Text style={styles.articleDate}>
                                {DateFormatter(item.publishedAt)}
                            </Text>
                            <View style={styles.horizontalLineNews} />
                        </View>
                    </View>
                )}
            />
            {/* <TouchableOpacity>
                <Text style={styles.bottomText}>View More</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const Jobs = () => {

    const [news, setNews] = useState('');

    const keyWord = 'Cybersecurity in India'

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?' + 'qInTitle=' + keyWord, {
            method: 'GET',
            headers: {
                'x-api-key': '039dbafbe6ac4d06a5b615b8ce0afd14',
            },
        })
            .then((response) => response.json())
            // .then((json) => console.log(json))
            .then((json) => {
                if (json.status === 'ok') {
                    setNews(json.articles.slice(0, 4))
                }
            })

    }, [])


    return (
        <View style={styles.articleContainer}>
            <FlatList
                data={news}
                keyExtractor={item => item.url}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={styles.articleImage}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.articleTitle} numberOfLines={2} >
                                {item.title}
                            </Text>
                            <Text style={styles.articleDisc} numberOfLines={2}>
                                {item.description}
                            </Text>
                            <Text style={styles.articleSource}>
                                {'Source: ' + item.source.name}
                            </Text>
                            <Text style={styles.articleDate}>
                                {DateFormatter(item.publishedAt)}
                            </Text>
                            <View style={styles.horizontalLineNews} />
                        </View>
                    </View>
                )}
            />
            {/* <TouchableOpacity>
                <Text style={styles.bottomText}>View More</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const TrendingNews = () => {
    return (
        <View style={styles.mainContainer}>
            <HeadingsForSection title={"TRENDING NEWS"} />
            <Tab.Navigator
                tabBarOptions={{
                    tabStyle: styles.tabStyle,
                    labelStyle: styles.labelStyle,
                    indicatorStyle: styles.indicatorStyle,

                }}
            >
                <Tab.Screen
                    name="World"
                    component={World}

                />
                <Tab.Screen
                    name="Companies"
                    component={Companies}

                />
                <Tab.Screen
                    name="Education"
                    component={Education}

                />
                <Tab.Screen
                    name="Jobs"
                    component={Jobs}
                />
            </Tab.Navigator>

            <View style={styles.bottomLine} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        //paddingHorizontal: 20,
        backgroundColor: "#FFFFFF",
        //marginBottom: 85
    },
    titleText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#F02F39",
        marginBottom: 10,
    },
    horizontalLine: {
        borderBottomColor: "#BFBFBF",
        borderBottomWidth: 2,
        marginVertical: 10,
    },
    horizontalLineNews: {
        borderBottomColor: "#BFBFBF",
        borderBottomWidth: 2,
        marginTop: 5,
    },
    tabContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    tabStyle: {
        height: 40,

    },
    labelStyle: {
        fontSize: 14,
        fontWeight: "bold",
        textTransform: 'none',
        height: '100%',
        margin: 0,
        width: '100%',
    },
    indicatorStyle: {
        backgroundColor: "#F02F39",
    },
    articleContainer: {
        backgroundColor: "#fff",
        flex: 1
    },
    itemContainer: {
        flexDirection: "row",
        paddingTop: 20,
    },
    articleImage: {
        alignSelf: 'center',
        width: 155,
        height: 110,
    },
    textContainer: {
        marginTop: 10,
        marginLeft: 15,
        flex: 1,
        justifyContent: "space-between",
    },
    articleTitle: {
        fontSize: 13,
        fontWeight: "bold",
    },
    articleDisc: {
        color: "#A2A2A2",
        fontSize: 10,
    },
    articleSource: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#000000",
    },
    articleDate: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#000000",
    },
    bottomText: {
        color: '#F02F39',
        fontSize: 12,
        alignSelf: 'flex-end',
        marginTop: 20
    },
    bottomLine: {
        borderBottomColor: "#BFBFBF",
        borderBottomWidth: 2,
        marginTop: 10,
    }
});

export default TrendingNews;