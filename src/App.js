import React from "react";
import Weather from "./Weather";
import OpenSource from "./OpenSource";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tokyo"/>
      <hr />
      <br />
      <br />
      <OpenSource />
    </div>
  );
}

export default App;
