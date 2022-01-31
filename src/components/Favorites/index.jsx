import React from 'react';
import LocationItem from '../LocationItem';
import { Container } from './styles';

export default function Favorites() {
  return (
    <Container>
      <LocationItem />
      <LocationItem />
      <LocationItem />
      <LocationItem />
      <LocationItem />
    </Container>
  );
}
