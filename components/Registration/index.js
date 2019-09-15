//Home Screen
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from 'native-base';

//Components
import Register from '../common/Register';
import Foot from '../common/Foot';
import Head from '../common/Head';


export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
        <Container>
        <StatusBar barStyle="dark-content" />
          <Head headText= 'Create an Account'/>
          <Register />
          <Foot />
        </Container>
    );
  }
}
