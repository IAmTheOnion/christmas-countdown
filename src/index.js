import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Countdown from './Countdown';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="container">
      <h1>Do świąt zostąło jedynie:</h1>
     <Countdown/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
