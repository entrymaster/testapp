import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import HeaderMain from '../Components/HeaderMain'
import RozgaarHome from '../Components/RozgaarHome'
import SearchBarMain from '../Components/SearchBar'
import TascentMentorship from '../Components/TascentMentorship'
import TascentContributors from '../Components/TascentContributors'
import TascentMentorshipAbout from '../Components/TascentMentorshipAbout'
import RecruitmentConsultants from '../Components/RecruitmentConsultants'
import BecomeMentor from '../Components/BecomeMentor'
import TrendingQuestion from '../Components/TrendingQuestion'
import MentoringProgram from '../Components/MentoringProgram'
import UsefulTools from '../Components/UsefulTools'
import AdvertArea from '../Components/AdvertArea'
import Constants from 'expo-constants';
import Footer from '../Components/Footer'
import HeadingsForSection from '../Components/HeadingsForSection'

const MentorshipPage = ({ navigation }) => {

    const adId = "CR"

    return (
        <ScrollView style={styles.container} vertical={true} showsVerticalScrollIndicator={false}>

            <TascentMentorship />
            <RozgaarHome />
            <View style={styles.itemContainer}>
                <HeadingsForSection title={'CONTRIBUTORS AND SPEAKERS'} />
                <TascentContributors />
                <AdvertArea advertType={"Square"} adId={adId + '-' + '007'} />
                <TascentMentorshipAbout />
                <AdvertArea advertType={"Rectangle"} adId={adId + '-' + '008'} />
                <HeadingsForSection title={'THE MENTOR CONNECTOR'} />
                <RecruitmentConsultants />
                <BecomeMentor navigation={navigation} />
                <HeadingsForSection title={'TRENDING QUESTIONS ANSWERED BY MENTORS'} />
                <TrendingQuestion />
                <AdvertArea advertType={"Square"} adId={adId + '-' + '009'} />
                <MentoringProgram />

                <UsefulTools />
                <Footer />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        padding: 14
    },
    HeaderMain: {
        height: 90
    },
})

export default MentorshipPage


