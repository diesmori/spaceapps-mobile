import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";
import { StackNavigator } from "react-navigation";

//import { principal } from "../styles/principal";
//import { colors } from "../styles/colors";

import * as firebase from "firebase";

export default class PlanetaEspera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }


  componentDidMount() {

  }

  render() {

      return (
        <View>
          <Text>**INFORMACION SOBRE EL PLANETA Y ESTRELLA**</Text>
            <Image  source={require('./espacio.jpg')}/>
        </View>

      );

  }
}