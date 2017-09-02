import React from 'react';
import src from '../static/refresh-button.svg';

export default props =>
  <button onClick={props.onClick}>
    <img src={src} className="pause-logo" alt="logo" />
  </button>;
