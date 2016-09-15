/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import Root from './src/root'
import {
  AppRegistry,
  Platform
} from 'react-native'



AppRegistry.registerComponent('HCMobile', () => Root);


if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('HCMobile', {
    rootTag: app
  })
}








 /*
'use strict';
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Platform
} from 'react-native'

var SplashPage = require('./SplashPage');
var LoginPage = require('./LoginPage');
var MainPage = require('./MainPage');
var PersonPage = require('./PersonPage');
var TestTab = require('./TestTab');
var NoNavigatorPage = require('./NoNavigatorPage');


class HCMobile extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    }
    
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HCMobile', () => HCMobile);

if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('HCMobile', {
    rootTag: app
  })
}

*/