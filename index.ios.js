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

import { Navigator } from 'react-native-deprecated-custom-components'
import ReadMain from './app/readMain/launchPage'

export default class Reading extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{name:'ReadMain',component:ReadMain}}
          configureScene={(route)=>{
              return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator}/>
          }}
      />
    );
  }
}


AppRegistry.registerComponent('Reading', () => Reading);
