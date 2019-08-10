//Splash Screen
import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Button, Header, Left, Body, Right, Content, Footer, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
       
        
        
        <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />
 
      
    );
  }
}

export default withNavigation(Splash)
