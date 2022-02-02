import React, { useEffect, useState, createContext } from 'react';

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [currentCity, setCurrentCity] = useState('Cidade');
  const [currentRegion, setCurrentRegion] = useState();
  const [currentCountry, setCurrentCountry] = useState();
  const [weatherCondition, setWeatherCondition] = useState();
  const [temperature, setTemperature] = useState();
  const [query, setQuery] = useState();

  const weatherKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${query}&aqi=no&lang=pt`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentCity(data.location.name);
        setCurrentRegion(data.location.region);
        setCurrentCountry(data.location.country);
        setWeatherCondition(data.current.condition.text);
        setTemperature(data.current.temp_c);
      })
      .catch((error) => console.log(`Erro: ${error}`));
  }, [query]);

  function getCurrentCity(city) {
    //gets the name typed in the search input
    setQuery(city);
  }

  function getCurrentMarkerLocation(coordinates) {
    //gets the lat/long from the marker in the map
    setQuery(coordinates);
  }

  return (
    <WeatherContext.Provider
      value={{
        city: currentCity,
        region: currentRegion,
        country: currentCountry,
        weatherCondition: weatherCondition,
        temperature: temperature,
        getCurrentCity: getCurrentCity,
        getCurrentMarkerLocation: getCurrentMarkerLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
