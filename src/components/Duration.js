import React, { Component } from 'react';

const prepend = i => i < 0 ? '00' : i < 10 ? `0${i}` : `${i}`

export default class Duration extends Component {
  get minutes() { return Math.trunc(this.props.duration / 60); }
  get seconds() { return Math.trunc(this.props.duration % 60); }

  render = () =>
    <span className="text timer-duration">
      {`${prepend(this.minutes)}:${prepend(this.seconds)}`}
    </span>;
}
