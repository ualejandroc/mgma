import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  
} from 'react-native';

import { List, ListItem, Avatar, SearchBar, ButtonGroup } from 'react-native-elements';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = {
      isLoading: true,
      search: '',
      userName: "Felipao's ",
      selectedIndex: 0,
      contacts: [
        {
          name: 'Devin',
          nationality: 'Quito,Ecuador',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
        {
          name: 'Dan',
          nationality: 'Distrito Federall, Brazil ',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
        {
          name: 'Dominic',
          nationality: 'Quito,Ecuador',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
        {
          name: 'Jackson',
          nationality: 'Quito,Ecuador',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
        {
          name: 'James',
          nationality: 'Quito,Ecuador',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
        {
          name: 'Joel',
          nationality: 'Quito,Ecuador',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
        {
          name: 'John',
          nationality: 'Quito,Ecuador',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
        {
          name: 'Jillian',
          nationality: 'Quito,Ecuador',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
        {
          name: 'Jimmy',
          nationality: 'Quito,Ecuador',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
        {
          name: 'Julie',
          nationality: 'Quito,Ecuador',
          team: 'Club 1',
          user_img: '../images/Day.png',
        },
      ],
      arrayholder: [],
    };
    this.setState({ arrayholder: this.state.contacts });


    this.updateIndex = this.updateIndex.bind(this)
    this.searchFilterFunction= this.searchFilterFunction.bind(this)
  }

  componentWillMount = () => {
    this.setState({ arrayholder: this.state.contacts });
  };

  updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

  searchFilterFunction(text) {
    let selectedIndex = this.state.selectedIndex
    //passing the inserted text in textinput
    let newData = this.state.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      let itemData 
      if (selectedIndex==0)
        itemData=item.name ? item.name.toUpperCase() : ''.toUpperCase();
      else
        itemData=item.nationality ? item.nationality.toUpperCase() : ''.toUpperCase();

      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    if (text == '') newData = this.state.contacts;

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      arrayholder: newData,
      search: text,
    });
  }

  renderHeader = () => {
    //View to set in Header
    const buttons = [res.byLastName, res.byNationality,]
    const  selectedIndex  = this.state.selectedIndex

    return (
      <View>
      <View style={styles.topBar}>
        <Avatar
          size="large"
          rounded
          source={require('../images/Day.png')}
          onPress={() => console.log('')}
        />
        <View
          style={{
            flex: 2,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            backgroundColor: '#00A6FF',
            height: '50',
            // paddingLeft: '30',
          }}>
          <SearchBar
            inputStyle={{ backgroundColor: '#00A6FF', color: '#fff', }}
            leftIconContainerStyle={{
              color: '#fff',
              backgroundColor: '#00A6FF',
              height: '10',
            }}
            rightIconContainerStyle={{
              backgroundColor: '#00A6FF',
              height: '10',
            }}
            inputContainerStyle={{
              backgroundColor: '#00A6FF',
              height: '10',
              color: '#fff',
            }}
            containerStyle={{
              backgroundColor: '#00A6FF',
              width: '70%',
              marginRight: 0,
              height: '10',
              color: '#fff',
              // borderWidth: 1,
              // borderRadius: 5,
            }}
            placeholderTextColor={'#fff'}
            placeholder={res.search}
            lightTheme
            round
            searchIcon={{ size: 20, height: '10', color: '#fff' }}
            onChangeText={text => this.searchFilterFunction(text)}
            onClear={text => this.searchFilterFunction('')}
            value={this.state.search}
          />
          <View style={styles.topBarContainer}>
            <Text style={styles.topBarText}>
              {this.state.userName + '  ' + res.contacts}
            </Text>
          </View>
        </View> 
      </View>

       <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 20, backgroundColor: '#E8E8E8',}} 
       selectedButtonStyle={{ backgroundColor: '#00A6FF',  }}
      />
     </View>

    );
  };

  renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 10 }}
          data={this.state.arrayholder}
          renderItem={({ item }) => {
            let user =   require('../images/Day.png')
                // : require(item.user_img))

            return (
              <View style={styles.listItem}>
                <View style={styles.imageWrapper}>
                  <Image
                    style={{ width: 85, height: 85, borderRadius: '9' }}
                    source={user}
                  />
                </View>
                <View style={{ flex: 3 }}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.subtitle}>{item.nationality}</Text>
                  <Text style={styles.subtitle}>{item.team}</Text>
                </View>

                <TouchableOpacity
                  style={styles.footerButton}
                  onPress={this._onPressButton}>
                  <Image
                    style={styles.footerImage}
                    source={require('../images/send.png')}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          stickyHeaderIndices={[0]}
        />

        {/*  footer menu */}

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButtons}
            onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/settings.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.footerButtons}
            onPress={this._onPressButton}>
            <Image
              style={styles.footerImages}
              source={require('../images/event-calendar.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButtons}
            onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/notification.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButtons}
            onPress={this._onPressButton}>
            <Image
              style={styles.footerImage}
              source={require('../images/send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const res = {
  contacts: 'Contacts',
  byLastName:'By Last Name',
  byNationality:'By Nationality',
  search:'Search'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#E8E8E8',
  },

  topBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00A6FF',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 5,
    //   height: 11,
    // },
    // shadowOpacity: 0.55,
    // shadowRadius: 14.78,
    // elevation: 15,
    height: '50',
    paddingLeft: '15',
    paddingRight: '15',
    marginLeft: '15',
    marginRight: '15',
  },
  topBarContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: '5%',
  },

  topBarText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },

  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // paddingTop: Constants.statusBarHeight,
  //   backgroundColor: '#ecf0f1',
  // },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    padding: 6,

    backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 5,
    //   height: 11,
    // },
    // shadowOpacity: 0.55,
    // shadowRadius: 14.78,
    // elevation: 22,

    margin: 5,
  },
  imageWrapper: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    margin: 6,
  },
  subtitle: {
    fontSize: 13,
    textAlign: 'left',
    margin: 6,
  },
  footerButton: { flex: 1 },
  footerImage: { flex: 1, height: 47, width: 62 },

  footer: {
    // flex: 0.3,
    flex: 1 / 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 100, 255, 0.2)', //"#00A6FF",
    height: 80,
    // marginTop: -180,
    bottom: 0,
  },

  footerButtons: {
    marginTop: 0,
    //  paddingTop: '10',
    //  paddingBottom: '100'
    height: 50,
    width: 50,
  },

  footerImages: {
    height: 40,
    width: 40,
  },
});
