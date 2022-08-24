import React from "react";
import Weather from "./Weather";
import WeekForecast from "./WeekForecast";
import OpenSource from "./OpenSource";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tokyo"/>
      <hr />
      <br />
      <WeekForecast />
      <br />
      <OpenSource />
    </div>
  );
}

export default App;
