import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC9-0647A_rj-eukVXnmLutHv-Sr9T_jwY",
    authDomain: "iotoamk2019.firebaseapp.com",
    databaseURL: "https://iotoamk2019.firebaseio.com",
    projectId: "iotoamk2019",
    storageBucket: "iotoamk2019.appspot.com",
    messagingSenderId: "892871525708",
    appId: "1:892871525708:web:003a15358e23c849fd3be9",
    measurementId: "G-XYMHEV6XT7"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
