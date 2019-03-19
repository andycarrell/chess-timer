import React, { useState, useCallback } from 'react';
import { useTimersStateContext } from './components/TimersStateContext';
import TimersWithHooks from './components/TimersWithHooks';
import { RestartButton, PauseButton, DurationButton } from './components/IconButton';
import DurationInput from './components/DurationInput';
import './static/App.css';

const DURATION_START_TOTAL = 600;

export default function App() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [duration, setDuration] = useState(DURATION_START_TOTAL);
  const { pause, reset } = useTimersStateContext();
  const pauseAndSetIsUpdatingTo = useCallback(
    to => () => {
      pause();
      setIsUpdating(to);
    },
    [pause, setIsUpdating],
  );
  const updateDuration = useCallback(
    updatedDuration => {
      setDuration(updatedDuration * 60);
      setIsUpdating(false);
      reset();
    },
    [setDuration, setIsUpdating, reset],
  );

  const renderInput = () => (
    <div className="content-margin">
      <DurationInput
        defaultValue={duration / 60}
        onClick={updateDuration}
        onCancel={pauseAndSetIsUpdatingTo(false)}
      />
    </div>
  );

  const renderActionButtons = () => (
    <div className="action-buttons">
      <RestartButton onClick={reset} />
      <div style={{ padding: '10px' }} />
      <PauseButton onClick={pause} />
      <div style={{ padding: '5px' }} />
      <DurationButton onClick={pauseAndSetIsUpdatingTo(true)} />
    </div>
  );

  return (
    <div className="App">
      <TimersWithHooks startDuration={duration}>
        {isUpdating ? renderInput() : renderActionButtons()}
      </TimersWithHooks>
    </div>
  );
}
