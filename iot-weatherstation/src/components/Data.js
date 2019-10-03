import React, { Component } from 'react';
import Chart from 'react-google-charts';

class Data extends Component {

    render() {
        let aMinTemp = [14.9, 15.4, 13.2, 9.6, 8.7, 12.2, 9.4, 11.9, 8.3, 13.1, 14.4, 13.9, 10.9, 8.9, 4.6, 2.8, 5.8, 1.7, 4.1, 3.8, 2.3, 0.2, 2.3, 1, 2.9, 8.1, 8.7, 6.3, 8.2, 7.8]
        let aMaxTemp = [22.3, 23.1, 16.2, 15.5, 14.7, 14.9, 16.1, 15.1, 18.1, 16.2, 21.2, 15.4, 14.4, 11.8, 11.9, 9, 10.9, 9.2, 9.1, 9.2, 9, 7.9, 7.7, 6.1, 9.4, 10.2, 10.6, 13, 9.8, 10.9]
        const month = "September";
        const year = "2019";
        var minTemp = Math.min(...aMinTemp);
        var maxTemp = Math.max(...aMaxTemp);
        let minCount = aMinTemp.length;
        let maxCount = aMaxTemp.length;
        var minSum = 0;
        var maxSum = 0;

        for (var i = 0; i < aMinTemp.length; i++){
            minSum += aMinTemp[i]
        };

        var minAvg = minSum / minCount;

        for (var i = 0; i < aMaxTemp.length; i++){
            maxSum += aMaxTemp[i]
        };

        var maxAvg = maxSum / maxCount;

        aMinTemp.sort(function(a,b){
            return a - b;
        });

        let minLowMiddle = Math.floor((minCount - 1)/2);
        let minHighMiddle = Math.floor((minCount - 2)/2);
        let minMedian = (aMinTemp[minLowMiddle] + aMinTemp[minHighMiddle]) /2;

        aMaxTemp.sort(function(a,b){
            return a - b;
        });

        let maxLowMiddle = Math.floor((maxCount - 1)/2);
        let maxHighMiddle = Math.floor((maxCount - 2)/2);
        let maxMedian = (aMaxTemp[maxLowMiddle] + aMaxTemp[maxHighMiddle]) /2;


        return (
            <div className="data">
                <h1>Historical Weather Data for {month} {year}</h1>

                Lowest recorded temperature: {minTemp} °C   <br/>
                Highest recorded temperature: {maxTemp} °C  <br/>
                                                            <br/>
                Average minimum temperature: {minAvg.toFixed(1)} °C    <br/>
                Average maximum temperature: {maxAvg.toFixed(1)} °C    <br/>
                                                                       <br/>
                Median of minimum temperatures: {minMedian} °C         <br/>
                Median of maximum temperatures: {maxMedian} °C
                <div className="chartWeather">
                <Chart
    width={1500}
    height={'auto'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Day', 'Min Temp', 'Max Temp'],
      ['1', 14.9, 22.3],
      ['2', 15.4, 23.1],
      ['3', 13.2, 16.2],
      ['4', 9.6, 15.5],
      ['5', 8.7, 14.7],
      ['6', 12.2, 14.9],
      ['7', 9.4, 16.1],
      ['8', 11.9, 15.1],
      ['9', 8.3, 18.1],
      ['10', 13.1, 16.2],
      ['11', 14.4, 21.2],
      ['12', 13.9, 15.4],
      ['13', 10.9, 14.4],
      ['14', 8.9, 11.8],
      ['15', 4.6, 11.9],
      ['16', 2.8, 9],
      ['17', 5.8, 10.9],
      ['18', 1.7, 9.2],
      ['19', 4.1, 9.1],
      ['20', 3.8, 9.2],
      ['21', 2.3, 9],
      ['22', 0.2, 7.9],
      ['23', 2.3, 7.7],
      ['24', 1, 6.1],
      ['25', 2.9, 9.4],
      ['26', 8.1, 10.2],
      ['27', 8.7, 10.6],
      ['28', 6.3, 13],
      ['29', 8.2, 9.8],
      ['30', 7.8, 10.9]

    ]}
    options={{
      title: 'Weather Records according to the Finnish Meteorological Institute',
      hAxis: { title: 'September | Syyskuu', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      backgroundColor: '#D1EAF8',
      chartArea: { width: '30%', height: 'auto' }
    }}
  />
                </div>
            </div>

        );
    }
}

export default Data;