import React from 'react';
import '../static/PauseButton.css';
import src from '../static/pause-button.svg';

export default props =>
  <button onClick={props.onClick}>
    <img src={src} className="pause-logo" alt="logo" />
  </button>;
