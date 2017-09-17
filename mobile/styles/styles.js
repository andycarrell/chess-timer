import { StyleSheet } from 'react-native';

const contentMargin = {
  margin: 20,
};

const body = {
  paddingTop: 25,
  backgroundColor: '#fff',
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'lightslategrey',
};

const content = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignSelf: 'stretch',
};

const verticalFlip = {
  transform: [{ rotate: '180deg' }]
};

export default StyleSheet.create({
  contentMargin,
  body,
  content,
  verticalFlip,
});
