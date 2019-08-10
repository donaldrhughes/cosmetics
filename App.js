import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, YellowBox, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Left, Body, Right, Content, Footer, Text, Button, Icon, Title } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';


//Components
import Login from './components/common/Login';

//Remove YellowBox warnings from Front-End
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);


class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Container>
      <StatusBar barStyle="dark-content" />
      
        <Header>
          <Body>
            <Image source={require('./images/JA-Logo-sml.png')} />
          </Body>
        </Header>

        <Login />
        <Footer>
          <Content>
            <Text style={styles.footer}>269 S Beverly Drive Suite 222, Beverly Hills, California 90212
                  </Text>
          </Content>
          <Content><Text>Phone: 1.714.423.5208 - Call Us Today!</Text></Content>
        </Footer>
      </Container>
    )}
}


class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
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
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const AppContainer = createAppContainer(RootStack);


export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

