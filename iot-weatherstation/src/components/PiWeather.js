import React, { Component } from 'react';
import Chart from 'react-google-charts';

class PiWeather extends Component {
    render() {
        return (
            <div className="piweather">
                <h1>Information from Raspberry Pi Weather Station</h1>

                <Chart
    width={1500}
    height={'auto'}
    align={'left'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Day', 'Min Temp', 'Max Temp'],
      ['1', 12, 18],
      ['2', 11, 15],
      ['3', 14, 19],
      ['4', 7, 13],
      ['5', 6, 13],
      ['6', 9, 14],
      ['7', 10, 16],
      ['8', 12, 17],
      ['9', 8, 15],
      ['10', 7, 15],
      ['11', 12, 21],
      ['12', 11, 17]
    ]}
    options={{
      title: 'Weather Records',
      hAxis: { title: 'September | Syyskuu', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      backgroundColor: '#D1EAF8',
      // For the legend to fit, we make the chart area smaller
      chartArea: { width: '30%', height: 'auto' }
      // lineWidth: 25
    }}
  />
            </div>
        );
    }
}

export default PiWeather;