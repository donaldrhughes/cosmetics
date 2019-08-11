//Login Component
//========================
import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Form, Item, Input, Container, Header, Content, Button, Text, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

//Components
import Loading from '../Loading';

//Login Class
//=======================
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      username: null,
      password: null,
      verifyPassword: null,
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
    verifyPassword: null,
    dob: null
  })
}

  handleSubmit = (event) => {
    event.preventDefault();
    //add axios here to auth/login
    this.setState({ loading: true })
    axios.post("http://localhost:3001/auth/register", {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      verifyPassword: this.state.verifyPassword,
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
          
        // } else if (response.data.token) {
        //   let message = 'User has been created';
        //   Alert.alert(message);
        //   this.props.navigation.navigate('Home')
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
        <Header><Text>Sign Up Here</Text></Header>
        <Card>
          <CardItem style={styles.card}>
            <Content>
              <Form>
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
                    onChangeText={(text5) => (this.state.username = text5)} />
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
                <Item rounded last style={styles.input}>
                  <Input
                    type="password"
                    className="passwordText"
                    placeholder="Verify Password"
                    secureTextEntry={true}
                    value={this.state.verifyPassword}
                    onChangeText={(text3) => (this.state.verifyPassword = text3)} />
                </Item>
                <Item rounded style={styles.input}>
                  <Input
                    type="text"
                    className="Text"
                    placeholder="Date of Birth (MM-DD) - Year is optional"
                    value={this.state.dob}
                    onChangeText={(text4) => (this.state.dob = text4)} />
                </Item>
                <Button rounded dark style={styles.btn} onPress={this.handleSubmit}>
                  <Text style={styles.btnText}>Submit</Text>
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


export default withNavigation(Register)