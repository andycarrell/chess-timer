const setIntervalAt = seconds => fn => setInterval(fn, seconds * 1000);

export const everySecondRun = setIntervalAt(1);
