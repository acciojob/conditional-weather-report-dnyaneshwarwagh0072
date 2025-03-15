import React from 'react';

const WeatherDisplay = ({ weather }) => {
    const temperatureStyle = {
        color: weather.temperature > 20 ? "red" : "blue",
        fontSize: "24px",
        fontWeight: "bold",
    };

    return (
        <div>
            <p style={temperatureStyle}>Temperature: {weather.temperature}°C</p>
            <p>Conditions: {weather.conditions}</p>
        </div>
    )
}

export default WeatherDisplay
