import React, { Component } from 'react';
import '../App.css';
import partlycloudy from "../img/partlycloudy.ico";

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                PiWeather Report 
                <img className="partlycloudy" src={partlycloudy}></img>
                
            </div>
        );
    }
}

export default Header;