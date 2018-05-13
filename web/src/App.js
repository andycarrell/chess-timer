import React, { Component } from 'react';
import Timers from './components/Timers';
import {
  RestartButton,
  PauseButton,
  DurationButton,
} from './components/IconButton';
import DurationInput from './components/DurationInput';
import { toggleFor } from './helpers';
import './static/App.css';

const DURATION_START_TOTAL = 300;

export default class App extends Component {
  state = {
    isPaused: false,
    isUpdating: false,
    duration: DURATION_START_TOTAL,
  };

  render = () =>
    <div className="App">
      <Timers
        startDuration={this.state.duration}
        isPaused={this.state.isPaused}
      >
        {this.state.isUpdating
          ? this.renderInput()
          : this.renderActionButtons()
        }
      </Timers>
    </div>;

  renderInput = () =>
    <div className="content-margin">
      <DurationInput
        defaultValue={this.state.duration}
        onClick={this.handleOnInputSubmit}
        onCancel={this.handleOnInputCancel}
      />
    </div>;

  renderActionButtons = () =>
    <div className="action-buttons">
      <RestartButton onClick={this.handleOnRestart}/>
      <div style={{ padding: '10px' }} />
      <PauseButton onClick={this.handleOnPaused} />
      <div style={{ padding: '5px' }} />
      <DurationButton onClick={this.handleOnInputClick} />
    </div>;

  handleOnInputSubmit = duration => {
    this.setState(() => ({
      isPaused: false,
      isUpdating: false,
      duration: duration * 60 + 0.1E-10,
    }));
  }

  handleOnInputCancel = () => {
    this.setState(() => ({
      isPaused: false,
      isUpdating: false,
    }));
  }

  handleOnRestart = () => {
    this.setState(prevState => ({
      duration: prevState.duration + 0.1E-10,
      isPaused: false,
    }));
  }

  handleOnPaused = () => {
    this.setState(toggleFor('isPaused'));
  }

  handleOnInputClick = () => {
    this.setState(() => ({
      isUpdating: true,
      isPaused: true,
    }));
  }
}
