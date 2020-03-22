import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import Routes from './src/Routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => (
  <View style={styles.container}>
    <StatusBar
      backgroundColor="#002f6c"
      barStyle="light-content"
    />
    <Routes />
  </View>
);

export default App;
