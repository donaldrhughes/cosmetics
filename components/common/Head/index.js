import React, { Component } from 'react';
import { Header, Body, Text } from 'native-base';


//Components
import Styles from '../Styles';

export default class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headText: null
        };
      }
componentDidMount(){
    this.setState({
        headText: this.headText
    })
}

    render() {
        this.headText = this.props.headText;
        return (
        <Header style={Styles.dark}>
        <Body >
            <Text style={Styles.header}>{this.state.headText}</Text>
        </Body>
        </Header>
        );
    }
}
