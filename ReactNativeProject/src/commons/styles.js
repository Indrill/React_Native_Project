import { moderateScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

export const AQI_GOOD = '#009966';
export const AQI_MODERATE = '#FFDE33';
export const AQI_UNHEALTHY_LOW = '#FF9933';
export const AQI_UNHEALTHY_MODERATE = '#CC0033';
export const AQI_UNHEALTHY_HIGH = '#660099';
export const AQI_HAZARDOUS = ' #7E0023';
export const AQI_DEFAULT = '#D3D3D3';

export const aqiColors = (number) => {
  let color;
  if (number <= 50) {
    color = AQI_GOOD;
  } else if (number > 50 && number <= 100) {
    color = AQI_MODERATE;
  } else if (number > 100 && number <= 150) {
    color = AQI_UNHEALTHY_LOW;
  } else if (number > 150 && number <= 200) {
    color = AQI_UNHEALTHY_MODERATE;
  } else if (number > 200 && number <= 300) {
    color = AQI_UNHEALTHY_HIGH;
  } else if (number > 300) {
    color = AQI_HAZARDOUS;
  } else {
    color = AQI_DEFAULT;
  }
  return color;
};

const window = Dimensions.get('window');

const styles = {
  overviewView: {
  },
  overviewAqiCard: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    width: window.width - 30,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#e8eef4',
    borderRadius: 5,
    borderColor: '#fff',
  },
  overviewAqiCardLeftSide: {
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
  },
  overviewCircle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  overviewCircleText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: moderateScale(20),
  },
  overviewAqiCardRightSide: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: window.width - 140,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: '#12799f',
    fontSize: 16,
  },
  signupButton: {
    color: '#12799f',
    fontSize: 16,
    fontWeight: '500',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aqi: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  aqiDefinitionText: {
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  aqiInfo: {
    marginTop: 25,
  },
  aqiInfoText: {
    fontSize: 16,
    textAlign: 'justify',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imgButton: {
    marginTop: 10,
  },
  email: {
    textAlign: 'center',
  },
  userInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  userView: {
    backgroundColor: '#FFFFFF',
  },
  aqiView: {
    backgroundColor: '#e8eef4',
    marginTop: 20,
  },
  infoUserView: {
    marginTop: 20,
  },
  mapInfoView: {
    backgroundColor: '#e8eef4',
  },
  mapInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  mapButtonView: {
    marginTop: 15,
  },
};

export default styles;
