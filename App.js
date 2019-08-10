//Main React Native Navigation Container
//===========================================
//Dependencies
import React, { Component } from 'react';
import { StyleSheet, YellowBox } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';


//Components
import Home from './components/Home';
import Splash from './components/Splash';


class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Home />
    )}
}


class SplashScreen extends Component {
  render() {
    return (
      <Splash />
    );
  }
}

//Config
//Remove YellowBox warnings from Front-End
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

//Root Stack Routes
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Splash: SplashScreen
  },
  {
    initialRouteName: 'Home',
  }
);

//Main Styles
const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  }

});

//Main App Container 
const AppContainer = createAppContainer(RootStack);

//Primary App Class
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

