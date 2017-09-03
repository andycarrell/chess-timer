import React, { Component } from 'react';
import { SubmitButton, ClearButton } from './IconButton';
import '../static/DurationInput.css';

export default class DurationInput extends Component {
  constructor(props) {
    super(props);

    this.value = props.defaultValue;
  }

  render = () =>
    <div className="duration-input">
      <div>
        <input
          className="text duration-input--input"
          ref={di => this.durationInput = di}
          placeholder={Math.trunc(this.props.defaultValue)}
          onChange={this.handleOnChange}
        />
      </div>
      <SubmitButton onClick={this.handleOnSubmit} />
      <ClearButton onClick={this.props.onCancel}/>
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
