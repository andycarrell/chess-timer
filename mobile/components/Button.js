import React from 'react';
import { View, TouchableOpacity } from 'react-native';

export default props =>
  <View style={props.style}>
    <TouchableOpacity onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  </View>;
