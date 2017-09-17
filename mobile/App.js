import React, { Component } from 'react';
import { View } from 'react-native';
import Timers from './components/Timers';
import { RestartButton, PauseButton } from './components/IconButton';
import { toggleFor } from './helpers';

import styles from './styles/styles';

const DURATION_START_TOTAL = 600;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: DURATION_START_TOTAL,
      isPaused: false,
    };
  }

  render = () =>
    <View style={styles.body}>
      <Timers
        startDuration={this.state.duration}
        isPaused={this.state.isPaused}
      >
      {this.renderActionButtons()}
      </Timers>
    </View>;

  renderActionButtons = () =>
    <View style={styles.actionButtons}>
      <PauseButton onPress={this.handleOnPaused} />
      <View style={{ padding: 10 }} />
      <RestartButton onPress={this.handleOnRestart} />
    </View>;

  handleOnRestart = () => {
    this.setState(prevState => ({
      duration: prevState.duration + 0.1E-10
    }));
  }

  handleOnPaused = () => {
    this.setState(toggleFor('isPaused'));
  }
}
