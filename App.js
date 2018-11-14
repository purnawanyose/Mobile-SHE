/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import LoggedOut from './src/app/screens/LoggedOut';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <LoggedOut />
    );
  }
}