import React, { PureComponent } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Map from './pages/Map';
import Home from './component/Home';

const styles = {
  barButtonIconStyle: {
    tintColor: 'white',
  },
};

export default class Routes extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router
        barButtonIconStyle={styles.barButtonIconStyle}
        hideNavBar={false}
        navigationBarStyle={{ backgroundColor: '#1565c0' }}
        titleStyle={{ color: 'white' }}
      >
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Sign up" />
          <Scene key="map" component={Map} title="Map" />
          <Scene key="home" component={Home} title="Home" />
        </Stack>
      </Router>
    );
  }
}
