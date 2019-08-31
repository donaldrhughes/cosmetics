//Splash Screen
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Button, Header, Left, Body, Right, Content, Footer, Text, Card, Form, Item, Input, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
//Components
import Stripe from '../Stripe';
import Loading from '../common/Loading';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (

      <Container>
        {/* <Stripe /> */}
        <Card>
          <Form>
            <CardItem><Text> Stripe </Text></CardItem>
            <Item rounded style={styles.input}>
              <Input
                type="email"
                className="loginText"
                placeholder="Email"
                value={this.state.email}
                onChangeText={(text) => (this.state.email = text)} />
            </Item>
            <Item rounded style={styles.input}>
              <Input
                type="text"
                className="userText"
                placeholder="Username"
                value={this.state.username}
                onChangeText={(text2) => (this.state.username = text2)} />
            </Item>
            <CardItem><Input><Text>CardItem Input</Text></Input></CardItem>
            <CardItem><Button><Text>Submit</Text></Button></CardItem>
          </Form>
        </Card>

      </Container>

    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white
  },
  card: {
    flex: 0,
    backgroundColor: Colors.dark,
    color: Colors.light
  },
  input: {
    margin: 6,
    backgroundColor: Colors.light,
  },
  btn: {
    marginLeft: 64,
    marginRight: 64,
    marginTop: 16
  },
  btnText: {
    marginLeft: 60
  }


});

export default withNavigation(Splash)
