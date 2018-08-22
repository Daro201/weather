import React from 'react';

const WeatherTable = ({ weatherData }) => (
    <table className="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Temp</th>
                <th>Air Pressure</th>
                <th>Weather State</th>
            </tr>            
        </thead>
        <tbody>
            {weatherData.map(item => (
                <tr>
                    <td>{item.applicable_date}</td>
                    <td>{Math.floor(item.the_temp)}</td>
                    <td>{Math.floor(item.air_pressure)}</td>
                    <td>
                        <img src={item.weather_state} alt="Weather" height="32" />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default WeatherTable;
