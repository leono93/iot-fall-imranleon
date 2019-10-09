import React from 'react';
import './App.css';
import Header from './components/Header.js';
import LocalWeather from './components/LocalWeather.js';
import PiWeather from './components/PiWeather.js';
import Footer from './components/Footer.js';
import Data from './components/Data.js';

function App() {
  return (
    <div className="Main">
      <div><Header/></div>
      <div><LocalWeather/></div><hr/>
      <div><PiWeather/></div><hr/>
      <div><Data/></div><hr/>
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
