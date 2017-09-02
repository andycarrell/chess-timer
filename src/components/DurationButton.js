import React from 'react';
import durationLogo from '../static/watch-with-blank-face.svg';

export default props =>
  <button onClick={props.onClick}>
    <img src={durationLogo} className="pause-logo" alt="logo" />
  </button>;
