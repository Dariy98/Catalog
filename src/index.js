import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAhgplh1P9bNTZhy7uCQ3xJ2n7jGmaMm6M",
  authDomain: "fir-catalog-218d0.firebaseapp.com",
  databaseURL: "https://fir-catalog-218d0.firebaseio.com",
  projectId: "fir-catalog-218d0",
  storageBucket: "fir-catalog-218d0.appspot.com",
  messagingSenderId: "194710781916",
  appId: "1:194710781916:web:cec7328b5d657b505e1919"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
