//Login Component
//========================
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Form, Item, Input, Container, Header, Content, Button, Text, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


//Login Class
//=======================
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      loading: false

    };
    this.email = null,
      this.password = null,
      this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = () => {

    //add axios here to auth/login
    this.setState({ loading: true })
    axios.post("http://localhost:3001/auth/login", {
      email: this.email,
      password: this.password,

    })
      .then((response) => {
        this.setState({ loading: false });
        if (response.data.token) {
          const token = response.data.token;
          AsyncStorage.setItem('@token', 'token')
          // localStorage.setItem("token", token)
          this.props.navigation.navigate('Splash')
        } else {
          let message = response.data.message;
          alert(message);
        }
        // console.log(token)

      })
      .catch(function (error) {
        console.log(error);

      });
  }



  render() {
    return (
      <Container>
        <Header><Text>Login</Text></Header>

        <Card>
          <CardItem style={styles.card}>
            <Content>
              <Form>
                <Item rounded style={styles.input}>
                  <Input
                    type="email"
                    className="loginText"
                    placeholder="Username"
                    value={this.email}
                    onChangeText={(text) => (this.email = text)} />
                </Item>
                <Item rounded last style={styles.input}>
                  <Input
                    type="password"
                    className="passwordText"
                    placeholder="Password"
                    value={this.password}
                    onChangeText={(text) => (this.password = text)} />
                </Item>
                <Button rounded dark style={styles.btn} onPress={this.handleSubmit}>
                  <Text style={styles.btnText}>Submit</Text>
                </Button>
              </Form>
            </Content>

          </CardItem >

          <CardItem style={styles.card}>
            <Content>
              <Text style={styles.card}>Sign Up</Text>
            </Content>
          </CardItem>
          <CardItem style={styles.card}>
            <Content>
              <Text style={styles.card}>Forgot Password</Text></Content>
          </CardItem>


        </Card>

      </Container>
    )
  }

}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white
  },
  card: {
    flex: 0,
    backgroundColor: Colors.dark,
    textAlignVertical: "center",
    textAlign: "center",
    color: Colors.light
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
  input: {
    margin: 6,
    backgroundColor: Colors.light,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    marginLeft: 64,
    marginRight: 64,
    marginTop: 16
  },
  btnText: {
    textAlignVertical: "center",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60
  },
  center: {
    textAlignVertical: "center",
    textAlign: "center"
  }


});

export default withNavigation(Login)