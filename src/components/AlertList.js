import React, { Component } from 'react';
import { View, Text,TouchableHighlight ,TouchableOpacity, Navigator,Vibration,StyleSheet} from 'react-native';
var Sound = require('react-native-sound');

class AlertList extends Component {

 
 constructor(props)
 {
    super(props)
    var s="";
    this.playSound=this.playSound.bind(this)
    this.stopSound=this.stopSound.bind(this)

 }
  
 render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          initialRoute={{id: 'AlertList', name: 'Index'}}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#3385ff'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }


  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'AlertList') {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity>
            
          <Text> AlertList</Text>

        </TouchableOpacity>

         <TouchableHighlight
         style={styles.wrapper}
          onPress={() => Vibration.vibrate([0, 500, 200, 500])}>

          <View style={styles.button}>
            <Text>Vibrate</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.wrapper}
          onPress={() => Vibration.cancel()}>
          <View style={styles.button}>
            <Text>Cancel</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.wrapper}
          onPress={this.playSound}>
          <View style={styles.button}>
            <Text>Play sound</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.wrapper}
          onPress={ this.stopSound}>
          <View style={styles.button}>
            <Text>Stop sound</Text>
          </View>
        </TouchableHighlight>

      </View>
      );
    }

    
     }

    
    playSound() {
   
      s = new Sound('alert.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        alert('error' + e);
        console.log(e);
      } else {
        alert('duration'+ s.getDuration());
        s.play();
      }
    });
  }

  stopSound()
  {
     s.release();
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
          AlertList
        </Text>
      </TouchableOpacity>
    );
  }
};


var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});



export {AlertList}

