import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import HeadingsForSection from './HeadingsForSection'

const RecruitmentConsultants = () => {

    const DATA = [
        {
            id: 1,
            image: require("../assets/Recruitment4.jpg"),
        },
        {
            id: 2,
            image: require("../assets/Recruitment3.jpg"),
        },
        {
            id: 3,
            image: require("../assets/Recruitment2.jpg"),
        },
        {
            id: 4,
            image: require("../assets/Recruitment1.jpg"),
        }

    ]
    return (
        <View style={styles.mainView}>
            <FlatList
                data={DATA}
                contentContainerStyle={{ alignItems: 'center', padding: 10 }}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.imageView}>
                        <Image
                            source={item.image}
                            style={styles.image}
                        />
                    </View>
                )}
            />

            {/* <View style={styles.buttonView}> */}
            <TouchableOpacity>
                <Text style={styles.event_ViewText}>View More</Text>
            </TouchableOpacity>
            <View style={styles.event_ViewMore}></View>
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({

    mainView: {
        backgroundColor: '#fff',
        flex: 1
    },
    imageView: {
        padding: 2
    },
    image: {
        width: 180,
        height: 100,
    },
    event_ViewMore: {
        borderBottomWidth: 2,
        width: '100%',
        alignSelf: 'center',
        borderColor: '#c2c2c2'
    },
    event_ViewText: {
        paddingBottom: 8,
        alignSelf: 'flex-end',
        color: '#f0333c'
    },
});

export default RecruitmentConsultants
