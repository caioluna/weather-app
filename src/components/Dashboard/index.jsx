import React from 'react';

import Weather from '../Weather';
import Map from '../Map';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Weather />
      <Map />
    </Container>
  );
}
