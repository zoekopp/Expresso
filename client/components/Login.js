import React from 'react';
import {
  Platform
} from 'react-native'
import {
  StyleSheet,
  Text,
  TextInput,
  View
 } from 'react-native';
import { Button } from 'native-base';
import { G, Path } from 'react-native-svg';
import Icon from '../Icon';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: 'your email',
        password: 'your password'
      };
      this.login = this.login.bind(this)
      this.signup = this.signup.bind(this)
  }
  login() {
  }
  signup() {

  }
  render() {
    return (
      <View style={styles.container}>

        { (Platform.OS === 'ios') ? <Icon  name="Leaf" height="200" width="200" /> : <Text>Leaf</Text>}

        { (Platform.OS === 'ios') ? <G><Path d="M0 45h90L45 0 0 45z"/><Path d="M0 55h90l-45 45L0 55z"/></G> : <Text></Text>}
        <Text
        style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '90%', marginTop: 10}}
        >Email</Text>
        <TextInput
          underlineColorAndroid='transparent'
          style={{height: 40, width: '90%', borderColor: '#474a4f', borderBottomWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder='your email'
        />
        <Text
        style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: '90%', marginTop: 10}}
        >Password</Text>
        <TextInput
          underlineColorAndroid='transparent'
          style={{height: 40, width: '90%', borderColor: '#474a4f', borderBottomWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder='your password'
        />
        <View style={{width: '90%', paddingTop: 40}}>
          <Button
            style={styles.buttonStyle}
            block success
            onPress={() => Actions.stream()}
            >
            <Text style={{color: '#351B40'}}>Login</Text>
          </Button>
        </View>
        <View style={{width: '90%', paddingTop: 10}}>
          <Button
            style={styles.buttonStyle}
            block success
            onPress={() => Actions.signup()}
          >
            <Text style={{color: '#351B40'}}>Sign Up</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: '#351B40',
    borderRadius: 5,
  }
});
