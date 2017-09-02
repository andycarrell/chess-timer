export const toggleFor = key => prevState => ({
  [key]: !prevState[key],
});
