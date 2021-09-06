import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Jobs from '../Screens/Jobs';
import HomePage from '../Screens/HomePage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Events from '../Screens/Events';
import Courses from '../Screens/Courses';
import HRpro from '../Screens/HRpro';
import RemoteWork from '../Screens/RemoteWork';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserProfile from '../Screens/UserProfile';
import JobDetail from '../Screens/JobDetail';
import ArticleDetail from '../Screens/ArticleDetail';
import InterViewAndGD from '../Screens/InterViewAndGD';
import NewsAndInfo from '../Screens/NewsAndInfo';
import LoginPage from '../Screens/LoginPage';
import SignUpPage from '../Screens/SignUpPage';
import SignUpSuccess from '../Screens/SignUpSuccess';
import OtpSignup from '../Screens/OtpSignup';
import DashBoard from '../Screens/DashBoard';
import JobAdsFullPage from '../Screens/JobAdsFullPage';
import EmailVerify from '../Screens/EmailVerify';
import SideDrawer from '../Screens/SideDrawer';
import FeedbackScreen from '../Screens/FeedbackScreen';
import ReportABugScreen from '../Screens/ReportABugScreen';
import CompanyProfilePage from '../Screens/CompanyProfilePage';
import ArticleSearch from '../Screens/ArticleSearch';
import MentorshipPage from '../Screens/MentorshipPage';
import JobSearch from '../Screens/JobSearch';
import IntroSlider from '../Screens/IntroSlider';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EasyApply from '../Screens/EasyApply'
import BecomeMentorForm from '../Screens/BecomeMentorForm';
import BannerAds from '../Screens/BannerAds'
import AdvertContactUs from '../Screens/AdvertContactUs';
import AdvertiseWithUs from '../Screens/AdvertiseWithUs';
import DashboardEditProfile from '../Screens/DashboardEditProfile';
import CXO from '../Screens/CXO';
import CourseList from '../Screens/CourseList';
import PostJobForm from '../Components/PostJobForm';
import PostJobForm2 from '../Components/PostJobForm2';
import SearchScreen from '../Screens/SearchScreen';

const Authnavigator = createStackNavigator();
export const Auth = () => {

	const [oldUser, setOldUser] = useState();
	AsyncStorage.getItem('checkUser').then((value) => {
		let parseData = JSON.parse(value);
		//let checkUserAccess = (!parseData) ? 'false" : "true"
		setOldUser(parseData.olduser)
		//console.log('oldeuser value ', parseData.olduser);
	})


	return (
		<Authnavigator.Navigator>

			<Authnavigator.Screen name="Intro" component={WelcomeNav} options={{ headerShown: false }} />
			<Authnavigator.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
			<Authnavigator.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false }} />
			<Authnavigator.Screen name="SignUpSuccess" component={SignUpSuccess} options={{ headerShown: false }} />
			<Authnavigator.Screen name="OtpSignup" component={OtpSignup} options={{ headerShown: false }} />
			{/* 	<Authnavigator.Screen name="PasswordScreen" component={PasswordScreen} options={{ title: 'Enter Your Password' }} /> */}
			<Authnavigator.Screen name="EmailVerify" component={EmailVerify} options={{ headerShown: false }} />
		</Authnavigator.Navigator>
	);
}


const WelcomeNavigator = createStackNavigator();
const WelcomeNav = () => {
	return (
		<WelcomeNavigator.Navigator >
			{/* <WelcomeNavigator.Screen name="DecideScreen" component={DecideScreen} options={{ headerShown: false}} /> */}
			<WelcomeNavigator.Screen name="IntroSlider" component={IntroSlider} options={{ headerShown: false }} />

		</WelcomeNavigator.Navigator>
	)
}

const MainStackNavigator = createStackNavigator();
export const StackNav = () => {
	return (
		<MainStackNavigator.Navigator>
			{/* <MainStackNavigator.Screen name="IntroSlider" component={IntroSlider} options={{ headerShown: false, title: "Home" }} /> */}
			<MainStackNavigator.Screen name="TimesBottomTab" component={TabNavigation} options={{ headerShown: false, title: "Home" }} />
			{/* <MainStackNavigator.Screen name="Jobs" component={Jobs} options={{ title: "Jobs" }} /> */}
			{/* <MainStackNavigator.Screen name="Courses" component={Courses} options={{ title: "Courses" }} /> */}
			{/* <MainStackNavigator.Screen name="Events" component={Events} options={{ title: "Events" }} /> */}
			<MainStackNavigator.Screen name="HRpro" component={HRpro} options={{ headerShown: false, title: "HR Pro" }} />
			{/* <MainStackNavigator.Screen name="RemoteWork" component={RemoteWork} options={{ title: "Remote Work" }} /> */}
			<MainStackNavigator.Screen name="UserProfile" component={UserProfile} options={{ title: "My Profile" }} />
			<MainStackNavigator.Screen name="JobDetail" component={JobDetail} options={{ title: "Job Ad" }} />
			<MainStackNavigator.Screen name="ArticleDetail" component={ArticleDetail} options={{
				title: '', headerStyle: { backgroundColor: '#F02F39', },
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}} />
					<MainStackNavigator.Screen name="CXO" component={CXO} options={{ headerShown: false}} />
					<MainStackNavigator.Screen name="CourseList" component={CourseList} options={{ headerShown: true , title : 'COURSES LIST',headerStyle : {backgroundColor : '#F02F39'}}} />
			<MainStackNavigator.Screen name="BecomeMentorForm" component={BecomeMentorForm} options={{ headerShown: true, title: "Become a Mentor" }} />
			<MainStackNavigator.Screen name="InterViewAndGD" component={InterViewAndGD} options={{ title: "InterView and GD" }} />
			<MainStackNavigator.Screen name="NewsAndInfo" component={NewsAndInfo} options={{ title: "News and Info" }} />
			{/* 	<MainStackNavigator.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false,title: "Login Page" }} /> */}
			<MainStackNavigator.Screen name="SignUpPage" component={SignUpPage} options={{ headerShown: false, title: "Login Page" }} />

			<MainStackNavigator.Screen name="DashBoard" component={DashBoard} options={{
				title: 'Dashboard', headerStyle: { backgroundColor: '#F02F39', },
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}} />
			<MainStackNavigator.Screen name="DashboardEditProfile" component={DashboardEditProfile} options={{
				title: 'Edit Profile', headerStyle: { backgroundColor: '#F02F39', },
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}} />
			<MainStackNavigator.Screen name="JobAdsFullPage" component={JobAdsFullPage} options={{ headerShown: true, title: "Job Ads full" }} />
			<MainStackNavigator.Screen name="FeedbackScreen" component={FeedbackScreen} options={{ headerShown: true, title: "Feedback" }} />
			<MainStackNavigator.Screen name="ReportABugScreen" component={ReportABugScreen} options={{ headerShown: true, title: "Report A Bug" }} />
			<MainStackNavigator.Screen name="CompanyProfilePage" component={CompanyProfilePage} options={{
				title: '', headerStyle: { backgroundColor: '#F02F39', },
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}} />
			<MainStackNavigator.Screen name="ArticleSearch" component={ArticleSearch} options={{
				title: '', headerStyle: { backgroundColor: '#F02F39', },
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}} />
			<MainStackNavigator.Screen name="EasyApply" component={EasyApply} options={{
				title: 'Apply', headerStyle: { backgroundColor: '#F02F39', },
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}} />
			<MainStackNavigator.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false, animationEnabled: false }} />

			<MainStackNavigator.Screen name="MentorshipPage" component={MentorshipPage} options={{ headerShown: true, title: "Mentorship" }} />
			<MainStackNavigator.Screen name="JobSearch" component={JobSearch} options={{ headerShown: true, title: "Job Search" }} />
			<MainStackNavigator.Screen name="BannerAds" component={BannerAds} options={{ headerShown: true, title: "Banner Ads" }} />
			<MainStackNavigator.Screen name="AdvertContactUs" component={AdvertContactUs} options={{ headerShown: true,title: "Advert Contact Us" }} />
			<MainStackNavigator.Screen name="PostJobForm" component={PostJobForm} options={{ headerShown: false }} />
			<MainStackNavigator.Screen name="PostJobForm2" component={PostJobForm2} options={{ headerShown: false }} />
			<MainStackNavigator.Screen name="AdvertiseWithUs" component={AdvertiseWithUs} options={{ headerShown: false,title: "Advertise With us" }} />
		</MainStackNavigator.Navigator>
	)
}

const TimesBottomTab = createBottomTabNavigator();
export const TabNavigation = (props) => {

	return (

		<TimesBottomTab.Navigator
			screenOptions={({ route, navigation }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'HomePage') {
						iconName = focused ? 'briefcase-search' : 'briefcase-clock';
					} else if (route.name === 'Jobs') {
						iconName = focused ? 'book-open-variant' : 'book-open-page-variant';

					} else if (route.name === 'Courses') {
						iconName = focused ? 'format-list-bulleted-square' : 'format-list-text';
					} else if (route.name === 'Events') {
						iconName = focused ? 'calendar' : 'calendar-account';
					} /* else if (route.name === 'HRpro') {
							iconName = focused ? 'account-convert' : 'account-multiple-plus';
						} */
					else if (route.name === 'RemoteWork') {
						iconName = focused ? 'account-convert' : 'account-multiple-plus';
					}
					// You can return any component that you like here!
					return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
				},
			})}
			tabBarOptions={{
				keyboardHidesTabBar: true,
				style: { backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingBttom: 10, },
				activeTintColor: '#F02F39',
				inactiveTintColor: 'grey',
				
			}}>
			<TimesBottomTab.Screen name="HomePage" component={HomePage} options={{ title: 'Careers' }} />
			<TimesBottomTab.Screen name="Jobs" component={Jobs} options={{ title: 'Jobs' }} />
			<TimesBottomTab.Screen name="Courses" component={Courses} options={{ title: 'Courses', }} />
			<TimesBottomTab.Screen name="Events" component={Events} options={{ title: 'Events', }} />
			{/* <TimesBottomTab.Screen name="HRpro" component={HRpro} options={{ title: 'HR Pro', }} /> */}
			<TimesBottomTab.Screen name="RemoteWork" component={RemoteWork} options={{ title: 'Remote Work', }} />
		</TimesBottomTab.Navigator>

	);
}

const Drawer = createDrawerNavigator();

export const TimesDrawer = () => {
	return (

		<Drawer.Navigator drawerStyle={{ backgroundColor: '#f8f8f8' }}
			drawerContent={(props) => <SideDrawer {...props} />}
			drawerContentOptions={{
				activeTintColor: '#e91e63',
			}}>
			<Drawer.Screen name="Career" component={StackNav} />
			<Drawer.Screen name="Interview and GD Prep" component={InterViewAndGD} />
			<Drawer.Screen name="Resume Writing" component={InterViewAndGD} />
			<Drawer.Screen name="HR Pro" component={HRpro} />
			<Drawer.Screen name="Mentorship" component={InterViewAndGD} />
			<Drawer.Screen name="News And Info" component={NewsAndInfo} />

		</Drawer.Navigator>

	);
}
