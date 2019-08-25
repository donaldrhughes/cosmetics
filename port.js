import React, { Component } from 'react';
import axios from 'axios';
import { Container, Content, Text } from 'native-base';

class Port extends Component {
    constructor(props) {
        super(props);
        this.state = {
            port: ""

        };

    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/server/port')
            .then((result) => {
                const PORT = result.data;
                console.log(PORT)
                this.setState({ port: PORT });
                this.props = PORT;
                console.log(this.props);
            });
    }

    render() {

        return (
          
                    <Text>PORT:{this.state.port}</Text>
               
        );
    }
}

export default Port;