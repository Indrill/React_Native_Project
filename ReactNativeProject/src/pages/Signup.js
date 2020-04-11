import React, { PureComponent } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Form from '../component/Form';
import styles from '../commons/styles';

export default class Signup extends PureComponent {
  goBack() {
    this.error = '';
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Form type="Signup" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
