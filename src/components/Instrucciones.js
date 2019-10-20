import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

//import { principal } from "../styles/principal";
//import { colors } from "../styles/colors";

import * as firebase from "firebase";

export default class Instrucciones extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.joinToEspera = this.joinToEspera.bind(this);
    this.beginGame = this.beginGame.bind(this);

  }
  joinToEspera(){
    if (global.first) {
      this.props.navigation.navigate("Estrella");
    }
    else {
      this.props.navigation.navigate("EstrellaEspera");
    }
  }

  beginGame(boardCode){
    //Postear ingreso al Tablero
    firebase.database().ref('Tableros/' + boardCode).update({
        readyToStart: true
      });
    this.joinToEspera();
  }


  componentDidMount() {

  }

  render() {

      return (
        <View>
          <Text>Instrucciones</Text>
          <Button onPress={() => this.beginGame("testing")} title="Comenzar"></Button>
        </View>

      );

  }
}
