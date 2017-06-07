/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import ReadMain from './app/readMain/readMain'

export default class Reading extends Component {
  render() {
    return (
      <ReadMain />
    );
  }
}


AppRegistry.registerComponent('Reading', () => Reading);
