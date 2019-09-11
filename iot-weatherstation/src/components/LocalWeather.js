import React, { Component } from 'react';

class LocalWeather extends Component {
    constructor(){
        super();
        this.state={
            city: undefined,
            conditions: undefined,
            country: undefined,
            humidity: undefined,
            pressure: undefined,
            temp: undefined,
            min_temp: undefined,
            max_temp: undefined,
            visibility: undefined

        };
        this.getWeather();
    }

    getWeather = async() => { 
        const api_call = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Oulu&appid=58b1f072de0327f45be91ce1a819c2fe");

    const response = await api_call.json();

    this.setState({
        city: response.name,
        country: response.sys.country,
        conditions: response.weather[0].description,
        humidity: response.main.humidity,
        pressure: response.main.pressure,      
        temp: Math.round(response.main.temp-273.15),
        min_temp: Math.round(response.main.temp_min-273.15),
        max_temp: Math.round(response.main.temp_max-273.15),
        visibility: Math.round(response.visibility*1.609344/1000)
    })
}

    render() {
        return (
            <div className="localweather">
                <p>
                Current weather in: {this.state.city}           <br/>
                Country: {this.state.country}                   <br/>
                Conditions: {this.state.conditions}             <br/>
                Humidity: {this.state.humidity}%                <br/>
                Pressure: {this.state.pressure} hPa             <br/>
                Current temperature: {this.state.temp} °C       <br/>
                Minimum temperature: {this.state.min_temp} °C   <br/>
                Maximum temperature: {this.state.max_temp} °C   <br/>
                Visibility: {this.state.visibility} km            
                </p>        
            </div>
        );
    }
}

export default LocalWeather;
