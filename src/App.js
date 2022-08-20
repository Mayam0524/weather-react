import React from "react";
import Header from "./Header";
import Other from "./Other";
import WeekForecast from "./WeekForecast";
import OpenSource from "./OpenSource";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Other />
      <hr />
      <br />
      <WeekForecast />
      <br />
      <OpenSource />
    </div>
  );
}

export default App;
