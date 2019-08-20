//Home Screen
import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Left, Body, Right, Content, Footer, Text, Form, Item, Input, Button, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import axios from 'axios';


//Components
import Loading from '../common/Loading';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      loading: true,
      password: null,
      verifyPassword: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: false,
      password: null,
      verifyPassword: null

    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //add axios here to auth/login
    this.setState({ loading: true })
    // const localString = "http://localhost:3001/auth/reset_password";
    // axios.post(localString, {
    const hostString = "https://protected-harbor-72820.herokuapp.com/auth/reset_password";
    axios.post(hostString, {
      password: this.state.password,
      verifyPassword: this.state.verifyPassword,


    })
      .then((response) => {
        this.setState({ loading: false, email: null });
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
        <StatusBar barStyle="dark-content" />
        <Header><Text>Reset Password</Text></Header>
        <Card>
          <CardItem style={styles.card}>
            <Content>
              <Form>
                
                  <Item rounded style={styles.input}>
                    <Input
                      type="password"
                      className="passwordText"
                      placeholder="Enter New Password"
                      secureTextEntry={true}
                      value={this.state.password}
                      onChangeText={(text) => (this.state.password = text)} />
                  </Item>
                  <Item rounded style={styles.input}>
                    <Input
                      type="password"
                      className="passwordText"
                      placeholder="Verify Password"
                      secureTextEntry={true}
                      value={this.state.verifyPassword}
                      onChangeText={(text2) => (this.state.verifyPassword = text2)} />
                  </Item>
                  <Button rounded dark style={styles.btn} onPress={this.handleSubmit}>
                    <Text style={styles.btnText}>Submit</Text>
                  </Button>
              
              </Form>
            </Content>
          </CardItem>
        </Card>
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
  btn: {
    marginLeft: 64,
    marginRight: 64,
    marginTop: 16
  },
  btnText: {
    marginLeft: 60
  },
  card: {
    flex: 0,
    backgroundColor: Colors.dark,
    color: Colors.light
  },
  input: {
    margin: 6,
    backgroundColor: Colors.light
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  }
});

export default withNavigation(Forgot)
