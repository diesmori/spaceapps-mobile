import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";
import { StackNavigator } from "react-navigation";
import Slider from '@react-native-community/slider';

//import { principal } from "../styles/principal";
//import { colors } from "../styles/colors";

import * as firebase from "firebase";

export default class Lanzamiento extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      distancia: 1,
      periodo: 365
    }
    this.postLanzamiento = this.postLanzamiento.bind(this);
    this.ultimo = this.ultimo.bind(this);
  }

postLanzamiento(){
  firebase.database().ref('Tableros/' + "testing/planeta1").update({
      periodo: this.state.distancia,
      distancia: this.state.periodo,
      masa: global.value.masa

    });

}
ultimo(){
  this.props.navigation.navigate("PlanetaEspera");
}
  componentDidMount() {

  }

  render() {

      return (
        <View>
          <Slider
            style={{height: 40,width: 300}}
            minimumValue={0.1}
            maximumValue={10}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            value={this.state.distancia}
            onValueChange={value => this.setState({distancia:value})}              />
          <Text>Distancia</Text>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={40}
              maximumValue={10000}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              value={this.state.periodo}
              onValueChange={value =>  this.setState({periodo:value})}
              />
            <Text>Periodo</Text>
          <Text>Login</Text>
          <Button onPress={() => this.ultimo()} title="Lanzar"></Button>
          <Image  source={require('./descarga1.png')}/>
        </View>

      );

  }
}
