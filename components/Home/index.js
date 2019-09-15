//Home Screen
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Thumbnail, Container, Header, Body, Content, Footer, Text } from 'native-base';


//Components
import Login from '../common/Login';
import Styles from '../common/Styles';
import Loading from '../common/Loading';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.setState({
      loading: false
    })
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <Container>
        <StatusBar barStyle="default" />
        <Header style={Styles.dark}>
          <Body style={Styles.dark}>
            <Image style={Styles.imgLogo} source={require('../../images/JA-Logo-sml-light.png')} />

          </Body>
        </Header>
        <Header style={Styles.dark}>
        <Body style={Styles.dark}>
        <Content>
        <Text style={Styles.header}>Login</Text>
        </Content>
        </Body>
        </Header>
        <Login />
        {/* <Text style={Styles.dark}>Test</Text> */}
        <View style={{flex: 1}}>
        <View><Content>
          {/* <Text>Square Thumbnail</Text>
          <Thumbnail square small source={{uri: uri}} />
          <Thumbnail square source={{uri: uri}} /> */}
          {/* <Thumbnail square large source={{uri: uri}} /> */}
          <Text>Circular Thumbnail</Text>
          
          {/* <Thumbnail small source={{uri: uri}} />
          <Thumbnail source={{uri: uri}} /> */}
          {/* <Thumbnail large source={{uri: uri}} /> */}
        </Content><Image style={Styles.imgLogo} source={require('../../images/new-bk2.png')} /></View>
        <View style={Styles.foot}>
          <Content>
            <Text style={Styles.footer}>269 S Beverly Drive Suite 222, Beverly Hills, California 90212
                    </Text>
          </Content>
          <Content>
          <Text style={Styles.footer}>Phone: 1.714.423.5208 - Call Us Today!</Text>
          </Content>
          </View>
          </View>
      </Container>
    );
  }
}

