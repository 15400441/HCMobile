'use strict';
import React, { Component } from 'react';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

import  {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';
import {  Icon , InputGroup, Input} from 'native-base';

class LoginPage extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      username: '',
      password: ''
    }
  }
  
  login()
  {
     this.props.navigator.push(
      {
        id:"MainPage"
      }
      )
  }
  
  render() {
    return (
        <View style={styles.container}>
             <Image style={styles.bg} source={{uri: 'http://i.imgur.com/xlQ56UK.jpg'}} />
            <View style={styles.header}>
                <Image style={styles.mark} source={{uri: 'http://i.imgur.com/da4G0Io.png'}} />
            </View>
            <View >
                
                <View>
                     <InputGroup>
                            
                            <Input placeholder='EMAIL' />
                    </InputGroup>
                </View>
               
                <View>
                  <InputGroup>
                   
                    <Input placeholder='PASSWORD' secureTextEntry={true}/>
                 </InputGroup>
                </View>

               
                <View style={styles.forgotContainer}>
                    <Text style={styles.greyFont}>Forgot Password</Text>
                </View>
            </View>
            <TouchableHighlight onPress={this.login.bind(this)}>
              <View style={styles.signin}>
                  <Text style={styles.whiteFont}>Sign In</Text>
              </View>
             </TouchableHighlight>

            <View style={styles.signup}>
                <TouchableHighlight>
                  <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
                </TouchableHighlight>
                
            </View>
        </View>
    );
  }
};

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#3385ff',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
})


module.exports = LoginPage;