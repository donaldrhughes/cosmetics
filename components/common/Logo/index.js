import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, Title, Icon, Button, Container, Left, Right, Header, Content, Body, Text } from 'native-base';


//Components
import Styles from '../Styles';

export default class Head extends Component {


    render() {
        return (
<Header style={Styles.dark}>
  <Body >
          <Image style={Styles.imgLogo} source={require('../../../images/JA-Logo-sml-light.png')} />
      </Body>
      </Header>
        );
    }
}
