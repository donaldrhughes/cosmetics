import React, { Component } from 'react';
import axios from 'axios';
import { Container, Content, Text } from 'native-base';

class Port extends Component {
    constructor(props) {
        super(props);
        this.state = {
            port: "",
            url: ""

        };

    }

    componentDidMount() {
        const uriBase = process.env.NODE_ENV === 'development'
            ? 'http://localhost:3001/'
            : 'https://protected-harbor-72820.herokuapp.com/'
        axios.get(uriBase + 'api/server/port')
            .then((result) => {

                const PORT = result.data.port;
                const url = result.data.url;
                this.setState({
                    port: PORT, url: url

                });
                this.props = PORT;

            });
    }

    render() {

        return (

                    // <Text>PORT:{this.state.port}</Text>
                    <Text>url:{this.state.url}</Text>

                    // <Text>url:{process.env.NODE_ENV}</Text>
            
        );
    }
}

export default Port;