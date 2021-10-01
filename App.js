import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import FirebaseKeys from "./app/config/FirebaseKeys";
import firebase from "firebase/app";
import Constants from "expo-constants";

import HomePage from "./app/screens/HomePage";
import AboutPage from "./app/screens/AboutPage";
import OptionsPage from "./app/screens/OptionsPage";
import TrainingPage from "./app/screens/TrainingPage";
import PurchasePage from "./app/screens/PurchasePage";
import ForgotPassword from "./app/screens/ForgotPassword";

import LogoTitle from "./app/config/LogoTitle";
import Colors from "./app/config/Colors";

export default function App() {
  return <AppContainer />;
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
    },
    About: {
      screen: AboutPage,
    },
    Options: {
      screen: OptionsPage,
    },
    Purchase: {
      screen: PurchasePage,
    },
    Training: {
      screen: TrainingPage,
    },
    Password: {
      screen: ForgotPassword,
    },
  },
  {
defaultNavigationOptions: {
      headerTitle: () => <LogoTitle/>,
      headerStyle: {
        backgroundColor: Colors.fadedBlack,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {},
      title: "Centered",
      headerTitleAlign: "center",
    },
  },
  { initialRouteName: "Home", headerMode: "none" }
);

const AppContainer = createAppContainer(AppNavigator);