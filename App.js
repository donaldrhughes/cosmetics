//Main React Native Navigation Container
//===========================================
//Dependencies
import React, { Component } from 'react';
import { StyleSheet, YellowBox, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Port from "./port";

//Components
import Home from './components/Home';
import Splash from './components/Splash';
import Registration from './components/Registration';
import Forgot from './components/Forgot';
// import Reset from './components/Reset';


class HomeScreen extends Component {
  static navigationOptions = {
    header: null
    
  }
  render() {
    return (
      
      <Home>
        
      </Home>
      
    )}
}


class SplashScreen extends Component {
  static navigationOptions = {
    title: 'Splash',
    
    headerRight: <View />
  }
  render() {
    
    return (
      <Splash />
    );
  }
}

class RegisterScreen extends Component {
  static navigationOptions = {
    title: 'Registration',
    
    headerRight: <View />
  }
  render() {
    
    return (
      <Registration />
    );
  }
}

class ForgotScreen extends Component {
  static navigationOptions = {
    title: 'Forgot Password',
    
    headerRight: <View />
  }
  render() {
    
    return (
      <Forgot />
    );
  }
}

class ResetScreen extends Component {
  static navigationOptions = {
    title: 'Reset Password',
    
    headerRight: <View />
  }
  render() {
    
    return (
      // <Reset />
      <div></div>
    );
  }
}
//Styles
const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  }

});

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
    Splash: SplashScreen,
    Registration: RegisterScreen,
    Forgot: ForgotScreen,
    Reset: ResetScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions:{
      backgroundColor: Colors.blue
    }
  }
  
);

//Main App Container 
const AppContainer = createAppContainer(RootStack);


//Primary App Class
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

