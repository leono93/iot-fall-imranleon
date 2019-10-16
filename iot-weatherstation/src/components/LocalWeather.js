import React, { Component } from 'react';
import Chart from 'react-google-charts';

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
                <h1>from Local Weather Station</h1>
                Current weather in: {this.state.city}           <br/>
                Country: {this.state.country}                   <br/>
                Conditions: {this.state.conditions}             <br/>
                Humidity: {this.state.humidity}%                <br/>
                Pressure: {this.state.pressure} hPa             <br/>
                Current temperature: {this.state.temp} °C       <br/>
                Minimum temperature: {this.state.min_temp} °C   <br/>
                Maximum temperature: {this.state.max_temp} °C   <br/>
                Visibility: {this.state.visibility} km   
                <div className="chartWeather3">
                <Chart
    width={1150}
    height={'auto'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Time', 'Pressure'],
      ['Thu Oct  3 13:20:04 2019', 1022],
      ['Thu Oct  3 13:30:04 2019', 1022],
      ['Thu Oct  3 13:40:04 2019', 1022],
      ['Thu Oct  3 13:50:04 2019', 1022],
      ['Thu Oct  3 14:00:04 2019', 1022],
      ['Thu Oct  3 14:10:04 2019', 1022],
      ['Thu Oct  3 14:20:04 2019', 1022],
      ['Thu Oct  3 14:30:04 2019', 1022],
      ['Thu Oct  3 14:40:04 2019', 1022],
      ['Thu Oct  3 14:50:04 2019', 1021],
      ['Thu Oct  3 15:00:04 2019', 1022],
      ['Thu Oct  3 15:10:04 2019', 1022]

    ]}
    options={{
      title: 'Raspberry Pi Weather: Pressure',
      hAxis: { title: 'Pressure in hPa', titleTextStyle: { color: '333' } },
      vAxis: { minValue: 980 },
      backgroundColor: '#D1EAF8',
      chartArea: { width: '30%', height: 'auto' }
    }}
  />
                </div>          
            </div>
        );
    }
}

export default LocalWeather;
