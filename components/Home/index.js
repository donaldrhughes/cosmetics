//Home Screen
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from 'native-base';


//Components
import Login from '../common/Login';
import Styles from '../common/Styles';
import Loading from '../common/Loading';
import Head from '../common/Head';
import Logo from '../common/Logo';
import Foot from '../common/Foot';
import BodyImg from '../common/BodyImg';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.setState({
      loading: false
    })
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <Container>
        <StatusBar barStyle="default" />
        <Logo></Logo>
        <Head></Head>
        <Login />
        <View style={{flex: 1}}>
        <BodyImg />
        <Foot />
          </View>
      </Container>
    );
  }
}

