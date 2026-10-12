import React from 'react'
import PropTypes from 'prop-types'

function WeatherCard({ day }) {
  return (
    <div className="m-2 column">
      <div key="index" className="card card-custom mx-auto text-center border border-info" >
        <div className="card-body">
          <h5 className="card-title">
            {day.date}
          </h5>
          <h6 className="card-subtitle mb-2">
            Min: {day.day.mintemp_f} °F
          </h6>
          <h6 className="card-subtitle mb-2">
            Max: {day.day.maxtemp_f} °F
          </h6>
          <h6 className="card-subtitle mb-2">
            Wind Gust: {day.day.maxwind_mph} MPH
          </h6>
          <p className="card-text">
            {day.day.condition.text}
          </p>
        </div>
      </div> 
    </div> 
  )
}

WeatherCard.propTypes = {
  day: PropTypes.object.isRequired,
}

export default WeatherCard
