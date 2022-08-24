import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import "./App.css"
export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="Section">
                <p>
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <ul>
                                    <li class="city">
                                        {props.data.city}
                                    </li>
                                    <li class="date">
                                        <FormattedDate date={props.data.date} />
                                    </li>
                                    <li  class="time">
                                        <FormattedTime time={props.data.time} />
                                    </li>
                                    <li id="sky">
                                        {props.data.description}
                                    </li>
                                </ul>
                            </div>
                            <div class="col-6">
                                <span class="temp">
                                    <img
                                        src={props.data.iconUrl}
                                        alt={props.data.description}
                                        width="60"
                                        id="icon"
                                    />
                                    <span class="current-temp">{Math.round(props.data.temperature)}℃</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
            <div className="Other">
                <p>
                    <span>Feels like: </span>
                    <span id="feel">{Math.round(props.data.feels)}℃</span>
                    <br />
                    <span>Wind: </span>
                    <span id="wind">{Math.round(props.data.wind)}</span>
                    km/h
                    <br />
                    <span>Humidity: </span>
                    <span id="humidity">{props.data.humidity}%</span>
                </p>
            </div>
        </div>
    )
}