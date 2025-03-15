
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather Application</h1>
      <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App;
