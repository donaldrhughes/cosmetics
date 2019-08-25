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
        axios.get('http://localhost:3001/api/server/port')
            .then((result) => {
               
                const PORT = result.data.port;
                const url = result.data.url;
                this.setState({ port: PORT, url: url
                  
                });
                this.props = PORT;
                
            });
    }

    render() {

        return (
    
                    // <Text>PORT:{this.state.port}</Text>
                    <Text>url:{this.state.url}</Text>
                    // <Text>data:{this.data}</Text>
            
        );
    }
}

export default Port;