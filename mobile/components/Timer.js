import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Duration from './Duration';

import timerStyles from '../styles/timer';
import hStyles from '../styles/styles';

const styles = {
  ...timerStyles,
  ...hStyles,
};

export const decrementFor = key => prevState => ({
  [key]: prevState[key] - 1,
});

const setIntervalAt = seconds => fn =>
  setInterval(fn, seconds * 1000);

export const everySecondRun = setIntervalAt(1);

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: props.duration || 0,
    };

    this.interval = null;
  }

  get isValid() { return this.state.duration > 0; }

  render = () =>
    <View style={[
        styles.contentMargin,
        styles.button,
        this.props.isActive && styles.buttonIsActive,
        !this.isValid && styles.buttonIsInvalid,
      ]}
    >
      <TouchableOpacity onPress={this.handleOnClick}>
        <Duration
          duration={this.state.duration}
        />
      </TouchableOpacity>
    </View>;

  handleOnClick = () => {
    this.isValid && this.props.onClick(this.props.isActive);
  }

  componentDidMount() {
    this.props.isActive && this.startDecrement();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.duration !== this.props.duration) {
      this.stopDecrement();
      this.setState(() => ({ duration: Math.trunc(nextProps.duration) }));
      return;
    }

    if (nextProps.isActive) {
      this.startDecrement();
    } else {
      this.stopDecrement();
    }
  }

  stopDecrement = () => {
    this.interval && clearInterval(this.interval);
  }

  startDecrement = () => {
    this.interval = everySecondRun(this.decrement);
  }

  decrement = () => {
    this.setState(decrementFor('duration'));
  }
}
