import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    user: "banana cowboy",
    todos: [{ id: 0, text: "fazer café" }, { id: 1, text: "estudar react" }]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "testy" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.user}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        <Button title="add todo" onPress={this.addTodo} />
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
