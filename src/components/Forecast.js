import React, { useState, useEffect } from "react";
import styles from "./Forecast.module.css";

import axios from "axios";

export default function Forecast() {
  const [city, updateCity] = useState("");
  const [weather, updateWeather] = useState();
  const fetchWeather = async () => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=a869aca555954bbca3d41746222103&q=London&aqi=no`
    );
    console.log(response);
  };

  const [date, setDate] = useState({
    day: "d",
    month: "m",
    year: "y",
  });
  const getCurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const event = new Date(year, month - 1, date);

    return `${event.toDateString()}`;
  };

  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <div className={styles.container}>
      <div>
        <p>{getCurrentDate()}</p>
      </div>
      <div>
        <p>{"Sunshine and Rainbows"}</p>
      </div>
      <div>
        <p>{"75°"}</p>
      </div>
      <div>
        <p>{"Good day ahead"}</p>
      </div>
    </div>
  );
}
