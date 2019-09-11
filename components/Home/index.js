//Home Screen
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Body, Content, Footer, Text } from 'native-base';


//Components
import Login from '../common/Login';
import Styles from '../common/Styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <Container>
        <StatusBar barStyle="default" />
        <Header style={Styles.dark}>
          <Body style={Styles.dark}>
            <Image style={Styles.imgLogo} source={require('../../images/JA-Logo-sml-light.png')} />

          </Body>
        </Header>
        <Header style={Styles.dark}>
        <Body style={Styles.dark}>
        <Content>
        <Text style={Styles.header}>Login</Text>
        </Content>
        </Body>
        </Header>
        <Login />
        {/* <Text style={Styles.dark}>Test</Text> */}
        <Footer>
          <Content>
            <Text style={Styles.footer}>269 S Beverly Drive Suite 222, Beverly Hills, California 90212
                    </Text>
          </Content>
          <Content><Text style={Styles.footer}>Phone: 1.714.423.5208 - Call Us Today!</Text></Content>
        </Footer>
      </Container>
    );
  }
}

