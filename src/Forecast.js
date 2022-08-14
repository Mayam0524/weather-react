import React from "react";

export default function Forecast(props) {
  return (
    <div className="Forecast" class="d-none d-sm-block">
      <div class="weather-forecast-date">{props.date}</div>
      <span>
        <img
          src="https://openweathermap.org/img/wn/02d@2x.png"
          alt=""
          width="70"
          id="icon"
          class="next-day"
        />
      </span>
      <div class="weather-forecast-temperatures">
        <span class="weather-forecast-temperature-max">{props.maxTemp}°</span>|
        <span class="weather-forecast-temperature-min">{props.minTemp}°</span>
      </div>
    </div>
  );
}