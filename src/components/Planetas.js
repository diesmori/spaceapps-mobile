import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

//import { principal } from "../styles/principal";
//import { colors } from "../styles/colors";

//import * as firebase from "firebase";

export default class Planetas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }


  componentDidMount() {
    this.props.navigation.navigate("Lanzamiento");
  }

  render() {

      return (
        <View>
          <Text>Planetas tinder</Text>
        </View>

      );

  }
}
