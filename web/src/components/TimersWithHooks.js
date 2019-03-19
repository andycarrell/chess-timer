import React from 'react';
import TimerWithHooks from './TimerWithHooks';
import { useTimersStateContext } from './TimersStateContext';

export default function TimersWithHooks({ children, startDuration }) {
  const { stateIs, clickTop, clickBottom } = useTimersStateContext();

  return (
    <div className="body">
      <TimerWithHooks
        className="vertical-flip"
        onClick={clickTop}
        duration={startDuration}
        isActive={stateIs('top-running')}
      />
      {children}
      <TimerWithHooks
        onClick={clickBottom}
        duration={startDuration}
        isActive={stateIs('bottom-running')}
      />
    </div>
  );
}
