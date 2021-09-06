

import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';

const HeadingsForSection = props => {
    return (
        <View style={styles.headingLayout}>
            <Text style={styles.headings}>{props.title}</Text>
            {props.bottomText && <Text style={styles.bottomText}>{props.bottomText}</Text>}
            <Divider style={styles.dividerStyle}/>
        </View>

    );
};

const styles = StyleSheet.create({
    headings: {
        color: "#F02F39",
        fontWeight: "700",
       // padding:10,
        
      },
      headingLayout:{
          marginVertical:10
      },
      dividerStyle: {
        borderBottomWidth: 2,
        borderBottomColor: "#F02F39",
        padding: 5,
        width:'90%',
        //marginHorizontal:5
        
      },
      bottomText:{
        marginVertical:10
        
        },
    
});
export default HeadingsForSection;
