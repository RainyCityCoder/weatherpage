import './App.css';
import React from 'react';
import Weather from './components/Weather';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/weather/:zipCode" element={<Weather />} />
      </Routes>
      <a
        href="https://www.weatherapi.com/" 
        title="Free Weather API">
          <img 
            className='weather-api-img'
            src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' 
            alt="Weather data by WeatherAPI.com" 
            border="0" />
      </a>
    </div>
  )
}

export default App;
