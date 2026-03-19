// Assignment of 7th March

import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');      
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState('');    

  const apiKey = '2194da6620942f43e5c9c256464ca0e0'; 

  const handleSearch = async () => {
    if (!city) return;

    setLoading(true); 
    setError('');
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())}&units=metric&appid=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error('City not found. Try again!');
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Enter city name..."
          onChange={(e) => setCity(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p className="loading">Searching the skies...</p>}
      
      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p className="temp">{Math.round(weather.main.temp)}°C</p>
          <p className="desc">{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;