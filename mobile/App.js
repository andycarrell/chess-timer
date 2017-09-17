import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Timer from './components/Timer';

import styles from './styles/styles';

const DURATION_START_TOTAL = 600;

export const toggleFor = key => prevState => ({
  [key]: !prevState[key],
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: DURATION_START_TOTAL,
      isActive: true,
    };
  }

  render() {
    return (
      <View style={styles.body}>
        <Timer
          onClick={() => this.setState(toggleFor('isActive'))}
          duration={this.state.duration}
          isActive={this.state.isActive}
        />
      </View>
    );
  }
}
