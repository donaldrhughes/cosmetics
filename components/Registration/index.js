//Home Screen
import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Left, Body, Right, Content, Footer, Text } from 'native-base';

//Components
import Register from '../common/Register';


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
  
          <Register />
          <Footer>
            <Content>
              <Text style={styles.footer}>269 S Beverly Drive Suite 222, Beverly Hills, California 90212
                    </Text>
            </Content>
            <Content><Text style={styles.footer}>Phone: 1.714.423.5208 - Call Us Today!</Text></Content>
          </Footer>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'center',
    }
  });
