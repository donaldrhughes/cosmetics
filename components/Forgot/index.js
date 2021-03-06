//Forgot Screen
import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Content, Footer, Text, Form, Item, Input, Button, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import { uriBase } from '../../uri';
import axios from 'axios';


//Components
import Loading from '../common/Loading/';
import Foot from '../common/Foot';
import Head from '../common/Head';
import Styles from '../common/Styles';

class Forgot extends Component {
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
    <Head headText='Forget Your Password?'></Head>
        <Card>
          <CardItem style={Styles.card}>
            <Content>
              <Form>
                <Item rounded style={Styles.input}>
                  <Input
                    type="email"
                    className="loginText"
                    placeholder="Enter Your Email"
                    value={this.state.email}
                    onChangeText={(text) => (this.state.email = text)} />
                </Item>
                <Button rounded dark style={Styles.forgotBtn} onPress={this.handleSubmit}>
                  <Text style={Styles.btnText}>Submit</Text>
                </Button>
              </Form>
            </Content>
          </CardItem>
        </Card>
   <Foot />
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
