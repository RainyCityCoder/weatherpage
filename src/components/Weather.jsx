import React, { useState, useEffect } from 'react'
import WeatherCard from './WeatherCard';
import { Link, useParams } from 'react-router-dom';

function Weather() {
  const { zipCode } = useParams();
  const [forecastObj, setForecastObj] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    let apiKey = process.env.REACT_APP_API_KEY;

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${zipCode}&days=3&aqi=no&alerts=no`)
      .then(reply => reply.json())
      .then(
        json => {
          setForecastObj(json);
          setisLoading(false);
        }, 
        error => {
          setHasError(true);
          setisLoading(false);
        })
  }, [zipCode])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (hasError) {
    return <div>Something went wrong, try again later!</div>
  }

// Setting "days" to the array containing daily forecasts
  const days = forecastObj.forecast.forecastday;
  
  return (
    <div className="container">
      {days.map((day, index) => {
        return(
          <>
            <WeatherCard
            key={index}
            day={day} 
            />
          </>
          )
        })}
      <Link 
        to="/"
        className="btn btn-primary"
        role="button"
      >
        Enter a different location
      </Link>
    </div>
  )
}

export default Weather
