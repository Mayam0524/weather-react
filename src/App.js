import React from "react";
import Search from "./Search";
import WeekForecast from "./WeekForecast";
import OpenSource from "./OpenSource";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search defaultCity="Tokyo"/>
      <hr />
      <br />
      <WeekForecast />
      <br />
      <OpenSource />
    </div>
  );
}

export default App;
