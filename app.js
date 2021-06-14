import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';


export default function App() {
  var temp = [];
  this.state = ({
    data:[]
  }); 
  let selectFiles = async () => {
      let result = await DocumentPicker.getDocumentAsync({multiple:true});
      arrayFiles.push(result.name);
      setFiles(arrayFiles);
		  alert(result.uri);
      console.log(result.name);
        

  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={selectFiles}
      style={{borderRadius:10, padding: 10, width: "80%", alignItems: "center", backgroundColor: "#ccc8be"}}>
      <Text>Select files to upload !</Text>
      </TouchableOpacity>
      <Text>{this.state.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
