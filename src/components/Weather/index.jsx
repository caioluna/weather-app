import React, { useContext, useState } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

import SearchBar from '../SearchBar';

import { Container, Data, Temperature } from './styles';

export default function Weather() {
  const { city, country, weatherCondition, temperature, region } =
    useContext(WeatherContext);

  return (
    <Container>
      <SearchBar />

      <Data>
        <h1>{city}</h1>
        <span>
          {region || 'Região'}/{country || 'País'}
        </span>

        <Temperature>
          {/* <img src={weatherData.current.condition.icon} alt='' /> */}
          <h2>{weatherCondition}</h2>
          <p>
            {Number(temperature).toFixed()}
            <span>°</span>
          </p>
        </Temperature>
      </Data>
    </Container>
  );
}
