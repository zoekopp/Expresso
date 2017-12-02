import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoffeePlaces from './CoffeePlaces';
import { Router, Scene, Actions } from 'react-native-router-flux';

export default class AppContent extends React.Component {
  render() {
    return (
      <Router
        barButtonTextStyle={styles.barButtonTextStyle}
        barButtonIconStyle={styles.barButtonIconStyle}
      >
        <Scene key="root"
          initial
        >
          <Scene
            key="expresso"
            component={CoffeePlaces}
            title="Expresso"
            hideNavBar
          />
        </Scene>
      </Router>
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
