import React, { PureComponent } from "react";

const format = (n) => (n < 0 ? "00" : prepend(n));
const prepend = (n) => (n < 10 ? `0${n}` : `${n}`);

export default class Duration extends PureComponent {
  get minutes() {
    return Math.trunc(this.props.duration / 60);
  }
  get seconds() {
    return Math.trunc(this.props.duration % 60);
  }

  render = () => (
    <span className="text timer-duration">
      {`${format(this.minutes)}:${format(this.seconds)}`}
    </span>
  );
}
