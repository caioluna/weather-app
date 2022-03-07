import React from 'react';

import SearchBar from '../SearchBar';
import Weather from '../Weather';
import Map from '../Map';
import Forecast from '../Forecast';

import { Container, Header, Footer } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header>
        <h1>Weather</h1>
      </Header>

      <Container>
        <SearchBar />
        <Weather />

        <Map />

        <Forecast />
      </Container>

      <Footer>
        Powered by&nbsp;
        <a href='https://www.weatherapi.com/' title='Free Weather API'>
          WeatherAPI.com
        </a>
      </Footer>
    </>
  );
}
