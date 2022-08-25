import React, { useState } from "react";
import "./App.css"

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.celsius * 9)/ 5 + 32;
    }

    if(unit === "celsius") {
        return(
            <div className="WeatherTemperature">
                <span class="current-temp">{Math.round(props.celsius)}</span>
                <span className="unit">
                    {" "}℃{" "}|{" "}
                    <a href="/" onClick={showFahrenheit} class="unitLink">
                        °F
                    </a>
                </span>
            </div>
        )
    }else {
        return(
            <div className="WeatherTemperature">
                <span class="current-temp">{Math.round(fahrenheit())}</span>
                <span className="unit">
                    {" "}
                    <a href="/" onClick={showCelsius} class="unitLink">
                        ℃
                    </a>{" "}|{" "}
                    °F
                </span>
        </div>
        )
    }
}
    