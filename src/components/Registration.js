import React, { Component, Fragment } from 'react';
import { View, Text , ImageBackground ,Image,Alert , StyleSheet, TextInput,TouchableOpacity, } from 'react-native';
import {  TextLink,  Loading,} from './common';
import { Appbar, Provider as PaperProvider,Button ,Input, } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements'
import { FacebookLoginButton } from "react-social-login-buttons";


 
//import AppBar from '@material-ui/core/AppBar';

class Registration extends Component {

   _goBack = () => console.log('Went back');

 _onPressLearnMore() {
  Alert.alert('on Press! lol');
 }


  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      error: '',
      loading: false
    };
  }

  render() {
    const { email, password, password_confirmation, error, loading } = this.state;
    const {  form, section, errorTextStyle } = styles;

    return (

    <Fragment>  
    <PaperProvider>

{/* This portion defines the top-most background */}
    <Image   style={{ width: null, height: "2%" , position: 'relative',   resizeMode:"cover",   }} 
 source={require('../images/back.png' )} 

 />


<Image   style={styles.stretch}   source={require('../images/logobeta.jpg')}      />
 
    <ImageBackground source={require('../images/back.png')} style={styles.imgBackground} >


                
{/* EMail pane*/}
 <View style={form}>       
  <View style={section}>      
 <TextInput
  style={{ color : "white", padding: 5, backgroundColor: 'transparent',height: 35, alignItems: 'center',width: "100%", borderColor: 'gray', 
  borderWidth: 2, borderRadius: 10,  marginBottom: 10, fontSize: 12 }}
  
  placeholder=" Email"
  value={email}
  onChangeText={email => this.setState({ email })}
 
/>
</View>

{/* Password*/}
  <View style={section}>      
 <TextInput
  style={{ color : "white",padding: 5, backgroundColor: 'transparent',height: 35, alignItems: 'center',width: "100%", borderColor: 'gray', 
  borderWidth: 2, borderRadius: 10,  marginBottom: 10, fontSize: 12 }}

  secureTextEntry={true}
  onChangeText={password => this.setState({ password })}
  value={password}
  placeholder=" Password"
 
/>
</View>

{/* Password confirmation*/}
  <View style={section}>      
 <TextInput
 secureTextEntry={true}
  style={{ color : "white",  padding: 5, backgroundColor: 'transparent',height: 35, alignItems: 'center',width: "100%", borderColor: 'gray', 
  borderWidth: 2, borderRadius: 10,  marginBottom: 10, fontSize: 12 }}
  
  placeholder=" Confirm Password"
  value={password_confirmation}
  onChangeText={password_confirmation => this.setState({ password_confirmation })}

 
/>

</View>



    {!loading ?
         <Button color="#FFF8DC" style={styles.register}  borderColor= 'gray'   onPress={() => console.log('Pressed')}>
    <Text> Sign up</Text>
  </Button>
                   :
    <Loading size={'large'} />}

  <Text style={errorTextStyle}>   {error}     </Text>


</View>
          <SocialIcon  title='          Sign up With Facebook                    '  button  type='facebook'  onPress={() => {Alert.alert("Mgma",'Try Mgma via Facebook');}} />
 
          <SocialIcon  title='           Sign up With linkedin                    '  button  type='linkedin'  onPress={() => {Alert.alert('Good choice');}} />
 
 
         
</ImageBackground>
 
 </PaperProvider> 
 
        </Fragment>

    );
  }
}

  

 
const styles = {
  form: {
    
    alignItems: 'center',
    width: '100%',
   
    borderColor: '#ddd',
  },

  

  section: {
   
    flexDirection: 'row',
    justifyContent: 'space-between',
 
    backgroundColor: 'transparent',
    borderBottomLeftRadius:70,    
    width: 300, 
    overflow: 'hidden',
  
 
 

       
       
  },

  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  },


  imgBackground: {
        width: 420,
        height: '150%',
        flex: 1 ,
        alignItems: 'center',

              
  },

  stretch: {
    
    width: null,
    position: 'relative',
    height: "40%",
    flex: -1,
    resizeMode:"stretch",  

  },

  register: {
    color:"red", 
    backgroundColor: 'transparent', 
    width:220,
    borderWidth: 1,
    borderColor: 'gray',
    color:"white",
    borderRadius:10,


},

 button: {

    backgroundColor:'transparent',
    color:"white",
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'gray',
    height: "10%",
 
  },

 TextStyle:{
      color:'#fff',
      textAlign:'center',
  },


};

export { Registration };
