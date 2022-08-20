import React from "react";
import Forecast from "./Forecast";

export default function WeekForecast() {
    return (
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
    )
}