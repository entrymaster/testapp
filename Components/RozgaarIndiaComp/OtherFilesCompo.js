import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const OthersCompo = props => {

    const navigation = useNavigation();
    const file_url = props.file_url;
    const file_height = props.height;
    const file_width = props.width;
    const file_padding = props.padding;
    const file_justifyAlign = props.justifyAlign;
    const file_margin = props.margin;
    const file_resize = props.resize;

    return (
        <Image
            PlaceholderContent={<ActivityIndicator />}
            source={require('../../assets/FileOthers.png')}
            style={{ width: file_width, height: file_height, resizeMode: file_resize, padding: file_padding, justifyContent: file_justifyAlign, margin: file_margin }}
        />
    );
};

const styles = StyleSheet.create({
});

export default OthersCompo;