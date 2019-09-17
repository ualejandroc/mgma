import React, { Component, Fragment } from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  SectionList,
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

import { SocialIcon } from 'react-native-elements';
import { List, ListItem, Avatar } from 'react-native-elements';

export default class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      email: '',
      password: '',
      error: '',
      loading: false,
      open: false,
    };
  }

  /**
   * Renders header  of <SectionList>
   * @param  {object} section  [data for rendering]
   */
  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.listHeader}>
        <Image
          style={styles.listIcon}
          source={require('../../src/images/arrow-down-1.png')}
        />
        <View style={{ flex: 3, ...styles.sectionHeader }}>
        <Text style={styles.sectionHeaderText}>
          {section.title}
        </Text>
        </View>
      </View>
    );
  };

  /**
   * Renders body of each section of <SectionList>
   * @param  {object} section  [data for rendering]
   */
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <View
          style={{
            ...styles.listItem,
            ...styles.buttonList,
          }}>
          <Text style={styles.buttonText}>{item.smallText}</Text>
          <Text style={{ flex: 2, ...styles.buttonTextR }}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { email, password, error, loading } = this.state;

    //test data for <SectionList>
    let section = [
      {
        id: 0,
        title: 'Recent',
        data: [
          { id: 0, smallText: 'Last Month', text: 'General' },
          { id: 1, smallText: '2 Months', text: 'Specific' },
        ],
      },
      {
        id: 1,
        title: 'Saved',
        data: [
          // { id: 3, text: 'Later' },
        ],
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
            <Text style={styles.topBarText}>{'Training Plans'}</Text>
          </View>
        </View>

        {/* Main Panel  */}

        <View style={styles.main}>
          <SectionList
            style={styles.mainList}
            sections={section}
            renderItem={this.renderItem.bind(this)}
            renderSectionHeader={this.renderSectionHeader.bind(this)}
            keyExtractor={(item, index) => index}
          />
        </View>

        {/*  Add Button  */}

        <FAB.Group
          style={{ paddingBottom: '10%' }}
          open={this.state.open}
          icon={this.state.open ? 'today' : 'add'}
          actions={[
            { icon: 'add', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
          ]}
          onStateChange={({ open }) => this.setState({ open })}
          onPress={() => {
            if (this.state.open) {
              // do something if the speed dial is open
            }
          }}
          theme={{ colors: { accent: '#00081F' } }}
        />

        {/*  footer menu */}

        <View style={styles.footer}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/settings.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/event-calendar.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/notification.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onPressButton}>
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

const styles = {
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: '3%',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: '#47315a',
    borderBottomWidth: 0.5,
  },

  sectionHeaderText:{
     fontSize: 20,
    fontWeight: 'bold',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'gray',
    marginLeft: '17%',
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
    borderWidth: 0.1,
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
    flex: 1,
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
  },
  topBarContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: '5%',
  },

  topBarText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  main: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  mainList: {
    paddingTop: '10%',
  },

  listHeader: {
    flex: 1,
    flexDirection: 'row',
    marginRight: '5%',
    marginLeft: '3%',
  },

  listItem: {
    shadowColor: '#000',
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowOpacity: 0.55,
    shadowRadius: 8,
    elevation: 4,
     backgroundColor: '#fff'
  },

  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 100, 255, 0.2)', //"#00A6FF",
  },
  footerImage: { height: 40, width: 40 },
  listIcon: { width: 40, height: 40 },
};
