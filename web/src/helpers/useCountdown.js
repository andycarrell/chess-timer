import { useCallback, useEffect, useState } from 'react';
import { useInterval } from './useInterval';

export function useCountdown(startAt, isCountingDown) {
  const [duration, setDuration] = useState(startAt || 0);
  const decrement = () => setDuration(c => c - 1);
  const interval = isCountingDown ? 1000 : null;

  const startAgain = useCallback(() => {
    setDuration(startAt);
  }, [setDuration, startAt]);

  useEffect(() => {
    setDuration(Math.trunc(startAt || 0));
  }, [startAt]);

  useInterval(decrement, interval);

  return { duration, startAgain };
}
