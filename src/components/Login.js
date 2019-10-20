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
      boardId: "testing",
      canBeFirst: true
    };

    this.joinToBoard = this.joinToBoard.bind(this);
    this.listenToPlayers = this.listenToPlayers.bind(this);

  }
listenToPlayers(){
    var that = this;
    firebase.database().ref('Tableros/' + this.state.boardId).on("value", function(snapshot) {
      if(snapshot.val().hasPlayers) {
        that.setState({canBeFirst:false});
      };
    }, function (errorObject) {
    });
  }

  joinToBoard(boardCode){
    //Postear ingreso al Tablero
    firebase.database().ref('Tableros/' + boardCode).update({
        hasPlayers: true
      });
    if (this.state.canBeFirst) {
      global.first = true;
    }
    this.props.navigation.navigate("Instrucciones");
  }


  componentDidMount() {
    global.first = false;
    this.listenToPlayers();

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
