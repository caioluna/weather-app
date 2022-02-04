import React from 'react';

import { Container, MinMax } from './styles';

export default function ForecastItem({ data }) {
  const weekDay = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const date = new Date(data.date).getUTCDay();

  return (
    <Container>
      <h3>{weekDay[date]}</h3>
      <MinMax>
        <div>
          <span>
            {data.day.mintemp_c.toFixed()} <span>°C</span>{' '}
          </span>
          <p>min</p>
        </div>
        <div>
          <span>
            {data.day.maxtemp_c.toFixed()} <span>°C</span>
          </span>
          <p>max</p>
        </div>
      </MinMax>
      <span className='image'>
        <img src={data.day.condition.icon} alt='' />
      </span>
    </Container>
  );
}
