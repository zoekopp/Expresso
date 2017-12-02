import React from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View } from 'react-native';
import Icon from '../Icon';
import { Icon as NativeIcon } from 'native-base';

const Rating = (props) => (
  <View
    style={{justifyContent: 'space-between', flexDirection: 'row', width: '40%', alignItems: 'center'}}
  >
  { (Platform.OS === 'ios') ? <Icon  name="FilledStar" height="20" width="20"/> : <NativeIcon name="md-star" style={{fontSize: 20, color: '#5F5F6B'}}/>}
  { (Platform.OS === 'ios') ? <Icon  name="FilledStar" height="20" width="20"/> : <NativeIcon name="md-star" style={{fontSize: 20, color: '#5F5F6B'}}/>}
  { (Platform.OS === 'ios') ? <Icon  name="FilledStar" height="20" width="20"/> : <NativeIcon name="md-star" style={{fontSize: 20, color: '#5F5F6B'}}/>}
  { (Platform.OS === 'ios') ? <Icon  name="HalfStar" height="20" width="20"/> : <NativeIcon name="md-star-half" style={{fontSize: 20, color: '#5F5F6B'}}/>}
  { (Platform.OS === 'ios') ? <Icon  name="EmptyStar" height="20" width="20"/> : <NativeIcon name="md-star-outline" style={{fontSize: 20, color: '#5F5F6B'}}/>}
  </View>
)

export default Rating
