import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [icon, setIcon] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function showTemperature(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setWind(response.data.wind.speed);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].main);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    console.log(response.data);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=237d6b594df6d6326579fae6044c4fb7&units=metric`;
  axios.get(url).then(showTemperature);
  if (loaded)
    return (
      <ul>
        <li>Temperature: {Math.round(temperature)} °C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity} %</li>
        <li>Wind: {Math.round(wind)} m/s</li>
        <li>
          <img src={icon} />
        </li>
      </ul>
    );
}
