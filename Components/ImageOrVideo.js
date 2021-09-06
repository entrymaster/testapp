import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const ImageOrVideo = (props) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("Video has finished playing!");
    }
  }, []);
 
  const videoPlayer = () => {
    var splitUrl = props.video.split("/");

    const youtubeEmbedCode = splitUrl.slice(-1).pop();

    return (
      <View style={{ marginVertical: 10,}}>
        <YoutubePlayer
          height={200}
          // resizeMode = {contain}
          // contentScale = {0.8}
          webViewStyle={ {opacity:0.99} }
          play={playing}
          webViewStyle={ {opacity:0.99} }
          videoId={youtubeEmbedCode}
          onChangeState={() => onStateChange()}
        />
      </View>
    );
  };

 
  return (
    <View>
      {props.video ? (
        <View>{videoPlayer()}</View>
      ) : (
        <Image
          style={ {
            height: props.height ? props.height : 200,
            width:  props.width ? props.width : "100%",
            marginVertical: props.vmargin ? props.vmargin : 0 ,
            resizeMode: props.imgMode ? props.imgMode : "cover",
            borderTopLeftRadius:props.borderTopLeftRadius,
            borderTopRightRadius:props.borderTopRightRadius
          }}
          source={{ uri: "https://timesascent.com" + props.image }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  
});
export default ImageOrVideo;
