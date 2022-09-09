import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=237d6b594df6d6326579fae6044c4fb7&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setLoaded(<Forecast city={city} />);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city.."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <div>{loaded}</div>
    </div>
  );
}
