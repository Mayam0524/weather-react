import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import axios from "axios";
import "./App.css"

export default function Search() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      feels: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity

    });
  } 
  if (weatherData.ready) {
    return (
    <div className="Header">
      <form id="search-form">
        <span class="search">
          <input
            type="search"
            id="search-input"
            placeholder="Enter city name..."
            autocomplete="off"
            autofocus="on"
          />
        </span>
        <input type="submit" value="🔍" id="submit" />
        <button id="current">📍</button>
      </form>
      <br /><br />
      <div className="Section">
        <p>
          <div class="container">
            <div class="row">
              <div class="col-6">
                <ul>
                  <li class="city">
                    {weatherData.city}
                  </li>
                  <li class="date">
                    <FormattedDate date={weatherData.date} />
                  </li>
                  <li  class="time">
                    <FormattedTime time={weatherData.time} />
                  </li>
                  <li id="sky">
                    {weatherData.description}
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <span class="temp">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    width="60"
                    id="icon"
                  />
                  <span class="current-temp">{Math.round(weatherData.temperature)}℃</span>
                </span>
              </div>
            </div>
          </div>
        </p>
      </div>
      <div className="Other">
      <p>
        <span>Feels like: </span>
        <span id="feel">{Math.round(weatherData.feels)}℃</span>
        <br />
        <span>Wind: </span>
        <span id="wind">{Math.round(weatherData.wind)}</span>
        km/h
        <br />
        <span>Humidity: </span>
        <span id="humidity">{weatherData.humidity}%</span>
      </p>
    </div>
    </div>
  );
  }else {
    const apiKey = "bde4594240bbd5634acfce653024105f";
    let city = "Tokyo"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }

  
}