import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

import { Container, Data, Temperature } from './styles';

export default function Weather() {
  const { data } = useContext(WeatherContext);

  return (
    <Container>
      {data && (
        <Data>
          <h1>{data.location.name}</h1>
          <span>
            {data.location.region || 'Região'}/{data.location.country || 'País'}
          </span>

          <Temperature>
            <h2>{data.current.condition.text}</h2>
            <div>
              <img src={data.current.condition.icon} alt='' />
              <p>
                {Number(data.current.temp_c).toFixed()}
                <span>°</span>
              </p>
            </div>
          </Temperature>
        </Data>
      )}
    </Container>
  );
}
