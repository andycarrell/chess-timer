import React from 'react';
import src from '../static/watch-with-blank-face.svg';

export default props =>
  <button onClick={props.onClick}>
    <img src={src} className="pause-logo" alt="logo" />
  </button>;
