import React, { Component, Fragment } from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  SectionList,
  FlatList,
  Picker,
  Platform,
  Switch,
  ScrollView,
} from 'react-native';
import Dialog from 'react-native-dialog';
import {
  AppRegistry,
  Button,
  TextInput,
  Alert,
  withTheme,
  Text,
} from 'react-native-paper';
import { FAB, Portal, Provider } from 'react-native-paper';
import { SocialIcon, CheckBox, ButtonGroup } from 'react-native-elements';
import { List, ListItem, Avatar } from 'react-native-elements';

import DatePicker from 'react-native-datepicker';
import IOSPicker from 'react-native-ios-picker';

export default class ConfigExec extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.state = {
      items: [
        { id: 0, label: 'Attached VIdeo', selected: true, value: 'red' },
        {
          id: 1,
          label: 'TImer',
          selected: false,
          value: 'orange',
        },
        { id: 2, label: 'Counter', selected: false, value: 'blue' },
      ],

      favSport: undefined,
      dataPicker: [
        { name: 'SanPyaeLin', code: '22' },
        { name: 'Jhon', code: '1' },
        { name: 'Marry', code: '2' },
      ],
      savedExercise: 'Saved Exercises',
      selectedValue: 'Saved',
      selectedIndex: 0,
      selectedUnit: 0,
      selectedUnit1: 1,
      //
      loaded: false,
      squad: [
        { id: 0, label: 'squad1', value: 'squad', selected: false },
        { id: 1, label: 'squad2', value: 'squad2', selected: false },
      ],

      recent: [
        { id: 0, label: 'first', value: 'first', selected: false },
        { id: 1, label: 'second', value: 'second', selected: true },
        { id: 2, label: 'third', value: 'third', selected: false },
      ],

      saveCheck: true,

      value: '',
      saveRoutine: false,
    };
    this.updateUnit = this.updateUnit.bind(this);
    this.updateUnit1 = this.updateUnit1.bind(this);
  }

  /**
   * Renders header  of <SectionList>
   * @param  {object} section  [data for rendering]
   */
  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.listHeader}>
        <View style={{ flex: 1, ...styles.listHeader }}>
          <Text style={styles.listHeaderText}>{section.title}</Text>
        </View>
      </View>
    );
  };

  /**
    tate changes according to switch
      which will result in re-render the text
 */
  toggleSwitch = (value, item) => {
    let items = this.state.items;
    items[item.id].selected = !item.selected;
    this.setState({ items });
  };

  /**
   * Renders body of each section of <SectionList>
   * @param  {object} section  [data for rendering]
   */
  renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingLeft: 40,
        }}>
        <Switch
          style={{ marginTop: 0 }}
          onChange={value => this.toggleSwitch(value, item)}
          value={this.state.items[item.id].selected}
        />
        <Text style={styles.item}>{item.label}</Text>
      </View>
    );
  };

  /**
   * Update state of buttonGroup
   * @param  {object} selectedIndex  [data for updating]
   */
  updateUnit(selectedUnit) {
    this.setState({ selectedUnit });
  }

  /**
   * Update state of buttonGroup
   * @param  {object} selectedIndex  [data for updating]
   */
  updateUnit1(selectedUnit1) {
    this.setState({ selectedUnit1 });
  }

  render() {
    //test data for <SectionList>
    let section = [
      {
        id: 0,
        title: res.formating,
        data: this.state.items,
      },
    ];

    const unitButtons = ['Repeat', 'Kgs', 'Mtrs'];
    const unitButtons2 = ['Pulse', 'Intensity', 'Equipment'];
    const { selectedUnit } = this.state;
    const { selectedUnit1 } = this.state;
    const { selectedIndex } = this.state;

    return (
      <Fragment
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        {/* Top bar */}

        <View style={styles.topBar}>
          <Avatar
            size="large"
            rounded
            source={require('../images/Day.png')}
            onPress={() => console.log('')}
          />
          <View style={styles.topBarContainer}>
            <Text style={styles.topBarText}>{res.exercisesEdit}</Text>
          </View>
        </View>

        {/* Main Panel  */}
        <ScrollView style={styles.main}>
          {/* Techique Panel  */}
          <View style={styles.mainHeader}>
            <View style={styles.listHeader}>
              <Image
                style={styles.listIcon}
                source={require('../../src/images/arrow-down-1.png')}
              />
              <View style={{ flex: 3, ...styles.sectionHeader }}>
                <Text style={styles.sectionHeaderText}>{res.nameEdit}</Text>
              </View>
            </View>
          </View>

          {/**   text box */}

          <View style={styles.textBox}>
            <Text style={styles.squadHeaderText}>{res.description}</Text>

            <TextInput
              style={{ marginTop: 15 }}
              multiline={true}
              numberOfLines={6}
              maxLength={130}
              placeholder="I am awesome because..."
              value={this.state.value}
              onChangeText={value => this.setState({ value })}
            />

            <View style={{}}>
              <Text> {this.state.value.length}/130</Text>
            </View>
          </View>

          <View style={styles.mainList}>
            <SectionList
              sections={section}
              renderItem={this.renderItem.bind(this)}
              renderSectionHeader={this.renderSectionHeader.bind(this)}
              keyExtractor={(item, index) => index}
            />
          </View>

          {/**   Units */}
          <View style={styles.squadLists}>
            <View style={styles.squad}>
              <View style={{ flex: 1, marginLeft: 15, ...styles.squadHeader }}>
                <Text style={styles.squadHeaderText}>{res.units}</Text>
              </View>

              <View style={{ flex: 3 }}>
                <ButtonGroup
                  onPress={this.updateUnit}
                  selectedIndex={selectedUnit}
                  selectedButtonStyle={{
                    backgroundColor: '#F5E653',
                    color: 'grey',
                  }}
                  textStyle={{ color: 'black' }}
                  selectedTextStyle={{ color: 'black' }}
                  buttons={unitButtons}
                  containerStyle={{ height: 50, color: 'grey' }}
                />
              </View>

              <View style={{ flex: 3 }}>
                <ButtonGroup
                  onPress={this.updateUnit1}
                  selectedIndex={selectedUnit1}
                  selectedButtonStyle={{
                    backgroundColor: '#F5E653',
                    color: 'grey',
                  }}
                  textStyle={{ color: 'black' }}
                  selectedTextStyle={{ color: 'black' }}
                  buttons={unitButtons2}
                  containerStyle={{ height: 50, color: 'grey' }}
                />
              </View>
            </View>
          </View>

          {/*   From - to     */}

          <View style={styles.duration}>
            {/*   Duration    */}

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={styles.fromTo}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.squeduleText}>{res.scheduleFor}</Text>

                  <View style={{ flex: 1, ...styles.squadHeader }}>
                    <DatePicker
                      style={{ width: 110 }}
                      date={this.state.date} 
                      mode="date" //The enum of date, datetime and time
                      // placeholder="select date"
                      format="DD-MM-YYYY"
                      minDate="01-01-2016"
                      maxDate="01-01-2019"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0,
                        },
                        dateInput: {
                          marginLeft: 24,
                          // width:10,
                        },
                      }}
                      onDateChange={date => {
                        this.setState({ date: date });
                      }}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.recent}>
                <View style={{ flex: 1, flowDirection: 'row' }}>
                  <View style={{ flex: 1, ...styles.squadHeader }}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingRight: 10,
                      }}>
                      <Text style={styles.squeduleText}>{res.invite}</Text>

                      <Image
                        style={styles.userIcon}
                        source={require('../../src/images/user-blue-logo.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/*   Save routine  */}

          <View
            style={{
              flex: 12,
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <View style={styles.routine}>
              <CheckBox
                left
                title={res.saveRoutine}
                checked={this.state.saveRoutine}
                onPress={() =>
                  this.setState({ saveRoutine: !this.state.saveRoutine })
                }
              />
            </View>
          </View>

          {/*  */}

          <TouchableOpacity style={styles.button}>
            <Text> {res.create} </Text>
          </TouchableOpacity>

          {/*  End of main section */}
        </ScrollView>

        {/*  footer menu */}

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/settings.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.footerButton}
            onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/event-calendar.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/notification.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/send.png')}
            />
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}

const res = {
  technique: 'Technique',
  routine2: 'Routine 2',
  listExercises: 'List of exercises',
  pickSquad: 'Pick Squad',
  recent: 'Recent',
  duration: 'Duration',
  fromTo: 'From      To',
  saveRoutine: 'Save this Routine',
  trainingConfig: 'Training Plans >  Specific',
  description: 'Description',
  exercisesEdit: 'Exercises > New(Edit)',
  nameEdit: 'Name (edit)',
  formating: 'Formating',
  units: 'Units',
  scheduleFor: 'Schedule for:',
  invite: 'Invite',
  create: 'Create',
};

const styles = {
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: '#47315a',
    borderBottomWidth: 0.5,
  },
  sectionHeaderText: {
    fontSize: 20,
    color: 'grey',
  },
  listHeaderText: {
    fontSize: 19,
    fontWeight: 'bold',
  },

  listsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  squadHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingBottom: 0,
    marginBottom: 10,
    fontSize: 18,
    borderBottomColor: '#47315a',
  },

  squadHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  squeduleText: {
    fontSize: 16,
    color: 'black',
  },

  item: {
    paddingLeft: '0%',
    fontSize: 18,
    height: 44,
    color: 'gray',
    marginLeft: '10%',
  },

  imgBackground: {
    width: null,
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },

  title: {
    color: 'blue',
    backgroundColor: 'transparent',
    fontSize: 8.05,
    alignItems: 'center',
  },
  buttonList: {
    borderRadius: 18,
    marginBottom: 10,
    marginTop: 30,
    marginLeft: '10%',
    marginRight: '10%',
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    color: '#929292',
  },
  buttonTextR: {
    flex: 2,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    color: '#000',
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#00A6FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
    height: '50',
  },
  topBarContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',

    marginRight: 10,
    marginTop: 30,
  },

  topBarText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  main: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '90%',
  },
  mainList: {
    marginTop: -40,
    marginBottom: 10,
    height: 220,
  },

  mainHeader: {
    flex: 18,
    marginTop: 10,
    marginBottom: -40,
  },

  textBox: {
    flex: 10,
    marginTop: 20,
    paddingTop: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },

  editHeader: {
    flex: 8,
    marginTop: 10,
    marginBottom: -40,
  },

  dropContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  squadLists: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
    height: 200,
  },

  duration: {
    flex: 12,
    flexDirection: 'column',
    marginTop: -25,
  },

  saveRoutine: {
    flex: 12,
    flexDirection: 'column',
    marginTop: 10,
  },

  squad: {
    flex: 1,
  },

  fromTo: {
    flex: 1,
    paddingLeft: 15,
    color: 'gray',
  },

  recent: {
    flex: 1 / 2,
  },
  routine: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },

  footer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 100, 255, 0.2)', //"#00A6FF",
    height: 80,
    marginTop: -80,
    bottom: -80,
  },

  footerButton: { marginTop: -80, paddingTop: '10', paddingBottom: '100' },

  footerImage: { height: 40, width: 40 },

  listHeader: {
    flex: 1,
    flexDirection: 'row',
    marginRight: '5%',
    marginLeft: '3%',
    marginTop: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  listIcon: { width: 40, height: 40 },
  userIcon: {
    width: 30,
    height: 30,
    // paddingLeft:0,
  },
  tick: {
    width: 20,
    height: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF800',
    padding: 10,
    marginRight: '30%',
    marginLeft: '30%',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
    overflow: 'hidden',
    marginBottom: 20,
  },
};
