import React, { Component } from 'react';
import { View } from 'react-native';
import { Content, Text } from 'native-base';


//Components
import Styles from '../Styles';

export default class Foot extends Component {


    render() {
        return (

<View style={Styles.foot}>
          <Content>
            <Text style={Styles.footer}>269 S Beverly Drive Suite 222, Beverly Hills, California 90212
                    </Text>
          </Content>
          <Content>
          <Text style={Styles.footer}>Phone: 1.714.423.5208 - Call Us Today!</Text>
          </Content>
          </View>


        );
    }
}
