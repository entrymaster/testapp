import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

const ProfilePic = props => {
    var str = props.mytext;
    var shape = props.shape
    if (str) {
        var res = str.slice(0, 1);
        var res = res.toUpperCase();
    }
    if (!props.profilepicture) {
        return (
            <View style={[styles.avatarView, { width: props.width, height: props.height }]}>
                <Text style={[styles.text, { fontSize: props.fontSize }]}>{res}</Text>
            </View>
        );
    }
    else {
        return (<Avatar size={props.size} source={{ uri: props.profilepicture }} avatarStyle={{  borderWidth: 0.3, borderColor: 'silver' }} />);
    }

};

const styles = StyleSheet.create({

    avatarView: {
        backgroundColor: 'silver',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
       // borderRadius: 20,
        borderWidth: 0.3,
        borderColor: 'silver'
    },
    text: {
        color: 'white',
        fontWeight: '600',
    },

});
export default ProfilePic;


