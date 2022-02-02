import React, { useEffect, useState, createContext } from 'react';

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [currentCity, setCurrentCity] = useState('Campinas');
  const [currentMarkerLocation, setCurrentMarkerLocation] = useState();
  const [condition, setCondition] = useState();
  const [temperature, setTemperature] = useState();

  const weatherKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${
        currentCity || currentMarkerLocation
      }&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentCity(data.location.name);
        setCondition(data.current.condition.text);
        setTemperature(data.current.temp_c);
        setCurrentMarkerLocation(`${data.location.lat},${data.location.lon}`);
      })
      .catch((error) => console.log(`Erro: ${error}`));
  }, []);

  // useEffect(() => {
  //   fetch(
  //     `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${currentMarkerLocation}&aqi=no`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCurrentCity(data.location.name);
  //       // setCondition(data.current.condition.text);
  //       // setTemperature(data.current.temp_c);
  //       setCurrentMarkerLocation(`${data.location.lat},${data.location.lon}`);
  //     })
  //     .catch((error) => console.log(`Erro: ${error}`));
  // }, [currentMarkerLocation]);

  function getCurrentCity(city) {
    //gets the name typed in the search input
    setCurrentCity(city);
  }

  function getCurrentMarkerLocation(coordinates) {
    //gets the lat/long from the marker in the map
    setCurrentMarkerLocation(coordinates);
    // console.log({ coordinates });
  }
  // console.log(currentCity);
  // console.log({ currentMarkerLocation });

  return (
    <WeatherContext.Provider
      value={{
        city: currentCity,
        condition: condition,
        temperature: temperature,
        getCurrentCity: getCurrentCity,
        getCurrentMarkerLocation: getCurrentMarkerLocation,
        currentMarkerLocation: currentMarkerLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
