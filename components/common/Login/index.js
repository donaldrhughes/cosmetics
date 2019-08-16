//Login Component
//========================
import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Form, Item, Input, Container, Header, Content, Button, Text, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

//Components
import Loading from '../Loading';

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
    // const hostString = "https://protected-harbor-72820.herokuapp.com/" || "http://localhost" ;
    // const portString = "" || "3001";

    //add axios here to auth/login
    this.setState({ loading: true })
    // axios.post(hostString + ":" + portString + "/auth/login", {
    axios.post("https://protected-harbor-72820.herokuapp.com/auth/login", {
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
          this.props.navigation.navigate('Splash');
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
      <Container>
        <Header><Text>James Albert Cosmetics</Text></Header>
        <Card>
          <CardItem style={styles.card}>
            <Content>
              <Form>
                <Item rounded style={styles.input}>
                  <Input
                    type="email"
                    className="loginText"
                    placeholder="Username"
                    value={this.state.email}
                    onChangeText={(text) => (this.state.email = text)} />
                </Item>
                <Item rounded last style={styles.input}>
                  <Input
                    type="password"
                    className="passwordText"
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(text2) => (this.state.password = text2)} />
                </Item>
                <Button rounded dark style={styles.btn} onPress={this.handleSubmit}>
                  <Text style={styles.btnText}>Submit</Text>
                </Button>
              </Form>
              <Button rounded dark style={styles.btn} onPress={() => (this.props.navigation.navigate('Registration'))}>
                <Text style={styles.btnText}>Sign Up</Text>
              </Button>
              <Button rounded dark style={styles.btn} onPress={() => (this.props.navigation.navigate('Forgot'))}>
                <Text style={styles.btnForgotText}>Forgot Password</Text>
              </Button>
            </Content>
          </CardItem>
        </Card>
      </Container>
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
  }

});


export default withNavigation(Login)