import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import "./config/ReactotronConfig";

export default class App extends Component {
  state = {
    user: "banana cowboy"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.user}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  }
});
