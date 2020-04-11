import React, { PureComponent } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Form from '../component/Form';
import styles from '../commons/styles';

export default class Login extends PureComponent {
  signup() {
    this.error = '';
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Dont have an account yet? </Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
