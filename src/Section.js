import React from "react";

export default function Section(props) {
  return (
    <div className="Section">
      <p>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <span class="city">City</span>
              <br />
              <span class="date">Day, Month Date, Year</span>
              <br />
              <span class="time">00:00</span>
              <br />
              <span id="sky">Clear sky</span>
            </div>
            <div class="col-6">
              <span class="temp">
                <img
                  src="https://openweathermap.org/img/wn/01d@2x.png"
                  alt=""
                  width="60"
                  id="icon"
                />
                <span class="current-temp">17℃</span>
              </span>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
}