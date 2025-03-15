import React from 'react';

const WeatherDisplay = ({ weather }) => {
    const temperatureStyle = {
        color: weather.temperature > 20 ? "red" : "blue",
        fontSize: "24px",
        fontWeight: "bold",
    };

    return (
        <div>
            <p style={temperatureStyle}>Temperature: {weather.temperature}</p>
            <p>Conditions: <span> {weather.conditions}</span></p>
        </div>
    )
}

export default WeatherDisplay
