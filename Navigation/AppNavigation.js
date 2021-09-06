import React, { useState, useEffect, useMemo } from "react";
import { StackNav, TimesDrawer, Auth } from "./TimesNavigation";
import { NavigationContainer } from "@react-navigation/native";
import StartingScreen from "../Screens/StartingScreen";
import { AuthContext } from "../Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppNavigation = () => {
  const [storage, setStorage] = useState();
  const [isLoading, setIsloading] = useState(true);
  console.log(storage)
  useEffect(() => {
 
    AsyncStorage.getItem("userData").then((value) => {
      let parseData = JSON.parse(value);
      setStorage(parseData);

      setTimeout(() => {
        setIsloading(false);
      }, 1000);
    });
  }, []);

  const authContext = useMemo(() => {
    return {
      login: () => {
        setStorage("userLogin");
      },
      signUp: () => {
        setStorage("userSignup");
      },
      skip: () => {
        setStorage("skip");
      },
      logOut: () => {
        setStorage(null);
        console.log('Logout')
      },
    };
  }, []);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isLoading ? <StartingScreen /> : storage ? <TimesDrawer /> : <Auth />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavigation;
