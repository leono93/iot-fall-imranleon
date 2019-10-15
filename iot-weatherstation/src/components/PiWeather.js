import React, { Component } from 'react';
import Chart from 'react-google-charts';
import Import from '../components/Import.js';

class PiWeather extends Component {

    render() {
        return (
            <div className="piweather">
                <h1>Information from Raspberry Pi Weather Station</h1>
               <Import/>
            </div>
        );
    }
}

export default PiWeather;

