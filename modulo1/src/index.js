import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Todo from "./components/Todo";

export default class App extends Component {
  state = {
    user: "banana cowboy",
    todos: [{ id: 0, text: "fazer café" }, { id: 1, text: "estudar react" }],
    text: "hello",
    counter: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text: "hello world" });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleAddCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.text };
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "testy" }]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleAddCounter} title="add" />
        <Text>{this.state.text}</Text>
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
