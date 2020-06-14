import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock />

  </React.StrictMode>,
  document.getElementById('root')
);


