import React from 'react'
import { View, Text, ImageBackground,StyleSheet,Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'

const ResumeCoverLetters = ({navigation}) => {
    const DATA =[
        {
            id : 1,
            image : require('../assets/office.jpg'),
            title : 'How to: Write a CV from  scratch',
            text : 'Writing a CV can be stressful task, especially if youʼre starting from scratch…',
        },
        {
            id : 2,
            image : require('../assets/Chef.jpg'),
            title : 'Hobbies and interests: Should I include them in my CV?',
            text : 'Whilst to some it may seem simple to list your education or work history, trying…',
        },
        {
            id : 3,
            image : require('../assets/CVExample.jpg'),
            title : 'CV examples and samples AND SAMPLES',
            text : 'Not only do you have to make sure that you get all your skills and experience...',
        }
    ]
    return (
        <View style = {styles.mainView}> 
            <ImageBackground source = {require('../assets/ResumeBack.png')} style = {styles.backImage}>
            <View style = {styles.imageContentView}>   
            <View style = {styles.textView} >
            <Text style = {styles.line1}>Resume & Cover Letters</Text>   
            <Text style = {styles.line2}>Enhance your</Text>
            <Text style = {styles.line3}>resume <Text style = {styles.to}>to</Text></Text>
            <Text style = {styles.line4}>impress recruiters</Text>
            </View>
            <Image source = {require('../assets/ResumeFront.png')} style = {styles.resumeImg}/>
            </View> 
            </ImageBackground>
            <View style = {{flex :1}}>
            <FlatList
             data = {DATA}
             keyExtractor = {(item)=> item.id}
             renderItem = {({item }) =>
             <View style = {styles.renderView}>
                 <Image source = {item.image} style = {styles.flatlistImg} />
                 <Text style = {styles.titleText}>{item.title}</Text>
                 <Text style = {styles.text}>{item.text}</Text>
             </View>
            }
            />
            <TouchableOpacity style = {styles.viewMoreButton}>
                <Text style = {styles.buttonText}>View More</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView :{
    flex : 1,

    },
  
    backImage:{
        resizeMode : 'cover',
        width : '100%',
        height :220,
        marginLeft : 3
    },
    textView :{
      marginTop : 22
    },
    imageContentView : {
        flexDirection : 'row',
        marginHorizontal : 15,
        justifyContent : 'space-between'
    },
    line1:{
      fontWeight :'bold',
      color : '#fff'
    },
    line2 :{
        marginTop : 8,
        fontSize : 22,
        color : '#fff'
    },
    line3:{
        fontSize : 18,
        color : '#fff',
        fontWeight :'bold',
    },
    to:{
        fontSize : 18,
        color : '#fff',
        fontWeight : 'normal'
    },
    line4 :{
        fontSize : 20,
        color : '#fff'
    },
    resumeImg : {
        resizeMode : 'stretch',
        height : 130
    },
    renderView :{
        
        alignSelf : "center",
        marginLeft : 6,
        marginTop : 30,
        width:  300,
        height: 200  

    },
    flatlistImg : {
    
        width : '100%',
        height : 120,
      
    },
    titleText : {
        fontWeight : 'bold',
        paddingTop : 5
    },
    viewMoreButton: {
        alignSelf : 'flex-end',
        //marginTop :50,
        //marginRight : 20
    },
    buttonText : {
        color : '#FF0000'
    }
 


    
})

export default ResumeCoverLetters
