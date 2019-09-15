//Login Component
//========================
import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Form, Item, Input, Container, Header, Content, Button, Text, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { uriBase } from '../../../uri';
import axios from 'axios';


//Components
import Loading from '../Loading';
import Styles from '../Styles'

//Login Class
//=======================
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      loading: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: false,
      email: null,
      password: null

    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true })
    axios.post(uriBase + 'auth/login', {
      email: this.state.email,
      password: this.state.password

    })
      .then((response) => {
        this.setState({ loading: false, email: null, password: null });
        if (response.data.hasE) {
          const errorsJSON = JSON.parse(response.request.responseText);
          const errors = errorsJSON.e;
          let errorsList = '';
          for (let i = 0; i < errors.length; i++) {
            errorsList += '<li>' + errors[i].msg + '</li>';
          }
          Alert.alert(errorsList)

        } else if (response.data.token) {
          const token = response.data.token;
          // console.error(token)
          AsyncStorage.setItem('@token', 'token');
          this.props.navigation.navigate('Stripe');
        } else {

          let message = response.data.message;
          Alert.alert(message);
        }

      })
      .catch(function (error) {
        console.log(error);

      })
  }


  render() {
    if (this.state.loading) return <Loading />;

    return (
        <Card>
          <CardItem style={Styles.card}>
            <Content>
              <Form>
                <Item rounded style={Styles.input}>
                  <Input
                    type="email"
                    className="loginText"
                    placeholder="Username"
                    value={this.state.email}
                    autoCapitalize = 'none'
                    onChangeText={(text) => (this.state.email = text)} />
                </Item>
                <Item rounded last style={Styles.input}>
                  <Input
                    type="password"
                    className="loginText"
                    placeholder="Password"
                    autoCapitalize = 'none'
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(text2) => (this.state.password = text2)} />
                </Item>
                <Button rounded style={Styles.btn} onPress={this.handleSubmit}>
                  <Text style={Styles.btnText}>Submit</Text>
                </Button>
              </Form>
              <Button rounded style={Styles.regBtn} onPress={() => (this.props.navigation.navigate('Registration'))}>
                <Text style={Styles.btnText}>Sign Up</Text>
              </Button>
              <Button rounded style={Styles.forgotBtn} onPress={() => (this.props.navigation.navigate('Forgot'))}>
                <Text style={Styles.btnForgotText}>Forgot Password</Text>
              </Button>
            </Content>
          </CardItem>
        </Card>
    )
  }
}

const styles = StyleSheet.create({

  card: {
    flex: 0,
    backgroundColor: Colors.dark,
    color: Colors.light
  },
  input: {
    margin: 6,
    backgroundColor: Colors.light
  },
  btn: {
    marginLeft: 64,
    marginRight: 64,
    marginTop: 16
  },
  btnText: {
    marginLeft: 60
  },
  btnForgotText: {
    marginLeft: 35
  },
  loginText: {
    color: Colors.dark
  }

});


export default withNavigation(Login)