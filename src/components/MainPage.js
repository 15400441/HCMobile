'use strict';
import React, { Component } from 'react';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import {DashBoard} from './DashBoard';
import {AlertList} from './AlertList';
import {History} from './History';
import ManageContainer from '../containers/ManageContainer';
//import { Container, Content, Tabs } from 'native-base';
import {
 
  StyleSheet,
  Text,
  View,
   Navigator,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';



 class MainPage extends Component {

  constructor(props)
  {
     super(props);
  }
 

  render() {
     return (

             
         <ScrollableTabView tabBarPosition="bottom" tabBarBackgroundColor="#3385ff" tabBarInactiveTextColor="white" >
                 <DashBoard tabLabel="DashBoard"/>  
                 <AlertList tabLabel="Alert List"/>  
                 <History tabLabel="History"/>  
                 <ManageContainer tabLabel="Manage"/>  
         </ScrollableTabView>
 


       
           
        
    );
  }
}

/*
              <Tabs tabBarPosition="bottom" tabBarBackgroundColor="#3385ff">
                  <DashBoard tabLabel="DashBoard" />   
                  <Manage tabLabel="Manage"/> 
              </Tabs>
 */
 

export {MainPage};