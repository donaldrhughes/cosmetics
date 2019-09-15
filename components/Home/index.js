//Home Screen
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from 'native-base';


//Components
import Login from '../common/Login';
import Loading from '../common/Loading';
import Head from '../common/Head';
import Logo from '../common/Logo';
import Foot from '../common/Foot';
import BodyImg from '../common/BodyImg';
// import Styles from '../common/Styles';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      headText: null,
      bkImg: null
    };
  }

  componentDidMount(){
    this.setState({
      loading: false,
      headText: 'Login',
      bkImg: 'new-bk2.png'
    })
  }

  render() {
    if (this.state.loading) return <Loading />;
    const headText = this.state.headText;
    const bkImg = this.state.bkImg;

    return (
      <Container>
        <StatusBar barStyle="default" />
        <Logo></Logo>
        <Head headText='Login'>
        </Head>
        <Login />
        <BodyImg bkImg='new-bk2.png'/>
        {/* <Foot /> */}
      </Container>
    );
  }
}

