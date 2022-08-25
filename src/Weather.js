import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./App.css"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity)
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      feels: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity

    });
  } 

  function search() {
    const apiKey = "bde4594240bbd5634acfce653024105f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
    <div className="Weather">
      <form id="search-form" onSubmit={handleSubmit}>
        <span class="search">
          <input
            type="search"
            id="search-input"
            placeholder="Enter city name..."
            autocomplete="off"
            autofocus="on"
            onChange={handleCityChange}
          />
        </span>
        <input type="submit" value="🔍" id="submit" />
        <button id="current">📍</button>
      </form><br /><br />
      <WeatherInfo data={weatherData}/>
    </div>
  );
  }else {
    search();
    return "Loading...";
  }

  
}