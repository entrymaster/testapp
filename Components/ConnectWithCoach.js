import React from 'react'
import { TouchableOpacity } from 'react-native'


import { View, Text ,Image,StyleSheet,FlatList } from 'react-native'

const ConnectWithCoach = () => {

    const DATA = [
        {
            id : 1,
            img : require('../assets/Sadhguru-pic.png'),
            name : 'Jagdish Vasudev'
        },
        {
            id : 2,
            img : require('../assets/Sadhguru-pic.png'),
            name : 'Jagdish Vasudev'
        },
        {
            id : 3,
            img : require('../assets/Sadhguru-pic.png'),
            name : 'Jagdish Vasudev'
        },
        {
            id : 4,
            img : require('../assets/Sadhguru-pic.png'),
            name : 'Jagdish Vasudev'
        }
    ]
    return (
        <View style = {{width :'100%'}}>
            <FlatList
            data ={DATA}
            horizontal
            keyExtractor = {item => item.id}
            renderItem = {({item, id}) =>
            <View style ={styles.renderView}>
                <Image source ={item.img} style= {styles.image}/>
                <Text style ={styles.nameText}>{item.name}</Text>
                <TouchableOpacity style={styles.connectButton}>
                    <Text style = {styles.buttonText}>
                        Connect
                    </Text>
                </TouchableOpacity>
            </View>
        }
            />
            <View style ={styles.bottomView}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    renderView:{
        width : 340,
        // marginHorizontal : 20
        
    },
    image : {
        borderRadius : 10,
        resizeMode : 'cover'
    },
    nameText :{ 
        // paddingTop  : 10,
        // paddingLeft : 17,
        // padding : 17,
        margin  : 12,
        fontWeight : 'bold',
        fontSize : 20,
        textAlign : 'center'

    },
    connectButton:{
        padding : 15,
        width : 250,
        alignSelf : 'center',
        alignItems : 'center',
        backgroundColor : '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10,
           margin : 8,
          elevation: 5,
          borderRadius : 10
    },
    buttonText:{
        color : 'red',
        fontWeight : 'bold',
        fontSize : 18
    },
    bottomView:{
        borderBottomWidth : 2,
        padding :13,
        borderBottomColor : '#BFBFBF'
    }

})
export default ConnectWithCoach
