import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'typeface-roboto';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Since scr/index.js file is the entry point we need to tweak it a bit so that the react dom loads after the “deviceready” event has been fired by cordova.
if (window.cordova) {
  document.addEventListener('deviceready', () => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }, false);
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();