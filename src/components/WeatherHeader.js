import React from 'react';

const WeatherHeader = () => (
    <nav className="navbar navbar-default navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">WeatherApp</a>
            </div>
        </div>
    </nav>
);

export default WeatherHeader;
