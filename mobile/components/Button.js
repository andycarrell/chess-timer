import React from 'react';
import { View, TouchableOpacity } from 'react-native';

export default props =>
  <View style={props.style}>
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  </View>;
