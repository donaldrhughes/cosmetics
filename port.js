import React, { Component } from 'react';
import axios from 'axios';
import { Text } from 'native-base';
import { uriBase } from './uri';

class Port extends Component {
    constructor(props) {
        super(props);
        this.state = {
            port: "",
            url: ""

        };

    }

    componentDidMount() {
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
                    // <Text>{uriBase}</Text>
                    // <Text>url:{process.env.NODE_ENV}</Text>
            
        );
    }
}

export default Port;