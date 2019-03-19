import React from 'react';
import ReactDOM from 'react-dom';
import './static/index.css';
import App from './App';
import { TimersStateContextProvider } from './components/TimersStateContext';

ReactDOM.render(
  <TimersStateContextProvider>
    <App />
  </TimersStateContextProvider>,
  document.getElementById('root'),
);
