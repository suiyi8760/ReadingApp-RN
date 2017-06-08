import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
    TouchableOpacity
} from 'react-native';

import Test from './test'
export default class extends Component {
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity
              onPress={()=>this.props.navigator.replace({
                  component:Test
              })}
          ><Text>Reading</Text></TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
