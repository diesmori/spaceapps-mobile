import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image} from "react-native";
import { StackNavigator } from "react-navigation";
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';
//import { principal } from "../styles/principal";
//import { colors } from "../styles/colors";
import Draggable from 'react-native-draggable';
import * as firebase from "firebase";
const cards = [
  {
    text: 'Card th',
    name: 'Koi-55 b',
    masa: '0.0021',
    periodo: '0.34',
    tipo: 'Rocoso',
    image: require('./descarga2.png'),
  },
  {
    text: 'Card thre',
    name: 'Kepler-289 b',
    masa: '0.013',
    periodo: '1.48',
    tipo: 'Super Tierra',
    image: require('./tierra.png'),
  },
  {
    text: 'Card three',
    name: 'Kelt-20 b',
    masa: '3.38',
    periodo: '3.47',
    tipo: 'Gigante Gaseoso',

    image: require('./descarga.png'),
  },
];
export default class Planetas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      match: false
    };
    this.alFin = this.alFin.bind(this);

  }

 alFin(value){
   global.planeta=value
   this.props.navigation.navigate("Lanzamiento");
 }
  componentDidMount() {

  }

  render() {

      return (
        <View>
          <DeckSwiper
           onSwipeRight={value => this.alFin(value)}
           dataSource={cards}
           renderItem={item =>
             <Card style={{ elevation: 3 }}>
               <CardItem>
                 <Left>
                   <Body>
                     <Text note>{item.name}</Text>
                   </Body>
                 </Left>
               </CardItem>
               <CardItem cardBody>
                 <Image style={{ height: 500, flex: 1 }} source={item.image} />
               </CardItem>
               <CardItem>
                 <Text>{item.masa} Masas de Jupiter </Text>
                 </CardItem>
                  <CardItem>
                 <Text>{item.periodo} Periodos de Jupiter </Text>
                 </CardItem>
                  <CardItem>
                 <Text>{item.tipo}</Text>
               </CardItem>
             </Card>
           }
         />
        </View>

      );

  }
}
