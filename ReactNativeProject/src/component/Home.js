/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import * as axios from 'axios';
import {
  View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Platform, Button, Image,
  AsyncStorage,
} from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Actions } from 'react-native-router-flux';
import { moderateScale } from 'react-native-size-matters';
import Toast from 'react-native-tiny-toast';
import { AUTH_SERVICE_AQI } from '../commons/api/authService';
import styles, { aqiColors } from '../commons/styles';
import {
  CAM_ERROR, LOCATION_ERROR, AQI_DEFINITION, MAP_INFO, aqiText,
} from '../commons/text';


export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
    this.errorMessage = null;
    this.aqiData = null;
    this.longitude = null;
    this.latitude = null;
    this.email = null;
  }

  async componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Toast.show('Oups, cela ne fonctionnera pas sur Sketch dans un émulateur Android. Essayez-le sur votre appareil !');
    } else {
      await this.getPermissionAsync();
      await this.getUserInfo();
      await this.getLocationAsync();
      await this.getAqiData();
      this.setState({ isLoading: false });
    }
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Toast.show(CAM_ERROR);
      }
    }
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Toast.show(LOCATION_ERROR);
      this.errorMessage = 'Permission to access location was denied';
    }
    const location = await Location.getCurrentPositionAsync({});
    this.longitude = location.coords.longitude;
    this.latitude = location.coords.latitude;
  };

  getAqiData = async () => {
    const url = `${AUTH_SERVICE_AQI + this.latitude};${this.longitude}/?token=9efc9804a0fd7b7d41d8ad788f3be626fec32732`;
    await axios.get(url)
      .then(async (response) => {
        this.aqiData = response;
      })
      .catch(async (error) => {
        throw new Error(error);
      });
  }

  getUserInfo = async () => {
    const loginDetails2 = await AsyncStorage.getItem('loginDetails');
    const ld = JSON.parse(loginDetails2);
    this.email = ld.email;
    const img = await AsyncStorage.getItem('image');
    if (img === null) {
      this.setState({ image: '../assets/img/profilPictureDefault.png' });
    } else {
      this.setState({ image: img });
    }
  }

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      AsyncStorage.setItem('image', result.uri);
      this.setState({ image: result.uri });
    }
  };

  map() {
    this.error = '';
    Actions.map();
  }


  displayAQIinfo() {
    const infoAQI = aqiText(parseInt(this.aqiData.data.data.aqi, 10));
    return (
      <View style={styles.aqi}>
        <View>
          <Text style={styles.aqiDefinitionText}>
            { AQI_DEFINITION }
          </Text>
        </View>
        <View style={styles.aqiInfo}>
          <Text style={styles.aqiInfoText}>
            { infoAQI }
          </Text>
        </View>
      </View>
    );
  }

  displayDetectedSensorAqiData() {
    const color = aqiColors(parseInt(this.aqiData.data.data.aqi, 10));
    return (
      <View style={styles.overviewAqiCard}>
        <View style={styles.overviewAqiCardLeftSide}>
          <View style={[styles.overviewCircle, { backgroundColor: color }]}>
            <Text style={styles.overviewCircleText}>
              {this.aqiData.data.data.aqi}
            </Text>
          </View>
        </View>
        <View style={styles.overviewAqiCardRightSide}>
          <Text style={{ fontSize: moderateScale(20), textAlign: 'center', fontWeight: 'bold' }}>Capteurs autour de vous</Text>
          <Text style={{ fontSize: moderateScale(15), textAlign: 'center' }}>{this.aqiData.data.data.city.name}</Text>
        </View>
      </View>
    );
  }

  displayUserInfor() {
    const { image } = this.state;
    return (
      <View style={styles.userInfo}>
        <View>
          {image && <Image source={{ uri: image }} style={styles.img} />}
        </View>
        <View style={styles.imgButton}>
          <Button
            title="Selectionner une image de profil"
            onPress={this.pickImage}
          />
        </View>
        <View style={styles.infoUserView}>
          <View>
            <Text style={styles.titleText}>
              Email
            </Text>
          </View>
          <View>
            <Text style={styles.email}>{this.email}</Text>
          </View>
        </View>
      </View>
    );
  }

  displayMapButton() {
    return (
      <View style={styles.mapInfo}>
        <View>
          <Text style={styles.aqiInfoText}>
            { MAP_INFO }
          </Text>
        </View>
        <View style={styles.mapButtonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.map}>Carte</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    if (this.state.isLoading) {
      return (<ActivityIndicator />);
    }
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.userView}>
          { this.displayUserInfor() }
        </View>
        <View style={styles.aqiView}>
          { this.displayDetectedSensorAqiData() }
          { this.displayAQIinfo() }
        </View>
        <View style={styles.mapInfoView}>
          { this.displayMapButton() }
        </View>
      </ScrollView>
    );
  }
}
