export const toggleFor = (key) => (prevState) => ({
  [key]: !prevState[key],
});

export const decrementFor = (key) => (prevState) => ({
  [key]: prevState[key] - 1,
});
