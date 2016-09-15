import React, { Component } from 'react';
import { View, Modal,Text,TouchableHighlight,TouchableOpacity ,Navigator,StyleSheet,WebView} from 'react-native';
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers
  
} from 'react-native-popup-menu';
import { Container, Header, Title, Button, Icon ,Content, List, ListItem, InputGroup, Input,Col, Row, Grid} from 'native-base';
import {Scene, Router} from 'react-native-router-flux';


class Manage extends Component {

constructor(props)
{
  super(props);
  this.state = {menuShow: false,
                brokersShow:true,
                buttonContent:"Add Brokers",
                brokers:[]};
}

clickMenu()
{
  this.setState({menuShow:!this.state.menuShow})
}


render() {
    
      return (

           
            <Container>
               
               <Header>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>
                  
                  <Title>Manage Broker</Title>
                  
                  <Button transparent onPress={this.clickMenu.bind(this)}>
                      <Icon name='ios-menu' />
                  </Button>
              </Header>
  

              <Content>
                     
                       
                  <MyMenu  show={this.state.menuShow} />

                  <Brokers />

                  <EditBrokers />   
                  
                 
                  
                 
                   
                 
              </Content>

                
            </Container>
        );

  }


}








class Brokers extends Component{
  constructor(props)
  {
    super(props)
    this.state={brokers:[]}
  }

  componentDidMount()
{
    this.getBrokers();
}

getBrokers()
{
  console.log("getBrokers")

  fetch("http://192.168.1.130:3000/api/brokers", {method: "GET"})
      .then((response) => response.json())
      .then((responseData) => {
          console.log(responseData);
          this.setState({'brokers':responseData})
      })
      .done();
}

 

  render()
  {
    

    var brokers=this.state.brokers.map(function(b)
    {
      return(
      <ListItem >
          <Text>{b.name}</Text>
      </ListItem>  
      )
    });

    return(
      
       <List>
             
             <ListItem itemDivider>
                <Text>All Brokers</Text>
            </ListItem>  
            {brokers}
      </List>
   
    )
  

  }
}




class EditBrokers extends Component{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    
    return(
    
     <List>
        <ListItem>
            <InputGroup>
                <Icon name='ios-person' />
                <Input placeholder='EMAIL' />
            </InputGroup>
        </ListItem>
    
        <ListItem>
            <InputGroup>
                <Icon name='ios-unlock' />
                <Input placeholder='PASSWORD' secureTextEntry={true}/>
            </InputGroup>
        </ListItem>
    
        <ListItem>
            <InputGroup >
                <Input inlineLabel label='NAME' placeholder='John Doe' />
            </InputGroup>
        </ListItem>
    
        <ListItem>
            <InputGroup >
                <Input stackedLabel label='Address Line 1' placeholder='Address' />
            </InputGroup>
        </ListItem>
    </List>
    
    
    )
 

  }


}






class MyMenu extends Component{

  constructor(props)
  {
    super(props);
  }

  render()
  {
        if(true==this.props.show)
        {
        return(

         <Grid>
              <Col>
              </Col>
              <Col>
                <List>
                        <ListItem>
                            <Text>item1</Text>
                        </ListItem>
                        <ListItem>
                            <Text>item1</Text>
                        </ListItem>
                        <ListItem>
                            <Text>item1</Text>
                        </ListItem>
                </List>
              </Col>
      
        </Grid>   
        )
      }

      else{
        return null;
      }

  }
}



export {Manage}


/**
 menu, add it when need
 
<MenuContext style={{flexDirection: 'row-reverse', flex: .1, padding:20}}>
            <Text></Text>
            <Menu renderer={renderers.ContextMenu}>
              <MenuTrigger text='+' />
              <MenuOptions>
                <MenuOption onSelect={() => alert('option one')} text='One' />
                <MenuOption onSelect={() => alert('option two')} text='Two' />
              </MenuOptions>
            </Menu>
</MenuContext>

**/





/**class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {modalVisible: this.props.modalVisible};
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 50}}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
**/