export const toggleFor = (key) => (prevState) => ({
  ...prevState,
  [key]: !prevState[key],
});

export const decrementFor = (key) => (prevState) => ({
  ...prevState,
  [key]: prevState[key] - 1,
});
