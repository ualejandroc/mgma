
import React, { Component } from 'react';
import { View } from 'react-native';
import { Login, Registration } from '../components';
import { AppRegistry, Button,Text,TextInput, Alert } from 'react-native-paper';


//import Auth from './screens/Auth';

export default class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLogin: false
    };
        this.whichForm = this.whichForm.bind(this);
        this.authSwitch = this.authSwitch.bind(this);
  }

  authSwitch() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }
 
  whichForm() {
    if(!this.state.showLogin){
      return(
        <Registration authSwitch={this.authSwitch}/>
      );
    } else {
      return(
        <Login authSwitch={this.authSwitch}/>
      );
    }
  }



  render() {
    return(
      <View style={styles.container}>


 
  {this.whichForm()}

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
};

 