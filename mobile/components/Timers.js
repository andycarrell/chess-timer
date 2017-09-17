import React, { Component } from 'react';
import { View } from 'react-native';

import Timer from './Timer';
import { toggleFor } from '../helpers';

import styles from '../styles/styles';

const INITIAL_STATE = {
  isTop: false,
  isBottom: false,
};

const start = id => () => ({
  isTop: (id === 'bottom'),
  isBottom: (id === 'top'),
});

export default class Timers extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  get isDefault() { return !this.state.isTop && !this.state.isBottom; }

  render() {
    const { isPaused, startDuration } = this.props;

    return (
      <View style={styles.content}>
        <Timer
          style={styles.verticalFlip}
          onClick={this.handleOnClick('top')}
          duration={startDuration}
          isActive={!isPaused && this.state.isTop}
        />
        <Timer
          onClick={this.handleOnClick('bottom')}
          duration={startDuration}
          isActive={!isPaused && this.state.isBottom}
        />
      </View>
    );
  }

  handleOnClick = id => isActive => {
    if (isActive) {
      this.setState(toggleFor('isBottom'));
      this.setState(toggleFor('isTop'));
    } else if (this.isDefault) {
      this.setState(start(id));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startDuration !== this.props.startDuration) {
      this.setState(() => INITIAL_STATE);
    }
  }
}
