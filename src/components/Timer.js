import React, { Component } from 'react';
import Duration from './Duration';
import '../static/Timer.css'

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: props.duration || 0,
    };

    this.interval = null;
  }

  get isValid() { return this.state.duration > 0; }

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

  handleOnClick = () => {
    this.isValid && this.props.onClick(this.props.isActive);
  }

  decrement = () => {
    this.setState(prevState => ({ duration: prevState.duration - 1 }));
  }

  stopDecrement = () => {
    this.interval && clearInterval(this.interval);
  }

  startDecrement = () => {
    this.interval = setInterval(this.decrement, 1000);
  }

  render = () =>
    <div
      className={`
        content-margin
        ${this.props.className ? this.props.className : ''}
      `}
    >
      <button
        className={`
          timer-button
          ${this.props.isActive && this.isValid ? 'timer-button--active' : ''}
          ${!this.isValid ? 'timer-button--invalid' : ''}
        `}
        onClick={this.handleOnClick}
      >
        <Duration duration={this.state.duration} />
      </button>
    </div>;
}
