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
import Instrucciones from "./src/components/Instrucciones";
import Estrella from "./src/components/Estrella";
import EstrellaEspera from "./src/components/EstrellaEspera";
import PlanetaEspera from "./src/components/PlanetaEspera";
import Final from "./src/components/Final";
import Lanzamiento from "./src/components/Lanzamiento";
import Planetas from "./src/components/Planetas";

import * as firebase from "firebase";

import { config } from "./src/components/Firebase/firebase";

firebase.initializeApp(config);

const AppNavigator = createStackNavigator(
  {
    Login: { screen: Login },
    Instrucciones: { screen: Instrucciones},
    Estrella: { screen: Estrella},
    EstrellaEspera: {screen: EstrellaEspera},
    Final: {screen: Final},
    Lanzamiento: {screen: Lanzamiento},
    Planetas: {screen: Planetas},
    PlanetaEspera: {screen: PlanetaEspera},

  },
  { headerMode: "none" }
);

export default createAppContainer(AppNavigator);
