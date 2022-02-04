import React, { useEffect, useState, createContext } from 'react';
export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [query, setQuery] = useState('Sao Paulo');
  const [weatherData, setWeatherData] = useState();

  const weatherKey = '351f1e2d9281459abdd04757223101';

  function getCurrentCity(city) {
    //gets the name typed in the search input
    setQuery(city);
  }

  function getCurrentMarkerLocation(coordinates) {
    //gets the lat/long from the marker in the map
    setQuery(coordinates);
  }

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${query}&days=7&aqi=no&alerts=no&lang=pt`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.log(`Erro: ${error}`));
  }, [query]);

  return (
    <WeatherContext.Provider
      value={{
        getCurrentCity: getCurrentCity,
        getCurrentMarkerLocation: getCurrentMarkerLocation,
        data: weatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
