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
import { SocialIcon, CheckBox } from 'react-native-elements';
import { List, ListItem, Avatar } from 'react-native-elements';

import DatePicker from 'react-native-datepicker';
import IOSPicker from 'react-native-ios-picker';

export default class Config extends Component {
  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.state = {
      date: '',
      email: '',
      password: '',
      error: '',
      loading: false,
      open: false,

      language: 'Java',

      favColor: undefined,
      items: [
        { id: '0i', label: 'Right side crosses', value: 'rsc' },
        {
          id: '1i',
          label: 'Serves location targets',
          value: 'slt',
        },
        { id: '2i', label: 'Returns', value: 'rt' },
      ],

      arrayholder: [],

      favSport: undefined,
      dataPicker: [
        {
          id: 'Choose from saved exercises',
          label: 'Select one...',
          value: 'rsc',
        },
        { id: 0, label: 'Right side crosses', value: 'rsc' },
        {
          id: 1,
          label: 'Serves location targets',
          value: 'slt',
        },
        { id: 2, label: 'Returns', value: 'rt' },
      ],
      savedExercise: 'Saved Exercises',
      selectedValue: 'Choose from saved exercises ',
      selectedIndex: 0,
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
      saveRoutine: true,
    };

    this.setState({ arrayholder: this.state.items });
  }

  componentWillMount = () => {
    this.setState({ arrayholder: this.state.items });
  };

  pickerChange = index => {
    this.state.dataPicker.map((v, i) => {
      if (index === i) {
        this.setState({
          selectedValue: this.state.dataPicker[index].label,
          selectedIndex: this.state.dataPicker[index].id,
        });
      }
    });
  };

  change(d, i) {
    if (d == 'Choose from saved exercises') return this.state.selectedValue;
    //passing the inserted text in textinput
    let newData = this.state.arrayholder;
    // alert(JSON.stringify(  newData)   )
    newData.unshift(this.state.dataPicker[i]);

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      arrayholder: newData,
    });
  }

  /**
   * Renders header  of <SectionList>
   * @param  {object} section  [data for rendering]
   */
  renderSectionHeader = ({ section }) => {
    let picker;
    if (Platform.OS === 'ios') {
      picker = (
        <IOSPicker
          mode="modal"
          selectedValue={this.state.selectedValue}
          onValueChange={(d, i) => this.change(d, i)}>
          {this.state.dataPicker.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.id} />
          ))}
        </IOSPicker>
      );
    } else {
      picker = (
        <Picker
          headerComponent={
            <Button
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          }
          selectedValue={this.state.selectedValue}
          onValueChange={(itemValue, itemIndex) =>
            this.pickerChange(itemIndex)
          }>
          {this.state.dataPicker.map((v, index) => {
            return <Picker.Item key={index} label={v.name} value={v.code} />;
          })}
        </Picker>
      );
    }

    return (
      <View style={styles.listHeader}>
        <View style={{ flex: 1, ...styles.listHeader }}>
          <Text style={styles.listHeaderText}>{section.title}</Text>
        </View>
        <View style={styles.dropContainer}>{picker}</View>
      </View>
    );
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
          width: '70%',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.item}>{item.label}</Text>
        <TouchableOpacity onPress={() => this.onSquadPressTrash(item)}>
          <Image
            style={styles.tick}
            source={require('../../src/images/trash-icon.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };

  /**
   * Renders header  of <SectionList>
   * @param  {object} section  [data for rendering]
   */
  renderSquadHeader = ({ section }) => {
    return (
      <View style={styles.listHeader}>
        <View style={{ flex: 1, ...styles.sectionHeader }}>
          <Text style={styles.sectionHeaderText}>{section.title}</Text>
        </View>
      </View>
    );
  };

  /**
   * Renders body of each section of <SectionList>
   * @param  {object} section  [data for rendering]
   */
  renderSquad = ({ item, index, section }) => {
    let squadSelected;

    if (item.selected) {
      squadSelected = (
        <Image
          style={styles.tick}
          source={require('../../src/images/turquoise-tick.png')}
        />
      );
    }

    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => this.onSquadPress(item)}>
        {squadSelected}
        <Image
          style={styles.listIcon}
          source={require('../../src/images/user-blue-logo.png')}
        />
      </TouchableOpacity>
    );
  };

  //

  onSquadPressTrash = item => {
    let newData = this.state.arrayholder;
    // alert(JSON.stringify(  newData)   )
    newData = newData.filter(old => old.id !== item.id);

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      arrayholder: newData,
    });
  };

  //

  onSquadPress = item => {
    let squad = this.state.squad;
    for (let i = 0; i < squad.length; i++) {
      if (squad[i].id == item.id) {
        squad[item.id].selected = true;
      } else {
        squad[i].selected = false;
      }
    }

    this.setState({ squad });
  };

  //
  flatRenderSquad = item => {
    let squadSelected;

    if (item.selected) {
      squadSelected = (
        <Image
          style={styles.tick}
          source={require('../../src/images/turquoise-tick.png')}
        />
      );
    }

    return (
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
        onPress={() => this.onSquadPress(item)}>
        {squadSelected}
        <Image
          style={styles.listIcon}
          source={require('../../src/images/user-blue-logo.png')}
        />
      </TouchableOpacity>
    );
  };

  ///

  flatRenderRecent = item => {
    let recent = this.state.recent;
    let selectedRecent = recent.filter(item => item.selected == true)[0];

    let squadSelected;

    if (item.id == selectedRecent.id) {
      squadSelected = (
        <Image
          style={styles.tick}
          source={require('../../src/images/turquoise-tick.png')}
        />
      );
    }

    return (
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
        // onPress={() => this.onSquadPress(item)}
      >
        {squadSelected}
        <Image
          style={styles.listIcon}
          source={require('../../src/images/user-blue-logo.png')}
        />
      </TouchableOpacity>
    );
  };

  ///////

  /**
   * Renders header  of <SectionList>
   * @param  {object} section  [data for rendering]
   */
  renderRecentHeader = ({ section }) => {
    return (
      <View style={styles.listHeader}>
        <View style={{ flex: 1, ...styles.sectionHeader }}>
          <Text style={styles.sectionHeaderText}>{section.title}</Text>
        </View>
      </View>
    );
  };

  /**
   * Renders body of each section of <SectionList>
   * @param  {object} section  [data for rendering]
   */
  renderRecent = ({ item }) => {
    return <Text style={styles.item}>{item.label}</Text>;
  };

  //////////

  render() {
    const { email, password, error, loading } = this.state;

    //test data for <SectionList>
    let section = [
      {
        id: 0,
        title: res.listExercises,
        data: this.state.arrayholder,
      },
    ];

    return (
      <Fragment
        style={{
          flex: 1,
          flexDirection: 'row',
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
            <Text style={styles.topBarText}>{res.trainingConfig}</Text>
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
                <Text style={styles.sectionHeaderText}>{res.technique}</Text>
              </View>
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

          <View style={styles.squadLists}>
            <View style={styles.squad}>
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1, ...styles.squadHeader }}>
                  <Text style={styles.squadHeaderText}>{res.pickSquad}</Text>
                </View>
              </View>

              <View style={{ flex: 3 }}>
                <FlatList
                  data={this.state.squad}
                  numColumns={2}
                  renderItem={({ item }) => this.flatRenderSquad(item)}
                  extraData={this.state} //ensures reloading
                />
              </View>
            </View>

            <View style={styles.recent}>
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1, ...styles.squadHeader }}>
                  <Text style={styles.squadHeaderText}>{res.recent}</Text>
                </View>
              </View>

              <View style={{ flex: 3 }}>
                <FlatList
                  data={this.state.recent}
                  numColumns={3}
                  renderItem={({ item }) => this.flatRenderRecent(item)}
                />
              </View>
            </View>
          </View>

          {/*   From - to     */}

          <View style={styles.duration}>
            {/*   Duration    */}

            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, ...styles.squadHeader }}>
                <Text style={styles.squadHeaderText}>{res.duration}</Text>
              </View>
            </View>

            {/*   From - to     */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={styles.fromTo}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1, ...styles.squadHeader }}>
                    <Text style={styles.fromToText}>{res.from}</Text>
                  </View>
                  <DatePicker
                    style={{ width: 120 }}
                    date={this.state.date} //initial date from state
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

              <View style={styles.recent}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 1, ...styles.squadHeader }}>
                    <Text style={styles.fromToText}>{res.to}</Text>
                  </View>
                  <DatePicker
                    style={{ width: 120 }}
                    date={this.state.date} //initial date from state
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

          <View style={styles.editHeader}>
            <View style={styles.listHeader}>
              <Image
                style={styles.listIcon}
                source={require('../../src/images/arrow-down-1.png')}
              />
              <View style={{ flex: 3, ...styles.sectionHeader }}>
                <Text style={styles.sectionHeaderText}>{res.routineTwo}</Text>
              </View>
            </View>
          </View>

          {/*  */}

          <TouchableOpacity
            style={styles.button}
            //  onPress={this.onPress}
          >
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
  fromTo: 'From To',
  from: 'From:',
  to: 'To:',
  saveRoutine: 'Save this Routine',
  trainingConfig: 'Training Plans >  Specific',
  routineTwo: 'Routine Two (edit)',
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
    fontSize: 19,
    fontWeight: 'bold',
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
    paddingRight: 10,
    paddingBottom: 0,
    marginBottom: 10,
    fontSize: 18,
    borderBottomColor: '#47315a',
  },

  squadHeaderText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },

  fromToText: {
    fontSize: 20,
    color: 'grey',
  },

  item: {
    paddingLeft: 20,
    fontSize: 17,
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
    marginRight: '5%',
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
    //  height:'90%'
  },
  mainList: {
    flex: 30,
    marginTop: 10,
    marginBottom: 10,
  },

  mainHeader: {
    flex: 12,
    marginTop: 10,
    marginBottom: -40,
  },

  editHeader: {
    // flex: 8,
    // marginTop: 10,
    // marginBottom: -40,
  },

  dropContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
  },

  squadLists: {
    // flex: 20,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 30,
    //  height: 150,
  },

  duration: {
    flex: 12,
    flexDirection: 'column',
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
    paddingLeft: '8%',
    color: 'gray',
  },

  recent: {
    flex: 1,
  },

  routine: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },

  footer: {
    flex: 0.3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 100, 255, 0.2)', //"#00A6FF",
    height: '50',
    marginTop: -80,
    bottom: -80,
  },
  footerButton: {
    marginTop: -80,
    paddingTop: '10',
    paddingBottom: '10',
  },

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
