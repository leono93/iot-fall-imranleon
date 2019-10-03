import React, { Component } from 'react';
import Chart from 'react-google-charts';

class PiWeather extends Component {
    render() {
        return (
            <div className="piweather">
                <h1>Information from Raspberry Pi Weather Station</h1>
                  Pi Data
            </div>
        );
    }
}

export default PiWeather;