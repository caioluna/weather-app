import React from 'react';

import SearchBar from '../SearchBar';

import { Container, Data } from './styles';

export default function Weather() {
  return (
    <Container>
      <SearchBar />

      <Data>
        <h2>London</h2>
        <h3>Cloudy</h3>
        <h1>
          29<span>°</span>
        </h1>
      </Data>
    </Container>
  );
}
