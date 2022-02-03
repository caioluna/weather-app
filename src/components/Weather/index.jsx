import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

import { Container, Data, Temperature } from './styles';

export default function Weather() {
  const { city, country, weatherCondition, temperature, region, icon } =
    useContext(WeatherContext);

  return (
    <Container>
      <Data>
        <h1>{city}</h1>
        <span>
          {region || 'Região'}/{country || 'País'}
        </span>

        <Temperature>
          <h2>{weatherCondition}</h2>
          <div>
            <img src={icon} alt='' />
            <p>
              {Number(temperature).toFixed()}
              <span>°</span>
            </p>
          </div>
        </Temperature>
      </Data>
    </Container>
  );
}
