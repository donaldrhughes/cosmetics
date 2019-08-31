import React, { Component } from 'react';
import { View, StyleSheet, NativeModules } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Content, Footer, Text, Form, Item, Input, Button, Card, CardItem } from 'native-base';
import stripe from 'tipsi-stripe';
// import { withNavigation } from 'react-navigation';
// import axios from 'axios';

//Components
import Loading from '../common/Loading';




class NewCardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            product: null,
            cart: null,
            email: null,
            loading: true,
            id: null

        };
    }

   
    componentDidMount() {
        stripe.init({
            publishableKey: "pk_test_ajvqfwv9ZGSQLefYRxu4grv800W7Req0wb",
          });
        this.setState({
            loading: false,
            user: null,
            product: null,
            cart: null,
            email: null,
            id: null

        })
        const options = {
            smsAutofillDisabled: true,
            requiredBillingAddressFields: 'zip', // or 'full'
            theme
          };
          stripe.paymentRequestWithCardForm(options)
      .then(response => {
        // Get the token from the response, and send to your server
      })
      .catch(error => {
        // Handle error
      });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        axios.post(uriBase + 'api/stripe', {
            user: this.state.user,
            product: this.state.product,
            cart: this.state.cart,
            email: this.state.email,
            id: this.state.id

        })
            .then((response) => {
                this.setState({ loading: false, email: null, password: null, verifyPassword: null, dob: null, username: null });
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
            <View />
            // <Container>
            //     <Card>
            //         <Form>
            //             <CardItem><Text> Stripe </Text></CardItem>
            //             <Item rounded style={styles.input}>
            //                 <Input
            //                     type="email"
            //                     className="loginText"
            //                     placeholder="Email"
            //                     value={this.state.email}
            //                     onChangeText={(text) => (this.state.email = text)} />
            //             </Item>
            //             <Item rounded style={styles.input}>
            //                 <Input
            //                     type="text"
            //                     className="userText"
            //                     placeholder="Username"
            //                     value={this.state.username}
            //                     onChangeText={(text2) => (this.state.username = text2)} />
            //             </Item>
            //             <CardItem><Input><Text>CardItem Input</Text></Input></CardItem>
            //             <CardItem><Button><Text>Submit</Text></Button></CardItem>
            //         </Form>
            //     </Card>

            // </Container>
        );
    }
}
const theme = {
    primaryBackgroundColor: Colors.dark,
    secondaryBackgroundColor: Colors.light,
    primaryForegroundColor: Colors.white,
    secondaryForegroundColor: Colors.white,
    accentColor: Colors.dark
    // ,errorColor: 
  };

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
