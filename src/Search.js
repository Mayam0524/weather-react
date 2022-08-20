import React, { useState } from "react";
import Section from "./Section"

export default function Search() {
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemper
  } 
  const apiKey = "bde4594240bbd5634acfce653024105f";
    let city = "New York"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleRespnse);
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
      <Section />
    </div>
  );
}