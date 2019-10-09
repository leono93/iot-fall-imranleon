import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header.js';
import LocalWeather from './components/LocalWeather.js';
import PiWeather from './components/PiWeather.js';
import Footer from './components/Footer.js';
import Data from './components/Data.js';

function App() {
  return (
    <div className="Main">
      <div><Header/></div>
      <br/>
      <div><LocalWeather/>
      <PiWeather/>
      </div>
      <div>
        <Data/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="footer">
      <Footer/>
      </div>
    </div>
  );
}

export default App;
