import React, { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Styles = StyleSheet.create({

    body: {
        fontSize: 18,
        fontFamily: 'source-code-pro'
      
    },
    footer: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        padding: 4,
        textAlign: 'center',
        marginBottom: '10%'
    },
    header: {
        color: '#ddd',
        backgroundColor: 'black',
        fontSize: 24,
        fontWeight: '500',
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'center'
       
    },
    dark: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 32
    },
    welcome: {
        textAlign: 'center'
    },
    // imgLogo: {
    //     margin: 0
    // },
    card: {
        flex: 0,
        backgroundColor: Colors.black,
        color: Colors.light
      },
      input: {
        margin: 6,
        backgroundColor: 'white'
      },
      btn: {
        marginLeft: 64,
        marginRight: 64,
        marginTop: 16,
        backgroundColor: 'rgb(26, 26, 152)'
      },
      btnHover:{
        backgroundColor: 'green',
        color:'black'
    },
      btnText: {
        marginLeft: 60
      },
      btnForgotText: {
        marginLeft: 35
      },
      loginText: {
        color: Colors.dark
      },
      regBtn: {
        marginLeft: 64,
        marginRight: 64,
        marginTop: 16,
        backgroundColor: 'rgb(91, 8, 91)'
      },
      forgotBtn: {
        marginLeft: 64,
        marginRight: 64,
        marginTop: 16,
        backgroundColor: 'black'
      },
      card: {
        backgroundColor: '#ddd'
      },
      foot: {
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0
      },
      mid: {
        // textAlignVertical: 'auto'
      }



});

export default Styles;
