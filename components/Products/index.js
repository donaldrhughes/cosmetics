//Products Screen
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Content, Footer, Text, Form, Item, Input, Button, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import { uriBase } from '../../uri';
import axios from 'axios';


//Components
import Loading from '../common/Loading/';
import Styles from '../common/Styles/';
import Stripe from '../Stripe/Root'
import Head from '../common/Head';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      loading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount(){
  this.setState({
    loading: false,
    email: null
  })
}

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true })
      axios.post(uriBase + 'auth/forgot_password', {
    email: this.state.email
    })
      .then((response) => {
        this.setState({loading: false, email: null });
        if (response.data.hasE) {
          const errorsJSON = JSON.parse(response.request.responseText);
          const errors = errorsJSON.e;
          let errorsList = '';
          for (let i = 0; i < errors.length; i++) {
            errorsList += '<li>' + errors[i].msg + '</li>';
          }
          Alert.alert(errorsList)
        } else {
          let message = response.data.message;
          Alert.alert(message);
          this.props.navigation.navigate('Stripe')
        }
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    if (this.state.loading) return <Loading />;

    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Head></Head>
        <Card>
          <CardItem style={Styles.card}>
            <Content>
              <Form>
                <Item style={Styles.input}>
                  {/* <Input
                    type="email"
                    className="loginText"
                    placeholder="Enter Your Email Address"
                    value={this.state.email}
                    onChangeText={(text) => (this.state.email = text)} /> */}
                </Item>
                <Button rounded dark style={Styles.btn} onPress={this.handleSubmit}>
                  <Text style={Styles.btnText}>Submit</Text>
                </Button>
              </Form>
            </Content>
          </CardItem>
        </Card>
        <Stripe />
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

// const styles = StyleSheet.create({
//   btn: {
//     marginLeft: 64,
//     marginRight: 64,
//     marginTop: 16
//   },
//     btnText: {
//       marginLeft: 60
//     },
//     card: {
//       flex: 0,
//       backgroundColor: Colors.dark,
//       color: Colors.light
//     },
//     input: {
//       margin: 6,
//       backgroundColor: Colors.light
//     },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'center',
//   }
// });

export default withNavigation(Products)
