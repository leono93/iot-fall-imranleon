import React, { Component } from 'react';
import Chart from 'react-google-charts';

class Data extends Component {

    render() {
        let aMinTemp = [14.9, 15.4, 13.2, 9.6, 8.7, 12.2, 9.4, 11.9, 8.3, 13.1, 14.4, 13.9, 10.9, 8.9, 4.6, 2.8, 5.8, 1.7, 4.1, 3.8, 2.3, 0.2, 2.3, 1, 2.9, 8.1, 8.7, 6.3, 8.2, 7.8]
        let aMaxTemp = [22.3, 23.1, 16.2, 15.5, 14.7, 14.9, 16.1, 15.1, 18.1, 16.2, 21.2, 15.4, 14.4, 11.8, 11.9, 9, 10.9, 9.2, 9.1, 9.2, 9, 7.9, 7.7, 6.1, 9.4, 10.2, 10.6, 13, 9.8, 10.9]
        let aHumidity = [67, 65, 63, 89, 84, 64, 59, 85, 79, 85, 61, 96, 71, 71, 62, 81, 69, 57, 67, 65, 61, 75, 61, 65, 76, 87, 93, 78, 87, 87]
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

        let humSum = aHumidity.reduce((previous, current) => current += previous);
        let avgHum = humSum / aHumidity.length; 

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

        var firstMinData = aMinTemp[0];
        var lastMinData = aMinTemp[aMinTemp.length-1];
        var minDifference = firstMinData-lastMinData;
        var firstMaxData = aMaxTemp[0];
        var lastMaxData = aMaxTemp[aMaxTemp.length-1];
        var maxDifference = firstMaxData-lastMaxData;


        return (
            <div className="data">
                <h1>Historical Weather Data Analysis for {month} {year}</h1>

                Lowest recorded temperature: {minTemp} °C   <br/>
                Highest recorded temperature: {maxTemp} °C  <br/>
                                                            <br/>
                Average minimum temperature: {minAvg.toFixed(1)} °C    <br/>
                Average maximum temperature: {maxAvg.toFixed(1)} °C    <br/>
                                                                       <br/>
                Median of minimum temperatures: {minMedian} °C         <br/>
                Median of maximum temperatures: {maxMedian} °C         <br/>
                                                                       <br/>
                Average humidity: {avgHum.toFixed(1)} %                           <br/>
                
                                                                       
                <h4>Temperature fluctuation in {month} {year}</h4> 
                Fluctuation in minimum temperature: {minDifference.toFixed(1)} °C           <br/>
                Fluctuation in maximum temperature: {maxDifference.toFixed(1)} °C                      <br/>
                <br/>
                <div className="chartWeather2">
                <Chart
    width={1200}
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
      title: 'Temperature Records according to the Finnish Meteorological Institute',
      hAxis: { title: 'September | Syyskuu', titleTextStyle: { color: '#333' } },
      vAxis: { minValue: 0 },
      backgroundColor: '#D1EAF8',
      chartArea: { width: '30%', height: 'auto' }
    }}
  />
                </div>
                <div className="chartWeather4">
                <Chart
    width={1200}
    height={'auto'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Day', 'Humidity'],
      ['1', 67],
      ['2', 65],
      ['3', 63],
      ['4', 89],
      ['5', 84],
      ['6', 64],
      ['7', 59],
      ['8', 85],
      ['9', 79],
      ['10', 85],
      ['11', 61],
      ['12', 96],
      ['13', 71],
      ['14', 71],
      ['15', 62],
      ['16', 81],
      ['17', 69],
      ['18', 57],
      ['19', 67],
      ['20', 65],
      ['21', 61],
      ['22', 75],
      ['23', 61],
      ['24', 65],
      ['25', 76],
      ['26', 87],
      ['27', 93],
      ['28', 78],
      ['29', 87],
      ['30', 87]

    ]}
    options={{
      title: 'Humidity Records according to the Finnish Meteorological Institute',
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