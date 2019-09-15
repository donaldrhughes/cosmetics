import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text} from 'native-base';



//Components
import Styles from '../Styles';

export default class Foot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bkImg: null
        };
      }

// componentWillMount(){
//    const bkImg = (`../../../images/` + 'new-bk2.png')
// }

    render() {
        // const bkImg3 = this.props.bkImg
        // this.bkImg = 'new-bk2.png';
      
        const bkImg2 = 'new-bk2.png';
        const bkImg = ('../../../images/' + bkImg2)
        return (
        <View>
        {/* <Text>{this.props.bkImg}</Text> */}
            
            <Image style={Styles.imgLogo} source={require(bkImg)} />
        </View>
        );
    }
}
