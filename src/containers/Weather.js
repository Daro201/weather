import React, { Component } from 'react';

import WeatherForm from '../components/WeatherForm';
import WeatherMap from '../components/WeatherMap';
import WeatherTable from '../components/WeatherTable';
import WeatherHeader from '../components/WeatherHeader';
import styles from './weather.css';


class Weather extends Component {
    constructor(props) {
        super(props);

        this.CORS_URL = 'https://cors-anywhere.herokuapp.com/';
        this.API_URL = 'https://www.metaweather.com';
        this.WOEID_API = '/api/location/search/?query=';
        this.WEATHER_API = '/api/location/';
        this.IMAGE_URL = `${this.API_URL}/static/img/weather/`;

        this.state = {
            weatherData: [],
            woeid: '',
        };
    }

    getWeather(city) {
        fetch(`${this.CORS_URL}${this.API_URL}${this.WOEID_API}${city}`)
            .then(resp => resp.json())
            .then(resp => {
                if (resp.length && resp[0].woeid) {
                    this.setState({ woeid: resp[0].woeid });
                    fetch(`${this.CORS_URL}${this.API_URL}${this.WEATHER_API}${resp[0].woeid}`)
                        .then(resp => resp.json())
                        .then(resp => {
                            const latt = resp.latt_long.split(',')[0];
                            const long = resp.latt_long.split(',')[1];
                            const weatherData = resp.consolidated_weather.map(item => {
                                return { ...item, weather_state: `${this.IMAGE_URL}${item.weather_state_abbr}.svg` };
                                }
                            );

                            this.setState({ weatherData, latt, long });           
                           
                            
                        });
                } else {
                   this.setState({ woeid: null }); 
                }
            });
    }

    render() {
        return (
            <React.Fragment>
                <WeatherHeader />
                <div className="container">                
                    <div className="row">
                        <div className="col-xs-12" className="text-center">
                            <WeatherForm submitHandler={this.getWeather.bind(this)} />
                            {this.state.woeid !== null ? (
                                <div>
                                    <div className="col-xs-6">
                                        {this.state.latt !== undefined && 
                                            <WeatherMap latt={this.state.latt} long={this.state.long} />
                                        }
                                    </div>
                                    <div className="col-xs-6">
                                        {this.state.weatherData.length > 0 && 
                                            <WeatherTable weatherData={this.state.weatherData} />
                                        }
                                    </div>
                                </div> 
                            ) : (
                                <div className="col-xs-12" className ={styles.wather}>
                                    <div className ="image">  
                                        <img src="https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="globe"/>
                                        <div className="caption post-content">
                                            <h1>Something went wrong, try again</h1>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Weather;