import React, { PureComponent } from 'react';
import MapView, { UrlTile } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet, View, Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default class Map extends PureComponent {
  goBack() {
    this.error = '';
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle}>
          <UrlTile
            urlTemplate="https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=9efc9804a0fd7b7d41d8ad788f3be626fec32732"
            maximumZ={19}
            flipY={false}
          />
        </MapView>
      </View>
    );
  }
}
