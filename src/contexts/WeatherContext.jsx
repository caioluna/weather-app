import React, { useEffect, useState, createContext } from 'react';
export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [query, setQuery] = useState('Sao Paulo');
  const [weatherData, setWeatherData] = useState();
  // const [forecastData, setForecastData] = useState([]);
  // const [currentCity, setCurrentCity] = useState();
  // const [currentRegion, setCurrentRegion] = useState();
  // const [currentCountry, setCurrentCountry] = useState();
  // const [weatherCondition, setWeatherCondition] = useState();
  // const [conditionIcon, setConditionIcon] = useState();
  // const [temperature, setTemperature] = useState();

  const weatherKey = import.meta.env.VITE_WEATHER_API_KEY;

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
        // setForecastData(data);
        // setCurrentCity(data.location.name);
        // setCurrentRegion(data.location.region);
        // setCurrentCountry(data.location.country);
        // setWeatherCondition(data.current.condition.text);
        // setConditionIcon(data.current.condition.icon);
        // setTemperature(data.current.temp_c);
      })
      .catch((error) => console.log(`Erro: ${error}`));
  }, [query]);

  return (
    <WeatherContext.Provider
      value={{
        // city: currentCity,
        // region: currentRegion,
        // country: currentCountry,
        // weatherCondition: weatherCondition,
        // temperature: temperature,
        // icon: conditionIcon,
        getCurrentCity: getCurrentCity,
        getCurrentMarkerLocation: getCurrentMarkerLocation,
        data: weatherData,
        // forecast: forecastData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
