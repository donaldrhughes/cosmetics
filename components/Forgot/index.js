//Home Screen
import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Left, Body, Right, Content, Footer, Text, Form, Item, Input, Button, Card, CardItem } from 'native-base';
import { withNavigation } from 'react-navigation';
import axios from 'axios';


//Components
import Loading from '../common/Loading/';

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
    // hostString = "http://localhost";
    // portString = "3001";
    
    //add axios here to auth/login
    this.setState({ loading: true })
    // axios.post(hostString + ":" + portString + "/auth/register", {
      axios.post("https://protected-harbor-72820.herokuapp.com/auth/forgot_password", {
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
        <Header><Text>Forgot Password</Text></Header>
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
      textAlignVertical: "center",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 60
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
