import React from 'react';

const WeatherForm = ({ submitHandler }) => (
    <form className="form-inline" onSubmit={(e) => {
        e.preventDefault();
        submitHandler(e.target.querySelector('input').value);
    }}>
        <div className="form-group">
            <label>City:</label>
            <input className="form-control" placeholder="Warsaw" />
        </div>      
        <button type="submit" className="btn btn-default">Search</button>
    </form>
);

export default WeatherForm;
