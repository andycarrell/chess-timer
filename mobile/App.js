import React, { Component } from 'react';
import { View } from 'react-native';
import Timers from './components/Timers';

import styles from './styles/styles';

const DURATION_START_TOTAL = 600;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: DURATION_START_TOTAL,
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <Timers
          startDuration={this.state.duration}
          isPaused={false}
        />
      </View>
    );
  }
}
