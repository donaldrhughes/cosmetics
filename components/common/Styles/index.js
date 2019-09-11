import React, {
    StyleSheet
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Styles = StyleSheet.create({

    body: {
        fontSize: 18,
        fontFamily: 'source-code-pro'
      
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'center',
    },
    header: {
        color: Colors.light,
        backgroundColor: 'grey',
        fontSize: 24,
        fontWeight: '500',
        fontFamily: 'Arial',
        // padding: 4,
        // paddingRight: 12,
        textAlign: 'center'
    },
    dark: {
        backgroundColor: 'grey',
       
        color: 'orange',
        fontSize: 32
    },
    welcome: {
        textAlign: 'center'
    },
    imgLogo: {
        // width: '100%',
        margin: 0
    },
    card: {
        flex: 0,
        backgroundColor: Colors.black,
        color: Colors.light
      },
      input: {
        margin: 6,
        backgroundColor: Colors.light
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
        backgroundColor: 'rgb(91, 8, 91)'
      }
    
});

export default Styles;
