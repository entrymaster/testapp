import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HeadingsForSection from './HeadingsForSection';

const Tab = createMaterialTopTabNavigator();
const displayData = [
    {
        id: '1',
        city: 'Mumbai',
        image: require("../assets/gateway-of-india.png"),
    },
    {
        id: '2',
        city: 'Delhi',
        image: require("../assets/g5.png"),
    },
    {
        id: '3',
        city: 'Bangalore',
        image: require("../assets/gateway-of-india-119678.png"),
    },
    {
        id: '4',
        city: 'Hyderabad',
        image: require("../assets/charminar-119682.png"),
    },
    {
        id: '5',
        city: 'Chennai',
        image: require("../assets/path592.png"),
    },
    {
        id: '6',
        city: 'Lucknow',
        image: require("../assets/bara-imambara-119683.png"),
    },
    {
        id: '7',
        city: 'Agra',
        image: require("../assets/taj-mahal.png"),
    },
    {
        id: '8',
        city: 'Jaipur',
        image: require("../assets/hawa-mahal-119686.png"),
    },
    {
        id: '9',
        city: 'Kolkata',
        image: require("../assets/victoria-memorial.png"),
    },
    {
        id: '10',
        city: 'Pune',
        image: require("../assets/path47.png"),
    },

];

const ViewItems = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={displayData}
                numColumns={5}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <View style={styles.itemContainer}>
                        <TouchableOpacity>

                            <Image
                                source={item.image}
                                style={styles.image}
                                resizeMode='contain'
                            />
                            <Text style={styles.imageText}>
                                {item.city}
                            </Text>
                        </TouchableOpacity>
                    </View>

                )}
            />
        </View>
    )
}

const JobSkills = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={displayData}
                numColumns={5}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <View style={styles.itemContainer}>
                        <TouchableOpacity>

                            <Image
                                source={item.image}
                                style={styles.image}
                                resizeMode='contain'
                            />
                            <Text style={styles.imageText}>
                                {item.city}
                            </Text>
                        </TouchableOpacity>
                    </View>

                )}
            />
        </View>
    )
}

const JobIndustry = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={displayData}
                numColumns={5}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <View style={styles.itemContainer}>
                        <TouchableOpacity>

                            <Image
                                source={item.image}
                                style={styles.image}
                                resizeMode='contain'
                            />
                            <Text style={styles.imageText}>
                                {item.city}
                            </Text>
                        </TouchableOpacity>
                    </View>

                )}
            />
        </View>
    )
}

const JobTabs = () => {
    return (
        <View style={styles.mainContainer}>
          <HeadingsForSection title="SEARCH JOBS"/>

            <Tab.Navigator
                tabBarOptions={{
                    tabStyle: styles.tabStyle,
                    labelStyle: styles.labelStyle,
                    indicatorStyle: styles.indicatorStyle
                }}
            >
                <Tab.Screen
                    name="Location"
                    component={ViewItems}
                    options={{ tabBarLabel: 'Jobs by Location' }}
                />
                <Tab.Screen
                    name="Skills"
                    component={JobSkills}
                    options={{ tabBarLabel: 'Jobs by Skills' }}
                />
                <Tab.Screen
                    name="Industry"
                    component={JobIndustry}
                    options={{ tabBarLabel: 'Jobs by Industry' }}
                />
            </Tab.Navigator>

            <View style={styles.bottomLine} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        //height: 410,
        //padding:10,
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    tabContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    tabStyle: {
        height: 40,
    },
    labelStyle: {
        fontSize: 13,
        fontWeight: "bold",
        textTransform: 'none',
        height: '100%',
        margin: 0,
        width: '100%',
    },
    indicatorStyle: {
        backgroundColor: "#F02F39",
    },
    bottomText: {
        color: '#F02F39',
        fontSize: 12,
        alignSelf: 'flex-end',
        marginTop: 20
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40
    },
    image: {
        height: 50
    },
    imageText: {
        fontSize: 12,
        textAlign: 'center'
    },
    bottomLine: {
        borderBottomColor: "#BFBFBF",
        borderBottomWidth: 2,
        paddingTop: 18
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})

export default JobTabs;