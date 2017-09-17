import { StyleSheet } from 'react-native';

const button = {
  alignSelf: 'stretch',
  borderRadius: 3,
  backgroundColor: 'grey',
};

const buttonIsActive = {
  backgroundColor: 'darkorange',
};

const buttonIsInvalid = {
  backgroundColor: '#ff4136',
};

const duration = {
  padding: 10,
  alignSelf: 'center',
};

const durationText = {
	height: 100,
  fontSize: 70,
};

export default StyleSheet.create({
  button,
  buttonIsActive,
  buttonIsInvalid,
  duration,
  durationText,
});
