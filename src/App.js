import React, { Component } from 'react';
import Timers from './components/Timers';
import RestartButton from './components/RestartButton';
import PauseButton from './components/PauseButton';
import DurationButton from './components/DurationButton';
import DurationInput from './components/DurationInput';
import { toggleFor } from './helpers';
import './static/App.css';

const DURATION_START_TOTAL = 600;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPaused: false,
      isUpdating: false,
      duration: DURATION_START_TOTAL,
    };
  }

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
      />
    </div>;

  renderActionButtons = () =>
    <div className="pause-button">
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
      duration: duration + 0.1E-10,
    }));
  }

  handleOnRestart = () => {
    this.setState(prevState => ({
      duration: prevState.duration + 0.1E-10
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

export default App;