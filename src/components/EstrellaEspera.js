import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

//import { principal } from "../styles/principal";
//import { colors } from "../styles/colors";

import * as firebase from "firebase";

export default class EstrellaEspera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.waitListener = this.waitListener.bind(this);

  }

  waitListener(){
    var that = this;
    firebase.database().ref('Tableros/' + "testing").on("value", function(snapshot) {
      if(snapshot.val().goToPlanet) {
        that.props.navigation.navigate("Planetas");
      };
    }, function (errorObject) {
    });
  }


  componentDidMount() {
    this.waitListener();
  }

  render() {

      return (
        <View>
          <Text>Estoesespera</Text>
        </View>

      );

  }
}
