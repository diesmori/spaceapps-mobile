import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

//import { principal } from "../styles/principal";
//import { colors } from "../styles/colors";

import * as firebase from "firebase";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.joinToBoard = this.joinToBoard.bind(this);

  }

  joinToBoard(boardCode){
    //Postear ingreso al Tablero
    firebase.database().ref('Tableros/' + boardCode).update({
        hasPlayers: true
      });
    this.props.navigation.navigate("Instrucciones");
  }


  componentDidMount() {

  }

  render() {

      return (
        <View>
          <Text>Login</Text>
          <Button onPress={() => this.joinToBoard("testing")} title="Goooo!"></Button>
        </View>

      );

  }
}
