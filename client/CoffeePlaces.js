import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View } from 'react-native';
  import {
    Button
  } from 'native-base';
  import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';
import LOCAL from './data/data.json';

const CellVariant = (props) => (
  <Cell
    {...props}
    cellContentView={
      <View
        style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flex: 1, paddingVertical: 10, width: '100%' }}
      >
        <Text
          allowFontScaling
          numberOfLines={1}
          style={{ flex: 1, fontSize: 20, color: 'black' }}
        >
          {props.title}
        </Text>
      </View>
    }
  />
);

export default class CoffeePlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 40.0150,
      longitude: -105.2705,
      radius: 500,
      type: 'restaurant',
      keyword: 'coffee',
      DATA: LOCAL.results
    }
    // this.getCoffeePlaces()
  }
  sortByRating() {

  }
  sortByProximity() {

  }
  getCoffeePlaces() {
  return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.latitude},${this.state.longitude}&radius=${this.state.radius}&type=${this.state.type}&keyword=${this.state.keyword}&key=AIzaSyCD3B8cv338-yuFA-sa1iXunVvKD2IsT0c`)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        DATA: responseJson.results
      });
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}

  render() {
    return (
      <View style={styles.container}>
        <TableView style={styles.container}>
          <Section style={{width: '100%'}}>
            {this.state.DATA.map((place, i) => (
              <CellVariant key={i}
              title={place.name}
              rating={this.rating} />
            ))}
          </Section>
        </TableView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%'
  },
  button: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Avenir'
  }
});
