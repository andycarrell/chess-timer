import React, { Component } from 'react';
import Duration from './Duration';
import Button from './Button';

import { everySecondRun, decrementFor } from '../helpers';

import timerStyles from '../styles/timer';
import hStyles from '../styles/styles';

const styles = {
  ...timerStyles,
  ...hStyles,
};

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
    <Button
      style={[
        styles.contentMargin,
        styles.button,
        this.props.isActive && styles.buttonIsActive,
        !this.isValid && styles.buttonIsInvalid,
        this.props.style,
      ]}
      onPress={this.handleOnClick}
    >
      <Duration
        duration={this.state.duration}
      />
    </Button>;

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

Timer.defaultProps = {
  style: {},
};
