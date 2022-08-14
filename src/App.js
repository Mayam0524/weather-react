import React from "react";

import Header from "./Header";
import Section from "./Section";
import Other from "./Other";
import Forecast from "./Forecast";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <br /><br />
      <Section />
      <Other />
      <hr />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-2">
            <Forecast date="Mon" maxTemp="20" minTemp="16" />
          </div>
          <div class="col-2">
            <Forecast date="Tue" maxTemp="22" minTemp="20" />
          </div>
          <div class="col-2">
            <Forecast date="Wed" maxTemp="21" minTemp="20" />
          </div>
          <div class="col-2">
            <Forecast date="Thu" maxTemp="19" minTemp="17" />
          </div>
          <div class="col-2">
            <Forecast date="Fri" maxTemp="20" minTemp="17" />
          </div>
          <div class="col-2">
            <Forecast date="Sat" maxTemp="19" minTemp="18" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
