import React, { Component } from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Left, Body, Right, Content, Footer, Text, Button, Icon, Title } from 'native-base';
import Login from '../common/Login';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
        <StatusBar barStyle="dark-content" />
        
          <Header>
            <Body>
              <Image source={require('../../images/JA-Logo-sml.png')} />
            </Body>
          </Header>
  
          <Login />
          <Footer>
            <Content>
              <Text style={styles.footer}>269 S Beverly Drive Suite 222, Beverly Hills, California 90212
                    </Text>
            </Content>
            <Content><Text>Phone: 1.714.423.5208 - Call Us Today!</Text></Content>
          </Footer>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
