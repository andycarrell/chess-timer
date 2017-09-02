import React from 'react';
import '../static/PauseButton.css';
import pauseLogo from '../static/pause-button.svg';

export default props =>
  <button onClick={props.onClick}>
    <img src={pauseLogo} className="pause-logo" alt="logo" />
  </button>;
