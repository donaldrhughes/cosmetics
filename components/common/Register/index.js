//Register Component
//========================
import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Form, Item, Input, Container, Content, Button, Text, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import { uriBase } from '../../../uri';
import axios from 'axios';

//Components
import Loading from '../Loading';
import Styles from '../Styles';

//Register Class
//=======================
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      username: null,
      password: null,
      passwordVerify: null,
      dob: null,
      loading: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount(){
  this.setState({
    loading: false,
    email: null,
    username: null,
    password: null,
    passwordVerify: null,
    dob: null
  })
}

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true })
      axios.post(uriBase + 'auth/register', {
    email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      passwordVerify: this.state.passwordVerify,
      dob: this.state.dob
    })
      .then((response) => {
        this.setState({loading: false, email: null, password: null, verifyPassword: null, dob: null, username: null });
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
          this.props.navigation.navigate('Home')
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
        {/* <Header><Text>Sign Up Here</Text></Header> */}
        <Card>
          <CardItem style={Styles.card}>
            <Content>
              <Form>
                <Item rounded style={Styles.input}>
                  <Input
                    type="email"
                    className="loginText"
                    placeholder="Email"
                    value={this.state.email}
                    autoCapitalize = 'none'
                    onChangeText={(text) => (this.state.email = text)} />
                </Item>
                <Item rounded style={Styles.input}>
                  <Input
                    type="text"
                    className="userText"
                    placeholder="Username"
                    value={this.state.username}
                    autoCapitalize = 'none'
                    onChangeText={(text5) => (this.state.username = text5)} />
                </Item>
                <Item rounded last style={Styles.input}>
                  <Input
                    type="password"
                    className="passwordText"
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize = 'none'
                    value={this.state.password}
                    onChangeText={(text2) => (this.state.password = text2)} />
                </Item>
                <Item rounded last style={Styles.input}>
                  <Input
                    type="password"
                    className="passwordText"
                    placeholder="Verify Password"
                    secureTextEntry={true}
                    value={this.state.verifyPassword}
                    autoCapitalize = 'none'
                    onChangeText={(text3) => (this.state.passwordVerify = text3)} />
                </Item>
                <Item rounded style={Styles.input}>
                  <Input
                    type="text"
                    className="Text"
                    placeholder="Date of Birth (MM-DD) - Year is optional"
                    value={this.state.dob}
                    autoCapitalize = 'none'
                    onChangeText={(text4) => (this.state.dob = text4)} />
                </Item>
                <Button rounded dark style={Styles.regBtn} onPress={this.handleSubmit}>
                  <Text style={Styles.btnText}>Submit</Text>
                </Button>
              </Form>
            </Content>
          </CardItem >
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


export default withNavigation(Register)