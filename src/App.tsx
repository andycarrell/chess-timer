import { Component, useState } from "react";
import Timers from "./components/Timers";
import {
  RestartButton,
  PauseButton,
  DurationButton,
} from "./components/IconButton";
import DurationInput from "./components/DurationInput";
import { toggleFor } from "./helpers";
import "./static/App.css";

const DURATION_START_TOTAL = 600;

export const App = () => {
  const [state, setState] = useState({
    isPaused: false,
    isUpdating: false,
    duration: DURATION_START_TOTAL,
  });

  const renderInput = () => (
    <div className="content-margin">
      <DurationInput
        defaultValue={state.duration / 60}
        onClick={handleOnInputSubmit}
        onCancel={handleOnInputCancel}
      />
    </div>
  );

  const renderActionButtons = () => (
    <div className="action-buttons">
      <RestartButton onClick={handleOnRestart} />
      <div style={{ padding: "10px" }} />
      <PauseButton onClick={handleOnPaused} />
      <div style={{ padding: "5px" }} />
      <DurationButton onClick={handleOnInputClick} />
    </div>
  );

  const handleOnInputSubmit = (duration: number) => {
    setState(() => ({
      isPaused: false,
      isUpdating: false,
      duration: duration * 60 + 0.1e-10,
    }));
  };

  const handleOnInputCancel = () => {
    setState((prevState) => ({
      ...prevState,
      isPaused: false,
      isUpdating: false,
    }));
  };

  const handleOnRestart = () => {
    setState((prevState) => ({
      ...prevState,
      duration: prevState.duration + 0.1e-10,
      isPaused: false,
    }));
  };

  const handleOnPaused = () => {
    setState(toggleFor("isPaused"));
  };

  const handleOnInputClick = () => {
    setState((prevState) => ({
      ...prevState,
      isUpdating: true,
      isPaused: true,
    }));
  };

  return (
    <div className="App">
      <Timers startDuration={state.duration} isPaused={state.isPaused}>
        {state.isUpdating ? renderInput() : renderActionButtons()}
      </Timers>
    </div>
  );
};
