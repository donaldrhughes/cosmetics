import React, { Component } from 'react';
// import { Modal, Text } from 'react-native';
import { Spinner } from 'native-base';

export default class Loading extends Component {


    render() {
        return (
            // <Modal
            //     animationType="slide"
            //     transparent={false}
            //     visible={true}>

            //     <Text>Loading...</Text>
            //     <Spinner />
            // </Modal>
            <Spinner />
        );
    }
}
