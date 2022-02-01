import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

import SearchBar from '../SearchBar';

import { Container, Data } from './styles';

export default function Weather() {
  const { city, condition, temperature } = useContext(WeatherContext);

  return (
    <Container>
      <SearchBar />

      <Data>
        <h2>{city}</h2>
        <h3>{condition}</h3>
        <h1>
          {parseInt(Math.round(temperature))}
          <span>°</span>
        </h1>
      </Data>
    </Container>
  );
}
