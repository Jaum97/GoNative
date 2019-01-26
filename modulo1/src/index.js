import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

const $bgColor = '#f5f5f5';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: $bgColor,
    flex: 1,
    justifyContent: 'center',
  },
});

export default class App extends Component {
  state = {
    user: 'banana cowboy',
  };

  render() {
    const { user } = this.state;
    return (
      <View style={styles.container}>
        <Text>{user}</Text>
      </View>
    );
  }
}
