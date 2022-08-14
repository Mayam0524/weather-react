import React from "react";

export default function Header() {
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
    </div>
  );
}