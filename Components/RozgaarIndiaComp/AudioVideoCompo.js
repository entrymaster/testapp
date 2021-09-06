import React from 'react';
import { StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const AudioVideoCompo = props => {

    const navigation = useNavigation();
    const file_url = props.file_url;
    const file_height = props.height;
    const file_width = props.width;
    const file_padding = props.padding;
    const file_justifyAlign = props.justifyAlign;
    const file_margin = props.margin;
    const file_resize = props.resize;

    return (
        <Video
            source={{ uri: file_url }}
            rate={1.0}
            volume={1.0}
            isPlaying={true}
            isBuffering={true}
            isMuted={false}
            resizeMode={'contain'}
            useNativeControls
            style={{ width: file_width, height: file_height, padding: file_padding, justifyContent: file_justifyAlign, margin: file_margin, backgroundColor: 'black' }}
        />

    );

};

const styles = StyleSheet.create({
});

export default AudioVideoCompo;