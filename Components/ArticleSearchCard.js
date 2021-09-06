import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View, StyleSheet, Text, ImageBackground, FlatList } from 'react-native'
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ImageOrVideo from './ImageOrVideo';

const ArticleSearchCard = props => {

    //console.log(props.aritcleSearchData)
    const navigation = useNavigation();
    const articleSwitch = (type) => {
        switch (type) {
            case "ListView":
                return (
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={props.aritcleSearchData}
                            keyExtractor={item => item.keyIndex}
                            renderItem={({ item }) => (
                                <View style={styles.searchCard}>
                                    <View style={styles.imageAndTitle}>
                                        <Image style={styles.imageArea} source={{ uri: "https://timesascent.com" + item.primeThumb }} />
                                        {/*  <ImageOrVideo video={item.videoLink} image={item.primeThumb}/> */}
                                        <View style={{ width: '70%', marginHorizontal: 10 }}>
                                            <TouchableOpacity onPress={() => { navigation.navigate('ArticleDetail', { articleID: item.ArticleId }) }}>
                                                <Text style={styles.title}>{item.title} </Text>
                                            </TouchableOpacity>
                                            <View style={{ flexDirection: 'row', alignContent: 'center' }}>

                                                <Image style={{ height: 30, width: 80, resizeMode: 'contain' }} source={require('../assets/times_ascent_black_logo.png')} />
                                                <Text style={styles.datePost}>{item.updatedDate} </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <Divider />
                                </View>

                            )} />

                    </View>
                );
                break;

            case "MainView":
                return (
                    <View style={styles.searchCard}>

                        <ImageBackground source={{ uri: "https://timesascent.com" + props.aritcleSearchData.imagePath }} style={styles.articlBG}>
                            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('ArticleDetail', { articleID: props.aritcleSearchData.ArticleId }) }}>
                                    <Text style={styles.mainContent}>{props.aritcleSearchData.title}</Text>
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                );
                break;


        }
    };

    return (
        <View>

            {articleSwitch(props.searchCardType)}
        </View>
    );
};

const styles = StyleSheet.create({
    searchCard: {

        margin: 7,

    },

    imageAndTitle: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    imageArea: {
        height: 60,
        width: 100,

        marginLeft: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '98%'
    },
    articlBG: {
        height: 200,
        width: "100%"
    },
    mainContent: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10

    },
    datePost: {
        marginTop: 5,
        color: 'grey',
        fontSize: 12,
        marginLeft: 20
    }


});
export default ArticleSearchCard;