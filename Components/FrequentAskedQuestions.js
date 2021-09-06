import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { AntDesign } from "@expo/vector-icons";

const FrequentAskedQuestions = (props) => {

  const [questionPressed, setQuestionPressed] = useState();
  const [questionPressedKey, setQuestionPressedKey] = useState();
  const [showTab, setShowTab] = useState(false);
  const [displayItems, setDisplayItems] = useState([]);

  //console.log(showTab)
  const faq = [
    {
      keyIndex: '1',
      question: 'What information should i include ?',
      answer: 'What information should i include, What information should i include ',
      mainHead: 'Refine your Resume'
    },
    {
      keyIndex: '2',
      question: 'How long my resume be ?',
      answer: 'What information should i include, What information should i include ',
      mainHead: null
    },
    {
      keyIndex: '3',
      question: 'How long my resume be ?',
      answer: 'What information should i include, What information should i include ',
      mainHead: 'Find your career fit'
    },
    {
      keyIndex: '5',
      question: 'How long my resume be ?',
      answer: 'What information should i include, What information should i include ',
      mainHead: null
    }


  ];

  const changeView = (key) => {

    if (showTab) {
      setShowTab(false)
    }
    else {
      setShowTab(true)
    }
  }

  const handleDisplayList = (index, operation) => {
    // console.log(index);
    let temp = [...displayItems];
    switch (operation) {
      case 'add':
        temp.push(index);
        setDisplayItems(temp);
        break;
      case 'delete':
        const removeIndex = displayItems.findIndex((item) => item.keyIndex == index);
        temp.splice(removeIndex, 1);
        setDisplayItems([...temp]);
        break;
      default:
        break;
    }

  }

  return (
    <View style={styles.pageView}>
      <Text style={styles.heading}> Frequently Asked Question </Text>
      <FlatList
        data={faq}
        keyExtractor={item => item.keyIndex}
        renderItem={({ item }) => (
          <View>
            {item.mainHead &&
              <Text style={styles.questionsHead}> {item.mainHead} </Text>
            }

            {displayItems.indexOf(item.keyIndex) == -1 ?
              (<TouchableOpacity onPress={() => handleDisplayList(item.keyIndex, 'add')}>
                <View style={styles.questionView}>
                  <AntDesign name="pluscircleo" size={24} color="black" style={{ marginRight: 10 }} />
                  <Text style={styles.question}> {item.question} </Text>
                </View>
              </TouchableOpacity>)
              :
              (<TouchableOpacity onPress={() => handleDisplayList(item.keyIndex, 'delete')}>
                <View style={styles.questionView}>
                  <AntDesign name="minuscircleo" size={24} color="black" style={{ marginRight: 10 }} />
                  <Text style={styles.question}> {item.question} </Text>
                </View>
              </TouchableOpacity>)
            }
            <TouchableOpacity onPress={() => changeView(item.keyIndex)}>

            </TouchableOpacity>
            {displayItems.indexOf(item.keyIndex) != -1 &&
              <Text style={styles.answer}>{item.answer} </Text>}
            <Divider style={styles.dividerStyle} />
          </View>
        )} />

    </View>
  );
};

const styles = StyleSheet.create({
  pageView: {
    paddingVertical: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F02F39",
    //padding: 10,
  },
  questionsHead: {
    fontWeight: "bold",
    paddingTop: 10,
    fontSize: 16

  },
  questionView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,

  },
  dividerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: "#e1e8ee",
    padding: 5,
  },
  answer: {
    color: 'grey',
    padding: 5
  },
  question: {
    fontSize: 16
  }
});
export default FrequentAskedQuestions;
