import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import HeadingsForSection from './HeadingsForSection';

const TrendingQuestion = () => {

    const [showTab, setShowTab] = useState(false);
    const [displayItems, setDisplayItems] = useState([]);

    const DATA = [
        {
            id: '1',
            answer: 'The ideal profession or employment is one in which you can put your abilities to good use.. Keep an open mind and use every job as an opportunity to learn something new.',
            icon: 'pluscircleo',
            text: 'Best Advice to people to grow in their careers.'
        },
        {
            id: '2',
            answer: 'Being goal-oriented is an important personal trait that may lead to positive job outcomes. If in your current goal you are satisfied and happy at your current place and feel motivated, this adds up to your goals and you being focussed. ',
            icon: 'pluscircleo',
            text: 'How can I know whether I focused on the appropriate goals?'
        },
        {
            id: '3',
            answer: 'While other skills can be developed overtime but the skill of self awareness is the most challenging one to be developed and is one kind that help in your personal growth in future as well.',
            icon: 'pluscircleo',
            text: 'Which Leadership skills are the most difficult to develop'
        },
        {
            id: '4',
            answer: 'A person’s strength serves as a  gauge for self satisfaction. Major strengths include your personal traits that involve self awareness and confidence. To know your major strengths look upon to one self and be confident about it while mentioning it to others.',
            icon: 'pluscircleo',
            text: 'what are my major strengths?'
        },
        {
            id: '5',
            answer: 'A SWOT Analysis is a tool for documenting one’s (S)trenghts,(W)eakness,(O)pportunities and (T)hreats . Its purpose is to study internal and external environment of an individual. Its an effective way of identifying one’s areas of improvement. This will further help you achieve your goals. ',
            icon: 'pluscircleo',
            text: 'If to discuss about SWOT Analysis what would that be'
        },
        {
            id: '6',
            answer: 'Feeling nervous about a situation at any point is a normal phenomenon. Managing this nervousness is not a bit of task. Always remember that is  normal and further be prepared of handling it in a positive way, talking it out with someone and further even one can try some relaxation technique to eradicate it out completely .',
            icon: 'pluscircleo',
            text: 'What practises do you recommend for dealing with nervousness and other difficult situations?'
        },
        {
            id: '7',
            answer: 'Enhancement of skills is a reward for personal and professional growth. Skill of being innovative at every point, Taking the first mover advantage, Focussing on USPs, Skilled with IOT, and Management skiils.  ',
            icon: 'pluscircleo',
            text: 'What are the new skills that one need to outgrow'
        },
        {
            id: '8',
            answer: 'Knowing how to deal with people is an important aspect of being successful in any profession, whether you are the CEO, an intern, or a new manager. People management skills, which include monitoring and developing your direct subordinates and supporting achievement, may be developed.',
            icon: 'pluscircleo',
            text: 'How can I be better at managing people at different situations?'
        },
        {
            id: '9',
            answer: 'Effective Communication is the key to convey innovations and concepts.  Its because of communication that differs from one another. Effective communication involves inform, guide, activate and improve. Working on these stages will lead to effective communication thus leading to conveying the ideas and innovations further. ',
            icon: 'pluscircleo',
            text: 'How can I communicate my idea and other innovations more clearly ?'
        },
        {
            id: '10',
            answer: 'Finding the proper path in life is an existential dilemma that we all encounter at some point in our lives. Feeling comfortable, acknowledge, content and stop being negative or even stop chasing unrealistic people in life are some steps of being at the right path in life on both fronts. ',
            icon: 'pluscircleo',
            text: 'Am I at the right path of my life in personal and professional front?'
        },
        {
            id: '11',
            answer: 'Moving forward in a profession does not always happen in a straight line. It is possible that you will feel like you are travelling backwards or that you are standing still at times. Some steps that would help in handling setbacks are keeping a  positive attitude, being responsible, accepting criticism and connecting with others will always help a lot is overcoming setbacks in the best possible way',
            icon: 'pluscircleo',
            text: 'How to handle setbacks in personal and professional growth'
        },
    ];

    const handleDisplayList = (index, operation) => {
        // console.log(index);
        let temp = [...displayItems];
        switch (operation) {
            case 'add':
                temp.push(index);
                setDisplayItems(temp);
                break;
            case 'delete':
                const removeIndex = displayItems.findIndex((item) => item.id == index);
                temp.splice(removeIndex, 1);
                setDisplayItems([...temp]);
                break;
            default:
                break;
        }

    }

    const changeView = (key) => {

        if (showTab) {
          setShowTab(false)
        }
        else {
          setShowTab(true)
        }
    
    
    
    
    
      }

    return (
        <View style={styles.maincontainer}>
            <View style={styles.item_Container}><Text style={styles.TextHeading}>Refine your Resume</Text></View>
            <ScrollView style={styles.FlatList_container} showsVerticalScrollIndicator={false}>
                <FlatList
                    data={DATA}
                    contentContainerStyle={styles.flatList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.FlatList}>
                            {displayItems.indexOf(item.id) == -1 ?
                                (<TouchableOpacity onPress={() => handleDisplayList(item.id, 'add')}>
                                    <View style={styles.IconView}>
                                        <AntDesign name={item.icon} size={16} color="#000" style={styles.plusIcon} />
                                        <Text style={styles.TextFlatlist}>{item.text}</Text>
                                    </View>
                                </TouchableOpacity>)
                                :
                                (<TouchableOpacity onPress={() => handleDisplayList(item.id, 'delete')}>
                                    <View style={styles.IconView}>
                                        <AntDesign name="minuscircleo" size={16} color="black" style={styles.plusIcon} />
                                        <Text style={styles.TextFlatlist}>{item.text}</Text>
                                    </View>
                                </TouchableOpacity>)
                            }
                            <TouchableOpacity onPress={() => changeView(item.id)}>

                            </TouchableOpacity>
                            {displayItems.indexOf(item.id) != -1 &&
                                <Text style={styles.answer}>{item.answer} </Text>}
                        </View>
                    )}
                />
            </ScrollView>
            <View>
                <TouchableOpacity>
                    <Text style={styles.event_ViewText}>View More</Text>
                </TouchableOpacity>
                <View style={styles.event_ViewMore}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#fff',
        //paddingTop: 25
    },
    event_Container: {
        padding: 15
    },
    event_Heading: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#f0333c'
    },
    event_itemContainer: {
        borderTopWidth: 2,
        borderColor: '#c2c2c2',
        padding: 14,
        width: '92%',
        alignSelf: 'center'
    },
    item_Container: {
        borderBottomWidth: 2,
        width: '100%',
        alignSelf: 'center',
        paddingVertical: 5
    },
    TextHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingVertical: 5
    },
    FlatList: {
        flex: 1,
        borderBottomWidth: 1,
        width: '100%',
        alignSelf: 'center',
        paddingBottom: 18,
        justifyContent: 'center',
        paddingVertical: 18
    },
    IconView: {
        flexDirection: 'row'
    },
    plusIcon: {
        alignSelf: 'center'
    },
    TextView: {
        marginTop: 10
    },
    TextStyle: {
        right: 1,
        bottom: 10,
        color: 'red',
        fontSize: 14,
        fontWeight: "bold",
        alignSelf: 'flex-end'
    },
    BorderView: {
        borderTopWidth: 3,
        borderTopColor: 'grey',
        marginTop: 12,
        borderBottomWidth: 2,
        borderBottomColor: 'grey'
    },
    TextFlatlist: {
        paddingHorizontal: 8,
        fontSize: 14
    },
    event_ViewText: {
        paddingTop: 20,
        paddingBottom: 8,
        alignSelf: 'flex-end',
        color: '#f0333c'
    },
    event_ViewMore: {
        borderBottomWidth: 2,
        width: '100%',
        alignSelf: 'center',
        borderColor: '#c2c2c2'
    },
    answer: {
        color: 'grey',
        padding: 5
      },
})

export default TrendingQuestion


