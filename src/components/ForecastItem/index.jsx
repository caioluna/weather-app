import React from 'react';

import { Container, MinMax } from './styles';

export default function ForecastItem({ data }) {
  const weekDay = ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sáb'];

  const date = new Date(data.date).getUTCDay();
  console.log(data);
  return (
    <Container>
      <h3>{weekDay[date]}</h3>
      <img src={data.day.condition.icon} alt='' />
      <div className='minMaxArea'>
        <MinMax>
          <p>min</p>
          {data.day.mintemp_c.toFixed()} °
        </MinMax>
        <MinMax>
          <p>max</p>
          {data.day.maxtemp_c.toFixed()} °
        </MinMax>
      </div>
    </Container>
  );
}
