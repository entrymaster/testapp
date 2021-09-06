import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ShowMore = props => {
    return (
        <View style={{ alignItems: 'center', }}>
            <View style={styles.aroorwContainer}>
                <AntDesign name="arrowright" size={25} color="blue" />
            </View>
            <Text>View More </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    aroorwContainer: {
        shadowColor: 'grey',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 50,
        backgroundColor: 'white',
        height: 70,
        width: 70,
        margin: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
});
export default ShowMore