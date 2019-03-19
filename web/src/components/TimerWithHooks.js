import React, { useEffect, useCallback } from 'react';
import Duration from './Duration';
import { useTimersStateContext } from './TimersStateContext';
import { useCountdown } from '../helpers';
import '../static/Timer.css';

function useAppTimerCountdown(startAt, isActive) {
  const { state, stateIs } = useTimersStateContext();
  const { duration, startAgain } = useCountdown(startAt, isActive);
  const isValid = duration > 0;

  useEffect(() => {
    if (stateIs('initial')) {
      startAgain();
    }
  }, [state, startAgain]);

  return { duration, isValid };
}

export default function TimerWithHooks(props) {
  const { isValid, duration } = useAppTimerCountdown(props.duration, props.isActive);

  const handleOnClick = useCallback(() => {
    isValid && props.onClick();
  }, [isValid, props.onClick]);

  return (
    <div className={`content-margin ${props.className || ''}`}>
      <button
        className={`
          timer-button
          ${props.isActive && isValid ? 'timer-button--active' : ''}
          ${!isValid ? 'timer-button--invalid' : ''}
        `}
        onClick={handleOnClick}
      >
        <Duration duration={duration} />
      </button>
    </div>
  );
}
