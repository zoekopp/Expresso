import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoffeePlaces from './CoffeePlaces';

export default class AppContent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CoffeePlaces/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
