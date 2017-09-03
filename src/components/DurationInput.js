import React, { Component } from 'react';
import '../static/DurationInput.css'
import checkBox from '../static/check-box.svg';

export default class DurationInput extends Component {
  constructor(props) {
    super(props);

    this.value = props.defaultValue;
  }

  render = () =>
    <div className="duration-input">
      <input
        className="text duration-input--input"
        ref={di => this.durationInput = di}
        placeholder={Math.trunc(this.props.defaultValue)}
        onChange={this.handleOnChange}
      />
      <button
        className="duration-input--button"
        onClick={this.handleOnSubmit}
      >
        <img src={checkBox} className="duration-input--logo" alt="logo" />
      </button>
    </div>;

  handleOnChange = e => {
    this.value = e.target.value;
  }

  handleOnSubmit = () => {
    this.props.onClick(Number(this.value || 0));
  }

  componentDidMount() {
    this.durationInput && this.durationInput.focus();
  }
}
