import React, { Component } from 'react';
import { View, Image } from 'react-native';


//Components
import Styles from '../Styles';

export default class Foot extends Component {


    render() {
        return (

<View>
        <Image style={Styles.imgLogo} source={require('../../../images/new-bk2.png')} />
        </View>


        );
    }
}
