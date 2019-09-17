import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
export default class CharacterCounter extends React.Component {
constructor(props) {
   super(props);
   this.state = {
    value:''
    };
  }
render(){
   return(
      <View>
        
         <TextInput
            multiline = {true}
            numberOfLines = {6}
            maxLength = {130}
            placeholder='I am awesome because...'
            value={this.state.value}
            onChangeText={(value) => this.setState({value})}
              
            />
      
          
         <Text>
            Characters Left:{this.state.value.length}/130
         </Text>
      </View>
    )
  }
}