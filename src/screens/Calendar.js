//import { Calendar } from 'react-native-calendars';
import { View, StyleSheet, TouchableOpacity, FlatList ,Image, ListView,TouchableHighlight, SafeAreaView} from 'react-native';
import React, { Component ,Fragment } from 'react';
import {Calendar, LocaleConfig, CalendarList, Agenda} from 'react-native-calendars';
import { AppRegistry, Button,TextInput, Alert ,withTheme,Text ,IconButton} from 'react-native-paper';
//import RNCalendarEvents from 'react-native-calendar-events';
import { List, ListItem, Avatar  } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/FontAwesome';
 

//npm install --save react-native-calendar-events should be used here for our convinient
  

export default class Calendars extends  Component {

  
  constructor(props) {
    super(props);
 
    this.state = {
      date: '',

      data: [
        {  name: 'Warm up at the gate', date:"2016-05-15"  },
        { name: 'Testing phase 2 ', date:"2017-05-15" },
        { name: 'Testing phase 3 bla bla bla bla balabla', date:"2018-05-15" },
        { name: 'Phase 4', date:"2019-05-15" },
 
      ]
    }
  }
//timing setup
  componentDidMount() {

    var that = this;
    var full_date = new Date().getDate(); //Current Date
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    var year = new Date().getFullYear(); //Current Year
    const month = new Date();


    that.setState({
      //Setting the value of the date time
      full_date:
         monthNames[month.getMonth()]+ '  ' + full_date+ ', ' +  year });
  }


  render() {
    const { data,dat } = this.state;
    
 
    const weekdays=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var today=weekdays[new Date().getDay()]
   
    
    return (
<Fragment>  

<View style={styles.cal}>

 

  
 
<View style={{flexDirection: 'row', }}> 
 
 <Avatar   size="large"
 
 rounded
  source={ require('../images/Day.png') }
  onPress={() => console.log('My profile pic')}
/>
    <View style={{flexDirection: 'column',flexWrap: 'wrap',width: 200,  }}> 
    
    <Text style={{fontSize : 35, color:"white",fontWeight: "bold",alignSelf: 'flex-end'}}>{today}</Text>
    <Text style={{color:"white",alignSelf: 'flex-end' , }}>{this.state.full_date}</Text>
    </View>

</View>
 
<Calendar theme={{
   calendarBackground: '#03A9F4',
    'stylesheet.day.basic':{
      'base':{
         
        height:20
      }
    }
}}

  markedDates={{
    '2019-07-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2019-07-17': {marked: true},
    '2019-07-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2019-07-19': {disabled: true, disableTouchEvent: true}
  }}

  // Initially visible month. Default = Date()
  current={'2019-07-20'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2018-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2020-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => (<Arrow />)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={true}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
/>
  <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center',}}> 
      <Button  style={{backgroundColor:"yellow"}} onPress={() => { alert('working plan') }}>
      <Text> Work Plan</Text>
      </Button>

      <Button style={{backgroundColor:"#FCF3CF"}} onPress={() => { alert('joting down..') }}>
      <Text> Notes</Text>
      </Button>
      
  </View>
  
</View>


      <View style={styles.container}>

        
        <View style={styles.heading}>
           
 
        </View>

       
        <FlatList    data={data}
        
     
          renderItem={({ item }) => 
         
        
          
           
          <View style={styles.list}>


          <View style={{flexDirection: 'row',flexWrap: 'wrap'}}>        

          <View style={{ maxWidth:  180,}}>  
           <Text > {item.name}  </Text> 
          </View>
           
            <View style={{    position: 'absolute',   left:"70%",}}>
           
            <Button style={{backgroundColor:"#03A9F4", height:"90%"}}> <Text>Done</Text></Button>
            

            </View>     
          </View>
 

 <View style={{alignSelf: 'flex-end'}}>
          <DatePicker
        style={{width: 120,  }}
        date={item.date} 
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        //minDate={this.state.dateFrom}
        //maxDate={this.getCurrentDate()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {           
            width:0,
            height:0,
          },
          dateInput: {
            marginLeft: 36,
            borderWidth: 0 ,
            
          } 
        }}
        onDateChange=   {date => this.setState({ date })}
      />
</View>
        
          </View>}
          
        />
 
        <TouchableOpacity onPress={() => alert('Need more items eh?')} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
        
      </View>
              


 
 <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between',}}>




<TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={{height:40, width:40}}
        source={require('../images/settings.png')}
      />
    </TouchableOpacity>

    <TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={{height:40, width:40}}
        source={require('../images/calendar-icon-png-mac-14.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={{height:40, width:40}}
        source={require('../images/notification.png')}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={this._onPressButton}>
      <Image
        style={{height:40, width:40}}
        source={require('../images/send.jpg')}
      />
    </TouchableOpacity>

    </View>
  </Fragment>  
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    
  
  },
 
  cal: {
    backgroundColor: '#03A9F4',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
 
  list: {
    
    borderRadius:10,
    margin: 5,
    backgroundColor: 'white',
    width: 260,
    height:70,
    justifyContent: 'space-around',
    paddingLeft: 10,
    
    elevation: 1,
    flex: 1,
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },

  absoluteView: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
},

buttonStyle: {
  flex: 1,
  backgroundColor: 'white',
  marginLeft: 5,
  marginRight: 5,
  borderRadius: 50
},

});
