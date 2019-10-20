/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import Login from "./src/components/Login";

//import * as firebase from "firebase";

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login }
  },
  { headerMode: "none" }
);

export default createAppContainer(AppNavigator);
