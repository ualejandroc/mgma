
import React, { Component ,Fragment } from 'react';
import { View,ImageBackground ,Dimensions,Image,TouchableOpacity,Linking  } from 'react-native';
import Dialog from "react-native-dialog";
import { AppRegistry, Button,TextInput, Alert ,withTheme,Text } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
 


//import Auth from './screens/Auth';
 


export default class Login extends Component {

 
 
  constructor(props) {
    super(props);
    this.state = {
      //default value of the date time
      date: '',
      email: '',
      password: '',
      error: '',
      loading: false

    };
  }
//timer
  componentDidMount() {
    var that = this;

    var date = new Date().getDate(); //Current Date
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const month = new Date();
    that.setState({
      //Setting the value of the date time
      date:
         monthNames[month.getMonth()]+ ',' + date  });
  }



   state = {
    dialogVisible: false
  };
 
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };


handleEnter

    handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
 
  handleEnter= () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.

    // ...Your logic
    alert("welcome, now you are going back")
    this.setState({ dialogVisible: false });
  };
 


  render() {
    const { email, password, error, loading } = this.state;

    return(
<Fragment>  

      <ImageBackground source={require('../images/back.png')} style={styles.imgBackground} >
      <View style={styles.container}>

          {/* defineing gaps with empty Text components*/}
          <Text>  </Text><Text>  </Text><Text>  </Text><Text>  </Text><Text>  </Text>


          <Text style={[{  color: "white", fontSize:0.05*Dimensions.get('window').width}]}>Tech that uplifts sports careers </Text>
           <Text>  </Text><Text>  </Text>

          <View style={styles.title}>
            <SocialIcon  title='          Sign up With Facebook                    '  button  type='facebook'  onPress={() => {Alert.alert("Mgma",'Try Mgma via Facebook');}} />
 
          <SocialIcon  title='           Sign up With linkedin                    '  button  type='linkedin'  onPress={() => {Alert.alert('Good choice');}} />
  

          <TouchableOpacity     style={styles.button    }  onPress={() => console.log('Pressed')} > 
          <Text style={[{  color: "white", fontSize:15 }]}>Sign up with Email</Text>
          </TouchableOpacity>
          <Text>  </Text>   
         
              <Text style={[{  color: "white", fontSize:0.05*Dimensions.get('window').width}]} >
                Already have an account?  
                <Text  style={{color: null}} onPress={this.showDialog}  > &nbsp;  Log in  </Text>


             </Text>

 


          <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title> WELCOME BACK {"\n"} Today is {this.state.date}
          </Dialog.Title>

          <Dialog.Input  value={email} placeholder="Email" onChangeText={email => this.setState({ email })}>

          </Dialog.Input>
          <Dialog.Input value={password} secureTextEntry={true} placeholder="Password" onChangeText={password => this.setState({ password})}>

          </Dialog.Input>
          <Dialog.Description>

          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
       
          <Dialog.Button label="Log in" onPress={this.handleEnter} />
        </Dialog.Container>

          <Text>  </Text>
         <Image  style={styles.stretch}   source={require('../images/logobeta.png')}      />

          </View>
  
      <View style={styles.modalback}>
         
         </View>


      </View>
      </ImageBackground>


</Fragment>  

    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
     
  },

  imgBackground: {
        width: null,
        height: '100%',
        flex: 1 ,
        alignItems: 'center',          
  },

  title:{
    color: 'blue',
    backgroundColor: "transparent",
    fontSize:8.05,
    alignItems:'center',


  },

  SignIn: {
    color:"red", 
    backgroundColor: 'transparent', 
    width:220,
    borderWidth: 1,
    borderColor: 'gray',
    color:"white",
    borderRadius:10,


  },

  stretch: {
    
  
    position: 'relative',
    height: "40%",
    flex: -1,
    resizeMode:"stretch",  

  },
 button: {

    backgroundColor:'transparent',
    color:"white",
    borderRadius:40,
    borderWidth: 1,
    borderColor: 'gray',
    width:270,
    height: "11%",
    alignItems:'center',
    justifyContent: 'center',
 
  },

  modalback: {
    backgroundColor: "white",

  },


};







