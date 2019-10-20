import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import Draggable from 'react-native-draggable';
//import { principal } from "../styles/principal";
//import { colors } from "../styles/colors";

import * as firebase from "firebase";

export default class Lanzamiento extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      distancia: 0,
      periodo: 0
    }
    this.postLanzamiento = this.Lanzamiento.bind(this);
  }

postLanzamiento(){
  firebase.database().ref('Tableros/' + "testing").update({
      periodo: this.state.distancia,
      distancia: this.state.periodo
    });

    this.props.navigation.navigate("PlanetaEspera");
}
  componentDidMount() {

  }

  render() {

      return (
        <View>
          <Slider
            style={{height: 40,width: 300}}
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            value={this.state.distancia}
            onValueChange={value => this.changeState(value)}              />
          <Text>Distancia</Text>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={5}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              value={this.state.periodo}
              onValueChange={value => this.changeState(value)}
              />
            <Text>Periodo</Text>
          <Text>Login</Text>
        </View>

      );

  }
}
