import React, { Component } from 'react';
import { View, Text,TouchableHighlight,TouchableOpacity ,Navigator} from 'react-native';
import { Container, Content, Tabs } from 'native-base';


class DashBoard extends Component {

render() {
    return (

        <Container>
          <Content>
              <Text>DashBoard</Text>
          </Content>
      </Container>

      )

     

 }

}













/*
class DashBoard extends Component {

render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          initialRoute={{id: 'DashBoard', name: 'Index'}}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#3385ff'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }


  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'DashBoard') {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
      </View>
      );
    }

    
     }

 }



var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          DashBoard
        </Text>
      </TouchableOpacity>
    );
  }
};


*/

 

export {DashBoard}

