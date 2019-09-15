import React, { Component } from 'react';
import { Image } from 'react-native';
import { Header, Body} from 'native-base';


//Components
import Styles from '../Styles';

export default class Head extends Component {


    render() {
        return (
<Header style={Styles.dark}>
  <Body style={Styles.dark}>
          <Image style={Styles.imgLogo} source={require('../../../images/JA-Logo-sml-light.png')} />
      </Body>
      </Header>
        );
    }
}
