



import React from 'react';
import { StyleSheet, View, Image  } from 'react-native';
import { AppRegistry, Button,Text,TextInput, Alert } from 'react-native-paper';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';

 
 

//export default class MyComponent extends React.Component {
export default class Header extends React.Component{

 constructor(){
   super()
   this.state = {
    text: ''
  }
}

  render(){
    return (
    	  
 		

    <PaperProvider>

 
	<View style={styles.container}>

   <Text>Creat controllers </Text>
</View>

      <TextInput label='Enter a text'  value={this.state.text}   onChangeText={text => this.setState({ text })}   />

      <Button icon="add-a-photo" mode="contained" onPress={() => console.log('This button has been triggered')}> Upload </Button>
 
<Image 
    source={{uri: 'https://media.licdn.com/dms/image/C4D0BAQF8LCplbpyiwQ/company-logo_400_400/0?e=1570060800&v=beta&t=UcarAgWpRqLrd9hft3Vb0xLtGYsKvDQnBeL-iSwGQX0'}} 
    style={{width: 400, height: 400}} 
/>





    </PaperProvider>


        

    );
  }
}



 
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});