



import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { AppRegistry, Button, Text, TextInput, Alert } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


import App from './src/App';
import Auth from './src/screens/Auth';
import Login from './src/screens/Login';

import Exercises from './src/screens/Exercises';
import Training from './src/screens/Training';
import Config from './src/screens/Config';

import ConfigExec from './src/screens/ConfigExec';


import Contacts from './src/screens/Contacts';


import CharacterCounter from './src/screens/textCount';




// import Calendar from './src/screens/Calendar';
//export default class MyComponent extends React.Component {
export default class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      text: '',
      jwt: '',
    }
  }

  render() {
    /*
              if (!this.state.jwt) {
         return (    <Auth />   );
   
       } 
       else if (this.state.jwt) {
         return (
           <LoggedIn />
         );
       }
   */

    return <Contacts />;

    


  }
}


