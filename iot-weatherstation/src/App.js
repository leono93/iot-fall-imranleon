import React from 'react';
import './App.css';
import Header from './components/Header.js';
import LocalWeather from './components/LocalWeather.js';

function App() {
  return (
    <div className="Main">
      <div><Header/></div>
      <br/>
      <div><LocalWeather/></div>
    </div>
  );
}

export default App;
