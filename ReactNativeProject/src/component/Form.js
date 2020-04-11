/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Toast from 'react-native-tiny-toast';
import styles from '../commons/styles';

export default class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  saveData = async () => {
    const { email, password } = this.state;
    const loginDetails = { email, password };
    if (this.props.type !== 'Login') {
      AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
      Keyboard.dismiss();
      Toast.showSuccess('Votre inscription à bien été prise en compte');
    } else if (this.props.type === 'Login') {
      try {
        const loginDetails2 = await AsyncStorage.getItem('loginDetails');
        const ld = JSON.parse(loginDetails2);
        if (ld.email != null && ld.password != null) {
          if (ld.email === email && ld.password === password) {
            this.home();
          } else {
            Toast.show('Email ou mot de passe incorrect');
          }
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  }

  home() {
    this.error = '';
    Actions.home();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={(email) => this.setState({ email })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(password) => this.setState({ password })}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#002f6c"
          ref={(input) => this.password === input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
