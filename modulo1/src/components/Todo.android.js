import React from 'react';

import {
  View, Text, StyleSheet, Platform,
} from 'react-native';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  text: {
    ...Platform({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        fontSize: 24,
      },
    }),
  },
});

const Todo = ({ title }) => (
  <View>
    {Platform.OS === 'ios' ? (
      <Text style={styles.text}>{title}</Text>
    ) : (
      <Text style={styles.text}>Android</Text>
    )}
  </View>
);

Todo.defaultProps = {
  title: 'Todo padrão',
};

Todo.propTypes = {
  title: PropTypes.string,
};

export default Todo;
