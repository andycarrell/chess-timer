import React, { Component } from 'react';
import { View } from 'react-native';
import Timers from './components/Timers';
import { RestartButton } from './components/IconButton';

import styles from './styles/styles';

const DURATION_START_TOTAL = 600;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: DURATION_START_TOTAL,
    };
  }

  render = () =>
    <View style={styles.body}>
      <Timers
        startDuration={this.state.duration}
        isPaused={false}
      >
      {this.renderActionButtons()}
      </Timers>
    </View>;

  renderActionButtons = () =>
    <View style={styles.actionButtons}>
      <RestartButton onPress={this.handleOnRestart}/>
    </View>;

  handleOnRestart = () => {
    this.setState(prevState => ({
      duration: prevState.duration + 0.1E-10
    }));
  }
}
