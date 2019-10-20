import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import Slider from '@react-native-community/slider';

//import { principal } from "../styles/principal";
//import { colors } from "../styles/colors";

import * as firebase from "firebase";

export default class Estrella extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      temperatura : 0
    }

    this.postStar = this.postStar.bind(this);
  }

postStar(){
  firebase.database().ref('Tableros/' + "testing").update({
      goToPlanet: true
    });

    this.props.navigation.navigate("PlanetaEspera");
}

changeState(temperatura){
  this.setState({temperatura:temperatura});
  if (temperatura<5000){
    firebase.database().ref('Estrellas/testing').update({
        tipo : 1
      });
  }
  else if (temperatura<7500) {
    firebase.database().ref('Estrellas/testing').update({
        tipo : 2
      });
  }
  else if (temperatura<20000) {
    firebase.database().ref('Estrellas/testing').update({
        tipo : 3
   });
 }
}

  componentDidMount() {

  }

  render() {

      return (
        <View style={{justifyContent:"center", alignItems : "center"}}>
          <Slider
            style={{width: 300, height: 40}}
            minimumValue={2600}
            maximumValue={20000}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            value={this.state.temperatura}
            onValueChange={value => this.changeState(value)}              />
          <Text>Temperatura</Text>
            <Slider
              style={{width: 300, height: 40}}
              minimumValue={0}
              maximumValue={3}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              />
            <Text>Masa</Text>
              <Slider
                style={{width: 300, height: 40}}
                minimumValue={0}
                maximumValue={2}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                />
              <Text>Radio</Text>
                <Slider
                  style={{width: 300, height: 40}}
                  minimumValue={-4}
                  maximumValue={4}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#000000"
                  />
                <Text>Luminosidad</Text>
                <TouchableOpacity onPress={() => this.postStar()}>
                  <Image  source={require('./liftoff.jpg')} dimensions= "cover" style={{justifyContent:"center", alignItems : "center",width: 140, height: 40}}/>
                </TouchableOpacity>
      </View>

      );

  }
}
