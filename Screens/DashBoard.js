import React, {useState , useEffect} from 'react';
import { View, StyleSheet, Text,ScrollView, TouchableOpacity, Alert } from 'react-native'
import AboutInfo from '../Components/AboutInfo';
import CvCard from '../Components/CvCard';
// import { LinearGradient } from 'expo-linear-gradient'
import HeaderMain from '../Components/HeaderMain';
import JobCard from '../Components/JobCard';
import SearchBarMain from '../Components/SearchBar';
import HeadingsForSection from '../Components/HeadingsForSection';
import JobsSuggestion from '../Components/JobsSuggestion';
import Footer from '../Components/Footer';


const DashBoard = props => {
 
const [canditateDetail, setCandidateDetail] =useState();
const [savedJobs, setSavedJobs] =useState();
const [resume, setResume] =useState();
const [jobsApplied, setJobsApplied] =useState();
const [isloading, setLoading] =useState();
const [industryDetail, setIndustryDetail] =useState();
const [jobFilter, setJobFilter] =useState();

    useEffect(() => {
        myProfile()
        getJobIndustries()
        getJobFilter()
      }, []);
     
      const myProfile = () =>{
        setLoading(true)
        fetch(global.baseURL +'/api/apiTimes/CandidateDetail', {
          method: 'POST',
          timeout: 10000,
          headers: { 
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization:'Token 77927b69bb144b065ca11bf2a9d452819cd852db' },
          body: JSON.stringify(
            {
                "CandidateId":"2574322"
                
                })
      })
          .then((response) => response.json())
        
          .then((result) => {    
      console.log(result.Resume)
            setCandidateDetail(result.CandidateDetai)
            setSavedJobs(result.SaveJobs)
            setResume(result.Resume)
            setJobsApplied(result.appliedJobs) 
      
          })
          .finally(() => setLoading(false))
          
          .catch((error) => console.log(error))
      }
      const getJobIndustries  = () =>{
        setLoading(true)
        fetch(global.baseURL +'/api/apiTimes/GetIndustry', {
          method: 'POST',
          timeout: 10000,
          headers: { 
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization:'Token 77927b69bb144b065ca11bf2a9d452819cd852db' },
          body: JSON.stringify(
            {

            }
            )
      })
          .then((response) => response.json())
        
          .then((result) => {    
    //console.log(result.data)
      setIndustryDetail(result.data.slice(0,10))
          })
          .finally(() => setLoading(false))
          
          .catch((error) => console.log(error))
      }
    
      const getJobFilter  = () =>{
        setLoading(true)
        fetch(global.baseURL +'/api/apiTimes/JobFilter', {
          method: 'POST',
          timeout: 10000,
          headers: { 
            Accept: 'application/json', 'Content-Type': 'application/json',
            Authorization:'Token 77927b69bb144b065ca11bf2a9d452819cd852db' },
          body: JSON.stringify(
            {

            }
            )
      })
          .then((response) => response.json())
        
          .then((result) => {    
            setJobFilter(result.job_filter)
      //setIndustryDetail(result.data.slice(0,10))
          })
          .finally(() => setLoading(false))
          
          .catch((error) => console.log(error))
      }




    const username = (name) => {
        var str = name;
        if (str) {
            var res = str.slice(0, 1);
            var res = res.toUpperCase();
        } else {
            var res = '-';
        }
        return res;
    }
    return (
        <View style={styles.pageView}> 
         <ScrollView showsVerticalScrollIndicator={false}>
<AboutInfo apiData={canditateDetail} />

<CvCard jobAds={resume}/>
{/* <HeadingsForSection title={"SAVED JOBS"}/> */}
<JobCard jobAds={savedJobs} SectionHeading={"SAVED JOBS"} loading={isloading} hideSaveJob={true} />
{/* <HeadingsForSection title={"APPLIED JOBS"}/> */}
<JobCard jobAds={jobsApplied} SectionHeading={"APPLIED JOBS"} loading={isloading} hideSaveJob={true} />
<JobsSuggestion heading={"POPULAR INDUSTRIES"} apiData={industryDetail} cardType='Industry' />
<JobsSuggestion heading={"JOBS BY LOCATION"} apiData={jobFilter} cardType='Location' />
<Footer />
            </ScrollView>
            </View>


    );
};

const styles = StyleSheet.create({
    pageView:{
        flex:1,
        backgroundColor:'white',
        padding: 10,
     
     },
     maincontainer: {
        flex: 1,
    },
    LinearGradient: {
        height: 170,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
    },
    ItemContainer: {
        flexDirection: 'row',
        paddingTop: 30
    },
    usernameView: {
        backgroundColor: '#fff',
        width: 80,
        height: 80,
        borderRadius: 80,
        justifyContent: 'center',
    },
    Textname: {
        padding: 16
    },
    ImageStyle: {
        width: 80,
        height: 80,
        borderRadius: 80,
    },
    ProfilePicText: {
        fontSize: 40,
        color: '#DA9917',
        textAlign: 'center',
        fontWeight: '600'
    },
    TextView: {
        padding: 20,
    },
    TextContainer: {
        paddingTop: 12
    },
    Text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#777777'
    },
    NameText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    PostText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
    
});
export default DashBoard;
