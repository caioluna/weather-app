import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import ForecastItem from '../ForecastItem';

import { Container } from './styles';

export default function Forecast() {
  const { data } = useContext(WeatherContext);
  return (
    <Container>
      {data &&
        data.forecast.forecastday.map((forecast, index) => (
          <ForecastItem key={index} data={forecast} />
        ))}
    </Container>
  );
}
