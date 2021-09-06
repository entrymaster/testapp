import React from 'react'
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'

const CXOArticles = () => {
    const DATA =[
        {
            id : 1,
            img : require('../assets/CXOArticles.png'),
            heading : 'Job seekers turn down relocation offers',
            text : 'The second Covid wave is leading some job seekers to develop cold feet to join',

        },
        {
            id : 2,
            img : require('../assets/CXOArticles.png'),
            heading : 'Job seekers turn down relocation offers',
            text : 'The second Covid wave is leading some job seekers to develop cold feet to join',

        },
        {
            id : 3,
            img : require('../assets/CXOArticles.png'),
            heading : 'Job seekers turn down relocation offers',
            text : 'The second Covid wave is leading some job seekers to develop cold feet to join',

        },
        {
            id : 4,
            img : require('../assets/CXOArticles.png'),
            heading : 'Job seekers turn down relocation offers',
            text : 'The second Covid wave is leading some job seekers to develop cold feet to join',

        },
    ]
    return (
        <View >
             <View style = {styles.articleView}>
                 <View style ={styles.articleTextView}>
               <Text style = {styles.articleText}>CXO Article</Text>
               <Text style = {styles.articleText2}>For professionals who{'\n'}hold responsibilities</Text>
               </View>
             </View>
            <FlatList
                data = {DATA}
                horizontal
                keyExtractor = {item => item.id}
                renderItem = {({item,index}) =>
                <View style = {styles.flatListView}>
                    <Image source ={item.img} style ={styles.flatlistImg}/>
                    <View style = {styles.headingView}>
                    <Text style={styles.text1}>{item.heading}</Text>
                    <Text style={styles.text2}>{item.text}</Text>
                    </View>
                  
                </View>
                }
            />
            <View style ={styles.bottomView}>
            <TouchableOpacity >
                <Text style = {styles.viewAllText}>View all locations</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    articleView:{
     width : '100%',
     height : 140,
     backgroundColor : '#5E5F64',
     marginBottom : 15,
     marginTop : 30
    },
    articleTextView:{
      marginHorizontal : 14,
    },
    articleText  : {
        fontWeight  : 'bold',
        color : '#fff',
        fontSize : 20,
        // paddingVertical : 18
        marginTop : 20
    },
    articleText2:{
     color : '#fff',
     fontSize : 16,
     marginTop : 10
    },
    flatListView :{
        width : 300,
        height : 318,
        borderRadius : 20,
        backgroundColor: "#fff",
     shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5,
       margin : 8,
      elevation: 5,
    },
     headingView : {
        height : 100,
        padding : 12
    },
    text1:{
     fontWeight : 'bold',
     fontSize : 19,
     marginBottom : 8
    },
    flatlistImg:{
        height : 200,
        width : 300,
        resizeMode : 'stretch'
    },
    text2:{
        fontSize :15,
        color : '#A2A2A2'
    },
    bottomView:{
     marginTop : 25,
     alignItems : 'center',
     borderBottomWidth : 2,
     borderBottomColor : '#BFBFBF',
     paddingBottom : 15,
     width : '100%',
     alignSelf : 'center'

    },
    viewAllText:{
        color : '#F02F39',
        fontWeight : 'bold'
    }

})

export default CXOArticles
