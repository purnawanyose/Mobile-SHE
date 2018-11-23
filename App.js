/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import LoggedOut from "./src/app/screens/LoggedOut";
import Login from "./src/app/screens/Login";
import HomeMenu from "./src/app/screens/HomeMenu";

export default class App extends Component {
  render() {
    return <Login />;
  }
}
